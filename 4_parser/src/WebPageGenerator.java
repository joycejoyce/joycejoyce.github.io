import java.util.Properties;

public class WebPageGenerator {
	
	private static final String PROPERTIES_FILE_NAME = "WebPageGenerator.properties";
	private static final String PROPERTIES_DATE_AND_TITLE = "DateAndTitle"; //20190101_ด๚ธี

	public static void main(String[] args) {
		Properties p = readProperties(PROPERTIES_FILE_NAME);
		String articleType = getArticleType(p);
		String htmlFilePath = getOutputHTMLAbsPath(articleType);
		autoGenHtml(p, articleType, htmlFilePath);
	}

}
