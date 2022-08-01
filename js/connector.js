console.log('Hi Trello, this time is the charm');
const MyBoard = '62a19391324232461d89f644';
const KeyToken = 'key=bdaef946dd920b9c14777e0251465bf3&token=b4e71ff4727a2aa33363b42b0b4bd02867dd71218239dbb094dbec9d2676e30e';



var onBtnClick = function (t, opts) {
   // return t.popup({
        //title: 'Does it pop'

        //});
        var url = `https://api.trello.com/1/boards/${MyBoard}/customFields/?${KeyToken}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
        
    
        console.log('Someone clicked the button');
  };

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, opts){
        // return array for card buttons
        return[{
            text: 'Send Proposal',
            callback: onBtnClick,
            icon: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/handshake_1f91d.png'
        }];


    }



})
