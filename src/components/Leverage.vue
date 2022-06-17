<template>
  <div class="hold">
    <div class="holder container">
      <h2>Leveraging World Class Talent</h2>
      <div class="lead">
        We are the largest, globally-distributed network of top business,
        design, and technology talent, ready to tackle your most important
        initiatives.
      </div>

      <div class="holdie">
        <div v-for="list in listData" :key="list.id" class="leverages">
          <img :src="list.img" alt="" />
          <h3>{{ list.name }}</h3>
          <p>{{ list.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: null,
      listData: [
        {
          id: 1,
          name: "Developers",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/959b04628e5b1b70ce1c92010c6645b7.svg",
        },
        {
          id: 2,
          name: "Designers",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/390c2487248c7937a04157dae75d940e.svg",
        },
        {
          id: 3,
          name: "Financial Experts",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/fbfd6b88f79c80c3c6d327a303fb5b3b.svg",
        },
        {
          id: 4,
          name: "Project Managers",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/a203af98a02649b95bf836c8a87e9650.svg",
        },
        {
          id: 5,
          name: "Product Managers",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/664160f6cb1639d3771690947fcd6aeb.svg",
        },
        {
          id: 6,
          name: "Rabbitz ",
          desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",

          img: "https://frontier-assets.toptal.com/b2129c82ee5eacf4983ffcec4958ca57.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hold {
  color: #000;
}
h2 {
  font-size: 45px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 36px;
  text-align: center;
}
.lead {
  font-weight: 400;
  line-height: 24px;
  max-width: 555px;
  padding-bottom: 43px;
  text-align: center !important;
  margin: 0 auto;
}

.holdie {
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  /* max-width: 1200px; */
  overflow: hidden;
}

.leverages {
  align-items: stretch;
  background: #ebeced;
  border-left: 1px solid #d8d9dc;
  border-top: 1px solid #d8d9dc;
  color: #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: -1px 0 0 -1px;
  padding: 40px;
  text-decoration: none;
}

.leverages img {
  height: 64px;
  width: 64px;
}

.leverages h3 {
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
}

.leverages p {
  font-weight: 400;
  line-height: 24px;
  margin: 16px 0;
  text-align: left;
}

/* <div class="_3-6TRn-e _1YibmBYc _3LOPUP7d">
          <div class="_1YibmBYc _11ZqUWmz _2_32njdU">
            <div class="_1YibmBYc _11ZqUWmz">
              <div
                class="xK1Y6wFp nSXNjloy _2hTqIJvN bMWr3Lne VRzpBOaS"
                role="list"
              >
                <div
                  class="_vWh44cV RqckegCL _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                >
                  <div class="_64wRZ6xh">
                    <h2
                      data-testid="clients-grid-title"
                      class="_1r8wFQ13 _1jHz3wcf"
                    >
                      Events we sponsor
                    </h2>
                  </div>
                </div>
                <div
                  v-for="live in rabitzLive"
                  :key="live.id"
                  class="RqckegCL _26ebzZtt _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                >
                  <div class="_2vQjp_O2 _1doXJJpm _2aYXDjr3 _1fycIOYl">
                    <div class="_3-8TMpeS">
                      <!-- <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/563538/preview_square-c3ccdd9d53cbfc7af8f5e7eb19b5b395.jpg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt=""
                        class="lazyload is-effect-opacity"
                      /> -->
                      <img :src="live.img" alt="" />
                    </div>
                    <div class="_1uIAd9Ad">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/563541/author_logo_white-34ac426bf45a9379a080afd7c37d8377.svg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt="Bridgestone"
                        class="lazyload jeqnJEqF"
                      />
                    </div>
                    <p class="Qq-iPMxM">
                      {{ live.name }}
                    </p>
                    <div class="_1liAAfjS">
                      <p class="_2O26Zuqj">{{ live.small }}</p>
                      <p class="ivvUQSqp">{{ live.smallerText }}</p>
                    </div>
                    <button
                      type="button"
                      class="video-cta GD313NS8"
                      aria-label="Watch the video - Building a cross-platform app to be used worldwide"
                      aria-haspopup="dialog"
                      @click="barrr(live)"
                    >
                      Watch the video
                    </button>

                    <q-dialog v-model="bar" persistent>
                      <q-card class="video">
                        <q-bar class="bg-primary text-white">
                          <q-icon name="network_wifi" />
                          <q-icon name="network_cell" />
                          <q-icon name="battery_full" />
                          <div>{{ todaysDate }}</div>

                          <q-space />

                          <q-btn
                            @click.prevent="bar = false"
                            dense
                            flat
                            icon="close"
                            v-close-popup
                          >
                            <q-tooltip>Close</q-tooltip>
                          </q-btn>
                        </q-bar>

                        <Video :video="rabitzIds" />
                      </q-card>
                    </q-dialog>
                  </div>
                </div>
                <!-- <div
                  class="RqckegCL _26ebzZtt _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                >
                  <div class="_2vQjp_O2 _1doXJJpm _2aYXDjr3 _1fycIOYl">
                    <div class="_3-8TMpeS">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57750/preview_square-e74a18b1d419d628a1e337ab4957fe5a.jpg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt=""
                        class="lazyload is-effect-opacity"
                      />
                    </div>
                    <div class="_1uIAd9Ad">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57753/author_logo_white-d58fda74f00eb7039a73491a2986706d.svg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt="Cleveland Cavaliers"
                        class="lazyload jeqnJEqF"
                      />
                    </div>
                    <p class="Qq-iPMxM">Creating an app for the game</p>
                    <div class="_1liAAfjS">
                      <p class="_2O26Zuqj">Conor Kenney</p>
                      <p class="ivvUQSqp">Director of Professional Services</p>
                    </div>
                    <button
                      type="button"
                      class="video-cta GD313NS8"
                      aria-label="Watch the video - Creating an app for the game"
                      aria-haspopup="dialog"
                    >
                      Watch the video
                    </button>
                  </div>
                </div>
                <div
                  class="RqckegCL _26ebzZtt _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                >
                  <div class="_2vQjp_O2 _1doXJJpm _2aYXDjr3 _1fycIOYl">
                    <div class="_3-8TMpeS">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/171153/preview_square-0fb6e639b5c2ef721887315682669a9d.jpg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt=""
                        class="lazyload is-effect-opacity"
                      />
                    </div>
                    <div class="_1uIAd9Ad">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/171152/author_logo_white-c5ff5334091bc961f444f5459dac8c17.svg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt="University of Southern California"
                        class="lazyload jeqnJEqF"
                      />
                    </div>
                    <p class="Qq-iPMxM">
                      Developing a virtual assistant to improve mental wellness
                    </p>
                    <button
                      type="button"
                      class="video-cta GD313NS8"
                      aria-label="Watch the video - Developing a virtual assistant to improve mental wellness"
                      aria-haspopup="dialog"
                    >
                      Watch the video
                    </button>
                  </div>
                </div> -->
                <!-- <div
                  class="RqckegCL _26ebzZtt _9Ikuko4z _3jgwFSUz"
                  role="listitem"
                >
                  <div class="_2vQjp_O2 _1doXJJpm _2aYXDjr3 _1fycIOYl">
                    <div class="_3-8TMpeS">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57760/preview_square-024b4a91bae299e7bfc2d06e0ea32702.jpg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt=""
                        class="lazyload is-effect-opacity"
                      />
                    </div>
                    <div class="_1uIAd9Ad">
                      <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57763/author_logo_white-d2905e74b00adeea8a81cfdf6ecd95db.svg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt="CSR"
                        class="lazyload jeqnJEqF"
                      />
                    </div>
                    <p class="Qq-iPMxM">Leading a digital transformation</p>
                    <div class="_1liAAfjS">
                      <p class="_2O26Zuqj">Elmar Platzer</p>
                      <p class="ivvUQSqp">Digital Transformation Leader</p>
                    </div>
                    <button
                      type="button"
                      class="video-cta GD313NS8"
                      aria-label="Watch the video - Leading a digital transformation"
                      aria-haspopup="dialog"
                    >
                      Watch the video
                    </button>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div> */

@media (max-width: 767px) {
  h2 {
    font-size: 28px;
    line-height: 35px;
  }
}
</style>
