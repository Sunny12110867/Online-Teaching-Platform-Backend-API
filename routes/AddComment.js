import express from 'express';
import db from '../db.mjs';

const router = express.Router();

router.post('/comments/add', async (req, res) => {
    const { course_id, comment_text, instructor_id, lead_id } = req.body;
    
    if (!course_id || !comment_text || !instructor_id || !lead_id) {
        return res.status(400).json({ 
            message: 'Missing fields' 
        });
    }
    
    try {
        const query = `
            INSERT INTO Comments (course_id, comment_text, instructor_id, lead_id, comment_date) 
            VALUES (?, ?, ?, ?, CURRENT_DATE())
        `;
        const values = [course_id, comment_text, instructor_id, lead_id];
        
        const dbConnection = await db.getConnection();
        const [result] = await dbConnection.query(query, values);
        dbConnection.release();
        
        if (result.affectedRows === 1) {
            return res.status(201).json({ message: 'Comment added successfully' });
        } else {
            return res.status(500).json({ message: 'Failed to add comment' });
        }
    } catch (error) {
        console.error('Error while adding comment:', error);
        return res.status(500).json({ message: 'Internal server error while adding comment' });
    }
});

export default router;
