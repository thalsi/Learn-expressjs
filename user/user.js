const express = require('express');
const router = express.Router();

const data = require('../db/data');


router.get('/', (req, res) => {
    res.status(200).json({ message: "user list sccefully..!", users: data });
});

router.post('/add', (req, res) => {
    console.log(req.body);
    if (!req.body.name) {
        res.status(400);
        res.json({ message: "Bad Request", error: 'name invalid' });
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

router.delete('/delete/:id', (req, res) => {
    console.log('deltee working');
    console.log(req.params);
    const { id } = req.params;
    const projectIndex = data.findIndex(p => p.id == id);
    data.splice(projectIndex, 1);
    res.status(200);
    res.json({ message: "Delete susscullfy..1" });
    console.log(data);
    
})

module.exports = router;