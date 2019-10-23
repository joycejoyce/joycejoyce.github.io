
public class MyProperties {
	int mode;
	String dir_LINE;
	String dir_Info;
	String dir_WebPages;
	String dir_WebPageTemplates;
	String YearAndMonth;
	String DateAndNumber;
	
	public String toString() {
		return "MyProperties:\n"
				+ "(prop)mode = [" + mode + "]\n"
				+ "(prop)dir_LINE = [" + dir_LINE + "]\n"
				+ "(prop)dir_Info = [" + dir_Info + "]\n"
				+ "(prop)dir_WebPages = [" + dir_WebPages + "]\n"
				+ "(prop)dir_WebPageTemplates = [" + dir_WebPageTemplates + "]\n"
				+ "(prop)YearAndMonth = [" + YearAndMonth + "]\n"
				+ "(prop)DateAndNumber = [" + DateAndNumber + "]\n";
	}
}
