<template>
  <div>
    <el-form
      class="form"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
     ref="formLabelAlign"
    >
      <el-form-item label="部门" prop="department">
        <el-input v-model="formLabelAlign.department"></el-input>
      </el-form-item>
      <el-form-item label="员工编号" prop="empNum">
        <el-input v-model="formLabelAlign.empNum"></el-input>
      </el-form-item>
      <el-form-item label="登录名" prop="loginName">
        <el-input v-model="formLabelAlign.loginName"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="loginPass">
        <el-input v-model="formLabelAlign.loginPass"></el-input>
      </el-form-item>
      <el-form-item label="员工角色" prop="role"> 
        <el-select v-model="formLabelAlign.role" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="formLabelAlign.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="userPhone">
        <el-input v-model="formLabelAlign.userPhone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="add('formLabelAlign')">新增</el-button>
        <el-button @click="resetForm('formLabelAlign')" size="small">重置</el-button>
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
        empNum: "",
        loginName: "",
        loginPass: "",
        role: "",
        userName: "",
        userPhone: ""
       
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    add(formName) {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/admin/add", that.formLabelAlign)
        .then(function(res) {
          if (res.data.status == "0000") {
            that.$message("已新增");
             that.$refs[formName].resetFields();
          } else {
            that.$message(res.data.message);
          }
        });
    }
  }
};
</script>
<style scoped>
.form {
  width: 30%;
}
.el-form-item {
  margin-bottom: 20px;
}
</style>