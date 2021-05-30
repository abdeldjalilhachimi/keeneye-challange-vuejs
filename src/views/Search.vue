<template>
  <div>
    <div class="contianer">
       <!-- Start Search Bar  -->
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" v-model="keyword"   />
      </div>
      <!-- End Search Bar -->
    </div>
      <!-- Start Articles  -->
      <div class="card">
        <div v-for="article in filterArticles" :key="article" style="width: 15rem">
          <img class="card-img-top" :src="article.image" :alt="article.title" />
          <span> {{ article.date }}</span>
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <strong> Author: {{ article.author }}</strong>
            <p class="card-text">{{ article.body }}</p>
            <a :href="article.url" target="_blanc" class="btn btn-primary"
              >See more</a
            >
          </div>
        </div>
      </div>
      <!-- End Articles -->
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data: () => ({
    keyword: "",
    articles: []
  }),
    computed : {
        filterArticles : function () {
            return this.articles.filter((article)=> {
              return article.title.toLowerCase().match(this.keyword)
            })
        }
    }, 
  methods: {
 
  },
  created() {
     axios
        .get("https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/covid-news.json")
        .then(res => {
          // eslint-disable-next-line no-console
         console.log(res.data);
          this.articles = res.data;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });

  },

};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card > div {
  flex-basis: 350px;
  flex-grow: 1;
  margin-bottom: 20px;
  background-color: wheat;
  margin-left: 10px;
  min-height: 300px;
}
</style>