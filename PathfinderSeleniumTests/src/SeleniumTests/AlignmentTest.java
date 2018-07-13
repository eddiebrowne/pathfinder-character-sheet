package SeleniumTests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AlignmentTest {
	private WebDriver _driver = new FFDriver().Driver();
	
	private WebElement _alignmentLG;
	private WebElement _alignmentLN;
	private WebElement _alignmentLE;
	private WebElement _alignmentNG;
	private WebElement _alignmentNN;
	private WebElement _alignmentNE;
	private WebElement _alignmentCG;
	private WebElement _alignmentCN;
	private WebElement _alignmentCE;
	
	@Before
	public void Setup(){
		_alignmentLG = _driver.findElement(By.id("alignmentLG"));
		_alignmentLN = _driver.findElement(By.id("alignmentLN"));
		_alignmentLE = _driver.findElement(By.id("alignmentLE"));
		_alignmentNG = _driver.findElement(By.id("alignmentNG"));
		_alignmentNN = _driver.findElement(By.id("alignmentNN"));
		_alignmentNE = _driver.findElement(By.id("alignmentNE"));
		_alignmentCG = _driver.findElement(By.id("alignmentCG"));
		_alignmentCN = _driver.findElement(By.id("alignmentCN"));
		_alignmentCE = _driver.findElement(By.id("alignmentCE"));		
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
		
		assertTrue(didBarbarianPass);
		assertTrue(didDruidPass);
		assertTrue(didMonkPass);
		assertTrue(didPaladinPass);		
	}
	
	private boolean BarbarianAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("barbarianClass"));
		
		// Act
		selection.click();
						
		// Assert
		boolean areAlignmentsDisabled = 
				!_alignmentLG.isEnabled() &&
				!_alignmentLN.isEnabled() &&
				!_alignmentLE.isEnabled();
		
		return areAlignmentsDisabled;
	}
	
	private boolean DruidAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("druidClass"));
		
		// Act
		selection.click();
		
				
		// Assert
		boolean areAlignmentsDisabled = 
				!_alignmentLG.isEnabled() &&
				!_alignmentLE.isEnabled() &&
				!_alignmentCG.isEnabled() &&
				!_alignmentCE.isEnabled();				
		
		return areAlignmentsDisabled;
	}
	
	private boolean MonkAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("monkClass"));
		
		// Act
		selection.click();		
						
		// Assert
		boolean areAlignmentsDisabled =
				!_alignmentNG.isEnabled() &&
				!_alignmentNN.isEnabled() &&
				!_alignmentNE.isEnabled() &&
				!_alignmentCG.isEnabled() &&
				!_alignmentCN.isEnabled() &&
				!_alignmentCE.isEnabled();				
		
		return areAlignmentsDisabled;
	}
	
	private boolean PaladinAlignmentTest(WebElement classList){
		// Arrange
		classList.click();
		WebElement selection = _driver.findElement(By.id("paladinClass"));
		
		// Act
		selection.click();			
				
		// Assert
		boolean areAlignmentsDisabled = 
				!_alignmentLN.isEnabled() &&
				!_alignmentLE.isEnabled() &&
				!_alignmentNG.isEnabled() &&
				!_alignmentNN.isEnabled() &&
				!_alignmentNE.isEnabled() &&
				!_alignmentCG.isEnabled() &&
				!_alignmentCN.isEnabled() &&
				!_alignmentCE.isEnabled();
				
		return _alignmentLG.isSelected() && areAlignmentsDisabled;
	}
}
