const express = require('express');

const router = express.Router();
const createUserRoute = require('./create-user');
const healthRoute = require('./health');
const getUsersRoute = require('./get-user');
const updateUserRoute = require('./update-user');
const deleteUserRoute = require('./delete-user');

const membersRoute = require('./members');

/**
 * UNSECURED API
 */
router.use('/health', healthRoute);

router.use('/createuser', createUserRoute);
router.use('/getusers', getUsersRoute);
router.use('/updateuser', updateUserRoute);
router.use('/deleteuser', deleteUserRoute);
router.use('/members', membersRoute);



module.exports = router;
