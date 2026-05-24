import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'; 

const sql = postgres(DATABASE_URL);

export async function load() {
    try {
        const data = await sql`SELECT count(machine_id) FROM public.machine_tb;`;
        
        return {
            machineCount: data[0].count
        };
    } catch (error) {
        console.error("Database Error:", error);
        return { machineCount: 0 };
    }
}

