public class EnvironmentConfig {
	@AuraEnabled( cacheable=true )  
    	public static List < EnvironmentConfig__mdt > fetchEnvRecs() {
        
        	return [ SELECT Key__c, Value__c from EnvironmentConfig__mdt ];
        
    }
}