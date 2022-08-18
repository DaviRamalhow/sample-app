<template>
    <div>

        <PlacarComp :placar="placar" local></PlacarComp>
        <PlacarComp :placar="placar" visitante></PlacarComp>
        <div class="flex justify-center">
            <ui-button>local: {{ placar.local }}</ui-button>
            <ui-button>visitante: {{ placar.visitante }}</ui-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, toRefs } from "vue";
import PlacarComp from "../components/PlacarComp.vue";
import { Placar } from "../utils/types";


const placar: Ref<Placar> = ref({ local: 0, visitante: 0 });
</script>

<style lang="scss" scoped>
</style>