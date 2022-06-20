<template>
  <main id="page-root">
    <div id="cookie-banner-host"></div>

    <div class="_34Oy4nN6 _1YibmBYc _1_bvS4sL _3DOEOvRI events__hero">
      <section class="_3fwLmXc4 event__text _1YibmBYc _3LOPUP7d _2_32njdU">
        <h1 class="_1CgVsu-I" data-testid="hero-title">Events</h1>
        <div class="XAxRXh00">
          At Rabitz Studios, excellence is a keyword. Hence we have identified
          some of the finest, brightest and most promising brands in Northern
          Nigeria to partner with. Kaduna which is famous for the discovery site
          of the Nok Terracotta is also illustrious for its cultural affinity as
          seen in its festivals and rapidly growing entertainment industry.
          Kaduna is also called the Window to the North.
        </div>
      </section>
    </div>
    <div data-cid="clients-2">
      <div id="case-studies">
        <div class="_3-6TRn-e _1YibmBYc _1_bvS4sL _3LOPUP7d">
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
                      class="_1r8wFQ13 _1jHz3wcf text-weight-medium"
                    >
                      Events we sponsor
                    </h2>
                  </div>
                </div>
                <div
                  v-for="blog in blogs"
                  :key="blog.id"
                  class="RqckegCL _26ebzZtt _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                  @click="readBlog(blog)"
                >
                  <div class="_2vQjp_O2 k4Kjb1Dh _2aYXDjr3 _1fycIOYl">
                    <div class="_2ud0q49P">
                      <!-- <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57742/preview_square-9268d20b2132cd3e817acacda8e913e3.jpg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt=""
                        class="lazyload is-effect-opacity"
                      /> -->
                      <img
                        style="background-position: top"
                        :src="blog.posterImg"
                        alt=""
                      />
                    </div>
                    <div class="_1uIAd9Ad">
                      <!-- <img
                        data-src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57743/logo-59fa165821f8ee3d6accf61d625e7ac7.svg"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        alt="adcrush"
                        class="lazyload jeqnJEqF"
                      /> -->
                      <!-- <img
                        class="lazyload jeqnJEqF"
                        :src="blog.smallImg"
                        alt=""
                      /> -->
                    </div>
                    <p class="Qq-iPMxM">
                      {{ blog.title }}
                    </p>
                    <small class="">
                      {{ blog.smallDesc }}
                    </small>
                    <q-btn
                      class="ZxJ1uE03"
                      @click="readBlog(blog)"
                      aria-label="Scaling revenue with marketing automation"
                      >Read more</q-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Events />

    <div class="_1YibmBYc _3LOPUP7d">
      <div class="SbnErpYy">
        <div class="_1T1KHbrO _3xfrSHva">
          <p class="_1YnEsgtr">
            We bring you the Best Cultural and African tradtions from all over
            the continent.
          </p>
          <div class="_2vSqNf1t">
            <q-btn
              to="/blog"
              size="md"
              style="width: 180px"
              class="q-px-xl q-py-sm bg-primary"
              >Our Blog</q-btn
            >
          </div>
        </div>
      </div>
    </div>

    <Footer />
    <div id="modal-host"></div>
    <div id="sidebar-host"></div>
    <div data-cid="template-0"></div>
  </main>
</template>

<script>
import Video from "../components/Video.vue";
import Footer from "../components/Footer.vue";
import Events from "../components/Events.vue";

import { ref } from "vue";
import { date } from "quasar";

export default {
  components: {
    Video,
    Events,
    Footer,
  },
  setup() {
    const timeStamp = Date.now();
    const todaysDate = date.formatDate(timeStamp, "dddd D MMMM YYYY");
    return {
      todaysDate,

      icon: ref(false),
      bar: ref(false),
      barr: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
    };
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          posterImg: "/images/saruniya7.jpg",
          posterImgs: [
            "/images/sar8.jpeg",
            "/images/sar10.jpeg",
            "/images/sar5.jpeg",
          ],
          name: "Rabitz Studios",
          title: "Saruniya Cultural Festival",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "The Sarauniya Beauty Pageant is aimed at promoting Northern culture, fashion, beauty and brains and motherly etiquettes, while training the contestants to become good entrepreneur...",

          by: "Karim",
          desc: "The Sarauniya Beauty Pageant is aimed at promoting Northern culture, fashion, beauty and brains and motherly etiquettes, while training the contestants to become good entrepreneurs, the organiser, Danhausawa Media Limited, has said. Chief Executive Officer of the company, Danhausawa Likita Sauki, told journalists in Kaduna at the weekend that the project, expected to cost N50 million, taking cognizance of the religion and cultural leanings of Northerners, would be different from other pageants. The Sarauniya, he added, would not give any room for scanty clothing like bikini, swimsuit, but the “contestant’s attires will be cultural, dinner corporate wears”. He said there would be auditions in Makurdi, Benue state for North-central, Yola Adamawa state for contestants in the North-=east and Kaduna for North West based contestants. “We don’t do bikini, swimsuit, we are not looking at height or body size but being a Northerner and having knowledge of the region. We don’t encourage nudity, promiscuity or immorality, Sarauniya Beauty Pageant 2017 want to promote beauty and brains, we want to introduce cooking competition giving them the etiquettes of being a lady, a wife and a queen. “We want them to become entrepreneurs so that at the end not only the three winners will benefit but all the 25-30 final contestants would go home with something learnt and taking in. We encourage the winners to pursue a project dear to their heart. Women are supposed to be treasured, and not be objects to be kicked about”, he added. Chairman, Organising Committee, Sam Ogar, said the “North will experience something new”, adding that the programme was self-sponsored so far, but urged corporate organisations and philanthropists to supports them through partnership.“After the audition, there would be training camp here in Kaduna for the final contest on December 9th, 2017. Ladies within the age range of 18-25 years are invited to pick up theirs forms and contest for the first prize which is a brand new car”, he stated.",
          images: {
            image1: "/images/sar7.jpeg",
            image2: "/images/sar12.jpeg",
            image3: "/images/sar11.jpeg",
            image4: "/images/sar4.jpeg",
            image5: "/images/sar6.jpeg",
            image6: "/images/sar7.jpeg",
            image7: "/images/sar8.jpeg",
            image8: "/images/saruniya6.jpg",
            image10: "/images/saruniya7.jpg",
            image11: "/images/sary1.jpeg",
            image12: "/images/sary2.jpeg",
            image13: "/images/sary3.jpeg",
            image14: "/images/sary4.jpeg",
            image15: "/images/sary5.jpeg",
            image16: "/images/sary6.jpeg",
          },
        },

        {
          id: 2,
          posterImg: "/images/eve14.jpg",
          posterImgs: [
            "/images/eve13.jpg",
            "/images/eve5.jpg",
            "/images/eve1.jpg",
          ],
          name: "music",
          title: "EVENT OF LIFE",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "The Event Of Life was born out of the dire need for an event that raises the bar for other events in Northern Nigeria...",

          by: "Karim",
          desc: "The Event Of Life was born out of the dire need for an event that raises the bar for other events in Northern Nigeria. It was birthed to create and encourage hard work, consistency, and creativity among artists, DJs, and other creative. The aim is to position our indigenous artists on a more realistic platform at all times to be able to stand out in the ever-changing world of opportunities and to give every show lover and fan a memorable end-of-year experience. The first edition of Event Of Life went down in Kaduna state, Nigeria on the 30th of December 2019. It was the most talked-about event in Kaduna city at the time. The hashtag #EventOfLife trended at the highest number 8 on Nigeria Twitter and trending number 1 on Kaduna State Twitter for 72hrs. An experience fun lover still talks about and can't forget soon. The event of Life is put together by MadeIn KrockCity and powered by one of the biggest event companies in Nigeria DOXA Digitals for the Lightning, Sound, and Stage Setup; with this, be rest assured of the quality and standard of an event that matches events of any standard and appeals to all audiences and fun lovers.",
          images: {
            image1: "/images/eve1.jpg",
            image2: "/images/eve2.jpg",
            image4: "/images/eve4.jpg",
            image5: "/images/eve5.jpg",
            image6: "/images/eve6.jpg",
            image7: "/images/eve7.jpg",
            image8: "/images/eve8.jpg",
            image9: "/images/eve9.jpg",
            image10: "/images/eve10.jpg",
            image11: "/images/eve11.jpg",
            image12: "/images/eve12.jpg",
            image13: "/images/eve13.jpg",
            image14: "/images/eve14.jpg",
            image15: "/images/eve15.jpg",
            image16: "/images/eve16.jpg",
            image17: "/images/eve17.jpg",
            image18: "/images/eve18.jpg",
            image19: "/images/eve19.jpg",
          },
        },
        {
          id: 3,
          posterImg: "/images/kanga1.jpeg",
          posterImgs: [
            "/images/kanga1.jpeg",
            "/images/kanga3.jpeg",
            "/images/kanga4.jpeg",
          ],
          name: "music",
          title: "KANGA FASHION WEEK",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "Bringing style and glamour, Kanga Fashion Week is an event first of its kind. Aimed at encouraging upcoming designers in Nigeria at large...",

          by: "Karim",
          desc: "Bringing style and glamour, Kanga Fashion Week is an event first of its kind. Aimed at encouraging upcoming designers in Nigeria at large. The motive is to bring alive the dying African culture here in Nigeria. It also creates awareness to the Nigerian youth in the encouragement of entrepreneurship. It creates dynamics and an innovative Nigerian fashion industry. As preparations are on for the 5th edition of the KFW, we bring exciting news. Kanga Fashion Week collaborates with a renowned fashion house in Kaduna to bring a special retail partnership, Treaty’s 360⁰ Fashion House..",
          images: {
            image1: "/images/kanga5.jpeg",
            image2: "/images/kanga6.jpeg",
            image3: "/images/kanga7.jpeg",
            image4: "/images/kanga1.jpeg",
            image5: "/images/kanga2.jpeg",
            image6: "/images/kanga3.jpeg",
            image7: "/images/kanga4.jpeg",
          },
        },
        {
          id: 4,
          posterImg: "/images/gbam1.jpg",
          posterImgs: [
            "/images/gbam1.jpg",
            "/images/gbam3.jpg",
            "/images/gbam5.jpg",
          ],
          name: "music",
          title: "GBAM",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "#GBAM is a capacity building and youth development initiative powered by Graffiti INC to address the void in Nigerian basketball... ",

          by: "Karim",
          desc: "GRAFFITI BASKETBALL AND MUSIC #GBAM #GBAM is a capacity building and youth development initiative powered by Graffiti INC to address the void in Nigerian basketball and the world of entertainment starting from the radio to the streets and beyond. #GBAM provides a singular platform that facilitates careers  in areas directly or indirectly related to sports and entertainment. Our state of mind. - Sports & entertainment are extraordinary tools for connecting to and, accelerating development of the youths thus #GBAM is focused on achieving this from grassroot level. - To address youth restiveness by providing education opportunities and scholarships for participants who have the desire, talent, athletic and academic standing to further their education while pursuing a career in sports and entertainment. - To teach the sportsmen and entertainers about every facet of their field of interest and/or skills starting from an early age and provide a platform to harness their skills/talents. - To expose the youths, we work with to the efficiency level for successful careers with emphasis on self-awareness, sportsmanship, respect, responsibility, leadership and most importantly teamwork. - To Create an inclusive environment where the girl child and children with special needs can find expression for their talents and participate in other activities with their peers - To build an economy driven structure within and around entertainment and sports industries. #GBAM runs basketball clinics, camps, mentorship programs, and basketball tournaments for male and females from secondary schools and for the adults.",
          images: {
            image1: "/images/gbam6.jpg",
            image2: "/images/gbam7.jpg",
            image3: "/images/gbam8.jpg",
            image4: "/images/gbam9.jpg",
            image5: "/images/gbam10.jpg",
            image6: "/images/gbam11.jpg",
            image7: "/images/gbam12.jpg",
            image8: "/images/gbam13.jpg",
            image9: "/images/gbam1.jpg",
            image10: "/images/gbam2.jpg",
            image11: "/images/gbam3.jpg",
            image12: "/images/gbam5.jpg",
          },
        },
        {
          id: 5,
          posterImg: "/images/sambafest.jpeg",
          posterImgs: [
            "/images/sambafest1.jpeg",
            "/images/sambafest2.jpeg",
            "/images/sambafest4.jpeg",
          ],
          name: "music",
          title: "HIP SAMBA FESTIVAL",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "Hip Samba Fest is a music, culture, arts and talent discovery...",

          by: "Karim",
          desc: "Hip Samba Fest is a music, culture, arts and talent discovery festival held in the city of Kaduna. The event is produced by The Villageboi Company and has staged eight successful editions. The event features an exciting mix of live performances music, comedy, dramatics, spoken words and dance with cultural happenings, games, food, drinks, entrepreneurial activities and visual arts exhibition as side attraction. Hip Samba Fest features lineup of popular performing artist and emerging artist with great showmanship; past headliners have included Lady Donli, Dantalla & WurlD.",
          images: {
            image1: "/images/sambafest.jpeg",
            image2: "/images/sambafest1.jpeg",
            image3: "/images/sambafest2.jpeg",
            image4: "/images/sambafest3.jpeg",
            image5: "/images/sambafest4.jpeg",
            image6: "/images/sambafest5.jpeg",
          },
        },

        {
          id: 6,
          posterImg: "/images/foodcom2.jpg",
          name: "Nollywood",
          posterImgs: [
            "/images/foodcom33.jpg",
            "/images/foodcom4.jpg",
            "/images/foodcom5.jpg",
          ],
          title: "Ten Commandments Of Food",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "Ten Commandments of Food (10COF) is an initiative of Chef Ox...",

          by: "Karim",
          desc: "Ten Commandments of Food (10COF) is an initiative of Chef Ox, that is aimed at training, empowering and certifying people of different ages in the art and field of culinary. Furthermore, 10COF is also a platform that provides an avenue for interaction, partnership and collaboration amongst professionals within and outside the culinary field.",
          images: {
            image1: "/images/foodcom2.jpg",
            image2: "/images/foodcom33.jpg",
            image3: "/images/foodcom6.jpg",
            image4: "/images/foodcom4.jpg",
            image5: "/images/foodcom5.jpg",
          },
        },

        {
          id: 7,
          posterImg: "/images/buyandsell1.jpeg",
          posterImgs: [
            "/images/buyandsell2.jpeg",
            "/images/buyandsell3.jpeg",
            "/images/buyandsell4.jpeg",
          ],
          name: "Rabitz Studios",
          title: "Kaduna Buy and Sell",
          by: "Karim",
          smallDesc:
            "Kaduna Buy and Sell Is a trade event meant for entrepreneurs to showcase...",

          desc: "Kaduna Buy and Sell Is a trade event meant for entrepreneurs to showcase, market and sell their products and services to a bigger market than usual. The event is titled Kaduna Buy and Sell but is not limited to Kaduna based vendors, or participants alone neither is there a division of religion, it is open to everyone to be part of because it is more like a trade fair with Games to create entertainment amongst participants.Our mission can only be achieved if you are interested in joining our efforts to support this small business owners who are doing their best to get involved in entrepreneurship no matter how small Simple events like this can stir up the long lost joy in the mind of the people and can encourage many more who are unable to create something of their own because of fear of patronage thereby forcing our entrepreneurial spirit in them and with this little effort our great nation will continue to develop gradually. it will only be a thing of pride if you contribute to affecting the life of at least an individual yet benefiting from it.",
          images: {
            image1: "/images/buyandsell2.jpeg",
            image2: "/images/buyandsell1.jpeg",
            image3: "/images/buyandsell3.jpeg",
            image4: "/images/buyandsell4.jpeg",
            image5: "/images/buyandsell5.jpeg",
            image6: "/images/buyandsell6.jpg",
          },
        },

        {
          id: 8,
          posterImg: "/images/ibi1.jpeg",
          posterImgs: [
            "/images/ibi2.jpeg",
            "/images/ibi3.jpeg",
            "/images/ibi5.jpeg",
          ],
          name: "Rabitz Studios",
          title: "IBI LIVE IN CONCERT",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          smallDesc:
            "IBI Live in Concert is an annual event that delivers the best of IBI and...",
          desc: "IBI Live in Concert is an annual event that delivers the best of IBI and other featured comics and musicians as the event will offer a platform to showcase the talent that characterize his brand of music and the best of Kaduna entertainment today. The whole idea is to put Kaduna state on a global entertainment market, We do hereby request your full participation in our forthcoming event IBI LIVE IN CONCERT",
          images: {
            image1: "/images/ibi7.jpeg",
            image2: "/images/ibi4.jpeg",
            image3: "/images/ibi6.jpeg",
            image4: "/images/ibi1.jpeg",
            image5: "/images/ibi5.jpeg",
            image6: "/images/ibi2.jpeg",
          },
        },
        {
          id: 9,
          posterImg: "/images/chong1.jpg",
          posterImgs: [
            "/images/chong1.jpg",
            "/images/chong2.jpg",
            "/images/chong3.jpg",
          ],
          name: "Rabitz Studios",
          title: "Chong Dovetail",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          smallDesc:
            "An annual cultural themed urban festival created to promote the rich culture of the over 50 tribes from Southern Kaduna...",
          desc: "An annual cultural themed urban festival created to promote the rich culture of the over 50 tribes from Southern Kaduna. There are few opportunities in Nigeria where the Southern Kaduna indigene and non-indigene can sit down, chat and celebrate the positive aspects of remote community life together. There are few places nationally where people synergize to enjoy everything from local delicacies, drinks, to game, or join in a traditional dance ceremony. This place reflects the culture of the southern Kaduna people, and this opportunity is the annual Chong Dovetail Festival… ",
          images: {
            image1: "/images/chong1.jpg",
            image2: "/images/chong2.jpg",
            image3: "/images/chong4.jpg",
            image4: "/images/chong3.jpg",
            image5: "/images/chong5.jpg",
            image6: "/images/chong7.jpg",
            image6: "/images/chong9.jpg",
            image6: "/images/chong10.jpg",
            image6: "/images/chong11.jpg",
          },
        },
        {
          id: 10,
          posterImg: "/images/nerd1.jpeg",
          posterImgs: [
            "/images/nerd1.jpeg",
            "/images/nerd2.jpeg",
            "/images/nerd3.jpeg",
          ],
          name: "Rabitz Studios",
          title: "Nerd Factory Productions",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          smallDesc:
            "IBI Live in Concert is an annual event that delivers the best of IBI and...",
          desc: "IBI Live in Concert is an annual event that delivers the best of IBI and other featured comics and musicians as the event will offer a platform to showcase the talent that characterize his brand of music and the best of Kaduna entertainment today. The whole idea is to put Kaduna state on a global entertainment market, We do hereby request your full participation in our forthcoming event IBI LIVE IN CONCERT",
          images: {
            image1: "/images/ibi7.jpeg",
            image2: "/images/ibi4.jpeg",
            image3: "/images/ibi6.jpeg",
            image4: "/images/ibi1.jpeg",
            image5: "/images/ibi5.jpeg",
            image6: "/images/ibi2.jpeg",
          },
        },
        {
          id: 11,
          posterImg: "/images/com7.jpeg",
          posterImgs: [
            "/images/come1.jpeg",
            "/images/com10.jpeg",
            "/images/com7.jpeg",
          ],
          name: "Rabitz Studios",
          title: "Rain of Comedy",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          smallDesc:
            "In commemoration of Nigeria’s Independence Day Celebration. The event will feature big comedians and artists like Julius Agwu....",
          desc: "In commemoration of Nigeria’s Independence Day Celebration. The event will feature big comedians and artists like Julius Agwu, Tony Tetuila, De Don, MC Jay, Bishop Talk, Prinz Talker, General Sugar from Gombe, Chappy from Jos, Shally white from Abuja, MC Parrot, MC Solex, Kaptain Sylva Dee, Rymbox, Cassy Vibes, DJ Cinch, Ochai Ogaba, DJ Biggy Smart, DJ White, DJ Femfad from Kaduna and a whole lot of Kaduna based Comedians and Musicians. Venue was at TFA Center Adjacent Total Filling Station, Barnawa, Kaduna",
          images: {
            image1: "/images/come2.jpeg",
            image2: "/images/com2.jpeg",
            image3: "/images/com3.jpeg",
            image6: "/images/com7.jpeg",

            image4: "/images/com4.jpeg",
            image9: "/images/com9.jpeg",

            image7: "/images/com6.jpeg",
            image8: "/images/come3.jpeg",
            image10: "/images/com14.jpeg",
            image11: "/images/com10.jpeg",
            image12: "/images/com11.jpeg",
            image13: "/images/com12.jpeg",
          },
        },
      ],
    };
  },

  methods: {
    barrr(rabitz) {
      this.bar = true;
      this.rabitzIds = rabitz;
    },
    readBlog(blog) {
      console.log(blog);
      const setBlog = JSON.stringify(blog);
      console.log(setBlog);
      localStorage.setItem("blog", setBlog);
      this.$router.replace("/readblog");
    },
  },
};
</script>

<style scoped>
.events__hero {
  background: url("/images/chong1.jpg") no-repeat center center/cover !important;
  height: 85vh;
  position: relative;
}

.events__hero::before {
  background: #000;
  content: "";
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.event__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
