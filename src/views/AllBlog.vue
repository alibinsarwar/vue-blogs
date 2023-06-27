<template>
   <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <div class="row">
            <div class="col-lg-8">
              <div class="featured-games header-text">
                <div class="heading-section">
                  <h4><em>Featured</em> Games</h4>
                </div>
                <div class="row">
                  <div class="col-md-4">  
                    <div class="item">
                      <div class="thumb">
                        <img src="/src/assets/images/featured-01.jpg" alt="">
                        <div class="hover-effect">
                          <h6>2.4K Streaming</h6>
                        </div>
                      </div>
                      <h4>CS-GO<br><span>249K Downloads</span></h4>
                      <ul>
                        <li><i class="fa fa-star"></i> 4.8</li>
                        <li><i class="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="item">
                      <div class="thumb">
                        <img src="/src/assets/images/featured-02.jpg" alt="">
                        <div class="hover-effect">
                          <h6>2.4K Streaming</h6>
                        </div>
                      </div>
                      <h4>Gamezer<br><span>249K Downloads</span></h4>
                      <ul>
                        <li><i class="fa fa-star"></i> 4.8</li>
                        <li><i class="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="item">
                      <div class="thumb">
                        <img src="/src/assets/images/featured-03.jpg" alt="">
                        <div class="hover-effect">
                          <h6>2.4K Streaming</h6>
                        </div>
                      </div>
                      <h4>Island Rusty<br><span>249K Downloads</span></h4>
                      <ul>
                        <li><i class="fa fa-star"></i> 4.8</li>
                        <li><i class="fa fa-download"></i> 2.3M</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="top-downloaded">
                <div class="heading-section">
                  <h4><em>Top</em> Downloaded</h4>
                </div>
                <ul>
                  <li>
                    <img src="/src/assets/images/game-01.jpg" alt="" class="templatemo-item">
                    <h4>Fortnite</h4>
                    <h6>Sandbox</h6>
                    <span><i class="fa fa-star" style="color: yellow;"></i> 4.9</span>
                    <span><i class="fa fa-download" style="color: #ec6090;"></i> 2.2M</span>
                    <div class="download">
                      <a href="#"><i class="fa fa-download"></i></a>
                    </div>
                  </li>
                  <li>
                    <img src="/src/assets/images/game-02.jpg" alt="" class="templatemo-item">
                    <h4>CS-GO</h4>
                    <h6>Legendary</h6>
                    <span><i class="fa fa-star" style="color: yellow;"></i> 4.9</span>
                    <span><i class="fa fa-download" style="color: #ec6090;"></i> 2.2M</span>
                    <div class="download">
                      <a href="#"><i class="fa fa-download"></i></a>
                    </div>
                  </li>
                  <li>
                    <img src="/src/assets/images/game-03.jpg" alt="" class="templatemo-item">
                    <h4>PugG</h4>
                    <h6>Battle Royale</h6>
                    <span><i class="fa fa-star" style="color: yellow;"></i> 4.9</span>
                    <span><i class="fa fa-download" style="color: #ec6090;"></i> 2.2M</span>
                    <div class="download">
                      <a href="#"><i class="fa fa-download"></i></a>
                    </div>
                  </li>
                </ul>
                <div class="text-button">
                  <a href="profile.html">View All Games</a>
                </div>
              </div>
            </div>
          </div>
          <div class="start-stream">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>How To Start Your</em> Live Stream</h4>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="item">
                    <div class="icon">
                      <img src="/src/assets/images/service-01.jpg" alt="" style="max-width: 60px; border-radius: 50%;">
                    </div>
                    <h4>Go To Your Profile</h4>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="item">
                    <div class="icon">
                      <img src="/src/assets/images/service-02.jpg" alt="" style="max-width: 60px; border-radius: 50%;">
                    </div>
                    <h4>Live Stream Button</h4>
                    <p>If you wish to support us, you can make a <a href="https://paypal.me/templatemo" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="item">
                    <div class="icon">
                      <img src="/src/assets/images/service-03.jpg" alt="" style="max-width: 60px; border-radius: 50%;">
                    </div>
                    <h4>You Are Live</h4>
                    <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="main-button">
                    <a href="profile.html">Go To Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="live-stream">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>Most Popular</em> Live Stream</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4"  v-for="(blogs , index) in this.blogs" :key="index">
                <RouterLink :to="{ path: '/blog/'+blogs.url}">
                  <div class="item">
                    <div class="thumb">
                      <img v-bind:src="blogs.image" alt="">
                    </div>
                    <div class="down-content">
                      <div class="avatar">
                        <img src="../assets/images/profile.png" alt="" style="max-width: 46px; border-radius: 50%; float: left;">
                      </div>
                      <span>Muhammad Ali</span>
                      <h4>{{ blogs.title }}</h4>
                    </div> 
                  </div>
                </RouterLink>
              </div>
              <div class="col-lg-12">
                <div class="main-button">
                  <a href="streams.html">Discover All Streams</a>
                </div>
              </div>
            </div>
          </div>
          <!-- ***** Live Stream End ***** -->

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
    this.getBlogs();
  },
  methods:{
    getBlogs(){
      axios.get('https://alibinsarwar.github.io/blog-api/db.json').then(res => {
        
        this.blogs = res.data.data.slice(0 , 8 );
      })
    },
    
  }
}
</script>