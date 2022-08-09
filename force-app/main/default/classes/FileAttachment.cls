global class FileAttachment
{
    @InvocableMethod(label='Custom File Attachment' description='A custom action that attaches a file based on the inputs.' category='Custom')
 
    //input parameters will get collected in list "Attachment"
    global static void setEntityAttachments(List<Id> contentIds)
    {
        Id contentId = contentIds[0];
        Messaging.SingleEmailMessage semail = new Messaging.SingleEmailMessage();
        semail.setEntityAttachments(new ID[]{contentId}); // To attach the "Document"
        semail.setSubject('Guidelines to create Wealth-X Record'); // To set the subject for the email
        String[] sendTo = new String[]{'anusha.km@contrivers.in','em@wesell.com'};
        semail.setToAddresses(sendTo);
        semail.setHtmlBody('<p>&nbsp;Hi,</p><p>Please find the attachment with Guidelines for Wealth-X.</p><p>Please reach out to XYZ@com incase of any queries.</p><p><br /></p><p>Thank you,</p><p>SPM Team</p>'); //Content to be written in the body.
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{semail}); //To send the email
        //return null;
    }
 
}