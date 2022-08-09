import { LightningElement, wire,api } from 'lwc';  
//import My_resource from '@salesforce/resourceUrl/ImageUpload';  
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = [
    'Lead.Name',
    'Lead.BusinessCardPhoto__c',
    'Lead.PhotoBusinessCard__c'
];

export default class UserImage extends LightningElement {

    name;
    imageURLs;
    //imageURL1;
    //resourceUrlmageUpload = My_resource;
    @api horizontalAlign = 'space';

    connectedCallback() {

        console.log( 'Fields are ' + JSON.stringify( FIELDS ) );
        
    }

    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {

        if ( error ) {

            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Account',
                    message,
                    variant: 'error',
                }),
            );

        } else if ( data ) {

            console.log( 'Data is ' + JSON.stringify( data ) );
            //if(data.fields.Image__c.value.includes(','))
            //{
                this.name = data.fields.Name.value;
                if(data.fields.BusinessCardPhoto__c && data.fields.BusinessCardPhoto__c.value){
                this.imageURLs = data.fields.BusinessCardPhoto__c.value.split(",");
                
               /* console.log(array);
                for (var i=0; i<array.length; i++){
                    this.imageURL = array[i-1];
                    this.imageURL1 = array[i];
                    console.log(this.imageURL);
                    //console.log(this.imageURL1);
                    console.log(array[i]);
                    console.log(i);
                }*/
            //i--;
            //}
            /*else {
                this.name = data.fields.Name.value;
                this.imageURL = data.fields.Image__c.value;
            }*/
        }
        if(data.fields.PhotoBusinessCard__c && data.fields.PhotoBusinessCard__c.value){
            this.imageURLs = data.fields.PhotoBusinessCard__c.value.split(",");
        }

        }

    }

}