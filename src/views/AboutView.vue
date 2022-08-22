<template>
  <div class="container mx-auto mt-10">
    <div class="mx-auto mt-20 flex-wrap" style="width: 400px;">
      <h3 class="text-lg text-center font-bold mb-4">
        Password Revealing
      </h3>
      <label class="text-sm font-medium mb-2">E-mail</label>
      <FormEmailContainer v-model="email" placeholder="Email" />

      <label class="text-sm font-medium mb-2">Password</label>
      <FormPasswordContainer2 v-model="password" placeholder="Password" />

      <br>


      <ui-button>Login</ui-button>

    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref } from "vue";



const password = ref("");
const email = ref("");


</script>

<style lang="ts" setup>

</style>
