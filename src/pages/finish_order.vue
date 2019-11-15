<template>
  <div class="page">
    <div class="left">
      <orderform></orderform>
    </div>
    <div class="right">
      <p class="title">录入工作量</p>
      <div class="r_box">
        <p class="r_tit">
          <el-button type="primary" style="height:25px;line-height:0px;">完成订单</el-button>
        </p>
        <div class="wrap">
          <div class="wrap_lr">
            <span>前台</span>
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
        </div>
        <div class="wrap" v-for="(i,index) of addlist" :key="i">
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
        </div>
        <div class="wrap" v-for="(s,index) of addlist2">
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
        input2:'',
        value:'',
      addlist: [0],
       addlist2: [0],
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
    addclick(){
      this.addlist.push(this.addlist.length);
      console.log(this.addlist.length)
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