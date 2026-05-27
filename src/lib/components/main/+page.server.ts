export async function load({ fetch }) {
    try {
        const response = await fetch('http://localhost:8000/api/dashboard');

        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }

        const data = await response.json();
  
        return {
            chartData: data.chartData
        };
    } catch (error) {
        console.error("API Error:", error);
        return { externalData: null };
    }
}