<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :name="item.name" :label="item.label" v-for="item of tablist">
        <div class="search">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入搜索内容" class="inp"></el-input>
          <el-button type="primary">查询</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="订单号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="tel" label="手机号"></el-table-column>
          <el-table-column prop="pay" label="实际支付"></el-table-column>
          <el-table-column prop="style" label="支付方式"></el-table-column>
          <el-table-column prop="state" label="订单状态"></el-table-column>
          <el-table-column prop="time" label="预约时间"></el-table-column>
          <el-table-column prop="remarks" label="备注"></el-table-column>
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
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin:50px 0px 50px 50%;"
        ></el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changecol: -1,
      current: 0,
      changeactive: -1,
      activeName: "name1",
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
          name: "name1"
        },
        {
          id: 0,
          label: "未支付",
          name: "name2"
        },
        {
          id: 0,
          label: "等待拍摄",
          name: "name3"
        },
        {
          id: 0,
          label: "当日拍摄",
          name: "name4"
        },
        {
          id: 0,
          label: "拍摄中",
          name: "name5"
        },
        {
          id: 0,
          label: "完成",
          name: "name6"
        },
        {
          id: 0,
          label: "关闭",
          name: "name7"
        }
      ],
      tableData: [
        {
          id: 201942654236554141,
          name: "吴亦凡",
          tel: 15044003242,
          pay: 688.0,
          style: "线上微信",
          state: "等待拍摄",
          time: "2019-07-25",
          remarks: "123备注",
          do: "123"
        },
        {
          id: 201942654236554141,
          name: "吴亦凡",
          tel: 15044003242,
          pay: 688.0,
          style: "线上微信",
          state: "等待拍摄",
          time: "2019-07-25",
          remarks: "123备注",
          do: "123"
        }
      ],
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
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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