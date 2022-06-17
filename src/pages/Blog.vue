<template>
  <main id="page-root">
    <div id="cookie-banner-host"></div>

    <!-- <div class="_34Oy4nN6 blog__hero _1YibmBYc _1_bvS4sL _3DOEOvRI">
      <section class="_3fwLmXc4 _1YibmBYc _3LOPUP7d blog__text _2_32njdU">
        <h1 class="_1CgVsu-I" data-testid="hero-title">Our Blog</h1>
        <div class="XAxRXh00">
          Toptal connects elite talent with the most exciting companies in the
          world, including leading Fortune 500 brands and innovative Silicon
          Valley startups. Our focus on challenging, tier-one projects powers
          the world’s largest high-skilled workforce.
        </div>
      </section>
    </div> -->
    <div class="hold">
      <div class="hero">
        <div class="">
          <q-carousel
            style="height: calc(75vh - 48px)"
            animated
            v-model="slide"
            control-color="white"
            navigation-icon="radio_button_unchecked"
            navigation
            infinite
            vertical
            autoplay
          >
            <q-carousel-slide
              :name="1"
              img-src="https://images.pexels.com/photos/2852438/pexels-photo-2852438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            >
              <div class="_34Oy4nN6 blog__hero _1YibmBYc _1_bvS4sL _3DOEOvRI">
                <section
                  class="_3fwLmXc4 _1YibmBYc _3LOPUP7d blog__text _2_32njdU"
                >
                  <h1 class="_1CgVsu-I" data-testid="hero-title">Our Blog</h1>
                  <div class="XAxRXh00">
                    Follow our informative and entertaining Blog for the latest
                    African trend.
                  </div>
                </section>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              img-src="https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            >
              <div class="_34Oy4nN6 blog__hero _1YibmBYc _1_bvS4sL _3DOEOvRI">
                <section
                  class="_3fwLmXc4 _1YibmBYc _3LOPUP7d blog__text _2_32njdU"
                >
                  <h1 class="_1CgVsu-I" data-testid="hero-title">Our Blog</h1>
                  <div class="XAxRXh00">
                    Follow our informative and entertaining Blog for the latest
                    African trend.
                  </div>
                </section>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="3"
              img-src="https://images.pexels.com/photos/4273468/pexels-photo-4273468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            >
              <div class="_34Oy4nN6 blog__hero _1YibmBYc _1_bvS4sL _3DOEOvRI">
                <section
                  class="_3fwLmXc4 _1YibmBYc _3LOPUP7d blog__text _2_32njdU"
                >
                  <h1 class="_1CgVsu-I" data-testid="hero-title">Our Blog</h1>
                  <div class="XAxRXh00">
                    Follow our informative and entertaining Blog for the latest
                    African trend.
                  </div>
                </section>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="4"
              img-src="https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&w=1600"
            >
              <div class="_34Oy4nN6 blog__hero _1YibmBYc _1_bvS4sL _3DOEOvRI">
                <section
                  class="_3fwLmXc4 _1YibmBYc _3LOPUP7d blog__text _2_32njdU"
                >
                  <h1 class="_1CgVsu-I" data-testid="hero-title">Our Blog</h1>
                  <div class="XAxRXh00">
                    Follow our informative and entertaining Blog for the latest
                    African trend.
                  </div>
                </section>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
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
                      class="_1r8wFQ13 _1jHz3wcf"
                    >
                      Top Stories
                    </h2>
                  </div>
                </div>
                <div
                  v-for="blog in topblogs"
                  :key="blog.id"
                  class="RqckegCL _26ebzZtt _1ArckmJZ _3jgwFSUz"
                  role="listitem"
                  @click="readBlog(blog)"
                >
                  <div class="_2vQjp_O2 k4Kjb1Dh _2aYXDjr3 _1fycIOYl">
                    <div class="_2ud0q49P">
                      <img :src="blog.posterImg" alt="" />
                    </div>
                    <div class="_1uIAd9Ad"></div>
                    <p class="Qq-iPMxM">
                      {{ blog.title }}
                    </p>
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

    <!-- <div class="_1YibmBYc _3LOPUP7d">
      <div class="SbnErpYy">
        <div class="_1T1KHbrO _3xfrSHva">
          <p class="_1YnEsgtr">
            Toptal Connects the <a href="top-3-percent.html">Top&nbsp;3%</a> of
            Freelance Talent All Over The World.
          </p>
          <div class="_2vSqNf1t">
            <a href="hire.html" class="_33KRrn8A _1bcYCljm _2u-I7BW0 _344Tj4__"
              >Hire Top Talent</a
            >
          </div>
        </div>
      </div>
    </div> -->

    <div class="_1YibmBYc _3LOPUP7d">
      <section class="_1YibmBYc _3LOPUP7d _2_32njdU">
        <h2
          data-testid="blog-section-title"
          class="_3t7loGZ8 text-center underlinee _1jHz3wcf"
        >
          Explore Trending Rabitz Studios Blogs
        </h2>
        <div class="rArfi2Y4" role="list">
          <div
            @click="readBlog(bigBlog)"
            class="_2AOdQKTV _3avJuwHw _2JS0AOBT"
            role="listitem"
          >
            <div
              class="_3l9VlKPe"
              data-happo-hide="true"
              aria-hidden="true"
              tabindex="-1"
            >
              <picture>
                <img
                  :src="bigBlog.posterImg"
                  alt=""
                  class="lazyload"
                  role="presentation"
                  height="100"
                  data-testid="cover-image"
                />
                <img
                  :src="bigBlog.posterImg"
                  class="lazyload"
                  role="presentation"
                  alt=""
                />
              </picture>

              <!-- {
                posterImg:'https://www.nyongesasande.com/wp-content/uploads/2021/06/Music-Studio.png',
                name:Rabitz Studios,
                title:"Rebrand Case Study: More Than Just a New Logo",
                by:'Karim',
                desc:'We really believe its the start of something new as rabitz
                studios really represents somthing truly revolutionary. From
                putting culture in front to having remarkable talent in our
                ranks we are out to really change the creative narative in this
                time.',
                duration:"10 Mins Read"
              } -->
            </div>
            <div class="KxHj95DN">
              <div class="_3xeRr4HI">
                <!-- <img
                  src="/images/aud1.jpeg"
                  alt=""
                  class="lazyload is-effect-opacity _1kyxjycq"
                  width="48"
                  height="48"
                /> -->
                <img src="/images/aud1.jpeg" width="48" height="48" alt="" />
              </div>
              <div class="_27W_cjOv">
                <a href="" class="_31aQZWyI">{{ bigBlog.name }}</a>
              </div>
              <h3 class="PnmEEQ_-">
                <div class="_35iK7zmm">
                  {{ bigBlog.title }}
                </div>
              </h3>
              <div class="_1mjIKiS3">by <strong>Karim</strong></div>
              <p class="IpHlFM7w">
                {{ bigBlog.desc }}
              </p>
              <div class="_3XfNRYjc">
                <span>
                  {{ bigBlog.time }}
                </span>
                <q-btn @click="readBlog(bigBlog)" class=""
                  >Continue Reading</q-btn
                >
              </div>
            </div>
          </div>
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="_2AOdQKTV _2JS0AOBT"
            role="listitem"
            @click="readBlog(blog)"
          >
            <div
              class="_3l9VlKPe"
              data-happo-hide="true"
              aria-hidden="true"
              tabindex="-1"
            >
              <picture>
                <img
                  :src="blog.posterImg"
                  alt=""
                  class="lazyload"
                  role="presentation"
                  height="100"
                  data-testid="cover-image"
                />
              </picture>
            </div>
            <div class="KxHj95DN">
              <div class="_3xeRr4HI">
                <img :src="blog.smallImg" width="48" height="48" alt="" />
              </div>
              <div class="_27W_cjOv">
                <a href="finance/blog.html" class="_31aQZWyI">{{
                  blog.name
                }}</a>
              </div>
              <h3 class="PnmEEQ_-">
                <div class="_35iK7zmm">
                  {{ blog.title }}
                </div>
              </h3>
              <div class="_1mjIKiS3">by <strong>Taiwo Owolawi</strong></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
    <div id="modal-host"></div>
    <div id="sidebar-host"></div>
    <div data-cid="template-0"></div>
  </main>
</template>

<script>
import Footer from "../components/Footer.vue";
import { ref } from "vue";

export default {
  components: {
    Footer,
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      bigBlog: {
        id: 1,
        posterImg:
          "https://von.gov.ng/wp-content/uploads/2022/04/Nigerian-Idol-Live-Show-Pix-1-edited-1-650x430.jpg",
        name: "News",
        title: "Nigerian Idol 7: Jordan,Banty, Others Shine On Live Stage",
        smallImg: "/images/aud1.jpeg",
        by: "Karim",
        desc: "The real battle begins after weeks of intense musical auditions, in the search for the next Nigerian Idol winner moves to a live stage, as the top 12 contestants of the Bigi Nigerian Idol Season 7 took turns to impress the Judges – Obi Asika, Simisola Bolatito Kosoko (Simi), and Oladapo Oyebanjo (D’Banj) – as well as viewers at the live show on Sunday",
        longerDesc: `The real battle begins after weeks of intense musical auditions, in the search for the next Nigerian Idol winner moves to a live stage, as the top 12 contestants of the Bigi Nigerian Idol Season 7 took turns to impress the Judges – Obi Asika, Simisola Bolatito Kosoko (Simi), and Oladapo Oyebanjo (D’Banj) – as well as viewers at the live show on Sunday

          The contestants gave it a whirl in their separate performances in an attempt to woo viewers and fans for votes as the two contestants with the least votes would be eliminated in the next round. Abigail opened the floor of the evening with an astonishing rendition of ‘Rain on Me’ by Lady Gaga. The highlight of her performance was the uniqueness of her voice that synergized with her backup singers.

          <a href="https://twitter.com/Nigerianidol/status/1513547216371204096?t=85NxyXLLZC3V9Ftl4Pp9bg&s=08">https://twitter.com/Nigerianidol/status/1513547216371204096?t=85NxyXLLZC3V9Ftl4Pp9bg&s=08</a>

          Faith surprisingly took ownership of Olivia Rodrigo’s ‘Driver’s License’, and her performance is incomplete without mentioning the elusiveness in her voice that was miraculously infused with emotions. Faith literarily gave life to her performance and showed the audience and viewers that she deserves to be the next Nigerian Idol winner.

          Jordan continues his impressive run in the Nigerian Idol with his electrifying performance of Adele’s ‘Rolling in the Deep’. He had the Judges amazed by his vocal ability right from his first Audition and got another standing ovation at the live show.

          Banty’s rendition of Ed Sheeran’s ‘Thinking Out Loud’ was one of the highlights of the show, her performance and energy were thrilling, with a standing ovation from the Judges.

          Precious raised the bar further with Ckay’s hit single ‘Felony’ and was advised by the Judges not to sacrifice her vocals for performance. Itohan also performed ‘Baby Dragon’ by Lady Gaga and Bradley Cooper’s single ‘Shallow’. Her performance drew admiration from the Judges who felt honored to have her on stage. The last performance of the night was that of Debby who performed Lojay and Sarz’s hit track ‘Monalisa’.`,
        time: "10 Mins Read",
      },
      blogs: [
        {
          id: 1,
          posterImg:
            "https://media.istockphoto.com/photos/american-flag-in-front-of-the-white-house-picture-id157529561?b=1&k=20&m=157529561&s=170667a&w=0&h=llNmvg5Mqs7MwsrR2eTBWq0LfqN0sXIbTNUkTLGmaV8=",
          name: "Rabitz Studios",
          title: "Reopening the Economy Now is a Death Sentence",
          smallImg: "/images/aud1.jpeg",
          by: "Karim",
          desc: "Here are two facts from today. Fact one: Coronavirus deaths in America are forecast to hit 3000 a day and remain there for weeks, while the total death toll climbs to 200,000. Two hundred thousand people. Fact two: Donald Trump plans to “reopen” the economy…now. What the? If those two facts strike you as in complete and polar opposition…you’re not wrong. ",
          longerDesc:
            "I’m weary of lockdown, like you probably are. But reopening the economy is something that must be done carefully, thoughtfully, and cautiously — not carelessly, thoughtlessly, and recklessly. Or else, disaster can all too easily be added atop catastrophe. What kind of sense does it make to reopen the economy before the death toll has even peaked? While it’s still climbing? Won’t that just…pour fuel on the fire? It doesn’t take a genius to see that reopening the economy at such a juncture — before the disease has even slowed in any significant way — will only cause the pandemic to spread faster and further, infecting more people, causing more deaths, and igniting subsequent waves and peaks. Bang! You’ve now made both problems worse. Public health, and the economy. By trying to bully and force a whole society back to work…you’re going to cause the very depression you’re trying to avert…and add a historic, gigantic public health tragedy to it, too. You’ve created the worst of all worlds. The way to do that, of course, is to treat healthcare as a basic right, which everyone in society is provided, and therefore becomes a matter of social investment, a real public good. During pandemics like this we see clearly the power of public goods. Countries like Germany, with spare capacity in hospital beds, see vastly lower death tolls, whereas countries like America, where healthcare was unobtainable to begin with, see especially horrific. ones. America’s response to Coronavirus has been a shambles and a disgrace. First, its government did nothing. Then, it did nothing some more. Then, it offered people one week of support. Now, it’s forcing people back to work, to reopen the economy — not understanding that doing so is how to trigger a depression, not avoid one, and how to create a massive, historic public health tragedy, too. Umair May 2020.",
          duration: "10 Mins Read",
        },

        {
          id: 2,
          posterImg:
            "https://cdn.punchng.com/wp-content/uploads/2022/04/23091416/20220423_080954_0000.png",
          name: "music",
          title:
            "Banky W Wanted to Control Wizkid: Samklef Shares Details on What Transpired Between Singers in Viral Video",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "Popular Nigerian music producer, Samklef, has now shared his bit concerning Wizkid and his former record label boss, Banky W. In a video going viral on social media, Samklef shared that Banky W wanted to start controlling Wizkid and that the singer noticed this.",
          longerDesc: `Music producer and singer, Samuel Oguachuba, aka Samklef, ruffled some feathers when he recently called out singer, record label executive and politician, Bankole Wellington, popularly known as Banky W, for allegedly not giving him due credit, especially in form of royalties, for his input on singer, Wizkid’s debut album, Superstar.

          In an interview with Sunday Scoop, Samklef stated that he spoke out because of other producers that were ‘suffering in silence’. He said, “You describe it as ‘call out’. But, for me, it is just me voicing out. A lot of producers are suffering in silence and I am not happy about it. Shizzi, my brother, (also a producer) has also voiced out his frustrations. (I believe) more is coming.”

          Samklef also stated that he declared his intention to run for the office of the President of Nigeria because it was time to stop complaining, and start acting. He said, “Leadership is a responsibility and not a right. I believe every responsible Nigerian should be able to run for any (elective) position as provided and supported by the constitution. We have done enough of complaining. I declared to run in order to inspire other young able Nigerians that might be nursing political ambitions. I have helped with a seven-point agenda and I believe we would see many young people declaring (their intentions).”

          Asked if he believed that a young Nigerian stood the chance of leading the nation, he said, “It starts with the mind. If you believe it, you would achieve it. Nigeria cannot change in four years. That is why we need a young person that has a lot at stake and still has reasons to stay alive to run the country. Check my agenda; it has plans for 25 years.”

          On if he feels misunderstood by people, Samklef said, “Even Jesus was misunderstood, so I pay more attention to those that understand what I am saying and are in the same realm as me.”`,
          duration: "10 Mins Read",
        },

        {
          id: 3,
          posterImg:
            "https://infoguidenigeria.com/wp-content/uploads/2021/10/banky-960x686-1-780x470.jpg",
          name: "Nollywood",
          title: "2023: I’m on mission to serve Nigerians – Banky W",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "Nigerian singer Bankole Wellington, popularly known as Banky W, who is vying for a seat in the House of Representatives to represent the Eti-Osa federal constituency in Lagos State, has said that despite the prospect of being outspent by other aspirants, he stands a chance to win the seat due to his sense of vision.",
          longerDesc: `Nigerian singer Bankole Wellington, popularly known as Banky W, who is vying for a seat in the House of Representatives to represent the Eti-Osa federal constituency in Lagos State, has said that despite the prospect of being outspent by other aspirants, he stands a chance to win the seat due to his sense of vision.Banky W argued that he was not defeated in the 2019 elections but succeeded in “planting a seed” in the collective consciousness of Nigerian youths ahead of the 2023 elections.

          Wellington disclosed this to journalists at the Peoples Democratic Party’s Wadata Plaza secretariat in Abuja when he obtained his expression of interest and nomination forms for N600,000.

          He argued that Nigerian youths could no longer afford to can sit and complain but must join mainstream political platforms that give them the chance to play a part in rebuilding the nation.

          On his chances in the forthcoming elections, he said, “In a David and Goliath situation, I’m more comfortable being David. You know, the stakes are high, the big machine is against us, but I do believe that what we may lack in money we have in meaning. We have a mission. We have a message.

          “I think that if Lagosians are truly happy with the way everything is happening, then maybe we don’t stand a chance. But somehow I suspect that that’s not the case and that people are ready for something fresh, something different, something unique, something that speaks to the heart of someone who wants to serve and who wants to see the nation better. “So I’m content to stand on my own two feet with the support of the PDP and the support of our young people and the support of my community in saying that, because I know that we represent something different.”

          Speaking of the antecedents leading to his defeat in the 2019 elections, Wellington noted that although he declared his candidacy only three months before election day, he still nailed the third spot in the race.

          “You said that 2019 was unsuccessful, and I completely disagree. If you recall in 2019, I didn’t declare for office until three months before election day, which is completely unheard of.

          “So for us in 2019, it wasn’t about winning a seat. It was about planting a seed. And I think we successfully did that because what we did was, we came third, and we won in some wards and polling units that were previous strongholds for either of the two big parties.

          “But at that time, it was about showing young people that this is something we have to get involved in even though we’re late to the race. We just planted a seed, let’s just stick our toe in the waters,” he explained.

          The aspirant also noted that he chose to run on the platform of the PDP because the party opened its arms to youths.

          “I believe that with the PDP there’s a genuine intention to give young people a seat at the table? I believe that we have a chance to build a bridge between those who have been in the political terrain for many years and those of us who’ve been protesting from the sidelines.

          “I believe that the PDP is welcoming us with open arms and open doors. And so, I’m grateful to the party for the warm reception,” Banky W stated.`,
          duration: "10 Mins Read",
        },

        {
          id: 4,
          posterImg:
            "https://i0.wp.com/www.ladunliadinews.com/wp-content/uploads/2022/04/grammy.jpg",
          name: "Rabitz Studios",
          smallImg: "/images/aud1.jpeg",

          title: "Grammys 2022: Full list of winners",
          by: "Karim",
          desc: "The 64th Annual Grammy Awards was held in the US city of Las Vegas in the MGM Grand Garden Arena with Jon Batiste winning five trophies, including album of the year, We Are. Others who were honoured include teenage pop phenomenon Olivia Rodrigo and R&B duo Silk Sonic. Pakistani vocalist Arooj Aftab scored her first Grammy, ",
          longerDesc: `The 64th Annual Grammy Awards was held in the US city of Las Vegas in the MGM Grand Garden Arena with Jon Batiste winning five trophies, including album of the year, We Are.

          Others who were honoured include teenage pop phenomenon Olivia Rodrigo and R&B duo Silk Sonic.

          Pakistani vocalist Arooj Aftab scored her first Grammy, winning a prestigious trophy for her song Mohabbat in the Best Global Performance category.

          The music industry’s biggest awards ceremony was initially scheduled to be held on January 31st in Staples Center in Los Angeles but had been postponed due to a rise in coronavirus cases.
          Here is the full list of winners of the Grammys 2022:

          Album of the Year
          We are by Jon Batiste

          Song of the Year
          Leave the Door Open by Silk Sonic

          Record of the Year
          Leave the Door Open by Silk Sonic

          Best Music Video
          Freedom by Jon Batiste

          Best Music Film
          Summer Of Soul by Various Artists

          Best New Artist
          Olivia Rodrigo

          Best Pop Solo Performance
          Drivers License by Olivia Rodrigo

          Best Pop Duo/Group Performance
          Kiss Me More by Doja Cat featuring SZA

          Best Pop Vocal Album
          Sour by Olivia Rodrigo

          Best Latin Pop Album
          Mendo by Alex Cuba

          Best Pop Vocal Album
          Sour by Olivia Rodrigo

          Best Traditional Pop Vocal Album
          Love For Sale by Tony Bennett & Lady Gaga

          Best Rap Album
          Call me If You Get Lost by Tyler The Creator

          Best Rap Song
          Jail by Kanye West Featuring Jay-Z

          Best Rap Performance
          Family Ties by Baby Keem Featuring Kendrick Lamar

          Best Melodic Rap Performance
          Hurricane by Kanye West Featuring The Weeknd & Lil Baby

          Best R&B Song
          Leave The Door Open by Silk Sonic

          Best R&B Album
          Heaux Tales by Jazmine Sullivan

          Best Progressive R&B Album
          Table For Two – Lucky Daye

          Best R&B Performance
          TIE – Leave The Door Open by Silk Sonic

          TIE – Pick Up Your Feelings by Jazmine Sullivan

          Best Traditional R&B Performance
          Fight For You by H.E.R.

          Best Traditional Blues Album
          I Be Trying by Cedric Burnside

          Best Contemporary Blues Album
          662 by Christone “Kingfish” Ingram

          Best Dance/Electronic Recording
          Alive by Rüfüs Du Sol

          Best Dance/Electronic Music Album
          Subconsciously by Black Coffee

          Best Country Album
          Starting Over by Chris Stapleton

          Best Country Song
          Cold by Chris Stapleton

          Best Country Solo Performance
          You Should Probably Leave by Chris Stapleton

          Best Country Duo/Group Performance
          Younger Me by Brothers Osborne

          Best Contemporary Instrumental Album
          Tree Falls by Taylor Eigsti

          Best Rock Song
          Waiting On A War by Foo Fighters

          Best Rock Album
          Medicine At Midnight by Foo Fighters

          Best Rock Performance
          Making A Fire by Foo Fighters

          Best Latin Rock or Alternative Album
          Origen by Juanes

          Best Alternative Music Album
          Daddy’s Home by St. Vincent

          Best Metal Performance
          The Alien by Dream Theater

          Best Jazz Vocal Album
          Songwrights Apothecary Lab by Esperanza Spalding

          Best Jazz Instrumental Album
          Skyline by Ron Carter, Jack DeJohnette & Gonzalo Rubalcaba

          Best Large Jazz Ensemble Album
          For Jimmy, Wes And Oliver by Christian McBride Big Band

          Best Latin Jazz Album
          Mirror Mirror by Eliane Elias With Chick Corea and Chucho Valdes

          Best New Age Album
          Divine Tides by Stewart Copeland & Ricky Kej

          Best American Roots Song
          Cry by Jon Batiste

          Best American Roots Performance
          Cry by Jon Batiste

          Best Americana Album
          Native Sons by Los Lobos

          Best Bluegrass Album
          My Bluegrass Heart by Bela Fleck

          Best Folk Album
          They’re Calling Me Home by Rhiannon Giddens With Francesco Turrisi


          Best Regional Roots Music Album
          Kau Ka Pe’a by Kalani Pe’a

          Best Reggae Album
          Beauty In The Silence by Soja

          Best Gospel Performance/Song
          Never Lost by CeCe Winans

          Best Gospel Album
          Believe For It by CeCe Winans

          Best Contemporary Christian Music Album
          Old Church Basement by Elevation Worship & Maverick City Music

          Best Contemporary Christian Music Performance/Song
          Believe For It by CeCe Winans

          Best Roots Gospel Album
          My Savior by Carrie Underwood

          Best Musica Urbana Album
          El Ultimo Tour Del Mundo by Bad Bunny

          Best Tropical Latin Album
          Salswing! by Ruben Blades y Roberto Delgado & Orquesta

          Best Regional Mexican Music Album
          A Mis 80’s by Vicente Fernandez

          Best Global Music Album
          Mother Nature by Angelique Kidjo

          Best Global Music Performance
          Mohabbat by Arooj Aftab

          Best Children’s Music Album
          A Colorful World by Falu

          Best Spoken Word Album
          Carry On: Reflections For A New Generation From John Lewis by Don Cheadle

          Best Comedy Album
          Sincerely Louis CK by Louis C.K.

          Best Musical Theater Album
          The Unofficial Bridgerton Musical by Abigail Barlow & Emily Bear

          Best Compilation Soundtrack For Visual Media
          The United States Vs. Billie Holiday by Andra Day

          Best Score Soundtrack For Visual Media
          TIE – The Queen’s Gambit by Carlos Rafael Rivera

          TIE – Soul by Jon Batiste, Trent Reznor & Atticus Ross

          Best Song Written For Visual Media
          All Eyes On Me by Bo Burnham

          Best Instrumental Composition
          Eberhard by Lyle Mays

          Best Arrangement, Instrumental or A Cappella
          Meta Knight’s Revenge by The 8-Bit Big Band Featuring Button Masher

          Best Arrangement, Instruments and Vocals
          To The Edge Of Longing by Vince Mendoza, Czech National Symphony Orchestra & Julia Bullock

          Best Recording Package
          Pakelang by 2nd Generation Falangao Singing Group & The Chairman Crossover Big Band

          Best Boxed Or Special Limited Edition Package
          All Things Must Pass: 50th Anniversary Edition by George Harrison

          Best Album Notes
          The Complete Louis Armstrong Columbia And RCA Victor Studio Sessions 1946-1966 by Louis Armstrong

          Best Historical Album
          Joni Mitchell Archives, Vol. 1: The Early Years (1963-1967) by Joni Mitchell

          Best Engineered Album, Non-Classical
          Love For Sale by Tony Bennett & Lady Gaga

          Producer Of The Year, Non-Classical
          Jack Antonoff

          Producer Of The Year, Classical
          Judith Sherman

          Best Remixed Recording
          Passenger (Mike Shinoda Remix) by Deftones

          Best Immersive Audio Album
          Alicia by Alicia Keys

          Best Engineered Album, Classical
          Chanticleer Sings Christmas by Chanticleer

          Best Orchestral Performance
          Price: Symphonies Nos. 1 & 3 by Philadelphia Orchestra

          Best Opera Recording
          Glass: Akhnaten by The Metropolitan Opera Orchestra

          Best Choral Performance
          Mahler: Symphony No. 8, ‘Symphony Of A Thousand’ by Leah Crocetto, Mihoko Fujimura, Ryan McKinny, Erin Morley, Tamara Mumford, Simon O’Neill, Morris Robinson & Tamara Wilson; Los Angeles Philharmonic; Los Angeles Children’s Chorus, Los Angeles Master Chorale, National Children’s Chorus & Pacific Chorale

          Best Chamber Music/Small Ensemble Performance
          Beethoven: Cello Sonatas – Hope Amid Tears by Yo-Yo Ma & Emanuel Ax

          Best Classical Instrumental Solo
          Alone Together by Jennifer Koh

          Best Classical Solo Vocal Album
          Mythologies by Virginie D’Avezac De Castera, Lili Haydn, Wouter Kellerman, Nadeem Majdalany, Eru Matsumoto & Emilio D. Miler

          Best Classical Compendium
          Women Warriors – The Voices Of Change

          `,
          duration: "10 Mins Read",
        },

        {
          id: 5,
          posterImg:
            "https://hips.hearstapps.com/hmg-prod/images/jungkook-v-suga-jin-rm-jimin-and-j-hope-of-music-group-bts-news-photo-1648654751.jpg",
          name: "Rabitz Studios",
          title: "For Their New Album, BTS's Big Plan is Looking Back",
          smallImg: "/images/aud1.jpeg",
          duration: "10 Mins Read",

          by: "Karim",
          desc: `Mark your calendars for June 10, because BTS is coming back. On the last day of their sold out, four-night residency in Las Vegas this April, the seven-man group announced that there's a new project on the rise, but shared precious little else. Today, however, the shape has solidified."`,
          longerDesc: `"Mark your calendars for June 10, because BTS is coming back. On the last day of their sold out, four-night residency in Las Vegas this April, the seven-man group announced that there's a new project on the rise, but shared precious little else. Today, however, the shape has solidified. On Thursday, the band announced that their project is going to be called Proof, and that it is going to be an anthology collection featuring many BTS tracks from their nine-year tenure, plus three new songs. "After ceaselessly sprinting forward since 2013, BTS is celebrating their 9th anniversary this coming June" said an official statement on the fan site Weverse, "The BTS anthology album that embodies the history of BTS will be released as they begin a new chapter as an artist that has been active for nine years to look back on their past endeavors.' The album will be the group's first album release since their 2020 LP Be. Even without a new album for the past couple of years, the group has been incredibly busy releasing chart-topping singles "Butter" and "Permission To Dance," as well as with their series of sold out shows in L.A., Las Vegas, and Seoul. Individually, the boys themselves have been pretty busy with music releases in the past six months. Between BTS projects, Jungkook, Jin, V and Jimin have been jumping on soundtracks here and there and Suga recently released a new feature with K-Pop legend Psy. Proof will be coming just three days shy of the anniversary of the group's debut in 2013 and will span across three CDs. It is set to "reflect the thoughts and ideas of the members on the past, present and future of BTS."As of Wednesday May 4 at 10 p.m. ET, preorder is now available to all fans through the group's Weverse Shop."`,
        },
        {
          id: 6,
          posterImg:
            "https://cdn.vox-cdn.com/thumbor/mL2-M8P_zurxyd14DpR_0o7boLk=/0x0:2040x1360/1200x675/filters:focal(538x544:864x870)/cdn.vox-cdn.com/uploads/chorus_image/image/65884159/jbareham_191204_0977_witcher_0001.0.jpg",
          name: "Rabitz Studios",
          title:
            "The Witcher season 3 potential release date, cast, plot and everything you need to know",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "We really believe its the start of something new as rabitz studios really represents somthing truly revolutionary. From putting culture in front to having remarkable talent in our ranks we are out to change the creative narative in this time.",
          longerDesc: `The Witcher franchise really is a valley of plenty these days. Between the anime prequel, and the many, many spinoffs currently in production, the world created by Andrzej Sapkowski seems to grow bigger and bigger each day. But of course, all eyes remain firmly fixed on Henry Cavill's flagship show, and not just because Geralt is easy on the eyes. The good news then is that before season two even arrived, Netflix already confirmed that season three is officially on its way as well.The announcement came as part of Netflix's TUDUM event in September 2021, but now that some time has passed since then, there's plenty more news to share on season three. So grab your loyal steed and all the coins you can carry, as we head back into the Continent and find out what's coming next in The Witcher season three. The Witcher season two arrived almost exactly two years after the first one, but that was primarily down to COVID-related delays, not to mention the injury that Henry Cavill sustained on set. For now, TV productions seem to be working almost as quickly as they did prior to the pandemic, so taking into account any more potential delays, we would expect season three to arrive at the end of 2022, at a push. or more likely, 2023. That's definitely subject to change though. While speaking to showrunner Lauren S Hissrich in the last week of November 2021, Digital Spy learned that the writers' room is already working on scripts for season three. "The writers' room this season is incredible. I mean, we've always had incredible writers on the show. But I feel that this season specifically had… We had some new people come in, and it was really interesting how it changed the dynamic of the room, to have this sort of new blood: people who have watched the first season, who then had screened the second season, and came in with fresh, new ideas, who sort of challenged me on things that I hadn't really thought about before. Henry Cavill will be in season three (because without Geralt, there isn't really a show, right?) alongside our faves that have made the show what it is.• Freya Allan as Cirilla AKA Ciri
        • Anya Chalotra as Yennefer of Vengerberg
        • Joey Batey as Jaskier
        • Royce Pierreson as Istredd
        • Anna Shaffer as Triss Merigold
        • Kim Bodnia as Vesemir

          If you've binged season two right to the very end, you'll also know that Ciri's father, Emhyr, comes back from the dead, so to speak. Actor Bart Edwards will play a major role as season three's Big Bad if that ominous season two ending is anything to go by.

          As the alliance between Nilfgaard and the elves grows tenser, expect to see characters from this conflict return, not to mention the mages as well. So that means Mimi Ndiweni (Fringilla), Media Simson (Francesa), Mahesh Jadu (Vilgefortz), and MyAnna Buring (Tissaia) will all probably return for another go of things in season three.

          As season three began filming, a list of new additions were confirmed – including some familiar faces from other big franchises.`,
          duration: "10 Mins Read",
        },
        {
          id: 7,
          posterImg:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaGhgYHBgYGhkaGhgYGBgZHBgZGBgcIS4lHR8rIxwYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjUrJCE0NDQxNDQ0NDQxNDE0NDE0NDQ0NDQ0NDE0NjQxNDQ0NDQ1NDQ0NDExNDE0NDQ0NDc0NP/AABEIAIgBcQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADwQAAIBAwMBBQYEBQMDBQAAAAECEQADIQQSMUEFIlFhcQYTMoGRoUKx0fAUUmLB4SNy8YKSohUzNEOy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgMBAQACAwEAAAAAAAECERIhAzFBUSJhgRMyQgT/2gAMAwEAAhEDEQA/APJCKalNKa6MQ9PTTTg0BrRAUANGpqs2HUUiKQNLdVQhTxTA04NQOKcCmBogaijWpkqFTUiNQSoKsIKgVqmRhUFhBV2zVK24q1bcVEaNqrls1nWrgq4jjoayjRttV3TnNZlu4Kuae8KzVjTHH78DNVutL38iI/PwP61GXAP/ADUVZU0jUJvgRz9KFtWo8fofritA7tZt8Zq1f1iYgN/2kVQ1GqXoCfPaRQVr4rOvrVq/qV8/pWfevjzqxEDrUdwUT3BB5+lQszsQltC7tJCjwEST5ZFVqS30rutQOKPXC9Zj31vbJ6fsio/eAiR1qyy+luNnsDCgIoy1CWqxAEU22imlNUARQ0bGo91FM1CKJmpt1QKKYin3UxNUDFNFFNNNA22lTzSoBpUM09QFSoaU1RIKMVCDRqaFiSmpTSmqzo9HUc04NQGKcUANPNFafY3ZxvvsBitbt72ZfTKH3h1JgwCIJ4moOwL1lXTLAspV9uGRhHeEzI9K3vaVbItMu52KqWRt8yzFcMvTPkBFcrleT04+PG4WuNAolqMGjU10ryrCGrFs1UVqnR6g0LTVbt3KzEerCPUqNS3crQ07g1h23q5prlZVuJcUKSTgQSegEGZriO0faC64Z7LbFWSFgFig/ESRz18q2e2L0ae5Byy7f+7B+xP1ql7K9io9hdS15FG4h1dSe+rN7tOQCpIQkctxUt07eLDkt+z/AG4zs1m+IuKNwMQSIG4MvRhz5g1uO6xXHdtq9vXG4zq7IENxkXaoJ3KVC/7K3rV/cQQRmIPTPBpLuM54ay03NT2Ez2y5usn9KED78k1yOt1XuHFp3LqYhm+IEnE+VdRr9XqVQiEuAKNzqdsNHewZlZ4M5rz2/pnuXS7zCMv2yB61zxtt7enyYY44aka9x5qrcpy9QXHru8RrlaXs2xR3u7kVVWGLRnkgCfH845rIZ6sdla0I8MruGjuIYckZEeNTKbxdPHZMpave1enf3ZFxxcZgCu0AZmQYAwPLNcy9gp3CZK4PrzH3rV7Y7Ra+JRWVc5JlsedZN1CpKsCCOQeanjnTp5rN9ANMaRNMTXRx0anpqaqhzQMKOgagBqGnahqKekaakaBGlTUqoelTUqojpwaAUU1ho80qalQODRA0Ap6olDUpoJpbqm00OaJTUU0QNNmkk04NW+znSCDG88FsgeXzrrtN7Frc2lb6jgsIyJHKRg/Opcte28fFcp05DTKs94sPAryD4x1+Rqe/2ldcC0zlkHAIHTiTEn50tdpTauPaf4kYqfAjoR5EQfnUCoKuu9m9S4kp8asWtO7KWVGKgxuAMTExPjGYpDSMWQEEB2VZPSTE/Y/SvVexNemnsLbZERQAe/AEEnOeT+dZyy0zhjyrynjBxUivXce1K6S4m+2EViWVWEgs6ASqjrHWfHzrgFemOXIzw41cF2Mk1Y0rlwXEBF5djAnw/fhWHr27q+E5/tXeexlvR+6F28iFhy9wgIhHwwOpjr61MstN+LxzJhpd86s2nMTmPGtH2u1Ft7iOgMFVG/bsRg2U2k84nPEehjDTVoO7lWO4EMrQAIKndEENmCPLipLubZy8esrJ8N21rDtCA85J8I4/fmKD2Y7RdLV3ue8RWEqCVKs8xEAyDBx41R15VnhZ3bSp8MiflGf2K9K7E01ns3Rq7kF3hzt+K47CVRJ6ARnpk9al/Hbx43GTL44LtLs7UqQ7gILoPd646R4DcM+tMLr27e2ZgYxn61d7S7Wa9ea4/JgADhVzCrPQfcknrUOo28k4kD6wK644yTtwyyuWQTr2tbranYMkpj4jGfOec1l2NW+8gElSYgk8nqPA8Vp9odkh2u3l220BQKqxkuW4j+lZqumnVNuJJOPl1/L61McZ7b8mWX/WpDc8ZHrUTvUPad3IHhDY+w+sVFcud0+n51dduWgNdJEkn0H+Kn7Av201No3JVN+12PRWBUknpEzPSrHs9prTuffHugDu5G4nzH7zUXb+ktSWszt+ICGHdOAYbMfnTLOS8Y6Y+K3Hk9D9oeybNpd7fCYC7BuZzyFUD4iQOfCvK+0Lrm47Ph93eHQQAAseQAHyr1f2Qd30FguSWG9QTzsDNs+ygeleZ+0q7dTeHhcP5CrjIxcrevxQV55oia9K9muzbNnToSo9443M5Ameign4VGfzrK9s7Fh0NxGQusZUiWHUGOcSa53OctOv/DePLbiQacGgmnDV0jloc0DmlNCTQgWNNNMTTVNqemmmJppoCmlNDSmrsFNKmmlQRU9DT1lTg09DSoDFKaEGkaIOaYmmppoDmm3UM0poqxYAPXNd12BqXRC4ZMDm4YRI/FHL+grhtLAOeuPTwNbCv7twl62e7yjYORgg5HgQeDWcsbY7+LLim9qLqPqS6XPeAqsuQuDkEKFEQBHr45pWl0sBdzl5HfchEPiYCuQPX61B2vdVim1NoCQCRkrjbJjvR/est3munH+XC5f1bp1PZWmHvEDFHCsrlUcNOxmK5GCCWjBPIBia37/ahXUguVBKl4IBVCzEbIOBAH3rj+wNalhgzqp3BQrEggFWYlWjImVMH+UVu6/TvqGL213lRsJWYJ3SDn+lgSa45f5dvFrfTou2brOBbGxbbqQGIWFb4iyxwCs1532VoXvttQhQIJY8AHjHU+VX+z0azcZrqA8qBMxzu4MDpnPpXTafsFbemW9aJJYe8dBBw2TtjwECOsHg0x/mdp5P7vXxzXaXZB04D798cgArjgiZMVZ7H19hYVratbkspcZSep2nnkdRV57gupnII/t/muTvo9ttgzMxjjOR9xVyx2z48uPTp+3tXcvQiLKW2BQKO+Fg4baxBiREcA8Cgs2UuJcLl/fhBG8J7sb/AIApJB3EkIB5+tD2BpXPedyeNqknC+A/QV0Or0lskPtl4loxuQHO+PMkA88xiacel53lbPrzqw4756liJ8Bz95Na2v7Z981rcYW1YtWVUnJZUX3jAebSJ8FWsz2jtIuoue6YMjENjgFxuZfkSfy6VVs3t2GPPI8T4mRHyq4zvbfkzvCY/i0NWGcngL/nk1LqdR3FgzmfvH5kVXt6fb13AmZPoOfpQ6ljuHHA9OZz5d2unx5sesttV9YW2p0UAx5xgnz8PnVV70sW5AwB6c/f+1VU1MBo8lBPLM0yx9ABioL1yFgUnTWVuVtv1KjFyznqfkIH+agL92PA/wB6m7PfuEc5OPGoFRmbaBJLYHmfyqRnXxq+zuvS27FlUsQpQtwCCZkSJwevhVvtztFHRUtoqztLlVCl2XqYJgc4860OyPYC45V3u7VGTsEkQJMMxgQOsGl7M+zLXnN10IsIxMty8TCDxPAP+K5ZXG5bj1Ycpjxsdd2JeX+Cs7O73Fgf1bTI/wD19K829rdEy3XucqztmVMcQSBkT5iuo11xLaGySdiMWXmFYMTtMZwZg/4rne1+2BctsgDbSAJZiYAIbAYt4cyPStTK305cZjvft0PYnbaXEVY2woBUxtZgoDR5cVm+1OoUJs90i7iz7lBWHiP+rEZxxxWnqeybNixpdO1wW9S4G6ZCg3GJQuwB2wx2THScAVyHtD79brWLjFjbIU5lZjofQjzqTH+nS+WXDX1lg04NMyEUG6unp50s0LGmmmY0TRiaaaY0pop5pTQzSmgKlNDNNNAc0qCaVFBNPTUqyHpU1KgIUppqaqCNKlUu0Y/Kougi23hUtqzA3GPT+9SC5tx4xx0/fhR2b9wsAjOOdoDFQJGYyAMVd6a4yrlzsm5s37AVjJVlaBiSVB3CCQDjE1NotH7xX3uzFAfh75WBjeD3ihEgFZII4qr/AB92BIeGVlHxQ5aOhwTgceFaGjs5Nwwu2AVM54H6flS5/qTG76Ve0uLZzBQADpChTI9dx+lULdlirMEYqkbmAkDcQBuPSTH1rf1GhN1EBcKEnO0sSsQNqjkmDAxNYZ7RZbTWV+B3VzPJK8cY6D0jzmtXL8Z469/RIm62B/U5+yV3fsww0+nckyQwAmT3isqAOmTxXB6Z4tbv6yPqo/QVqHtn/S2Ced/mGAAj7GueU5RvG8b/AKXO0bhZ9s8GPmTn+1dF7NdtK+6yMe7kCfxLJj6DHyrgk1xkE56+pNFZ15t3UugR3iD5qT1qZY7mjHLWW/1u6tjZvPb/AAgyP9rZH6fKoGcO6d5lJMMUwxMEj5H9at+0ZDomoToAr/7T8LH0Jj/qrl31RVpESOhyCKS7hljrJ3yaYIAQ6lowq7SZPE98N4nCH0qPR3XbfvkbWKkAEkFMHABxM5AJziOTydrt+6ALZOxcCF7ojxZSDM9ZrY7J7XUMQxA3d4kRBJOTAwBwIqy3fZlJrpyzId78QGYdf5jAg1WuNBkVr9uIFuuR8Lw4+YG77yfnWO4zT61b/M26T2d1enA23u8zyoDfCoG3/wAmkwem3ETWzqOzdI2xShU4+ByHfPeCu8qxAJ7pAI5BMieANrr0q37y4FViSUkDIVhK5jPh5+NLLve2McsZNWLHaemRLpRHDopMNnM9YPlH3qjeNK5dlic94k5jqfLH0oDLMFHXH1rTH1b7OUMwT+YgDBPPkMmuz0PZyMyM6gMM7hbFtlJn+Q7CPKD5GuFIKMrT5gqT0MeAg10eis31CvtLpKndJZSN3eM8Fcxnn5VjPenbxal7j0065RaFlYD3O4sEBdp+KOoYgEcckVbDjT2WyBtRgoGBIUkAfT9815nrZR1dWCBCGkv3VfDDaDyeMDwrV7T9o01KIiEiSCekQMiP3zXKenSzd1FPt7WKumC4JOZjP1rn/Z3QNevWhEobiBz4ICCxbwU8SeuKH2gvEkxO1YGJgE8Zq/otcEZGsrs2oAQzQp4MkgyZJJ45+3TG8YnlnK6/G/d1yt2mbx+FHck4wlu0yn1BCn5muN1zu9wPcBT3jF5OTDNmPGPOrN7VMSzEwHBBZQYG6CYPnx86z7V6W3MxkGZPgB3QIMcfnW+WnDHHfsWoWzJUFgZ5YzECCCoAmTP1rNq69gltzDB70HBM8YmQKlBQr3lxB+E5WOAAf70las38ZpNMTTOc001WDzTE000qBUqaaVQPSoZpTQPNKmpUDTRqhNTBFHnRbp8PT981NrpVIilU7IDxAP2j9aA245P0/WqhrTgGSJ+n96JtuI3faiFqRA9TP5ime0RGQfrUU2weNIUihHJHHTrSRxweKpBl48/Enw8Kvaa6m2GWT4kn5iPCoDaPKwQeScczTHSvtkCYwYIpuN42zvTXt3jtXaZIMxAnujHe5xJGBUty27KzbxIXI+IbROAxzOPDw8axbaMpYcGPX1Efaa07DsEIOWA4MQ0jgmcQfrFZ03zl9le1DoFCsfQAAgsAYBzMiKq2MAsBtYd4naGIz3pniD/etDsnTrcBN9mBDYA/EIyWJmR+hquvaCzCoqopkACGbzY8TAEY+lO9MXPGXcQBN3dBXac5IUyYjurOcj6Gm1Gl2wS0AiZJ4IncMT5c+Nb2h7URpG1QYmNqzg8/Dxn1xVTt2ybroVZONoRjHMmdwwCcCOasvZlOvSLsXs4X76W2JUEySsbhCuflwvPiK0Lvs5prpuW7F+4bqb223FhWKfEobaPEdeoqT2TZxqbQZIBL5wfwt1zjFamk7dRtQ9gWAhcunvkaWEbiSQRiYrlllly6/FmM0532Z1oYLZcGGIQEjBDGCM4NH2tbGn1LWrQLhIAEd4SswQBkQ3POM+Y6fUuuoW1tYkXlUvByouASI6Yqb2nYjW3TtcDcvfDEA9xcDu/aelX/ANf6WXrtl9qXN1hH/E7HcIGAhIniRwOvjWRbuECZ/f7iuw1WnX+BsME7xZwJ5IlyRI5Ga57SwpIuJA5AMqPP58c+FXDKWJnj92u6Hs8X9NevFn3WSgVVght5AM4nFY2ptFCJDCZ+IQcV2fZWw6PV7QQJtSBEwGHBHJis3Sqm0uSWUSTJnA/p8asvdYy6kih2R2Wt6xqbjMwNlFZQIhi27DSP6RxVPR6J7pt20G53YgD16k9AAJ9K7jsT3bWNUAFg203Af9eD49ap+x2vsfxYRU2sVdVY+IHAM+ANS5Xu/hx9Kh9n9Dbb3V3VObowxRe4jdQTtPHXP0rH7Z7FbS3VDOGRlLJcUYYek+Y69RWh2r2hdVnUptCkodwzunJgdP1q37RoV0GjS5/7kuwBGQhmAR05X6VJbLO97a47+M7U9hu2mTU29zKGZXUASmY3AAmRjP7jStWhc099mZl9yUYqp7rbj1HIHX1irXZvazabQad1AZTfuIynhkO4keuKu6zSp/C6m7ZIZLyWyqwdylWO5SOfxDzrOWV9X96axmmBpLf8RcSyGjJz02iST6xRa6zpbYZrGodnRtrI4jdkyVwJiPPisjsk3UuC5ZEuhMDOcHcCp6RPhXS39Pp9SrXFt+71CFXYK3+m2QTu8vMCfM1b1V3XGau8WJMnkccT0+dS6gbhbGCSo+cljn61s/8ApiOzs7k5J2jHPU9S3P1qh2jZQO2yFUAQBJ+fjzPPhXTGz055S+6iXXkK6EYaIAICqZkn16eWaos5mePtPiKuaNGHfGGUiDE58x5cz6VE9teTJ9ZyfXpV6TstTqSTgyBAqsKO4igAjrwP806qFyeaQt77QMlLaalvFTwf+eooEqoHaaWw1ZWwx/5qO4NvNTa6VyIpUdzoQZkfTyqOarJUqVKgalSpUFyV8KER4UNKaCUMPCluHhUVHtoJUugGYpxfnmeeBH6VWmiU1RMgTqGPq36CiRU/k/8AI1FEVIGqCdLiD8J9N32kjip0e2ZBDKPEFefDjwqla5ohzt+lNRd0DuxxOMj5TUi6qSBHODB5MdR6gUDjHoIqsDnjM8+nlRG5oUQyxLhcYBGT+KTGPl41et6XTSDsPzdiD8iaxOzrmCOBxk1aV4MfOoL6ds2/eiVAX4d7FiwgdZJx0nzrQvPacSBIMEFMHHBDAT964jVYc+s1c0OsZBE48IH5VNN3J0T673DpeRSSkqFYkiGB5zNaFztpWU/6VtCw7zIu0mRmTyJ865rWalShJyDHHr+flVhbwjgz4ipcZbunK6XNI1q24YCCDuG8kjJBMHjMCn7Vu27txrjfE3RG8gMfIVSMeP0xPqODUYWPh2/NaupvabroNB2yluyln3S3ApeAwLHvd6ePEkegrE7TcOzSmwQBtUQFx5/3qbsvVbLm52Cgq6khW/EpHKHcPUcVY12rsv7xPelQy6eHYXHE29+8SZeO8IJ8658ZMtyLu2e1fsXXtpg6qAyuRuV0kErMCBGc0famvW+gBtJbG6d9u3tJ5EFsiM1ctdv2d/fnYdRdvbtp3J8BtsPIw4I5zNULOuUWAhvH/wCObJtQ5G83S+/jbhTzzir93pf8bLQatbVu6iglbiKrEzIC7oKx/u58hWfp9EqFXG/cpDblkQRkHyrb1Pa+n32WRjttkWXDJAfTEANME7vxHMHv8YqPsrttJc3bhBN0uAoug7SoAgodpiAArCB86b+6TXza9b9p3bJso7gCHKS3kSB/isTV3rl5mZ2Ziee4Nqx0XHdGeKk7C7QVA4dwpfYf/s/CW/FbMjnjg/KtJ+30Bc2wWLXbzgFnRQrqoUsow34sHipJq9Q3ue2RqLs6ZNOD3UcupjvEmZBMx+I9KE61kttbVmK3BtYNtxx3lgDOKri4JgcDk054HjiumozyqbROtlhcV33dSSO8Md1h8hV7tDtJXBVU92DG4IQNxB5aQZyTWReX9aTNiPKlxluzlVuzbtrn/UJ8C4jHkAKK7qQLZRFierMxgHnHz4qmH/KhUbhHiKujakbpAjA5z5Zj9+VO10cHJx9un5VEQcz0xx4TxUJYz8xTSJbu0sDJOY9B0zVtbSRkH61VFo+I/wAUb3hwP+KugZ06eB+v+KdLaqZC/Uk1HcuQVg+tO1wDnrVE28fyr9/1oXYZwIqJs8UJYHE4FRUqxEbVjmI59TQMime6BTh/pQu+cfWlFUWiSQMxNC6Ec1ZUkCKC+2KCtSpUqIsTSSg3Ug1BKQKEXKYvTBs1FERQ7hRM4oImqiQmaIPUSvTstFT23yKK/iqyVZuGRRDu8ifr61X2yadWqa0vWgktnaB0qV3zP7NBcyMfTwqAXPGgHVjM1JpkBXzqK+ZipFOegPl1o1RspE/Qjxq1Z1sfuQfUGot0iahdKMtP385g+UcfUU8scnArKR2Tg/oalXVscEj5/wCKmlXSZqvdFEj+Yn9+NK63WgsKqIveVGJViCc7iCIjw5OPKorujDNK4U7wo5yvPyOfpR27yMG3ttJDA93EsRkR6feoW1sOCuVVmKg4y3xfKuUl30+nlfFxnLWuta9pG0CKSCzYzgD4dwUfnTjsyJhzw/QcqYH1g/Sqz689Rnaq8/ysDPzipU7RJnu4M4nx3+X9X2prNJl/8ve4HU6cI20bj5kc+Y8qFXjH1otTdDksFieczVd26Cus3rt8/wAvHlePr4lRswJqyCAPPxqrbxxUjv06VWBM+CaiZqBnqMtQTO9PbeoWbFOhoFd5NV7QgkVJceDUG/wx1oJ2eKExHAio3fjqaHcDz9KBOPD6fpRPcxFR7qQYTQGH6cUAzH7mk+ae24H1qKc3PKnL1E/NNNVErtjFQkzRzQstAFKlSoCmkTSpUDikTSpUA1KrwP3mlSoB5NJjGKVKopg1TWzSpVUC2DR270c0qVBMl+TxSvJIkfOlSoKztxU90zB+9KlQPauQc8damxP7+9KlQC6zVUmlSoJVuECiVyef38qVKgdzUZJGRxSpVFRk9asWRilSqodmpi8U1KgNTThuaVKgAtURfNKlQPuoTej0pUqALlwE0LQKVKgHdS4pUqBEihNKlQEHoaVKgkqNjSpVA00i1KlVDUqVKg//2Q==",
          name: "Rabitz Studios",
          title: "Five New Movies Everyone Should Watch on Showmax in April",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "We really believe its the start of something new as rabitz studios really represents somthing truly revolutionary. From putting culture in front to having remarkable talent in our ranks we are out to change the creative narative in this time.",
          duration: "10 Mins Read",
        },
        {
          id: 8,
          posterImg:
            "https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/201912/topafricanartistsof2019.jpg?itok=NjClc3B5",
          name: "Rabitz Studios",
          title: "Best African songs of 2019 – part 1",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "In 2019, African artists continued to make major strides by signing big deals, winning top awards, releasing memorable hits and collaborating with renowned musicians around the world. A number of African musicians amassed millions of YouTube views and gained new international fans on streaming platforms, earning much needed exposure.",
          longerDesc:
            "In 2019, African artists continued to make major strides by signing big deals, winning top awards, releasing memorable hits and collaborating with renowned musicians around the world. A number of African musicians amassed millions of YouTube views and gained new international fans on streaming platforms, earning much needed exposure.Like 2018, 2019 has been a great year for Africa artists in terms of collaborations, although divisions were seen after the September xenophobic attacks in South Africa, with a number of local and foreign musicians cancelling shows in the country and abroad. Nonetheless, 2019, the final year of the decade, can still be marked down as a successful one, as the African music industry continued to gain momentum. Music In Africa has complied a playlist of the top popular songs that defined the year. The below two-part playlist has been divided into Africa’s five geographic regions with the help of our regional editorial teams in Lagos, Dakar, Kinshasa, Nairobi and Johannesburg. West Africa still commands a huge following and influence on the continent, as well as in the US and Europe. The success of the region’s music has earned artists massive collaborations with some of the biggest names in the music industry. Nigeria’s Burna Boy is no doubt one of the artists who did exceptionally well in 2019. The 'African Giant' hitmaker won accolades at the BET Awards, Headies and MTV Europe Music Awards (EMAs) and Soundcity MVP Awards Festival. He was also nominated for a Grammy ahead of the 2020 awards ceremony in LA, alongside fellow African nominee Beninese singer Angélique Kidjo. Joining our list is Ghanaian artist Stonebwoy, who won a Nickelodeon Kids' Choice Award in 2019. The reggae-dancehall act was victorious in the Best Male West Africa category at the African Muzik Magazine Awards (AFRIMMAs) in Dallas, Texas. In April, he inked a deal with Samsung Ghana. Ghana’s Sarkodie took home the Best International Flow Award at the BET Hip Hop Awards, beating off competition from fellow Africans Nasty C (South Africa) and Falz (Nigeria). Yemi Alade (Nigeria) also made inroads when she signed a licensing deal with Universal Music Africa in September and was nominated in the African Influencer of the Year category at the E! People's Choice Awards in California. Wizkid, Davido and Tiwa Savage also had a successful 2019 with the release of big hits. Davido did well on the collaborative front. His two hits, ‘Blow My Mind’ featuring Chris Brown and ‘Risky’ featuring Jamaica’s DJ Popcaan, were sitting on more than 34 and 9 million YouTube views respectively at the time of writing. Not to be outdone, Wizkid became the first African artist to hit 8 million monthly streams on Spotify. The previous record was held by Congolese rapper and singer Maitre Gims, who had hit 7 million in one month. In addition, Wizkid collaborated with Beyoncé on ‘Brown Skin Girl’, which has also been nominated at the Grammys. In May, Tiwa Savage signed a record deal with Universal Music Group (UMG) in California. Under the deal, Tiwa Savage’s music will be released internationally through UMG’s operations in more than 60 countries worldwide. French-Malian singer Aya Nakamura has done outstandingly well with her 2019 hits songs ‘Pookie’, ‘The Dowry’ and ‘Soldier’, which amassed hundreds of millions of YouTube views. In October, she won the Best Female West Africa Award at the AFRIMMAs. Togolese duo Toofan made their country proud when they earned a nomination at the 2019 MTV EMAs. Their hit single ‘OU LÉ’ is a favourite in Francophone Africa. Senegalese singer Wally Seck and Ivory Coast’s Safarel Obiang also had a positive year with ‘Yobante’ and ‘Tchin Tchin’ respectively. Obiang also won the Primud d'Or in Ivory Coast. Anybody by Burna Boy",
          duration: "10 Mins Read",
        },
      ],
      topblogs: [
        {
          id: 1,
          posterImg:
            "https://cdn.24.co.za/files/Cms/General/d/3330/6977238dba1448c8884c84e4195b35c4.jpg",
          name: "Rabitz Studios",
          title: "Nigeria’s ‘Incredible Kids’ dance to turn their lives around",
          smallImg: "/images/aud1.jpeg",
          by: "Karim",
          desc: "As a disabled child growing up in Nigeria, Joshua Anum did not see internet stardom in his future. He and his eight siblings, abandoned by their father, barely had enough to eat.",
          longerDesc: `As a disabled child growing up in Nigeria, Joshua Anum did not see internet stardom in his future. He and his eight siblings, abandoned by their father, barely had enough to eat.

          Now the 15-year-old, who lost his left arm at age five after falling out of a tree, is part of a dance group called “The Incredible Kids” that has a growing Instagram following and a packed performance schedule.

          In one of their most popular videos, with 55 000 views, the six children dance in a yard with palm trees behind them. Led by a five-year-old girl, they do fast-paced routines to popular Nigerian songs.

          The children live with dancer Maliki Emmanuel, the group’s founder, on the outskirts of Nigeria’s capital Abuja. Most came from difficult family situations and found refuge with him.

          On a recent afternoon, the children gathered around Emmanuel as he sat in an armchair in their living room, watching music videos to get ideas for new routines.
          “Before I came here I used to go to parties, I used to fight anywhere I went and I was not going to school,” said Joshua. “Since coming here I have started school and I read and dance.”

          The group has performed in Abuja and Lagos, and as their fame grows Emmanuel said he hopes their numbers will too.

          “When we have created a brand … then we can recruit more kids, kids that are on the street … that love dance,” he said. “I can teach them then we will bring them to the crew.”

          The proceeds from performances cover school fees for Joshua and the other dancers.

          Joshua’s mother, Vera Anum, said she despaired when his arm had to be amputated, but was now proud of his success.

          “Everybody thought … he will not be useful in life. Our people at home said he is finished because somebody whose hand has been amputated from childhood, what can he do?” she said.

          “See him today, at least the whole world is seeing him, watching him how he is performing.”



          `,
          duration: "10 Mins Read",
        },

        {
          id: 2,
          posterImg:
            "https://afromambo.com/wp-content/uploads/2022/05/20220504_083057.jpg",
          name: "music",
          title:
            "Pastor sues Kanye West for allegedly using his sermon on ‘Donda’ track ‘Come to Life’ without permission",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "Kanye West is getting dragged to court over one of his songs on “Donda” … because a pastor in Texas claims Yeezy sampled his sermon without his permission.Ye is being sued by Bishop David Paul Moten, who claims Kanye filled out the song “Come To Life” with audio of Moten’s own religious speech.",
          longerDesc: `Kanye West is getting dragged to court over one of his songs on “Donda” … because a pastor in Texas claims Yeezy sampled his sermon without his permission.

          Ye is being sued by Bishop David Paul Moten, who claims Kanye filled out the song “Come To Life” with audio of Moten’s own religious speech. In the document, obtained by TMZ, Moten claims his sermon is used for 70 seconds of the 5-minute, 10-second track … which is more than 20% of the song. Moten says his voice and sermon are used in the song intro and looped throughout the song … and he says it’s the latest example of Kanye and the music industry “willfully and egregiously sampling sound recordings of others without consent or permission.”

          The pastor is also suing UMG Recordings, Def Jam Recordings and G.O.O.D Music and he’s going after all of them for damages.

          `,
          duration: "10 Mins Read",
        },

        {
          id: 3,
          posterImg:
            "https://www.thesun.co.uk/wp-content/uploads/2022/04/NINTCHDBPICT000722643054-1.jpg",
          name: "Nollywood",
          title: "Ed Sheeran cancels one of three Sunderland live shows",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "Grammy award-winning singer Ed Sheeran has cancelled one of his three live summer shows at Sunderland’s Stadium of Light. The concert scheduled for Thursday, June 2nd, was cancelled due to an “unforeseen scheduling conflict”, the venue said. According to a spokesman for the stadium, ticket holders will have to attend either the Friday or Saturday gigs, which would take place as scheduled.",
          longerDesc: `Grammy award-winning singer Ed Sheeran has cancelled one of his three live summer shows at Sunderland’s Stadium of Light. The concert scheduled for Thursday, June 2nd, was cancelled due to an “unforeseen scheduling conflict”, the venue said. According to a spokesman for the stadium, ticket holders will have to attend either the Friday or Saturday gigs, which would take place as scheduled. The statement in the email reads: “We regrettably must inform you that due to a scheduling conflict, the show at Sunderland’s Stadium of Light on Thursday, June 2nd is unable to take place. We’re still very excited for the Friday and Saturday gigs.” Ticket holders affected are being offered tickets for either the Friday or the Saturday or a refund.” However, no further details have been given regarding the show’s cancellation.

          After the Sunderland shows, Ed Sheeran will lead a musical tribute in the finale of the Queen’s Platinum Jubilee celebrations on the following Sunday, June 5th.

          Ed Sheeran is on tour around the UK and the Republic of Ireland before moving his show to mainland Europe and heading to the USA, New Zealand and Australia.

          While no other events have been listed for June 2nd, fans of the singer have taken to Twitter to express their disappointment at the cancellation.`,
          duration: "10 Mins Read",
        },

        {
          id: 4,
          posterImg:
            "data:image/jpeg;base64,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",
          name: "Rabitz Studios",
          title: "YouTube suspends Diamond Platnumz account",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "YouTube has suspended musician Diamond Platnumz’s account. The American-owned social media platform announced the account, which has about 7 million subscribers, was suspended for violating Community Guidelines. Up until the suspension, Diamond had 174 videos and millions of views. The account had also raked in millions of shillings in payments through views and royalties. Born Naseeb Abdul Juma, Diamond’s YouTube channel was among the most popular channels in Africa.",
          longerDesc: `YouTube has suspended musician Diamond Platnumz’s account.

          The American-owned social media platform announced the account, which has about 7 million subscribers, was suspended for violating Community Guidelines.

          Up until the suspension, Diamond had 174 videos and millions of views.

          The account had also raked in millions of shillings in payments through views and royalties.

          Born Naseeb Abdul Juma, Diamond’s YouTube channel was among the most popular channels in Africa. Known for his Swahili love songs, Diamond used to market his songs and brand through the channel. Having released his ‘First of All’ album barely a month ago, the boy from Tandale is considered influential among his fans.

            Over the years, Diamond has maintained a steady audience having released his first album in 2010.

            Acknowledged and celebrated through the numerous awards he has received, Diamond tops as a businessman having a radio and television station.

            In the 2021 list of African artists whose YouTube pages have the most views Diamond became number three.

            The Bongo star, known for hits such as Naanzaje and Waah which he sang alongside Congolese maestro Koffi Olomide, has also attracted controversy, and especially for his inability to sustain a romantic relationship.`,
          duration: "10 Mins Read",
        },

        {
          id: 5,
          posterImg:
            "data:image/jpeg;base64,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",
          name: "Rabitz Studios",
          title: "Justin Bieber sued for copyright infringement",
          smallImg: "/images/aud1.jpeg",

          by: "Karim",
          desc: "Justin Bieber and Dan + Shay have been sued for copyright infringement over their single 10,000 Hours.The pop singer and country music duo were sued by International Manufacturing Concepts, Melomega music and Sound Gems over an allegation that they “stole the core portion”, which includes the song’s chorus, verse and hook from the 1973 song The First Time Baby Is A Holiday, originally written by Palmer Rakes and Frank Fioravanti.",
          longerDesc: `Justin Bieber and Dan + Shay have been sued for copyright infringement over their single 10,000 Hours.The pop singer and country music duo were sued by International Manufacturing Concepts, Melomega music and Sound Gems over an allegation that they “stole the core portion”, which includes the song’s chorus, verse and hook from the 1973 song The First Time Baby Is A Holiday, originally written by Palmer Rakes and Frank Fioravanti.
          The suit notes that The First Time Baby Is A Holiday song was released in 2014, about five years before 10,000 Hours dropped, and alleges there are “unmistakable similarities” between the two songs.

          The companies claiming they own the song are demanding credit on 10,000 Hours alongside monetary remuneration in damages, statutory damages, attorney fees — and an injunction preventing the song’s continuous distribution.10,000 Hours was released by Bieber and Dan + Shay in October 2019, only four days after Bieber wed wife Hailey Baldwin for the second time at a religious ceremony in South Carolina, attended by many famous friends, including Scooter Braun, who manages all three artists.

          In 2020, the song earned the singers two AMAs, an iHeartRadio Music Award and a Billboard award. In 2021, they also won a Grammy Award for best country duo/group performance for the song.

          The singers serenaded their wives in the song’s music video, and each couple paired off in their own romantic setting.

          10,000 Hours was the lead single off Dan + Shay’s 2021 studio album Good Things. “10,000 Hours” debuted at No. 4 on the Billboard Hot 100.

          However, Justin Bieber and Dan + Shay’s team are yet to address the suit.`,
          duration: "10 Mins Read",
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
      this.$router.replace("/readblog");
    },
  },
};
</script>

<style scoped>
.blog__hero {
  /* background: url("https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg")
    no-repeat center center/cover; */
  height: 65vh;
  position: relative;
}

.blog__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
