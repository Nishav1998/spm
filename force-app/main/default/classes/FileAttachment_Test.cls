@isTest
public class FileAttachment_Test {
@isTest static void myFiles(){

       //Test.startTest();
       //System.assertEquals(0, Limits.getEmailInvocations(), 'No emails should be sent');
       Attachment att = new Attachment();
       contentVersion cv = new contentVersion();
       cv.versionData = blob.valueof('test');
       cv.Title = 'test.txt';
       cv.PathOnClient = 'test.txt';
       insert cv;
     
       //insert Attachment;
       FileAttachment.setEntityAttachments(new list<Id>{cv.id});

       //System.assertEquals(1, Limits.getEmailInvocations(), 'Emails should be sent');
       //Test.stopTest();
}
    
}