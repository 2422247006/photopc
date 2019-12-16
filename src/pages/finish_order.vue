<template>
  <div class="page">
    <div class="left">
      <orderform></orderform>
    </div>
    <div class="right">
      <p class="title">录入工作量</p>
      <div class="r_box">
        <p class="r_tit">
          <el-button type="primary" @click="finish" style="height:25px;line-height:0px;">完成订单</el-button>
        </p>
        <div class="wrap" v-for="(item,index) of newselectlist" :key="item.id">
          <div class="wrap_lr">
            <span>员工</span>
            <el-select v-model="item.employeeId" placeholder="请选择" style="width:70%;">
              <el-option
                v-for="item in ygoptions"
                :key="item.id"
                :label="item.userName"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div class="wrap_lr">
            <span>工作量</span>
            <el-input placeholder="100.00" v-model="item.jobAmount" style="width:70%;">
              <template slot="append">%</template>
            </el-input>
          </div>
          <el-button v-if="index==0" type="primary" size="small" @click="addclick">新增</el-button>
           <el-button v-if="index!==0" type="primary" size="small" @click="deleteclick(index)">删除</el-button>
        </div>
        <!-- <div class="wrap" v-for="(i,index) of addlist" :key="i">
          <div class="wrap_lr">
            <span v-if="index==0">化妆师</span>
            <span v-else></span>
            <el-select v-model="value" placeholder="请选择" style="width:70%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="wrap_lr">
            <span>工作量</span>
            <el-input placeholder="100.00" v-model="input2" style="width:70%;">
              <template slot="append">%</template>
            </el-input>
          </div>
          <img v-if="index==0" src="../assets/icon/add.png" @click="addclick" />
          <img v-else src="../assets/icon/sub.png" @click="subclick" />
        </div> -->
        <!-- <div class="wrap" v-for="(s,index) of addlist2">
          <div class="wrap_lr">
            <span v-if="index==0">摄影师</span>
            <span v-else></span>
            <el-select v-model="value" placeholder="请选择" style="width:70%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="wrap_lr">
            <span>工作量</span>
            <el-input placeholder="100.00" v-model="input2" style="width:70%;">
              <template slot="append">%</template>
            </el-input>
          </div>
          <img v-if="index==0" src="../assets/icon/add.png"  @click="addclick2"/>
           <img v-else src="../assets/icon/sub.png" @click="subclick2" />
        </div>-->
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
      ygvalue:'',
        gzvalue:'',
      addlist: [0],
       addlist2: [0],
      ygoptions: [],
      newselectlist:[{employeeId:'',jobAmount:''}],
      row:''
    };
  },
  methods: {
    //新增
    addclick(){
      this.newselectlist.push({employeeId:'',jobAmount:''});
      console.log(this.newselectlist)
    },
    //删除
    deleteclick(index){
this.newselectlist.splice(index,1);
    },
    subclick() {
      this.addlist.pop();
    },
    addclick2 (){
      this.addlist2.push(1);
    },
    subclick2() {
      this.addlist2.pop();
    },
    //下拉选择员工
    getlistinfo() {
      var that=this
      
      that.$axios
        .post(that.$apiUrl + "/api/v1/user/employee/select")
        .then(function(res) {
          console.log(res.data.data)
          that.ygoptions = res.data.data;
        });
    },
    finish(){
      var that=this
      var list=that.newselectlist.map(function(item){
       item.jobAmount=parseInt(item.jobAmount)
        return item
      })
    that.$axios
        .post(that.$apiUrl + "/api/v1/order/finish",{
          orderId:that.row.id,
          workloadList:list
        })
        .then(function(res) {
            if (res.data.status == "0000") {
            that.$message("已完成");
          } else {
            that.$message(res.data.message);
          }
        });
    }
  },
  created(){
     this.row = JSON.parse(sessionStorage.getItem("orderRow"));
     this.getlistinfo()
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

.r_box {
  width: 100%;
  background: white;
  padding: 15px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 0px 20px #ccc;
  margin: 20px 0;
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.wrap_lr {
  width: 50%;
}
.wrap_lr span {
  width: 20%;
  display: inline-block;
  text-align: right;
  margin-right: 10px;
}

.r_tit {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.el-icon-circle-plus {
}
</style>