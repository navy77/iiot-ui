<script lang="ts">
  import MainCard from "@/components/main/main-card.svelte";
  import ActualDevice from "@/components/main/main-chart-device.svelte";
  import HistoryDevice from "@/components/main/main-chart-his-device.svelte"
  import { onMount } from 'svelte';
  let { data } = $props();
  let chartData = $state(data.statusChartData);
  onMount(() => {
      const eventSource = new EventSource("http://localhost:8000/api/main/status-device");
      eventSource.onmessage = (event) => {
        chartData = JSON.parse(event.data); // อัปเดตเมื่อมีข้อมูลใหม่เข้ามา
      };
      return () => eventSource.close();
    });
</script>

<div class="flex flex-1 flex-col gap-4 p-4">

  <div class="grid auto-rows-min gap-4 md:grid-cols-4">
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.projectCount} topic="Process" unit="process"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Machine" unit="machine"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Network" unit="unit"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Node" unit="unit"/></div>
  </div>

  
  <div class="grid auto-rows-min gap-4 md:grid-cols-4">
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
      <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
      <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
      <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
      <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
      <ActualDevice data={chartData} />
    </div>
    <!-- <div class="bg-muted/50 bg-white aspect-video rounded-xl border border-border ring-1 ring-black/5 p-4 ">
    <HistoryDevice data = {data.historyChartData}/>
    </div> -->

  </div>

</div>
