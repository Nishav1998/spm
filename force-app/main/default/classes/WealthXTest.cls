@isTest
private class WealthXTest {

    static testMethod void WealthXTest(){
        Contact contactObj = new Contact (
			AssociatedWealth_XDossier__c = 'https://test.com/apex/Wealth_X_SearchedDossier?dossier=2056&',
            LastName = 'Test'
			
		);
		insert contactObj;
        system.debug(contactObj.Id);
        WealthX.displayUrlID(new List<Id>{contactObj.Id});
		Contact c = [ select Id, WXIntegration__Wealth_X_Dossier_Id__c from Contact where Id=:contactObj.Id];
        System.assertEquals(2056, c.WXIntegration__Wealth_X_Dossier_Id__c);
    }
    
}