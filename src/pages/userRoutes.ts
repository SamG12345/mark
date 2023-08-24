import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
//User CRUD
/*
    Test with Invoke-WebRequest: 

    Invoke-WebRequest -Method Post -Uri "http://localhost:3000/user/" -Headers @{"Content-Type"="application/json"} -Body '{"name": "Elon Musk", "email": "doge@twitter.com", "username": "elon"}'

*/

//Create User
router.post('/', async(req, res) => {
    const { email, name, username } = req.body;
    console.log(email ,name, username);

    try{
        const result = await prisma.user.create({
            data : {
                email,
                name,
                username,
                bio : "i ma neu at Tuetar",
            },
        });
        res.json(result);
    }catch(e){
        res.status(400).json({error : 'Username and Email must be Unique'})
    }
    
    
});


// User List
router.get('/', async(req, res) => {
    const allUser = await prisma.user.findMany({
        select: {
            id : true,
            username: true,
            image: true
        }
    });

    res.json(allUser);
    
});


// Get One User
router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({ 
        where : {
            id : Number(id)
        },
        include : {
            tweets : true,
        }});
    res.json({ user });
    
});

/* 
    Test with Invoke-WebRequest:

    Invoke-WebRequest -Method Put -Uri "http://localhost:3000/user/6" -Headers @{"Content-Type"="application/json"} -Body '{"name": "Elon Musk", "bio": "I ma da see"}'

*/
// Update User
router.put('/:id', async(req, res) => {
    const {id} = req.params;
    const { bio, name, image} = req.body;

    try{
        const result = await prisma.user.update({
            where : { id : Number(id)},
            data : { bio, name, image},

        })
        res.json(result);
    }catch (e){
        res.status(400).json({ error : 'Failed to update the user' });
    }
    
    
    
});

// Invoke-WebRequest -Method delete "http://localhost:3000/user/4"
// Delete user
router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    await prisma.user.delete({where : { id : Number(id)}});
    res.sendStatus(200);
    
});

export default router;