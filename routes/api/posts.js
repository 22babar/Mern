import express from 'express';
import Profile from '../../Models/Profile.js';
import auth from '../../middleware/auth.js';

//@route    GET api/posts/me
//@desc     Get current users posts
//@access   private
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

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
