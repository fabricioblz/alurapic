<template>

  <div>
    <h1>{{ titulo }}</h1>

    <ul>

        <li>
            <img :src="foto1.url" :alt="foto1.titulo">
        </li>

        <li>
            <img v-bind:src="foto2.url" v-bind:alt="foto2.titulo">
        </li>

    </ul>

  </div>

</template>

<script>
export default {

  data() {
    return {
      titulo: 'Curso Vue',
      foto1: {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        titulo: 'Cachorro'
      },
      foto2: {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        titulo: 'Cachorro2'
      },

    }
  }
}
</script>

<style>
</style>
