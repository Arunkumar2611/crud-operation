import express from 'express';
import { v4 as uuidv4 } from 'uuid';
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

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }
    users.push(userWithId);
    res.send(`user with name ${user.firstName} added to the database`);
})

export default router;

// here we have install npm package UUID that gives a unique string id