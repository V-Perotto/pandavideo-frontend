import axios from 'axios';

const API_URL = 'https://api.pandavideo.com/videos/';

export default {
  async getVideoDetails(videoId) {
    try {
      const response = await axios.get(`${API_URL}${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os detalhes do vídeo:', error);
      throw error;
    }
  },
};
