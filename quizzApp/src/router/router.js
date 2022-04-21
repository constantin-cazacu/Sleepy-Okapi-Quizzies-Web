import { createWebHistory, createRouter } from "vue-router";
import Register from "../components/Register.vue";
import QuizWindow from "../components/QuizWindow.vue";
import Home from "../components/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/quizzes",
                name: "QuizWindow",
                component: QuizWindow,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
