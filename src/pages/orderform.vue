<template>
  <div>
    <div>
      <p class="title">顾客信息</p>
      <div class="inpwrap">
        <span>用户姓名</span>
        <input v-model="info" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>顾客性别</span>
        <input v-model="sex" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>联系方式</span>
        <input v-model="tel" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>顾客生日</span>
        <input v-model="birth" disabled="disabled" class="inp" />
      </div>
    </div>
    <div>
      <p class="title">拍摄内容(不含ds)</p>
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
      <p class="title">ds信息</p>
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
    <div>
      <p class="title">订单信息</p>
      <div class="inpwrap">
        <span>下单时间</span>
        <input v-model="order1" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>预约时间</span>
        <input v-model="order2" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单状态</span>
        <input v-model="order3" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>已付金额</span>
        <input v-model="order4" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>支付方式</span>
        <input v-model="order5" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单类型</span>
        <input v-model="order6" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单备注</span>
        <input v-model="order7" disabled="disabled" class="inp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderform",
  data() {
    return {
      info: "吴亦凡",
      sex: "女",
      tel: "15044003242",
      birth: "1995-03-16",
      order1: "2019-08-22 20:00",
      order2: "2019-08-22 20:00",
      order3: "待拍摄",
      order4: "399",
      order5: "支付宝支付",
      order6: "个人拍摄",
      order7: "我会晚点去",
      value1: "", //选择日期
      value: "" //时间
    };
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
}
.inpwrap {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.inpwrap span {
  width: 20%;
  font-size: 12px;
}
.inp {
  width: 80%;
  height: 20px;
  border-radius: 4px;
  padding: 5px;
  font-size: 12px;
  color: #999;
}

.inp:hover {
  cursor: not-allowed;
}
.content {
  width: 85%;
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