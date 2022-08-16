<template>
  <div class="container_atv1">

    <button @click="compAtv = 'AppInput'" class="btn-rand">Clique</button>
    <button @click="compAtv = 'AppInput2'" class="btn-rand">Clique</button>
    <component :is="compAtv" />



  </div>
</template>

<script lang="ts">
import AppInput from "../components/AppInput.vue";
import AppInput2 from "../components/AppInput2.vue";

export default {
  components: { AppInput, AppInput2 },

  data() {

    return {
      compAtv: "AppInput"
    };
  }

};


</script>

<style lang="scss" scoped>
.container_atv1 {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  border-radius: 20px;
}

.btn-rand {
  background-color: aqua;
  width: 70px;
  height: 70px;
  border: 1px solid black;
  margin: 10px;
}
</style>