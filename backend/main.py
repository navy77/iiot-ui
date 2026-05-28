from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import asyncio
import json
import random

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# main
async def event_generator():
    while True:
        connected = random.randint(90, 100)
        disconnected = random.randint(0,10)
        error = random.randint(0, 10)
        data = [
            {"name": "Connected", "value": connected},
            {"name": "Disconnected", "value": disconnected},
            {"name": "Error", "value": error}
        ]
        yield f"data: {json.dumps(data)}\n\n"
        await asyncio.sleep(1) 

@app.get("/api/main/status-device")
async def get_dashboard_data():
        return StreamingResponse(
            event_generator(),
            media_type="text/event-stream"
        )

@app.get("/api/main/status-device/current")
def get_dashboard_data_current():
    return {
        "data": [
            {"name": "Connected", "value": 0},
            {"name": "Disconnected", "value": 0},
            {"name": "Error", "value": 0}]
    }

@app.get("/api/main/device-history")
def get_device_history():
    history = []
    connected = 80
    disconnected = 15
    error = 5
    for day in range(1, 32):
        history.append({
            "date": f"2026-05-{day:02d}",
            "Connected": connected,  # 
            "Disconnected": disconnected,
            "Error": error
        })
    return {"data": history}

