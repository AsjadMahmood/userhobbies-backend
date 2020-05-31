var express = require('express');
const hobbies = express.Router();
const fs = require('fs');


hobbies.route('/').get(function(req, res) {
    let rawdata = fs.readFileSync('./data/hobbies.json');
    let hobby = JSON.parse(rawdata);

    res.json(hobby);
});

hobbies.route('/add').post(function(req, res) {
    let rawdata = fs.readFileSync('./data/hobbies.json');
    let hobby = JSON.parse(rawdata);

    let myHobbies = req.body;
    hobby.push(myHobbies);
    let data = JSON.stringify(hobby);
    fs.writeFileSync('./data/hobbies.json', data);
    res.status(200).json(myHobbies);
});

hobbies.route('/delete/:id').delete(function(req, res) {
    let rawdata = fs.readFileSync('./data/hobbies.json');
    let hobby = JSON.parse(rawdata);

    let id = req.params.id;
    hobby = hobby.filter(hobby => hobby.id !== id);
    let data = JSON.stringify(hobby);
    fs.writeFileSync('./data/hobbies.json', data);
    res.status(200).json({'todo': 'todo deleted successfully'});
});

module.exports = hobbies;