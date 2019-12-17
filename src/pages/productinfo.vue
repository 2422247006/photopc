<template>
  <ul>
      <li>
      <span class="s3">产品信息</span>
    </li>
    <li>
      <span class="s1">产品名称：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">价格：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">化妆：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">服装：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">拍摄：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">修图：</span><span class="s2">证件照</span>
    </li>
     <li>
      <span class="s1">冲印：</span><span class="s2">证件照</span>
    </li>  
     <li>
     <div>
         <span>产品图片：</span>
         <img src="" alt="" style="width:100%;height:30px;">
     </div>
    </li> 
  </ul>
 
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  mounted(){
      console.log(JSON.parse(sessionStorage.getItem("productRow")))
  }
};
</script>

<style scoped>
.s1{
    margin:0 10px;
    width:15%;
    text-align: right;
    display: inline-block;
}
.s2{
    font-size:13px;
}
.s3{
    font-size: 16px;
    border-bottom: 1px solid white;
    width:100%;
     display: inline-block;
     line-height: 32px;
}
ul{
    width:50%;
    background:rgb(242,242,242);
    padding:1px 10px 10px 10px;
    box-sizing: border-box;
    border-radius: 2%;
}
li{
     width:100%;
    margin:20px 0;
}
</style>