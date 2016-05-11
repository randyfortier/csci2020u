import java.io.*;
import java.util.*;

public class WordCounter {
    private Map<String,Integer> wordCounts;
    
    public WordCounter() {
        wordCounts = new TreeMap<>();
    }
    
    public void processFile(File file) throws IOException {
        if (file.isDirectory()) {
            // process all of the files recursively
            File[] filesInDir = file.listFiles();
            for (int i = 0; i < filesInDir.length; i++) {
                processFile(filesInDir[i]);
            }
        } else if (file.exists()) {
            // load all of the data, and process it into words
            Scanner scanner = new Scanner(file);
            while (scanner.hasNext()) {
                String word = scanner.next();
                if (isWord(word)) {
                    countWord(word);
                }
            }
        }
    }
    
    private void countWord(String word) {
        if (wordCounts.containsKey(word)) {
            int oldCount = wordCounts.get(word);
            wordCounts.put(word, oldCount + 1);
        } else {
            wordCounts.put(word, 1);
        }
    }
    
    private boolean isWord(String str){
        String pattern = "^[a-zA-Z]*$";
        if (str.matches(pattern)){
            return true;
        }
        return false;   
    }
    
    public void printWordCounts(int minCount, File outputFile) throws FileNotFoundException {
        System.out.println("Saving word counts to " + outputFile.getAbsolutePath());
        if (!outputFile.exists() || outputFile.canWrite()) {
            PrintWriter fout = new PrintWriter(outputFile);
                        
            Set<String> keys = wordCounts.keySet();
            Iterator<String> keyIterator = keys.iterator();
            
            while(keyIterator.hasNext()) {
                String key = keyIterator.next();
                int count = wordCounts.get(key);
                
                if (count >= minCount) {
                    //System.out.println(key + ": " + count);
                    fout.println(key + ": " + count);
                }
            }
            fout.close();
        } else {
            System.err.println("Cannot write to output file");
        }
    }
    
    public static void main(String[] args) {
        if (args.length < 2) {
            System.err.println("Usage:  java WordCounter <dir> <outputFile>");
            System.exit(0);
        }
        
        WordCounter wordCounter = new WordCounter();
        File dataDir = new File(args[0]);
        System.out.println("File: " + dataDir);

        try {
            wordCounter.processFile(dataDir);
            wordCounter.printWordCounts(2, new File(args[1]));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}