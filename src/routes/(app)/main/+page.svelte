<script lang="ts">
  import MachineCard from "$lib/components/main/machine-card.svelte";
  let { data } = $props();
</script>

<div class="flex flex-1 flex-col gap-4 p-4">

  <div class="grid auto-rows-min gap-4 md:grid-cols-4">
    <div class="bg-muted/50 aspect-video rounded-xl"><MachineCard value={data.machineCount}/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MachineCard/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MachineCard/></div>
    <div class="bg-muted/50 aspect-video rounded-xl"><MachineCard/></div>
  </div>

  <div class="grid auto-rows-min gap-4 md:grid-cols-2">
    <div class="bg-muted/50 aspect-video rounded-xl"></div>
    <div class="bg-muted/50 aspect-video rounded-xl"></div>
  </div>
  
</div>