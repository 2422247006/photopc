<template>
  <div class="page">
    <div class="left">
      <orderform></orderform>
    </div>
    <div class="right">
      <div class="r_con">
        <p class="title">可操作项</p>
        <div class="r_box">
          <p class="r_tit">
            <span>修改预约时间</span>
            <el-button
              type="primary"
              style="height:20px;line-height:0px;width:60px;padding:5px;text-algin:center;font-size:10px;"
              @click="changesj"
            >提交修改</el-button>
          </p>
          <div class="l_picker">
            <el-date-picker
              value-format="yyyyMMdd"
              v-model="changetime.orderDate"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
            <el-time-select
              v-model="changetime.orderTime"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              placeholder="选择时间"
            ></el-time-select>
          </div>
        </div>
        <div class="r_box">
          <p class="r_tit">
            <span>修改客户信息</span>
            <el-button
              type="primary"
              style="height:20px;line-height:0px;width:60px;padding:5px;text-algin:center;font-size:10px;"
              @click="changecustinfo"
            >提交修改</el-button>
          </p>
          <div class="inpwrap">
            <span>用户姓名</span>
            <input v-model=" changecust.custName" placeholder="请填写姓名" class="r-inp" />
          </div>
          <div class="inpwrap">
            <span>顾客性别</span>
            <div style="width:80%;">
              <el-radio v-model="changecust.custSex" label="男">男</el-radio>
              <el-radio v-model="changecust.custSex" label="女">女</el-radio>
            </div>
          </div>
        </div>
        <div class="r_box">
          <p class="r_tit">
            <span>修改备注</span>
            <el-button
              type="primary"
              style="height:20px;line-height:0px;width:60px;padding:5px;text-algin:center;font-size:10px;"
               @click="changeremark_()"
            >提交修改</el-button>
          </p>

          <el-input
            type="textarea"
            placeholder="请输入内容"
            maxlength="100"
            show-word-limit
            v-model="changeremark.remark"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import orderform from "./orderform.vue";
export default {
  components: {
    orderform
  },
  data() {
    return {
      listinfo:{},
      changetime: {
        id: "",
        orderDate: "",
        orderTime: ""
      },
      changecust: {
        id: "",
        custName: "",
        custSex: ""
      },
      changeremark: {
        id: "",
        remark: ""
      },
      info: "",
      sex: "",
      value1: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    changesj() {
      var that = this;
      that.changetime.id = that.row.id;
      that.$axios
        .get(that.$apiUrl + "/api/v1/order/modify/date", {
          params: that.changetime
        })
        .then(function(res) {
          // console.log(res.data);
          if (res.data.status == 200) {
            that.$message("已修改");
          } else {
            that.$message(res.data.message);
          }
        });
    },
    changecustinfo() {
      var that = this;
      that.changecust.id = that.row.id;
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/modify/cust", that.changecust)
        .then(function(res) {
          // console.log(res.data);
          if (res.data.status == "0000") {
            that.$message("已修改");
          } else {
            that.$message(res.data.message);
          }
        });
    },
    changeremark_() {
      var that = this;
      that.changeremark.id = that.row.id;
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/modify/remark", that.changeremark)
        .then(function(res) {
          // console.log(res.data);
          if (res.data.status == "0000") {
            that.$message("已修改");
          } else {
            that.$message(res.data.message);
          }
        });
    },
   
  },
  created() {
    this.row = JSON.parse(sessionStorage.getItem("orderRow"));
    // console.log(this.row);
    // this.getlistinfo();
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  width: 50%;
  height: 100%;
}

.right {
  width: 50%;
}
.inpwrap {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.inpwrap span {
  width: 20%;
  font-size: 12px;
}
.r-inp {
  width: 80%;
  height: 20px;
  border-radius: 4px;
  padding: 5px;
  font-size: 12px;
  color: black;
  background: rgb(235, 235, 225);
}
.r_con {
  width: 70%;
}
.r_box {
  width: 100%;
  background: white;
  padding: 15px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 0px 20px #ccc;
  margin: 20px 0;
}

.r_tit {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
textarea {
  width: 100%;
  height: 60px;
  background: rgb(235, 235, 225);
  font-size: 12px;
  padding: 5px;
  box-sizing: border-box;
}
.r_picker {
  width: 100%;
  margin-bottom: 5px;
}
.r_picker span {
  display: inline-block;
  width: 25%;
}
.l_picker {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>