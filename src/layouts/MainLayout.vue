<template>
  <div class="text-center">
    <nav>
      <router-link to="/">Register</router-link> |
      <router-link to="/about">Login</router-link> |
      <router-link to="/atividade01">Atividade 01</router-link> |
      <router-link to="/atividade02">Atividade 02</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>