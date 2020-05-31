var express = require('express');
const user = express.Router();

const fs = require('fs');


user.route('/').get(function(req, res) {
    let rawdata = fs.readFileSync('./data/user.json');
    let users = JSON.parse(rawdata);
    res.json(users);
});

user.route('/add').post(function(req, res) {
    let rawdata = fs.readFileSync('./data/user.json');
    let users = JSON.parse(rawdata);

    let myUser = req.body;
    console.log('myuser',myUser);
    
    users.push(myUser);

    console.log(users);
    let data = JSON.stringify(users);
    fs.writeFileSync('./data/user.json', data);
    res.status(200).json(myUser);
});

user.route('/delete/:id').delete(function(req, res) {
    let id = req.params.id;
    console.log('id',id);
    res.status(200).json({'user': 'user deleted successfully'});
});

module.exports = user;