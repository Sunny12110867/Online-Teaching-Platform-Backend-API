import express from 'express';
import db from '../db.mjs';

const router = express.Router();

router.post('/courses/:courseId/register', async (req, res) => {
    const courseId = req.params.courseId;
    const { phone_number, linkedin_url, learner_name, email } = req.body;

    if (!phone_number || !linkedin_url || !learner_name || !email) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    try {
        const query = `
            INSERT INTO Leads (email, phone_number, linkedin_url, course_id, learner_name, application_date, status)
            VALUES (?, ?, ?, ?, ?, CURDATE(), 'Pending')
        `;
        const values = [email, phone_number, linkedin_url, courseId, learner_name];

        const [result] = await db.query(query, values);

        if (result.affectedRows === 1) {
            return res.status(201).json({ message: 'Course registration successful' });
        } else {
            return res.status(500).json({ message: 'Failed to register for this course' });
        }
    } catch (error) {
        console.error('Error while registering for this course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
