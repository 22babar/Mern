import express from 'express';
import connectDB from './config/db.js';

import user from './routes/api/user.js';
import auth from './routes/api/auth.js';
import profile from './routes/api/profile.js';
import posts from './routes/api/posts.js';

const app = express();

//Connect Database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello, World!'));

//Define Routes
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
