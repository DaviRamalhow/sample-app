<template>
    <UiContainer class="display-flex justify-center">
        <h1>{{ test }}</h1>
        <UiButton @click="mudar">Press Me</UiButton>
        {{ batata }}
        <UiButton @click="mudar1" class="justify-co">Aperta ae</UiButton>
    </UiContainer>
</template>

<script lang="ts" setup>
import { trigger } from "@vue/reactivity";
import { Ref, ref, toRef, reactive, toRefs, customRef } from "vue";

const batata = $ref("banana");

// const cube = reactive({
//     length: 10,
//     width: 20,
//     height: 33,
// });

const mudar = () => {
    batata = "danone";
};

function useDebouncedRef(value: string, delay = 1000) {
    let timeout: number;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue: string) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    value = newValue;
                    trigger();
                }, delay);
            }
        };
    });
}

const test = useDebouncedRef("banana");

function mudar1() {
    test.value = "zeca";
}

// const { length, width, height } = $toRefs(cube);
</script>

<style lang="scss" scoped>
</style>