import axios from "axios";


export default {
    actions: {
        async fetchImages({ commit }) {
            try {
                const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images');
                commit('updateImages', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCurrentImage({ commit }, id) {
            try {
                const response = await axios.get(`https://my-cool-projectfefef.herokuapp.com/images/${id}?_embed=comments`);
                commit('updateCurrentImage', response.data)
            } catch (error) {
                console.log(error);
            }
        },
        async addComment({ commit }, { id, ...comment }) {
            try {
                const response = await axios.post(`https://my-cool-projectfefef.herokuapp.com/images/${id}/comments`, comment)
                commit('updateCurrentImageComment', response.data)
            } catch (error) { console.log(error) };
        },
    },
    mutations: {
        updateImages(state, images) {
            state.images = images
        },
        updateCurrentImage(state, image) {
            state.currentImage = image
        },
        updateCurrentImageComment(state, comment) {
            state.currentImage.comments = [...state.currentImage.comments, comment]
        }

    },
    state: {
        images: [],
        currentImage: []

    },
    getters: {
        getImages(state) {
            return state.images
        },
        getCurrentImage(state) {
            return state.currentImage
        }

    }
}