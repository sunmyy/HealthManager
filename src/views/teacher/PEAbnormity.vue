<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">体质测试合理值范围设置</h1>
            </el-col>
        </el-row>

        <el-form ref="form" :model="form" label-width="100px" label-position="right">

            <el-form-item v-for="(item,key) in indicators" :label="key" :key="key">

                    <el-input class='input' v-model="item.min"></el-input>
                到
                    <el-input class='input' v-model="item.max"></el-input>

            </el-form-item>

            <el-form-item>
                <el-button type="primary">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "pe-abnormity",
        data() {
            return {
                form: {},
                indicators: {
                    '身高': {min: 0, max: 0},
                    '50米': {min: 0, max: 0},
                    '立定跳远': {min: 0, max: 0},
                    '800M/1000M': {min: 0, max: 0},
                    '仰卧起坐': {min: 0, max: 0},
                    '引体向上': {min: 0, max: 0},
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .input{
        width: 250px;
    }
</style>
