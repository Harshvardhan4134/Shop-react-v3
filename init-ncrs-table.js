
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || '',
    process.env.VITE_SUPABASE_ANON_KEY || ''
);

async function initNCRsTable() {
    try {
        console.log('Creating NCRs table...');
        
        const { error } = await supabase
            .rpc('setup_ncrs_table');

        if (error) {
            throw error;
        }

        console.log('NCRs table created successfully!');
    } catch (error) {
        console.error('Error creating NCRs table:', error);
        process.exit(1);
    }
}

initNCRsTable();
