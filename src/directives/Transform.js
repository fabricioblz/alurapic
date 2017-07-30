export default {
  bind(el, binding, vnode){
    let current = 0;
    let effect = '';

    el.addEventListener('dblclick', function() {
      let increment = binding.value || 90;
      console.log( binding.arg )

        if(!binding.arg || binding.arg == 'rotate'){

          if(binding.modifiers.reverse){
            current-=increment
          }else{
            current+=increment
          }

          effect = `rotate(${ current }deg)`;
        }else if(binding.arg == 'scale'){
          effect = `scale(${ increment })`;
        }

      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
      el.style.transform = effect
    });
  }
};
