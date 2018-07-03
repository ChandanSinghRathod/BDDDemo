package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	
	
	WebDriver driver;
	@Given("^User is already on login page$")
	
	public void user_already_on_login_page(){
		
		System.setProperty("webdriver.chrome.driver", "C:/Users/Ckumarsi/Desktop/Selenium Workshop/chromedriverwin32/chromedriver.exe");
		
		driver= new ChromeDriver();
		driver.get("https://www.freecrm.com/");
	}
	@When("^title of login page is Free CRM$")
	
	public void titile_of_login_page_freecrm(){
		
		
		String titile=driver.getTitle();
		System.out.println(titile);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", titile);
	}
	@Then("^Use enters username and User enters password$")
	public void use_enters_username_and_User_enters_password()  {
	    driver.findElement(By.name("username")).sendKeys("chand1");
	    driver.findElement(By.name("password")).sendKeys("Tester@123");
//	    driver.findElement(By.)
	    
	}
	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
	    driver.findElement(By.xpath("//input[@type='submit']")).submit();
	   
	}
	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
	    // Write code here that turns the phrase above into concrete actions
	   String titile= driver.getTitle();
	   System.out.println(titile);
	   Assert.assertEquals("CRMPRO", titile);
	}
	@Then("^close the browser$")
	public void close_the_browser()  {
	    // Write code here that turns the phrase above into concrete actions
	  driver.close();
	}
}
