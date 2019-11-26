<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :name="item.name" :label="item.label" v-for="item of tablist">
        <div class="search">
          <el-select v-model="value" placeholder="请选择" @change="selecechange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入搜索内容" class="inp"></el-input>
          <el-button type="primary" @click="search()">查询</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderNum" label="订单号"></el-table-column>
          <el-table-column prop="custName" label="姓名" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="custPhone" label="手机号" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="actualPay" label="实际支付" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payType" label="支付方式" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="status" label="订单状态" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="orderDate" label="预约时间" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="remarks" label="备注" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="do" label="操作">
            <template slot-scope="scope">
              <el-button
                style="cursor: pointer"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >编辑</el-button>
              <div class="do" v-if="changeactive==scope.$index">
                <p
                  v-for="(item,index) of list"
                  :class="{col:changecol==index}"
                  @click="changepage(index,item.url,item.txt)"
                >{{item.txt}}</p>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="pageChange"
          class="pagination"
          :page-size="10"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_getlistinfo: {
        custName: null,
        custPhone: null,
        orderDate: null,
        orderNum: null,
        pageNum: 1,
        pageSize: 10,
        status: null
      },
      total: 0,
      currentPage: 1, //当前页数
      selVal: "", //选择框的类型
      changecol: -1,
      current: 0,
      changeactive: -1,
      activeName: null,
      value: "",
      input: "",
      list: [
        {
          id: 0,
          txt: "详情",
          url: "/desc"
        },
        {
          id: 1,
          txt: "开始订单流程"
        },
        {
          id: 2,
          txt: "录入BS",
          url: "/ds"
        },
        {
          id: 3,
          txt: "打印订单"
        },
        {
          id: 4,
          txt: "完成订单",
          url: "/finish_order"
        }
      ],
      tablist: [
        {
          id: 0,
          label: "全部订单",
          name: null
        },
        {
          id: 0,
          label: "未支付",
          name: "unpaid",
      
        },
        {
          id: 0,
          label: "等待拍摄",
          name: "paid",
         
        },
        {
          id: 0,
          label: "当日拍摄",
          name: null
         
        },
        {
          id: 0,
          label: "拍摄中",
          name: "underway",
         
        },
        {
          id: 0,
          label: "完成",
          name: "finish"
         
        },
        {
          id: 0,
          label: "关闭",
          name: "closed"
         
        }
      ],
      tableData: [],
      options: [
        {
          value: "1",
          label: "姓名"
        },
        {
          value: "2",
          label: "手机号"
        },
        {
          value: "3",
          label: "订单号"
        }
      ]
    };
  },
  methods: {
    //获取列表数据
    getlistinfo() {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/query", this.data_getlistinfo)
        .then(function(res) {
          that.total = res.data.data.total;
          var reslist = res.data.data.dataList;
          that.tableData = reslist.map(function(item) {
            if (item.status == "unpaid") {
              item.status = "未支付";
            } else if (item.status == "paid") {
              item.status = "等待拍摄";
            } else if (item.status == "underway") {
              item.status = "拍摄中";
            } else if (item.status == "finish") {
              item.status = "已完成";
            } else if (item.status == "closed") {
              item.status = "已关闭";
            }
            return item;
          });
        });
    },
    //翻页
    pageChange(pageChangeNum) {
      this.data_getlistinfo.pageNum = pageChangeNum;
      this.getlistinfo();
    },
    //选择框
    selecechange(selVal) {
      this.selVal = selVal;
    },
    //查询
    search() {
      if (this.selVal == "") {
        this.$alert("请先选择搜索类型", "提示:", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
      } else if (this.selVal == 1) {
        this.data_getlistinfo.custName = this.input;
      } else if (this.selVal == 2) {
        this.data_getlistinfo.custPhone = this.input;
      } else if (this.selVal == 3) {
        this.data_getlistinfo.orderNum = this.input;
      }
      console.log(this.input);
      console.log(this.data_getlistinfo);
      this.getlistinfo();
    },
    // 切换tab
    handleClick(tab, event) {
      console.log(tab.name);
      console.log(tab.index);
      if(tab.index==3){
         this.data_getlistinfo.orderDate=this.getNowFormatDate()
      }else{
        this.data_getlistinfo.orderDate=null
      }
      this.data_getlistinfo.status=tab.name
      console.log( this.data_getlistinfo)
       this.getlistinfo();
    },
     getNowFormatDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year +''+ month +''+ strDate;
        return currentdate;
    },


    handleDelete(index, row) {
      if (this.current == 0) {
        this.changeactive = index;
        this.current = 1;
      } else if (this.current == 1) {
        this.changeactive = -1;
        this.current = 0;
      }
    },
    changepage(index, url, txt) {
      this.changecol = index;
      this.$router.push({
        path: url,
        query: { title: txt, id: 1 }
      });
    }
  },
  created() {
    this.getlistinfo();
   
  }
};
</script>

<style scoped>
.search {
  width: 35%;
  display: flex;
  margin: 20px;
}
.inp {
  margin: 0 20px;
}
.do {
  position: relative;
  top: 58%;
  left: -30%;
  z-index: 200;
  text-align: center;
}
.do p {
  height: 25px;
  line-height: 25px;
  font-size: 10px;
  cursor: pointer;
}
.col {
  color: blue;
}
</style>