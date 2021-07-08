const {body , validationResult} = require("express-validator");
module.exports.registerValiations = [
    body("name").not().isEmpty().trim().withMessage("name is rquired"),
    body("email").not().isEmpty().trim().withMessage("email is rquired"),
    body("password").isLength({min:6}).withMessage("password must be 6 characters long"),
];

module.exports.register =  (req , res) =>{
    const { name , email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        res.send(errors.array())

    }else{
        res.send(" You have done")
    }
}