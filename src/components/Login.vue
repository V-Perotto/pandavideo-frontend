// Login.vue
<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    name: 'LoginComponent',
    methods: {
        async handleLogin() {
            try {
                await axios.post('https://api.pandavideo.com/login', {
                    email: this.email,
                    password: this.password
                });
                this.$router.push('/');
            } catch (err) {
                this.error = 'Login failed. Please try again.';
            }
        }
    }
}
</script>
