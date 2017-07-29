import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode){
    let current = 0;
    el.addEventListener('dblclick', function() {
      let increment = binding.value
      current+=increment;
      el.style.transform = `rotate(${ current }deg)`;
    })
  }

});
