const express = require('express');
const boydParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(boydParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    // axios.post('http://localhost:4000/events', event).catch((err) => {
    //     console.log(err.message)});
    // When we work inside k8s, we have to connect to ClusterID name (posts-clusterip-srv) with port 4000
    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message)});
    // axios.post('http://localhost:4001/events', event).catch((err) => {
    //     console.log(err.message)});
    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //     console.log(err.message)});
    // axios.post('http://localhost:4003/events', event).catch((err) => {
    //     console.log(err.message)});
    axios.post('http://comments-srv:4001/events', event).catch((err) => {
        console.log(err.message)});
    axios.post('http://query-srv:4002/events', event).catch((err) => {
        console.log(err.message)});
    axios.post('http://moderation-srv:4003/events', event).catch((err) => {
        console.log(err.message)});

    res.send({status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, ()=> {
    console.log('Listening on poart 4005');
})