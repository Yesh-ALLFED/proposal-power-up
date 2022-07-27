console.log('Hi Trello, this time is the charm');

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, opts){
        // return array for card buttons
        return[{
            text: 'Send Proposal'
            
        }];


    }



})