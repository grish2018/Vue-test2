<template>
  <div id="app">
    <Modal v-if="modalVisible" @modalClose="closeInfoModal"></Modal>
    <div class="app__header">
      <span>Test App</span>
    </div>
    <div class="content__wrapper">
      <div class="app__content">
        <ContentItem
          @showModal="showInfoModal"
          v-for="(img,index) in getImages "
          :key="index.toString()"
          :id="img.id"
          :url="img.url"
        />
      </div>
    </div>
    <div class="app__footer">
      <div class="upp__line"></div>
      <div class="app__date">
        <span>© 2018-2019</span>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./modal/Modal";
import ContentItem from "./components/ContentItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: { ContentItem, Modal },
  data() {
    return {
      modalVisible: false,
    };
  },
  computed: {
    ...mapGetters(["getImages"]),
  },
  methods: {
    ...mapActions(["fetchImages", "fetchCurrentImage"]),
    showInfoModal() {
      this.modalVisible = true;
    },
    closeInfoModal() {
      this.modalVisible = false;
    },
  },
  mounted() {
    this.fetchImages();
  },
  created() {
    const { id: currUrlId } = this.$route.params;
    if (currUrlId) {
      this.modalVisible = true;
      this.fetchCurrentImage(currUrlId);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
body {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.app__header {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 30px;
}
.app__header span {
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}
.content__wrapper {
  display: flex;
  width: 100%;
  height: 85%;
  justify-content: center;
  align-content: center;
}
.app__content {
  display: flex;
  height: 100%;
  width: 95%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.app__footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5%;
  align-items: center;
}
.upp__line {
  height: 1px;
  width: 95%;
  border-top: 1px solid #cccccc;
}
.app__date {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.app__date span {
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cccccc;
}

@media (max-width: 600px) {
  body {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
