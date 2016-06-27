var request = require('request');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var myEvents = new EventEmitter();
exports.doit=function (search) {
    myEvents.emit("bcd");

    // request.post('http://rank.dataguiding.com/index.php/Home/AnchorInfo/search_info', {form:{key:'value'}});
    // var options = {
    //     headers: {"Connection": "close"},
    //     url: 'http://rank.dataguiding.com/index.php/Home/AnchorInfo/search_info',
    //     method: 'POST',
    //     json: true,
    //     body: {"search":search}
    // };
    //
    // function callback(error, response, data) {
    //     if (!error && response.statusCode == 200) {
    //         console.log('----info------', search);
    //
    //     }
    // }
    //
    // request(options, callback);

    var formData = {
        // Pass a simple key-value pair
        my_field: 'my_value',
        // Pass data via Buffers
        my_buffer: new Buffer([1, 2, 3]),
        // Pass data via Streams
        filename: fs.createReadStream(__dirname + '/abc.png')
        // // Pass multiple values /w an Array
        // attachments: [
        //     fs.createReadStream(__dirname + '/attachment1.jpg'),
        //     fs.createReadStream(__dirname + '/attachment2.jpg')
        // ],
        // // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
        // Use case: for some types of streams, you'll need to provide "file"-related information manually.
        // See the `form-data` README for more information about options: https://github.com/form-data/form-data
        // custom_file: {
        //     value:  fs.createReadStream('/dev/urandom'),
        //     options: {
        //         filename: 'topsecret.jpg',
        //         contentType: 'image/jpg'
        //     }
        // }
    };
    request.post({url:'http://121.42.176.30:3001/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }else {
            console.error("12313213");
        }
        console.log('Upload successful!  Server responded with:', body);
    });
};
myEvents.emit("bcd",function () {

});