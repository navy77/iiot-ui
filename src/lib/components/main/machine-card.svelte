<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  let { value } = $props();
</script>


<Card.Root class="h-full w-full">
  <Card.Header>
    <Card.Title class="text-xl font-medium text-muted-foreground">
        Total Machine 
    </Card.Title>
  </Card.Header>
  <Card.Content>
        <div class="text-7xl font-bold text-center">{value}</div>
        <div class="text-xs text-muted-foreground text-right ">Units</div>
  </Card.Content>
</Card.Root>



