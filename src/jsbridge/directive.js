import Vue from 'vue'

/**
 * 针对于muse-UI 输入框的一些限制规则
 */
//只能输入数字
Vue.directive('NumInput', {

  inserted: function (el) {

    const input = el.querySelector('.mu-text-field-input'); //注意这里element与ant不同   ant为 const input = el.querySelector(el);

    input.onkeyup = function (e) {
      console.log(input.value)

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^0-9]/g, '')

      }else{

        input.value = input.value.replace(/[^\d]/g, '')

      }

    }

    input.onblur = function (e) {

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^0-9]/g, '')

      }else{

        input.value = input.value.replace(/[^\d]/g, '')

      }

    }

  }

});

//只能输入数字，字母大小写，-_字符
Vue.directive('NameInput', {

  inserted: function (el) {

    const input = el.querySelector('.mu-text-field-input'); //注意这里element与ant不同   ant为 const input = el.querySelector(el);

    input.onkeyup = function (e) {
      console.log(input.value)

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^a-zA-Z0-9_-]/g, '')

      }else{

        input.value = input.value.replace(/[^a-zA-Z0-9_-]/g, '')

      }

    }

    input.onblur = function (e) {

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^a-zA-Z0-9_-]/g, '')

      }else{

        input.value = input.value.replace(/[^a-zA-Z0-9_-]$/g, '')

      }

    }

  }

});
//只能输入字母
Vue.directive('LetterInput', {

  inserted: function (el) {

    const input = el.querySelector('.mu-text-field-input'); //注意这里element与ant不同   ant为 const input = el.querySelector(el);

    input.onkeyup = function (e) {
      console.log(input.value)

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^a-zA-Z]/g, '')

      }else{

        input.value = input.value.replace(/[^a-zA-Z]/g, '')

      }

    }

    input.onblur = function (e) {

      if (input.value.length === 1) {

        input.value = input.value.replace(/[^a-zA-Z]/g, '')

      }else{

        input.value = input.value.replace(/[^a-zA-Z]$/g, '')

      }

    }

  }

});
//不能出现汉字
Vue.directive('NoChineseInput', {

  inserted: function (el) {

    const input = el.querySelector('.mu-text-field-input'); //注意这里element与ant不同   ant为 const input = el.querySelector(el);

    input.onkeyup = function (e) {
      console.log(input.value)

      if (input.value.length === 1) {

        input.value = input.value.replace(/[\u4E00-\u9FA5]/g, '')

      }else{

        input.value = input.value.replace(/[\u4E00-\u9FA5]/g, '')

      }

    }

    input.onblur = function (e) {

      if (input.value.length === 1) {

        input.value = input.value.replace(/[\u4E00-\u9FA5]/g, '')

      }else{

        input.value = input.value.replace(/[\u4E00-\u9FA5]$/g, '')

      }

    }

  }

});


