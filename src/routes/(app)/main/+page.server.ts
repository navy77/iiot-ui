import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'; 

const sql = postgres(DATABASE_URL);

export async function load({fetch}) {
    try {
                const [machineResult, projectResult,apiResult,historyResult] = await Promise.all([
                    sql`SELECT count(machine_id) FROM public.machine_tb`,
                    sql`SELECT count(process) FROM public.project_tb`,
                    fetch('http://localhost:8000/api/status-device'),
                    fetch('http://localhost:8000/api/device-history')
                ]);

        const statusDevice = await apiResult.json();   
        const historyData = await historyResult.json();

        return {
            machineCount: machineResult[0].count,
            projectCount: projectResult[0].count,
            statusChartData: statusDevice.chartData|| [],
            historyChartData: historyData.historyData|| []
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



