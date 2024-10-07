<template>
    <div>
        <h1>Videos</h1>
        <input type="text" v-model="search" placeholder="Search videos..." />
        <VideoList :videos="filteredVideos" />
    </div>
</template>

<script>
import VideoList from '../components/VideoList.vue';
import axios from 'axios';

export default {
    name: 'HomeComponent',
    components: { VideoList },
    data() {
        return {
            videos: [],
            search: ''
        };
    },
    computed: {
        filteredVideos() {
            return this.videos.filter(video =>
                video.title.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    async created() {
        const response = await axios.get('https://api.pandavideo.com/videos');
        this.videos = response.data;
    }
}
</script>
