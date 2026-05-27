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

@app.get("/api/status-device")
def get_dashboard_data():
    return {
        "chartData": [
            {"name": "Connected", "value": 50},
            {"name": "Disconnected", "value": 20},
            {"name": "Error", "value": 5}
        ]
    }


@app.get("/api/device-history")
def get_device_history():
    # จำลองข้อมูล 31 วัน (ในความเป็นจริง คุณดึงจาก DB หรือ Log)
    history = []
    for day in range(1, 32):
        history.append({
            "date": f"2026-05-{day:02d}",
            "Connected": 40 + (day % 10),  # ตัวอย่างเลขจำลอง
            "Disconnected": 10 + (day % 5),
            "Error": 2
        })
    return {"history": history}