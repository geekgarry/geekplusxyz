<template>
  <div class="container">
    <div class="login-container">
      <div class="form-container" v-if="isLogin">
        <form class="form-horizontal">
          <span class="heading">用户登录</span>
            <div class="form-group">
              <input type="text" class="form-control" id="inputEmail3" placeholder="用户名或电子邮件" />
              <i class="fa fa-user"></i>
            </div>
            <div class="form-group help">
              <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" />
              <i class="fa fa-lock"></i>
              <a href="#" class="fa fa-question-circle"></a>
            </div>
            <div class="form-group">
              <div class="main-checkbox">
                <input type="checkbox" value="None" id="checkbox1" name="check" />
                <label for="checkbox1"></label>
              </div>
              <span class="text">记住我</span>
              <button type="submit" class="btn btn-default">登录</button>
            </div>
        </form>
        <div class="form-tips">如果没有账号，请<a href="javascript:void(0);" @click="isLogin=false">注册</a></div>
      </div>
      <div class="form-container" v-else>
        <form class="form-horizontal">
          <span class="heading">用户注册</span>
            <div class="form-group">
              <input type="text" class="form-control" id="inputEmail3" placeholder="用户名或电子邮件" />
              <i class="fa fa-user"></i>
            </div>
            <div class="form-group help">
              <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" />
              <i class="fa fa-lock"></i>
              <a href="#" class="fa fa-question-circle"></a>
            </div>
            <div class="form-group help">
              <input type="password" class="form-control" id="inputPassword3" placeholder="请确认输入密码" />
              <i class="fa fa-lock"></i>
              <a href="#" class="fa fa-question-circle"></a>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-default">注册</button>
            </div>
        </form>
        <div class="form-tips">如果有账号，返回<a href="javascript:void(0);" @click="isLogin=true">登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLogin: true,
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #678989;
  color: #5b5b5d;
  font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial,
    sans-serif;
  widows: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

.bgcolor-3 {
  background: #e8e8e8;
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
}

/* .login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
.form-container {
  margin: 100px 10px;
}

.form-tips {
  text-align: center;
  padding: 5px 0;
}

.form-horizontal {
  background: #d9e2e7;
  max-width: 500px;
  padding-bottom: 40px;
  border-radius: 15px;
  text-align: center;
}

.form-horizontal .heading {
  display: block;
  font-size: 35px;
  font-weight: 700;
  padding: 35px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 30px;
}

.form-horizontal .form-group {
  padding: 0 40px;
  margin: 0 0 25px 0;
  position: relative;
}

.form-horizontal .form-control {
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  box-shadow: none;
  padding: 0 20px 0 45px;
  height: 40px;
  transition: all 0.3s ease 0s;
}

.form-horizontal .form-control:focus {
  background: #e0e0e0;
  box-shadow: none;
  outline: 0 none;
}

.form-horizontal .form-group i {
  position: absolute;
  top: 12px;
  left: 60px;
  font-size: 17px;
  color: #c8c8c8;
  transition: all 0.5s ease 0s;
}

.form-horizontal .form-control:focus+i {
  color: #00b4ef;
}

.form-horizontal .fa-question-circle {
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 60px;
  font-size: 20px;
  color: #808080;
  transition: all 0.5s ease 0s;
}

.form-horizontal .fa-question-circle:hover {
  color: #000;
}

.form-horizontal .main-checkbox {
  float: left;
  width: 20px;
  height: 20px;
  background: #11a3fc;
  border-radius: 50%;
  position: relative;
  margin: 5px 0 0 5px;
  border: 1px solid #11a3fc;
}

.form-horizontal .main-checkbox label {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

.form-horizontal .main-checkbox label:after {
  content: "";
  width: 10px;
  height: 5px;
  position: absolute;
  top: 5px;
  left: 4px;
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.form-horizontal .main-checkbox input[type="checkbox"] {
  visibility: hidden;
}

.form-horizontal .main-checkbox input[type="checkbox"]:checked+label:after {
  opacity: 1;
}

.form-horizontal .text {
  float: left;
  margin-left: 7px;
  line-height: 20px;
  padding-top: 5px;
  text-transform: capitalize;
}

.form-horizontal .btn {
  float: right;
  font-size: 14px;
  color: #fff;
  background: #00b4ef;
  border-radius: 30px;
  padding: 10px 25px;
  border: none;
  text-transform: capitalize;
  transition: all 0.5s ease 0s;
}

@media only screen and (max-width: 479px) {
  .form-horizontal .form-group {
    padding: 0 25px;
  }

  .form-horizontal .form-group i {
    left: 45px;
  }

  .form-horizontal .btn {
    padding: 10px 20px;
  }
}
</style>