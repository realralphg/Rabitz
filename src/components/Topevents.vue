<template>
  <div class="wrapper topEvents container">
    <div
      class="section has-standard_width is-gray-background has-medium_padding_top has-xlarge_padding_bottom"
    >
      <div class="section-inner">
        <div class="blog_card_list">
          <div class="rArfi2Y4" role="list">
            <div
              @click="readBlog(event)"
              class="_2AOdQKTV _3avJuwHw _2JS0AOBT"
              role="listitem"
              v-for="event in events"
              :key="event.id"
            >
              <div
                class="_3l9VlKPe"
                data-happo-hide="true"
                aria-hidden="true"
                tabindex="-1"
              >
                <picture>
                  <img
                    :src="event.posterImg"
                    alt=""
                    class="lazyload"
                    role="presentation"
                    height="100"
                    data-testid="cover-image"
                  />
                  <img
                    :src="event.posterImg"
                    class="lazyload"
                    role="presentation"
                    alt=""
                  />
                </picture>
              </div>
              <div class="KxHj95DN">
                <div class="_3xeRr4HI">
                  <img src="/images/aud1.jpeg" width="48" height="48" alt="" />
                </div>

                <div class="PnmEEQ_-">
                  <div class="_35iK7zmm">
                    {{ event.title }}
                  </div>
                </div>
                <p class="IpHlFM7w">
                  {{ event.smallDesc }}
                </p>
                <div class="_3XfNRYjc">
                  <span>
                    {{ event.time }}
                  </span>
                  <q-btn @click="readBlog(event)" class="">See More</q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          Category: "Events",
          posterImg: "/images/kdcent13.jpg",
          posterImgs: [
            "/images/kdcent13.jpg",
            "/images/kdcent11.jpg",
            "/images/kdcent12.jpg",
          ],
          name: "Rabitz Studios",
          title: "Kaduna Centenary Celebration",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "In 2017 Kaduna celebrates it's 100years of existence since 1917. Indeed it has come a long way and to mark this milestone, the northern inhabitants of Nigeria set out...",

          by: "Karim",
          desc: "In 2017 Kaduna celebrates it's 100years of existence since 1917. Indeed it has come a long way and to mark this milestone, the northern inhabitants of Nigeria set out in cultural troupes to look back in thanksgiving and celebration even as they look forward to a radiant future of possibilities.",
          images: {
            image1: "/images/kdcent1.jpg",
            image2: "/images/kdcent2.jpg",
            image3: "/images/kdcent3.jpg",
            image4: "/images/kdcent4.jpg",
            image5: "/images/kdcent5.jpg",
            image6: "/images/kdcent6.jpg",
            image7: "/images/kdcent7.jpg",
            image8: "/images/kdcent8.jpg",
            image10: "/images/kdcent9.jpg",
            image11: "/images/kdcent10.jpg",
          },
        },

        {
          id: 2,
          Category: "Events",
          posterImg: "/images/fest22.jpg",
          posterImgs: [
            "/images/fest22.jpg",
            "/images/fest23.jpg",
            "/images/fest24.jpg",
          ],
          name: "music",
          title: "Kaduna KADFEST",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "The Kaduna KADFEST is a festival of celebration of diversity in Kaduna, Northern Nigeria...",

          by: "Karim",
          desc: "The Kaduna KADFEST is a festival of celebration of diversity in Kaduna, Northern Nigeria, where various ethnic groups across all local governments rally to display and promote their cultural heritage. This is a state wide activity which is aimed at promoting diversity and ethnic tolerance.",
          images: {
            image1: "/images/fest1.jpg",
            image2: "/images/fest2.jpg",
            image4: "/images/fest3.jpg",
            image5: "/images/fest4.jpg",
            image6: "/images/fest5.jpg",
            image7: "/images/fest6.jpg",
            image8: "/images/fest7.jpg",
            image9: "/images/fest8.jpg",
            image10: "/images/fest9.jpg",
            image11: "/images/fest10.jpg",
            image12: "/images/fest11.jpg",
            image13: "/images/fest12.jpg",
            image14: "/images/fest13.jpg",
            image15: "/images/fest14.jpg",
            image16: "/images/fest15.jpg",
            image17: "/images/fest16.jpg",
            image18: "/images/fest17.jpg",
            image19: "/images/fest18.jpg",
            image19: "/images/fest19.jpg",
            image19: "/images/fest20.jpg",
          },
        },
        {
          id: 3,
          Category: "Events",
          posterImg: "/images/guts2.jpg",
          posterImgs: [
            "/images/guts2.jpg",
            "/images/guts1.jpg",
            "/images/guts5.jpg",
          ],
          name: "music",
          title: "The Guts Talent Show",
          smallImg: "/images/aud1.jpeg",
          smallDesc:
            "The Guts Talent Show is a Community Development Initiative, an invention of Rabitz Studios Entertainment designed for creative youth engagement.",

          by: "Karim",
          desc: "The Guts Talent Show is a Community Development Initiative, an invention of Rabitz Studios Entertainment designed for creative youth engagement. Its sole aim is to use creativity as a tool to promote unity and peaceful co-existence amongst people as well as propagating local content/talents exhibition with a view to community development. It features skillsets such as dance and songs.",
          images: {
            image1: "/images/guts1.jpg",
            image2: "/images/guts2.jpg",
            image22: "/images/guts22.jpg",

            image3: "/images/guts3.jpg",
            image21: "/images/guts21.jpg",

            image4: "/images/guts4.jpg",
            image24: "/images/guts24.jpg",

            image5: "/images/guts5.jpg",
            image6: "/images/guts6.jpg",
            image7: "/images/guts7.jpg",
            image8: "/images/guts8.jpg",
            image9: "/images/guts9.jpg",
            image23: "/images/guts23.jpg",
            image19: "/images/guts19.jpg",

            image10: "/images/guts10.jpg",
            image11: "/images/guts11.jpg",
            image12: "/images/guts12.jpg",
            image13: "/images/guts13.jpg",
            image20: "/images/guts20.jpg",

            image14: "/images/guts14.jpg",
            image25: "/images/guts25.jpg",

            image17: "/images/guts17.jpg",

            image18: "/images/guts18.jpg",
          },
        },
      ],
    };
  },
  methods: {
    readBlog(blog) {
      console.log(blog);
      const setBlog = JSON.stringify(blog);
      console.log(setBlog);
      localStorage.setItem("blog", setBlog);
      this.$router.replace("/read");
    },
  },
};
</script>

<style scoped></style>
