<template>
  <div class="page">
    <p>
      <span>订单号：20190658102356</span>
      <span>用户姓名：吴亦凡</span>
    </p>
    <div class="picker">
      <span class="name">员工名</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
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
      <span class="name">DS类型</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
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
      <span class="name">DS产品</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
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
      <span class="name">产品SKU</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
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
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
      <el-input v-model="input" placeholder="请输入内容" style="width:30%"></el-input>
    </div>
    <div class="picker">
      <span class="name">DS金额</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
      <el-input v-model="input" placeholder="请输入内容" style="width:30%"></el-input>
    </div>
    <div class="picker">
      <span class="name">支付方式</span>
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
      <el-select v-model="value" placeholder="请选择" style="width:30%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="btn">
      <el-button type="danger" @click="open">确认录入</el-button>
      <el-button type="success">确认录入并继续</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:'',
      value:'',
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
    open() {
      this.$message("已录入");
       this.$router.go(-1)
    }
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