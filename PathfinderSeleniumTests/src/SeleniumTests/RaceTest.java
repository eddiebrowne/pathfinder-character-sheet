package SeleniumTests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RaceTest {
	
	/*
	 * Gnomes and halflings should be size 'small'
	 * Every other race should be size 'medium'
	 * 
	 * The following races have specific ability score adjustments
	 * 
	 * 
	 * 
	 * */
	
	private WebDriver _driver = new FFDriver().Driver();
	private WebElement _raceSelect = _driver.findElement(By.id("characterRace"));
	private WebElement _size = _driver.findElement(By.id("characterSize"));
	private WebElement _str = _driver.findElement(By.id("strScore"));
	private WebElement _dex = _driver.findElement(By.id("dexScore"));
	private WebElement _con = _driver.findElement(By.id("conScore"));
	private WebElement _int = _driver.findElement(By.id("intScore"));
	private WebElement _wis = _driver.findElement(By.id("wisScore"));
	private WebElement _cha = _driver.findElement(By.id("chaScore"));
	
	@After
	public void TearDown(){
		_driver.close();		
	}
	
	@Test
	public void DwarfTest(){
		// size: medium
		// stats: +2 Constitution, +2 Wisdom, –2 Charisma:		
		
		// Arrange
		String expectedCon = "12";
		String expectedWis = "12";
		String expectedCha = "8";

		String expectedSize = "Medium";
		_raceSelect.click();
		WebElement dwarf = _raceSelect.findElement(By.id("dwarfRace"));		

		// Act
		dwarf.click();
		
		// Assert		
		String actualCon = _con.getAttribute("value");
		String actualWis = _wis.getAttribute("value");
		String actualCha = _cha.getAttribute("value");
		
		String actualSize = _size.getAttribute("value");
		
		
		boolean doesConMatch = expectedCon.equalsIgnoreCase(actualCon);
		boolean doesWisMatch = expectedWis.equalsIgnoreCase(actualWis);
		boolean doesChaMatch = expectedCha.equalsIgnoreCase(actualCha);
		
		boolean doesSizeMatch = expectedSize.equalsIgnoreCase(actualSize);
		
		assertTrue(doesConMatch); 
		assertTrue(doesWisMatch);			
		assertTrue(doesChaMatch);	
		
		assertTrue(doesSizeMatch);
	}
	
	@Test
	public void ElfTest(){
		// size: medium
		// stats: +2 Dexterity, +2 Intelligence, –2 Constitution		
		// skills: +2 perception
		
		// Arrange
		String expectedDex = "12";
		String expectedInt = "12";
		String expectedCon = "8";

		String expectedSize = "Medium";
		
		String expectedPerceptionMiscMod = "2";
		String expectedPerceptionTotal = "2";
		

		_raceSelect.click();
		WebElement elf = _raceSelect.findElement(By.id("elfRace"));		

		// Act
		elf.click();
		
		// Assert
		String actualDex = _dex.getAttribute("value");
		String actualInt = _int.getAttribute("value");
		String actualCon = _con.getAttribute("value");
		
		String actualSize = _size.getAttribute("value");
		
		String actualPerceptionMiscMod = _driver.findElement(By.id("PerceptionSkillMiscModBx")).getAttribute("value");
		String actualPerceptionTotal = _driver.findElement(By.id("PerceptionSkillTotalBx")).getAttribute("value");
		
		boolean doesDexMatch = expectedDex.equalsIgnoreCase(actualDex);
		boolean doesIntMatch = expectedInt.equalsIgnoreCase(actualInt);
		boolean doesConMatch = expectedCon.equalsIgnoreCase(actualCon);
		
		boolean doesSizeMatch = expectedSize.equalsIgnoreCase(actualSize);
		
		boolean doesPercMiscModMatch = expectedPerceptionMiscMod.equalsIgnoreCase(actualPerceptionMiscMod);
		boolean doesPercTotalMatch = expectedPerceptionTotal.equalsIgnoreCase(actualPerceptionTotal);
		
		assertTrue(doesDexMatch);
		assertTrue(doesIntMatch);
		assertTrue(doesConMatch);
				
		assertTrue(doesSizeMatch);
		
		assertTrue(doesPercMiscModMatch);
		assertTrue(doesPercTotalMatch);
	}
}
