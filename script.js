// ECharts-Instanz erstellen
var myChart = echarts.init(document.getElementById('main'));

// Optionen für das Kreisdiagramm definieren
var option = {
  title: {
    text: 'Kreisdiagramm Beispiel',
    subtext: 'ECharts Tutorial',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Apples', 'Bananas', 'Grapes', 'Oranges', 'Strawberries']
  },
  series: [
    {
      name: 'Früchte',
      type: 'pie',
      radius: '50%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Apples' },
        { value: 310, name: 'Bananas' },
        { value: 234, name: 'Grapes' },
        { value: 135, name: 'Oranges' },
        { value: 1548, name: 'Strawberries' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

// Diagramm mit den definierten Optionen rendern
myChart.setOption(option);
