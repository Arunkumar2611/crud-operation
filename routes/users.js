import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastname: "Doe",
        age: 25
    },
    {
        firstName: "jan",
        lastname: "Doe",
        age: 24
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

/**
 * method : POST
 * URL : http://localhost:5000/users
 * body => 
 * {
        "firstName": "jonny",
        "lastname": "xaviourg",
        "age": 24
}
 * 
 * if we put this data into the body of post request then we get data of added object
 */

router.post('/', (req, res) => {
    console.log('Post Route');
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(`user with name ${user.firstName} added to the database`);
})

export default router;