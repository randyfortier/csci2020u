package socketDemo;

import java.io.*;
import java.net.*;

public final class WebServer {
    private ServerSocket serverSocket = null;
    
    public WebServer(int port) {
        try {
            serverSocket = new ServerSocket(port);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public void handleRequests() {
        System.out.println("WebServer v1.0 Listening");
        try {
            Socket clientSocket = serverSocket.accept();
            ClientHandler clientHandler = new ClientHandler(clientSocket);
            Thread clientThread = new Thread(clientHandler);
            clientThread.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
        
    public static void main(String[] args) {
        WebServer webServer = new WebServer(8080);
        webServer.handleRequests();
    }
}