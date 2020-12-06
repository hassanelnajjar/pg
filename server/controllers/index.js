const express = require("express");
const users = require("./static");

const {getData} = require('../database/queries/getData')
const {postData} = require('../database/queries/postData')

const router = express.Router();

router.get('/users', (req, res) => {
  getData().then(result => res.json(result.rows)).catch(() => res.send('error'));
});

router.post('/create-user',(req,res)=>{
  postData(req.body).then(()=> res.redirect('/')).catch(err=>res.status(200).send('hello'));
})

module.exports = router;
