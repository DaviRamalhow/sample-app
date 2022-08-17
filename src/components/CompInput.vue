<template>
    <div>
        <button @click="clicked">{{ name }}</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";


defineProps({
    name: { type: String, default: "carlitos" },
});


const clicked = () => {

    console.log("batata");
};

</script>


<style lang="scss" scoped>
</style>