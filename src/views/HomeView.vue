<template>
  <div>
    <i>{{  quote  }}</i>
    <p>-Kanye West</p>
    <p>
      <button @click="createPost" class="bg-orange-400 rounded-md py-2 px-2">Create Post </button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import KanyeAPI from "../services/KanyeAPI";
const quote = ref();

const loadQuote = async () => {

  try {
    const response = await KanyeAPI.getQuote();
    quote.value = response.data.quote;
  } catch (err) {
    console.log(err);
  }

};
const createPost = async () => {
  const response = await KanyeAPI.createPost(JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }));
  console.log(response);
};


loadQuote();

// axios.get("https://api.kanye.rest/")
//   .then(response => {
//     quote.value = response;
//     console.log(quote);
//   });

</script>

<style lang="scss" scoped>
</style>