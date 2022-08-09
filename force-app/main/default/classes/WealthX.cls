/**
 * @description       :
 * @author            : Girish P
 * @group             :
 * @last modified on  : 06-22-2022
 * @last modified by  : Girish P
 **/

public class WealthX {
  @InvocableMethod(label='Get WealthX')
  public static void displayUrlID(List<Id> URLID) {
    String urlRegex = '((?<=dossier=)\\d+)';
    List<Contact> conlist = new List<Contact>();
    Pattern MyPattern = Pattern.compile(urlRegex);
    // Then instantiate a new Matcher object "MyMatcher"
    Matcher MyMatcher;
    string wealthxid;
    // You can use the system static method assert to verify the match
system.debug(URLID);
    for (contact con : [
      SELECT Id, AssociatedWealth_XDossier__c
      FROM Contact
      WHERE id IN :URLID
    ]) {
      contact cc = new contact(id = con.id);
      if (con.AssociatedWealth_XDossier__c != null) {
        MyMatcher = MyPattern.matcher(con.AssociatedWealth_XDossier__c);
        while (MyMatcher.find()) {
          wealthxid = MyMatcher.group();
        }
        cc.WXIntegration__Wealth_X_Dossier_Id__c = integer.valueof(wealthxid);
        conlist.add(cc);
      }
    }
    if (conlist.size() > 0) {
      update conlist;
    }
  }
}