import express from 'express';

//@route    GET api/profile
//@desc     Test route
//@access   Public
const router = express.Router();

router.get('/', (req, res) => res.send('Profile route'));  

export default router;