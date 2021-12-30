<template>
  <section>
    <div class="q-pa-xl bg-negative">
      <div class="row footer-row">
        <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <img class="logo" src="images/logo2.png" alt="" />
        </div>

        <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-primary">Company</div>
          <!-- <q-separator class="bg-secondary" style="width: 50%" /> -->
          <div
            class="text-body2 link q-mt-md cursor-pointer text-dark"
            @click="$router.push('/agroinvest')"
          >
            Productions
          </div>
          <div
            class="text-body2 link q-mt-md cursor-pointer text-dark"
            @click="$router.push('/')"
          >
            Events
          </div>
          <div
            class="text-body2 link q-mt-md cursor-pointer text-dark"
            @click="$router.push('/')"
          >
            Creative Contents
          </div>
          <div
            class="text-body2 link q-mt-md cursor-pointer text-dark"
            @click="$router.push('/')"
          >
            Programs
          </div>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-primary">Social Media</div>
          <!-- <q-separator class="bg-secondary" style="width: 50%" /> -->
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-dark text-center"
              href="https://www.facebook.com/manzo.maigari"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-facebook"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-facebook"></i>
              <span class="q-ml-sm">Facebook</span></a
            >
          </div>
          <div class="q-mt-md cursor-pointer">
            <a
              class="text-dark text-center"
              href="http://twitter.com"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-twitter"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-twitter"></i>
              <span class="q-ml-sm my-font-montserrat-light">Twitter</span></a
            >
          </div>
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-dark text-center"
              href="https://www.instagram.com/maigarimanzo/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-instagram"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-instagram"></i>
              <span class="q-ml-sm my-font-montserrat-light">Instagram</span></a
            >
          </div>
          <div class="q-mt-md cursor-pointer">
            <a
              class="text-dark text-center"
              href="https://www.linkedin.com/in/manzo-maigari-a7b4b727/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-linkedin"></i>
              <span class="q-ml-sm">Linkedin</span></a
            >
          </div>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-primary">Contact Info</div>
          <!-- <q-separator class="bg-secondary" style="width: 50%" /> -->
          <div class="q-mt-md">31, Gwari Avenue, Barnawa, Kaduna, Nigeria.</div>
          <div class="q-mt-md">
            <span>Email: </span>
            <span class="ttext-secondary">hi@rabbitzstudios.com</span>
          </div>

          <section class="mainContent">
            <div class="formContainer">
              <form action="">
                <fieldset class="fieldInput">
                  <input
                    class="form-input"
                    type="email"
                    placeholder="Your e-mail"
                  />
                  <button type="submit" class="form-submit">Subscribe</button>
                </fieldset>
              </form>
            </div>
          </section>
          <!-- <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Phone: </span>
              <span class="text-primary">+234 807 777 7777</span>
            </div> -->
        </div>
      </div>
      <!-- <q-separator class="bg-grey-9 q-px-xl q-mt-xl" /> -->
    </div>
    <div class="flexx bg-primary q-px-md q-py-md">
      <div class="text-caption text-negative">
        © 2021 rabbitz studios. All rights reserved.
      </div>
      <div class="text-caption text-negative">By Greysoft© Technologies.</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.rower {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
}

.logo {
  width: 116px;
  height: 158px;
  object-fit: contain;
}

.flexx {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fieldInput {
  display: block;
  width: 100%;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  background: rgba(202, 198, 201, 0.33);
  border: none;

  /* border-radius: 35px; */
  overflow: hidden;
}

fieldset {
  padding: 0 !important;
}

.form-input {
  width: 90%;
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 9px;
  color: #6a7c92;
}

.form-input:focus {
  outline: none;
}
.form-submit {
  font-size: 12px;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 70px;
  height: 35px;
  /* border-radius: 17px; */
  border: none;
  background: #9d1e81;

  cursor: pointer;
}
</style>
