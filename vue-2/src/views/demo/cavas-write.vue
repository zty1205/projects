<template>
  <div>
    <canvas id="write-canvas" :key="key"></canvas>
    <el-row class="btns">
      <el-col :span="12">
        <el-color-picker v-model="strokeStyle"></el-color-picker>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="resetCanvas">清楚</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const CANVAS_WIDTH = Math.min(600, window.innerWidth - 20);
const CANVAS_HEIGHT = CANVAS_WIDTH;
const MAX_LINE_WIDTH = 30;
const MIN_LINE_WIDTH = 1;
const MAX_STROKE_Y = 10; // 最大速度
const MIN_STROKE_Y = 0.1; // 最小速度
const LAST_LINE_RADIO = 0.7;

function setRem(pageSize) {
  let wWidth =
    window.innerWidth ||
    document.body.clientWidth ||
    document.documentElement.clientWidth;
  document.getElementsByTagName("html")[0].style.fontSize =
    (wWidth / pageSize) * 100 + "px";
}
setRem(750);
function getLocationInCanvas(canvas, x, y) {
  let box = canvas.getBoundingClientRect();
  return { x: Math.round(x - box.left), y: Math.round(y - box.top) };
}
function getDistance(loc1, loc2) {
  return Math.sqrt(
    (loc1.x - loc2.x) * (loc1.x - loc2.x) +
      (loc1.y - loc2.y) * (loc1.y - loc2.y)
  );
}

export default {
  name: "Index",
  data() {
    return {
      key: 0,
      canvas: null,
      context: null,
      isMouseDown: false,
      lastLocation: {
        x: 0,
        y: 0,
      },
      lastTimeStamp: 0,
      lineWidth: 1,
      lastLineWidth: -1,
      strokeStyle: "#000000",
    };
  },
  mounted() {
    this.key = Math.random();
    this.$nextTick(() => {
      this.initCanvas();
    });
  },
  methods: {
    initCanvas() {
      const canvas = document.querySelector("#write-canvas");
      const context = canvas.getContext("2d");
      this.canvas = canvas;
      this.context = context;
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;

      this.drawGrid();
      this.initPCEvent(canvas);
      this.initPhoneEvent(canvas);
    },
    drawGrid() {
      let context = this.context;
      context.strokeStyle = "rgb(230,11,9)";

      // 边框
      context.beginPath();
      context.moveTo(3, 3);
      context.lineTo(CANVAS_WIDTH - 3, 3);
      context.lineTo(CANVAS_WIDTH - 3, CANVAS_HEIGHT - 3);
      context.lineTo(3, CANVAS_HEIGHT - 3);
      context.closePath();
      context.lineWidth = 6;
      context.stroke();

      // 米
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);

      context.moveTo(CANVAS_WIDTH, 0);
      context.lineTo(0, CANVAS_HEIGHT);

      context.moveTo(CANVAS_WIDTH / 2, 0);
      context.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT);

      context.moveTo(0, CANVAS_HEIGHT / 2);
      context.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 2);

      context.lineWidth = 1;
      context.stroke();

      context.restore();
    },
    drawLine(lastLoc, curLoc) {
      let context = this.context;
      context.beginPath();
      context.moveTo(lastLoc.x, lastLoc.y);
      context.lineTo(curLoc.x, curLoc.y);

      context.strokeStyle = this.strokeStyle;
      context.lineWidth = this.lineWidth;
      // 不设置以下属性 线条不够润滑，流畅，且产生一个个方格连起来的
      context.lineCap = "round"; // 向线条的每个末端添加圆形线帽。
      context.lineJoin = "round"; // 两条线交汇时创建圆角
      context.stroke();
    },
    calcLineWidth(t, s) {
      let v = s / t;
      let resultLineWidth;
      if (v <= MIN_STROKE_Y) {
        resultLineWidth = MAX_LINE_WIDTH;
      } else if (v >= MAX_STROKE_Y) {
        resultLineWidth = MIN_LINE_WIDTH;
      } else {
        resultLineWidth =
          MAX_LINE_WIDTH -
          ((v - MIN_STROKE_Y) / (MAX_STROKE_Y - MIN_STROKE_Y)) *
            (MAX_LINE_WIDTH - MIN_LINE_WIDTH);
      }
      if (this.lastLineWidth === -1) {
        return resultLineWidth;
      }
      // 使线条更平滑
      return (
        resultLineWidth * (1 - LAST_LINE_RADIO) +
        this.lastLineWidth * LAST_LINE_RADIO
      );
    },
    lineBegin(point) {
      this.isMouseDown = true;
      console.log(" this.isMouseDown = ", this.isMouseDown);
      this.lastLocation = getLocationInCanvas(this.canvas, point.x, point.y);
      this.lastTimeStamp = new Date().getTime();
    },
    lineEnd() {
      this.isMouseDown = false;
    },
    lineMove(point) {
      let curLocation = getLocationInCanvas(this.canvas, point.x, point.y);
      // 距离 / 时间 速度越快 线条越细
      let curTimeStamp = new Date().getTime();
      let dis = getDistance(this.lastLocation, curLocation);
      let lineWidth = this.calcLineWidth(
        curTimeStamp - this.lastTimeStamp,
        dis
      );
      this.lineWidth = lineWidth;
      this.lastLineWidth = lineWidth;
      this.drawLine(this.lastLocation, curLocation);
      this.lastLocation = curLocation;
      this.lastTimeStamp = curTimeStamp;
    },
    initPCEvent(canvas) {
      canvas.onmousedown = (e) => {
        e.preventDefault();
        this.lineBegin({ x: e.clientX, y: e.clientY });
      };
      canvas.onmouseup = (e) => {
        e.preventDefault();
        this.lineEnd();
      };
      // 鼠标移出canvas外
      canvas.onmouseout = (e) => {
        e.preventDefault();
        this.isMouseDown = false;
      };
      canvas.onmousemove = (e) => {
        e.preventDefault();
        if (this.isMouseDown) {
          this.lineMove({ x: e.clientX, y: e.clientY });
        }
      };
    },
    initPhoneEvent(canvas) {
      canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        let touch = e.touches[0];
        this.lineBegin({ x: touch.clientX, y: touch.clientY });
      });
      canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (this.isMouseDown) {
          let touch = e.touches[0];
          this.lineMove({ x: touch.clientX, y: touch.clientY });
        }
      });
      canvas.addEventListener("touchend", (e) => {
        e.preventDefault();
        this.lineEnd();
      });
    },
    resetCanvas() {
      if (this.context) {
        this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        (this.isMouseDown = false),
          (this.lastLocation = {
            x: 0,
            y: 0,
          }),
          (this.lastTimeStamp = 0),
          (this.lineWidth = 1),
          (this.lastLineWidth = -1),
          (this.strokeStyle = "black");
        this.strokeStyle = "#000000";
        this.drawGrid();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#write-canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid #aaa;
}
.btns {
  width: 6rem;
  margin: 0 auto;
}
.btns {
  margin-top: 10px;
}
</style>
