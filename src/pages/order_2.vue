<template>
  <div class="page">
    <div class="header">
      <div class="headerdiv div1"></div>
      <div class="headerdiv div2"></div>
      <div class="headerdiv div3"></div>
      <div class="headerdiv div4"></div>
      <div class="headerdiv div5"></div>
      <div class="headerdiv div6"></div>
      <div class="headerdiv div7"></div>
      <div class="headerdiv div8" @mouseover="descmouseover" @mouseleave="descmouseleave">
        <img src="../assets/icon/why.png" style="width:100%;height:100%;background:none" />
      </div>
      <div style="margin-left:30%;">
        <el-button type="primary" >《前七天</el-button>
        <el-button type="primary">后七天》</el-button>
      </div>
      <div class="desc" v-if="desc">
        <p >白色:表示可预约的时间点</p>
        <p style="statusor:gray">灰色:表示已过期的时间点</p>
        <p>黑色:表示已预约的时间点</p>
        <p style="statusor:#1989fa">蓝色:表示占位的时间点</p>
        <p style="statusor:green">绿色:表示订单已完成的时间点</p>
        <p style="statusor:red">红色:表示已关闭的时间点</p>
        <p style="statusor:orange">橘色:表示未付款时间点</p>
      </div>
    </div>
    <div class="date">
      <div class="date_left"></div>
      <div
        :style="{width:index===11?'20px':'70px'}"
        v-for="(item,index) of datelist"
        :key="item"
        class="dateitem"
      >{{item}}</div>
    </div>
    <div class="con" v-for="(item,index) of daylist" :key="item.id">
      <div class="left">
        <div class="dayl">
          <p>{{item.day}}</p>
          <p>周六</p>
        </div>
        <div class="dayr">
          <p>可用总量:36</p>
          <p>可用余量:0</p>
          <p class="more" @mouseover="detailsmouseover(index)" @mouseleave="detailsmouseleave">详情</p>
        </div>
        <div class="details" v-if="changeactive==index" >
          <p class="p1">6月19日预约产品数量(包含未付款)</p>
          <p class="p2">总计：40</p>
          <p class="p3">证件照-正面-白色：7</p>
          <p class="p3">证件照-正面-白色：7</p>
          <p class="p3">证件照-正面-白色：7</p>
          <p class="p3">证件照-正面-白色：7</p>
        </div>
      </div>
      <div class="time" :style="{width:index===11?'20px':'70px'}" v-for="(i,index) of item.time">
        <div
          class="bor"
          :style="{width:index===11?'100%':'30%',background:s.status==='0'?'black':s.status==='1'?'#1989fa':s.status==='2'?'green':s.status==='3'?'red':s.status==='4'?'#dddddd':s.status==='5'?'white':'orange'}"
          v-for="s of i.statusor"
          :title="s.title"
          @click="openclick(s.status)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeactive: -1,
      desc: false,
      details: false,
      datelist: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
      ],
      daylist: [
        {
          id: 0,
          day: "6月29日",
          time: [
            {
              id: 0,
              statusor: [
                { id: 0, status: "0", title: "10:00" },
                { id: 0,  status: "1", title: "10:20" },
                { id: 0, status: "2", title: "10:40" },
                { id: 0, status: "3", title: "10:00" },
                { id: 0, status: "4", title: "10:20" },
                { id: 0, status: "5", title: "10:40" },
                { id: 0, status: "6", title: "10:00" },
                { id: 0, status: "3", title: "10:20" },
                { id: 0, status: "0", title: "10:40" },
                { id: 0, status: "1", title: "10:00" },
                { id: 0, status: "4", title: "10:20" },
                { id: 0, status: "3", title: "10:40" }
              ]
            },
            {
              id: 1,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 2,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 3,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 4,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 5,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 6,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 7,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 8,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 9,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 10,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "4" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "3" },
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "4" },
                { id: 0, status: "3" }
              ]
            },
            {
              id: 11,
              statusor: [
                { id: 0, status: "0" },
                { id: 0, status: "1" },
                { id: 0, status: "2" },
                { id: 0, status: "2" }
              ]
            }
          ]
        },
        {
          id: 1,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        },
        {
          id: 2,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        },
        {
          id: 3,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        },
        {
          id: 4,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        },
        {
          id: 5,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        },
        {
          id: 6,
          day: "6月29日",
          time: [
            { id: 0, statusor: "0" },
            { id: 1, statusor: "0" },
            { id: 2, statusor: "0" },
            { id: 3, statusor: "0" },
            { id: 4, statusor: "0" },
            { id: 5, statusor: "0" },
            { id: 6, statusor: "0" },
            { id: 7, statusor: "0" },
            { id: 8, statusor: "0" },
            { id: 9, statusor: "0" },
            { id: 10, statusor: "0" },
            { id: 11, statusor: "0" }
          ]
        }
      ]
    };
  },
  methods: {
    descmouseover() {
      this.desc = true;
    },
    descmouseleave() {
      this.desc = false;
    },
    detailsmouseover(index) {
      this.changeactive = index;
    },
    detailsmouseleave(index) {
      this.changeactive = -1;
    },
    openclick(status) {
      if (status == 3) {
        this.$confirm("该时间点已被人工关闭，不可对其操作", "已关闭的时间点", {
          confirmButtonText: "开放时间点",
          cancelButtonText: "取消"
        }).then(() => {
          this.$message({
            type: "success",
            message: "已开放!"
          });
        });
      } else if (status == 5) {
        this.$confirm("该时间点暂无顾客预约", "空闲的时间点", {
          confirmButtonText: "添加预约",
          cancelButtonText: "关闭时间点"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "已添加!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已关闭"
            });
          });
      } else if (status == 0) {
        var aaa = "吴易凡";
        var ref='ref="print"'
        this.$confirm(
          `<div ${ref}>订单号:120415574555<br>时间点：2019-06-29&nbsp10:20:00<br>顾客姓名:${aaa}<br>联系电话:15044003242<br>订单状态:等待拍摄<br>拍摄内容:结婚照-结婚登记照</div>`,
          "被预约时间点",
          {
            confirmButtonText: "打印订单",
            cancelButtonText: "取消",
            dangerouslyUseHTMLString: true
          }
        )
          .then(() => {
            
           this.$print(this.$refs.print)
            // this.$message({
            //   type: "success",
            //   message: "已添加!"
            // });
          })
      }
    }
  }
};
</script>
<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgb(221, 221, 221);
}

.headerdiv {
  width: 20px;
  height: 20px;
  border-radius: 20%;
  margin: 0 5px;
  border-bottom: 0.5px solid rgb(221, 221, 221);
}
.div1 {
  background: black;
}
.div2 {
  background: #1989fa;
}
.div3 {
  background: green;
}
.div4 {
  background: red;
}
.div5 {
  background: rgb(221, 221, 221);
}
.div6 {
  background: white;
}
.div7 {
  background: orange;
}

.div8 {
  background: none;
  cursor: pointer;
}
.desc {
  position: absolute;
  top: 50px;
  left: 0;
  background: rgb(242, 242, 242);
  padding: 0 30px;
  box-shadow: 5px 5px 5px #888888;
  z-index: 2;
}
.desc p {
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.date {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.dateitem {
  width: 70px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.date_left {
  width: 12%;
  height: 50px;
}
.left {
  width: 12%;
  height: 80px;
  display: flex;
  border: 1px solid rgb(221, 221, 221);
  position: relative;
}
.details {
  width: 250px;
  padding: 0 30px;
  background: white;
  position: absolute;
  top: 30px;
  left: 80%;
  z-index: 2;
  border-radius: 2%;
  box-shadow: 5px 5px 5px #888888;
}
.p1 {
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid rgb(221, 221, 221);
  font-weight: 550;
}
.p2 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 550;
}
.p3 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  statusor: #707070;
}
.dayl {
  width: 40%;
  height: 80px;
  background: rgb(221, 221, 221);
  font-size: 10px;
  display: flex;
  flex-direction: statusumn;
  align-items: center;
  justify-content: center;
}
.dayl p,
.dayr p {
  margin: 5px 0;
}
.dayr {
  width: 60%;
  height: 80px;
  font-size: 10px;
  font-weight: 530;
  display: flex;
  flex-direction: statusumn;
  align-items: center;
  justify-content: center;
}

.time {
  width: 70px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
}
.time div {
  width: 30%;
  margin: 0.5px;
  border-radius: 10%;
}
.bor {
  border: 0.5px solid #666;
}
.con {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
}
.red {
  background: red;
}
.more {
  statusor: blue;
  cursor: pointer;
}
</style>