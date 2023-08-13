import { useRouter } from "vue-router";

export function usePushToName(routeName){
    const router = useRouter()
    router.push({name: routeName})
}