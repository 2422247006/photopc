<template>
  <div class="page">
    <div class="date">
      <div class="date_left"></div>
      <div
        :style="{width:index===11?'20px':'70px'}"
        v-for="(item,index) of datelist"
        :key="item"
        class="dateitem"
      >{{item}}</div>
    </div>
    <div class="con" v-for="item of daylist" :key="item.id">
      <div class="left">
        <div class="dayl">
          <p>{{item.day}}</p>
          <p>周六</p>
        </div>
        <div class="dayr">
          <p>可用总量:36</p>
          <p>可用余量:0</p>
          <p>详情</p>
        </div>
      </div>
      <div class="time" :style="{width:index===11?'20px':'70px'}" v-for="(i,index) of item.time">
        <div
          :style="{width:index===11?'100%':'30%',background:s.col==='0'?'black':s.col==='1'?'#1989fa':s.col==='2'?'green':s.col==='3'?'red':'#DDDDDD'}"
          v-for="s of i.color"
          :title="s.title"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datelist: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
      ],
      daylist: [
        {
          id: 0,
          day: "6月29日",
          time: [
            {
              id: 0,
              color: [
                { id: 0, col: "0", title: "10:00" },
                { id: 0, col: "1", title: "10:20" },
                { id: 0, col: "2", title: "10:40" },
                { id: 0, col: "4", title: "10:00" },
                { id: 0, col: "0", title: "10:20" },
                { id: 0, col: "1", title: "10:40" },
                { id: 0, col: "2", title: "10:00" },
                { id: 0, col: "3", title: "10:20" },
                { id: 0, col: "0", title: "10:40" },
                { id: 0, col: "1", title: "10:00" },
                { id: 0, col: "4", title: "10:20" },
                { id: 0, col: "3", title: "10:40" }
              ]
            },
            {
              id: 1,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 2,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 3,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 4,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 5,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 6,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 7,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 8,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 9,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 10,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "4" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "3" },
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "4" },
                { id: 0, col: "3" }
              ]
            },
            {
              id: 11,
              color: [
                { id: 0, col: "0" },
                { id: 0, col: "1" },
                { id: 0, col: "2" },
                { id: 0, col: "2" }
              ]
            }
          ]
        },
        {
          id: 1,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        },
        {
          id: 2,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        },
        {
          id: 3,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        },
        {
          id: 4,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        },
        {
          id: 5,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        },
        {
          id: 6,
          day: "6月29日",
          time: [
            { id: 0, color: "0" },
            { id: 1, color: "0" },
            { id: 2, color: "0" },
            { id: 3, color: "0" },
            { id: 4, color: "0" },
            { id: 5, color: "0" },
            { id: 6, color: "0" },
            { id: 7, color: "0" },
            { id: 8, color: "0" },
            { id: 9, color: "0" },
            { id: 10, color: "0" },
            { id: 11, color: "0" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.page {
  width: 100%;
  height: 100%;
}
.date {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.dateitem {
  width: 70px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.date_left {
  width: 10%;
  height: 50px;
}
.left {
  width: 10%;
  height: 80px;
  display: flex;
  border: 1px solid rgb(242, 242, 242);
}
.dayl {
  width: 40%;
  height: 80px;
  background: rgb(242, 242, 242);
  font-size: 10px;
  font-weight: 530;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dayl p,
.dayr p {
  margin: 5px 0;
}
.dayr {
  width: 60%;
  height: 80px;
  font-size: 10px;
  font-weight: 530;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.time {
  width: 70px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
}
.time div {
  width: 30%;
  margin: 1px;
  border-radius: 10%;
}
.con {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
}
.red {
  background: red;
}
</style>