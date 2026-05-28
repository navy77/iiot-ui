<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as echarts from 'echarts';
  // รับค่า data จากหน้า page.svelte
  let { data = [] } = $props(); 
  let chartDom: HTMLElement;
  let myChart: echarts.ECharts;

  onMount(() => {
    myChart = echarts.init(chartDom);
    const observer = new ResizeObserver(() => myChart?.resize());
    observer.observe(chartDom);
    return () => observer.disconnect();
  });

  // ใช้ $effect เพื่อตรวจจับเมื่อ data เปลี่ยนแปลง
  $effect(() => {
    if (myChart && data) {
    myChart.setOption({
      title: {text: 'Device Status',left: 'center',top: '2%'},
      tooltip: { trigger: 'item' },
      legend: {botton: '0%',left: 'center'},
      color: ['#15aa06', '#f59e0b', '#ef4444'],
      backgroundColor: '#ffffff',
      labelLine:{show:false},

      series: [{
        type: 'pie',
        radius: ['20%', '70%'],
        padAngle: 5,
        itemStyle: { borderRadius: 10 },
        data: data
      }]
    });
    }
  });

  onDestroy(() => myChart?.dispose());
</script>

<div bind:this={chartDom} class="h-full w-full"></div>

