<template>
  <div class="container_atv1">
    <div class="list">
      <ui-button v-for="(item, key) in pokemons" :key="key" @click="getPokemon(item.url)">
        {{ item.name }}
      </ui-button>
    </div>

    <AppInput2 @pressed="pressed"></AppInput2>
    <div v-if="pokemon">
      <img :src="pokemon.sprites?.back_default" alt="">
    </div>

  </div>
</template>

<script lang="ts" setup>
//import AppInput from "../components/AppInput.vue";
import { onMounted, Ref, ref } from "vue";
import AppInput2 from "../components/AppInput2.vue";

interface Pokemons {
  name: string;
  url: string;
}

interface PokemonSprites {
  back_default: string;
}

interface Pokemon {
  sprites?: PokemonSprites;
}

const pokemon: Ref<Pokemon> = ref({});
const pokemons: Ref<Pokemons[]> = ref([]);

async function pressed() {
  const info = await fetch("https://pokeapi.co/api/v2/pokemon/rattata");
  const json = await info.json();
  pokemon.value = json;
  console.log(json);
}

const getPokemon = async (url: string) => {
  const info = await fetch(url);
  const json = await info.json();
  pokemon.value = json;
};

onMounted(async () => {
  const info = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await info.json();
  pokemons.value = json.results;
  console.log(json);
});

</script>

<style lang="scss" scoped>
.container_atv1 {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  border-radius: 20px;
}

.btn-rand {
  background-color: aqua;
  width: 70px;
  height: 70px;
  border: 1px solid black;
  margin: 10px;
}
</style>