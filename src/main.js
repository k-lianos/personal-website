import { createApp, version } from "vue";
import App from "./App.vue";

const print = (message) => console.log(`%c${message}`, "color: rgb(1,87,97)");

const welcome = `welcome to :
 _     _  _                                         
| |   | |(_)                                        
| |  _| | _ _____ ____   ___   ___  ____ ___  ____  
| |_/ ) || (____ |  _ \\ / _ \\ /___)/ ___) _ \\|    \\ 
|  _ (| || / ___ | | | | |_| |___ ( (__| |_| | | | |
|_| \\_)\\_)_\\_____|_| |_|\\___/(___(_)____)___/|_|_|_|
`;

const techStack = `Empowered by the progressive Vue.js (${version})`;

print(welcome);
print(techStack);

createApp(App).mount("#app");
