import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    res.status(501).json({ error : 'Not Implemented' });
    
});

router.get('/', (req, res) => {
    res.status(501).json({ error : 'Not Implemented' });
    
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error : 'Not Implemented' });
    
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error : 'Not Implemented' });
    
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error : 'Not Implemented' });
    
});

export default router;