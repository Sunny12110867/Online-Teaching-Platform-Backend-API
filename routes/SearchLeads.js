import express from 'express';
import db from '../db.mjs';

const router = express.Router();

router.get('/leads/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ 
            message: 'Missing search query' 
        });
    }

    try {
        const sqlQuery = `
            SELECT * 
            FROM Leads 
            WHERE learner_name LIKE ? OR email LIKE ?
        `;
        const [leads] = await db.query(sqlQuery, [`%${query}%`, `%${query}%`]);
        
        return res.status(200).json({ leads });
    } catch (error) {
        console.error('Error searching leads:', error);
        return res.status(500).json({ 
            message: 'Internal server error'
         });
    }
});

export default router;
