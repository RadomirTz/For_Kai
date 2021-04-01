<template>
    <div style='box-shadow: 0 0 5px 2px #00404C;font-family: Noto Sans, sans-serif; padding-left: 30px; padding:20px;height:100%;border-radius:10px;background-color:rgba(0, 42, 50, 0.95); margin-top:90px; margin-left:100px; margin-right:100px;color: #BABABA;'>
        <h1 style='font-size:25px'><a href='http://localhost:8080/#/'><button style='margin-left:10px;border-color: black; background-color: #001e24;font-size:10px' type="button" class="btn btn-primary">←</button></a>  DeathNote | Просмотр </h1>

        <div>
            <h1><a href='https://r210102.kujo-jotaro.com/death-note/1.480.b9415bf64b43e619.mp4?hash1=de04162a0dc548036e4cd065ffe357d7&hash2=f5873a56a217eb7ee1bce2da2acb0040'><button style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>1 серия</button></a><a href='https://r210102.kujo-jotaro.com/death-note/2.480.d00345a0134fe718.mp4?hash1=20608a26082256646893f8779f10b891&hash2=188928e4322474ccf7f966ea1997f9dd'><button   style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>2 серия</button></a><a href='https://r210102.kujo-jotaro.com/death-note/3.480.110d51f7d48b78f0.mp4?hash1=978216b7bdd4df536224475bb2a8bee0&hash2=9cc000d710ce7bddbd87eaddd163e3ef'><button  style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>3 серия</button></a><a href='https://r210102.kujo-jotaro.com/death-note/4.480.9fc7bda7886ae8ba.mp4?hash1=db537df0e5ff552181878b4a1831669d&hash2=028443ef3cf586efd8f71f4778190990'><button   style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>4 серия</button></a><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>5 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>6 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>7 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>7 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>8 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>9 серия</button><button  v-on:click="this.url=this.url1" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>10 серия</button></h1>
            <h1><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>11 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>12 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>13 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>14 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>15 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>16 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>17 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>17 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>18 серия</button><button  v-on:click="addWiki" style='margin-left:10px;border-color: black; background-color: #001e24;' type="button" class='btn btn-primary'>19 серия</button></h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
        url1: 'https://r56.kujo-jotaro.com/death-note/10.480.8397fda20ab88f24.mp4?hash1=6924fae39b8f95e8ddcf06f02c28a5fd&hash2=63115801513aa02cb4d8f2dbaea229b5',
        url: 'https://r270104.kujo-jotaro.com/death-note/1.480.b9415bf64b43e619.mp4?hash1=ae1ea91271edd432d4551905e9afde6e&hash2=5ba3deaabcec3a258463534a1ce987e3'
    };
  },
  
    methods: {
    }
}
</script>
