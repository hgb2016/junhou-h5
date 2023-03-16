<template>
  <div>
    <van-nav-bar placeholder fixed title="FaceApi Detect" left-arrow @click-left="_routerBack"/>
    <div class="detect-con">
      <div class="detect-tips">{{ tipsText }}</div>
      <div class="video-con">
        <video :class="['video', hasFace?'video-detected':'video-no']"
               autoplay playsinline muted ref="video" @play="onVideoPlay"/>
      </div>
      <div class="detect-tips">{{ gestureArray[curGesture] }}</div>
      <canvas id="myCanvas" width="343" height="200" style="display: none"></canvas>
      <img :src="imgSrc">
    </div>
  </div>
</template>

<script>
import * as faceapi from "@vladmandic/face-api";
import {Toast} from "vant";

export default {
  name: "LiveDetectPage",
  data() {
    return {
      videoStream: null,
      tipsText: 'Initializing, please wait',
      hasFace: false,
      video: null,
      detectEnable: false,
      gestureEnable: false,
      detectOpt: null,
      gestureArray: ['请正对相机镜头', '请向左转头', '请向右转头', '请张张嘴'],
      curGesture: 0,
      imgSrc: '',
    };
  },
  mounted() {
    this.video = this.$refs.video
    this.video.setAttribute('playsinline', true)
    this.video.onloadedmetadata = this.video.play
    this.loadFaceModels()
  },
  beforeDestroy() {
    this.detectEnable = false
    this.closeCamera()
  },
  methods: {
    //截取当前帧的图片
    cutPicture(){
      var v = document.querySelector("video");
      let canvas = document.getElementById('myCanvas')
      var ctx = canvas.getContext('2d');
      ctx.drawImage(v, 0, 0, 343, 200);
      var oGrayImg = canvas.toDataURL('image/jpeg')
      this.imgSrc = oGrayImg
    },
    onVideoPlay() {
      if (this.detectEnable) {
        return
      }
      this.gestureEnable = true
      this.detectEnable = true
      this.detectOpt = new faceapi.TinyFaceDetectorOptions({
        inputSize: 128,
      })
      setTimeout(() => {
        this.detectOneFrame()
        this._dismissLoading()
      }, 800)
    },
    onGestureFinish() {
      this.cutPicture();
      this.detectEnable = false
      this.closeCamera()
    },

    onGestureDetect(type) {

      if (type == this.curGesture) {

        if (type == 3) {
          this.onGestureFinish()
        } else {
          this.gestureEnable = false
          this.curGesture += 1

          setTimeout(() => {
            this.gestureEnable = true
          }, 1000)
        }
      }
    },
    checkFaceGesture(landmarks) {
      if (!this.gestureEnable) {
        return
      }
      if (this.curGesture == 0) {
        this.curGesture = 1
      }
      let ps = landmarks.relativePositions
      let left = ps[12].x - ps[54].x
      let right = ps[48].x - ps[4].x
      let mouth = ps[66].y - ps[62].y
      let lip = ps[57].y - ps[66].y
      let lrdiv = left / (right + 0.00001)
      if (lrdiv < 0.3) {
        this.onGestureDetect(1)
      } else if (lrdiv > 3) {
        this.onGestureDetect(2)
      } else if (mouth > 1.5 * lip) {
        this.onGestureDetect(3)
      }
    },
    parseDetectResult(result) {
      if (result) {
        this.hasFace = true
        this.tipsText = '检测到人脸了' + result.detection.score.toFixed(2)
        this.checkFaceGesture(result.landmarks)
      } else {
        this.hasFace = false
        this.tipsText = '没有人脸哦'
      }
    },
    async detectOneFrame() {
      if (this.detectEnable) {
        let result = await faceapi
          .detectSingleFace(this.video, this.detectOpt)
          .withFaceLandmarks(true)
        this.parseDetectResult(result)
        requestAnimationFrame(this.detectOneFrame);
      }
    },
    loadFaceModels() {
      this._showLoading();
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("models"),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri("models"),
      ]).then(() => {
        this._dismissLoading();
        faceapi.tf.setBackend('webgl')
        this.openCamera()
      });
      this._dismissLoading();
    },
    closeCamera() {
      if (this.videoStream) {
        this.videoStream.getTracks().forEach(t => {
          t.stop()
        });
        this.videoStream = null
        this.video.pause()
        this.video.srcObject = null
      }
    },
    openCamera() {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {facingMode: 'user', width: 720, height: 720}
      }).then(stream => {
        this.video.srcObject = stream;
        let vt = stream.getVideoTracks()[0]
        let settings = vt.getSettings()
        this.videoStream = stream
        this.video.width = settings.width
        this.video.play()
      }).catch(err => {
        this._showToast(err)
      })
    },
  },
}
</script>

<style scoped lang="less">
.image-pop {
  .ok-btn {
    width: 80%;
    margin-top: 30px;
  }

  border-radius: 8px;
  padding: 12px;
  background: white;
  width: 80vw;
  text-align: center;
}

.detect-tips {
  height: 24px;
  color: #009EE6;
  font-size: 20px;
  margin: 10px 0;
}

.video-con {
  position: relative;
  padding: 20px 0;
}

.video-detected {
  border-color: #00C6B8;
  border-style: solid;
}

.video-no {
  border-color: #858b9c;
  border-style: dashed;
}

.video {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border-width: 4px;
  transform: scaleX(-1);
}

.detect-con {
  text-align: center;
  padding-top: 30px;
}
</style>
