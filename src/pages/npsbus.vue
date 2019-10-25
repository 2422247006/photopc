<template>
  <div>
    <div class="header">
      <div class="pikerwrap">
        <span>评分时间：</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="pikerwrap">
        <span>门店：</span>
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
        <span>得分：</span>
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
        <el-button type="primary" size="medium">查询</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 95%;margin:20px auto;">
      <el-table-column prop="name" label="顾客姓名"></el-table-column>
      <el-table-column prop="tel" label="联系方式"></el-table-column>
      <el-table-column prop="score" label="评分"></el-table-column>
      <el-table-column prop="time" label="评价时间"></el-table-column>
      <el-table-column prop="ask" label="意见建议"></el-table-column>
      <el-table-column prop="do" label="操作">
        <template slot-scope="scope">
          <el-button
            style="cursor: pointer"
            size="mini"
            type="primary"
            @click="routerdesc(scope.$index, scope.row)"
          >查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin:50px 0px 50px 50%;"
        ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "吴亦凡",
          tel: 15044003242,
          score: "基本满意",
          ask: "嘿嘿嘿",
          time: "2019-07-25",
          do: "123"
        },
        {
         name: "吴亦凡",
          tel: 15044003242,
          score: "基本满意",
          ask: "嘿嘿嘿",
          time: "2019-07-25",
          do: "123"
        }
      ]
    };
  },
  methods: {
     routerdesc(index,row){
      this.$router.push({
          path:'/npsDesc'
      })
    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
}
.pikerwrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 3px;
}
</style>