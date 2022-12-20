
const path = require('path');
const fs = require('fs');
const { json } = require('express');


const homePage = (req, res) => {
    
    res.render('home');

};
const aboutPage = (req, res) => {
    
    res.render('about')
};

const contactPage = (req, res) => {
    res.render('contact')
};

const skillPage = (req, res) => {
    res.render('skill')
};

const workPage = (req, res) => {
    const recentwork = fs.readFileSync(path.join(__dirname , '../db/friend.json'))

    res.render('recentwork', {
        recentwork: JSON.parse(recentwork.toString())
    })
}



module.exports = {
    homePage,
    aboutPage,
    contactPage,
    skillPage,
    workPage
    
}