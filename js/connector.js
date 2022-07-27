console.log('Hi Trello, this time is the charm');

var onBtnClick = function (t, opts) {
   // return t.popup({
        //title: 'Does it pop'

    //});
    console.log('Someone clicked the button');
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