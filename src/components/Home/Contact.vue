<template>
  <section class="about bg-dark q-py-xl q-my-xl section" id="about">
    <div class="wrappe container">
      <div class="img">
        <img src="images/about.png" alt="" />
      </div>

      <div class="input">
        <h4 class="text-primary q-mb-md">Contact Us</h4>
        <p class="text-negative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          provident voluptas eaque aliquam, assumenda unde quos! Debitis facere
          pariatur iste!
        </p>

        <div class="inputs">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Phone Number" />
          <select aria-placeholder="Subjects">
            <option value="">Hello</option>
            <option value="">Hello</option>
            <option value="">Hello</option>
          </select>
          <textarea
            cols="30"
            rows="8"
            placeholder="Additional Information"
          ></textarea>

          <q-btn class="bg-primary btn text-negative q-px-xl q-py-md"
            >Create Reservation</q-btn
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrappe {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.btn {
  width: 100%;
  border-radius: 5px;
}
.input input,
select,
textarea {
  width: 100%;
  border: none;
  padding: 1.3rem;
  background: #ffffff;
  color: #878787;

  border: 1px solid #d1d5cc;

  border-radius: 5px;
  margin: 16px 0px;
}
.input input:focus,
select:focus,
textarea:focus {
  outline: none;
}

.img {
  position: relative;
}
.img img {
  position: relative;

  /* transform: translateX(-25%); */
}
.img::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70%;
  background: #9d1e81;
  top: 25%;
}
</style>
