<template>
  <div>

    <h1 class="centralizado">Alurapic</h1>
    <h3 class="centralizado">{{ mensagem }}</h3>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate='1.2' :url="foto.url" :titulo="foto.titulo" />
          <meu-botao rotulo='Remover' tipo='button' :confirmation='false' classStyle='danger' @buttonTrigged='remove(foto)' />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'
import transform from '../../directives/Transform';

export default {

  components: {
    'meu-botao': Botao,
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  directives:{
    'meu-transform': transform
  },

  data () {
    return {

      fotos: [],
      mensagem: '',

      filtro: ''
    }
  },

  methods: {
    remove(foto){
      this.$http
      .delete(`http://localhost:3000/v1/fotos/${ foto._id}`)
      .then(()=>{
        let index = this.fotos.indexOf(foto);
        this.fotos.splice(index, 1)

        this.mensagem = 'Imagem removida com sucesso!'
      }, err=>this.mensagem='Não rolou!')
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {

    this.$http
    .get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>
<style>

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
