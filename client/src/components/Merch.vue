<template>
    <div>
    <div style='box-shadow: 0 0 5px 2px #00404C;font-family: Noto Sans, sans-serif; padding-left: 30px; padding:20px;height:100%;border-radius:10px;background-color:rgba(0, 42, 50, 0.95); margin-top:90px; margin-left:100px; margin-right:100px;color: #BABABA;'>
        <h1 style='font-size:25px;'><a href='http://localhost:8080/#/'><button style='margin-left:10px;border-color: black; background-color: #001e24;font-size:10px' type="button" class="btn btn-primary">←</button></a>         DeathNote | Мерч</h1>
        <p>На данной странице ты можешь купить мерч с символикой 'Death Note'</p>
        <br>
        <div style='margin-left: -50px; font-size:20px;'> 
            <div class="container">
                <div  style='' v-for="(item, index) in items" :key="index">
                    <div style='float:left;border-radius: 10px; margin-left:50px; background-color:rgba(0, 42, 50,1); width:200px; height:300px; margin-bottom: 50px'>
                        <p style='text-align: center;'><img  v-if='item.image == null' width='40%' height="40%" :src='image_if_empty'><img  v-if='item.image == ""' width='40%' height="40%" :src='image_if_empty'><img  v-else width='60%' height="60%" :src='item.image'></p>
                        <p style='text-align: center;'> <a  :href='"http://localhost:8080/#/merch/"+item.title' style='text-align: center;'>{{item.title}}</a></p>
                        <p style='text-align: center;' v-if='item.image == ""'>(нет фото)</p>
                        <p style='text-align: center;'>{{item.cost}} руб</p>
                        <p style='text-align: center;'><a :href='"http://localhost:8080/#/merch/"+item.title'><button style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class="btn btn-primary">Подробнее</button></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <nav class="navbar navbar-expand-md navbar-dark " style='margin-top: 50px; height:50px; background-color:rgba(0, 42, 50, 0.95); '>
      <div class="collapse navbar-collapse" style='font-size:15px; ' id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a  style='font-size: 15px; margin-left: 10px; font-family: "MS Sans Serif";' class="navbar-brand" href="#">@Copyright by Radomir</a>
          </li> 
          <li class="nav-item ">
            <a style='margin-left: 550px; font-family: "MS Sans Serif";' class="nav-link" href="http://localhost:8080/#/">Тех-Поддержка </a>
          </li>
          <li class="nav-item">
            <a  style='margin-left: 100px; font-family: "MS Sans Serif";' class="nav-link" href="http://localhost:8080/#/wiki">Связь с автором</a>
          </li>
          <li class="nav-item">
            <a  style='margin-left: 100px; font-family: "MS Sans Serif";' class="nav-link" href="http://localhost:8080/#/merch">Секретная информация</a>
          </li>

      </ul>
      </div>
    </nav>
    </div>
    
</template>
<script> 
import axios from 'axios'
export default {
  data() {
    return {
        ara: 'fsfsf',
      articles: [],
      items: [],
      wikis: [],
      path: 'http://localhost:8080/#/wiki',
      images: '',
      image_if_empty: 'https://i.yapx.ru/LvD9a.png',
    };
  },
    methods: {
        getAllItems() {
        const path = 'http://localhost:5000/merch';
        axios.get(path)
            .then((res) => {
            this.items = res.data.items;
            })
            .catch((error) => {
            // eslint-отключение следующей строки
            console.error(error);
            });
        },
        
    },
    created() {
        this.getAllItems();
    },
}
</script>

<style>
.container{overflow:hidden;}
.box{white-space:nowrap}
.box div{display:inline-block;}
</style>