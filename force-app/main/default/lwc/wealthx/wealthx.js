import { LightningElement } from 'lwc'; 

export default class wealthx extends LightningElement {

    siteURL;

    connectedCallback() {
        
        this.siteURL = 'https://steelperlot--wxintegration.visualforce.com/apex/WealthXSearchPortal';

    }
}