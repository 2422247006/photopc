<template>
  <div>
    <el-button type="primary" @click="onSubmit" style="margin:30px;">新增</el-button>
    <div style="display:flex">
      <el-form ref="form" :model="form" label-width="100px" style="width:50%;">
        <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
        <el-button>取消</el-button>
        </el-form-item>-->
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
            action="https://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
            :on-change="handlePreviewindexImg"
            :on-remove="handleRemove"
            :file-list="indexImgList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传图片</el-button>
             <div slot="tip" class="el-upload__tip">只能上传600*400尺寸 图片名称不能为汉字</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="产品大图" style="width:90%;">
          <el-upload
            ref="upload"
            class="upload-demo"
            :auto-upload="false"
            action="https://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
            :on-change="handlePreviewproductShow"
            :on-remove="handleRemove"
            :file-list="productShowList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传图片</el-button>
             <div slot="tip" class="el-upload__tip">只能上传600*400尺寸 图片名称不能为汉字</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="产品详情图" style="width:90%;">
          <el-upload
            ref="upload"
            class="upload-demo"
            :auto-upload="false"
            action="https://106.12.5.191/jfxx-server-0.1/api/v1/order/share"
            :on-change="handlePreviewproductDetail"
            :on-remove="handleRemove"
            :file-list=" productDetailList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传图片</el-button>
             <div slot="tip" class="el-upload__tip">只能上传1826*12676尺寸 图片名称不能为汉字</div>
          </el-upload>
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
          <el-button
            type="primary"
            size="small"
            style="margin-left:10px;"
            plain
            @click="undercarriage(index)"
          >下架</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
         indexImage: "",
        name: "",
        minPrice: "",
        productShowImg: "",
        productDetailImg: "",
        indexImg: "",
        model: "",
        clothing: "",
        background: "",
        negative: "",
        processing: "",
        comboList: [
          {
            
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
  methods: {
    onSubmit() {
      let formData = new FormData();

      formData.append("indexImage", this.form.indexImage);

      formData.append("productShowImg", this.form.productShowImg);

      formData.append("productDetailImg", this.form.productDetailImg);

      formData.append("name", this.form.name);
      formData.append(" minPrice", this.form.minPrice);
      formData.append("model", this.form.model);
      formData.append("clothing", this.form.clothing);
      formData.append("background", this.form.background);
      formData.append("negative", this.form.negative);
      formData.append("processing", this.form.processing);
      for (let i = 0; i < this.form.comboList.length; i++) {
        for (let key in this.form.comboList[i]) {
          formData.append(
            `comboList[${i}].${key}`,
            this.form.comboList[i][key]
          );
        }
      }
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      var that = this;
      that.$axios
        .post(that.$apiUrl + "/api/v1/product/add", formData, config)
        .then(function(res) {
           that.$message("已新增");
            that.$router.go(-1);//返回上一层
            that.form={
         indexImage: "",
        name: "",
        minPrice: "",
        productShowImg: "",
        productDetailImg: "",
        indexImg: "",
        model: "",
        clothing: "",
        background: "",
        negative: "",
        processing: "",
        comboList: [
          {
            
            comboName: "",
            comboPrice: ""
          }
        ]
      }
      that.indexImgList=[],
      that.productShowList=[],
      that.productDetailList=[]

        });
    },
    addcombo(index) {
      this.form.comboList.push({
       
        comboName: "",
        comboPrice: ""
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreviewindexImg(file) {
      this.form.indexImage = file.raw;
      console.log(file);
    },
    handlePreviewproductShow(file) {
      this.form.productShowImg = file.raw;
      console.log(file);
    },
    handlePreviewproductDetail(file) {
      this.form.productDetailImg = file.raw;
      console.log(file);
    },
    undercarriage(index) {
      this.form.comboList.splice(index, 1);
    }
  },
  created() {},
  activated() {}
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