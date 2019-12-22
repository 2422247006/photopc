<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :name="item.name" :label="item.label" v-for="item of tablist">
        <div class="search">
          <div style="display:flex;">
            <el-select v-model="value" clearable placeholder="请选择" @change="selecechange">
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

          <el-button type="primary" @click="addorderclick">添加订单</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderNum" label="订单号"></el-table-column>
          <el-table-column prop="custName" label="姓名" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="custPhone" label="手机号" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="actualPay" label="实际支付" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="支付方式" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span v-if="scope.row.payType=='ZHI_FU_BAO'">支付宝</span>
              <span v-if="scope.row.payType=='WEI_XIN'">微信</span>
              <span v-if="scope.row.payType=='XIAN_JIN'">现金</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="订单状态" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="orderDate" label="预约时间" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="remarks" label="备注" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="do" label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                style="cursor: pointer"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >编辑</el-button>

              <el-button
                style="cursor: pointer"
                size="mini"
                type="danger"
                @click="handleshare(scope.row)"
                v-if="scope.row.status=='完成'"
              >分享</el-button>
              <div class="do" v-if="changeactive==scope.$index">
                <p
                  v-for="(item,index) of list"
                 
                  @click="changepage(index,item.url,item.txt,scope.row)"
                  :key="item.id"
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

    <el-dialog title="分享" :visible.sync="dialogVisible">
      <div class="div txt">订单号:{{orderNum}}</div>
      <div class="div">
        <el-upload
       
          ref="upload"
          class="upload-demo"
          :auto-upload="false"
          action="http://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
          :on-change="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="div">
          <el-button type="primary" @click="shareclick">分享至百度云</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      orderNum: "",
      dialogVisible: false,
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
          txt: "录入DS",
          url: "/ds"
        },
        {
          id: 3,
          txt: "打印订单",
          url: "/printing"
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
          name: "unpaid"
        },
        {
          id: 0,
          label: "等待拍摄",
          name: "paid"
        },
        {
          id: 0,
          label: "当日拍摄",
          name: null
        },
        {
          id: 0,
          label: "拍摄中",
          name: "underway"
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
      ],
      shareCode: "",
      shareLink: "链接: https://pan.baidu.com/s/1c0dn5UapzciMLzt8GWzq8w 提取码: 2hg9"
    };
  },
  methods: {
    
    shareclick() {
      let formData = new FormData();
      formData.append("orderNum", this.orderNum);
      formData.append("shareLink", this.shareLink);
       formData.append("shareCode", this.shareCode)
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/order/share", formData, config)
        .then(function(res) {
          if(res.data.status=="0000"){
            that.$message({
              type: "info",
              message: "已分享"
            });
            that.dialogVisible = false;
          }else{
            that.$message({
              type: "info",
              message: res.data.message
            });
          }
        });
    },
    handleshare(row) {
      console.log(row);
      this.orderNum = row.orderNum;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      // this. fileList.push(file.raw)
      this.shareCode = file.raw;
      console.log(file);
    },
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
      // if (this.selVal == 1) {
      //   this.data_getlistinfo.custName = this.input;
      // } else if (this.selVal == 2) {
      //   this.data_getlistinfo.custPhone = this.input;
      // } else if (this.selVal == 3) {
      //   this.data_getlistinfo.orderNum = this.input;
      // }else if(this.selVal == ""&&this.input==''){
      // this.getlistinfo();
      // }
      //       if(this.selVal == ""&&this.input==''){
      //         alert(123)
      //  this.getlistinfo();
      //       }
      if (this.selVal == 1) {
        this.data_getlistinfo.custName = this.input;
      } else if (this.selVal == 2) {
        this.data_getlistinfo.custPhone = this.input;
      } else if (this.selVal == 3) {
        this.data_getlistinfo.orderNum = this.input;
      } else if (this.selVal == "" && this.input == "") {
        this.data_getlistinfo.custName = null;
        this.getlistinfo();
      }
      this.getlistinfo();
    },
    // 切换tab
    handleClick(tab, event) {
      console.log(tab.name);
      console.log(tab.index);
      if (tab.index == 3) {
        this.data_getlistinfo.orderDate = this.getNowFormatDate();
      } else {
        this.data_getlistinfo.orderDate = null;
      }
      this.data_getlistinfo.status = tab.name;
      console.log(this.data_getlistinfo);
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
      var currentdate = year + "" + month + "" + strDate;
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

    changepage(index, url, txt, row) {
      console.log(row);
      var that = this;
      if (index == 1) {
        var status_ = "";
        if (row.status == "未支付") {
          status_ = "unpaid";
        } else if (row.status == "等待拍摄") {
          status_ = "paid";
        } else if (row.status == "拍摄中") {
          status_ = "underway";
        } else if (row.status == "已完成") {
          status_ = "finish";
        } else if (row.status == "已关闭") {
          status_ = "closed";
        }
        that.$axios
          .post(that.$apiUrl + "/api/v1/order/update", {
            id: row.id,
            status: status_
          })
          .then(function(res) {
            console.log(res.data);
            if (res.data.status == "0000") {
              that.$message("订单开始");
            } else {
              that.$message(res.data.message);
            }
          });
      }
      sessionStorage.setItem("orderRow", JSON.stringify(row));
      that.changecol = index;
      that.$router.push({
        path: url,
        query: { title: txt, id: 1, row: row }
      });
    },
    addorderclick() {
      this.$router.push({
        path: "/addorder"
      });
    }
  },
  activated() {
    this.getlistinfo();
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  display: flex;
  margin: 20px;
  justify-content: space-between;
  padding: 0 10% 0 0;
  box-sizing: border-box;
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
.div {
  margin: 30px 0;
}
.txt {
  font-size: 16px;
}
</style>