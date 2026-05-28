<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as echarts from 'echarts';

  let { data = [] } = $props();
  let chartDom: HTMLElement;
  let myChart: echarts.ECharts;

  onMount(() => {
    myChart = echarts.init(chartDom);
    const observer = new ResizeObserver(() => myChart?.resize());
    observer.observe(chartDom);
    return () => observer.disconnect();
  });

  // ใช้ $effect เฝ้าดูการเปลี่ยนแปลงของ data เพียงจุดเดียว
  $effect(() => {
    if (myChart && data && data.length > 0) {
      myChart.setOption({
        title: { text: 'Device Status History', left: 'center', top: '2%' },
        tooltip: { 
          trigger: 'axis', 
          axisPointer: { type: 'shadow' } ,
          // add %
          formatter: function (params: any) {
            let tooltipText = `${params[0].name}<br/>`; 
            params.forEach((item: any) => {
              tooltipText += `${item.marker} ${item.seriesName}: ${item.value}%<br/>`;
            });
            return tooltipText;
          }
      },
        legend: { bottom: '0%', left: 'center' }, // แก้จาก botton เป็น bottom
        color: ['#15aa06', '#f59e0b', '#ef4444'],
        backgroundColor: '#ffffff',
        xAxis: { type: 'category', data: data.map(d => d.date) },
        yAxis: { type: 'value',  max: 100, min: 0 ,name: 'Ratio [%]'},
        grid: { left: '3%', right: '4%', bottom: '15%', containLabel: true }, // เพิ่ม bottom เพื่อไม่ให้ legend ทับกราฟ
        series: [
          { name: 'Connected', type: 'bar', stack: 'total', data: data.map(d => d.Connected) },
          { name: 'Disconnected', type: 'bar', stack: 'total', data: data.map(d => d.Disconnected) },
          { name: 'Error', type: 'bar', stack: 'total', data: data.map(d => d.Error) }
        ]
      });
    }
  });

  onDestroy(() => myChart?.dispose());
</script>

<div bind:this={chartDom} class="h-full w-full"></div>