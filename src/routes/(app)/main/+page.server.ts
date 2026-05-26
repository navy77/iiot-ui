import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'; 

const sql = postgres(DATABASE_URL);

export async function load() {
    try {
                const [machineResult, projectResult] = await Promise.all([
                    sql`SELECT count(machine_id) FROM public.machine_tb`,
                    sql`SELECT count(process) FROM public.project_tb`
                ]);
        return {
            machineCount: machineResult[0].count,
            projectCount: projectResult[0].count,
        };
    } catch (error) {
        console.error("Database Error:", error);
        return { machineCount: 0, projectCount: 0 };
    }
}

