import express from 'express';

const router = express.Router();

// all routes in here are starting with /users
router.get('/userroute', (req, res) => {
    res.send('Hello');
});

/*
if we write route like this

            router.get('/user', (req, res) => {
                res.send('Hello');
            });
then we need to write in the brower to call this get method like this: localhost:5000/users/userroute
*/

export default router;