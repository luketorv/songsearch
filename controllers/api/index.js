const router = require('express').Router();
const songroute = require('./songroute');

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use("/songs", songroute)
module.exports = router;