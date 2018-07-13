package SeleniumTests;

import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CharacterInfoTest {
	
	WebDriver _driver;
	
	@Before
	public void Setup(){
		_driver = new FirefoxDriver();
		String url = "file:///home/mooswee/Desktop/Pathfinder/View/CharacterSheet.html";
		_driver.navigate().to(url);
	}
	
	@After
	public void Teardown(){
		_driver.close();
	}
	
	@Test
	public void AlignmentTests(){
		WebElement classList = _driver.findElement(By.id("characterClassList"));
		
		boolean didBarbarianPass = BarbarianAlignmentTest(classList);
		boolean didDruidPass = DruidAlignmentTest(classList);
		boolean didMonkPass = MonkAlignmentTest(classList);
		boolean didPaladinPass = PaladinAlignmentTest(classList);
		
		assertTrue(didBarbarianPass && didDruidPass && didMonkPass && didPaladinPass);		
	}
	
	private boolean BarbarianAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("barbarianClass"));
		
		// Act
		selection.click();
		WebElement alignmentLG = _driver.findElement(By.id("alignmentLG"));
		WebElement alignmentLN = _driver.findElement(By.id("alignmentLN"));
		WebElement alignmentLE = _driver.findElement(By.id("alignmentLE"));		
		
				
		// Assert
		boolean areAlignmentsDisabled = 
				!alignmentLG.isEnabled() &&
				!alignmentLN.isEnabled() &&
				!alignmentLE.isEnabled();
				
		
		return areAlignmentsDisabled;
	}
	
	private boolean DruidAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("druidClass"));
		
		// Act
		selection.click();
		WebElement alignmentLG = _driver.findElement(By.id("alignmentLG"));		
		WebElement alignmentLE = _driver.findElement(By.id("alignmentLE"));
		WebElement alignmentCG = _driver.findElement(By.id("alignmentCG"));
		WebElement alignmentCE = _driver.findElement(By.id("alignmentCE"));		
		
				
		// Assert
		boolean areAlignmentsDisabled = 
				!alignmentLG.isEnabled() &&
				!alignmentLE.isEnabled() &&
				!alignmentCG.isEnabled() &&
				!alignmentCE.isEnabled();				
		
		return areAlignmentsDisabled;
	}
	
	private boolean MonkAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("monkClass"));
		
		// Act
		selection.click();		
		WebElement alignmentNG = _driver.findElement(By.id("alignmentNG"));
		WebElement alignmentNN = _driver.findElement(By.id("alignmentNN"));
		WebElement alignmentNE = _driver.findElement(By.id("alignmentNE"));
		WebElement alignmentCG = _driver.findElement(By.id("alignmentCG"));
		WebElement alignmentCN = _driver.findElement(By.id("alignmentCN"));
		WebElement alignmentCE = _driver.findElement(By.id("alignmentCE"));
		
				
		// Assert
		boolean areAlignmentsDisabled =
				!alignmentNG.isEnabled() &&
				!alignmentNN.isEnabled() &&
				!alignmentNE.isEnabled() &&
				!alignmentCG.isEnabled() &&
				!alignmentCN.isEnabled() &&
				!alignmentCE.isEnabled();				
		
		return areAlignmentsDisabled;
	}
	
	private boolean PaladinAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("paladinClass"));
		
		// Act
		selection.click();
		WebElement alignmentLG = _driver.findElement(By.id("alignmentLG"));
		WebElement alignmentLN = _driver.findElement(By.id("alignmentLN"));
		WebElement alignmentLE = _driver.findElement(By.id("alignmentLE"));
		WebElement alignmentNG = _driver.findElement(By.id("alignmentNG"));
		WebElement alignmentNN = _driver.findElement(By.id("alignmentNN"));
		WebElement alignmentNE = _driver.findElement(By.id("alignmentNE"));
		WebElement alignmentCG = _driver.findElement(By.id("alignmentCG"));
		WebElement alignmentCN = _driver.findElement(By.id("alignmentCN"));
		WebElement alignmentCE = _driver.findElement(By.id("alignmentCE"));
		
				
		// Assert
		boolean areAlignmentsDisabled = 
				!alignmentLN.isEnabled() &&
				!alignmentLE.isEnabled() &&
				!alignmentNG.isEnabled() &&
				!alignmentNN.isEnabled() &&
				!alignmentNE.isEnabled() &&
				!alignmentCG.isEnabled() &&
				!alignmentCN.isEnabled() &&
				!alignmentCE.isEnabled();
				
		
		return alignmentLG.isSelected() && areAlignmentsDisabled;
	}
}
