<template>
    <div>

        <CompInput :name="name"></CompInput>
        <CompInput></CompInput>

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CompInput from "../components/CompInput.vue";


const name = ref("batatinha");
</script>

<style lang="scss" scoped>
</style>