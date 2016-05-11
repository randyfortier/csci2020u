import java.io.*;
import java.net.*;

public class ClientHandler implements Runnable {
    private Socket socket = null;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    public void run() {
        try {
            InputStream is = socket.getInputStream();
            InputStreamReader isr = 
                      new InputStreamReader(is);
            BufferedReader in = new BufferedReader(isr);
            
            OutputStream os = socket.getOutputStream();
            PrintWriter out = new PrintWriter(os);
            
            // handle the request data
            String requestLine = in.readLine();
            String[] httpCommand = requestLine.split(" ");
            if (!httpCommand[0].equalsIgnoreCase("GET")) {
                out.print("HTTP/1.0 405 Method not supported\r\n");
            } else {
                // return the response
                out.print("HTTP/1.0 200 OK\r\n");
                
                while ((requestLine = in.readLine()) != null) {
                    System.out.println(requestLine);
                }
                
                // load and send the file data
                String fn = httpCommand[1];
                FileInputStream fis = new FileInputStream(fn);
                isr = new InputStreamReader(fis);
                BufferedReader fin = new BufferedReader(isr);
                
                String fileLine = null;
                while ((fileLine = fin.readLine()) != null) {
                    out.println(fileLine);
                }
            }
            
            out.flush();
            socket.close();            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}