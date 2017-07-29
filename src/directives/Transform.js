import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode){
    console.log(el)
  }

});
