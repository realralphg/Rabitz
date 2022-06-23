<template>
  <div class="det bg-black q-py-xl">
    <div class="h q-mb-md">
      <h2 data-testid="feature-stepper-title" class="_35agMcd- underlinee">
        Upcoming Events
      </h2>
      <p class="text-white text-center">
        We Are Always out to Deliver Premium quality, These are a few of our
        Upcoming Events
      </p>
    </div>

    <div class="grid container">
      <div v-for="event in events" :key="event.id" class="card">
        <!-- <h4>{{ event.date }}</h4> -->
        <strong class="text-h6 text-weight-bold">{{ event.title }}</strong>

        <img class="q-my-md" :src="event.posterImg" alt="" />
        <q-separator class="bg-primary sep" />

        <p class="q-mt-md">
          {{ event.desc }}
        </p>

        <div class="btn q-my-md">
          <q-btn
            @click="readEvent(event)"
            style="font-size: 14px"
            class="bg-white q-px-lg q-py-xs text-primary"
          >
            Learn More <i class="fas q-ml-lg fa-chevron-right"></i
          ></q-btn>
        </div>
      </div>
    </div>

    <!-- <div class="btn q-my-xl text-center">
      <q-btn class="bg-white text-center q-px-xl q-py-md text-primary">
        View All <i class="fas q-ml-lg fa-chevron-right"></i
      ></q-btn>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          date: "12th, June 2022",

          posterImg: "/images/black1.jpeg",
          title: "Black is Gold all Schools Reunion",

          desc: "(BLACK IS GOLD) ALL SCHOOLS REUNION, is a gathering of all past students of all Primary , secondary and tertiary...",
          longerDesc: `(BLACK IS GOLD) ALL SCHOOLS REUNION, is a gathering of all past students of all Primary , secondary and tertiary students. It is the single largest gathering of its sort in Kaduna State .

          The event is scheduled for the 25th of every year happening in the city of Kaduna; the maiden edition of the event attracted over 2000+ students around Kaduna. Various activities like, variety (Talent) show, Drama And choreography, Dancing competition, Eating competition, and other exciting competitions were held."`,
          images: {
            image1: "/images/black1.jpeg",
            image2: "/images/black2.jpeg",
            image3: "/images/black5.jpeg",
            image4: "/images/black4.jpeg",
            image5: "/images/black3.jpeg",
            image6: "/images/black6.jpeg",
          },
        },

        {
          id: 2,
          date: "12th, June 2022",

          posterImg: "/images/ibi1.jpeg",
          title: "IBI live in Concert",

          desc: "IBI Live in Concert is an annual event that delivers the best of IBI and other featured comics and musicians as the event will...",
          longerDesc: `IBI Live in Concert is an annual event that delivers the best of IBI and other featured comics and musicians as the event will offer a platform to showcase the talent that characterize his brand of music and the best of Kaduna entertainment today. The whole idea is to put Kaduna state on a global entertainment market, We do hereby request your full participation in our forthcoming event IBI LIVE IN CONCERT`,
          images: {
            image1: "/images/ibi2.jpeg",
            image2: "/images/ibi3.jpeg",
            image3: "/images/ibi5.jpeg",
            image4: "/images/ibi6.jpeg",
            image5: "/images/ibi1.jpeg",
            image6: "/images/ibi4.jpeg",
          },
        },

        {
          id: 3,

          date: "Chong Dovetail",

          posterImg: "/images/chong1.jpg",
          title: "Chong Dovetail",

          desc: "IBI Live in Concert is an annual event that delivers the best of IBI and other featured comics and musicians as the event will...",
          longerDesc: `In 2019, African artists continued to make major strides by signing big deals, winning top awards, releasing memorable hits and collaborating with renowned musicians around the world. A number of African musicians amassed millions of YouTube views and gained new international fans on streaming platforms, earning much needed exposure. Like 2018, 2019 has been a great year for Africa artists in terms of collaborations, although divisions were seen after the September xenophobic attacks in South Africa, with a number of local and foreign musicians cancelling shows in the country and abroad. Nonetheless, 2019, the final year of the decade, can still be marked down as a successful one, as the African music industry continued to gain momentum. Music In Africa has complied a playlist of the top popular songs that defined the year. The below two-part playlist has been divided into Africa’s five geographic regions with the help of our regional editorial teams in Lagos, Dakar, Kinshasa, Nairobi and Johannesburg. West Africa still commands a huge following and influence on the continent, as well as in the US and Europe. The success of the region’s music has earned artists massive collaborations with some of the biggest names in the music industry. Nigeria’s Burna Boy is no doubt one of the artists who did exceptionally well in 2019. The 'African Giant' hitmaker won accolades at the BET Awards, Headies and MTV Europe Music Awards (EMAs) and Soundcity MVP Awards Festival. He was also nominated for a Grammy ahead of the 2020 awards ceremony in LA, alongside fellow African nominee Beninese singer Angélique Kidjo. Joining our list is Ghanaian artist Stonebwoy, who won a Nickelodeon Kids' Choice Award in 2019. The reggae-dancehall act was victorious in the Best Male West Africa category at the African Muzik Magazine Awards (AFRIMMAs) in Dallas, Texas. In April, he inked a deal with Samsung Ghana. Ghana’s Sarkodie took home the Best International Flow Award at the BET Hip Hop Awards, beating off competition from fellow Africans Nasty C (South Africa) and Falz (Nigeria). Yemi Alade (Nigeria) also made inroads when she signed a licensing deal with Universal Music Africa in September and was nominated in the African Influencer of the Year category at the E! People's Choice Awards in California. Wizkid, Davido and Tiwa Savage also had a successful 2019 with the release of big hits. Davido did well on the collaborative front. His two hits, ‘Blow My Mind’ featuring Chris Brown and ‘Risky’ featuring Jamaica’s DJ Popcaan, were sitting on more than 34 and 9 million YouTube views respectively at the time of writing. Not to be outdone, Wizkid became the first African artist to hit 8 million monthly streams on Spotify. The previous record was held by Congolese rapper and singer Maitre Gims, who had hit 7 million in one month. In addition, Wizkid collaborated with Beyoncé on ‘Brown Skin Girl’, which has also been nominated at the Grammys. In May, Tiwa Savage signed a record deal with Universal Music Group (UMG) in California. Under the deal, Tiwa Savage’s music will be released internationally through UMG’s operations in more than 60 countries worldwide. French-Malian singer Aya Nakamura has done outstandingly well with her 2019 hits songs ‘Pookie’, ‘The Dowry’ and ‘Soldier’, which amassed hundreds of millions of YouTube views. In October, she won the Best Female West Africa Award at the AFRIMMAs. Togolese duo Toofan made their country proud when they earned a nomination at the 2019 MTV EMAs. Their hit single ‘OU LÉ’ is a favourite in Francophone Africa. Senegalese singer Wally Seck and Ivory Coast’s Safarel Obiang also had a positive year with ‘Yobante’ and ‘Tchin Tchin’ respectively. Obiang also won the Primud d'Or in Ivory Coast. Anybody by Burna Boy"`,
          images: {
            image1: "/images/chong2.jpg",
            image2: "/images/chong3.jpg",
            image3: "/images/chong4.jpg",
            image4: "/images/chong5.jpg",
            image5: "/images/chong1.jpg",
            image6: "/images/chong10.jpg",
            image7: "/images/chong6.jpg",
            image8: "/images/chong7.jpg",
            image10: "/images/chong11.jpg",
          },
        },

        {
          id: 4,
          date: "12th, June 2022",
          posterImg: "/images/nerd1.jpeg",
          title: "Nerd Factory Productions",
          desc: "We are Nerd Factory Productions. General Theatre Practitioners and experts that harnesses our raw materials from the society to produce...",

          longerDesc: `We are Nerd Factory Productions. General Theatre Practitioners and experts that harnesses our raw materials from the society to produce something truly remarkable through arts and theatre to address core/ vital issues be-devillng the society. We are based in Kaduna state, Nigeria and have been operational since 2018, pushing the limits of our creativity to conquer the world.In the attached are pictures from some of our past events and the red carpet and even our next."`,
          images: {
            image1: "/images/nerd1.jpeg",
            image2: "/images/nerd2.jpeg",
            image3: "/images/nerd3.jpeg",
            image4: "/images/nerd4.jpeg",
            image5: "/images/nerd5.jpg",
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
    readEvent(event) {
      const setEvent = JSON.stringify(event);
      // console.log(setBlog);
      localStorage.setItem("blog", setEvent);
      this.$router.replace("/readblog");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
  /* padding: 1rem; */
}
.card {
  /* position: relative;
  left: -300px; */
  /* background-color: #e4e4e4; */
  background-color: #ffff;
  color: var(--text-color);
  padding: 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  min-height: 530px;
  min-width: 250px;

  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  /* opacity: 0.25 !important; */
}

.card:hover {
  transform: scale(1.1) !important;
}
.card:nth-child(2),
.card:nth-child(3) {
  position: relative;
  top: 10%;
  margin-bottom: 3.5rem;
}
.sep {
  height: 3px !important;
  width: 60%;
}
</style>
