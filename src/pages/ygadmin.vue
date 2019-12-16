<template>
  <div>
    <el-button type="primary" @click="addyg">新增员工</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="department" label="部门"></el-table-column>
      <el-table-column prop="empNum" label="员工编号"></el-table-column>
      <el-table-column prop="userName" label="姓名"></el-table-column>
      <el-table-column prop="userPhone" label="手机号"></el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          <span v-if="scope.row.role=='manager'">主管</span>
          <span v-if="scope.row.role=='director'">经理</span>
          <span v-if="scope.row.role=='cosmetician'">化妆师</span>
          <span v-if="scope.row.role=='cameraman'">摄影师</span>
          <span v-if="scope.row.role=='checker'">收银员</span>
          <span v-if="scope.row.role=='backman'">杂工</span>
          <span v-if="scope.row.role=='other'">其他</span>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status==true">在职</span>
          <span v-if="scope.row.status==false">离职</span>
        </template>
      </el-table-column>
      <el-table-column prop="entryDate" label="入职日期"></el-table-column>
      <el-table-column prop="leaveDate" label="离职日期"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleedit(scope.row)">修改</el-button>
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

    <el-dialog title="修改" :visible.sync="dialogVisible">
      <el-form
        class="form"
        :label-position="labelPosition"
        label-width="30%"
        :model="formLabelAlign"
      >
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.userName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="formLabelAlign.userPhone"></el-input>
        </el-form-item>
        <el-form-item label="员工角色">
          <el-select v-model="formLabelAlign.role" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工状态">
          <el-select v-model="formLabelAlign.status" placeholder="请选择">
            <el-option label="在职" value='true'></el-option>
            <el-option label="离职" value='false'></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="离职日期(选填)" v-if="formLabelAlign.status!=='true'&&formLabelAlign.status!=='在职'">
          <el-date-picker
            style="width: 100%;"
            value-format="yyyy-MM-dd"
            v-model="formLabelAlign.leaveDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editclick()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      dialogVisible: false,
      total: 0,
      currentPage: 1, //当前页数
      tableData: [
        {
          department: "部门",
          empNum: "员工编号",
          userName: "吴亦凡",
          userPhone: "15044003242",
          entryDate: "入职日期",
          leaveDate: "离职日期",
          role: "经理",
          status: "离职"
        }
      ],
      labelPosition: "right",
      formLabelAlign: {
        id: "",
        role: "",
        userName: "",
        userPhone: "",
        status: "",
        leaveDate: ""
      },
      options: [
        {
          value: "manager",
          label: "主管"
        },
        {
          value: "director",
          label: "经理"
        },
        {
          value: "cosmetician",
          label: "化妆师"
        },
        {
          value: "cameraman",
          label: "摄影师"
        },
        {
          value: "checker",
          label: "收银员"
        },
        {
          value: "backman",
          label: "杂工"
        },
        {
          value: "other,",
          label: "其他"
        }
      ]
    };
  },
  methods: {
    pageChange(pageChangeNum) {
      console.log(pageChangeNum);
      this.pageNum = pageChangeNum;
      this.getinfolist();
    },
    addyg() {
      this.$router.push({
        path: "/addyg"
      });
    },
    getinfolist() {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/admin/list", {
          pageNum: that.pageNum,
          pageSize: that.pageSize
        })
        .then(function(res) {
          console.log(res.data);
          that.tableData = res.data.data;
          that.total = res.data.data.length;
        });
    },
    handleedit(row) {
      console.log(row);
      this.dialogVisible = true;
      if (row.status == true) {
        this.formLabelAlign.status = "在职";
      } else if (row.status == false) {
        this.formLabelAlign.status = "离职";
      }
      this.formLabelAlign.id = row.id;
      this.formLabelAlign.role = row.role;
      this.formLabelAlign.userName = row.userName;
      this.formLabelAlign.userPhone = row.userPhone;
      if(row.leaveDate!==null){
 this.formLabelAlign.leaveDate = new Date(row.leaveDate);
      }
     
      
    },
    //保存编辑
    editclick() {
       if(this.formLabelAlign.status=='在职'){
       this.formLabelAlign.status=true
      }else if(this.formLabelAlign.status=='离职'){
          this.formLabelAlign.status=false
      }
      var that = this;
      
      that.$axios
        .post(that.$apiUrl + "/api/v1/admin/edit", that.formLabelAlign)
        .then(function(res) {
         if(res.data.status=="0000"){
            that.getinfolist();
            that.dialogVisible = false;
         }
        });
    }
  },
  activated() {
    this.getinfolist();
  }
};
</script>

<style scoped>
.form {
  width: 70%;
}
.el-form-item {
  width: 100%;
}
</style>