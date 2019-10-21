<template>
  <div class="hello">
    <el-menu
      default-active="1"
      class="el-menu-vetical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#113A64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <router-link tag="span" slot="title" :to="{path:'/',query:{title:'概况'}}">概况</router-link>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link tag="span" :to="{path:'/order_1',query:{title:'拍摄订单管理'}}">拍摄订单管理</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
              <router-link tag="span" :to="{path:'/order_2',query:{title:'排单表'}}">排单表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>运营管理</span>
        </template>
        <el-submenu index="3-1">
          <template slot="title">绩效管理</template>
          <el-menu-item index="3-1-1">个人绩效查询</el-menu-item>
          <el-menu-item index="3-1-2">门店绩效查询</el-menu-item>
          <el-menu-item index="3-1-3">个人NPS统计</el-menu-item>
          <el-menu-item index="3-1-4">门店NPS统计</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>财务管理</span>
        </template>
        <el-submenu index="4-1">
          <template slot="title">申请中心</template>
          <el-menu-item index="4-1-1">开发票申请</el-menu-item>
          <el-menu-item index="4-1-2">退款申请</el-menu-item>
        </el-submenu>
        <el-submenu index="4-2">
          <template slot="title">线下收支管理</template>
          <el-menu-item index="4-2-1">线下支出统计</el-menu-item>
          <el-menu-item index="4-2-2">线下支出录入</el-menu-item>
          <el-menu-item index="4-2-3">线下收入统计</el-menu-item>
          <el-menu-item index="4-2-4">线下收入录入</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="con">
      <div class="header">{{title}}</div>
      <div class="wrap">
 <router-view></router-view>
      </div>
     
    </div>
   
  </div>
</template>

<script>
export default {
  name: "manage",

  data() {
    return {
      title: "概况",
      props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
    };
  },
  watch: {
    $route(to, from) {
      this.title = this.$route.query.title;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vetical-demo {
  width: 12%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
.con {
  width: 87%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 0.1px solid#113A64;
  font-size: 16px;
  font-weight: 550;
  color: #113a64;
   padding-left: 10px;
  box-sizing: border-box;
}
.wrap{
 position: absolute;
 top:40px;
 left:0;
 right:0;
 bottom:0;
 overflow: scroll;
  padding: 10px 50px;
  box-sizing: border-box;
}
</style>
