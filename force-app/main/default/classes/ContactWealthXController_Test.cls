@isTest
public class ContactWealthXController_Test {

    @isTest static void myWealth(){
        
        WXIntegration__Wealth_X_Match_Management__c wealthX1 = new WXIntegration__Wealth_X_Match_Management__c();
        string name = 'Olshan';
        string name1 = 'Carole';
        string name2 = 'S.';
        
        //WealthX1.WXIntegration__id__c = '181551';
        wealthX1.WXIntegration__businessContact__c = '{"zipcode":"10022-1657 ","twitter":null,"street":"600 Madison Ave Ste 14","state":"New York","phone":"+1 212 935 1330","linkedin":null,"instagram":null,"facebook":null,"email":"colshan@olshanproperties.com","country":"United States","city":"New York"}';
        //WealthX1.WXIntegration__FullName__c = 'Carole Olshan';
        wealthX1.WXIntegration__firstName__c = 'Carole';
        wealthX1.WXIntegration__lastName__c = 'Olshan';
        wealthX1.WXIntegration__middleName__c = 'S.';
        wealthX1.WXIntegration__businessContact_Email__c = 'colshan@olshanproperties.com';
        //wealthX1.WXIntegration__businessContact_Phone__c = '+1 212 935 1330';
        wealthX1.WXIntegration__dossierid__c = 1046486;
        insert wealthX1;
        ContactWealthXController.fetchWealthRecs(wealthX1.WXIntegration__lastName__c, wealthX1.WXIntegration__firstName__c, wealthX1.WXIntegration__middleName__c, wealthX1.WXIntegration__businessContact_Email__c);
        //System.assert();
    }

    @isTest static void myWealth1(){
        
        Contact con = new Contact();
        //con.Id = '0038c00002dPQzYAAW';
        //con.Name = 'Carole Olshan';
        con.LastName = 'Olshan';
        con.MiddleName = 'S.';
        con.FirstName = 'Carole';
        con.Email = 'colshan@olshanproperties.com';
  		insert con;
        
        ContactWealthXController.fetchContactRecs(con.Id);
      
        //System.assert();
    }   
    
}