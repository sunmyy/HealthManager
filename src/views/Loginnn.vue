<template>
  <el-container class="container">
    <el-header class="header">
    </el-header>
    <el-main class="main">
      <div class="login-wrap">
        <div class="ms-login">
          <div class="ms-title">西安邮电大学体质健康管理系统</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
            <el-form-item prop="username">
              <el-input v-model="param.username"
                        placeholder="用户名"
                        suffix-icon="el-icon-user">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                      type="password"
                      v-model="param.password"
                      placeholder="密码"
                      @keyup.enter="submitForm()"
                      suffix-icon="el-icon-lock"
              >
              </el-input>
            </el-form-item>

            <el-form-item prop="captcha_code">
              <el-input v-model="param.captcha_code"
                        placeholder="验证码"
                        maxlength="4"
                        style="float: left; width: 122px;">

              </el-input>
              <img src="../assets/img/login/captcha.jpeg" alt=""
                   style="float: right; width: 122px">
            </el-form-item>

            <el-form-item prop="role">

              <el-select v-model="param.role" style="width: 100%" >
                <el-option label="学生" value="student"></el-option>
                <el-option label="教师" value="teacher"></el-option>
              </el-select>


            </el-form-item>

            <div class="login-btn">
              <el-button type="primary" @click="submitForm()">登录</el-button>
            </div>
          </el-form>
        </div>
      </div>

    </el-main>
  </el-container>


</template>

<script>

  export default {
    data() {
      return {
        users: {
          admin: {
            username: "teacher",
            password: "123123",
            role: 'teacher'
          },
          hollis: {
            username: "student",
            password: "123123",
            role: 'student'
          },

        },
        param: {
          username: "",
          password: "",
          role: 'student',
          captcha_code: "",
          captcha_img: ""
        },
        rules: {
          username: [
            {required: true, message: "请输入用户名", trigger: "blur"}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"}
          ],
          captcha_code: [
            {required: true, message: "请输入验证码", trigger: "blur"}
          ]
        }
      };
    },
    created() {
      this.$store.commit("clearTags");
    },
    methods: {
      submitForm() {
        this.$refs.login.validate(valid => {
          if (valid) {
            this.$message.success("登录成功");
            this.param=this.param.role=='student'?this.users.hollis:this.users.admin;
            this.$auth.setToken(this.param); // 学生 教师 身份测试

            if(this.param.role=='teacher'){
              this.$router.push("/teacher");
            }else{
              this.$router.push("/student");
            }


          } else {
            this.$message.error("请输入账号和密码");
            return false;
          }
        });
      },
    }
  };
</script>

<style scoped lang="scss">

  .container, .header, .main, .footer {
    padding: 0;
    background: white;
  }

  .main {
    height: 80vh;
    margin-top: 35px;

    .login-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      /*background-image: url(../assets/img/login-bg.jpg); // 背景图*/
      background-image: url(../assets/img/login/pe_loginbg.jpg); // 背景图
      background-size: 100%;
      background-repeat: no-repeat;

    }

    .ms-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #ddd;
    }

    .ms-login {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 350px;
      margin: -190px 0 0 -175px; // 使登录框居中
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      overflow: hidden;
    }

    .ms-content {
      padding: 30px 30px;
    }

    .login-btn {
      text-align: center;
    }

    .login-btn button {
      width: 100%;
      height: 36px;
      margin-bottom: 10px;
    }

    .login-tips {
      font-size: 12px;
      line-height: 30px;
      color: #fff;
    }
  }

  .footer {
    margin-top: 10px;
    text-align: center;

  }
</style>
