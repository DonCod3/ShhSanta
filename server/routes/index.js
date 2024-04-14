const express = require("express");
const router = express.Router();
const path = require("path");
const apiRoutes = require("./api");

// API Routes
router.use('/api', apiRoutes);

//Static client files
router.use(express.static(path.join(__dirname, "../../client/dist")));

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
})

module.exports = router;