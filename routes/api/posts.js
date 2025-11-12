import express from 'express';

//@route    GET api/posts
//@desc     Test route
//@access   Public
const router = express.Router();

router.get('/', (req, res) => res.send('Posts route'));  

export default router;