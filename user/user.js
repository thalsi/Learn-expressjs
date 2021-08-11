const express = require('express');
const router = express.Router();

const data = require('../db/data');


router.get('/', (req, res) => {
    res.json({ message: "user list sccefully..!", users: data });
});


router.post('/add', (req, res) => {
    if (!req.body.first_name || !req.body.last_name || !req.body.gender) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        var id = data.length + 1;
        data.push({
            "id": id,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email ? req.body.email : '',
            "gender": req.body.gender
        });
        res.json({ message: "user added successfully..!" });
    }
});

router.delete('/delete', (req, res) => {
    if (!req.body.id) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } else {
        data.slice(req.body.id - 1, 1);
    }
})

module.exports = router;