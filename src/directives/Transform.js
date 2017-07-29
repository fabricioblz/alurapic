import Vue from 'vue';

Vue.directive('meu-transform', {

  bind(el, binding, vnode){
    let current = 0;
    el.addEventListener('dblclick', function() {
      let increment = 90;
      let animation = false;

      if(binding.value){
        increment = binding.value.increment;
        animation = binding.value.animation;
      }

      current+=increment;
      if(animation) el.style.transition = 'transform 0.5s';
      el.style.transform = `rotate(${ current }deg)`;
    })
  }

});
