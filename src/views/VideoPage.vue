<template>
    <div v-if="video">
        <h1>{{ video.title }}</h1>
        <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        <p>Published on: {{ video.publishedDate }}</p>
        <p>Views: {{ video.views }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            video: null,
        };
    },
    name: 'VideoPageComponent',
    async created() {
        const videoId = this.$route.params.id;
        const response = await axios.get(`https://api.pandavideo.com/videos/${videoId}`);
        this.video = response.data;
    }
}
</script>
