<template>
  <div>
    <el-form
      class="form"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="部门"  size="small">
        <el-input v-model="formLabelAlign.department"  size="small"></el-input>
      </el-form-item>
      <el-form-item label="员工Id">
        <el-input v-model="formLabelAlign.empId" size="small"></el-input>
      </el-form-item>
      <el-form-item label="员工编号">
        <el-input v-model="formLabelAlign.empNum"  size="small"></el-input>
      </el-form-item>
       <el-form-item label="登录名">
        <el-input v-model="formLabelAlign.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input v-model="formLabelAlign.region"  size="small"></el-input>
      </el-form-item>
      <el-form-item label="员工角色">
        <el-select v-model="formLabelAlign.role" size="small" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </el-form-item>
       <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.userName"  size="small"></el-input>
      </el-form-item>
      <el-form-item label="用户手机">
        <el-input v-model="formLabelAlign.userPhone"  size="small"></el-input>
      </el-form-item> <el-form-item>
    <el-button type="primary"  size="small" @click="add">新增</el-button>
    <el-button @click="resetForm('ruleForm')"  size="small">重置</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        department: "",
        empId: "",
        empNum: "",
        loginName: "",
        loginPass: "",
        role: "",
        userName: "",
        userPhone: ""
      },
        options: [{
          value: 'manager',
          label: '主管'
        }, {
          value: 'director',
          label: '经理'
        }, {
          value: 'cosmetician',
          label: '化妆师'
        }, {
          value: 'cameraman',
          label: '摄影师'
        }, {
          value: 'checker,',
          label: '收银员'
        }, {
          value: 'backman',
          label: '杂工'
        }, {
          value: 'other,',
          label: '其他'
        }
        ],
    };
  },
  methods:{
        resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      add(){
        var that=this
        that.$axios
        .post(that.$apiUrl + "/api/v1/user/add/admin",that.formLabelAlign)
        .then(function(res) {
            if (res.data.status == "0000") {
            that.$message("已新增");
          } else {
            that.$message(res.data.message);
          }
        });
      }
  }
};
</script>
<style scope>
.form {
  width: 30%;
}
.el-form-item{
    margin-bottom: 10px
}
</style>