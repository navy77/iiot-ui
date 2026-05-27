<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as echarts from 'echarts';

  // รับค่า data จากหน้า page.svelte
  let { data = [] } = $props(); 
  
  let chartDom: HTMLElement;
  let myChart: echarts.ECharts;

  onMount(() => {
    myChart = echarts.init(chartDom);
    updateChart(data); // เรียกวาดครั้งแรก
    window.addEventListener('resize', () => myChart?.resize());
  });

  // ใช้ $effect เพื่อตรวจจับเมื่อ data เปลี่ยนแปลง
  $effect(() => {
    if (myChart && data) {
      updateChart(data);
    }
  });

  function updateChart(chartData: any[]) {
    myChart.setOption({
      title: {text: 'Device Status',left: 'center',top: '2%'},
      tooltip: { trigger: 'item' },
      legend: {botton: '5%',left: 'center'},
      color: ['#41c732', '#f59e0b', '#ef4444'],
      series: [{
        type: 'pie',
        radius: ['20%', '70%'],
        padAngle: 5,
        itemStyle: { borderRadius: 10 },
        data: chartData
      }]
    });
  }

  onDestroy(() => myChart?.dispose());
</script>

<div bind:this={chartDom} class="h-[400px] w-full"></div>