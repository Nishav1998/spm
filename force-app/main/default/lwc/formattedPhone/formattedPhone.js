import { LightningElement, api, wire } from 'lwc';
import { toNorthAmericanPhoneNumber } from 'c/phoneNumberUtil';
//import { toNorthAmericanPhoneNumber1 } from 'c/phoneNumberUtil';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Contact.Phone',
    'Contact.CountryCode__c',
    'Contact.MobilePhone',
    'Contact.Country_Code__c'
];

export default class cFormattedPhone extends LightningElement {
    @api recordId;

    //@api tabIndex;
    value;
    get countryCodes(){
        return [{label:'+91',value:'+91'},{label:'+61',value:'+61'},{label:'+353',value:'+353'}]
    }

    countryCode1='+91';
    //handleSuccess(){
      //  alert("hi");
    //}
    
    handleSubmit(event){
        event.preventDefault();
        //this.handleFormatPhone();       // stop the form from submitting
   const fields = event.detail.fields;
   this.formattedPhoneNumber=toNorthAmericanPhoneNumber(fields.Phone,fields.CountryCode__c);
   //this.formattedPhoneNumber1=toNorthAmericanPhoneNumber(fields.MobilePhone,fields.CountryCode__c);
   //this.formattedPhoneNumber1=toNorthAmericanPhoneNumber(fields.MobilePhone,fields.Country_Code__c);
   //fields.MobilePhone = this.formattedPhoneNumber1;
   fields.Phone = this.formattedPhoneNumber;
   //alert(JSON.stringify(fields));
   this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSubmit1(event){
        event.preventDefault();
        //this.handleFormatPhone();       // stop the form from submitting
   const fields = event.detail.fields;
   //this.formattedPhoneNumber=toNorthAmericanPhoneNumber(fields.Phone,fields.CountryCode__c);
   //this.formattedPhoneNumber1=toNorthAmericanPhoneNumber(fields.MobilePhone,fields.CountryCode__c);
   this.formattedPhoneNumber1=toNorthAmericanPhoneNumber(fields.MobilePhone,fields.Country_Code__c);
   fields.MobilePhone = this.formattedPhoneNumber1;
   //fields.Phone = this.formattedPhoneNumber;
   //alert(JSON.stringify(fields));
   this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleError(event){
        alert(JSON.stringify(event.detail));
        alert(event.getParam('error'));
    }

    /*handleSubmit1(event){
        event.preventDefault();
        //this.handleFormatPhone();       // stop the form from submitting
   const fields = event.detail.fields;
   //this.formattedPhoneNumber=toNorthAmericanPhoneNumber(fields.Phone,fields.CountryCode__c);
   this.formattedPhoneNumber1=toNorthAmericanPhoneNumber1(fields.MobilePhone,fields.CountryCode__c);
   fields.MobilePhone = this.formattedPhoneNumber1;
   this.template.querySelector('lightning-record-edit-form').submit(fields);
    }*/
   

    /*handlePhoneNumberChange(event){
        this.value=event.detail.value;
        //this.value1=event.detail.value1;
    }
    handlePhoneNumberChange1(event){
        this.value1=event.detail.value1;
        //this.value1=event.detail.value1;
    }

    /*handleFormatPhone(){
    this.formattedPhoneNumber=toNorthAmericanPhoneNumber(this.value,this.countryCode1);
        //alert(toNorthAmericanPhoneNumber(this.value));
        return this.formattedPhoneNumber;
    }*/
    formattedPhoneNumber;
    /*handleFormatPhone1(){
        this.formattedPhoneNumber1=toNorthAmericanPhoneNumber(this.value1,this.countryCode1);
            //alert(toNorthAmericanPhoneNumber(this.value));
            return this.formattedPhoneNumber1;
        }*/
    formattedPhoneNumber1;

    handleCountryCodeChange(event){
        this.countryCode1=event.detail.value;
        alert(this.countryCode1);
    }
    
    get link() {
        return 'tel:${this.value}';
    }
}