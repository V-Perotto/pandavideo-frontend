<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="handleSignup">
            <input type="text" v-model="username" placeholder="Username" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <p v-if="error">{{ error }}</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            error: ''
        };
    },
    name: 'SignupComponent',
    methods: {
        async handleSignup() {
            try {
                await axios.post('https://api.pandavideo.com/signup', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
                this.$router.push('/login');
            } catch (err) {
                this.error = 'Signup failed. Please try again.';
            }
        }
    }
}
</script>
