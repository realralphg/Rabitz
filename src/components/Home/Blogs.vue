<template>
  <div class="h q-pa-lg q-pb-lg container text-center">
    <div class="det q-my-lg">
      <h2 class="text-primary text-weight-bold text-center">Featured Blogs</h2>
      <p class="text-dark text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        beatae!
      </p>
    </div>
    <div class="container-g">
      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio" class="vertical">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" class="horizontal">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
        <!-- <img src="/images/babo11.jpg" /> -->
      </a>

      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio" class="big">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio" class="vertical">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio" class="horizontal">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <a href="" data-lightbox="homePortfolio">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
        />
      </a>

      <!-- <a href="" data-lightbox="homePortfolio" class="big">
      <img src="/images/boss1.jpg" />
    </a> -->

      <!-- <a href="" data-lightbox="homePortfolio">
      <img src="/images/boss2.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/boss2.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="center">
      <img src="/images/boss2.jpg" />
    </a> -->
    </div>
    <div class="btn q-my-lg text-center">
      <q-btn class="bg-primary q-px-xl q-py-md text-negative"
        ><i class="fas q-mr-lg fa-plus"></i> View More</q-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-g > a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  transition: all 0.5s ease-in-out;
}
.container-g > a:hover {
  transform: scale(1.1);
}

.container-g > a > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 2px 16px var(--shadow);
}

.container-g {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
}

.horizontal {
  grid-column: span 2;
  grid-row: span 2;
}

.horizontal {
  grid-column: span 2;
  grid-row: span 1;
}
.vertical {
  grid-row: span 2;
  grid-column: span 2;
  /* grid-row: span 3; */
}
.center {
  grid-column: span 3;
  /* grid-row: span 3; */
}

.big {
  grid-column: span 3;
  grid-row: span 2;
}

@media (max-width: 500px) {
  .horizontal {
    grid-column: span 1;
    grid-row: span 1;
  }

  .horizontal {
    grid-column: span 1;
    grid-row: span 1;
  }
  .vertical {
    grid-row: span 1;
    grid-column: span 1;
    /* grid-row: span 3; */
  }
  .center {
    grid-column: span 1;
    /* grid-row: span 3; */
  }

  .big {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
