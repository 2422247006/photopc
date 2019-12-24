<template>
  <div>
    <div>
      <p class="title">顾客信息</p>
      <div class="inpwrap">
        <span>用户姓名</span>
        <input v-model="listinfo.custName" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>顾客性别</span>
        <input v-model="listinfo.custSex" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>联系方式</span>
        <input v-model="listinfo.custPhone" disabled="disabled" class="inp" />
      </div>
      <!-- <div class="inpwrap">
        <span>顾客生日</span>
        <input v-model="birth" disabled="disabled" class="inp" />
      </div>-->
    </div>
    <div>
      <p class="title">拍摄内容(不含ds)</p>
      <div class="content">
        <p class="table">
          <span class="span">产品类型</span>
          <span class="span">产品名称</span>
          <span class="span">产品单价(元)</span>
        </p>
        <p class="tr table" v-for="item of productList" :key="item.id">
          <span class="span">{{item.productName}}</span>
          <span class="span">{{item.productCombo}}</span>
          <span class="span">{{item.actualPay}}</span>
        </p>
      </div>
    </div>
    <div>
      <p class="title">ds信息</p>
      <div class="content">
        <p class="table">
          <span class="span ds_span">员工姓名</span>
          <span class="span ds_span">原拍摄产品</span>
          <span class="span ds_span">ds产品</span>
          <span class="span ds_span">ds金额(元)</span>
          <span class="span ds_span">支付方式</span>
        </p>
        <p class="tr table" v-for="item of orderDsList">
          <span class="span ds_span">{{item.employeeName}}</span>
          <span class="span ds_span">{{item.oriProduct}}</span>
          <span
            class="span ds_span"
            style="overflow: hiddden;text-overflow: ellipsis;white-space: nowrap;"
          >{{item.dsProduct}}</span>
          <span class="span ds_span">{{item.dsAmount}}</span>

          <span class="span ds_span" v-if="item.payType=='ZHI_FU_BAO'">支付宝</span>
          <span class="span ds_span" v-if="item.payType=='WEI_XIN'">微信</span>
          <span class="span ds_span" v-if="item.payType=='XIAN_JIN'">现金</span>
        </p>
      </div>
    </div>
    <div>
      <p class="title">订单信息</p>
      <div class="inpwrap">
        <span>下单时间</span>
        <input v-model="xddate" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>预约时间</span>
        <input v-model="yyDate" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单状态</span>
        <input v-model="listinfo.status" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>已付金额</span>
        <input v-model="listinfo.actualPay" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>支付方式</span>
        <input v-model="listinfo.payType" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单类型</span>
        <input v-model="order6" disabled="disabled" class="inp" />
      </div>
      <div class="inpwrap">
        <span>订单备注</span>
        <input v-model="listinfo.remark" disabled="disabled" class="inp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderform",
  data() {
    return {
      listinfo: {},
      yyDate: "",
      productList: [],
      orderDsList: [],
      row: "",
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
      value: "", //时间
      xddate: ""
    };
  },
  methods: {
    //获取详情表单
    getlistinfo() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/order/detail", {
          params: {
            id: that.row.id
          }
        })
        .then(function(res) {
          // console.log(res.data.data);
          that.listinfo = res.data.data;
          var bbb = that.dateTime(that.listinfo.createDateTime);
          console.log(that.listinfo.orderDate);
          if (that.listinfo.orderDate !== null) {
            var aaa = that.listinfo.orderDate.toString();
            aaa = aaa.slice(0, 4) + "-" + aaa.slice(4);
            aaa = aaa.slice(0, 7) + "-" + aaa.slice(7);
          }

          that.xddate = bbb;
          that.yyDate = aaa +" "+ that.listinfo.orderTime;
          that.$emit("childFn", that.listinfo);
          if (that.listinfo.status == "unpaid") {
            that.listinfo.status = "未支付";
          } else if (that.listinfo.status == "paid") {
            that.listinfo.status = "等待拍摄";
          } else if (that.listinfo.status == "underway") {
            that.listinfo.status = "拍摄中";
          } else if (that.listinfo.status == "finish") {
            that.listinfo.status = "已完成";
          } else if (that.listinfo.status == "closed") {
            that.listinfo.status = "已关闭";
          }
          if (that.listinfo.payType == "ZHI_FU_BAO") {
            that.listinfo.payType = "支付宝";
          } else if (that.listinfo.payType == "WEI_XIN") {
            that.listinfo.payType = "微信";
          } else {
            that.listinfo.payType = "现金";
          }

          that.productList = res.data.data.productList;
          that.orderDsList = res.data.data.dsList;
          console.log(that.orderDsList);
        });
    },
    dateTime(rowData) {
      // console.log(rowData)
      var d = new Date(rowData);

      var a =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
        "-" +
        (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
        " " +
        (d.getHours() < 10 ? "0" + d.getDate() : d.getDate()) +
        ":" +
        (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
        ":" +
        (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());

      return a;
    }
  },
  activated() {
    this.row = JSON.parse(sessionStorage.getItem("orderRow"));

    // console.log(this.row);
    this.getlistinfo();
    //  console.log(this.listinfo_)
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