<template>
  <div class="news">
    <div class="news__header container">
      <h1>Новости</h1>
    </div>
    <ul class="news__list list container">
      <li class="list__card card" v-for="item in news" :key="item.id">
        <img class="card__img" v-if="item.image" :src="item.image" />
        <div class="card__text">
          <div>
            <div class="card__date date">
              <p class="date__day">{{ formatDate(item.date, "DD") }}</p>
              <div>
                <p class="date__month">{{ formatDate(item.date, "MMMM") }}</p>
                <p class="date__year">{{ formatDate(item.date, "YYYY") }}</p>
              </div>
            </div>
            <h2 class="card__name">{{ item.name }}</h2>
            <p class="card__preview">{{ item.previewText }}</p>
          </div>
          <p class="card__type">{{ item.type.value }}</p>
        </div>
      </li>
    </ul>

    <button class="news__btn" v-if="canLoadMore" @click="loadMore">
      Загрузить ещё
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  props: ["news", "canLoadMore"],

  setup(props, context) {
    const formatDate = (timestamp, format) => {
      return moment.unix(timestamp).format(format);
    };

    const loadMore = () => {
      context.emit("loadMore");
    };

    return {
      loadMore,
      formatDate,
    };
  },
});
</script>

<style scoped>
.news {
  padding-bottom: 30px;
}

.news__header {
  background-image: url("/src/assets/img/hero-background.jpeg");
  background-repeat: no-repeat;
  height: 320px;
  background-size: cover;
  text-align: left;
  padding-top: 220px;
}

.news__header h1 {
  color: #17171a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.4px;
}

.news__list {
  list-style: none;
  padding-top: 30px;
}
.card {
  box-shadow: inset 0px 0px 0px 1px rgba(15, 98, 254, 0.5);
  border-radius: 20px;
  text-align: left;
  min-height: 554px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 20px;
}

.card__type {
  font-size: 14px;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #f0f6fe;
  border-radius: 15px;
  width: fit-content;
}

.card__text {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card__date {
  color: #a1a7b5;
  display: flex;
}

.date__day {
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
  padding-right: 4px;
}

.date__month,
.date__year {
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16.5px;
  letter-spacing: -0.15px;
  margin: 0;
}

.card__name {
  color: #0f62fe;
  font-size: 26px;
  line-height: 28px;
  font-style: normal;
  font-weight: 400;
}

.card__preview {
  font-size: 20px;
  line-height: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.2px;
}

.news__btn {
  border: 1px solid #0f62fe;
  border-radius: 8px;
  color: #0f62fe;
  background-color: white;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.news__btn:hover {
  background-color: #f0f6fe;
}

@media screen and (min-width: 768px) {
  .news__list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 40px;
  }

  .card {
    max-width: 500px;
    margin-bottom: 0;
  }

  .news {
    padding-bottom: 60px;
  }

  .card__text {
    padding: 32px;
  }
}
</style>
