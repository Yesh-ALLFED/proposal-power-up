console.log('Hi Trello, this time is the charm');


var onBtnClick = function (t, opts) {
   // return t.popup({
        //title: 'Does it pop'

        //});
    var https = require('follow-redirects').https;
    var fs = require('fs');

    var options = {
      'method': 'POST',
      'hostname': 'script.googleapis.com',
      'path': '/v1/scripts/AKfycbzu4YjIw8BlfYk_B-5ouEMMlfuHm9rPoE32hJ0OafWL1YcLVL2rE709rvCKUZhDeMd9tA:run',
      'headers': {
        'Authorization': 'Bearer ya29.A0AVA9y1u0Y0fY8OumUsYzavQHq0bqlgIgDdCixoAAt9KRmMjpUeXi5K7PX8FQ6nZt9QfQzFVoeI_3DtxrfDRn2Bd2AVuRc81K3pgDApDu-xLfwvNyJZuewdmvw8ObPyI1zeHIQZqC7il9I6b8NcZ2icdUU-39YUNnWUtBVEFTQVRBU0ZRRTY1ZHI4T1Jmc29ScGRuVlN4dUlxTDB4aGVsUQ0163',
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
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

    var postData =  "{\r\n  \"function\": \"testing\",\r\n \r\n}";

    req.write(postData);

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
