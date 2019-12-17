<template>
  <div>
    <div class="header">
        <el-button type="primary">新增产品</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="产品编号"></el-table-column>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="minPrice" label="价格"></el-table-column>
      <el-table-column prop="model" label="化妆"></el-table-column>
      <el-table-column prop="clothing" label="服装"></el-table-column>
      <el-table-column prop="background" label="拍摄"></el-table-column>
      <el-table-column prop="negative" label="修图"></el-table-column>
      <el-table-column prop="processing" label="冲印"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="details(scope.row)">详情</el-button>
          <el-button type="text" size="small" >修改</el-button>
          <el-button type="text" size="small" >下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getinfolist() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/product/list")
        .then(function(res) {
          console.log(res.data);
          that.tableData = res.data.data;
        });
    },
    details(row){
 sessionStorage.setItem("productRow", JSON.stringify(row));
      this.$router.push({
        path: "/productinfo"
      });
    }
  },
  activated() {
    this.getinfolist();
  }
};
</script>

<style scoped>

</style>