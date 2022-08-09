@isTest
private class EnvironmentConfigTest {

    @isTest static void myTest(){
        
        EnvironmentConfig__mdt Env = new EnvironmentConfig__mdt();
        Env.Key__c = 'Anusha K M';
        Env.Value__c = 'anusha.km@contrivers.in';
        
        EnvironmentConfig.fetchEnvRecs();
    }   
}