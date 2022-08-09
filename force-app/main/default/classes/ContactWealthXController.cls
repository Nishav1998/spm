public class ContactWealthXController {
   
        
    @AuraEnabled( cacheable=true )  
    public static List < WXIntegration__Wealth_X_Match_Management__c > fetchWealthRecs(String name,String name1,String name2, String email) {
        string WealthXName = '%'+name+'%';
        string WealthXName1 = '%'+name1+'%';
        string WealthXName2 = '%'+name2+'%';
        system.debug(WealthXName);
        system.debug(email);
        return [ SELECT WXIntegration__id__c, WXIntegration__businessContact__c, WXIntegration__FullName__c, WXIntegration__firstName__c, WXIntegration__lastName__c, WXIntegration__middleName__c, WXIntegration__businessContact_Email__c, WXIntegration__businessContact_Phone__c, WXIntegration__dossierid__c from WXIntegration__Wealth_X_Match_Management__c where(WXIntegration__lastName__c like : WealthXName and WXIntegration__middleName__c like : WealthXName2 and WXIntegration__firstName__c like : WealthXName1) or WXIntegration__businessContact_Email__c =: email limit 1];
        
    }
    
        @AuraEnabled( cacheable=true )  
    public static Contact fetchContactRecs(String recordId) {
        
        return [ SELECT Id, Name, LastName, MiddleName, FirstName, Email, BusinessPhone__c, WXIntegration__Wealth_X_Dossier_Id__c from Contact where Id=:recordId limit 1];
        
    }

}