import java.io.*;
import java.net.*;

public class WebBrowser {
    private String hostname = null;
    private int port = 0;
    
    public WebBrowser(String hostname, int port) {
        this.hostname = hostname;
        this.port = port;
    }
    
    public void submitQuery(String uri) {
        try {
            Socket socket = new Socket(this.hostname, this.port);
            PrintWriter out = new PrintWriter(socket.getOutputStream());
            
            out.print("GET " + uri + " HTTP/1.0\r\n");
            out.print("User-Agent: RandyBrowser v1.0\r\n");
            out.print("Host: " + this.hostname + "\r\n\r\n");
            out.flush();
            
            // handle the response
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(">>" + line);
            }
            
            out.close();
            in.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        WebBrowser browser = new WebBrowser("localhost", 8080);
        browser.submitQuery("/index.html");
    }
}