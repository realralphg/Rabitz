<template>
  <section class="services" id="services">
    <div class="services-wrap container">
      <div class="det q-pa-md">
        <h4>Our Services</h4>
        <p class="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          amet?
        </p>
      </div>

      <div class="services-cards">
        <div class="card">
          <i class="fas fa-3x text-primary fa-video"></i>

          <h4>Productions</h4>
          <ul>
            <li><i class="fas text-primary fa-square"></i> Videography</li>
            <li><i class="fas text-primary fa-square"></i> Photography</li>
            <li><i class="fas text-primary fa-square"></i> Music/Audio</li>
            <li><i class="fas text-primary fa-square"></i> Films</li>
            <li><i class="fas text-primary fa-square"></i> Jingles</li>
            <li><i class="fas text-primary fa-square"></i> Books</li>
          </ul>
          <div class="learn">
            <q-btn class="bg-primary text-negative q-px-lg q-mt-md"
              >Visit
            </q-btn>
          </div>
        </div>

        <div class="card">
          <i class="fas fa-3x text-primary fa-video"></i>

          <h4>Events</h4>
          <ul>
            <li><i class="fas text-primary fa-square"></i> Talent Hunt</li>
            <li><i class="fas text-primary fa-square"></i> Dashboard</li>
            <li>
              <i class="fas text-primary fa-square"></i> Live and Virual
              Concerts
            </li>
            <li><i class="fas text-primary fa-square"></i> Fashion</li>
            <li><i class="fas text-primary fa-square"></i> Exhibition</li>
            <li><i class="fas text-primary fa-square"></i>Sponsored Events</li>
          </ul>
          <div class="learn">
            <q-btn class="bg-primary text-negative q-px-lg q-mt-md" href=""
              >Visit
            </q-btn>
          </div>
        </div>

        <div class="card">
          <i class="fas fa-3x text-primary fa-video"></i>

          <h4>Creative Contents</h4>
          <ul>
            <li><i class="fas text-primary fa-square"></i> Documentaries</li>
            <li><i class="fas text-primary fa-square"></i> Interviews</li>
          </ul>
          <div class="learn">
            <q-btn class="bg-primary text-negative q-px-lg q-mt-md"
              >Visit
            </q-btn>
          </div>
        </div>

        <div class="card">
          <i class="fas fa-3x text-primary fa-video"></i>

          <h4>Programs</h4>
          <ul>
            <li>
              <i class="fas text-primary fa-square"></i> Training Programs
            </li>
            <li><i class="fas text-primary fa-square"></i> Outreaches</li>
            <li><i class="fas text-primary fa-square"></i> Partnerships</li>
          </ul>
          <div class="learn">
            <q-btn class="bg-primary text-center text-negative q-px-lg q-mt-md"
              >Visit
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.services .services-wrap {
  text-align: center;
}
.services .services-wrap h2 {
  position: relative;
  line-height: 26px;
  /* font-size: clamp(1rem, 2rem, 3.5rem); */
  font-size: var(--h1-font-size);
  font-style: normal;
  text-align: center;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin: 1.5rem auto;
  font-weight: 500;
  /* max-width: 200px; */
  /* color: #fff; */
}

.services .services-wrap h2::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #ff6464;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10px);
}
.services .services-wrap p.lead {
  /* line-height: 30.2px; */
  /* font-size: clamp(0.75rem, 1.2rem, 2rem); */
  font-size: var(--h3-font-size);
  font-style: normal;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 700px;
  margin: 0 auto 1rem;
}

.services .services-wrap .services-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  /* padding: 1rem; */
}
.services .services-wrap .services-cards .card {
  /* position: relative;
  left: -300px; */
  /* background-color: #e4e4e4; */
  background-color: #ffff;
  color: var(--text-color);
  padding: 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  min-height: 500px;
  min-width: 250px;
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  /* opacity: 0.25 !important; */
}

.services .services-wrap .services-cards .card:hover {
  transform: scale(1.1) !important;
}

.services .services-wrap .services-cards i {
  /* color: #ab042c; */
  margin: 0.75rem 0;
}

.services .services-wrap .services-cards h4 {
  /* margin: 0.75rem 0; */
  font-weight: 700;
  font-size: 20px;

  font-style: normal;
}
.services .services-wrap .services-cards ul {
  margin: 1rem 0;
  /* margin: 0.75rem 0; */
  font-weight: 400;
  font-style: normal;

  text-align: left;
  height: 250px;
}
</style>
