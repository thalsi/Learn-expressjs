const express = require('express');
const router = express.Router();

const data = require('../db/data');


router.get('/', (req, res) => {
    res.json({ message: "user list sccefully..!", users: data });
});

router.post('/add', (req, res) => {
    if (!req.body.name) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        var id = data.length + 1;
        data.push({
            "id": id,
            "name": req.body.name,
        });
        res.json({ message: "user added successfully..!" });
        console.log(data);
    }
});

router.put('/update', (req, res) => {
    if (!req.body.id) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        let length = req.body.id - 1;
        let editedUser = { id: length, name: req.body.name };
        let users = data.map(element => element.id !== editedUser.id ? element : editedUser);
        // data.splice(0, data.length)
        // data = users;
        res.json({ message: "Update sccessfully..!" });
        console.log(users);
    }
})

router.delete('/delete', (req, res) => {
    if (!req.body.id) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        data.slice(req.body.id - 1, 1);
        console.log(data);
    }
})

module.exports = router;