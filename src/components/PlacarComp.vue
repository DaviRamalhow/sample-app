<template>
    <div class="flex justify-center">

        <ui-button @click="add">ADD</ui-button>
        <ui-button @click="rem">REM</ui-button>
    </div>
</template>v'1

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { Placar } from "../utils/types";

const props = defineProps({
    local: { type: Boolean, default: undefined },
    visitante: { type: Boolean, default: undefined },
    placar: { type: Object as () => Placar },
});

const { local, placar, visitante } = toRefs(props);

const add = () => {
    if (placar?.value) {
        if (local?.value) {
            placar.value.local += 1;
        } else {
            placar.value.visitante += 1;
        }

    }

};
const rem = () => {
    if (placar?.value) {
        if (local?.value) {
            placar.value.local -= 1;
        } else {
            placar.value.visitante -= 1;
        }

    }

};

</script>




<style lang="scss" scoped>
</style>