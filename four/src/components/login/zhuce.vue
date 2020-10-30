<template>
  <div>
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
          center
          clearable
        >
          <template #button>
            <span
              class="hmwHQ"
              v-show="!hmwYZ"
              style="color: #eb6100;"
              @click="hmwyzmDian"
              >获取验证码</span
            >
          </template>
        </van-field>
        <!-- 获取验证码倒计时 -->
        <div class="hmwYZTime" v-show="hmwYZ">
          <p>获取验证码({{ count }})</p>
        </div>
        <van-field
          @focus="hmwF(2)"
          @blur="hmwB(2)"
          :class="hmwInputActive2 ? 'hmwInputActive' : ''"
          v-model="text"
          type="text"
          name="验证码"
          placeholder="请输入验证码"
        />
        <div class="sy_zhao">
          <span class="sp">*未注册的手机号将自动注册</span>
          <span @click="denglv">使用密码登录</span>
        </div>
        <div style="width:72%;margin-top:10%;">
          <van-button round native-type="submit" @click="onLogin">
            立即注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import { CountDown } from 'vant';
import { Toast } from "vant";
export default {
  // 监听
  watch: {},
  data() {
    return {
      username: "",
      text: "",
      type: 2,
      // 光标控制样式变量
      hmwInputActive1: false,
      hmwInputActive2: false,
      // 获取验证码时判断
      hmwYZ: false,
      hmwyzDian: false,
      time: 60,
      // 倒计时
      count: "",
      timer: null,
    };
  },
  methods: {
    denglv() {
      this.$router.push({ path: "/login" });
    },
    async onLogin() {
      // 判断一下
      if (this.username == "" || this.text == "") {
        Toast("每条信息都要填哦！");
        return false;
      }
      let { data } = await this.$Net.login({
        mobile: this.username,
        sms_code: this.text,
        client: 1,
        type: this.type,
      });
      console.log(data);
      if (data.code == 200) {
        var token = data.data.remember_token;
        // 保存token但是下面那个不知道有什么用
        localStorage.setItem("token", token);
        localStorage.setItem("username", this.username);
        this.$router.push({ path: "/mime" });
      } else {
        Toast(data.msg);
      }
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
    // 点击获取验证码
    async hmwyzmDian() {
      // 手机正则
      let phone = /^1[3456789]\d{9}$/
      if (phone.test(this.username)) {
        console.log(this.username)
        // 如果手机号正确才能请求接口
        // 获取验证码接口
        let { data } = await this.$Net.hmwYZM({
            mobile: this.username,
            sms_type: "login"
        });
        // 判断验证码是否请求成功
        if(data.code==200){
          // 改变样式，开始倒计时
          this.hmwYZ = true;
          this.getCode();
        }else{
          Toast(data.msg);
        }
        console.log(data)
      } else {
        Toast("请按要求填写电话号码!");
        return false;
      }
    },
    // 验证码倒计时
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
          }
          // 倒计时结束时改变样式
          if (this.count == 0) {
            this.hmwYZ = false;
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scopde>
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
}
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
  font-size: 0.5rem;
  margin-top: 10px;
  display: inline-flex;
  justify-content: space-between;
  color: grey;
}
.sp {
  color: rgb(194, 194, 194);
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
.van-field {
  width: 72%;
  height: 2.3rem;
  margin-bottom: 1rem;
}
.van-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 输入框按钮 */
/* 倒计时样式 */
.hmwYZTime {
  box-sizing: border-box;
  padding-left: 13.4rem;
  width: 100%;
  height: 2rem;
  /* text-align: right; */
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 0.2rem;
  color: rgb(204, 204, 204);
}
.van-count-down {
  font-size: 0.2rem;
  color: rgb(204, 204, 204);
}
/* 获取验证码 */
.hmwHQ {
  font-size: 0.2rem;
}
</style>
