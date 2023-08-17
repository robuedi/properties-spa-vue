// declare module '*.vue' {
//     import type { DefineComponent } from 'vue' 
//     const component: DefineComponent<{}, {}, any> 
//     export default component 
// }

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'primevue/toasteventbus' {
  // Define the type for the ToastEventBus module
  export default class ToastEventBus {
    // Declare the methods you intend to use
    static emit(event: string, payload?: any): void;
    // ... other methods you might use
  }
}