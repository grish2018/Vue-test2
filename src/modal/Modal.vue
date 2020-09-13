<template>
  <div class="modal__wrapper">
    <div class="modal__content">
      <div class="modal__img">
        <div class="img">
          <img :src="getCurrentImage.url" />
        </div>
        <div class="modal__comments" ref="commentsContainer">
          <ComentsItem
            v-for="(item,index) in getCurrentImage.comments"
            :key="index"
            :text="item.body"
            :date="item.date"
            :author="item.author"
          />
        </div>
      </div>
      <div class="modal__form">
        <form @submit.prevent="addComments">
          <input v-model="newAuthor" type="text" placeholder="Ваше имя" />
          <textarea
            @keydown.enter.exact.prevent
            @keyup.enter.exact="addComments"
            v-model="newComment"
            placeholder="Ваш комментарий"
          />
          <input type="submit" value="Оставить комментарий" />
        </form>
      </div>
      <div class="modal__close">
        <i class="material-icons" @click="modalClose">close</i>
      </div>
    </div>
  </div>
</template>

<script>
import ComentsItem from "../components/ComentsItem.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
export default {
  name: "Modal",
  components: { ComentsItem },
  data() {
    return {
      newComment: "",
      newAuthor: "",
    };
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    ...mapActions(["addComment"]),
    modalClose() {
      this.$emit("modalClose");
      this.$router.push({ path: "/" });
    },
    addComments() {
      if (this.newComment.trim() && this.newAuthor.trim()) {
        this.addComment({
          id: this.getCurrentImage.id,
          imageId: this.getCurrentImage.id,
          body: this.newComment,
          date: moment().format("DD.MM.YYYY"),
          author: this.newAuthor,
        });
        this.newComment = "";
        this.newAuthor = "";
      } else {
        return false;
      }
    },
    scrollToEnd: function () {
      const content = this.$refs.commentsContainer;
      content.scrollTop = content.scrollHeight;
    },
  },
  computed: {
    ...mapGetters(["getCurrentImage"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.modal__wrapper {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
  box-sizing: border-box;
}
.modal__content {
  display: flex;
  width: 54%;
  height: 75%;
  background: #ffffff;
  box-sizing: border-box;
  flex-direction: column;
  padding: 1%;
  flex-wrap: wrap;
}

.modal__img {
  display: flex;
  width: 100%;
  height: 55%;
}
.img {
  width: 60%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
}
.modal__form {
  display: flex;
  flex-direction: column;
  height: 45%;
  width: 60%;
}
.modal__form form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
textarea {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px;
  height: 16%;
  resize: none;
  overflow: auto;
}
.modal__form input {
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 3px;
  height: 16%;
}
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background: #666;
}
.modal__form input[type="submit"] {
  background: #4997d0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
}
textarea::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: #cccccc;
}
.modal__form input[type="text"]::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #cccccc;
}

.modal__comments {
  display: flex;
  flex-direction: column;
  width: 32%;
  overflow-y: auto;
  padding-right: 3%;
}
.modal__close {
  position: relative;
  right: 4%;
}
.modal__close i:hover {
  color: #999999;
  cursor: pointer;
  font-size: 26px;
}
@media (max-width: 600px) {
  .modal__content {
    display: flex;
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0;
  }
  .modal__img {
    display: flex;
    width: 100%;
    height: 70%;
    flex-direction: column;
  }
  .img {
    width: 100%;
    height: 60%;
  }
  .modal__comments {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    height: 40%;
    overflow-y: auto;
  }
  .modal__form {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 100%;
    align-items: center;
  }
  .modal__form form {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .modal__close {
    position: absolute;
    right: 0px;
    margin: 2%;
  }
}
</style>