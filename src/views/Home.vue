<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Charts :options="options" :styles="styles" ref="chart"></Charts>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Charts from './Charts'
import data from '../data/getRuntimeDetailByTimeRange.json'
import { timeFormat } from '../utils'

export default {
  name: 'Home',
  data () {
    return {
      options: {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return `${this.value}%`
            }
          }
        },
        tooltip: {
          animation: false,
          shared: true,
          useHTML: true,
          followPointer: false,
          followTouchMove: false,
          hideDelay: 2000,
          style: {
            pointerEvents: 'all'
          },
          formatter: function (params) {
            let tip = timeFormat(new Date(this.x), 'yyyy/MM/dd HH:mm:ss')
            tip += '<div style="max-height:160px;overflow:auto;">'
            for (const i in this.points) {
              tip +=
                `<table><tr><td style="padding-right: 20px;">${this.points[i].point.series.name}` +
                `</td><td style="text-align: right;">${this.points[i].y}%</td></tr></table>`
            }
            tip += '</div>'
            return tip
          }
        },
        series: []
      },
      styles: {}
    }
  },
  mounted () {
    // const categories = []
    // const series = []
    let downUseRatio = {}
    if (data.data && data.data.downUseRatio) {
      downUseRatio = data.data.downUseRatio
    }
    // for (const key in downUseRatio) {
    //   if (downUseRatio[key] && categories.length <= 0) {
    //     downUseRatio[key].forEach(item => {
    //       categories.push(new Date(item.time).getTime())
    //     })
    //   } else {
    //     break
    //   }
    // }
    for (const key in downUseRatio) {
      const data = []
      if (downUseRatio[key]) {
        downUseRatio[key].forEach(item => {
          data.push([new Date(item.time).getTime(), item.inUseRatio])
        })
        this.$refs.chart.chart.addSeries({
          name: key,
          data
        }, false)
      }
      // this.$refs.chart.chart.xAxis[0].setCategories(categories)
    }
    // console.log(categories)
    // console.log(series)
    // console.log(this.$refs.chart.chart)
    this.$refs.chart.chart.redraw()
  },
  components: {
    // HelloWorld
    Charts
  }
}
</script>
