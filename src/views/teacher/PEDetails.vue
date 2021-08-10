<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">体测数据管理</h1>
            </el-col>

        </el-row>

        <el-form ref="form" :model="form"
                 label-width="80px"
                 inline
                 class="filter-form">
            <el-form-item>
               <span>年级</span>
                <el-select v-model="form.grade" style="width: 100px">
                    <el-option label="2016级" value="2016级"></el-option>
                    <el-option label="2017级" value="2017级"></el-option>
                </el-select>
                <span>班级</span>
                <el-select v-model="form.class" style="width: 100px">
                    <el-option label="20161010" value="20161010"></el-option>
                    <el-option label="20171010" value="20171010"></el-option>
                </el-select>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>


        <el-row class="table">
            <el-table
                    :data="tableData"
                    border
                    highlight-current-row
                    style="width: 100%">
                <el-table-column
                        type="index"
                        label="序号"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="学号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="class"
                        label="班级">
                </el-table-column>
                <el-table-column
                        prop="nationality"
                        label="民族">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别">
                </el-table-column>
                <el-table-column
                        prop="borth"
                        label="出生日期">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="家庭地址">
                </el-table-column>
                <el-table-column
                        prop="comment"
                        label="备注">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "pe-details",
        data() {
            return {
                tableData: [
                    /*
                    * 序号	学号	姓名	班级名称	名族代码	性别	出生日期	家庭地址	备注信息
                    * */
                    {
                        id: '121212',
                        name: '巴拉啦',
                        class: '青铜',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '没的说'
                    },

                    {
                        id: '121212',
                        name: '哭唧唧',
                        class: '白银',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '上去就是一脚'
                    },

                    {
                        id: '121212',
                        name: '黄澄澄',
                        class: '黄巾',
                        nationality: '汉',
                        sex: '男',
                        borth: '1234-5-6',
                        address: 'sjokhjiuh',
                        comment: '没的说'
                    },
                ],
                form: {
                  grade:'2016级',
                  class:'20161010',
                },
                scools: ['理学院', '计算机学院', '通信学院'],
                studentClasses: ['1001', '1002', '1003'],
                lessonClasses: ['1', '2', '3']
            }
        },

    }
</script>

<style scoped lang="scss">
    .title {
        text-align: center;
    }

    .filter-form {
        margin-top: 20px;

        .radioChoice {
            margin-bottom: 15px;

            .radio {
                /*width: 100%;*/
                line-height: 40px;
                text-align: center;
            }
        }
    }

    .table {
        margin-top: 20px;
    }
</style>
