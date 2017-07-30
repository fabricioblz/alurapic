import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode){
    let current = 0;
    el.addEventListener('dblclick', function() {
      let increment = binding.value || 90;

      if(binding.modifiers.reverse){
        current-=increment
      }else{
        current+=increment
      }

      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
      el.style.transform = `rotate(${ current }deg)`;
    })
  }

});
