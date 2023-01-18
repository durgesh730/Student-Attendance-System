const express = require("express");
const router = new express.Router();
const Students = require('../models/userSchema')

router.post('/addattendance', async(req, res)=>{
    // console.log(req.body)
    const {rollnumber, Subject} = req.body

    if(!rollnumber && !Subject ){
        throw new Error('Data Not Provided...!')
    } 
    try {
        const data = new Students({rollnumber, Subject})
         const storeData = await data.save()
        //  res.json(storeData)
         res.status(201).json({status:200, storeData})
    } catch (error) {
        res.status(404).json({ error });
        console.log("catch block error");
    }  
})

router.get('/getTime/:id', async(req, res)=>{
    try {
        const note = await Students.find({rollnumber:req.params.id});
        res.json(note)
        console.log(note) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


module.exports = router;