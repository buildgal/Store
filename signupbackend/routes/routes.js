const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")

router.post("/signup", (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        email:request.body.Eamil,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data => {
        response.json(data) 
    })
    .catch(error => {
        response.json(error)
    })
})


module.export = router 