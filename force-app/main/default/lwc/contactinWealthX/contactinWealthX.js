// wireGetRecordDynamicContact.js
import {LightningElement, api, wire, track} from 'lwc';
//import { getRecord } from 'lightning/uiRecordApi';
import {getRecord, getFieldValue, updateRecord} from 'lightning/uiRecordApi';
import fetchWealthRecs from '@salesforce/apex/ContactWealthXController.fetchWealthRecs';
import fetchContactRecs from '@salesforce/apex/ContactWealthXController.fetchContactRecs';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
//import DossierId_FIELD from '@salesforce/schema/Contact.WXIntegration__Wealth_X_Dossier_Id__c';

const FIELDS = [
  'Contact.Id',
  //'Contact.Name',
  'Contact.LastName',
  'Contact.FirstName',
  'Contact.MiddleName',
  //'Contact.Title',
  'Contact.WXIntegration__Wealth_X_Dossier_Id__c',
  'Contact.Email'
];



const FIELDS1 = [
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__id__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__dossierid__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__businessContact__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__FullName__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__firstName__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__lastName__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__businessContact_Phone__c',
  'WXIntegration__Wealth_X_Match_Management__c.WXIntegration__businessContact_Email__c',
];

export default class ContactinWealthX extends LightningElement {
  @api recordId;
  @track contactResult;
  @track WealthXList;
  @track contactName;
  @track contactName1;
  @track contactName2;
  @track contactEmail;


  //@wire (getRecord, {recordId: '$recordId', fields: FIELDS})
  //contactResult;


  /*@wire(getRecord, { recordId: '$recordId', fields: FIELDS1 })
    docs1;*/

 @wire(fetchContactRecs, {recordId: '$recordId'}) 
 //@wire (getRecord, {recordId: '$recordId', fields: FIELDS})
    metadataList({data,error}){
        if(data){
            this.contactResult=data;
            this.contactName=data.LastName;
            this.contactName1=data.FirstName;
            this.contactName2=data.MiddleName;
            this.contactEmail=data.Email;
            //this.ContactResult = data;
            console.log(JSON.stringify(data));
            console.log(this.contactName);
       }
        else if(error){
            console.log('error #' + error);
        }
   }

  @wire (fetchWealthRecs, {name: '$contactName',name1: '$contactName1', name2: '$contactName2', email: '$contactEmail'})
  metadataList1({data, error}) {
    if (data && data.length>0) {
      console.log(this.contactName);
      this.WealthXList = data;
      
      //contact.WXIntegration__Wealth_X_Dossier_Id__c = this.WXIntegration__dossierid__c;
      //console.log(JSON.stringify(contact.WXIntegration__Wealth_X_Dossier_Id__c));
      console.log ('data' + JSON.stringify (this.WealthXList));
    } else if (error) {
      console.log ('error #' + error);
      console.log(JSON.stringify(error));
      console.log(this.contactName);
    }
  }

  updateContact(){
    const fields = {}
      console.log(this.contactResult.Id);
      fields['Id'] = this.contactResult.Id;
      console.log(this.contactResult.Id);
      fields['WXIntegration__Wealth_X_Dossier_Id__c'] = this.WealthXList[0].WXIntegration__dossierid__c;
      console.log(this.WealthXList[0].WXIntegration__dossierid__c)
      const recordInput = { fields };

      updateRecord(recordInput)
      .then(() => {console.log('success'); this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Contact updated',
            variant: 'success'
        })
    );}).catch((error)=> {
        console.log(error);
      }
      )
  }
  
  /*get contactName () {
      if(this.contactResult.data && this.contactResult.data.fields){
        return getFieldValue (this.contactResult.data.fields.LastName.value);
      }
      return "";
  }
  get contactEmail () {
    if(this.contactResult.data && this.contactResult.data.fields){
        return getFieldValue (this.contactResult.data.fields.Email.value);
      }
      return "";
    
  }*/

  //if(this.ContactList.Name = this.WealthXList.WXIntegration__FullName__c){
  //if((getFieldValue(this.docs1.data, WXIntegration__FullName__c)) = (getFieldValue(this.docs.data, Name))){
  //if((getFieldValue(this.docs1.data, WXIntegration__FullName__c)).includes(this.docs.data,Name)){
  //console.log( "  ");
  //return this.WealthXList.WXIntegration__FullName__c.value;
}