<template>
  <div>
    <div class="header">
      <div class="pikerwrap">
        <span>始末时间</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="pikerwrap">
        <span>门店名称</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="pikerwrap">
        <span>员工姓名</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <el-button type="primary" size="medium">查询</el-button>
    </div>
    <ul>
      <li v-for="(item,index) of tablelist" class="li">
        <span class="left" :style="{background:index===0?'pink':'white'}">{{item.name}}</span>
        <span class="right">{{item.num}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tablelist:[
          {
              name:'总业绩',
              num:''
          },
          {
              name:'订单+共享DS金额',
              num:''
          },
          {
              name:'修正金额',
              num:''
          },
          {
              name:'主推DS比例',
              num:''
          },
          {
              name:'主推DS金额',
              num:''
          },
          {
              name:'满意度',
              num:''
          },
          {
              name:'满意度比例',
              num:''
          },
          {
              name:'ps',
              num:''
          }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
}
.pikerwrap {
  margin-right: 10px;
}
.pikerwrap span {
  margin-right: 10px;
}
ul {
  width: 50%;
  margin: 50px auto;
}
.li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  border-bottom: none;
}

.li:last-child {
  border-bottom: 1px solid #ccc;
}
.li span {
  display: inline-block;
  text-align: center;
}

.left {
  width: 20%;
  border-right: 1px solid #ccc;
}
.right {
  width: 79%;
}
</style>