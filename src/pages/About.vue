<template>
  <main id="page-root">
    <div id="cookie-banner-host"></div>
    <div class="_3i-L-zN-">
      <div class="_15t9JO1y _1YibmBYc _1_bvS4sL about__hero _3DOEOvRI">
        <div
          style="
            background-image: url(https://media.output.com/app/uploads/2016/10/blog-chairs-header.png?auto=format%2Ccompress&fm=png&lossless=1);
          "
          class="s8o5FemQ"
        ></div>
        <section class="_2oph4z0W _1YibmBYc _3LOPUP7d _2_32njdU">
          <h1 class="PL1Qujtw text-weight-bold" data-testid="hero-title">
            About Rabitz Studios
          </h1>
          <h2 class="yHncNZOu" data-testid="hero-subtitle">
            Showcasing African creativity to the world through cultural
            innovations and original content.
          </h2>
        </section>
      </div>
    </div>

    <div class="row web items-center container q-pb-xl q-my-md">
      <div class="col-md-6 col-sm-12 col-xs-12 q-my-md">
        <h3 class="text-bold h3__text text-h3 text-primary">About Us</h3>

        <p class="q-my-md">
          Rabitz Studios Limited (RC: 1890867) is a world-class, well-built
          music and visual art studio, run by well-established African based
          producers and directors. It is situated in the beautiful and vibrant
          town of Barnawa, Kaduna city of Northern Nigeria. Established in 2013
          with the Nigerian Corporate Affairs Commission (CAC) under the Company
          and Allied Matters Act, the Entertainment outfit has positioned itself
          to carefully research and curate African content in the area of music,
          films, animations, virtual reality, arts and design. We believe that
          we have created a blend of African innovation and culture, so much
          that it combines a profusion of the Creative and Technology industries
          in its purest form. In the last 3 years, we have only focused on
          Africa and in the next 7, the world will never see Africa as the same
          again. Nothing at Rabitz Studios has been taken for granted and we
          have spent years reviewing every aspect of the way a top international
          studio works, to design a unique complex that has few comparisons in
          the continent. Our clients come to us in Kaduna to create and record
          music, film projects, commercials, animations and VR projects. Many of
          the projects done here have recorded mainstream successes on several
          continents. We have created several masterclasses for several
          communities in acting, singing, arts, design, NFTs. We are currently
          in partnership with Greysoft Technologies for a lifelong Greysoft
          Transformation Program and our role there is to train and empower the
          youth of the chosen communities, orphanages, internally displaced
          persons (IDPs) with relative creative abilities from which they can
          earn a living.
        </p>
        <!-- <div class="row">
        <q-btn
          label="View More"
          style="background-color: #00eaab; width: 40%; padding: 1rem"
          icon-right="arrow_forward"
        />
        <q-img src="Vector 11.png" />
      </div> -->
      </div>

      <div class="col-md-6 q-pl-md no__pad col-sm-12 col-xs-12">
        <q-img
          src="https://cdn.mos.cms.futurecdn.net/WFDPhfecCXjdbyRi7jf3ee.jpg"
          class="img img__size"
        />
      </div>
    </div>
    <Ourstaff />

    <!-- <div class="_1YibmBYc _3LOPUP7d">
      <section
        id="leadership-grid"
        class="_1SgM6gzT _1YibmBYc _3LOPUP7d _2_32njdU"
      >
        <h2 data-testid="leadership-title" class="_2X261-vr q-mb-xl">
          Our Team
        </h2>
        <div class="eAwV5ldO">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="_2BVLUN9m"
          >
            <div class="emMXqkyy" data-testid="leader-card">
              <div class="XBg5oxNG">
                
                <img :src="leader.img" alt="" />
              </div>
              <div class="_1HqsXyxf">
                <p class="_2mY2_3ij">{{ leader.name }}</p>
                <p class="_3JwBUVMW">{{ leader.position }}</p>
                <q-btn @click="viewLeader(leader)" class="_2GOHxl4X view__btn"
                  >View bio</q-btn
                >
              </div>
            </div>
          </div>

          <div class="_2QHRwiP8">
            <div class="_1gYPNgDg">
              <img
                src="https://bs-uploads.toptal.io/blackfish-uploads/components/about_page/team_section/cta/content/icon_file/icon/778811/icon_careers-a8d6644f2e84ecf6b20ee08014b6a89f.svg"
                alt="Careers at Toptal"
                class="_1g_8QX4k"
              />
              <p class="_2OehLG7b">Careers at Toptal</p>
              <p class="_26rFfsoO">
                Join the best and brightest who are working to build the
                greatest talent company in the world.
              </p>
              <a
                href="careers.html"
                class="_33DCQ6Tb _3YJuP5gD _2G2JjfI1 _3C8qTDfI"
              >
                <span class="_3T2RAMQY">Explore your future at Toptal</span>
                <svg class="_3HFXXekl" viewBox="0 0 12 8">
                  <g stroke="currentColor" fill="none" fill-rule="evenodd">
                    <path d="M0 3.607h11.253M8 .107l3.5 3.5-3.5 3.5"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div> -->

    <!-- <q-dialog full-width v-model="fixed">
      <q-card style="height: 60%">
        <div class="delp">
          <q-card-section>
            <div class="text-h6">{{ profile.name }}</div>
            <img :src="profile.img" alt="" class="imgg" />
          </q-card-section>

          <q-separator />

          <q-card-section class="scroll">
            <div class="detr">
              <h5 class="text-weight-bold">{{ profile.name }}</h5>
              <small>{{ profile.position }}</small>
            </div>
            <p class="mk-lead">
              {{ profile.profile }}
            </p>
          </q-card-section>
        </div>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn
            class="bg-primary q-pa-sm text-white"
            flat
            label="Close"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <Footer />
  </main>
</template>

<script>
import Footer from "../components/Footer.vue";
import Ourstaff from "../components/Ourstaff.vue";

export default {
  components: {
    Footer,
    Ourstaff,
  },

  data() {
    return {
      profile: [],
      fixed: false,

      leaders: [
        {
          img: "/images/chairman.jpg",
          name: "Isah Raphael",
          position: "Chairman",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/ppj.jpeg",
          name: "Pwajok",
          position: "CEO",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/karim.jpeg",
          name: "Karim",
          position: "COO",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/bilal.jpeg",
          name: "Bilal",
          position: "Creative Director",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
        {
          img: "/images/cyn.jpeg",
          name: "Cynthia",
          position: "Media Director",
          profile:
            "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York. Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech.",
        },
      ],
    };
  },

  methods: {
    viewLeader(leader) {
      this.fixed = true;
      //   console.log("first", member);
      this.profile = leader;
      console.log(this.profile);
    },
  },
};
</script>

<style scoped>
.about__hero {
  height: 65vh;
  position: relative;
}

.about__hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #333;
  z-index: 1;
  opacity: 0.45;
}
.img {
  border-radius: 12px;
}

.delp {
  display: grid;
  gap: 1rem;
  background: #ffff;
  padding: 1rem;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}
.delp p {
  font-size: 1.1rem;
  line-height: 1.5;
}

.delp img {
  width: 100%;
  /* height: 100%; */
  height: 300px;
  object-fit: contain;
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 1.5em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 2rem;
}
.grid-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background-color: #fff;
  color: #2f3238;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  width: 100%;
}

.grid-card p,
.mk-lead {
  text-align: left;
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  /* padding-top: 14px; */
}

.imgg {
  width: 100%;
}

.top-img,
.delp img {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  background-color: #fff;
  position: relative;
}
@media (max-width: 700px) {
  .delp {
    grid-template-columns: 1fr;
  }
  .delp img {
    height: 200px;
  }
}
@media (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .no__pad {
    padding: 0 !important;
  }
}
</style>
