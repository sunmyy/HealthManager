<template>

    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">学生信息查询</h1>
            </el-col>

        </el-row>

        <el-form ref="form" :model="form"
                 label-width="80px"
                 class="filter-form"
        >

            <el-form-item>
                <el-radio-group v-model="form.radio">
                    <el-row class="radioChoice" gutter="20">
                        <el-col :span="6">
                            <el-radio label="studentID" class="radio">请选择查询学号</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-input v-model="form.studentID" placeholder="输入学号"></el-input>
                        </el-col>
                    </el-row>

                    <el-row class="radioChoice" gutter="20">
                        <el-col :span="6">
                            <el-radio label="schoolClass" class="radio">请选择查询班级</el-radio>
                        </el-col>
                        <el-col :span="18">
                            <el-select v-model="form.school"
                                       size="small">
                                <el-option
                                        v-for="item in scools"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                </el-option>
                            </el-select>

                            <el-select v-model="form.studentClass" size="small">
                                <el-option
                                        v-for="item in studentClasses"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                </el-option>
                            </el-select>
                        </el-col>

                    </el-row>

                    <el-row class="radioChoice" gutter="20">
                        <el-col :span="6">
                            <el-radio label="lessonClass" class="radio">请选择教学班级</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-select v-model="form.lessonClass" >
                                <el-option
                                        v-for="item in lessonClasses"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                </el-option>
                            </el-select>
                        </el-col>

                    </el-row>
                </el-radio-group>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>重置</el-button>
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
        name: "students-detail",
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
                    radio: 'studentID', // 默认搜索条件
                    school:'理学院',
                    studentClass: '1001', // 行政班级
                    lessonClass:'1',  // 教学班级,

                },
                scools: ['理学院', '计算机学院', '通信学院'],
                studentClasses:['1001','1002','1003'],
                lessonClasses: ['1', '2', '3']
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        text-align: center;
    }

    .filter-form {
        margin-top: 20px;
        .radioChoice{
            margin-bottom: 15px;
            .radio{
                line-height: 40px;
                text-align: center;
            }
        }
    }

    .table {
        margin-top: 20px;
    }
</style>
