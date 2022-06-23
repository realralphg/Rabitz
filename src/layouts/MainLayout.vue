<template>
  <q-layout view="lHh lpR fFf">
    <q-header
      elevated
      class="bg-white q-py-sm header text-dark flex"
      height-hint="98"
    >
      <q-toolbar class="q-pa-sm row justify-between">
        <div class="row logo_div items-center text-weight-bold text-primary">
          <img class="logo" src="/images/rabitzstudiosicon.svg" alt="" />
          <p>Rabitz Studios</p>
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
  width: 60px;
  height: 47px;
  object-fit: contain;
}

.page-col {
  display: flex;
  flex-direction: column;
}
p {
  margin-bottom: 0;
}

.logo_div p {
  font-size: 1.5rem;
  margin-top: 0.35rem;
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
    margin-top: 0.5rem;
  }

  .pages {
    display: none;
  }
}
@media (max-width: 320px) {
  .logo_div p {
    font-size: 1rem;
    margin-top: 0.35rem;
  }
}
</style>
