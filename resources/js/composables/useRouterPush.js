import { useRouter } from "vue-router";

export default function useRouterPush(route){
    const router = useRouter()
    router.push(route)
}