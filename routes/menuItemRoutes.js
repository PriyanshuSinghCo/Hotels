const express = require('express');
const router = express('../models/MenuItem');
const MenuItem = require('../models/MenuItem')

//Post ka use data ko database mein save karne ke lye karty hain
router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("Menu Saved");
        res.status(200).json(response);
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
    }
});

//Or get ka use humlog data ke resive karne ke lye karty hain....
router.get('/', async(req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


module.exports = router;