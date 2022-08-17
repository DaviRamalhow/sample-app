<template>
    <div>
        <p>Received name: {{ props.name }}</p>
        <button @click="getAlert">Press Me</button>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["pressed"]);

function getAlert() {
    emits("pressed");
}

interface batata {
    name?: string;
}

const props = withDefaults(defineProps<batata>(), {
    name: "Stewart",
}); 
</script>

<style lang="scss" scoped>
</style>