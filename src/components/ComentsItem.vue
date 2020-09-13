<template>
  <div class="comments__wrapper">
    <p class="comments__author">{{author}}</p>
    <p class="comments__date">{{date}}</p>
    <p class="comments__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "ComentsItem",
  props: {
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.comments__wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 100%;
  margin-left: 8%;
}
.comments__date {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #999999;
  margin-bottom: 3%;
  margin-top: 1%;
}
.comments__text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: #000000;
  width: 100%;
  overflow-wrap: break-word;
  margin-top: 1%;
}
.comments__author {
  margin: 0%;
}

@media (max-width: 600px) {
  .comments__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    width: 100%;
    margin-left: 3%;
  }
}
</style>