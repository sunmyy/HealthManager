<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">历年成绩查询</h1>
            </el-col>

            <el-form ref="form" :model="form"
                     label-width="80px">

                <el-form-item>

                    <span>请选择年份</span>
                    <el-select v-model="form.year" class="select">
                        <el-option value="2013" label="2013"></el-option>
                        <el-option value="2015" label="2015"></el-option>
                    </el-select>
                    <span>请选择学期</span>
                    <el-select v-model="form.semester" class="select">
                        <el-option value="2013" label="2013"></el-option>
                        <el-option value="2015" label="2015"></el-option>
                    </el-select>

                </el-form-item>
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
                                <el-select v-model="form.lessonClass">
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
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确定</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form-item>


            </el-form>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "pe-history",
        data() {
            return {
                form: {
                    year: '2013',
                    semester: '2013',
                    radio: 'studentID'
                },
                scools: ['理学院', '计算机学院', '通信学院'],
                studentClasses: ['1001', '1002', '1003'],
                lessonClasses: ['1', '2', '3']
            }
        }
    }
</script>

<style scoped lang="scss">
    .select {
        width: 100px;
        margin: 0 10px;
    }

    .radioChoice {
        margin-bottom: 15px;

        .radio {
            line-height: 40px;
            text-align: center;
        }
    }
</style>
