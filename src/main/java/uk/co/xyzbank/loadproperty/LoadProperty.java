package uk.co.xyzbank.loadproperty;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/* Created
 * by Lamee */
public class LoadProperty {
    String projectPath = System.getProperty("user.dir");

    static Properties prop;
    static FileInputStream input;

    public String getProperty(String key){
        prop = new Properties();

        try {
            input = new FileInputStream(projectPath + "\\src\\test\\java\\uk\\co\\xyzbank\\resources\\propertiesfile\\config.properties");
            prop.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }


}

