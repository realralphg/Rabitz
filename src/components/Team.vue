<template>
  <div class="q-pa-md team">
    <q-carousel autoplay animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        v-for="person in team"
        :key="person.id"
        :name="person.id"
        :img-src="person.img"
        class="oYfE6Xrf"
        style="
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        "
      >
        <div class="carou_det">
          <div data-testid="talent-resume" class="_23yTT71X">
            {{ person.name }}
          </div>
          <p class="_27Qy9QKP _19x2msGv">{{ person.title }}</p>
          <div class="_1-5VpbwN"></div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },

  data() {
    return {
      team: [
        {
          id: 1,
          img: "/images/pwa.jpeg",
          name: "Pwajok",
          title: "CEO",
          longerDesc:
            "A specialist in storytelling and marketing communications consulting for Raw Materials Research and Development Council a federal agency in Nigeria as a Creative Director on Communicating Agency Impact with documentary films. Directed research and managed production for 6 short documentaries reaching 600 policy leaders in the country. Participated in an Unleash global innovation lab in Shenzhen, China; alongside hundreds of experts from 170 countries across the world. Engaged with large corporations like BBC, Deloitte, and Chemonics International to develop sustainable solutions for problems across the world focusing on the United Nations Sustainable Development Goals. Bilal Salau is a multi-talented product manager and communications expert with a total of 10 years of experience working with developers, product designers, and business stakeholders in food production, IT and software services, film production service, and non-profit missions. Bilal Salau is a process optimizer who leads success stories by leading with purpose and intent. He carries a heart-burning passion for engaging with teams who value people and making the world better by solving real and relevant problems.",
        },
        {
          id: 2,
          img: "/images/karim.jpeg",
          name: "Karim",
          title: "COO",
          longerDesc:
            "A specialist in storytelling and marketing communications consulting for Raw Materials Research and Development Council a federal agency in Nigeria as a Creative Director on Communicating Agency Impact with documentary films. Directed research and managed production for 6 short documentaries reaching 600 policy leaders in the country. Participated in an Unleash global innovation lab in Shenzhen, China; alongside hundreds of experts from 170 countries across the world. Engaged with large corporations like BBC, Deloitte, and Chemonics International to develop sustainable solutions for problems across the world focusing on the United Nations Sustainable Development Goals. Bilal Salau is a multi-talented product manager and communications expert with a total of 10 years of experience working with developers, product designers, and business stakeholders in food production, IT and software services, film production service, and non-profit missions. Bilal Salau is a process optimizer who leads success stories by leading with purpose and intent. He carries a heart-burning passion for engaging with teams who value people and making the world better by solving real and relevant problems.",
        },
        {
          id: 3,
          img: "/images/bilal.jpeg",
          name: "Bilal",
          title: "Creative Director",
          longerDesc:
            "A specialist in storytelling and marketing communications consulting for Raw Materials Research and Development Council a federal agency in Nigeria as a Creative Director on Communicating Agency Impact with documentary films. Directed research and managed production for 6 short documentaries reaching 600 policy leaders in the country. Participated in an Unleash global innovation lab in Shenzhen, China; alongside hundreds of experts from 170 countries across the world. Engaged with large corporations like BBC, Deloitte, and Chemonics International to develop sustainable solutions for problems across the world focusing on the United Nations Sustainable Development Goals. Bilal Salau is a multi-talented product manager and communications expert with a total of 10 years of experience working with developers, product designers, and business stakeholders in food production, IT and software services, film production service, and non-profit missions. Bilal Salau is a process optimizer who leads success stories by leading with purpose and intent. He carries a heart-burning passion for engaging with teams who value people and making the world better by solving real and relevant problems.",
        },
        {
          id: 4,
          img: "/images/cyn.jpeg",
          name: "Cynthia",
          title: "Media Director",
          longerDesc:
            "A specialist in storytelling and marketing communications consulting for Raw Materials Research and Development Council a federal agency in Nigeria as a Creative Director on Communicating Agency Impact with documentary films. Directed research and managed production for 6 short documentaries reaching 600 policy leaders in the country. Participated in an Unleash global innovation lab in Shenzhen, China; alongside hundreds of experts from 170 countries across the world. Engaged with large corporations like BBC, Deloitte, and Chemonics International to develop sustainable solutions for problems across the world focusing on the United Nations Sustainable Development Goals. Bilal Salau is a multi-talented product manager and communications expert with a total of 10 years of experience working with developers, product designers, and business stakeholders in food production, IT and software services, film production service, and non-profit missions. Bilal Salau is a process optimizer who leads success stories by leading with purpose and intent. He carries a heart-burning passion for engaging with teams who value people and making the world better by solving real and relevant problems.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team {
  margin-bottom: 3rem;
}
</style>
