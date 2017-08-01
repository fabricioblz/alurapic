<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <h2 v-if='foto._id' class="centralizado">Editando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <form @submit.prevent='save()'>
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" name='titulo' data-vv-as='Título' v-validate data-vv-rules="required|min:3|max:30" v-model='foto.titulo'>
        <span class='erro' v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" name="url" v-validate data-vv-rules="required"  v-model='foto.url'>
        <span class='erro' v-show="errors.has('url')">Deu ruim</span>
        <imagem-responsiva v-show='foto.url' :url='foto.url' :titulo='foto.titulo'/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao"  v-model='foto.descricao'></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{ name: 'home' }"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data (){
    return {
      foto: new Foto(),
      id: this.$route.params.id
    }
  },

  methods: {
    save(){
      this.$validator.
      validateAll()
      .then(success => {
        if(success){
          this.fotoService
          .cadastra(this.foto)
          .then(()=> {
            this.$router.push({ name: 'home' })
            this.foto = new Foto();
          }, err => console.log(err));
        }
      })
    }
  },

  created() {
    this.fotoService = new FotoService(this.$resource);
    if(this.id){
      this.fotoService
        .busca(this.id)
        .then(foto=> this.foto = foto)
    }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

  .erro{
    color: red;
  }

</style>

