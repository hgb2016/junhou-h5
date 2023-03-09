<template>
  <div class="hello">
    <van-nav-bar left-arrow @click-left="_routerBack" title="Translation Format" fixed :z-index="10"></van-nav-bar>
    <div class="padding59"></div>
    <div class="align-center" style="padding: 20px;display: flex;flex-direction: column"  >

        <van-field v-model="chinese" label="中文value值" placeholder="请输入表示中文value值" />
        <van-field v-model="foreign" label="外文value值" placeholder="请输入表示外文value值" />

      <input style="margin: 20px 0px" type="file" @change="importExcel($event.target)" />
      <van-button v-if="showStr" v-clipboard="showStr" type="primary" @click="showSucced" >copy</van-button>


    </div>

    <van-field v-model="showStr" autosize     type="textarea"></van-field>
    <div class="align-center">
      <van-button class="submit-btn" style="width: 80vw;margin-top: 5vw" @click="downExcel">Export Excel</van-button>
    </div>
  </div>
</template>

<script>
  import XLSX from 'xlsx'
  import AppString from '../../locales/strings';
  export default {
    data () {
      return {
        strData: {},
        showStr:'',
        chinese:"中文",
        foreign:"英文",
        title: ["key", "中文", "英文", "乌尔都语"]
      }
    },
    mounted () {
        if (!this._isTest()){
          this._routerBack();
        }
    },
    methods: {
      downExcel(){
        let excelData=[];
        excelData.push(this.title)
        Object.keys(AppString).forEach(function (key) {
          excelData.push([key,AppString[key][0],AppString[key][1],AppString[key][2]])
        });
        let excelDatas = {
          // 定义表名
          SheetNames: ['翻译'],
          Sheets: {
            '翻译': {
              '!merges': []
            }
          }
        }
        // 通过工具将对象转换为表对象
        excelDatas.Sheets['翻译'] = XLSX.utils.json_to_sheet(excelData)
        // 将数据导出到文件中
        XLSX.writeFile(excelDatas, "翻译.xlsx")
      },
      showSucced(){
        this._showToast('copy successed')
      },
      importExcel(files) {
        console.log(files)
        let file = files.files[0] // 使用传统的input方法需要加上这一步
        const types = file.name.split('.')[1]
        const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
        if (!fileType) {
          alert('格式错误！请重新选择')
          return
        }
        this.file2Xce(file).then(tabJson => {
          if (tabJson && tabJson.length > 0) {
            this.xlsxJson = tabJson
            // console.log(tabJson)
            for (let i = 0; i < tabJson.length; i++) {
              for (let j = 0; j < tabJson[i].sheet.length; j++) {
                let  ob=tabJson[i].sheet[j]
                let item =[];
                item.push(ob[this.chinese])
                item.push(ob[this.foreign])
                if (ob['乌尔都语']){
                  item.push(ob['乌尔都语'])
                }else {
                  item.push(ob[this.foreign])
                }
                if (ob['key']){
                  this.$set(this.strData,ob['key'],item)
                }else {
                  this.$set(this.strData,ob[this.chinese],item)
                }

              }
            }
            this.showStr=JSON.stringify(this.strData)
            console.log(JSON.stringify(this.strData))
            // xlsxJson就是解析出来的json数据,数据格式如下
            // [
            //   {
            //     sheetName: sheet1
            //     sheet: sheetData
            //   }
            // ]
          }
        })
      },
      file2Xce(file) {
        return new Promise(function(resolve, reject) {
          const reader = new FileReader()
          reader.onload = function(e) {
            const data = e.target.result
            this.wb = XLSX.read(data, {
              type: 'binary'
            })
            const result = []
            this.wb.SheetNames.forEach((sheetName) => {
              result.push({
                sheetName: sheetName,
                sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
              })
            })
            resolve(result)
          }
          // reader.readAsBinaryString(file.raw)
          reader.readAsBinaryString(file) // 传统input方法
        })
      }

    }
  }
</script>
<style scoped>

</style>
