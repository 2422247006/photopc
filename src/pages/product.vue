<template>
  <div>
    <div class="header">
        <el-button type="primary" @click="addproduct">新增产品</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="产品编号" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="name" label="产品名称" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="minPrice" label="价格" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="model" label="化妆" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="clothing" label="服装" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="background" label="拍摄" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="negative" label="修图" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="processing" label="冲印" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="details(scope.row)">编辑</el-button>
         
          <el-button type="text" size="small" @click="undercarriage(scope.index,scope.row)"  v-if="scope.row.deleted==false">下架</el-button>
           
           <el-button type="text" size="small" v-if="scope.row.deleted==true" >已下架</el-button>
            <el-button type="text" size="small"  v-if="scope.row.deleted==true" @click="upcarriage(scope.index,scope.row)">上架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      down:0,
      isDown:""
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
    },
    addproduct(){
      this.$router.push({
        path: "/addproduct"
      });
    },
    undercarriage(index,row){
      var that = this;
       that.$confirm('此操作将下架商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.isDown=true
           that.$axios
        .get(that.$apiUrl + "/api/v1/product/down",{
          params:{
            productId:row.id,
            isDown:that.isDown
          }
        })
        .then(function(res) {
          that.$message("已下架");
          that.getinfolist();
          
        });
        }).catch(() => {
                   
        });
      },
      upcarriage(index,row){
      var that = this;
       that.$confirm('此操作将上架商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.isDown=false
           that.$axios
        .get(that.$apiUrl + "/api/v1/product/down",{
          params:{
            productId:row.id,
            isDown:that.isDown
          }
        })
        .then(function(res) {
          that.$message("已上架");
          that.getinfolist();
          
        });
        }).catch(() => {
                   
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