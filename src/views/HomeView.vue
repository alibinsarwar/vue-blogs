
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="page-content">
          <div class="main-banner">
            <div class="row">
              <div class="col-md-7">
                <div class="header-text">
                  <h6>Welcome To TecHub</h6>
                  <h4><em>Browse</em> Tips & News about web technologies</h4>
                  <div class="main-button">
                    <a href="browse.html">Browse Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="most-popular">
            <div class="row">
              <div class="col-md-12">
                <div class="heading-section">
                  <h4><em>Most Popular</em> Right Now</h4>
                </div>
                <div class="row">
                  <div class="col-md-4" v-for="(blogs , index) in this.blogs" :key="index">
                    <div class="item">
                      <img v-bind:src="blogs.image" alt="">
                      <h4>{{ blogs.title }}</h4>
                      <ul>
                        <li><i class="fa fa-star"></i> Muhammad Ali</li>
                        <li><i class="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="main-button">
                      <RouterLink to="/all-blogs">Discover Popular</RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gaming-library">
            <div class="col-md-12">
              <div class="heading-section">
                <h4><em>Your Gaming</em> Library</h4>
              </div>
              <div class="item">
                <ul>
                  <li><img src="../assets/images/game-01.jpg" alt="" class="templatemo-item"></li>
                  <li><h4>Dota 2</h4><span>Sandbox</span></li>
                  <li><h4>Date Added</h4><span>24/08/2036</span></li>
                  <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                  <li><h4>Currently</h4><span>Downloaded</span></li>
                  <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                </ul>
              </div>
              <div class="item">
                <ul>
                  <li><img src="../assets/images/game-02.jpg" alt="" class="templatemo-item"></li>
                  <li><h4>Fortnite</h4><span>Sandbox</span></li>
                  <li><h4>Date Added</h4><span>22/06/2036</span></li>
                  <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                  <li><h4>Currently</h4><span>Downloaded</span></li>
                  <li><div class="main-border-button"><a href="#">Donwload</a></div></li>
                </ul>
              </div>
              <div class="item last-item">
                <ul>
                  <li><img src="../assets/images/game-03.jpg" alt="" class="templatemo-item"></li>
                  <li><h4>CS-GO</h4><span>Sandbox</span></li>
                  <li><h4>Date Added</h4><span>21/04/2036</span></li>
                  <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                  <li><h4>Currently</h4><span>Downloaded</span></li>
                  <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="main-button">
                <a href="profile.html">View Your Library</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
export default{
  name: 'create',
  data(){
    return{
      blogs:[]
    }
  },
  mounted(){
    this.getUser();
  },
  methods:{
    getUser(){
      axios.get('https://alibinsarwar.github.io/blog-api/db.json').then(res => {
        
        this.blogs = res.data.data.slice(0 , 8 );
      })
    }
  }
}
</script>