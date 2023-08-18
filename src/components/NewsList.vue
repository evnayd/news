<template>
  <div>
    <h1>I'm news page</h1>
    <ul class="news">
      <li class="news__item item" v-for="item in news" :key="item.id">
        <img class="item__img" :src="item.image" />
        <p>{{ item.date }}</p>
        <h2>{{ item.name }}</h2>
        <p>{{ item.previewText }}</p>
        <p>{{ item.type.value }}</p>
      </li>
    </ul>

    <button v-if="canLoadMore" @click="loadMore">Load More</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["news", "canLoadMore"],

  setup(props, context) {
    const loadMore = () => {
      context.emit("loadMore");
    };

    return {
      loadMore,
    };
  },
});
</script>
