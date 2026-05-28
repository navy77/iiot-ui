import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'; 

const sql = postgres(DATABASE_URL);

export async function load({fetch}) {
    try {
                const [machineResult, projectResult,historyResult] = await Promise.all([
                    sql`SELECT count(machine_id) FROM public.machine_tb`,
                    sql`SELECT count(process) FROM public.project_tb`,
                    fetch('http://localhost:8000/api/main/device-history')
                ]);


        const historyData = await historyResult.json();
        return {
            machineCount: machineResult[0].count,
            projectCount: projectResult[0].count,
            statusChartData: [],
            historyChartData: historyData.data|| []
        };
    } catch (error) {
        console.error("Database Error:", error);
        return { 
            machineCount: 0, 
            projectCount: 0,
            statusChartData: "",
            historyChartData: ""
        };
    }
}



