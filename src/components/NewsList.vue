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
