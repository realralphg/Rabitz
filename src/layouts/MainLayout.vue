<template>
  <q-layout view="lHh lpR fFf">
    <q-header class="bg-white header text-dark flex" height-hint="98">
      <q-toolbar class="q-pa-sm row justify-between container">
        <div>
          <img class="logo" src="/images/logo2.png" alt="" />
        </div>

        <q-tabs
          class="pages text-weight-bold"
          active-color="primary"
          indicator-color="white"
          align="left"
          dense
          active-class="text-weight-bold"
        >
          <q-route-tab exact to="/" label="Home " />
          <q-route-tab exact to="/about" label="About Us" />
          <q-route-tab exact to="/services" label="Services" />
          <q-route-tab exact to="/events" label="Events" />

          <!-- <q-route-tab exact to="/industries" label="Industries" /> -->

          <q-route-tab exact to="/blog" label="Blog" />
        </q-tabs>

        <q-btn
          class="menu"
          dense
          flat
          color="dark"
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-tabs class="column" active-color="primary">
        <div
          style="width: 100%"
          class="column q-py-lg items-center justify-center"
        >
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/"
            label="home"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/about"
            label="about"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/services"
            label="services"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/events"
            label="events"
          />

          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/industries"
            label="industries"
          /> -->

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/blog"
            label="blog"
          />
        </div>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer class="bg-dark absolute-bottom text-white">
      <div class="q-pa-md q-mt-lg">
        <div class="row items-center">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <q-toolbar-title>
              <img class="logo" src="/images/Logo2.svg" alt="" />
            </q-toolbar-title>
            <p>Increasing access to careers in tech.</p>
            <div class="socials">
              <a href="https://twitter.com/ReskillAmerica" target="_blank">
                <i class="ri-twitter-fill text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/reskillamericans/"
                target="_blank"
              >
                <i class="ri-instagram-fill text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/reskill-americans"
                target="_blank"
              >
                <i class="ri-linkedin-fill text-white"></i>
              </a>
              <a
                href="https://www.youtube.com/c/ReskillAmericans"
                target="_blank"
              >
                <i class="ri-youtube-fill text-white"></i>
              </a>
              <a href="https://github.com/reskillamericans" target="_blank">
                <i class="ri-github-fill text-white"></i>
              </a>
              <a
                href="https://www.facebook.com/reskillamericans"
                target="_blank"
              >
                <i class="ri-facebook-fill text-white"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 q-my-md col-xs-12">
            <h3 class="title text-secondary q-mb-md">Links</h3>
            <ul>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/learn-more/"
                  >Learn More</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/partner/"
                  >Partner</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/donate/"
                  >Donate</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/about/"
                  >About Us</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 q-my-md col-xs-12">
            <h3 class="title text-secondary q-mb-md">Links</h3>
            <ul>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="info@reskillamericans.org"
                  >Contact Us</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/privacy"
                  >Privacy Policy</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/news/"
                  >News and Blog</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/faq/"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<style scoped>
.menu {
  display: none;
}
.logo {
  width: 100px;
  height: 60px;
  object-fit: contain;
}

.page-col {
  display: flex;
  flex-direction: column;
}

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
}

.socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.socials i {
  font-size: 3rem;
}
@media (max-width: 850px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
  /* .logo {
    width: 160px;
  } */
}
</style>
