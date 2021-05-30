<template>
  <div>
      <header class="header">
      <nav>
        <ul>
          <li>
            <a href="">Seach</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
       <!-- Start Search Bar  -->
      <div class="form-group has-search">
        <input type="text" class="form-control" placeholder="Search" v-model="keyword"   />
      </div>
      <!-- End Search Bar -->
      <!-- Start Articles  -->
      <div class="card">
        <div v-for="article in filterArticles" :key="article" style="width: 15rem">
          <img class="card-img-top" :src="article.image" :alt="article.title" width="300px" />
          
          <div class="card-body">
            <div class="info">
              <span> <i class="fas fa-calendar-week"></i> {{ article.date }}</span>
              <span> <i class="fas fa-user"></i>  {{ article.author }}</span>
            </div>
            <h6 class="card-title">{{ article.title }}</h6>
            
            <p class="card-text">{{ article.body }}</p>
            <a :href="article.url" target="_blanc" class="btn btn-primary"
              >See more</a
            >
          </div>
        </div>
      </div>
      <!-- End Articles -->
  </div>
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
.header {
  background-color: #47d6a6;
  color: white;
}
.header nav ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 10px;
}
.header nav ul a {
  text-decoration: none;
  color: white;
  font-size: 15px;
}
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 200px;
  border: none;
}
.card > div {
  flex-basis: 280px;

  margin-bottom: 20px;
  background-color: wheat;
  margin-left: 10px;
  border: 1px solid #EEE;
  box-shadow: 2px 2px 2px  #EEE;
}
.card  .card-body .info {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px;
}
.card  .card-body h6 {
  font-size: 15px;
  font-weight: bold;
}
.card  .card-body p {
  font-size: 12px;
}
.card  .card-body a {
    background-color: #47d6a6;
    border: none;
    font-size: 15px;
}
</style>