console.log('Hi Trello, this time is the charm');
const Myboard = '62a19391324232461d89f644';
const KeyToken = 'key=bdaef946dd920b9c14777e0251465bf3&token=b4e71ff4727a2aa33363b42b0b4bd02867dd71218239dbb094dbec9d2676e30e';



var onBtnClick = function (t, opts) {
   // return t.popup({
        //title: 'Does it pop'

        //});
    var https = require('follow-redirects').https;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'api.trello.com',
    'path': '/1/boards/62a19391324232461d89f644/customFields/?key%253Dbdaef946dd920b9c14777e0251465bf3%2526token%253Db4e71ff4727a2aa33363b42b0b4bd02867dd71218239dbb094dbec9d2676e30e=null',
    };

    var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    req.end();
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
