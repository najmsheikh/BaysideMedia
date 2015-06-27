var express = require('express');
var bodyParser = require('body-parser');
var sendgrid  = require('sendgrid')(process.env.api_user,process.env.api_key);
var admin = process.env.admin_email;

var app = express();

app.get('/', function(req, res) {
    res.sendfile("./index.html");
});
app.get(/^(.+)$/, function(req, res) {
    res.sendfile(__dirname + req.params[0]);
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/sendmsg', function(req, res) {
    var client = req.body.firstname + ' ' + req.body.lastname;
    var email = req.body.email;
    var msg = req.body.msg;
    sendgrid.send({
      to:       admin,
      from:     email,
      fromname: client,
      subject:  'New Message for BaysideMediaCorp',
      text:     msg
    }, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
    res.end();
});

app.listen(process.env.PORT, function() {
    console.log("Server is up  running at port: " + process.env.PORT);
});