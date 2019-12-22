<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="size">
      <el-form-item label="客户姓名" prop="custName">
        <el-input v-model="form.custName"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="custPhone">
        <el-input v-model="form.custPhone"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="custSex">
        <el-select v-model="form.custSex" placeholder="请选择" style="width: 100%;">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="门店" prop="storeId">
        <el-select v-model="form.storeId" placeholder="请选择" style="width: 100%;">
          <el-option
            v-for="item in storelist"
            :key="item.id"
            :label="item.storeName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品" prop="custSex">
        <el-cascader
          @change="changeclick"
          v-model="product"
          :options="productlist"
          :props="optionProps"
          style="width: 100%;"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="金额" prop="orderAmount">
        <el-input v-model="form.orderAmount" style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="支付方式" prop="custSex">
        <el-select v-model="form.payType" placeholder="请选择" style="width: 100%;">
          <el-option label="微信" value="WEI_XIN"></el-option>
          <el-option label="支付宝" value="ZHI_FU_BAO"></el-option>
           <el-option label="现金" value="XIAN_JIN"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约日期" prop="orderDate">
        <el-date-picker
          style="width: 100%;"
          value-format="yyyyMMdd"
          v-model="form.orderDate"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="预约时间" prop="orderTime">
        <el-time-select
          style="width: 100%;"
          v-model="form.orderTime"
          :picker-options="{
      start: '10:00',
      step: '00:20',
      end: '21:40'
    }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" type="textarea" maxlength="100" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionProps: {
        value: "id",
        label: "name",
        children: "comboList"
      },
      cityid: 21,
      form: {
        custName: "",
        custPhone: "",
        custSex: "",
        orderAmount: "",
        orderDate: "",
        orderTime: "",
        productId: "",
        comboId: "",
        remark: "",
        storeId: "",
        payType:""
      },
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
      ],
      productlist: [],
      storelist: [],
      product: []
    };
  },
  methods: {
    submit(form) {
      var that = this;
      that.form.productId = that.product[0];
      that.form.comboId = that.product[1];
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/create/back", that.form)
        .then(function(res) {
          // console.log(res.data.data);
          that.$message("已新增");
          that.$router.go(-1); //返回上一层
          (this.form = {
            custName: "",
            custPhone: "",
            custSex: "",
            orderAmount: "",
            orderDate: "",
            orderTime: "",
            productId: "",
            comboId: "",
            remark: "",
            storeId: "",
            payType:""
          }),
            that.$refs[formName].resetFields();
        });
    },
    changeclick() {
      console.log(this.form.productId);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getform() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/store/list/" + that.cityid, {
          params: {}
        })
        .then(function(res) {
          // console.log(res.data.data);
          that.storelist = res.data.data;
        });
      that.$axios
        .get(that.$apiUrl + "/api/v1/product/list", {
          params: {}
        })
        .then(function(res) {
          // console.log(res.data.data);
          var data = res.data.data;
          that.productlist = data.map(function(item) {
            item.comboList.map(function(i) {
              i.name = i.comboName;
            });
            return item;
          });
        });
    }
  },
  created() {
    this.getform();
  }
};
</script>
<style scoped>
.size {
  width: 30%;
}
.el-form-item {
  margin: 20px 0;
}
</style>