<template>
  <ui-container>
    <div class="container_bars">

      <div class="container-carac">
        Jogador
        <div class="barra-jogador">

          <div id="barra" :style="{ width: dano1 + '%' }"></div>
        </div>
      </div>


      <div class="container-carac">
        Monstro
        <div class="barra-monstro">

          <div id="barra2" :style="{ width: dano2 + '%' }"></div>
        </div>
      </div>

    </div>

    <div v-if="jogar" class="container_buttons">
      <div id="atacar" :class="classeA" @click="ataque">
        Ataque
      </div>
      <div id="spAtaque" :class="classeSP" @click="spAtaque">
        Ataque Especial
      </div>
      <div id="curar" :class="classeC" @click="curar">
        Curar
      </div>
      <div id="desistir" :class="classeD" @click="desistir">
        Desistir
      </div>



    </div>
    <div v-else>
      <div :class="classeN" @click="Novamente">
        Jogar Novamente
      </div>
    </div>
  </ui-container>
</template>

<script lang="ts" setup>
//import { sleep } from "@andrewcaires/utils.js";
import { ref, computed } from "vue";
const classeA = ref("btn-attack");
const classeSP = ref("btn-spAttack");
const classeC = ref("btn-cure");
const classeD = ref("btn-giveUp");
const classeN = ref("btn-again");

const width = ref(100);

const jogador = ref(
  { vida: 100, ataque: 10, spAtaque: 15, cura: 18 }
);

const monstro = ref(
  { vida: 100, ataque: 15, spAtaque: 10 }
);
const dano1 = computed(() => jogador.value.vida);
const dano2 = computed(() => monstro.value.vida);
const jogar = ref(true);
const danoP = ref(0);
const danoM = ref(0);

const ataque = () => {

  danoM.value = (Math.random() * (15 - 6)) + 1;
  danoP.value = (Math.random() * (10 - 6)) + 1;

  jogador.value.vida -= danoM.value;
  //jogador.value.vida--;
  monstro.value.vida -= danoP.value;
  let dano = jogador.value.vida;
  width.value = `${dano}%`;
  console.log(width, " ", jogador.value.vida);
  if (jogador.value.vida <= 0) {
    jogador.value.vida = 0;
    jogar.value = false;
  }
  if (monstro.value.vida <= 0) {
    monstro.value.vida = 0;
    jogar.value = false;
  }
};
const spAtaque = () => {
  jogador.value.vida -= (Math.random() * (10 - 6)) + 1;
  monstro.value.vida -= (Math.random() * (15 - 6)) + 1;
  let dano = jogador.value.vida;
  width.value = `${dano}%`;
  console.log(width, " ", jogador.value.vida);
  if (jogador.value.vida <= 0) {
    jogador.value.vida = 0;
    jogar.value = false;
  }
  if (monstro.value.vida <= 0) {
    monstro.value.vida = 0;
    jogar.value = false;
  }
};
const curar = () => {
  jogador.value.vida -= (Math.random() * (15 - 6)) + 1;
  jogador.value.vida += (Math.random() * (19 - 6)) + 1;
  let dano = jogador.value.vida;
  width.value = `${dano}%`;
  console.log(width, " ", jogador.value.vida);
};
const desistir = () => {
  jogador.value.vida = 100;
  monstro.value.vida = 100;
  let dano = jogador.value.vida;
  width.value = `${dano}%`;
  console.log(width, " ", jogador.value.vida);
  jogar.value = false;
};

const Novamente = () => {
  jogador.value.vida = 100;
  monstro.value.vida = 100;
  jogar.value = true;
};

</script>

<style lang="scss" scoped>
.Home {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

ul {
  list-style: none;
}

.container-carac {
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: 30px;
}

.barra-jogador {
  height: 50px;
  width: 500px;
  border: 1px solid black;
  margin: 40px;
}

.barra-monstro {
  height: 50px;
  width: 500px;
  border: 1px solid black;
  margin: 40px;
}

.btn-attack {
  background-color: red;
  flex: 1;
  width: 200px;
  height: 60px;
  margin: 5px;
  align-items: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

#barra {
  background-color: rgb(55, 212, 55);
  height: 100%;
  width: 100%;
  transition: width 0.1s;
}

#barra2 {
  background-color: rgb(55, 212, 55);
  height: 100%;
  width: 100%;
  transition: width 0.1s;
}

.btn-spAttack {
  background-color: orange;
  flex: 1;
  width: 200px;
  height: 60px;
  margin: 5px;
  align-items: center;
  font-size: 20px;
  display: flex;
  justify-content: center;

}

.btn-cure {
  background-color: green;
  flex: 1;
  width: 200px;
  height: 60px;
  margin: 5px;
  align-items: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.btn-giveUp {
  background-color: gray;
  flex: 1;
  width: 200px;
  height: 60px;
  margin: 5px;
  align-items: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.btn-again {
  background-color: rgb(209, 194, 194);
  flex: 1;
  width: 200px;
  height: 60px;
  margin: 5px;
  align-items: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.container_bars {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.container_buttons {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}
</style>