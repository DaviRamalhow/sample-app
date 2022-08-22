<template>
    <input :type="inputType" :value="value" :name="name" :placeholder="placeholder"
        class="text-sm leading-5 text-gray-700 focus:outline-none border border-gray-400 focus:border-blue-500 placeholder-gray-300 h-10 py-2 pl-4 pr-10 appearance-none rounded w-full transition duration-150 ease-in-out drop-shadow-md mb-6">


</template>



<script setup lang="ts">
import { computed, ref } from "vue";
const inputType = ref("email");

defineProps({
    name: { type: String, default: "" },
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
});

const isPassword = computed(() => {
    return inputType.value == "password";
});



</script>



<style scoped>
</style>