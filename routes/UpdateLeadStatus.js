import express from 'express';
import db from '../db.mjs';

const router = express.Router();

router.put('/courses/:courseId/update', async (req, res) => {
    const courseId = req.params.courseId;
    const { title, description, max_seats, end_date, start_date } = req.body;

    if (!title && !description && !max_seats && !end_date && !start_date) {
        return res.status(400).json({ message: 'No fields provided for update' });
    }

    let changedFields = [];
    let changedValues = [];

    if (title) {
        changedFields.push('title = ?');
        changedValues.push(title);
    }
    if (description) {
        changedFields.push('description = ?');
        changedValues.push(description);
    }
    if (max_seats) {
        changedFields.push('max_seats = ?');
        changedValues.push(max_seats);
    }
    if (end_date) {
        changedFields.push('end_date = ?');
        changedValues.push(end_date);
    }
    if (start_date) {
        changedFields.push('start_date = ?');
        changedValues.push(start_date);
    }

    changedValues.push(courseId);

    try {
        const sqlQuery = `UPDATE Courses SET ${changedFields.join(',')} WHERE course_id = ?`;
        const [result] = await db.query(sqlQuery, changedValues);

        if (result.affectedRows === 1) {
            return res.status(200).json({ message: 'Course details updated successfully' });
        } else {
            return res.status(404).json({ message: 'No course found' });
        }
    } catch (error) {
        console.error('Error updating course details:', error);
        return res.status(500).json({ message: 'Internal server error while updating course' });
    }
});

export default router;
