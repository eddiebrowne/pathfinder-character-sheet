package SeleniumTests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FFDriver {
	
	private WebDriver _driver;
	private String _url = "~/Pathfinder/View/CharacterSheet.html";
	
	public FFDriver(){
		_driver = new FirefoxDriver();		
		_driver.navigate().to(_url);
	}
	
	public WebDriver Driver(){
		return _driver;
	}
}
