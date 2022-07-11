const express = require('express');
const bodyParser  = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Bajaj.html');
});

app.post('/', function(req, res) {
    const obj = {
        
    }
    const is_success = true;
    const user_id = "ayush_1905844";
    const roll_no = 1905844;
    const email = "ayush1905844@yahoo.com";
    const data = req.body.data;
    console.log(data);
    var count = 0;
    var splitted = data.split(',');
    var alpha = [];
    var nums = [];
    for(var i = 0; i < splitted.length; i++) {

        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(splitted[i])){
            continue;
        } else {
            console.log('+1')
            count++;

            if (splitted[i] >= '0' && splitted[i] <= '9') {
                nums.push(splitted[i]);
            } else {
                alpha.push(splitted[i]);
            }
        }
    }
    console.log(nums)
    console.log(alpha)
    console.log(count)
    res.send("posted");
});


app.listen(3000, function(req, res) {
    console.log('listening on port 3000');
});