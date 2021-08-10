<template>
    <el-container>

        <el-header class="header">
            <h1 class="logo">西安邮电大学体质健康管理系统</h1>
            <el-button size="small" @click="login"> 登录</el-button>
        </el-header>
        <el-main>
            <el-row>
                <div class="block">
                    <el-carousel height="500px">
                        <el-carousel-item>
                            <img src="../assets/img/news/20.png" alt=""
                            style="width: 100%;height: 100%">
                        </el-carousel-item>
                        <el-carousel-item><img src="../assets/img/news/70.jpg" alt=""
                                               style="width: 100%;height: 100%">
                        </el-carousel-item>
                        <el-carousel-item><img src="../assets/img/news/80.jpg" alt=""
                        style="width: 100%;height: 100%">
                        </el-carousel-item>

                    </el-carousel>
                </div>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <div>
                        <h3 class="title">通知公告</h3>
                        <table border="0" cellpadding="4" cellspacing="4" width="100%">

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=161" target="_blank" title="办理学生体质达标免测通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />办理学生体质达标免测通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:5027">18/09/07 17:33</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=121" target="_blank" title="体质达标常见问题解释"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />体质达标常见问题解释</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:9749">15/10/18 23:17</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=175" target="_blank" title="11.28日“室外项目”集中补测通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />11.28日“室外项目”集中补测通知</a>
                                </td>
                                <td>
                                    <span title="发布人:牛海旭,浏览次数:176">20/11/25 16:32</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=174" target="_blank" title="11.22日是针对全校各年级缓测、缺测、缺项等情况的集中补测日"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />11.22日是针对全校各年级缓测、缺测、缺项等情况的集中补测日</a>
                                </td>
                                <td>
                                    <span title="发布人:牛海旭,浏览次数:244">20/11/18 11:02</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=172" target="_blank" title="2020-2021-1 学期17、18、19、20级学生达标测试通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2020-2021-1 学期17、18、19、20级学生达标测试通知</a>
                                </td>
                                <td>
                                    <span title="发布人:牛海旭,浏览次数:8289">20/09/11 14:35</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=170" target="_blank" title="2019-2020-1学期19级室内达标测试时间安排"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2019-2020-1学期19级室内达标测试时间安排</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:1089">19/10/21 12:26</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=169" target="_blank" title="2019年下半年达标补测通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2019年下半年达标补测通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:1305">19/10/08 16:29</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=166" target="_blank" title="2019年上半年达标补测通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2019年上半年达标补测通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:1544">19/03/20 14:43</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=165" target="_blank" title="2019年上半年学生体质达标测试通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2019年上半年学生体质达标测试通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:2767">19/02/26 17:28</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=162" target="_blank" title="2018年下半年最后一次达标补测时间通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2018年下半年最后一次达标补测时间通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:2613">18/09/11 13:39</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=160" target="_blank" title="2018年上半年学生体质达标补测通知"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2018年上半年学生体质达标补测通知</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:2320">18/05/07 10:02</span>
                                </td>
                            </tr>

                            <tr>
                                <td class="td-title">
                                    <a href="ViewNotice.aspx?id=159" target="_blank" title="2018年学生体质健康时间安排"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2018年学生体质健康时间安排</a>
                                </td>
                                <td>
                                    <span title="发布人:管理员,浏览次数:2969">18/03/15 13:54</span>
                                </td>
                            </tr>

                        </table>
                    </div>
                </el-col>
                <el-col :span="12">
                    <h3 class="title">相关下载</h3>
                    <table border="0" cellpadding="4" cellspacing="4" width="100%">

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=134" target="_blank" title="西安邮电大学体质健康测试知情通知书.doc"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />西安邮电大学体质健康测试知情通知书.doc</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:12506">16/02/29 13:24</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=104" target="_blank" title="《国家学生体质健康标准》评分表.PDF"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />《国家学生体质健康标准》评分表.PDF</a>
                            </td>
                            <td>
                                <span title="发布人:钱老师,下载次数:20667">15/04/13 17:22</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=173" target="_blank" title="2020年18、19级班长预约达标步骤及测试方法PPT.pptx"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2020年18、19级班长预约达标步骤及测试方法PPT.pptx</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:4366">20/09/13 13:13</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=168" target="_blank" title="2015级毕业生体质达标未合格学生名单.xlsx"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2015级毕业生体质达标未合格学生名单.xlsx</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:7207">19/04/10 09:54</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=158" target="_blank" title="2014级西安邮电大学体测毕业成绩不合格的学生统计.xls"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2014级西安邮电大学体测毕业成绩不合格的学生统计.xls</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:8575">18/03/08 09:44</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=157" target="_blank" title="2015级班长预约达标步骤及测试方法PPT.ppt"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2015级班长预约达标步骤及测试方法PPT.ppt</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:8354">18/03/06 15:17</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=154" target="_blank" title="2017-2018-1学期17级教师达标安排时间表.xls"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2017-2018-1学期17级教师达标安排时间表.xls</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:7428">17/09/13 15:25</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=151" target="_blank" title="2013级毕业不合格和缺少数据名单.xls"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2013级毕业不合格和缺少数据名单.xls</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:8923">17/04/19 14:13</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=147" target="_blank" title="2014级班长预约体质达标步骤演示.ppt"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2014级班长预约体质达标步骤演示.ppt</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:8321">17/02/15 11:22</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=146" target="_blank" title="2016年学生体测成绩统计表.xls"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2016年学生体测成绩统计表.xls</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:14527">16/12/02 09:22</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=145" target="_blank" title="2016年体质达标缺测.旷考人员名单.xls"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />2016年体质达标缺测.旷考人员名单.xls</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:8768">16/11/28 13:39</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="td-title">
                                <a href="Download.ashx?id=143" target="_blank" title="【运动世界校园】APP使用指南(学生版).pptx"><img style="border:none;width:7px;height:7px;margin-right:2px;" src="images/dian.png" align="absmiddle" />【运动世界校园】APP使用指南(学生版).pptx</a>
                            </td>
                            <td>
                                <span title="发布人:管理员,下载次数:10154">16/10/20 14:46</span>
                            </td>
                        </tr>

                    </table>
                </el-col>
            </el-row>
        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "news",
        methods: {
            login() {
                this.$router.push('/login');
            },
        }
    }
</script>

<style scoped lang="scss">

    .header {
        background: white;
        padding: 10px;
        padding-right: 5px;
        display: flex;
        justify-content: space-between;

        .logo {
            text-align: center;
        }
    }

    .block {
        width: 100%;
        margin-bottom: 20px;

    }

    .title{
        text-align: left;
        padding: 10px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
