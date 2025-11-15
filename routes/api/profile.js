import express from 'express';
import auth from '../../middleware/auth.js';
import Profile from '../../Models/Profile.js';
import User from '../../Models/User.js';

//@route    GET api/profile/me
//@desc     get current users profile
//@access   private
const router = express.Router();

router.get('/me', auth, async (req, res) => {

    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;