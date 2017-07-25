<template>
  <div class="corpo">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cadastro">Cadastro</a></li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>
