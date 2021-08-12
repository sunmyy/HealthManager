<template>

    <div>

        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 身体健康趋势变化图
                </el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div>
            <div id="health" style="width: 600px;height:400px;margin: auto"></div>
            <div id="rank" style="width: 600px;height:400px;margin: auto"></div>

        </div>

    </div>


</template>

<script>
    export default {
        name: "s-pe-details",
        mounted() {
            this.$nextTick(this.drawLine);
        },
        methods: {
            drawLine() {
                var healthPlot = this.$echarts.init(document.getElementById('health'));
                var rankPlot = this.$echarts.init(document.getElementById('rank'));
                // 指定图表的配置项和数据
                var healthOption  = {
                    title: {
                        text: '身体素质变化情况'
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
                        data: ['2018-05-16','2019-05-17','2020-05-18','2021-05-19']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    series: [
                        {
                            name:'素质值',
                            type:'line',
                            data:[1, 1, 5, 3, 2, 3, 2],
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
                var rankOption=   {
                    title: {
                        text: '身体素质等级'
                    },
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['身体素质','身体形态', '身体机能'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'表现情况',
                            type:'bar',
                            barWidth: '60%',
                            data:[100, 200, 200,]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                healthPlot.setOption(healthOption);
                rankPlot.setOption(rankOption);
            }
        }
    }
</script>

<style scoped>

</style>
