import { createApp } from 'vue';
import { techStack, welcome } from './main.constants';
import { print } from './utils';
import App from './app/App.vue';

print(welcome);
print(techStack);

createApp(App).mount('#app');
