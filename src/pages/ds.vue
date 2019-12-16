<template>
  <div class="page">
    <p>
      <span>订单号：{{row.orderNum}}</span>
      <span>用户姓名：{{row.custName}}</span>
    </p>
    <div class="picker">
      <span class="name">员工名</span>
      <el-select v-model="value.employeeId" placeholder="请选择" style="width:30%">
        <el-option v-for="item in staff" :key="item.id" :label="item.userName" :value="item.id"></el-option>
      </el-select>
    </div>
    <div class="picker">
      <span class="name">DS类型</span>
      <el-select v-model="value.dsType" placeholder="请选择" style="width:30%">
        <el-option v-for="item in dsType" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="picker" v-if="value.dsType=='ADD'">
      <span class="name">DS产品</span>
      <el-input v-model="value.dsProduct" placeholder="请输入内容" style="width:30%"></el-input>
    </div>
    <!-- <div class="picker">
      <span class="name">产品SKU</span>
    
      <el-select v-model="value" placeholder="请选择" style="width:30%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="picker">
      <span class="name">拍摄人数</span>
    
      <el-input v-model="input" placeholder="请输入内容" style="width:30%"></el-input>
    </div>-->
    <div class="picker">
      <span class="name">DS金额</span>

      <el-input v-model="value.dsAmount" placeholder="请输入内容" style="width:30%"></el-input>
    </div>
    <div class="picker">
      <span class="name">支付方式</span>

      <el-select v-model="value.payType" placeholder="请选择" style="width:30%">
        <el-option v-for="item in pay" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="btn">
      <el-button type="danger" @click="submit">确认录入</el-button>
      <!-- <el-button type="success">确认录入并继续</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {
        orderId: "",
        dsAmount: "",
        dsType: "",
        employeeId: "",
        payType: "",
        dsProduct:''
      },
      row: {},

      staff: [],
      dsType: [
        {
          value: "ADD",
          label: "增拍产品"
        },
        {
          value: "UPGRADE",
          label: "升级原产品"
        },
        {
          value: "DECORATE",
          label: "加修加印"
        },
        {
          value: "STAMP",
          label: "单独加印"
        }
      ],

      pay: [
        {
          value: "ZHI_FU_BAO",
          label: "支付宝"
        },
        {
          value: "WEI_XIN",
          label: "微信"
        },
        {
          value: "XIAN_JIN",
          label: "现金"
        }
      ]
    };
  },
  methods: {
    //下拉选择员工
    getlistinfo() {
      var that = this;
      that.value.orderId=that.row.id
      that.$axios
        .post(that.$apiUrl + "/api/v1/admin/select")
        .then(function(res) {
          that.staff = res.data.data;
        });
    },
    //确认录入
    submit() {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/ds", that.value)
        .then(function(res) {
          that.$message("已录入");
          that.$router.go(-1);
        });
    }
  },
  mounted() {
    this.row = JSON.parse(sessionStorage.getItem("orderRow"));
    console.log(this.row);
    this.getlistinfo();
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.picker {
  margin: 10px 0;
  width: 50%;
}
.name {
  width: 15%;
  display: inline-block;
}
p span {
  height: 50px;
  line-height: 50px;
  margin-right: 50px;
}
.btn {
  margin-top: 50px;
}
</style>