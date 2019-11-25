const express = require('express');
const app = express();
const db = require('./redis-connect');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/services', function (req, res) {
    const services = req.body.services;

    services.forEach(function(service) {
        db.hset('services', service.id, JSON.stringify(service))
    });

    res.send(200)
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/services', function (req, res) {
    db.hgetall('services', function (_err, value) {
        const servicesIds = Object.keys(value);
        const formattedValue = servicesIds.reduce(function(acc, name) {
            acc.push(JSON.parse(value[name]));
            return acc
        }, []);

        res.json(formattedValue);
    });
});

app.post('/reg', function(req,res){
   const user = {id: uuidv4(), name: req.body.name, password: req.body.password,email: req.body.email };

    db.hgetall('users', function (_err,value) {
        if (value == null){
            db.hset('users', user.id, JSON.stringify(user));
            return res.json(user);
        } else {
            const usersIds = Object.keys(value);
            const users = usersIds.reduce(function (acc, name) {
                acc.push(JSON.parse(value[name]));
                return acc;
            }, []);
            const findedUser = users.find(function (user) {
                return req.body.email === user.email
            });
            if (findedUser) {
                res.status(400).send({error: true});
            } else {
                db.hset('users', user.id, JSON.stringify(user));
                return res.json(user);
            }
        }

    })


});

app.post('/login', function(req,res){
   db.hgetall('users', function (_err,value){

       if (value == null){
           res.status(400).send({error: true});
       } else {
           const usersIds = Object.keys(value);
           const users = usersIds.reduce(function(acc, name) {
               acc.push(JSON.parse(value[name]));
               return acc;
           }, []);
           const findedUser = users.find(function(user){
               return req.body.email === user.email && req.body.password === user.password
           });
           if(findedUser){
               res.json(findedUser)
           } else {
               res.status(400).send({error: true});
           }
       }


   })
});

app.get('/usersInfo', function(req,res){
    db.hgetall('users', function(_err,value){
        const servicesIds = Object.keys(value);
        const formattedValue = servicesIds.reduce(function(acc, name) {
            acc.push(JSON.parse(value[name]));
            return acc
        }, []);
        res.json(formattedValue);
    });
});

app.post('/updateProfileInfo', function(req,res) {
    const reqUser = {id: req.body.id, name: req.body.name, password: req.body.password,email: req.body.email };
    db.hgetall('users', function(_err,value){
        const servicesIds = Object.keys(value);
        const formattedValue = servicesIds.reduce(function(acc, name) {
            acc.push(JSON.parse(value[name]));
            return acc
        }, []);

        formattedValue.forEach(user => {
            if(user.id === req.body.id){
                db.hset('users', user.id, JSON.stringify(reqUser));
                return res.json(reqUser);
            }
        });

    });
});



app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});