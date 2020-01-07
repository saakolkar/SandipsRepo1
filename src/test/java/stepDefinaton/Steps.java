package stepDefinaton;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Steps {
	
	
	WebDriver driver;
	String ActualTitle;
	
	
	@Given("^I launch the chrome browser$")
	public void i_launch_the_chrome_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\Drivers\\78\\chromedriver.exe");
		driver= new ChromeDriver();
	}

	@Given("^I launch Selenium Easy WebSite$")
	public void i_launch_Selenium_Easy_WebSite() throws Throwable {
	  driver.get("https://www.seleniumeasy.com");
	}

	@When("^I get the title of selenium$")
	public void i_get_the_title_of_selenium() throws Throwable {
		ActualTitle=driver.getTitle();
	}

	@Then("^I validate the title$")
	public void i_validate_the_title() throws Throwable {
	  Assert.assertEquals("Learn Selenium with Best Practices and Examples | Selenium Easy", ActualTitle);
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
	   driver.quit();
	}
}
