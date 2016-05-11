package socketDemo;

import java.io.*;
import java.net.*;
import java.util.Date;

public class ClientHandler implements Runnable {
    private Socket clientSocket = null;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    public void run() {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(
                    this.clientSocket.getInputStream()
                                     )
            );

            String line = null;
            String filename = null;
            while ((line = in.readLine()) != null) {
                String[] httpParts = line.split(" ");
                if (httpParts.equals("/")) {
                    filename = "www/index.html";
                } else {
                    filename = "www" + httpParts[1];
                }
                System.out.println("Filename: " + filename);
                break;
            }

            // copy the data from the file to the socket
            FileInputStream fileIn = new FileInputStream(filename);
            OutputStream out = this.clientSocket.getOutputStream();
            writeHeaders(filename, out);
            copyAllBytes(fileIn, out);

            // close everything down
            fileIn.close();
            in.close();
            out.close();
            this.clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void writeHeaders(String filename, OutputStream outputStream) 
                                                throws IOException {
        PrintWriter out = new PrintWriter(outputStream);
        File file = new File(filename);
        
        if (file.exists()) {
            out.print("HTTP/1.1 200 OK\r\n");
            if (filename.endsWith(".html")) {
                out.print("Content-Type: text/html\r\n");
            } else {
                out.print("Content-Type: text/plain\r\n"); // default
            }
        } else {
            out.println("HTTP/1.1 404 Not Found\r\n");
        }
        out.print("Date: " + (new Date()).toString() + "\r\n");
        out.flush();
    }
    
    private void copyAllBytes(InputStream in, OutputStream out) 
                                               throws IOException {
        byte[] buffer = new byte[1024];
        int numBytes = -1;
        while ((numBytes = in.read(buffer)) > 0) {
            out.write(buffer);
        }
    }
}