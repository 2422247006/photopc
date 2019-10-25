<template>
  <div>
    <h1>用户信息</h1>
    <p>
      姓名：
      <span class="bold">吴亦凡</span>
    </p>
    <p>
      联系方式：
      <span class="bold">15044003242</span>
    </p>
    <h1>评分详情</h1>
    <p>
      总NPS评分：
      <span class="bold">基本满意</span>
    </p>
    <p>
      <span class="margin">
        前台：
        <span class="bold">新人</span>
      </span>
      <span>
        NPS评分：
        <span class="bold">超满意</span>
      </span>
    </p>
    <p>
      <span class="margin">
        摄影师：
        <span class="bold">新人</span>
      </span>
      <span>
        NPS评分：
        <span class="bold">超满意</span>
      </span>
    </p>
    <p>
      <span class="margin">
        化妆师：
        <span class="bold">新人</span>
      </span>
      <span>
        NPS评分：
        <span class="bold">超满意</span>
      </span>
    </p>
    <p>
      <span class="margin">
        后期师：
        <span class="bold">新人</span>
      </span>
      <span>
        NPS评分：
        <span class="bold">超满意</span>
      </span>
    </p>
     <h1>订单信息</h1>
    <p>
      <span class="margin">
        订单号：
        <span class="bold">1567989522145662</span>
      </span>
      <span>
        下单时间：
        <span class="bold">2019-08-09</span>
      </span>
    </p>
    <p>
      <span class="margin">
        支付方式：
        <span class="bold">线下支付宝</span>
      </span>
      <span>
        预约时间：
        <span class="bold">2019-08-29</span>
      </span>
    </p>
    <p>
      <span class="margin">
        已付金额：
        <span class="bold">￥598.00</span>
      </span>
      <span>
       订单类型：
        <span class="bold">个人拍摄</span>
      </span>
    </p>
    <p>
      <span class="margin">
        订单备注：
        <span class="bold">线下预约-老胡</span>
      </span>
    </p>
       <div>
      <h1>拍摄内容(不含ds)</h1>
      <div class="content">
        <p class="table">
          <span class="span">产品名称</span>
          <span class="span">拍摄人数</span>
          <span class="span">产品单价(元)</span>
        </p>
        <p class="tr table">
          <span class="span">花颜照-单人-绮罗</span>
          <span class="span">1</span>
          <span class="span">399</span>
        </p>
      </div>
    </div>
    <div>
      <h1>ds信息</h1>
      <div class="content">
        <p class="table">
          <span class="span ds_span">员工姓名</span>
          <span class="span ds_span">产品名称</span>
          <span class="span ds_span">原拍摄产品</span>
          <span class="span ds_span">ds产品</span>
          <span class="span ds_span">ds金额(元)</span>
          <span class="span ds_span">支付方式</span>
        </p>
        <p class="tr table">
          <span class="span ds_span">吴亦凡</span>
          <span class="span ds_span">花颜照-单人-绮罗</span>
          <span class="span ds_span">证件照-红底-2寸</span>
          <span class="span ds_span">结婚照-蓝底</span>
          <span class="span ds_span">299</span>
          <span class="span ds_span">支付宝支付</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

h1 {
  font-size: 16px;
  width: 60%;
  line-height: 60px;
  height:60px;
  height: 50px;
}
p {
  line-height: 30px;
  text-indent: 2%;
}

.bold {
  font-weight: bold;
}
.margin {
  width: 15%;
  display: inline-block;
}

.content {
  width: 50%;
  margin: 10px 0;
  border: 1px solid rgb(221, 221, 221);
}
.table {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #ddd;
  display: flex;
  justify-content: space-around;
}
.tr {
  background: white;
}
.span {
  width: 33%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}
.ds_span {
  width: 16%;
}
</style>