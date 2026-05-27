from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ตั้งค่า CORS เพื่อให้ SvelteKit เรียกใช้งานได้
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # หรือใส่ url ของ sveltekit เช่น ["http://localhost:5173"]
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/dashboard")
def get_dashboard_data():
    return {
        "machineCount": 125,
        "projectCount": 42,
        "chartData": [
            {"name": "Active", "value": 50},
            {"name": "Idle", "value": 30},
            {"name": "Maintenance", "value": 15},
            {"name": "Error", "value": 5}
        ]
    }