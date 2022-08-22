import { App } from "vue";

import HelloWorld from "./HelloWorld.vue";

import AppInput from "./AppInput.vue";
import AppInput2 from "./AppInput2.vue";
import PlacarComp from "./PlacarComp.vue";
//import FormPasswordContainer from "./FormPasswordContainer.vue";
import FormPasswordContainer2 from "./FormPasswordContainer2.vue";
import FormEmailContainer from "./FormEmailContainer.vue";



export const install = (app: App) => {
  app.component("HelloWorld", HelloWorld);

  app.component("AppInput", AppInput);
  app.component("AppInput2", AppInput2);  
  app.component("PlacarComp", PlacarComp);  
  //app.component("FormPasswordContainer", FormPasswordContainer);  
  app.component("FormPasswordContainer2", FormPasswordContainer2);  
  app.component("FormEmailContainer", FormEmailContainer);  


};

export default install;
