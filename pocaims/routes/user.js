var express = require('express');
var router = express.Router();

// Get home page.
router.get('/', function(req, res, next){
    res.send('Express REST API');
});

module.exports = router;
