/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import locale from '@salesforce/i18n/locale';

const NA_PHONE_NUMBER = '($1) $2-$3';
const IS_TEN_DIGITS = /^\d{10}$/;
const IS_EIGHT_DIGITS = /^\d{8}$/;
const IS_NINE_DIGITS = /^\d{9}$/;
const IS_SEVEN_DIGITS = /^\d{7}$/;
const TEN_TO_NA = /(\d{3})(\d{3})(\d{4})/;
const IS_ELEVEN_DIGITS = /^1\d{10}/;
const ELEVEN_TO_NA = /1(\d{3})(\d{3})(\d{4})$/;
const SEVEN_NA1 = /(\d{2})(\d{3})(\d{4})/;
const SEVEN_NA2 = /(\d{1})(\d{3})(\d{4})/;
const SEVEN_NA3 = /(\d{2})(\d{2})(\d{2})(\d{2})/;
const SEVEN_NA4 = /(\d{2})(\d{4})(\d{4})/;
const SEVEN_NA5 = /(\d{4})(\d{4})/;
const SEVEN_NA6 = /(\d{3})(\d{4})(\d{2})/;
const SEVEN_NA7 = /(\d{3})(\d{4})(\d{3})/;
const SEVEN_NA8 = /(\d{4})(\d{6})/;
const NA1 = '$1 $2 $3';
const NA2 = '$1 $2 $3 $4';
const NA3 = '$1-$2-$3';
const NA4 = '$1-$2';
const NA5 = '$1 $2';

export function toNorthAmericanPhoneNumber(value, countryCode) {

    if(countryCode=='+91'){
        if (IS_TEN_DIGITS.test(value)) {
        return value='+91 ' + value;
        }
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }
    else if(countryCode=='+1'){
        if (IS_TEN_DIGITS.test(value)) {
            return '+1 ' + value.replace(TEN_TO_NA, NA_PHONE_NUMBER);
        } //else if (IS_ELEVEN_DIGITS.test(value)) {
            //return '+1 ' + value.replace(ELEVEN_TO_NA, NA_PHONE_NUMBER);
        //}
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }
    else if(countryCode=='+44'){
        if(IS_TEN_DIGITS.test(value)){
            value='+44 ' + value.replace(SEVEN_NA8,NA5);
        }
        else{
           // return 'Please enter valid 10 Digit number'
           alert('Please enter valid 10 Digit number');
        }
    }
    else if(countryCode=='+971'){
        if(IS_NINE_DIGITS.test(value)){
        return '+971 ' + value.replace(SEVEN_NA1,NA1);
        }
        else{
            //return 'Please enter valid 9 Digit number'
            alert('Please enter valid 9 Digit number');
        }
    }
    else if(countryCode=='+30'){
        if(IS_EIGHT_DIGITS.test(value)){
        return '+30 21 ' + value.replace(SEVEN_NA2,NA1);
        }
        else{
            //return 'Please enter valid 8 Digit number'
            alert('Please enter valid 8 Digit number');
        }
    }
    else if(countryCode=='+33'){
        if(IS_EIGHT_DIGITS.test(value)){
        return '+33 5 ' + value.replace(SEVEN_NA3,NA2);
        }
        else{
            //return 'Please enter valid 8 Digit number'
            alert('Please enter valid 8 Digit number');
        }
    }
    else if(countryCode=='+62'){
        if(IS_TEN_DIGITS.test(value)){
        return '+62 ' + value.replace(SEVEN_NA4,NA3);
        }
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }

    else if(countryCode=='+65'){
        if(IS_EIGHT_DIGITS.test(value)){
        return '+65-' + value.replace(SEVEN_NA5,NA4);
        }
        else{
            //return 'Please enter valid 8 Digit number'
            alert('Please enter valid 8 Digit number');
        }
    }
    else if(countryCode=='+41'){
        if(IS_NINE_DIGITS.test(value)){
        return '+41 ' + value.replace(SEVEN_NA6,NA3);
        }
        else{
            //return 'Please enter valid 9 Digit number'
            alert('Please enter valid 9 Digit number');
        }
    }
    else if(countryCode=='+353'){
        if(IS_TEN_DIGITS.test(value)){
        return '+353 ' + value.replace(SEVEN_NA7,NA3);
        }
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }
    else if(countryCode=='+39'){
        if(IS_TEN_DIGITS.test(value)){
        return '+39 ' + value.replace(SEVEN_NA7,NA3);
        }
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }
    else if(countryCode=='+81'){
        if(IS_NINE_DIGITS.test(value)){
        return '+81 ' + value.replace(SEVEN_NA1,NA3);
        }
        else{
            //return 'Please enter valid 9 Digit number'
            alert('Please enter valid 9 Digit number');
        }
    }
    else if(countryCode=='+86'){
        if(IS_TEN_DIGITS.test(value)){
        return '+86 ' + value.replace(TEN_TO_NA,NA3);
        }
        else{
            //return 'Please enter valid 10 Digit number'
            alert('Please enter valid 10 Digit number');
        }
    }

    
    return value || '';
}


function isNorthAmericanCountry(countryCode) {
    //const localeCountry = getLocaleCountry(userLocale);
    if (countryCode == '+1') {
        return true;
    }
    return false;
}

function getLocaleCountry(userLocale) {
    if (!userLocale) {
        return null;
    }
    const [, country] = userLocale.split('-');
    return country;
}