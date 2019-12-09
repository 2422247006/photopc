<template>
  <div>
    <div id="printTest">
        <div class="benner">
            <img src="../assets/icon/logo.png" alt="" style="width:25%;height:100%;margin:0 auto;">
        </div>
      <div class="userinfo">
        <div class="left">
          <h1>个人信息</h1>
          <p>
            <span>姓名:</span>
            <span>{{listinfo.custName}}</span>
          </p>
          <!-- <p>
            <span>生日:</span>
            <span></span>
          </p> -->
          <p>
            <span>联系方式:</span>
            <span>{{listinfo.custPhone}}</span>
          </p>
          <p>
            <span>性别:</span>
            <span>{{listinfo.custSex}}</span>
          </p>
          <p>
            <span>备注:</span>
            <span>{{listinfo.remark}}</span>
          </p>
        </div>
        <div class="right">
          <h1>订单信息</h1>
          <p>
            <span>订单号:</span>
            <span>{{listinfo.orderNum}}</span>
          </p>
          <p>
            <span>预约时间:</span>
            <span>{{yyDate}}</span>
          </p>
          <p>
            <span>拍摄套系:</span>
            <span>{{listinfo.productList.productName}}</span>
          </p>
        </div>
      </div>
      <div class="imgask">
        <h1>修片要求</h1>
        <p>
          眼睛增大幅度：
          <el-radio v-model="radio" label="1">小</el-radio>
          <el-radio v-model="radio" label="2">中</el-radio>
          <el-radio v-model="radio" label="3">大</el-radio>
        </p>
        <p>
          瘦脸幅度：
          <el-radio v-model="radio" label="1">小</el-radio>
          <el-radio v-model="radio" label="2">中</el-radio>
          <el-radio v-model="radio" label="3">大</el-radio>
        </p>
        <p>
          是否去祛痣：
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </p>
      </div>
      <div class="remark">
        <h1>备注信息:</h1>
        <p>客服:</p>
        <p>化妆:</p>
        <p>摄影:</p>
        <p>后期:</p>
      </div>
      <div class="desc"> 
       <p>您承诺（或您的被监护人）拥有本订单项下照片的完整肖像权，您本人（或作为监护人）同意上海洁白文化传媒有限公司在繁减肖像馆门店、官方微博&微信公众号，或其他官方和合作平台，无偿使用本订单项下照片用作展示。
       </p>
        <p>
          <el-radio v-model="radio" label="1">同意</el-radio>
          <el-radio v-model="radio" label="2">不同意</el-radio>
        </p>
      </div>
    </div>
      <el-button type="primary" v-print="'#printTest'" class="submit">去打印</el-button>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "",
      row:'',
      listinfo:{
          productList:{}
      },
      yyDate:''
    };
  },
  methods:{
getinfo() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/order/detail", {
          params: {
            id: that.row.id
          }
        })
        .then(function(res) {
          console.log(res.data.data);
          that.listinfo = res.data.data;
           var aaa = that.listinfo.orderDate.toString();
          aaa = aaa.slice(0, 4) + "-" + aaa.slice(4);
          aaa = aaa.slice(0, 7) + "-" + aaa.slice(7);
          that.yyDate = aaa + that.listinfo.orderTime;
        });
    }
  },
  mounted() {
        this.row = JSON.parse(sessionStorage.getItem("orderRow"));
        this.getinfo()
  },
};
</script>
<style scoped>
#printTest {
  width: 100%;
 
}
.userinfo{
display: flex;
}
.userinfo,
.imgask,
.remark,.desc {
  width: 100%;
  border-top: 1px solid black;
  padding:10px;
  box-sizing: border-box
}
h1 {
  font-size: 18px;
  font-weight: bold;
  margin:10px 0 20px 0;
}
.left,
.right {
  width: 50%;
}
.left p,
.right p,
.imgask p,
.remark p,
.desc p{
  width: 100%;
  margin-bottom: 25px;
}
.desc p{
    line-height: 15px;
}
.benner{
    width:100%;
    height:150px;
    display: flex;
    justify-content: center;
}
.submit{
    position: fixed;
    top:50px;
    right:50px;
}
</style>