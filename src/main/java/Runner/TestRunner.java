package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:/Users/Ckumarsi/workspace/PDC/CRMBDDFrameworkJG/src/main/java/Features/login.feature"
				,glue={"stepDefinations"}
				,format={ "pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
monochrome=true,
strict=true
,dryRun=  false)
public class TestRunner {
	
	
	

}
