import { createRouter, createWebHistory } from "vue-router"
import GameList from "../components/GameList.vue"
import GameView from "../views/GameView.vue"

const routes = [
  { path: "/", name: "home", component: GameList },
  { path: "/game/:slug", name: "game", component: GameView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
