const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get ('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID'
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});
router.patch ('/:productId', (req, res, next) => {
    res.status(200).json({
        mesasage: 'Updated Product!'
    });
    
});
router.delete ('/:productId', (req, res, next) => {
    res.status(200).json({
        mesasage: 'Deleted Product!'
    });
    
});
module.exports = router;