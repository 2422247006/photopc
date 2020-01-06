<template>
  <div class="page">
    <div class="header">繁减管理系统</div>
    <div class="con">
      <div class="imgwrap">
        <div class="login">
          <div class="inp">
            <span>账户</span>
            <el-input placeholder="请输入账户名" v-model="loginName"></el-input>
          </div>
          <div class="inp">
            <span>密码</span>
            <el-input
              placeholder="请输入密码"
              v-model="loginPass"
              show-password
              @keyup.enter.native="aaa"
            ></el-input>
          </div>
          <div class="btn" @click="loginclick">
            <span>登</span>
            <span>录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      loginName: "",
      loginPass: ""
    };
  },
  methods: {
    aaa: function() {
      this.getlogininfo();
    },
    getlogininfo: function() {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/admin/login", {
          loginName: that.loginName,
          loginPass: that.loginPass
        })
        .then(function(res) {
          console.log(res.data);
          if (res.data.status == '0000') {
              sessionStorage.setItem("loginName",that.loginName);
            that.$router.push({
            path: "/manage"
          })
          }else{
             that.$alert(res.data.message, "", {});
          }
        //   } else if (res.data.status == 10002) {
        //     that.$alert("请填写用户名和密码", "", {});
        //   }
        //   var userName = res.data.body.userName;
        //   var headImg = res.data.body.headImg;
        
        //   sessionStorage.setItem("headImg", headImg);
         
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    loginclick: function() {
      this.getlogininfo();
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 58px;
  line-height: 58px;
  background: rgb(50, 64, 87);
  color: white;
  font-size: 24px;
  padding-left: 20px;
}
.con {
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgb(50, 64, 87);
  padding: 18px;
  box-sizing: border-box;
}
.imgwrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(50, 64, 87);
  background-size: 100% 100%;
  position: relative;
}
.login {
  width: 352px;
  background: white;
  border: 1px solid rgb(50, 64, 87);
  border-radius: 2px;
  padding: 86px 57px;
}
.inp {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  margin-bottom: 26px;
}
.inp span {
  width: 15%;
  font-size: 16px;
  color: rgb(50, 64, 87);
}
.input {
  width: 80%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0 10px;
  box-sizing: border-box;
}
.btn {
  width: 80%;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: white;
  font-weight: 550;
  background: rgb(50, 64, 87);
  border-radius: 2px;
  margin: 58px 0 0 15%;
}
.btn span {
  padding: 0 20px;
  font-size: 16px;
}
</style>