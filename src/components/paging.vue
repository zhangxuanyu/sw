<template>
  <div id="vue-dingyi-paging" style="width:500px;">
  <ul>
    <!-- <li class="first">
      <a class="pageLink" href="#" @click="$store.commit('runpages',$store.state.page-1)">
        Previous</a>
    </li> -->
    <li v-for="n in $store.state.allpage" v-if="n == 1||n == $store.state.allpage || n == $store.state.page || n == ($store.state.page - 1 || $store.state.page + 3)|| n == ($store.state.page - 2 || $store.state.page + 4)|| n ==( $store.state.page + 1 || $store.state.page - 3 )|| n == ($store.state.page + 2||$store.state.page - 4 )">
      <a class="pageLink" href="#" v-text="n" @click="$store.commit('runpages',n)" :class="{ curPage: n == $store.state.page }"></a>
    </li>
    <!-- <li class="last"><a class="pageLink" href="#" @click="$store.commit('runpages',$store.state.page+1)">Next</a></li> -->
  </ul>
</div>
</template>

<script>
export default {
  data(){
      return {
            totalNum: 4, //总页数
      }
  },
  created(){
  
  },
   methods: {
    
  }
}
</script>

<style scoped>
        #vue-dingyi-paging{
            position: relative;
            width: 350px;
            left: 50%;
            font-size: 14px;
            transform: translateX(-50%);
        }
        #vue-dingyi-paging ul {
          list-style: none;
          margin-top: 31px;
          margin-bottom: 49px;
        }
        
        #vue-dingyi-paging ul li {
          margin: 0 4px;
          border: 1px solid #eee;
        }
        
        #vue-dingyi-paging ul li
        {
          display: inline-block;
          width: 36px;
          height: 34px;
          background: #fff;
          color: #9234BF; ;
          box-sizing: border-box;
          text-align: center;
          text-decoration: none;
          line-height: 34px;
        }
        .pageLink {
          display: block;
          width: 35px;
          height: 32px;
          color: #9234BF;;
          box-sizing: border-box;
          text-align: center;
          text-decoration: none;
          line-height: 32px;
          margin-left: -1px;
          font-size: 14px;
        }
        
        .pageLink:hover {
          background: #eee;
          color: #9234BF; ;
        }
        
        #vue-dingyi-paging ul li .curPage {
          background: #9234BF;;
          color: #FFFFFF;
        }
        #vue-dingyi-paging ul .first{
            width: 82px;
        }
        #vue-dingyi-paging ul .first a{
            width: 82px;
        }
        #vue-dingyi-paging ul .last{
            width: 56px;
        }
        #vue-dingyi-paging ul .last a{
            width: 56px;
        }
</style>
