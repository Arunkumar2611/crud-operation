import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const users = []

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
});

router.get('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const foundUser  = users.find((user) => user.id === id);
    res.send(foundUser);
});

export default router;
