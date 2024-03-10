import express from 'express';
import db from '../db.mjs';

const router = express.Router();

router.post('/courses/add', async (req, res) => {
    const { title, instructor_id, description, max_seats, end_date, start_date } = req.body;
    
    if (!title || !instructor_id || !description || !max_seats || !end_date || !start_date) {
        return res.status(400).json({ 
            message: 'Missing fields' 
        });
    }

    try {
        const query = `
            INSERT INTO Courses (instructor_id, title, description, max_seats, end_date, start_date) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [instructor_id, title, description, max_seats, end_date, start_date];
        
        const [result] = await db.query(query, values);
        
        if (result.affectedRows === 1) {
            return res.status(201).json({ message: 'Course added successfully' });
        } else {
            return res.status(500).json({ message: 'Failed to add course' });
        }
    } catch (error) {
        console.error('Error while adding course:', error);
        return res.status(500).json({ message: 'Internal server error while adding course' });
    }
});

export default router;
