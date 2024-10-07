import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import VideoPage from '../views/VideoPage.vue';
import VideoDetail from '@/components/VideoDetail.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

const routes = [
    { path: '/', name: 'HomeComponent', component: Home },
    { path: '/video/:id', name: 'VideoPageComponent', component: VideoPage },
    { path: '/login', name: 'LoginComponent', component: Login },
    { path: '/signup', name: 'SignupComponent', component: Signup },
    { path: '/video/:id/detail', name: 'VideoDetailsComponent', component: VideoDetail },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Supondo que use um token para autenticação
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
    else next();
});
  

export default router;
