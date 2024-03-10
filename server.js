import express from 'express';
import db from './db.mjs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();

import addComment from './routes/AddComment.js';
import addCourse from './routes/AddCourse.js';
import registerCourse from './routes/RegisterCourse.js';
import searchLeads from './routes/SearchLeads.js';
import updateCourse from './routes/UpdateCourse.js';
import updateLeadStatus from './routes/UpdateLeadStatus.js';

const PORT = process.env.PORT || 3030;
app.use(express.json());

app.use('/', addComment);
app.use('/', addCourse);
app.use('/', registerCourse);
app.use('/', searchLeads);
app.use('/', updateCourse);
app.use('/', updateLeadStatus);

app.listen(PORT, async () => {
    console.log(`Server is running at port ${PORT}`);

    try {
        await createTables();
        console.log('All Tables creation Done!');
    } catch (error) {
        console.error('Error executing SQL script:', error);
    }
});

async function createTables() {
    const db_conn = await db.getConnection();
    // console.log(db_conn)
    console.log("above dskhbavkljbvi")
    const createTablesScriptPath = path.join(__dirname, 'All_tables.sql');
    const createTablesScript = fs.readFileSync(createTablesScriptPath, 'utf8');
    const queries = createTablesScript.split(';').filter(query => query.trim() !== ''); 

    for (const query of queries) {
        await db_conn.query(query); 
    }

    db_conn.release(); 
}
