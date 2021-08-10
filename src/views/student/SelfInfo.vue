<template>
    <el-form ref="form" :model="form"
             label-width="80px"
    >
        <el-form-item label="密码" >
            <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="form.pwd1"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item >
            <el-button type="primary">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "s-self-info",
        data() {
            return {
                form: {
                    pwd: '',
                    pwd1: '',
                    name: '',
                    email: ''
                }
            }
        }

    }
</script>

<style scoped>

</style>
