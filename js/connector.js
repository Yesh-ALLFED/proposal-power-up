console.log('Hi Trello, this time is the charm');

const GBaseurl = 'https://script.googleapis.com';
const GoogleAuth = require('google-auth-library');
const google = require ('googleapis');
const apikey = 'AIzaSyB9jbjcvVti5MKMtY7VitpjAKBT1LekPLM';
const scriptid = '1n_h0DEx-wh6JQ5L3Vc-kPluukH-OsxXBq0FQsn0ER73jbPqgOkfz6_w2';
const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
const script = google.script({version: 'v1', auth});

// make the API request

script.scripts.run({
    auth: auth,
    resource: {function: 'trelloMap'},
    scriptId: scriptid,
});

var onBtnClick = function (t, opts) {
   // return t.popup({
        //title: 'Does it pop'

    //});
    //console.log('Someone clicked the button');


  };

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, opts){
        // return array for card buttons
        return[{
            text: 'Send Proposal',
            callback: onBtnClick,
        }];


    }



})