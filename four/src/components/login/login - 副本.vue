<template>
  <div class="sy_dv">
    <div class="sy_img">
      <img src="../../assets/login.png" alt="" />
    </div>
    <div class="sy_input">
      <van-form>
        <van-field
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
          :class="hmwInputActive1 ? 'hmwInputActive' : ''"
          @focus="hmwF(1)"
          @blur="hmwB(1)"
        />
        <van-field
          @focus="hmwF(2)"
          @blur="hmwB(2)"
          :class="hmwInputActive2 ? 'hmwInputActive' : ''"
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
        />
        <div class="sy_zhao">
          <span @click="zhao">找回密码</span>
          <span @click="zhuce">注册/验证码登录</span>
        </div>
        <div style="width:72%;margin-top:10%;">
          <van-button round native-type="submit" @click="onLogin">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      type: 1,
      // 光标控制样式变量
      hmwInputActive1: false,
      hmwInputActive2: false,
    };
  },
  methods: {
    // 点击登录事件
    onLogin() {
      // 判断一下
      if (this.username == "" || this.password == "") {
        Toast("输入不正确");
        return false;
      }
      this.$Net
        .login({
          mobile: this.username,
          password: this.password,
          type: this.type,
        })
        .then((res) => {
          console.log(res);
          // localStorage.token = res.data.token;
          var token = res.data.data.remember_token;
          localStorage.setItem("token", token);
          localStorage.setItem("username", this.username);
          this.$router.push({ path: "/mime" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    zhao() {
      this.$router.push({ path: "/mima" });
    },
    zhuce() {
      this.$router.push({ path: "/zhu" });
    },
    // 获取光标事件
    hmwF(i) {
      if (i == 1) {
        this.hmwInputActive1 = true;
        this.hmwInputActive2 = false;
      } else {
        this.hmwInputActive1 = false;
        this.hmwInputActive2 = true;
      }
    },
    // 失去光标事件
    hmwB() {
      this.hmwInputActive1 = false;
      this.hmwInputActive2 = false;
    },
  },
  mounted() {},
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.sy_dv {
  width: 100%;
}
.sy_img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sy_img img {
  width: 74%;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.sy_input {
  width: 100%;
  margin-top: 60px;
  background: white !important;
}
.van-cell {
  padding: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
}
/* 有光标时样式 */
.van-form .hmwInputActive {
  border-bottom: 1px solid orangered;
}
.van-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 包input的盒子 */
.van-field {
  width: 72%;
  height: 2.3rem;
  margin-bottom: 1rem;
}
.van-button {
  width: 100%;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 1rem;
  color: white;
}
.sy_zhao {
  width: 72%;
  /* border: 1px solid black; */
  font-size: 0.5rem;
  margin-top: 10px;
  display: inline-flex;
  justify-content: space-between;
  color: grey;
}
</style>
