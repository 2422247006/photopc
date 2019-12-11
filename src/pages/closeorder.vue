<template>
  <div>
    <div class="block">
      <span class="span">日期</span>
      <el-date-picker
        v-model="date"
        value-format="yyyy-MM-dd"
        type="daterange"
        placeholder="选择日期范围"
        @change="changedate"
      ></el-date-picker>
    </div>
    <div class="block">
      <span class="span">时间</span>
      <el-time-select
        @change="time1"
        v-model="startTime"
        :picker-options="{
      start: '08:00',
      step: '00:20',
      end: '21:40'
    }"
      ></el-time-select>
      <span style="margin:0 10px;">-</span>
      <el-time-select
        @change="time2"
        v-model="endTime"
        :picker-options="{
      start: '08:00',
      step: '00:20',
      end: '21:40',
      minTime: startTime
    }"
      ></el-time-select>
    </div>
    <div class="block">
      <span class="span">席位</span>
      <el-select v-model="valuenum" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
     <div class="block">
      <span class="span">操作</span>
      <el-select v-model="valuedo" placeholder="请选择">
        <el-option
          v-for="item in dooptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
   

    <el-button type="primary" @click="submit" style="margin-left:10%;margin-top:30px;">确认</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      startTime: "",
      endTime: "",
      valuenum: "",
      valuedo:'true',
      options: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        }
      ],
       dooptions: [
        {
          value: "true",
          label: "批量打开"
        },
        {
          value: "false",
          label: "批量关闭"
        }
      ]
    };
  },
  methods: {
    changedate() {
      console.log(this.date);
    },
    time1() {
      console.log(this.startTime);
    },
    time2() {
      console.log(this.endTime);
    },
    submit() {
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/schedule/close", {
             closeDateList:that.date,
              timeBegin:that.startTime,
              timeEnd:that.endTime,
            closeNum:that.value,
            openSchedule:that.valuedo
        })
        .then(function(res) {
          if (res.data.status == "0000") {
            that.$message.success("操作成功");
            that.date = [],
              that.startTime = "",
              that.endTime = "",
            that.value = "",
            that.valuedo=''
          } else {
            that.$message.error("请完整填写");
          }
        });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.block {
  /* margin: 20px 0; */
  display: flex;
  height: 50px;
  align-items: center;
  margin: 20px 0;
}
.span {
  width: 10%;
  text-align: right;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding-right: 10px;
}
</style>