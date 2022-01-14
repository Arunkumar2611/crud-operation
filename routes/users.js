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

export default router;