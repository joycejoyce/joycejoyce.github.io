import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;

public class WebPageGenerator {
	
	private final static Logger logger = Logger.getLogger(WebPageGenerator.class);
	private static String timeStamp = null;
	private final static String FILE_NAME_DATE_AND_NUMBER = "DateAndNumber.txt";
	private final static String FILE_NAME_DATE_AND_NUMBER_TITLE = "DateAndNumber_title.txt";
	private final static String FILE_NAME_DATE_AND_NUMBER_ARTICLE_TYPE = "DateAndNumber_article_type.txt";
	
	public static void main(String[] args) {
		MyProperties myProp = getMyProperties();
		timeStamp = getCurTime();
		logger.info("timeStamp = " + timeStamp);
		switch(myProp.mode) {
			case 1:
				logger.info("Mode = GetInfo");
				mode_GetInfo(myProp);
				break;
			case 2:
				logger.info("Mode = SetTitle");
				//mode_SetTitle(myProp);
				break;
			case 3:
				logger.info("Mode = GenWebPages");
				//mode_GenWebPages(myProp);
				break;
			default:
				logger.error("Invalid mode (should be 1~3)");
				break;
		}
	}
	
	private static String getCurTime() {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss");
		Date date = new Date();
		return formatter.format(date);
	}

	private static void mode_GetInfo(MyProperties myProp) {
		logger.info("<< Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		//1. Create directory "Info_$TimeStamp" (Info_20191020_134301)
		String dir_Info = myProp.dir_Info.replaceAll("\\$TimeStamp", timeStamp);
		new File(dir_Info).mkdirs();
		
		//2. Generate DateAndNumber.txt
		if(!genDateAndNumberTxt(myProp, dir_Info)) {
			logger.error("Errors occurred in genDateAndNumberTxt()");
			return;
		}

		//3. Set path of files
		String dateAndNumberAbsPath = dir_Info + "\\" + FILE_NAME_DATE_AND_NUMBER;
		String titleTxtAbsPath = dir_Info + "\\" + FILE_NAME_DATE_AND_NUMBER_TITLE;
		String articleTypeTxtAbsPath = dir_Info + "\\" + FILE_NAME_DATE_AND_NUMBER_ARTICLE_TYPE;
		
		//4. Copy DateAndNumber.txt to DateAndNumber_title.txt & DateAndNumber_article_type.txt
		try {
			FileUtils.copyFile(new File(dateAndNumberAbsPath), new File(titleTxtAbsPath));
			FileUtils.copyFile(new File(dateAndNumberAbsPath), new File(articleTypeTxtAbsPath));
			logger.info("copy files successfully");
		} catch (IOException e) {
			e.printStackTrace();
			logger.error("Errors occurred in copyFile()");
			return;
		}
		
		//5. Generate DateAndNumber_article_type.txt
		String dir_resources = myProp.dir_LINE + "\\" + myProp.YearAndMonth;
		HashMap<String,String> articleTypeOfDateAndNumber = new HashMap<String,String>();
		if(!getArticleType(dir_resources, articleTypeTxtAbsPath, articleTypeOfDateAndNumber)) {
			logger.error("Errors occurred in getArticleType()");
			return;
		}
		
		logger.info(">> Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
	}

	private static boolean getArticleType(String dir_resources, String articleTypeTxtAbsPath, HashMap<String, String> articleTypeOfDateAndNumber) {
		logger.info("<< Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(articleTypeTxtAbsPath));
			String line = reader.readLine();
			while(line != null) {
				logger.debug("line = [" + line + "]");

				//1. 
				
				line = reader.readLine();
			}
			reader.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			logger.error("Errors occurred in reading " + articleTypeTxtAbsPath);
			return false;
		} catch (IOException e) {
			e.printStackTrace();
			logger.error("Errors occurred in readLine()");
			return false;
		}
		
		logger.info(">> Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return true;
	}

	private static boolean genDateAndNumberTxt(MyProperties myProp, String dir_Info) {
		logger.info("<< Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		//1. Check if dir_LINE_YearAndMonth exists
		String dir_LINE_YearAndMonth = myProp.dir_LINE + "\\" + myProp.YearAndMonth;
		logger.info("Check if dir_LINE_YearAndMonth = [" + dir_LINE_YearAndMonth + "] exists...");
		if(Files.notExists(Paths.get(dir_LINE_YearAndMonth))) {
			logger.error("Not exists");
			return false;
		}
		logger.info("Exists");
		
		//2. Organize each directory of the month (put files that aren't in a folder into a folder)
		if(!organizeDirsInAMonth(myProp, dir_LINE_YearAndMonth)) {
			logger.error("Errors occurred in organizeDirsInAMonth()");
			return false;
		}

		//3. Get target directories
		ArrayList<String> listOfTargetDir = new ArrayList<String>();
		if(!getTargetDirs(myProp.dir_LINE, myProp.YearAndMonth, myProp.DateAndNumber, listOfTargetDir)) {
			logger.error("Errors occurred in getTargetDirs()");
			return false;
		}
		
		//4. Generate file DateAndNumber.txt in dir Info_$TimeStamp
		ArrayList<String> listOfDateAndNumber = new ArrayList<String>();
		for(String s : listOfTargetDir) {
			String[] parts = s.split("\\\\"); //Note: it means to split s by a single backslash
			String dateAndNr = parts[parts.length-2] + "_" + parts[parts.length-1] + "=";
			logger.debug("dateAndNr = [" + dateAndNr + "]");
			listOfDateAndNumber.add(dateAndNr);
		}
		Path dateAndNumberFile = Paths.get(dir_Info  + "\\" + FILE_NAME_DATE_AND_NUMBER);
		try {
			Files.write(dateAndNumberFile, listOfDateAndNumber, StandardCharsets.UTF_8);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		logger.info(">> Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return true;
	}

	private static boolean organizeDirsInAMonth(MyProperties myProp, String dir_LINE_YearAndMonth) {
		logger.info(">> Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		File[] dirsInAMonth = new File(dir_LINE_YearAndMonth).listFiles();
		logger.info("Dirs in a month(" + myProp.YearAndMonth.replaceAll("_", "") + ")...");
		//Loop dirs in a month
		for(File dir_Day : dirsInAMonth) {
			logger.info("\tDirs in a day(" + dir_Day.getName() + ")...");
			File[] dirsInADay = dir_Day.listFiles();
			ArrayList<File> filesOutsideDir = new ArrayList<File>();
			//Loop dirs in a day
			for(File dir_Nr : dirsInADay) {
				if(dir_Nr.isDirectory()) {
					logger.info("\t\t(" + dir_Nr.getName() + ")");
				}
				else {
					if(!dir_Nr.getName().equals("Thumbs.db")) {
						filesOutsideDir.add(dir_Nr);
					}
				}
			}
			logger.info("\t\tfilesOutsideDir.size() = " + filesOutsideDir.size());
			if(filesOutsideDir.size() > 0) {
				if(!putFilesIntoDir(filesOutsideDir, dir_Day)) {
					logger.error("Errors occurred in putFilesIntoDir()");
					return false;
				}
			}
		}
		
		logger.info("<< Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return true;
	}
	
	private static boolean getTargetDirs(String rootDir, String yearAndMonth, String dateAndNumber, ArrayList<String> listOfTargetDirs) {
		logger.info(">> Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());

		String prefix = rootDir + "\\" + yearAndMonth + "\\" ; //$dir_LINE\2019_07\
		logger.info("prefix = [" + prefix + "]");
		if(dateAndNumber.toLowerCase().equals("all")) {
			File[] dayDirs = new File(prefix).listFiles();
			for(File dayDir : dayDirs) {
				if(dayDir.isDirectory()) {
					File[] nrDirs = new File(dayDir.getAbsolutePath()).listFiles();
					for(File nrDir : nrDirs) {
						if(nrDir.isDirectory()) {
							listOfTargetDirs.add(nrDir.getAbsolutePath());
						}
					}
				}
			}
		}
		else {
			String[] partsOfDateAndNumber = dateAndNumber.split(",");
			for(String dateAndNr : partsOfDateAndNumber) {
				//logger.info("dateAndNr = [" + dateAndNr + "]");
				String[] partsOfDateAndNr = dateAndNr.split("_");
				if(partsOfDateAndNr.length == 1) { //"05" = all Nr of 20190705
					String dateDir = prefix + yearAndMonth.replaceAll("_", "") + partsOfDateAndNr[0] + "\\";
					//logger.info("parentDir = [" + parentDir + "]");
					File[] nrDirs = new File(dateDir).listFiles();
					for(File nrDir : nrDirs) {
						if(nrDir.isDirectory()) {
							listOfTargetDirs.add(nrDir.getAbsolutePath());
						}
					}
				}
				else if(partsOfDateAndNr.length == 2) { //"05_1" = Nr #1 of 20190705
					listOfTargetDirs.add(prefix + yearAndMonth.replaceAll("_", "") + partsOfDateAndNr[0] + "\\" + partsOfDateAndNr[1]);					
				}
				else {
					logger.error("Invalid format of property DateAndNumber: [" + dateAndNumber + "]");
					return false;
				}
			}
		}
		
		Collections.sort(listOfTargetDirs);
		logger.info("listOfTargetDirs:");
		for(String targetDir : listOfTargetDirs) {
			logger.info(targetDir);
		}
		
		logger.info("<< Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return true;
	}

	private static boolean putFilesIntoDir(ArrayList<File> files, File dir) {
		logger.info(">> Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		logger.info("dir = " + dir.getAbsolutePath());
		File[] subDirs = dir.listFiles();
		int i = 1;
		boolean alreadyExists = false;
		while(true) {
			alreadyExists = false;
			for(File subDir : subDirs) {
				if(subDir.isDirectory() && subDir.getName().equals(Integer.toString(i)) && subDir.listFiles().length > 0) {
					alreadyExists = true;
					break;
				}
			}
			if(alreadyExists) {
				i ++;
			}
			else {
				String newDir = dir.getAbsolutePath() + "\\" + Integer.toString(i);
				logger.info("newDir =  " + newDir);
				new File(newDir).mkdirs();
				try {
					for(File file : files) {
						Path result = Files.move
						    (Paths.get(file.getAbsolutePath()),
						    Paths.get(newDir + "\\" + file.getName()));
						if(result != null) { 
							logger.info("Move file [" + file.getName() + "] successfully");
				        }
				        else { 
				        	logger.error("Move file [" + file.getName() + "] failed");
				        	return false;
				        }
					}
				} catch (IOException e) {
					e.printStackTrace();
				}
				break;
			}
		}
		
		logger.info(">> Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return true;
	}

	private static MyProperties getMyProperties() {		
		logger.info("<< Enter func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		
		MyProperties myProp = new MyProperties();
		Properties prop = new Properties();
        try {
			prop.load(WebPageGenerator.class.getClassLoader().getResourceAsStream("GeneratorSettings.properties"));
			myProp.mode = Integer.parseInt(prop.getProperty("mode"));
			myProp.dir_LINE = prop.getProperty("dir_LINE");
			myProp.dir_Info = prop.getProperty("dir_Info");
			myProp.dir_WebPages = prop.getProperty("dir_WebPages");
			myProp.dir_WebPageTemplates = prop.getProperty("dir_WebPageTemplates");
			myProp.YearAndMonth = prop.getProperty("YearAndMonth");
			myProp.DateAndNumber = prop.getProperty("DateAndNumber");
			logger.info(myProp.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}

        logger.info(">> Exit func " + Thread.currentThread().getStackTrace()[1].getMethodName());
		return myProp;
	}

}
