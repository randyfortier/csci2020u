package sample;

import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.input.MouseEvent;

public class Controller {
    @FXML private TextField usernameField;
    @FXML private PasswordField password1Field;
    @FXML private PasswordField password2Field;
    @FXML private TextField emailField;

    @FXML private TreeView<String> projectTreeView;
    @FXML private TextArea editor;

    // the initialize method is automatically invoked by the FXMLLoader - it's magic
    public void initialize() {
        TreeItem<String> rootItem = new TreeItem<>("Project");
        rootItem.setExpanded(true);

        TreeItem<String> src = new TreeItem<>("src");
        src.setExpanded(true);
        rootItem.getChildren().add(src);

        TreeItem<String> main = new TreeItem<>("main");
        main.setExpanded(true);
        src.getChildren().add(main);

        TreeItem<String> java = new TreeItem<>("java");
        java.setExpanded(true);
        main.getChildren().add(java);

        TreeItem<String> helloWorld = new TreeItem<>("HelloWorld.java");
        java.getChildren().add(helloWorld);

        TreeItem<String> gradle = new TreeItem<>("build.gradle");
        rootItem.getChildren().add(gradle);

        projectTreeView.setRoot(rootItem);
        projectTreeView.getSelectionModel().selectedItemProperty().addListener(new ChangeListener() {

            @Override
            public void changed(ObservableValue observable, Object oldValue, Object newValue) {
                TreeItem<String> selectedItem = (TreeItem<String>)newValue;
                if (selectedItem.getValue().equals("HelloWorld.java")) {
                    editor.setText("public class HelloWorld {\n"+
                            "    public static void main(String[] args) {\n"+
                            "        System.out.println(\"Hello, world!\");"+
                            "    }\n"+
                            "}\n");
                } else if (selectedItem.getValue().equals("build.gradle")) {
                    editor.setText("apply plugin: 'java'");
                }
            }

        });
    }

    public void register(ActionEvent e) {
        String username = usernameField.getText();
        String password1 = password1Field.getText();
        String password2 = password2Field.getText();
        String email = emailField.getText();

        // do something with this data

        System.out.println("Register:");
        System.out.println("\tUsername:   " + username);
        System.out.println("\tPassword1:  " + password1);
        System.out.println("\tPassword2:  " + password2);
        System.out.println("\tE-Mail:     " + email);
    }
}
