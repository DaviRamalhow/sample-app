import { App } from "vue";

import HelloWorld from "./HelloWorld.vue";
import Escolha from "./Escolha.vue";
import Rotulo from "./Rotulo.vue";
import AppInput from "./AppInput.vue";
import AppInput2 from "./AppInput2.vue";

export const install = (app: App) => {
  app.component("HelloWorld", HelloWorld);
  app.component("Escolha", Escolha);
  app.component("Rotulo", Rotulo);
  app.component("AppInput", AppInput);
  app.component("AppInput2", AppInput2);
};

export default install;
