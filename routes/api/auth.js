import express from 'express';

//@route    GET api/auth
//@desc     Test route
//@access   Public
const router = express.Router();

router.get('/', (req, res) => res.send('Auth route'));  

export default router;