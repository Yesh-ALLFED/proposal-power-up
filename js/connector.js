console.log('Hi Trello, this time is the charm');

var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
  };

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, opts){
        // return array for card buttons
        return[{
            text: 'Send Proposal'
            callback: onBtnClick,
        }];


    }



})