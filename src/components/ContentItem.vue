<template>
  <div class="contentItem__wrapper" @click="showModal">
    <router-link class="conversationItem__link" :to="`/${imgId}`">
      <img :src="url" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Contetnt",
  data() {
    return {
      imgId: this.id,
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");
      this.$store.dispatch("fetchCurrentImage", this.id);
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.contentItem__wrapper {
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 3%;
}
.conversationItem__link {
  width: 100%;
  height: 100%;
}
.contentItem__wrapper img {
  width: 85%;
  height: 85%;
}
@media (max-width: 600px) {
  .contentItem__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 4%;
  }
  .contentItem__wrapper img {
    width: 100%;
    height: 100%;
  }
}
</style>