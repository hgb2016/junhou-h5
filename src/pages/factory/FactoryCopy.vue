<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="Test Copy" fixed :z-index="10"></van-nav-bar>
    <div class="navbar-con-16">
      <van-cell title="Copy Text By Web" is-link v-clipboard="'text copy by web'" @click="onCopyOk"></van-cell>
      <van-cell title="Copy Text By Api" is-link @click="onCopyByApi"></van-cell>
      <van-cell title="Get Clipboard Text" is-link @click="onReadClipboard"></van-cell>

    </div>

    <van-field v-filter:[format]="format" v-model="id_num"></van-field>

    <!--listen to paste-->
    <div class="top-mar-16">
      <van-field v-model="listenText" placeholder="I am Listening To Paste" ></van-field>
    </div>
  </div>
</template>

<script>
  import {Dialog} from 'vant';

  export default {
    name: "factory-copy",
    data: function () {
      return {
        listenText: '',
        id_num: '',
        direction: 'dfddf',
        format:[/[0-9]/g,/[\u4E00-\u9FA5]/g,],
      };
    },
    mounted() {
      window.addEventListener("paste", this.somePasteEvent);
    },
    beforeUnmount() {
      window.removeEventListener("paste", this.somePasteEvent);
    },
    methods: {
      somePasteEvent(event) {
        let cpData = event.clipboardData || window.clipboardData;
        if (cpData) {
          let cpText = cpData.getData("text");
          Dialog({message: 'You Just Paste:' + cpText});
        }
      },
      onReadClipboard() {
        let text = this._getClipText();
        if (text) {
          Dialog({message: text});
        }
      },
      onCopyByApi() {
        this.$dsBridge.call('syn.setClipText', 'copy text by api');
        this._showToast('Copy Succeed!')
      },
      onCopyOk() {
        this._showToast('Copy Succeed!')
      },
    },
  }
</script>

<style scoped>

</style>
