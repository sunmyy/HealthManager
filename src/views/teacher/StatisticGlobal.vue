<template>
    <div>
        <h1 style="margin-bottom: 20px;text-align: center">整体统计分析</h1>
        <div id="avgPlot" style="width: 600px;height:400px;margin: auto"></div>
        <div id="malePlot" style="width: 600px;height:400px;margin: auto"></div>
    </div>

</template>

<script>
    export default {
        name: "statistic-g",
        data() {
            return {};
        },
        mounted() {
            this.$nextTick(this.drawLine);
        },
        methods: {
            drawLine() {
                var avgPlot = this.$echarts.init(document.getElementById('avgPlot'));
                var malePlot = this.$echarts.init(document.getElementById('malePlot'));
                // 指定图表的配置项和数据
                var avgOption = {
                    title: {
                        text: '平均素质值年份变化'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['耐力','爆发力']
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017年','2018年','2019年','2020年']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    series: [
                        {
                            name:'平均素质值',
                            type:'line',
                            data:[3, 2, 4, 3,1, 6, 5],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },

                    ]
                };
                var maleOption=  {
                    title: {
                        text: '男性平均素质值变化'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['耐力','爆发力']
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017年','2018年','2019年','2020年']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    series: [
                        {
                            name:'平均素质值',
                            type:'line',
                            data:[1, 4, 5, 5,1, 3, 3],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },

                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                avgPlot.setOption(avgOption);
                malePlot.setOption(maleOption);
            }
        }
    }
</script>

<style scoped>

</style>
