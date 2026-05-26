<script lang="ts">
  import MainCard from "@/components/main/main-card.svelte";
  import Chart1 from "@/components/main/chart-1.svelte";
  let { data } = $props();
</script>

<div class="flex flex-1 flex-col gap-4 p-4">

  <div class="grid auto-rows-min gap-4 md:grid-cols-4">
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.projectCount} topic="Process" unit="process"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Machine" unit="machine"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Network" unit="unit"/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MainCard value={data.machineCount} topic="Node" unit="unit"/></div>
  </div>

  <div class="grid auto-rows-min gap-4 md:grid-cols-2">
    <div class="bg-muted/50 aspect-video rounded-xl"><Chart1/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"></div>
  </div>
  
</div>