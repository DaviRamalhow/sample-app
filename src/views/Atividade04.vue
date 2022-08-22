<template>
    <div>

        <h1>{{ nota }}</h1>
        <input type="text" v-model="nota">
        <br>
        <span>{{ verificaTemp }}</span>
        <br>
        <span>{{ verificaTempFunc }}</span>
        <br>
        <input type="text" v-model="temperatura">
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, toRefs, onMounted, computed } from "vue";
const nota = ref(1);

onMounted(() => {
    nota.value = 20;
});

const temperatura = ref(26);

const verificaTemp = computed(() => {
    console.log("computed");
    return temperatura.value > 25 ? "Temperatura alta" : "Temperatura baixa";

});
const verificaTempFunc = computed(() => {
    console.log("banana");
    return temperatura.value > 25 ? "Temperatura alta" : "Temperatura baixa";

});

</script>

<style lang="scss" scoped>
</style>