const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../config/default.json')

module.exports = function(req,res,next){

    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg:'No token authorization denied'})
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.doctor = decoded.user
        console.log(req.user)
        next()

    } catch (err) {
        res.status(401).json({msg: 'Token not valid'})
    }

    
}