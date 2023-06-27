<template>
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="index.html" class="logo">
                        <img src="../assets/images/logo.png" alt="">
                    </a>
                    <ul class="nav">
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/all-blogs">Browse</RouterLink></li>

                        <li><a href="profile.html">Author <img src="../assets/images/profile.png" alt=""></a></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
</template>