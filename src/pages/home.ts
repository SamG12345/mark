import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    res.status(501).json({ error : 'Not Implemented' });
    
});

router.get('/', (req, res) => {
    res.status(501).json({ error : 'Not Implemented' });
    
});

export default router;