<template>
  <button class='botao' :class='buttonStyle' @click='launchButton' :type='tipo'>{{ rotulo }}</button>
</template>


<script>

export default{
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },
    confirmation: Boolean,
    classStyle: String
  },

  methods: {
    launchButton(){
      if(this.confirmation){
        if(confirm('Sure?')){
          this.$emit('buttonTrigged')
        }
      }else{
        this.$emit('buttonTrigged')
      }
    }
  },

  computed: {
    buttonStyle(){
      if(this.classStyle == 'primary' || !this.classStyle) return 'botao-padrao';
      if(this.classStyle == 'danger') return 'botao-perigo';

    }
  }
}

</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
