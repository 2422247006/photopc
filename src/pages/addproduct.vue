<template>
  <div style="display:flex">
    <el-form ref="form" :model="form" label-width="100px" style="width:50%;">
      <el-form-item label="产品名称" style="width:60%;">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="化妆造型" style="width:60%;">
        <el-input v-model="form.model"></el-input>
      </el-form-item>
      <el-form-item label="服装" style="width:60%;">
        <el-input v-model="form.clothing"></el-input>
      </el-form-item>
      <el-form-item label="拍摄背景" style="width:60%;">
        <el-input v-model="form.background"></el-input>
      </el-form-item>
      <el-form-item label="修图底片" style="width:60%;">
        <el-input v-model="form.negative"></el-input>
      </el-form-item>
      <el-form-item label="冲印尺寸" style="width:60%;">
        <el-input v-model="form.processing"></el-input>
      </el-form-item>
      <el-form-item label="最低价格" style="width:60%;">
        <el-input v-model="form.minPrice"></el-input>
      </el-form-item>
      <el-form-item label="产品展示图" style="width:90%;">
        <el-upload
          ref="upload"
          class="upload-demo"
          :auto-upload="false"
          action="http://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
          :on-change="handlePreview"
          :on-remove="handleRemove"
          :file-list="indexImgList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="产品大图" style="width:90%;">
        <el-upload
          ref="upload"
          class="upload-demo"
          :auto-upload="false"
          action="http://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
          :on-change="handlePreview"
          :on-remove="handleRemove"
          :file-list="productShowList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="产品详情图" style="width:90%;">
        <el-upload
          ref="upload"
          class="upload-demo"
          :auto-upload="false"
          action="http://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
          :on-change="handlePreview"
          :on-remove="handleRemove"
          :file-list=" productDetailList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>产品套餐</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addcombo">新增套餐</el-button>
      </div>
      <div class="aaa" v-for="(item,index) in form.comboList" :key="item.id">
        <p style="width:40%;">套餐{{index+1}}</p>
        <el-input v-model="item.comboName"></el-input>
        <p style="width:20%;margin-left:10px;">价格</p>
        <el-input v-model="item.comboPrice"></el-input>
        <el-button type="primary" size="small" style="margin-left:10px;" plain>下架</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      form: {
        name: "",
        minPrice: "",
        productShow: "",
        productDetail: "",
        indexImg: "",
        model: "",
        clothing: "",
        background: "",
        negative: "",
        processing: "",
        comboList: [
          {
            id: "",
            parentCombo: "",
            comboName: "",
            comboPrice: ""
          }
        ]
      },
      indexImgList: [],
      productShowList: [],
      productDetailList: []
    };
  },
  methods:{
addcombo(index){
  this.form.comboList.push(
    {
          comboName: "",
          comboPrice: ""
        }
  )
}
  },
  created() {
    
  },
  activated(){
     console.log("哈哈哈");
    this.form = JSON.parse(sessionStorage.getItem("productRow"));
    this.indexImgList=[]
    this.indexImgList.push({
      url: this.form.indexImg
    });
    this.productShowList.push({
      url: this.form.productShow
    });
    this.productDetailList.push({
      url: this.form.productDetail
    });
  }
};
</script>

<style scoped>
.aaa {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 50%;
}
.s1 {
  margin: 0 10px;
  width: 15%;
  text-align: right;
  display: inline-block;
}
.s2 {
  font-size: 13px;
}
.s3 {
  font-size: 16px;
  border-bottom: 1px solid white;
  width: 100%;
  display: inline-block;
  line-height: 32px;
}
ul {
  width: 50%;
  background: rgb(242, 242, 242);
  padding: 1px 10px 10px 10px;
  box-sizing: border-box;
  border-radius: 2%;
}
li {
  width: 100%;
  margin: 20px 0;
}
</style>