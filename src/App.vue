<template>
  <AppHeader />
  <NewsList :news="news" :canLoadMore="canLoadMore" @loadMore="loadMore" />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NewsList from "./components/NewsList.vue";
import AppFooter from "./components/AppFooter.vue";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NewsList,
    AppFooter,
  },

  setup() {
    const news = ref([]);
    const canLoadMore = ref(true);

    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await fetch("https://flems.github.io/test/api/news/");
        const result = await response.json();

        if (result.nav.current !== result.nav.total) {
          canLoadMore.value = true;
        }
        news.value = result.items;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Function to fetch more data from the server

    const loadMore = async () => {
      try {
        const response = await fetch(
          "https://flems.github.io/test/api/news/2/"
        );
        const result = await response.json();
        news.value = news.value.concat(result.items);
        if (result.nav.current == result.nav.total) {
          canLoadMore.value = false;
        }
      } catch (error) {
        console.error("Error loading more news:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      news,
      canLoadMore,
      loadMore,
    };
  },
};
</script>
