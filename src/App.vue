<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geo&family=Georama:wght@300;400;500;700;900&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;700&family=Mulish:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap");
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .min_width {
    max-width: 50% !important;
  }
}
@media (max-width: 1024px) {
  .max_width {
    max-width: 50% !important;
  }
}

/* hero */
.hold {
  background: #000;
  /* background: #d2d6e2; */
  margin-bottom: 3rem;
  height: calc(75vh - 48px);
  position: relative;
}
.hero {
  position: relative;
  /* max-width: 1300px; */
  /* padding: 2rem 0 0; */
  margin: 0 auto;
  height: 85vh;
  /* background-image: linear-gradient(180deg, hsla(0, 0%, 84%, 0), #a7aab4 90%); */
  /* background-image: linear-gradient(180deg, hsla(0, 0%, 84%, 0), #d2d6e2 90%); */
  /* background: #a7aab4; */
}

.view__btn::before {
  box-shadow: none !important;
}
.dialog_wid {
  width: 50% !important;
}
.q-dialog__inner--fullwidth > div {
  width: 70% !important;
  max-width: 100% !important;
}
/* .hold::after {
  height: 370px;
  background-image: linear-gradient(180deg, hsla(0, 0%, 84%, 0), #d2d6e2 90%);
  background-image: linear-gradient( 180deg, hsla(0, 0%, 84%, 0), #d2d6e2 77% );
  bottom: 0;
  content: "";
  height: 100px;
  left: 0;
  position: absolute;
  right: 0;
} */
.abs {
  position: absolute;
  bottom: 40%;
}
.splide__pagination {
  bottom: -5% !important;
}
@media (max-width: 700px) {
  .splide__pagination {
    bottom: -15% !important;
  }

  .splide__pagination {
    left: -50% !important;
    right: 25% !important;
  }
}
.video {
  width: 550px;
  height: 350px;
}
.q-video {
  height: 100% !important;
}

#homer {
  position: relative;
}
.hero .q-carousel {
  background-color: transparent;
  height: 600px;
}

.q-panel-parent {
  overflow: visible;
  position: relative;
}
.hero .q-carousel__slide {
  position: relative;
}
.hero .scroll {
  overflow: visible;
}
.hero .q-carousel__slide::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
}

/* .hero .q-panel > div {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
} */
/* .hero .q-carousel__navigation--bottom {
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
}
.hero .q-carousel__slide {
  background-repeat: no-repeat !important;
  background-size: contain !important;
}
.hero__carousel {
  position: relative;
}
.hero__carousel .q-carousel__control {
  position: absolute;
  z-index: 10000;
}

.hero__carousel .q-carousel__prev-arrow {
  position: absolute;
  left: -2%;
}

.hero__carousel .q-carousel__next-arrow {
  position: absolute;
  right: -2%;
}

.hero__carousel .q-carousel__control .q-btn {
  position: absolute;
  z-index: 10000;
  bottom: -25%;
}

.hero__carousel .q-carousel__control .q-btn i {
  font-size: 4.5rem;
  color: #9d1e81;
} */

.splide {
  padding: 0em !important;
}

.flexx {
  display: flex !important;
  align-items: center;
}

.splide__pagination__page.is-active {
  background: #9d1e81 !important;
  z-index: 1;
}

.splide__pagination__page.is-active {
  background: #9d1e81 !important;
  transform: scale(1.4);
  z-index: 1;
}

.q-tab-panel {
  padding-bottom: 4rem;
  overflow: hidden;
}

.body__border {
  border: 1px solid #9d1e81;
}
.dark {
  background: black !important;
}
.dark__section {
  background: black !important;
  padding: 2rem 0 0.1rem;
  margin-bottom: 2rem;
}
@media (max-width: 704px) {
  .hero__carousel .q-carousel__prev-arrow {
    position: absolute;
    left: -3%;
  }

  .hero__carousel .q-carousel__next-arrow {
    position: absolute;
    right: -3%;
  }
}
@media (max-width: 1024px) {
  .hero .q-panel > div {
    height: 100%;
    width: 100%;
  }
}

.hero .q-carousel__navigation--bottom {
  bottom: -30%;
}

.hero .q-carousel .q-carousel__thumbnail {
  margin: 2px;
  height: 150px;
  width: 200px;
  /* width: auto; */
  object-fit: contain;
  display: inline-block;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  vertical-align: middle;
  opacity: 1;
  transition: opacity 0.3s;
  background: #d2d6e2;
}

/* .q-carousel__navigation {
  background: red;
  padding: 2rem;
} */

@media (max-width: 600px) {
  .hero .q-panel > div {
    height: 100%;
    width: 100%;
  }

  .q-carousel__arrow {
    display: none;
  }
}

@media (max-width: 500px) {
  .q-carousel__slide {
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
}

@media (max-width: 600px) {
  .hero__carousel .q-carousel__control .q-btn {
    display: none;
  }
}

/* hero */

body,
html {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button,
input {
  font-family: inherit;
}

body,
html {
  height: 100%;
  scroll-behavior: smooth;
}
#page-root {
  min-height: 100%;
}
._6Zgcud2o {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
}
._1ZQ2DzIc:focus,
._3WOR0P94:focus,
._2716rq5F:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._1ZQ2DzIc:focus:not(:focus-visible),
._3WOR0P94:focus:not(:focus-visible),
._2716rq5F:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._3WOR0P94._3kMpP7da:after,
._3WOR0P94:hover:after,
._37cER8jB.w3wrzl58 ._2_UMVhrR:not(:focus):after {
  border-top: 2px solid #204ecf;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  width: 100%;
}
.CwHwCIsY {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  height: 64px;
  margin: 0 auto;
  max-width: 1272px;
  padding: 0 16px;
  position: relative;
  width: 100%;
}
@media (min-width: 1200px) {
  .CwHwCIsY:not(._2AUNzqse) {
    padding: 0 36px;
  }
}
.CwHwCIsY:focus-within {
  overflow: visible;
}
._2WQ1bk3l {
  align-items: center;
  display: flex;
  height: 64px;
  margin-right: 40px;
  min-height: 64px;
  position: relative;
}
._2hn_0aiE {
  display: none;
  list-style: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 768px) {
  ._2hn_0aiE._2j8Bi4Lq {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    width: 100%;
  }
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
  margin-bottom: 10px;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
._2V8cVnTd {
  display: none;
  height: 100%;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
._3xz6sTpw ._2V8cVnTd {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  width: 100%;
}
._3HIyy71x + ._3HIyy71x {
  margin-left: 16px;
}
._3WOR0P94 {
  align-items: center;
  color: #262d3d;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  position: relative;
  text-decoration: none;
}
._3WOR0P94:focus {
  align-self: center;
  max-height: 56px;
  outline-color: #204ecf;
  z-index: 1;
}
._3xz6sTpw ._3WOR0P94 {
  border-bottom: 1px solid #ebeced;
  font-size: 16px;
  height: 46px;
  margin-left: 0;
  width: 100%;
}
._3xz6sTpw ._3WOR0P94:after {
  display: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
._37cER8jB {
  display: flex;
}
.l_18QO0k {
  content: "";
  display: block;
  height: 10px;
  margin-left: 4px;
  margin-top: 3px;
  transform: rotate(90deg);
  transition: transform 0.2s linear;
  width: 10px;
}
._2_UMVhrR {
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
}
._2_UMVhrR:focus:after {
  margin-top: 4px;
}
._6Zgcud2o {
  background: #fff;
  border-radius: 0 0 4px 4px;
  display: none;
  max-width: 380px;
  padding: 16px;
  position: absolute;
  top: 100%;
  width: 380px;
}
._1ZQ2DzIc {
  color: #455065;
  display: block;
  padding: 8px;
}
._1ZQ2DzIc:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1ZQ2DzIc:hover {
  color: #204ecf;
}
._3JWeZNpb {
  margin-left: auto;
}
._2716rq5F {
  width: 100%;
}
._2716rq5F:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._2716rq5F.OPGINcUC {
  font-weight: 400;
  padding-left: 0;
  padding-right: 0;
}
._2zORpOH1 {
  margin: 0 0 0 auto;
  position: absolute;
  right: 16px;
  top: 15px;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2zORpOH1 {
    display: none;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2zORpOH1 {
    display: none;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2zORpOH1 {
    display: none;
  }
}
._1g37weM4 {
  display: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
.CwHwCIsY._3xz6sTpw {
  align-items: flex-start;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
.CwHwCIsY._3xz6sTpw ._2hn_0aiE {
  display: block;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
.CwHwCIsY._3xz6sTpw ._2hn_0aiE._2j8Bi4Lq {
  display: none;
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
  flex-grow: 1;
}
@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
    margin-left: 16px;
  }
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn:first-child {
  margin-left: 0;
}
@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb {
    flex-direction: row;
  }
}
.CwHwCIsY._3xz6sTpw .irsyFUit {
  overflow-y: auto;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw .irsyFUit:focus-within {
  overflow-y: visible;
}
.CwHwCIsY._3xz6sTpw ._2zORpOH1 {
  display: block;
}
.CwHwCIsY._3xz6sTpw ._3HIyy71x {
  margin-left: 0;
}
.CwHwCIsY._3xz6sTpw ._37cER8jB {
  border-bottom: 1px solid #ebeced;
  display: block;
  flex-basis: 46px;
  overflow: hidden;
  transition: flex-basis 0.3s ease-in-out;
}
.CwHwCIsY._3xz6sTpw ._37cER8jB._34JlE2Hu {
  flex-basis: auto;
  transition: none;
}
.CwHwCIsY._3xz6sTpw ._2_UMVhrR {
  border-bottom: none;
  height: 46px;
  width: 100%;
}
@media (max-width: 767px) {
  .CwHwCIsY._3xz6sTpw ._2_UMVhrR {
    justify-content: space-between;
  }
}
.CwHwCIsY._3xz6sTpw ._6Zgcud2o {
  box-shadow: none;
  display: block;
  max-width: none;
  padding: 0 0 24px;
  position: static;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw ._1ZQ2DzIc {
  padding-left: 0;
}
._37cER8jB.w3wrzl58 ._6Zgcud2o {
  display: block;
}
._37cER8jB.w3wrzl58 .l_18QO0k {
  transform: rotate(-90deg);
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse)
    ._2V8cVnTd
    ._37cER8jB.w3wrzl58
    ._2_UMVhrR {
    opacity: 1;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}
._3xz6sTpw ._37cER8jB.w3wrzl58 ._2_UMVhrR {
  font-weight: 600;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf),
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3l7e8OkS,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3wva0pDs,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) .OPGINcUC {
  color: #fff;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._1TkDKt3Q {
  background: #fff;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3WOR0P94 {
  color: #fff;
}
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._3WOR0P94:hover:after,
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._37cER8jB.w3wrzl58
  ._2_UMVhrR:after {
  border-top-color: #fff;
}
.ap5SohHH {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  height: 64px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
.ap5SohHH:focus-within {
  overflow: visible;
}
.ap5SohHH._2ExEwWJ- {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
}
.GSsufXWr {
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 24px;
}
.GSsufXWr > span {
  background-color: currentColor;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin: 6px 0;
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
}
.GSsufXWr._2K4zc3od > span:nth-child(2n) {
  margin-top: -9px;
  transform: rotate(-45deg);
}
.GSsufXWr._2K4zc3od > span:first-child {
  margin-top: 16px;
  transform: rotate(45deg);
}
.GSsufXWr._2K4zc3od > span:last-child {
  opacity: 0;
}
._1bcYCljm {
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}
._1bcYCljm + ._1bcYCljm {
  margin-left: 8px;
}
._3qSF9CYT {
  font-size: 12px;
  line-height: 16px;
  padding: 3px 16px;
}
._3McSaz1R {
  font-size: 14px;
  line-height: 20px;
  padding: 7px 24px;
}
._3n8NuEgU {
  font-size: 16px;
  line-height: 24px;
  padding: 13px 48px;
}
@media (max-width: 767px) {
  ._3n8NuEgU {
    padding-left: 32px;
    padding-right: 32px;
  }
}
._344Tj4__ {
  font-size: 20px;
  line-height: 28px;
  padding: 11px 64px;
}
@media (max-width: 767px) {
  ._344Tj4__ {
    padding-left: 32px;
    padding-right: 32px;
  }
}
._2u-I7BW0 {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._2u-I7BW0.mt5Y6x-K,
._2u-I7BW0:hover {
  background: #05947c;
  border-color: #05947c;
  color: #fff;
}
._2u-I7BW0._3OgVEeN8,
._2u-I7BW0:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}
._1G_ocH1a {
  background: #204ecf;
  border-color: #204ecf;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._1G_ocH1a.mt5Y6x-K,
._1G_ocH1a:hover {
  background: #183a9e;
  border-color: #183a9e;
  color: #fff;
}
._1G_ocH1a._3OgVEeN8,
._1G_ocH1a:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}
._3ZEWDKfF {
  background: transparent;
  border-color: #00cc83;
  color: #00cc83;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._3ZEWDKfF.mt5Y6x-K,
._3ZEWDKfF:hover {
  background: #00cc83;
  border-color: #00cc83;
  color: #fff;
}
._3ZEWDKfF._3OgVEeN8,
._3ZEWDKfF:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._2AywhfSi {
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._2AywhfSi.mt5Y6x-K,
._2AywhfSi:hover {
  background: hsla(0, 0%, 100%, 0.05);
  border-color: #fff;
  color: #fff;
}
._2AywhfSi._3OgVEeN8,
._2AywhfSi:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._7hPQ_Wwr {
  background: #fff;
  border-color: #d8d9dc;
  color: #204ecf;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._7hPQ_Wwr.mt5Y6x-K,
._7hPQ_Wwr:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}
._7hPQ_Wwr._3OgVEeN8,
._7hPQ_Wwr:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._1Wpamv8F {
  background: #fff;
  border-color: #d8d9dc;
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._1Wpamv8F.mt5Y6x-K,
._1Wpamv8F:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}
._1Wpamv8F._3OgVEeN8,
._1Wpamv8F:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
.Mw_6M_G0 {
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
.Mw_6M_G0,
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  background: transparent;
  border-color: transparent;
}
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  color: #183a9e;
}
.Mw_6M_G0._3OgVEeN8,
.Mw_6M_G0:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._27w5BS2q:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._27w5BS2q:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._58Zij-Oo {
  align-items: baseline;
  color: #455065;
  display: flex;
  flex-shrink: 0;
  font-size: 29px;
  line-height: 29px;
  max-width: 100%;
}
._58Zij-Oo img,
._58Zij-Oo svg {
  display: inline-block;
  vertical-align: -17.5%;
}
._58Zij-Oo svg {
  transform: translateY(0.5px);
}
._27w5BS2q {
  align-items: baseline;
  color: inherit;
  display: flex;
}
._27w5BS2q:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1YO-qTkC {
  color: #204ecf;
  line-height: 32px;
}
._1YO-qTkC,
.JZBjwybU {
  height: 32px;
}
._1SDD_TaP {
  height: 29px;
  margin: 0 9px 0 1px;
}
._1SDD_TaP:not([class*="hidden"]) + ._2yx3tQoS > span {
  color: inherit;
}
._2yx3tQoS {
  margin: 0 0 0 -6px;
}
._2yx3tQoS span {
  color: #204ecf;
  font-size: 13px;
  line-height: 13px;
  vertical-align: -26%;
}
._1KvUc_3R {
  color: #262d3d;
  font-size: 30px;
  letter-spacing: -1px;
  margin: 0 0 0 8px;
  white-space: nowrap;
}
._1lvdjAD0 {
  align-items: baseline;
  display: flex;
  margin-left: 16px;
  min-height: 32px;
}
.cpfvvVen:before {
  border-left: 1px solid #c4c6ca;
  content: "";
  display: inline-block;
  height: 32px;
  margin-right: 16px;
  vertical-align: -20%;
}
._3eQ_EZmB {
  color: #455065;
  display: inline-block;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 19px;
}
._3eQ_EZmB span {
  font-size: 13px;
  line-height: 13px;
  vertical-align: -30%;
}
._2FUhxoSV ._1KvUc_3R,
._2FUhxoSV ._1YO-qTkC,
._2FUhxoSV ._2yx3tQoS > span,
._2FUhxoSV ._3eQ_EZmB,
._2FUhxoSV._58Zij-Oo {
  color: inherit;
}
._1ZjdOUzr {
  line-height: 35px;
}
._1ZjdOUzr ._1YO-qTkC,
._1ZjdOUzr .JZBjwybU {
  height: 37px;
}
._1ZjdOUzr ._1SDD_TaP {
  height: 35px;
}
._1ZjdOUzr ._2yx3tQoS span {
  font-size: 15px;
}
._1ZjdOUzr ._1KvUc_3R {
  font-size: 36px;
  letter-spacing: -1.2px;
  margin-left: 9px;
}
._3Qr50Vve {
  line-height: 22px;
}
._3Qr50Vve ._1YO-qTkC,
._3Qr50Vve .JZBjwybU {
  height: 25px;
}
._3Qr50Vve ._1SDD_TaP {
  height: 22px;
  margin-right: 7px;
}
._3Qr50Vve ._2yx3tQoS {
  margin: 0 0 0 -5px;
}
._3Qr50Vve ._2yx3tQoS span {
  font-size: 10px;
  line-height: 11px;
}
._3Qr50Vve ._1KvUc_3R {
  font-size: 24px;
  letter-spacing: -0.8px;
  margin-left: 6px;
}
._3Qr50Vve svg {
  transform: none;
}
.A1tn-zbg {
  line-height: 17px;
}
.A1tn-zbg ._1YO-qTkC,
.A1tn-zbg .JZBjwybU {
  height: 21px;
}
.A1tn-zbg ._1SDD_TaP {
  height: 18px;
  margin-right: 4px;
}
.A1tn-zbg ._2yx3tQoS {
  margin: 0 0 0 -3px;
}
.A1tn-zbg ._2yx3tQoS span {
  font-size: 8px;
  line-height: 10px;
}
.A1tn-zbg ._1KvUc_3R {
  font-size: 18px;
  letter-spacing: -0.6px;
  margin-left: 4px;
}
._27Qp7-0j {
  display: none;
}
@media (min-width: 768px) {
  ._2bE-MpfW {
    display: none;
  }
}
@media (min-width: 1024px) {
  ._1qWPArs6 {
    display: none;
  }
}
@media (min-width: 1200px) {
  ._3gIwdeKZ {
    display: none;
  }
}
@media (min-width: 768px) {
  .aSm5Eu45 {
    display: unset;
  }
  .aSm5Eu45 + ._2yx3tQoS > span {
    color: inherit;
  }
}
@media (min-width: 1024px) {
  .sQf4YFbG {
    display: unset;
  }
  .sQf4YFbG + ._2yx3tQoS > span {
    color: inherit;
  }
}
@media (min-width: 1200px) {
  .Pr_2B7aa {
    display: unset;
  }
  .Pr_2B7aa + ._2yx3tQoS > span {
    color: inherit;
  }
}
._1gM6aSr1,
._1gM6aSr1 ._1lvdjAD0,
._1gM6aSr1 ._27w5BS2q {
  align-items: center;
}
._1gM6aSr1 ._3eQ_EZmB {
  display: block;
  padding-top: 4px;
}
._1gM6aSr1 ._2yx3tQoS span {
  vertical-align: -40%;
}
@media (min-width: 768px) {
  ._3oXj0__2,
  ._3oXj0__2 ._1lvdjAD0,
  ._3oXj0__2 ._27w5BS2q {
    align-items: center;
  }
  ._3oXj0__2 ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  ._3oXj0__2 ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 1024px) {
  .N3vjTBqY,
  .N3vjTBqY ._1lvdjAD0,
  .N3vjTBqY ._27w5BS2q {
    align-items: center;
  }
  .N3vjTBqY ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  .N3vjTBqY ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 1200px) {
  ._3a2ad5pt,
  ._3a2ad5pt ._1lvdjAD0,
  ._3a2ad5pt ._27w5BS2q {
    align-items: center;
  }
  ._3a2ad5pt ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  ._3a2ad5pt ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 768px) {
  ._1YE9rzs1,
  ._1YE9rzs1 ._1lvdjAD0,
  ._1YE9rzs1 ._27w5BS2q {
    align-items: baseline;
  }
  ._1YE9rzs1 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._1YE9rzs1 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
@media (min-width: 1024px) {
  ._3ofkGqyM,
  ._3ofkGqyM ._1lvdjAD0,
  ._3ofkGqyM ._27w5BS2q {
    align-items: baseline;
  }
  ._3ofkGqyM ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._3ofkGqyM ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
@media (min-width: 1200px) {
  ._2IToekk2,
  ._2IToekk2 ._1lvdjAD0,
  ._2IToekk2 ._27w5BS2q {
    align-items: baseline;
  }
  ._2IToekk2 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._2IToekk2 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
._2EepOHy1 img,
._2EepOHy1 svg {
  height: 100%;
  width: auto;
}
.xVo_5L7k {
  color: inherit;
}
.xVo_5L7k svg path {
  fill: currentColor;
}
._3WYSOFPZ {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
._3WYSOFPZ h2 {
  color: #262d3d;
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
  margin: 0 0 32px;
}
._3WYSOFPZ h3 {
  color: #262d3d;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 32px 0 24px;
}
._3WYSOFPZ h4 {
  margin: 8px 0;
}
._3WYSOFPZ ol {
  list-style: decimal;
}
._3WYSOFPZ ul {
  list-style: disc outside;
}
._3WYSOFPZ li {
  padding-left: 8px;
}
._3WYSOFPZ ol,
._3WYSOFPZ ul {
  margin-left: 20px;
}
._3WYSOFPZ ol:not(:last-child),
._3WYSOFPZ ol li:not(:last-child),
._3WYSOFPZ p:not(:last-child),
._3WYSOFPZ ul:not(:last-child),
._3WYSOFPZ ul li:not(:last-child) {
  margin-bottom: 16px;
}
._3WYSOFPZ a {
  color: #204ecf;
}
._3WYSOFPZ a:hover {
  text-decoration: underline;
  text-underline-position: under;
}
._3WYSOFPZ hr {
  background-color: #ebeced;
  border: none;
  height: 1px;
  margin: 32px 0;
}
._3WYSOFPZ img {
  max-width: 100%;
}
._3Wv9utNN a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._3Wv9utNN a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._7QdK4zyR {
  align-items: center;
  background: rgba(38, 45, 61, 0.95);
  bottom: -1000px;
  display: flex;
  font-weight: 100;
  justify-content: space-between;
  left: 0;
  opacity: 0;
  padding: 20px 15px;
  position: fixed;
  right: 0;
  transition-delay: 0s, 0.3s;
  transition-duration: 0.3s, 0.01s;
  transition-property: opacity, bottom;
  z-index: 100;
}
@media (min-width: 1024px) {
  ._7QdK4zyR {
    padding: 20px 50px;
  }
}
@media (max-width: 767px) {
  ._2_Bs6D8F {
    flex-direction: column;
    text-align: center;
  }
}
._1X5ZYp4i {
  bottom: 0;
  opacity: 1;
  transition-delay: 0s;
}
._3jl4op_D {
  position: static;
}
._3Wv9utNN {
  font-size: 16px;
  line-height: 20px;
}
._1MIke5bW ._3Wv9utNN {
  color: #c4c6ca;
}
._2_Bs6D8F ._3Wv9utNN {
  color: #fff;
}
._3Wv9utNN a {
  text-decoration: underline;
}
._3Wv9utNN a:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1MIke5bW ._3Wv9utNN a {
  color: #c4c6ca;
}
._2_Bs6D8F ._3Wv9utNN a {
  color: #00cc83;
}
._1MIke5bW ._3Wv9utNN a:hover {
  color: #fff;
}
._2_Bs6D8F ._3Wv9utNN a:hover {
  color: #00e693;
}
._1WV0LMf5 {
  margin-left: 24px;
}
@media (max-width: 767px) {
  ._2_Bs6D8F ._1WV0LMf5 {
    margin: 20px 0 0;
  }
}
.FjKAy-Wz {
  white-space: nowrap;
}
._3LOPUP7d {
  margin-bottom: 96px;
  /* background: #000000; */
  /* padding: 3rem 0; */
}
._3DOEOvRI {
  margin-bottom: 64px;
}
._1YibmBYc:last-child:not(._1_bvS4sL),
._11ZqUWmz {
  margin-bottom: 0;
}
._2_32njdU {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  width: 1372px;
}
@media (min-width: 1024px) {
  ._2_32njdU {
    padding-left: 36px;
    padding-right: 36px;
  }
}
._1ssL7Y2W a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._1ssL7Y2W a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._1ssL7Y2W {
  color: inherit;
}
._1ssL7Y2W a {
  height: 1px;
  overflow: hidden;
  position: absolute;
  text-decoration: none;
  text-transform: capitalize;
  top: -3em;
  width: 1px;
}
._1ssL7Y2W a:focus {
  clip: auto;
  background: #204ecf;
  color: #fff;
  height: auto;
  left: 5px;
  outline-color: #204ecf;
  padding: 8px 16px;
  top: 5px;
  width: auto;
  z-index: 11;
}
.F4RPkxoc {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  /* width: 100%; */
}
@media (min-width: 426px) {
  .F4RPkxoc {
    display: block;
    width: auto;
  }
}
._1Nb4CnrH:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._1Nb4CnrH:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
@-webkit-keyframes _1DQfRIu3 {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _1DQfRIu3 {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
._1PM_j4LM {
  display: block;
  height: 0;
  max-width: 100%;
  padding-top: 45%;
  position: relative;
  text-align: right;
}
@media (max-width: 768px) {
  ._1PM_j4LM {
    padding-top: 65%;
  }
}
@media (min-width: 1200px) {
  ._1PM_j4LM {
    padding-top: 40%;
  }
}
._1UVB9Z86 {
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
}
._1UVB9Z86:focus-within {
  overflow: visible;
}
@media (min-width: 1024px) {
  ._1UVB9Z86 {
    justify-content: flex-end;
    text-align: right;
  }
}
._1UVB9Z86:after {
  background-image: linear-gradient(180deg, hsla(0, 0%, 84%, 0), #d2d6e2 77%);
  bottom: 0;
  content: " ";
  height: 100px;
  left: 0;
  position: absolute;
  right: 0;
}
@media (min-width: 540px) {
  ._1UVB9Z86:after {
    height: 170px;
  }
}
@media (min-width: 1024px) {
  ._1UVB9Z86:after {
    background-image: linear-gradient(180deg, hsla(0, 0%, 84%, 0), #d2d6e2 90%);
  }
}
._1UVB9Z86 img {
  aspect-ratio: 4/3;
  max-height: 100%;
  max-width: 100%;
}
@media (min-width: 1024px) {
  ._1UVB9Z86 img {
    margin-right: 100px;
  }
}
._1Nb4CnrH {
  -webkit-animation: _2LDI_x0K 0.5s ease-in-out;
  animation: _2LDI_x0K 0.5s ease-in-out;
  background: #f6f8fc;
  box-sizing: border-box;
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px));
  display: none;
  font-size: 10px;
  overflow: hidden;
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: calc(50% - 100px);
  transform-origin: top left;
  width: 236px;
  z-index: 2;
}
._1Nb4CnrH:focus {
  -webkit-clip-path: none;
  clip-path: none;
  outline-color: #204ecf;
  overflow: visible;
  z-index: 1;
}
@media (min-width: 1024px) {
  ._1Nb4CnrH {
    display: block;
  }
}
@media (min-width: 1340px) {
  ._1Nb4CnrH {
    right: -20px;
  }
}
.raWFCFWB {
  -webkit-animation: _1DQfRIu3 2s ease-out;
  animation: _1DQfRIu3 2s ease-out;
  background: url(https://frontier-assets.toptal.com/540d3691c72f2e77fab9.png)
    no-repeat 0 0/194px 86px;
  height: 86px;
  margin-bottom: 8px;
  position: relative;
  width: 194px;
}
._2vcJaSnH {
  background: #204ecf;
  border-radius: 100%;
  height: 5px;
  position: absolute;
  transform: translate(-50%);
  width: 5px;
}
._2vcJaSnH:before {
  -webkit-animation: _1zeaXzVJ 2s linear infinite;
  animation: _1zeaXzVJ 2s linear infinite;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px #204ecf;
  content: "";
  height: 9px;
  left: -2px;
  position: absolute;
  top: -2px;
  width: 9px;
}
._2Cr0jko1 {
  color: #204ecf;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  margin: 0 0 6px;
  text-decoration: none;
}
.jocRHbnl {
  align-items: center;
  color: #455065;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 12px;
  opacity: 0.7;
}
.jocRHbnl:before {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 16px auto;
  content: "";
  display: block;
  height: 16px;
  margin-right: 6px;
  width: 16px;
}
.jocRHbnl._3of0FdA3:before {
  background-image: url(https://frontier-assets.toptal.com/2893fcbfabb256f70ba98679124d3200.svg);
}
.jocRHbnl._24gPIyY2:before {
  background-image: url(https://frontier-assets.toptal.com/6d9ab211e1c85085294778574085b916.svg);
}
.jocRHbnl._10h4bjOi:before {
  background-image: url(https://frontier-assets.toptal.com/e4e1a52b1e2b7cff5c248d87d1bae3c4.svg);
}
.jocRHbnl._2SEq8t9A:before,
.jocRHbnl.XIjlKsxL:before {
  background-image: url(https://frontier-assets.toptal.com/f413eed891b8f46db77aca04ce6953c4.svg);
}
._29VIJYMv {
  color: #455065;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
}
@-webkit-keyframes _1zeaXzVJ {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }
  70% {
    opacity: 0;
    transform: scale(2.5);
  }
  to {
    opacity: 0;
  }
}
@keyframes _1zeaXzVJ {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }
  70% {
    opacity: 0;
    transform: scale(2.5);
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes _2LDI_x0K {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes _2LDI_x0K {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.GD313NS8:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
.GD313NS8:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
.GD313NS8 {
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  line-height: normal;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  width: auto;
}
.GD313NS8::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.GD313NS8 {
  /* background: url(https://frontier-assets.toptal.com/8e6c14b98b2fb879debd9da11bb7ac0b.svg)
    no-repeat; */

  color: #fff;
  cursor: pointer;
  font-family: Proxima Nova, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 38px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  /* padding-left: 54px; */
  transition: opacity 0.2s;
}

.GD313NS8::before {
  content: "\f144";
  font-family: "FontAwesome";
  color: #9d1e81;
  font-size: 2rem;
}

.GD313NS8:focus {
  outline-color: #204ecf;
  z-index: 4;
}
.GD313NS8:hover {
  opacity: 0.7;
}
.GD313NS8:focus {
  transition: none;
}
._1OOlBGn9 {
  height: inherit;
  position: relative;
}
._2TGXb7wF {
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease;
  z-index: -1;
}
._2TGXb7wF._2QdOQgFU {
  display: flex;
  opacity: 1;
  z-index: 1;
}
._2amITTdw:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._2amITTdw:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
@-webkit-keyframes _2JYQswAH {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _2JYQswAH {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
._1CPABHY2 {
  min-height: 92px;
}
._1CPABHY2._3GX3Lxnr {
  opacity: 0;
}
._1CPABHY2:focus-within {
  overflow: visible;
}
._1VyYPMhf {
  justify-content: space-evenly;
}
._1VyYPMhf,
._2amITTdw {
  align-items: center;
  display: flex;
  flex-direction: row;
}
._2amITTdw {
  flex: 1;
  height: 92px;
  justify-content: center;
  min-width: 148px;
  opacity: 0;
  padding: 0 16px;
  position: relative;
}
._2amITTdw:focus {
  outline-color: #204ecf;
  z-index: 1;
}
@media (max-width: 767px) {
  ._2amITTdw {
    height: 80px;
  }
}
._2amITTdw,
._2amITTdw * {
  transition: 0.2s;
}
._2amITTdw:focus {
  transition: none;
}
._3LF-kzsO ._2amITTdw {
  -webkit-animation: _2JYQswAH 2s forwards;
  animation: _2JYQswAH 2s forwards;
}
._29fwj9AM ._2amITTdw {
  opacity: 1;
}
.wOPq9JTO {
  display: inline-flex;
}
.wOPq9JTO path {
  fill: #84888e;
}
._3kQx5a7C .wOPq9JTO path {
  fill: #c4c6ca;
}
._3VvCA52f {
  align-items: center;
  color: #204ecf;
  display: flex;
  flex-direction: row;
  font-size: 9px;
  font-weight: 400;
  justify-content: space-around;
  line-height: 9px;
  margin-top: 22px;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  white-space: nowrap;
}
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  ._3VvCA52f {
    left: 20%;
  }
}
._3kQx5a7C ._3VvCA52f {
  color: #edf0f8;
}
._3VvCA52f:before {
  background: url(https://frontier-assets.toptal.com/0cee6865f29c3233ae5e6843cd86a25a.svg)
    no-repeat;
  content: "";
  height: 11px;
  left: -14px;
  opacity: 0;
  position: absolute;
  top: -1px;
  width: 11px;
}
@media (min-width: 768px) {
  ._1iX_1d1k:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
._1iX_1d1k:hover ._3VvCA52f {
  margin-left: 8px;
}
._1iX_1d1k:hover ._3VvCA52f:before {
  opacity: 1;
}
._1iX_1d1k:hover .wOPq9JTO path {
  fill: #000;
}
._1iX_1d1k:hover._3kQx5a7C ._3VvCA52f {
  color: #fff;
}
._1iX_1d1k:hover._3kQx5a7C .wOPq9JTO path {
  fill: #fff;
}
.U5_JdGVY {
  background-color: #f6f8fb;
  color: #455065;
  max-width: 100%;
}
._2vQhGXeI {
  background: transparent;
  color: #fff;
}
.KN3Bqp5f {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto !important;
  overflow: hidden;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
.KN3Bqp5f:focus-within {
  overflow: visible;
}
@media (max-width: 767px) {
  .KN3Bqp5f {
    align-items: center;
    flex-direction: column;
  }
}
._1eAmcXxe {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 1.57px;
  margin-bottom: 0;
  min-width: 220px;
  opacity: 0.7;
  text-align: left;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  ._1eAmcXxe {
    width: 220px;
  }
}
@media (max-width: 767px) {
  ._1eAmcXxe {
    padding: 24px 0 4px;
    text-align: center;
    width: 100%;
  }
}
._2zZGXHsn {
  flex: 1;
  min-height: 92px;
  width: 100%;
}
@media (max-height: 400px), (max-width: 768px) {
  ._10JizEvG {
    display: none;
  }
}
._2Nig7dk2 {
  align-items: center;
  background-color: rgba(15, 37, 110, 0.7);
  bottom: 0;
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  left: 0;
  line-height: 16px;
  opacity: 0;
  /* pointer-events: none; */
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition: opacity 0.2s;
}
.is-effect-opacity {
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
}
.is-effect-blur {
  transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out;
  will-change: opacity, filter;
}
.lazyload.is-effect-opacity {
  opacity: 0;
}
.lazyload.is-effect-blur {
  filter: blur(15px);
  opacity: 0;
}
.lazyloaded.is-effect-opacity {
  opacity: 1;
}
.lazyloaded.is-effect-blur {
  filter: blur(0);
  opacity: 1;
}
._1VFtEXND {
  border-radius: 0;
  padding: 8px 0;
}
.XwLDZPC1 {
  display: none;
}
.lazyloaded + .XwLDZPC1 {
  display: block;
}
.oYfE6Xrf {
  align-items: center;
  background: #d2d6e2;
  display: flex;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  position: relative;
}
@media (min-width: 769px) {
  .oYfE6Xrf {
    height: 150px;
  }
  @supports (
    (
        -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px)
              100%, 24px 100%, 0 calc(100% - 24px))
      )
      or
      (
        clip-path:
          polygon(
            0 0,
            calc(100% + 1px) 0,
            calc(100% + 1px) 100%,
            24px 100%,
            0 calc(100% - 24px)
          )
      )
  ) {
    .oYfE6Xrf {
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
    }
    .oYfE6Xrf:after {
      content: none !important;
    }
  }
}
@media (max-width: 768px) {
  .oYfE6Xrf {
    height: 113px;
  }
  @supports (
    (
        -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px)
              100%, 16px 100%, 0 calc(100% - 16px))
      )
      or
      (
        clip-path:
          polygon(
            0 0,
            calc(100% + 1px) 0,
            calc(100% + 1px) 100%,
            16px 100%,
            0 calc(100% - 16px)
          )
      )
  ) {
    .oYfE6Xrf {
      -webkit-clip-path: polygon(
        0 0,
        calc(100% + 1px) 0,
        calc(100% + 1px) 100%,
        16px 100%,
        0 calc(100% - 16px)
      );
      clip-path: polygon(
        0 0,
        calc(100% + 1px) 0,
        calc(100% + 1px) 100%,
        16px 100%,
        0 calc(100% - 16px)
      );
    }
    .oYfE6Xrf:after {
      content: none !important;
    }
  }
}
.oYfE6Xrf .XwLDZPC1:before {
  background: no-repeat
    url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
    0 100%;
  background-size: contain;
  bottom: 14px;
  content: "";
  height: 21px;
  left: 14px;
  position: absolute;
  width: 15.75px;
  z-index: 2;
}
@media (min-width: 769px) {
  .oYfE6Xrf .XwLDZPC1:before {
    background: no-repeat
      url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
      0 100%;
    background-size: contain;
    bottom: 16px;
    content: "";
    height: 24px;
    left: 16px;
    position: absolute;
    width: 18px;
    z-index: 2;
  }
}
._13TWm89r {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
span._13TWm89r {
  display: block;
  padding-bottom: 75%;
}
._25TfQgrH {
  background-color: #fff;
  padding: 9px 13px 3px;
}
._23yTT71X {
  color: rgba(38, 45, 61, 0.7);
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  line-height: 16px;
  margin: 0 0 2px;
}
._23yTT71X,
._23yTT71X:hover,
._23yTT71X:visited {
  color: #9d1e81;
}
._27Qy9QKP {
  align-items: center;
  color: #8f96a3;
  display: flex;
  font-size: 13px;
  margin: 0;
}
@media (min-width: 769px) {
  ._27Qy9QKP {
    font-size: 14px;
  }
}
._27Qy9QKP:before {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 16px auto;
  content: "";
  display: block;
  height: 16px;
  margin-right: 6px;
  width: 16px;
}
._27Qy9QKP._3qk0Zv1H:before {
  content: "\f130";
  font-family: "FontAwesome";
  color: #9d1e81;

  /* background-image: url(https://frontier-assets.toptal.com/2893fcbfabb256f70ba98679124d3200.svg); */
}
._27Qy9QKP._1Tb3uueM:before {
  /* background-image: url(https://frontier-assets.toptal.com/6d9ab211e1c85085294778574085b916.svg); */
  content: "\f130";
  font-family: "FontAwesome";
  color: #9d1e81;
}
._27Qy9QKP._25xuWyl2:before {
  /* background-image: url(https://frontier-assets.toptal.com/e4e1a52b1e2b7cff5c248d87d1bae3c4.svg); */
  content: "\f130";
  font-family: "FontAwesome";
  color: #9d1e81;
}
._27Qy9QKP._1Eu0Nv04:before,
._27Qy9QKP._19x2msGv:before {
  /* background-image: url(https://frontier-assets.toptal.com/f413eed891b8f46db77aca04ce6953c4.svg); */
  content: "\e139";
  font-family: "FontAwesome";
  color: #9d1e81;
}
._1-5VpbwN {
  display: none;
}

._3S6UbfDR {
  color: #94989e;
  display: block;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
}
._3m0TTDhY {
  display: block;
  height: 66px;
  width: 148px;
}
._28yThumg {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
._9qc3kKnu {
  background: #fff;
  font-size: 11px;
  font-weight: 400;
  width: 200px;
}
._9qc3kKnu ._3QI65u5h {
  font-size: 16px;
}
._9qc3kKnu.sb5yIdq8 ._3QI65u5h {
  display: none;
}
._9qc3kKnu._4Xk1Ym8y {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  width: 240px;
}
._9qc3kKnu._4Xk1Ym8y .oYfE6Xrf {
  height: 232px;
}
._9qc3kKnu._4Xk1Ym8y .oYfE6Xrf .XwLDZPC1:before {
  background: no-repeat
    url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
    0 100%;
  background-size: contain;
  bottom: 18px;
  content: "";
  height: 27px;
  left: 18px;
  position: absolute;
  width: 20.25px;
  z-index: 2;
}
._9qc3kKnu._4Xk1Ym8y .oYfE6Xrf:after {
  border-width: 24px 0 0 24px;
}
._9qc3kKnu._4Xk1Ym8y ._25TfQgrH {
  padding: 15px 27px 18px;
}
._9qc3kKnu._4Xk1Ym8y ._23yTT71X {
  font-size: 14px;
  margin-bottom: 5px;
}
._9qc3kKnu._4Xk1Ym8y ._3m0TTDhY {
  height: 28px;
  width: 115px;
}
._9qc3kKnu.Una0M7xj {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  width: 100%;
}

@media (max-width: 1300px) {
  ._9qc3kKnu.Una0M7xj {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    width: 100%;
  }
}
@supports (filter: drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.08))) {
  ._9qc3kKnu.Una0M7xj {
    box-shadow: none !important;
    filter: drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.08));
  }
}
._9qc3kKnu.Una0M7xj .oYfE6Xrf {
  height: 258px;
  width: 100%;
}
._9qc3kKnu.Una0M7xj .oYfE6Xrf img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  /* height: 200px; */
}

._9qc3kKnu.Una0M7xj .oYfE6Xrf .XwLDZPC1:before {
  background: no-repeat
    url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
    0 100%;
  background-size: contain;
  bottom: 22px;
  content: "";
  height: 33px;
  left: 22px;
  position: absolute;
  width: 24.75px;
  z-index: 2;
}
._9qc3kKnu.Una0M7xj .oYfE6Xrf:after {
  border-width: 24px 0 0 24px;
}
._9qc3kKnu.Una0M7xj ._25TfQgrH {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  font-weight: 400;
  padding: 24px;
}
._9qc3kKnu.Una0M7xj ._23yTT71X {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
}
._9qc3kKnu.Una0M7xj ._27Qy9QKP:before {
  display: none;
}
._9qc3kKnu.Una0M7xj .O2d2c2qD {
  /* color: #455065; */
  color: #fff;

  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  padding-top: 14px;
  /* white-space: pre-wrap; */
}
@media (max-width: 767px) {
  ._9qc3kKnu.Una0M7xj {
    background: transparent;
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    height: auto;
    max-width: 700px;
    width: 100%;
  }
  ._9qc3kKnu.Una0M7xj .O2d2c2qD {
    display: none;
    /* display: block; */
  }
  ._1-5VpbwN {
    margin-top: 14px;
    display: block;
  }
  ._9qc3kKnu.Una0M7xj ._25TfQgrH {
    flex: 5 1 150px;
    height: auto;
    padding: 12px 0 0 12px;
  }
  ._9qc3kKnu.Una0M7xj ._23yTT71X,
  ._9qc3kKnu.Una0M7xj ._27Qy9QKP {
    font-size: 13px;
  }
  ._9qc3kKnu.Una0M7xj ._3m0TTDhY {
    height: 28px;
    margin-bottom: 8px;
    width: 115px;
  }
  ._9qc3kKnu.Una0M7xj .oYfE6Xrf {
    -webkit-clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      16px 100%,
      0 calc(100% - 16px)
    );
    clip-path: polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px));
    flex: 1 0 207px;
    height: 180px;
  }

  @media (max-width: 335px) {
    ._9qc3kKnu.Una0M7xj {
      background: transparent;
      display: flex;
      flex-direction: row;
      /* flex-direction: column; */
      height: auto;
      max-width: 500px;
      padding: 0.35rem;
      width: 0%;
    }
  }
  ._9qc3kKnu.Una0M7xj .oYfE6Xrf .XwLDZPC1:before {
    background: no-repeat
      url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
      0 100%;
    background-size: contain;
    bottom: 14px;
    content: "";
    height: 21px;
    left: 14px;
    position: absolute;
    width: 15.75px;
    z-index: 2;
  }
  ._9qc3kKnu.Una0M7xj .oYfE6Xrf:after {
    border-width: 16px 0 0 16px;
  }
  ._9qc3kKnu.Una0M7xj ._1VFtEXND,
  ._9qc3kKnu.Una0M7xj ._3QI65u5h {
    display: none;
  }
}
._9qc3kKnu._3alamt95:hover {
  transition: z-index 0.2s;
  z-index: 2;
}
._9qc3kKnu._3alamt95 .oYfE6Xrf {
  cursor: pointer;
}
._9qc3kKnu._3alamt95 .oYfE6Xrf:hover {
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16);
}
._9qc3kKnu._3alamt95 .oYfE6Xrf:hover ._3QI65u5h {
  opacity: 1;
}
.tC-s4tHj {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tC-s4tHj::-webkit-scrollbar {
  display: none;
}
._3eIUoikq {
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  line-height: normal;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  width: auto;
}
._3eIUoikq::-moz-focus-inner {
  border: 0;
  padding: 0;
}
._10U5tx9_ {
  display: flex;
  justify-content: center;
  padding-top: 16px;
}
._10U5tx9_._10U5tx9_ {
  width: 1314px !important;
}
@media (max-width: 1199px) {
  ._10U5tx9_._10U5tx9_ {
    padding-left: 4px;
    padding-right: 4px;
  }
}
._3eIUoikq {
  color: #204ecf;
  cursor: pointer;
  display: none;
  min-height: 100%;
  min-width: 40px;
  transition: background-color 0.2s;
}
@media (min-width: 1024px) {
  ._3eIUoikq {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
._3eIUoikq._3c_DAED5 {
  transform: rotate(180deg);
}
._3eIUoikq:focus,
._3eIUoikq:hover {
  background: #edf1fd;
}
._3eIUoikq[disabled] {
  background: #f6f8fb;
  color: #c4c6ca;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.tC-s4tHj {
  display: flex;
  overflow-x: auto;
  position: relative;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
}
.tC-s4tHj:after {
  content: "";
  height: 1px;
  min-width: 1px;
}
._1_EQNfDi {
  cursor: pointer;
  margin-right: 8px;
  min-width: 150px;
  opacity: 0.5;
  position: relative;
  transition: opacity 0.5s;
}
@media (min-width: 1024px) {
  ._1_EQNfDi {
    margin-right: 16px;
    min-width: 185px;
  }
}
._1_EQNfDi:last-child {
  margin-right: 0;
}
._1_EQNfDi._3q-vxRti,
._1_EQNfDi:hover {
  opacity: 1;
}
._1_EQNfDi._3q-vxRti {
  border: 2px solid #204ecf;
}
._1_EQNfDi._1w790Vtn,
._1_EQNfDi._1w790Vtn._3q-vxRti {
  opacity: 0;
}
@media (max-width: 1023px) {
  ._10U5tx9_ {
    margin: 0 auto;
    max-width: 100%;
    padding: 8px 8px 0;
    width: 1272px;
  }
}
@media (max-width: 1023px) and (min-width: 1024px) {
  ._10U5tx9_ {
    padding-left: 36px;
    padding-right: 36px;
  }
}
._2trwDkHI a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._2trwDkHI a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._2QR2lFaY {
  background: #d2d6e2;
  padding: 0 24px;
}
@media (min-width: 1024px) {
  ._2QR2lFaY {
    padding: 0 36px;
  }
}
._1je3nBOx {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
}
@media (min-width: 1024px) {
  ._1je3nBOx {
    display: block;
  }
}
/* .xBsW0fSz {
  margin: 56px auto 0;
  max-width: 640px;
  text-align: center;
  z-index: 1;
} */
@media (min-width: 1024px) {
  /* .xBsW0fSz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 2%;
    margin: 0;
    max-width: 42%;
    position: absolute;
    text-align: left;
    top: 20%;
    z-index: 1;
  } */

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    margin: 0;
    max-width: 42%;
    position: absolute;
    text-align: left;
    top: 30% !important;
    z-index: 1;
  }
}
.hero ._2trwDkHI {
  color: #fff !important;
  font-size: 64px;

  /* font-size: 144px; */

  font-weight: 600;
  /* line-height: 35px; */
  line-height: 55px;

  margin: 0 0 16px;
  /* margin: 0 0 1; */

  padding: 0;
}

._2trwDkHI {
  color: #262d3d !important;
  font-size: 64px;

  /* font-size: 144px; */

  font-weight: 600;
  /* line-height: 35px; */
  line-height: 55px;

  /* margin: 0 0 16px; */
  margin: 0 0 0;

  padding: 0;
}

@media (max-width: 400px) {
  ._2trwDkHI {
    font-size: 40px !important;
  }
}

._2trwDkHI_sub {
  color: #262d3d;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  margin: 16px 0;
  padding: 0;
}
._2trwDkHI strong {
  font-weight: inherit;
}
._2trwDkHI a,
._2trwDkHI a:visited {
  color: inherit;
}
@media (min-width: 501px) {
  ._2trwDkHI {
    font-size: 56px;
    font-weight: 600;
    line-height: 62px;
  }
}
@media (min-width: 1201px) {
  ._2trwDkHI {
    /* font-size: 44px; */
    font-size: 70px;
    margin-bottom: 1rem;

    line-height: 56px;
  }
}
._2trwDkHI a {
  position: relative;
  text-transform: capitalize;
}
._2trwDkHI a:after {
  background: #262d3d;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 100%;
}
._2trwDkHI a:hover:after {
  display: none;
}
._2trwDkHI a:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._2trwDkHI sup {
  font-size: 22px;
  line-height: 20px;
  vertical-align: super;
}
@media (min-width: 525px) {
  ._2trwDkHI sup {
    font-size: 28px;
  }
}

.hero ._2NDX9tRa {
  color: #fff !important;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin: 2rem 0;
  padding: 0;
}

@media (max-width: 500px) {
  .hero ._2NDX9tRa {
    margin: 0;
    font-size: 15px;
  }

  /* .hero .q-carousel__navigation-inner {
    justify-content: flex-end;
    flex-direction: row;
  } */
  .q-carousel__navigation--right {
    right: 0;
  }
}

._2NDX9tRa {
  color: #455065;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 16px;
  padding: 0;
}
._2NDX9tRa strong {
  font-weight: inherit;
}
._2NDX9tRa a,
._2NDX9tRa a:visited {
  color: inherit;
}
@media (min-width: 501px) {
  ._2NDX9tRa {
    font-size: 23px;
    font-weight: 300;
  }
}
@media (min-width: 1201px) {
  ._2NDX9tRa {
    font-size: 20px;
  }
}
._3I0w8hp_ {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
}
@media (max-width: 524px) {
  ._3I0w8hp_ {
    margin-bottom: -30px;
    position: relative;
    top: -40px;
  }
}
._14oAADwH {
  height: 64px;
  width: 64px;
}
._1qwIr_p7:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._1qwIr_p7:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._1qwIr_p7 {
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
._1qwIr_p7:focus {
  outline-color: #9d1e81;
  z-index: 1;
}
._1qwIr_p7 .DrEyRGUF {
  display: block;
}
._1qwIr_p7 .LTZj6UOQ {
  display: none;
}
._1qwIr_p7 .kj4a9gSf {
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
}
._1qwIr_p7 ._3CNAKf0_ {
  font-weight: 400;
  line-height: 24px;
  margin: 16px 0;
}
._1qwIr_p7 ._2FaAZdEq {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  visibility: hidden;
}
@media (hover) {
  ._1qwIr_p7:focus-within,
  ._1qwIr_p7:hover {
    background-color: #9d1e81;
    color: #fff;
    transition: background-color 0.3s;
  }
  ._1qwIr_p7:focus-within i,
  ._1qwIr_p7:hover i {
    color: #fff !important;
    transition: background-color 0.3s;
  }
  ._1qwIr_p7:focus-within ._2FaAZdEq,
  ._1qwIr_p7:hover ._2FaAZdEq {
    visibility: visible;
  }
  ._1qwIr_p7:focus-within ._3CNAKf0_,
  ._1qwIr_p7:hover ._3CNAKf0_ {
    color: #edf0f8;
  }
  ._1qwIr_p7:focus-within .DrEyRGUF,
  ._1qwIr_p7:hover .DrEyRGUF {
    display: none;
  }
  ._1qwIr_p7:focus-within .LTZj6UOQ,
  ._1qwIr_p7:hover .LTZj6UOQ {
    display: block;
  }
}
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  ._1qwIr_p7:focus-within,
  ._1qwIr_p7:hover {
    background-color: #204ecf;
    color: #fff;
    transition: background-color 0.3s;
  }
  ._1qwIr_p7:focus-within i,
  ._1qwIr_p7:hover i {
    color: #fff !important;
    transition: background-color 0.3s;
  }
  ._1qwIr_p7:focus-within ._2FaAZdEq,
  ._1qwIr_p7:hover ._2FaAZdEq {
    visibility: visible;
  }
  ._1qwIr_p7:focus-within ._3CNAKf0_,
  ._1qwIr_p7:hover ._3CNAKf0_ {
    color: #edf0f8;
  }
  ._1qwIr_p7:focus-within .DrEyRGUF,
  ._1qwIr_p7:hover .DrEyRGUF {
    display: none;
  }
  ._1qwIr_p7:focus-within .LTZj6UOQ,
  ._1qwIr_p7:hover .LTZj6UOQ {
    display: block;
  }
}
._3vXk2FdX {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  overflow: hidden;
}
._3vXk2FdX:focus-within {
  overflow: visible;
}
@media (max-width: 767px) {
  ._3vXk2FdX {
    margin: 0 -24px;
  }
}
.amXpIPzb {
  flex: 1 2 324px;
}
@media (max-width: 767px) {
  ._1mAa9DKX {
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0;
  }
  ._3bBZjbAE {
    display: block;
  }
}
._2RVERByf > div > span:before {
  border-color: inherit;
  opacity: 0.2;
}
@media (max-width: 767px) {
  ._2RVERByf > div > span:before {
    display: none;
  }
  ._2RVERByf {
    width: 100%;
  }
  ._2RVERByf > div {
    justify-content: center;
    margin: 20px 0 0;
  }
  ._2RVERByf > div > span:before {
    display: none;
  }
}
._2Ife8h_H {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
._2Ife8h_H .fRKMN8hO {
  font-size: 45px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}

/* ._2Ife8h_H .fRKMN8hO::before {
  content: "";
  position: absolute;
  width: 80%;
  background: #9d1e81;
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
} */
@media (max-width: 767px) {
  ._2Ife8h_H .fRKMN8hO {
    font-size: 28px;
    line-height: 35px;
  }
}
._2Ife8h_H .LKtg-tu1 {
  font-weight: 400;
  line-height: 24px;
  max-width: 555px;
  padding-bottom: 43px;
  text-align: center;
}
.VRzpBOaS {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
._3jgwFSUz {
  margin: 0;
}
.a5wuXPKO {
  margin: -4px;
  width: calc(100% + 8px);
}
.a5wuXPKO > ._3jgwFSUz {
  padding: 4px;
}
.xK1Y6wFp {
  margin: -8px;
  width: calc(100% + 16px);
}
.xK1Y6wFp > ._3jgwFSUz {
  padding: 8px;
}
.h7NHpGkN {
  margin: -12px;
  width: calc(100% + 24px);
}
.h7NHpGkN > ._3jgwFSUz {
  padding: 12px;
}
._2lPvBDZI {
  margin: -16px;
  width: calc(100% + 32px);
}
._2lPvBDZI > ._3jgwFSUz {
  padding: 16px;
}
._1GwNtStZ {
  flex-basis: 8.33333%;
  flex-shrink: 0;
  max-width: 8.33333%;
}
._2Mx0cghk {
  flex-basis: 16.66667%;
  flex-shrink: 0;
  max-width: 16.66667%;
}
._2NAIDFKi {
  flex-basis: 25%;
  flex-shrink: 0;
  max-width: 25%;
}
._2UDh_G12 {
  flex-basis: 33.33333%;
  flex-shrink: 0;
  max-width: 33.33333%;
}
._3v8dne6s {
  flex-basis: 41.66667%;
  flex-shrink: 0;
  max-width: 41.66667%;
}
._2N8pXk9N {
  flex-basis: 50%;
  flex-shrink: 0;
  max-width: 50%;
}
.jgRVL1If {
  flex-basis: 58.33333%;
  flex-shrink: 0;
  max-width: 58.33333%;
}
._1mhTHHWq {
  flex-basis: 66.66667%;
  flex-shrink: 0;
  max-width: 66.66667%;
}
._3KmeAScq {
  flex-basis: 75%;
  flex-shrink: 0;
  max-width: 75%;
}
._3Jnmt4_u {
  flex-basis: 83.33333%;
  flex-shrink: 0;
  max-width: 83.33333%;
}
._3EB6kCHm {
  flex-basis: 91.66667%;
  flex-shrink: 0;
  max-width: 91.66667%;
}
.RqckegCL {
  flex-basis: 100%;
  flex-shrink: 0;
  max-width: 100%;
}
@media (min-width: 768px) {
  ._1CZDjbCH {
    margin: -4px;
    width: calc(100% + 8px);
  }
  ._1CZDjbCH > ._3jgwFSUz {
    padding: 4px;
  }
  .SdDoLGVe {
    margin: -8px;
    width: calc(100% + 16px);
  }
  .SdDoLGVe > ._3jgwFSUz {
    padding: 8px;
  }
  .nSXNjloy {
    margin: -12px;
    width: calc(100% + 24px);
  }
  .nSXNjloy > ._3jgwFSUz {
    padding: 12px;
  }
  ._2d4v8X-a {
    margin: -16px;
    width: calc(100% + 32px);
  }
  ._2d4v8X-a > ._3jgwFSUz {
    padding: 16px;
  }
  ._1KQ1Gi0G {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }
  ._37O2S15T {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }
  ._1HQVvDUb {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }
  ._2lgV_Xr9 {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }
  ._1rLP5r_m {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }
  ._26ebzZtt {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }
  ._2u3R8p7l {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }
  ._25gHwGaQ {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }
  ._2iRj5_FL {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }
  ._2MdNxXb- {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }
  ._2xplsVD8 {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }
  ._1s3M2fiC {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}
@media (min-width: 1024px) {
  ._1tysoH_D {
    margin: -4px;
    width: calc(100% + 8px);
  }
  ._1tysoH_D > ._3jgwFSUz {
    padding: 4px;
  }
  ._2Gm6BBoN {
    margin: -8px;
    width: calc(100% + 16px);
  }
  ._2Gm6BBoN > ._3jgwFSUz {
    padding: 8px;
  }
  ._2hTqIJvN {
    margin: -12px;
    width: calc(100% + 24px);
  }
  ._2hTqIJvN > ._3jgwFSUz {
    padding: 12px;
  }
  ._30YsJBkA {
    margin: -16px;
    width: calc(100% + 32px);
  }
  ._30YsJBkA > ._3jgwFSUz {
    padding: 16px;
  }
  ._37ljHUaw {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }
  ._2lRwSs8g {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }
  ._1ESny7XR {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }
  .sliderr ._1ArckmJZ {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
    height: 100%;
  }
  ._1ArckmJZ {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }
  ._30GVQs4v {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }
  ._1mgQSQLr {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }
  ._2tDzT42o {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }
  ._9Ikuko4z {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }
  ._2fKcTUpf {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }
  .Hzu-2nHX {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }
  ._292QmiDj {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }
  ._1zJaTryD {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  ._1Dczv3HK {
    margin: -4px;
    width: calc(100% + 8px);
  }
  ._1Dczv3HK > ._3jgwFSUz {
    padding: 4px;
  }
  ._1Q_5EQUW {
    margin: -8px;
    width: calc(100% + 16px);
  }
  ._1Q_5EQUW > ._3jgwFSUz {
    padding: 8px;
  }
  ._23TbfZxP {
    margin: -12px;
    width: calc(100% + 24px);
  }
  ._23TbfZxP > ._3jgwFSUz {
    padding: 12px;
  }
  .bMWr3Lne {
    margin: -16px;
    width: calc(100% + 32px);
  }
  .bMWr3Lne > ._3jgwFSUz {
    padding: 16px;
  }
  .jds3D0B5 {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }
  ._1e7s_IuL {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }
  ._1q-zcMCw {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }
  ._3yg5FqML {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }
  ._1Hl0Oco6 {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }
  .NpIB0GaX {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }
  .j7_AHzPn {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }
  ._1ZZGIcz- {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }
  .s20_q1LG {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }
  ._3uX6olga {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }
  ._2muXPbLl {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }
  ._3nmeTH2Y {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}
.FSKMR27j {
  color: #262d3d;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 24px;
}
.FSKMR27j,
.RAYAIDuh {
  background-color: #fff;
}
.RAYAIDuh {
  color: #455065;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}
._3CHjsr09 {
  display: block;
  margin-bottom: 38px;
  max-height: 64px;
  max-width: 64px;
  min-height: 64px;
}
._3ATUx1NL {
  justify-content: center;
  margin-bottom: -40px;
}
._1oViSdzd {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 40px;
  text-align: center;
}
@media (min-width: 768px) {
  ._1oViSdzd {
    align-items: flex-start;
    max-width: 275px;
    text-align: left;
  }
}

@media (max-width: 768px) {
  ._1oViSdzd {
    padding-bottom: 0px;
  }
}
.KaTnOXtZ ._1oViSdzd {
  margin-left: 0;
}
._3GjVa9bP ._1oViSdzd {
  text-align: center;
}
@media (min-width: 768px) {
  ._3GjVa9bP ._1oViSdzd {
    align-items: center;
    max-width: 370px;
  }
}
._385wrD-c {
  /* display: none; */
}
@media (min-width: 1024px) {
  ._385wrD-c {
    align-items: stretch;
    display: flex;
    justify-content: center;
    margin: 32px auto 0;
  }
}
._2tJeV4D3 {
  margin: 0 auto;
}
._1_4tFnip ._2tJeV4D3 {
  height: 100%;
  width: 275px;
}
._1_4tFnip ._2tJeV4D3 > a {
  height: 280px !important;
}
._1NrVRGE5,
.wF-W6bRO {
  /* display: none; */
}
@media (min-width: 1024px) {
  ._1NrVRGE5,
  .wF-W6bRO {
    display: block;
    height: 776px;
    margin-left: 55px;
    position: relative;
    width: 902px;
  }
}
@media (min-width: 1200px) {
  ._1NrVRGE5,
  .wF-W6bRO {
    width: 512px;
  }
}
._1NrVRGE5 ._2tJeV4D3,
.wF-W6bRO ._2tJeV4D3 {
  position: absolute;
}
.wF-W6bRO.BE2srA7U .wihzBqFL:first-child ._2tJeV4D3 {
  left: 0;
  top: 0;
}
.wF-W6bRO.BE2srA7U .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 264px;
  top: 60px;
  z-index: 2;
}
.wF-W6bRO.BE2srA7U .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 46px;
  top: 400px;
  z-index: 1;
}
.wF-W6bRO._1yCM0Wmf .wihzBqFL:first-child ._2tJeV4D3 {
  left: 72px;
  top: 0;
}
.wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 272px;
  top: 160px;
  z-index: 1;
}
.wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 0;
  top: 400px;
}
.wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(4) ._2tJeV4D3 {
  right: 20px;
  top: 500px;
}
.wF-W6bRO._2SnL7eGd .wihzBqFL:first-child ._2tJeV4D3 {
  left: 200px;
  top: 0;
  z-index: 1;
}
.wF-W6bRO._2SnL7eGd .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 0;
  top: 172px;
}
.wF-W6bRO._2SnL7eGd .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 264px;
  top: 400px;
}
@media (max-width: 1199px) {
  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3,
  .wF-W6bRO.BE2srA7U .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    /* display: none; */
  }
  .wF-W6bRO._2SnL7eGd .wihzBqFL:first-child ._2tJeV4D3 {
    left: 0;
  }
  .wF-W6bRO._2SnL7eGd .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    display: none;
  }
  .wF-W6bRO._2SnL7eGd .wihzBqFL:nth-child(3) ._2tJeV4D3 {
    left: 64px;
  }
}

@media (max-width: 767px) {
  .wF-W6bRO._1yCM0Wmf .wihzBqFL:first-child ._2tJeV4D3 {
    left: 100px;
    top: 0;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(3) ._2tJeV4D3 {
    left: -100px;
    top: 250px;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    left: 100px;
    top: 360px;

    z-index: 1;
  }
}

@media (max-width: 467px) {
  .wF-W6bRO._1yCM0Wmf .wihzBqFL:first-child ._2tJeV4D3 {
    left: 30px;
    top: 0;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(3) ._2tJeV4D3 {
    left: -50px;
    top: 250px;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    left: 30px;
    top: 460px;

    z-index: 1;
  }
}

@media (max-width: 400px) {
  .wF-W6bRO._1yCM0Wmf .wihzBqFL:first-child ._2tJeV4D3 {
    left: -60px;
    top: 0;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(3) ._2tJeV4D3 {
    left: -90px;
    top: 200px;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    left: -50px;
    top: 560px;
  }

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(4) ._2tJeV4D3 {
    right: 0px;
    top: 400px;
  }
}
._1NrVRGE5 {
  left: -150px;
  margin-left: 0;
}
._1NrVRGE5.BE2srA7U .wihzBqFL:first-child ._2tJeV4D3 {
  left: 0;
  top: 220px;
}
._1NrVRGE5.BE2srA7U .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 264px;
  top: 0;
}
._1NrVRGE5.BE2srA7U .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 264px;
  top: 400px;
}
._1NrVRGE5._1yCM0Wmf .wihzBqFL:first-child ._2tJeV4D3 {
  left: 264px;
  top: 0;
}
._1NrVRGE5._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 0;
  top: 220px;
}
._1NrVRGE5._1yCM0Wmf .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 264px;
  top: 400px;
}
._1NrVRGE5._2SnL7eGd .wihzBqFL:first-child ._2tJeV4D3 {
  left: 264px;
  top: 0;
}
._1NrVRGE5._2SnL7eGd .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  left: 264px;
  top: 400px;
}
._1NrVRGE5._2SnL7eGd .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  left: 0;
  top: 220px;
}
._1GfHJupV ._2tJeV4D3 {
  -webkit-animation: _3PwFM1DK 0.6s;
  animation: _3PwFM1DK 0.6s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._1GfHJupV .wihzBqFL:first-child ._2tJeV4D3 {
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
._1GfHJupV .wihzBqFL:nth-child(2) ._2tJeV4D3 {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
}
._1GfHJupV .wihzBqFL:nth-child(3) ._2tJeV4D3 {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
@-webkit-keyframes _3PwFM1DK {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _3PwFM1DK {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
._2rtHMimn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
._2e98AqZT {
  margin: 0 auto;
  text-align: center;
}
._1zyXkxSm._2rtHMimn {
  flex-direction: row;
}
._1zyXkxSm ._2e98AqZT {
  max-width: 622px;
  text-align: left;
}

._1DAwOP3R {
  font-size: 45px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
}
.bold-text {
  font-weight: 500 !important;
}
/* ._1DAwOP3R::before {
  content: "";
  position: absolute;
  width: 45%;
  background: #9d1e81;
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
} */

@media (max-width: 1324px) {
  ._1zyXkxSm._2rtHMimn {
    flex-direction: column;
  }
  ._385wrD-c {
    height: 750px;
    position: relative;
    margin: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }
  /* .wihzBqFL {
    position: relative;
  } */

  ._1DAwOP3R,
  ._2-gkB2sO {
    text-align: center;
  }

  /* ._1DAwOP3R::before {
    content: "";
    position: absolute;
    width: 40%;
    background: #9d1e81;
    bottom: -8%;
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 3px;
  } */

  .wF-W6bRO._1yCM0Wmf .wihzBqFL:nth-child(2) ._2tJeV4D3 {
    right: 272px;
    bottom: 160px;

    z-index: 1;
  }
}
@media (max-width: 577px) {
  ._1zyXkxSm ._2e98AqZT {
    text-align: center;
  }
}

@media (min-width: 1325px) {
  ._35agMcd- {
    font-size: 52px;
    font-weight: 300;
    line-height: 64px;
  }
}
._1DAwOP3R {
  font-size: 45px;
  line-height: 56px;
}
/* ._1DAwOP3R {
  font-size: 28px;
  font-weight: 300;
  line-height: 36px;
  margin: 0 0 10px;
} */
@media (min-width: 768px) {
  ._1DAwOP3R {
    font-size: 45px;
    line-height: 56px;
  }

  /* ._1DAwOP3R::before {
    content: "";
    position: absolute;
    width: 40%;
    background: #9d1e81;
    bottom: -8%;
    left: 0%;
    transform: translateX(0%);
    height: 3px;
  } */
}

@media (max-width: 500px) {
  ._1DAwOP3R {
    font-size: 35px;
  }
}
._2-gkB2sO {
  font-weight: 400;
  margin-bottom: 48px;
}
._2dbxKckM ._2ecxW5_b,
._2FXfVeAR ._2ecxW5_b {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.32);
}
._3fZLMPLS._2dbxKckM {
  background: #9d1e81;
  padding: 96px 0;
}
._35agMcd- {
  /* background-color: #fff; */
  color: #fff;
  display: flex;
  font-size: 28px;
  font-weight: 400;
  justify-content: center;
  line-height: 36px;
  margin-bottom: 48px;
  text-align: center;
}
@media (min-width: 768px) {
  ._35agMcd- {
    font-size: 52px;
    font-weight: 300;
    line-height: 64px;
  }
}
._2dbxKckM ._35agMcd- {
  background-color: #9d1e81;
  color: #fff;
}
._35agMcd- strong {
  font-weight: 600;
}
@media (min-width: 768px) {
  ._1epx56Ug {
    overflow: hidden;
  }
}
.TTvbhb5G {
  position: relative;
}
.p0URF4Wy {
  background: #9d1e81;
  position: absolute;
  transform: scale(0);
}
.lnGffDGZ .p0URF4Wy {
  transform: none;
}
._2dbxKckM .p0URF4Wy {
  background: #00cc83;
}
@media (max-width: 767px) {
  .p0URF4Wy {
    bottom: 0;
    left: 24px;
    margin: 0;
    top: 64px;
    width: 1px;
  }
  .p0URF4Wy:first-child {
    display: none;
  }
}
._1BxnkSO_ .p0URF4Wy:first-child {
  display: none;
}
._2Rtbw_d5 .p0URF4Wy:first-child {
  left: 0;
  margin-left: -48px;
  opacity: 0.2;
  width: 50%;
}
@media (min-width: 768px) {
  .p0URF4Wy {
    height: 1px;
    top: 32px;
  }
  ._1BxnkSO_ .p0URF4Wy {
    left: 64px;
    margin-left: 24px;
    right: 0;
  }
  ._2Rtbw_d5 .p0URF4Wy {
    left: 50%;
    margin-left: -24px;
    width: 100%;
  }
}
._3c1caa7v {
  color: #9d1e81;
  content: "";
  display: block;
  height: 29px;
  position: absolute;
  right: 0;
  top: -14px;
  width: 15px;
}
._2dbxKckM ._3c1caa7v {
  color: #00cc83;
}
@media (max-width: 767px) {
  ._3c1caa7v {
    bottom: -8px;
    left: -7px;
    top: auto;
    transform: rotate(90deg);
  }
}
._2pfxVgGF {
  position: relative;
  text-align: center;
}
@media (max-width: 767px) {
  ._2pfxVgGF {
    display: flex;
    min-height: 96px;
  }
}
._1BxnkSO_ ._2pfxVgGF {
  text-align: left;
}
@media (min-width: 768px) {
  ._2Rtbw_d5 ._1P9Tvb24:last-child .p0URF4Wy {
    margin-left: 0;
    opacity: 0.2;
    width: 50%;
  }
}
._2qGKqRqZ ._1P9Tvb24:first-child ._2ecxW5_b {
  -webkit-animation: _3OLpik2C 0.15s;
  animation: _3OLpik2C 0.15s;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:first-child ._1TA7PM5e {
  -webkit-animation: qDI0Ujkt 0.42s;
  animation: qDI0Ujkt 0.42s;
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:first-child .p0URF4Wy {
  -webkit-animation: tnt6E2os 0.12s;
  animation: tnt6E2os 0.12s;
  -webkit-animation-delay: 0.87s;
  animation-delay: 0.87s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:first-child .p0URF4Wy:first-child {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(2) ._2ecxW5_b {
  -webkit-animation: _3OLpik2C 0.15s;
  animation: _3OLpik2C 0.15s;
  -webkit-animation-delay: 1.17s;
  animation-delay: 1.17s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(2) ._1TA7PM5e {
  -webkit-animation: qDI0Ujkt 0.42s;
  animation: qDI0Ujkt 0.42s;
  -webkit-animation-delay: 1.32s;
  animation-delay: 1.32s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(2) .p0URF4Wy {
  -webkit-animation: tnt6E2os 0.12s;
  animation: tnt6E2os 0.12s;
  -webkit-animation-delay: 1.74s;
  animation-delay: 1.74s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(2) .p0URF4Wy:first-child {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(3) ._2ecxW5_b {
  -webkit-animation: _3OLpik2C 0.15s;
  animation: _3OLpik2C 0.15s;
  -webkit-animation-delay: 2.04s;
  animation-delay: 2.04s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(3) ._1TA7PM5e {
  -webkit-animation: qDI0Ujkt 0.42s;
  animation: qDI0Ujkt 0.42s;
  -webkit-animation-delay: 2.19s;
  animation-delay: 2.19s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(3) .p0URF4Wy {
  -webkit-animation: tnt6E2os 0.12s;
  animation: tnt6E2os 0.12s;
  -webkit-animation-delay: 2.61s;
  animation-delay: 2.61s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(3) .p0URF4Wy:first-child {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(4) ._2ecxW5_b {
  -webkit-animation: _3OLpik2C 0.15s;
  animation: _3OLpik2C 0.15s;
  -webkit-animation-delay: 2.91s;
  animation-delay: 2.91s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(4) ._1TA7PM5e {
  -webkit-animation: qDI0Ujkt 0.42s;
  animation: qDI0Ujkt 0.42s;
  -webkit-animation-delay: 3.06s;
  animation-delay: 3.06s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(4) .p0URF4Wy {
  -webkit-animation: tnt6E2os 0.12s;
  animation: tnt6E2os 0.12s;
  -webkit-animation-delay: 3.48s;
  animation-delay: 3.48s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
._2qGKqRqZ ._1P9Tvb24:nth-child(4) .p0URF4Wy:first-child {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
._2ecxW5_b {
  align-items: center;
  background: #fff;
  border: 1px solid #9d1e81;
  border-radius: 50%;
  color: #9d1e81;
  display: flex;
  display: inline-flex;
  flex: none;
  flex-direction: row;
  font-size: 32px;
  font-weight: 300;
  height: 64px;
  justify-content: center;
  line-height: 60px;
  opacity: 0;
  position: relative;
  width: 64px;
  z-index: 2;
}
.lnGffDGZ ._2ecxW5_b {
  opacity: 1;
}
@media (max-width: 767px) {
  ._2ecxW5_b {
    font-size: 20px;
    font-weight: 400;
    height: 48px;
    line-height: 28px;
    width: 48px;
  }
}
._2dbxKckM ._2ecxW5_b,
._2FXfVeAR ._2ecxW5_b {
  background: #0f256e;
  border: none;
  color: #fff;
}
._2dbxKckM ._2ecxW5_b {
  background: #0f256e;
}
._2FXfVeAR ._2ecxW5_b {
  background: #204ecf;
}
._1TA7PM5e {
  opacity: 0;
}
.lnGffDGZ ._1TA7PM5e {
  opacity: 1;
}
@media (max-width: 767px) {
  ._1TA7PM5e {
    padding-left: 24px;
    text-align: left;
  }
  ._1P9Tvb24:not(:last-child) ._1TA7PM5e {
    padding-bottom: 32px;
  }
}
._2yVHU0Wx {
  /* background-color: #fff; */
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 16px;
}
@media (min-width: 768px) {
  ._2yVHU0Wx {
    padding-top: 48px;
  }
}
._2dbxKckM ._2yVHU0Wx {
  background-color: #204ecf;
  color: #fff;
}
._2FXfVeAR ._2yVHU0Wx {
  color: #000;
}
@media (min-width: 768px) {
  ._2Rtbw_d5 ._2yVHU0Wx {
    padding-left: 32px;
    padding-right: 32px;
  }
}
._12ydEHM0 {
  /* background-color: #fff; */
  /* color: #262d3d; */
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
}
._2dbxKckM ._12ydEHM0 {
  background-color: #204ecf;
  color: #fff;
}
._2FXfVeAR ._12ydEHM0 {
  color: #455065;
  font-weight: 400;
}
@-webkit-keyframes tnt6E2os {
  0% {
    transform: scale(0, 0.3);
    transform-origin: 0 50%;
  }
  to {
    transform: scale(1);
    transform-origin: 0 50%;
  }
}
@keyframes tnt6E2os {
  0% {
    transform: scale(0, 0.3);
    transform-origin: 0 50%;
  }
  to {
    transform: scale(1);
    transform-origin: 0 50%;
  }
}
@-webkit-keyframes _3OLpik2C {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _3OLpik2C {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes qDI0Ujkt {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes qDI0Ujkt {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
._13AzE63U {
  margin-left: 0;
  margin-right: 0;
}
._13AzE63U ._2E9Ot9TG {
  margin: 0 auto;
  max-width: 100%;
  padding: 36px 24px;
  width: 1272px;
}
@media (min-width: 1024px) {
  ._13AzE63U ._2E9Ot9TG {
    padding-left: 36px;
    padding-right: 36px;
  }
}
._28EimyA4._1BssdBSz:focus,
._28EimyA4:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._28EimyA4:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._28EimyA4 {
  color: #b0b0b0;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 0 15px;
  padding-bottom: 13px;
  text-align: center;
  transition: color 0.2s ease, border-color 0.2s ease;
}
._28EimyA4:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._28EimyA4:focus:not(._2SlXR1PM) {
  outline: 0;
  outline-offset: 0;
}
._28EimyA4:first-child {
  margin-left: 0;
}
._28EimyA4:last-child {
  margin-right: 0;
}
._28EimyA4._1Qb_FdyB,
._28EimyA4._3ylw2mBD,
._28EimyA4.wMOBEkf6 {
  border-bottom: 1px solid #c4c6ca;
  color: #455065;
  flex-basis: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
}
._28EimyA4._1Qb_FdyB,
._28EimyA4.wMOBEkf6 {
  flex-basis: auto;
  font-weight: 300;
}
._28EimyA4.wMOBEkf6 {
  border-bottom: 2px solid #c4c6ca;
}
._28EimyA4.ooJx2Gr4 {
  border-top: 2px solid transparent;
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  min-width: 96px;
  padding-top: 16px;
}
@media (min-width: 1024px) {
  ._28EimyA4.ooJx2Gr4 {
    margin: 0 15px;
  }
}
._28EimyA4.e6pn6TMi {
  border-bottom: 4px solid transparent;
  color: #262d3d;
  cursor: default;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 16px;
  text-align: left;
}
@media (max-width: 767px) {
  ._28EimyA4.e6pn6TMi:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  ._28EimyA4.e6pn6TMi {
    flex-basis: 33.33333%;
    margin: 0 16px;
  }
  ._28EimyA4.e6pn6TMi:first-child {
    margin-left: 0;
  }
  ._28EimyA4.e6pn6TMi:last-child {
    margin-right: 0;
  }
}
._28EimyA4._1BssdBSz {
  border-bottom: 2px solid #204ecf;
  color: #000;
  font-weight: 600;
}
._28EimyA4._1BssdBSz:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._28EimyA4._1BssdBSz._3ngHZg3A {
  border-color: transparent;
}
._28EimyA4._1BssdBSz.ooJx2Gr4 {
  border-bottom: 0;
  border-top: 2px solid #204ecf;
}
._28EimyA4._1BssdBSz._1Qb_FdyB {
  color: #455065;
}
._28EimyA4._1BssdBSz._1Qb_FdyB,
._28EimyA4._1BssdBSz._3ylw2mBD {
  border-bottom-width: 1px;
}
._28EimyA4._1BssdBSz._1Qb_FdyB:focus:not(._2SlXR1PM),
._28EimyA4._1BssdBSz._3ylw2mBD:focus:not(._2SlXR1PM) {
  outline: 0;
  outline-offset: 0;
}
._28EimyA4._1BssdBSz._1Qb_FdyB:focus,
._28EimyA4._1BssdBSz._3ylw2mBD:focus {
  outline: 1px solid #204ecf;
  outline-offset: -1px;
}
._28EimyA4._1BssdBSz.e6pn6TMi {
  border-bottom-width: 4px;
}
@media (min-width: 768px) {
  ._28EimyA4 {
    font-size: 18px;
  }
}
@media (min-width: 1024px) {
  ._28EimyA4 {
    font-size: 20px;
    margin: 0 35px;
  }
}
._214kXHI6 {
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 0 auto 8px;
  width: 48px;
}
@media (min-width: 768px) {
  ._214kXHI6 {
    height: 64px;
    width: 64px;
  }
}
.ooJx2Gr4 ._214kXHI6 {
  height: 96px;
  position: relative;
  width: 96px;
}
@supports (
  (
      -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 16px
            100%, 0 calc(100% - 16px))
    )
    or
    (
      clip-path:
        polygon(
          0 0,
          calc(100% + 1px) 0,
          calc(100% + 1px) 100%,
          16px 100%,
          0 calc(100% - 16px)
        )
    )
) {
  .ooJx2Gr4 ._214kXHI6 {
    -webkit-clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      16px 100%,
      0 calc(100% - 16px)
    );
    clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      16px 100%,
      0 calc(100% - 16px)
    );
  }
  .ooJx2Gr4 ._214kXHI6:after {
    content: none !important;
  }
}
.ooJx2Gr4 ._214kXHI6:after {
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  border-width: 16px 0 0 16px;
  bottom: 0;
  content: "";
  display: inline-block;
  height: 0;
  left: 0;
  position: absolute;
  width: 0;
}
.ooJx2Gr4 ._214kXHI6:before {
  background: no-repeat
    url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
    0 100%;
  background-size: contain;
  bottom: 12px;
  content: "";
  height: 18px;
  left: 12px;
  position: absolute;
  width: 13.5px;
  z-index: 2;
}
.e6pn6TMi ._214kXHI6 {
  height: 32px;
  margin: 0 0 24px;
  width: 32px;
}
.La9hfH9l {
  display: block;
  max-height: 100%;
  max-width: 100%;
}
._3uwCUZkU:after {
  color: transparent;
  content: attr(data-title);
  display: block;
  font-weight: 600;
  height: 1px;
  overflow: hidden;
  visibility: hidden;
}
.yzdVnirF:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
.yzdVnirF:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._2KkykVzB {
  display: flex;
}
._1ffC2emj:not(:last-child) {
  margin-right: 16px;
}
.yzdVnirF {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
}
.yzdVnirF:focus {
  outline-color: #204ecf;
  z-index: 1;
}
.yzdVnirF img {
  filter: brightness(0) invert(1);
  -o-object-fit: contain;
  object-fit: contain;
}
._1UQKDH6z .yzdVnirF {
  background: transparent;
  border: 1px solid #455065;
  color: #455065;
  transition: all 0.2s;
}
._1UQKDH6z .yzdVnirF:hover {
  background: transparent;
  border-color: #204ecf;
  color: #204ecf;
}
._3NypLa63 .yzdVnirF {
  background: #204ecf;
  border: 1px solid #204ecf;
  color: #fff;
  transition: all 0.2s;
}
._3NypLa63 .yzdVnirF:hover {
  background: #0f256e;
  border-color: #183a9e;
  color: #fff;
}
._26W7MbnX .yzdVnirF {
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  color: #fff;
  transition: all 0.2s;
}
._26W7MbnX .yzdVnirF:hover {
  background: transparent;
  border-color: hsla(0, 0%, 100%, 0.2);
  color: #fff;
  opacity: 0.6;
}
.S65qEQwP {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.S65qEQwP::-webkit-scrollbar {
  display: none;
}
.S65qEQwP {
  overflow-x: scroll;
  padding: 25px 0 10px;
  position: relative;
  scroll-behavior: smooth;
  text-align: center;
  white-space: nowrap;
  width: 100%;
}
._9nWngpEZ .S65qEQwP {
  justify-content: space-between;
}
._2t4bnq7k .S65qEQwP,
._9nWngpEZ .S65qEQwP {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 32px;
  padding: 0;
}
._2t4bnq7k .S65qEQwP {
  justify-content: flex-start;
  text-align: left;
}
._2t4bnq7k .S65qEQwP:after {
  border-bottom: 1px solid #c4c6ca;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
._356tYIp9 .S65qEQwP {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 32px;
  padding: 0;
  text-align: left;
}
._356tYIp9 .S65qEQwP:after {
  border-bottom: 2px solid #c4c6ca;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
._1cSqpswJ .S65qEQwP {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 32px;
  padding: 0;
}
@media (min-width: 768px) {
  ._1cSqpswJ .S65qEQwP {
    justify-content: center;
  }
}
._67Zj5hjd .S65qEQwP {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  text-align: left;
  white-space: normal;
}
@media (min-width: 768px) {
  ._67Zj5hjd .S65qEQwP {
    flex-direction: row;
  }
}
.EjKBP_ta {
  display: none;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.6s ease-in-out;
}
._67Zj5hjd .EjKBP_ta {
  padding: 56px 0 64px;
}
.EjKBP_ta.DwsYntB3 {
  display: block;
  height: auto;
  opacity: 1;
  overflow: visible;
}
.eFMCsx1V {
  clip: rect(0, 0, 0, 0);
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
._3ATfuKuZ.gtF3g8Jg a:focus,
.VsStGjXj a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._3ATfuKuZ.gtF3g8Jg a:focus:not(:focus-visible),
.VsStGjXj a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._1cXxqsT8 {
  background-color: #000;
  color: #fff;
  margin: 0;
}
._1XY5XaF6 {
  padding-top: 32px;
}
._1Y3-upIm,
._2M_Xuie5 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px 0 60px;
}
._1IGYFQew {
  flex: 1;
  padding-right: 30px;
}
._1IGYFQew:last-child {
  padding-right: 0;
}
.uBxyYiCQ {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  font-size: 15px;
  font-weight: 400;
  margin: 15px 0;
  padding-bottom: 18px;
  white-space: nowrap;
}
.GA1bS17F {
  display: flex;
}
.VsStGjXj {
  display: inline;
  white-space: nowrap;
}
.VsStGjXj:not(:last-child) {
  margin-right: 20px;
}
.VsStGjXj._2lf3U9la {
  border-right: 1px solid hsla(0, 0%, 100%, 0.2);
  padding-right: 20px;
}
.VsStGjXj a {
  color: #fff;
}
.VsStGjXj a:focus {
  outline-color: #204ecf;
  z-index: 1;
}
.VsStGjXj a:hover {
  opacity: 0.6;
}
._3ATfuKuZ {
  list-style: none;
}
._3ATfuKuZ a:hover {
  opacity: 0.6;
}
._3ATfuKuZ.gtF3g8Jg {
  margin-bottom: 16px;
}
._3ATfuKuZ.gtF3g8Jg a {
  color: #fff;
  font-size: 15px;
  font-weight: 100;
  text-decoration: none;
}
._3ATfuKuZ.gtF3g8Jg a:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1Y3-upIm {
  font-size: 15px;
  font-weight: 400;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 20px;
}
._39YHlWta {
  border-top: 1px solid hsla(0, 0%, 100%, 0.2);
  width: 100%;
}
.-mMkSI_A,
._9fVOHv9t {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.-mMkSI_A {
  color: #fff;
  margin: 17px 0;
  padding-bottom: 4px;
}
._9fVOHv9t {
  font-size: 14px;
  font-weight: 300;
}
@media (max-width: 1023px) {
  ._1IGYFQew {
    min-width: 350px;
  }
  ._1IGYFQew,
  ._1IGYFQew:last-child {
    padding-right: 15px;
  }
  ._39YHlWta {
    display: none;
  }
  .-mMkSI_A,
  ._9fVOHv9t {
    text-align: center;
    width: 100%;
  }
  .-mMkSI_A {
    padding-bottom: 20px;
  }
}
@media (max-width: 767px) {
  ._1IGYFQew {
    min-width: 270px;
  }
}
@media (max-width: 500px) {
  ._9fVOHv9t {
    flex-direction: column;
  }
  .VsStGjXj {
    padding: 10px 0;
  }
  .VsStGjXj:not(:last-child) {
    margin-right: 0;
  }
  .VsStGjXj._2lf3U9la {
    border-right: 0;
    padding-right: 0;
  }
}
@media (max-width: 425px) {
  .-mMkSI_A {
    flex-direction: column;
  }
  .-mMkSI_A p {
    border-left: 0;
    margin-left: 0;
    margin-top: 20px;
    padding-left: 0;
  }
}
._1cXxqsT8._3xicDpfG {
  background-color: #f5f5f6;
  color: #262d3d;
}
._1cXxqsT8._3xicDpfG .uBxyYiCQ {
  border-bottom: 1px solid #d8d9dc;
  color: #8f96a3;
  text-transform: uppercase;
}
._1cXxqsT8._3xicDpfG a {
  color: #455065;
  font-weight: 300;
  transition: color 0.2s;
}
._1cXxqsT8._3xicDpfG a:visited {
  color: #455065;
}
._1cXxqsT8._3xicDpfG .-mMkSI_A,
._1cXxqsT8._3xicDpfG .-mMkSI_A a,
._1cXxqsT8._3xicDpfG a:hover {
  color: #204ecf;
}
._1cXxqsT8._3xicDpfG .-mMkSI_A p {
  border-color: rgba(32, 78, 207, 0.2);
}
._1cXxqsT8._3xicDpfG .VsStGjXj._2lf3U9la {
  border-right-color: #d2d4d8;
}
._1cXxqsT8._3xicDpfG ._3ATfuKuZ a:hover,
._1cXxqsT8._3xicDpfG .VsStGjXj a:hover {
  opacity: 1;
}
._1cXxqsT8._3xicDpfG ._9fVOHv9t {
  color: #455065;
}
._1cXxqsT8._3xicDpfG ._39YHlWta {
  border-top: 1px solid #d2d4d8;
}
._1cXxqsT8.jaaoA59s {
  background-color: #191e28;
  color: #fff;
}
._31aQZWyI:focus,
._35iK7zmm:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._31aQZWyI:focus:not(:focus-visible),
._35iK7zmm:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
.IpHlFM7w {
  font-family: Merriweather, Georgia, Times New Roman, serif;
  font-weight: 300;
}
._27W_cjOv {
  text-overflow: ellipsis;
  white-space: nowrap;
}
._2AOdQKTV {
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: border-color 0.2s, box-shadow 0.2s;
}
._2AOdQKTV:hover {
  border-color: rgba(32, 78, 207, 0.3);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16);
}
.KxHj95DN {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px;
}
@media (min-width: 768px) {
  ._3avJuwHw .KxHj95DN {
    padding: 32px;
  }
}
._3l9VlKPe {
  align-items: center;
  display: flex;
  height: 0;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 39%;
  position: relative;
  width: 100%;
}
._3l9VlKPe img {
  bottom: 0;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  right: 0;
  top: -10%;
}
._3l9VlKPe:after,
._3l9VlKPe img {
  left: 0;
  position: absolute;
  width: 100%;
}
._3l9VlKPe:after {
  background: #204ecf;
  content: "";
  display: block;
  height: 100%;
  opacity: 0;
  top: 0;
  transition: opacity 0.2s;
}
._2AOdQKTV:hover ._3l9VlKPe:after {
  opacity: 0.5;
}
._3xeRr4HI {
  margin-bottom: -34px;
  position: relative;
  top: -48px;
}
._3xeRr4HI:before {
  border-bottom: 8px solid #fff;
  border-right: 8px solid transparent;
  bottom: 0;
  content: "";
  height: 0;
  position: absolute;
  width: 0;
  z-index: 5;
}
@media (min-width: 768px) {
  ._3avJuwHw ._3xeRr4HI {
    margin-bottom: -50px;
    top: -64px;
  }
}
._1kyxjycq {
  height: 48px;
  width: 48px;
}
@media (min-width: 768px) {
  ._3avJuwHw ._1kyxjycq {
    height: 64px;
    width: 64px;
  }
}
._27W_cjOv {
  color: #455065;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.46px;
  line-height: 20px;
  margin-bottom: 8px;
  overflow: hidden;
  transition: color 0.2s;
  z-index: 2;
}
._27W_cjOv:focus-within {
  overflow: visible;
}
._31aQZWyI {
  color: #455065;
}
._31aQZWyI:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._31aQZWyI:hover {
  color: #204ecf;
}
._31aQZWyI:first-child:before {
  content: none;
}
._31aQZWyI:before {
  background: url(https://frontier-assets.toptal.com/c29bc28de0d5b0a971385179d0c9fbab.svg);
  content: "";
  display: inline-block;
  height: 8px;
  margin-left: 8px;
  margin-right: 8px;
  width: 5px;
}
.PnmEEQ_- {
  color: #262d3d;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 12px;
}
@media (min-width: 768px) {
  ._3avJuwHw .PnmEEQ_- {
    font-size: 26px;
    line-height: 32px;
  }
}
._2AOdQKTV:hover .PnmEEQ_- a {
  color: #204ecf;
}
._35iK7zmm {
  color: inherit;
}
._35iK7zmm:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._35iK7zmm:after {
  bottom: 0;
  content: " ";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: auto;
}
._1mjIKiS3 {
  color: #455065;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: auto;
}
._1mjIKiS3 strong {
  font-weight: 600;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  ._3avJuwHw ._1mjIKiS3 {
    margin-top: 0;
  }
  ._3avJuwHw ._1mjIKiS3 strong {
    text-transform: none;
  }
}
.IpHlFM7w {
  color: #000;
  display: none;
  font-size: 13px;
  line-height: 24px;
  margin: 32px 0;
}
@media (min-width: 768px) {
  ._3avJuwHw .IpHlFM7w {
    display: block;
  }
}
._3XfNRYjc {
  color: #455065;
  display: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 20px;
  margin-top: auto;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  ._3avJuwHw ._3XfNRYjc {
    display: flex;
    justify-content: space-between;
  }
}
.IYgLf9Fx {
  color: #204ecf;
  visibility: hidden;
}
._2AOdQKTV:hover .IYgLf9Fx {
  background-image: url(https://frontier-assets.toptal.com/74ac7ca8a7716bdc66d9f21fc779ac7c.svg);
  background-position: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: auto;
  padding-right: 20px;
  visibility: visible;
}
/* .underline {
  position: relative;
} */
/* .underlinee {
  position: relative;
}
.underlinee {
  position: relative;
}
.underlinee__short {
  position: relative;
} */
/* .underline::before {
  content: "";
  position: absolute;
  width: 200px;
  background: #9d1e81;
  bottom: -8%;
  left: 0%;
  transform: translateX(0%);
  height: 3px;
} */
/* .underlinee__short::before {
  content: "";
  position: absolute;
  width: 100px;
  background: #9d1e81;
  bottom: -8%;
  left: 0%;
  transform: translateX(0%);
  height: 3px;
} */
/* .underlinee::before {
  content: "";
  position: absolute;
  width: 200px;
  background: #9d1e81;
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
} */
@media (min-width: 768px) {
  ._1jHz3wcf {
    font-size: 44px;
    line-height: 56px;
  }
}
._1jHz3wcf sup {
  font-size: 0.6em;
  line-height: 1;
  vertical-align: super;
}
._1jHz3wcf b,
._1jHz3wcf strong {
  font-weight: 600;
}
.LnKbDImM {
  margin-bottom: 24px;
  margin-top: 16px;
  font-size: 2rem;
}
@media (min-width: 768px) {
  .LnKbDImM {
    margin-bottom: 48px;
    margin-top: 24px;
  }
}
._3XIYnvQ8 {
  margin-top: 0;
}
@media (min-width: 768px) {
  ._3XIYnvQ8 {
    margin-top: 0;
  }
}
._2wGkI_Z1,
._3t7loGZ8,
.rArfi2Y4 {
  margin-bottom: 56px;
  font-size: 2rem;
  line-height: 1.3;
}
@media (max-width: 767px) {
  ._2wGkI_Z1,
  ._3t7loGZ8,
  .rArfi2Y4 {
    margin-bottom: 35px;
  }
}
.rArfi2Y4 {
  grid-gap: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 25% 25%;
  grid-template-rows: 1fr 1fr;
  width: 100%;
}
@media (max-width: 1023px) {
  .rArfi2Y4 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
}
@media (max-width: 767px) {
  .rArfi2Y4 {
    display: block;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .rArfi2Y4 > * {
    margin-bottom: 32px;
  }
}
.rArfi2Y4 ._2JS0AOBT:first-child {
  grid-column: 1/3;
  grid-row: 1/3;
}
@media (max-width: 1023px) {
  .rArfi2Y4 ._2JS0AOBT:first-child {
    grid-column: 1/3;
    grid-row: 1/2;
  }
}
@media (max-width: 767px) {
  .rArfi2Y4 ._2JS0AOBT:first-child {
    grid-column: auto;
    grid-row: auto;
  }
}
._21PbwWbz {
  text-align: center;
}
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .rArfi2Y4 {
    display: flex;
    flex-wrap: wrap;
    padding-left: 45%;
    position: relative;
  }
  ._2JS0AOBT {
    flex: 1 0 40%;
    margin: 0 15px 15px 0;
    max-width: 600px;
  }
  ._2JS0AOBT:first-child {
    left: 0;
    position: absolute;
    top: 0;
    width: 44%;
  }
}
@media (-ms-high-contrast: active) and (max-width: 1023px),
  (-ms-high-contrast: none) and (max-width: 1023px) {
  .rArfi2Y4 {
    justify-content: center;
    padding-left: 0;
  }
  ._2JS0AOBT {
    flex-basis: 45%;
    min-width: 250px;
  }
  ._2JS0AOBT:first-child {
    order: 1;
    position: static;
    width: auto;
  }
}
._2-8QnyrN {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 36px 24px;
}
@media (min-width: 1024px) {
  ._2-8QnyrN {
    padding-left: 36px;
    padding-right: 36px;
  }
}
@media (min-width: 768px) {
  ._2-8QnyrN {
    flex-direction: row;
    padding-bottom: 80px;
    padding-top: 80px;
  }
}
._2-8QnyrN ._1wB6xpRs {
  font-size: 24px;
  font-weight: 100;
  line-height: 32px;
}
@media (max-width: 767px) {
  ._2-8QnyrN ._1wB6xpRs {
    text-align: center;
  }
}
._2-8QnyrN ._2-tX5EK8 {
  margin-top: 20px;
  white-space: nowrap;
  width: 100%;
}
@media (min-width: 426px) {
  ._2-8QnyrN ._2-tX5EK8 {
    width: auto;
  }
}
@media (min-width: 768px) {
  ._2-8QnyrN ._2-tX5EK8 {
    margin-left: 20px;
    margin-top: 0;
  }
}
._2-8QnyrN.b8TCI_zN {
  background: #0f256e;
  color: #fff;
}
._2-8QnyrN._67_yUPlK {
  flex-direction: column;
}
._2-8QnyrN._67_yUPlK ._1wB6xpRs {
  font-size: 24px;
  line-height: 32px;
  padding: 32px 0;
}
@media (min-width: 768px) {
  ._2-8QnyrN._67_yUPlK ._1wB6xpRs {
    font-size: 38px;
    line-height: 48px;
    margin-bottom: 40px;
    padding: 0;
  }
}
._2-8QnyrN._67_yUPlK ._2-tX5EK8 {
  margin-left: 0;
}
@media (max-width: 767px) {
  ._2-8QnyrN._67_yUPlK ._2-tX5EK8 {
    margin-top: 0;
  }
}
._2-8QnyrN._1Soxeblk {
  padding: 0;
}
._2ObSwr4- {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.oaVPu_C0 {
  color: #204ecf;
  flex-shrink: 0;
}
.rGgtYEFg._2ObSwr4- {
  flex-direction: row;
}
.rGgtYEFg .oaVPu_C0 {
  margin-right: 16px;
}
._3KPxDsk_ {
  background: #000;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
._2C8ENoxj {
  filter: blur(1px);
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: top left;
  object-position: top left;
  position: absolute;
  width: 100%;
  z-index: 0;
}
._18JBf_I0 {
  color: #fff;
  margin: 100px 102px 57px;
  max-width: 970px;
  position: relative;
  z-index: 1;
}
._18JBf_I0:not(._2AJohSzn) {
  padding: 0 100px;
}
@media (max-width: 1023px) {
  ._18JBf_I0:not(._2AJohSzn) {
    margin-left: 40px;
    margin-right: 40px;
    padding: 0 80px;
  }
}
@media (max-width: 523px) {
  ._18JBf_I0:not(._2AJohSzn) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 0 40px;
  }
}
._3g33M6b6 {
  background: url(https://frontier-assets.toptal.com/a50fc34cf6984b924d281f9cdd8aebe0.svg)
    no-repeat;
  cursor: pointer;
  height: 74px;
  position: absolute;
  top: calc(50% - 74px);
  width: 24px;
}
._2KcdlQEj {
  left: 0;
}
._3RpfHALo {
  right: 0;
  transform: rotate(180deg);
}
.-A1pQCQ5 {
  font-size: 32px;
  font-weight: 300;
  margin: 32px 0;
}
._1Q7j5cmT {
  height: 16px;
  margin: 10px 0 30px;
  width: auto;
}
._17ncs8Oj {
  display: block;
}
@media (max-width: 767px) {
  ._18JBf_I0 {
    margin-left: 40px;
    margin-right: 40px;
  }
  ._3hwli-D- {
    height: 22px;
  }
  .-A1pQCQ5 {
    font-size: 20px;
  }
  ._1Q7j5cmT {
    height: 13px;
  }
}
._2AJohSzn ._3g33M6b6,
.sjDKP_v4 {
  display: none;
}
.sjDKP_v4.YdSuesMy {
  -webkit-animation: jlPSDKnB 0.3s ease-out;
  animation: jlPSDKnB 0.3s ease-out;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  display: block;
  opacity: 0;
}
@-webkit-keyframes jlPSDKnB {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes jlPSDKnB {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
._2O_uVeDU {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}
._3ij2qQ4B {
  border: 1px solid #dfe3e9;
  border-radius: 12px;
  color: #455065;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  margin-right: 8px;
  padding: 3px 10px;
}
._3ij2qQ4B._34wwSbEK {
  border: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  min-height: 24px;
}
._3ij2qQ4B._34wwSbEK,
._3ij2qQ4B._34wwSbEK:hover {
  background: #fff;
  color: #204ecf;
}
._3ij2qQ4B._1ga5ehP9 {
  text-align: center;
}
._3ij2qQ4B._1k1JOvjy {
  color: #455065;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  min-height: 24px;
}
._3ij2qQ4B._1k1JOvjy:hover {
  background-color: hsla(0, 0%, 100%, 0.8);
  color: #204ecf;
}
._3ij2qQ4B.AxOq3j82 {
  border: 1px solid #204ecf;
  color: #204ecf;
}
._3ij2qQ4B._3anqH8N5,
._3ij2qQ4B.AxOq3j82 {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
._3ij2qQ4B._3anqH8N5 {
  border: 1px solid #fff;
  color: #fff;
}
._3ij2qQ4B.Jh1lHwNz {
  border-radius: 22px;
  font-size: 18px;
  line-height: 32px;
}
a._3ij2qQ4B:hover {
  background-color: rgba(32, 78, 207, 0.16);
  color: #204ecf;
}
a._34wwSbEK,
a.AxOq3j82:hover {
  background-color: rgba(32, 78, 207, 0.05);
  color: #204ecf;
}
a._3anqH8N5:hover {
  background-color: hsla(0, 0%, 100%, 0.1);
  color: #fff;
}
._1J76aH-M,
._1J76aH-M:visited {
  color: #262d3d;
}
._1J76aH-M:hover {
  color: #204ecf;
}
._3dHn5Dyo,
._3dHn5Dyo:visited {
  color: #455065;
}
._3dHn5Dyo:hover,
._33DCQ6Tb,
._33DCQ6Tb:hover,
._33DCQ6Tb:visited {
  color: #204ecf;
}
.IMjN2Vr6,
.IMjN2Vr6:visited {
  color: #25a9ef;
}
.IMjN2Vr6:hover {
  color: #204ecf;
}
._1OsgHkfd,
._1OsgHkfd:visited {
  color: #fff;
}
._1OsgHkfd:hover {
  color: #c4c6ca;
}
._3DVBgOPZ,
._3DVBgOPZ:hover {
  text-decoration: none;
}
._1RFsjDZ2 {
  text-decoration: underline;
}
._1RFsjDZ2:hover {
  text-decoration: none;
}
._174XZM4V,
._174XZM4V:hover {
  text-decoration: underline;
}
._3YJuP5gD {
  text-decoration: none;
}
._3YJuP5gD:hover {
  text-decoration: underline;
}
._1e5wuGS1 {
  color: #455065;
  font-weight: 600;
  margin: 0;
}
.URDchqwd,
.URDchqwd:hover,
.URDchqwd:visited {
  color: #204ecf;
  font-weight: 600;
}
._2NETgTks {
  align-items: stretch;
  color: #455065;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 432px;
  padding: 32px 24px 24px;
}
@media (max-width: 1023px) {
  ._2NETgTks {
    min-height: 0;
  }
}
._2NETgTks:after,
._2NETgTks:before {
  display: none;
}
._1P8xNCJ7 {
  border-radius: 50%;
  height: 48px;
  width: 48px;
}
._1P8xNCJ7,
._2SuKOAXp {
  flex-shrink: 0;
  margin: 0 12px 8px 0;
}
._2SuKOAXp {
  height: 40px;
  width: 40px;
}
@supports (
  (
      -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 8px
            100%, 0 calc(100% - 8px))
    )
    or
    (
      clip-path:
        polygon(
          0 0,
          calc(100% + 1px) 0,
          calc(100% + 1px) 100%,
          8px 100%,
          0 calc(100% - 8px)
        )
    )
) {
  ._2SuKOAXp {
    -webkit-clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      8px 100%,
      0 calc(100% - 8px)
    );
    clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      8px 100%,
      0 calc(100% - 8px)
    );
  }
  ._2SuKOAXp:after {
    content: none !important;
  }
}
.T7r2Eeqx {
  color: #204ecf;
  height: 24px;
  margin-bottom: 8px;
  width: 24px;
}
._3ruK4ntN {
  color: #455065;
  flex: 1;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding: 0 0 24px;
}
._29MIKyIL {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.qMnyaGE9 {
  flex: 1;
  font-size: 14px;
  line-height: 14px;
  min-width: 150px;
}
._29ia6udu,
._29Rz5mjw {
  font-weight: 400;
  margin-top: 2px;
}
.JoVWwBm5 {
  margin-top: 16px;
}
._2ydOxLGx {
  font-size: 12px;
  margin-bottom: 8px;
}
._1jR4h4Pq {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}
._3c0XmpYI {
  background-color: #ebeced;
  padding: 48px 0 64px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  ._2VcBRgX2:last-child:not(:first-child):nth-child(odd) {
    display: block;
  }
}
._1mBgddMP {
  height: 100%;
  min-height: auto;
  width: 100%;
}
._3wZgC01h {
  margin: 32px 0 72px;
}
@media (max-width: 767px) {
  ._3wZgC01h {
    margin-bottom: 48px;
  }
}
._3JslPmkL {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
}
._1LwwOY5T,
._2aYXDjr3 {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}
._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._2aYXDjr3 {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
}
.Qq-iPMxM {
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 38px;
  max-width: 100%;
}
._1uIAd9Ad {
  align-items: center;
  display: flex;
  flex: 0;
  margin-bottom: 40px;
  min-height: 85px;
  width: 100%;
}
.jeqnJEqF {
  height: auto;
  max-width: 200px;
  width: auto;
}
.ZxJ1uE03 {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: auto;
}
._1NqI8JmY {
  background: url(https://frontier-assets.toptal.com/0caaf40091e4785d1962709a93770a8b.svg)
    no-repeat 100%;
  margin-right: 8px;
  padding-right: 22px;
}
@media (min-width: 1024px) and (max-width: 1199px) {
  ._1NqI8JmY {
    background: none;
    padding-right: 0;
  }
}
._16aTA28q {
  color: #204ecf;
  height: 30px;
  width: 30px;
}
._1UhmiUga {
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  max-width: 500px;
  width: 100%;
}
._1liAAfjS {
  margin-bottom: 16px;
  margin-top: auto;
  padding-top: 35px;
}
._2O26Zuqj {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.ivvUQSqp {
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
}
._1LwwOY5T {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  margin-bottom: 4px;
  min-height: 520px;
}
._1LwwOY5T._1LwwOY5T {
  color: #262d3d;
}
._1LwwOY5T .ZxJ1uE03 {
  color: #262d3d;
  display: flex;
  height: 48px;
  justify-content: space-between;
  margin-top: 10px;
  transition: all 0.2s;
  width: 100%;
}
._1LwwOY5T .ZxJ1uE03:after {
  content: url(https://frontier-assets.toptal.com/b6021c31f4000214a8828c661253af51.svg);
  padding-left: 10px;
}
._1LwwOY5T .ivvUQSqp {
  color: rgba(38, 45, 61, 0.6);
}
._1LwwOY5T:hover {
  border: 1px solid rgba(32, 78, 207, 0.3);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
}
._1LwwOY5T:hover .ZxJ1uE03 {
  color: #204ecf;
}
._1LwwOY5T._1LwwOY5T:after,
._1LwwOY5T._1LwwOY5T:before {
  background: none;
}
._3p_xLXZw {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.46px;
  margin-top: auto;
  text-transform: uppercase;
}
._2aYXDjr3 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  padding: 12px;
  position: relative;
  transition: background 0.4s ease-in;
}
._2aYXDjr3 > * {
  position: relative;
  z-index: 4;
}
._2aYXDjr3._1doXJJpm {
  overflow: hidden;
}
._2aYXDjr3._1doXJJpm .video-cta:after {
  bottom: 0;
  content: " ";
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
._2aYXDjr3 ._3-8TMpeS + .Qq-iPMxM:nth-last-child(2) {
  margin-top: auto;
}
._2aYXDjr3 ._3-8TMpeS + .Qq-iPMxM:nth-last-child(2) + .video-cta {
  margin-top: 0;
}
._2aYXDjr3 ._2ud0q49P,
._2aYXDjr3 ._3-8TMpeS,
._2aYXDjr3 figure,
._2aYXDjr3 video {
  bottom: 0;
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
}
._2aYXDjr3 ._2ud0q49P img,
._2aYXDjr3 ._3-8TMpeS img,
._2aYXDjr3 figure img,
._2aYXDjr3 video img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
._2aYXDjr3 ._2ud0q49P img {
  object-position: top;
}
._2aYXDjr3 ._2ud0q49P,
._2aYXDjr3 ._3-8TMpeS {
  display: block;
  transition: transform 0.2s ease-in;
  will-change: transform;
  z-index: 1;
}
._2aYXDjr3 video {
  -o-object-fit: cover;
  object-fit: cover;
}

._2aYXDjr3.k4Kjb1Dh {
  overflow: hidden;
}
._2aYXDjr3.k4Kjb1Dh:hover ._2ud0q49P {
  transform: scale(1.1);
}
._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03 {
  background: url(https://frontier-assets.toptal.com/eada713438b527e5f764bec7d96c24a4.svg)
    no-repeat 100%;
  padding-right: 40px;
  position: static;
}
._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus {
  outline-color: #204ecf;
  z-index: 4;
}
._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:after {
  bottom: 0;
  content: " ";
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
._2aYXDjr3._1doXJJpm:hover figure,
._2aYXDjr3._1doXJJpm:hover video {
  display: block;
  z-index: 1;
}
._2aYXDjr3._1fycIOYl:hover ._3-8TMpeS {
  transform: scale(1.1);
}
._2aYXDjr3:after,
._2aYXDjr3:before {
  bottom: 0;
  content: " ";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s;
  z-index: 2;
}
._2aYXDjr3:before {
  background-image: linear-gradient(
    180deg,
    #000,
    rgba(0, 0, 0, 0.25) 0,
    rgba(0, 0, 0, 0.8)
  );
}
._2aYXDjr3:after {
  background-image: linear-gradient(180deg, rgba(15, 37, 110, 0.25), #0f256e);
  opacity: 0;
  z-index: 3;
}
._2aYXDjr3:not(.no-hover):hover:after {
  opacity: 1;
}
._2aYXDjr3:not(.no-hover):hover:before {
  opacity: 0;
}
._2vQjp_O2,
._64wRZ6xh {
  height: 100%;
}
@media (min-width: 1024px) {
  ._64wRZ6xh {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 24px;
  }
}
@media (max-width: 1023px) {
  ._64wRZ6xh {
    padding-bottom: 8px;
  }
  ._vWh44cV:not(:first-child) ._64wRZ6xh {
    padding-top: 64px;
  }
}
._1r8wFQ13 {
  margin: 0;
  font-size: 2rem;
}

@media (max-width: 700px) {
  ._1r8wFQ13 {
    text-align: center;
  }

  /* .underline::before {
    content: "";
    position: absolute;
    width: 200px;
    background: #9d1e81;
    bottom: -8%;
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 3px;
  }

  .underlinee__short::before {
    content: "";
    position: absolute;
    width: 100px;
    background: #9d1e81;
    bottom: -8%;
    left: 50% !important;
    transform: translateX(-50%) !important;
    height: 3px;
  } */
}
@media (min-width: 1024px) {
  ._1r8wFQ13 {
    text-align: left;
  }
}
._2Fa2w4cD {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 16px;
  text-align: center;
}
@media (min-width: 1024px) {
  ._2Fa2w4cD {
    margin-top: 24px;
    text-align: left;
  }
}
._7qDyl__j {
  margin-top: 20px;
}
@media (min-width: 768px) {
  ._7qDyl__j {
    margin-top: 30px;
  }
}
@media (min-width: 1024px) {
  ._7qDyl__j {
    margin-top: 50px;
  }
}
._7qDyl__j p {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 24px;
  text-align: center;
}
._2pGhqCYE {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  text-align: center;
}
@media (min-width: 426px) {
  ._2pGhqCYE {
    display: block;
  }
}
._2G2JjfI1 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
._3T2RAMQY {
  margin-right: 8px;
}
._3HFXXekl {
  width: 12px;
}
._21XVCEp9 {
  font-size: 14px;
  line-height: 20px;
}
._21XVCEp9 ._3HFXXekl {
  transform: translateY(1px);
}
._1ZTp8iQx {
  font-size: 22px;
  font-weight: 400;
  line-height: 36px;
  padding-right: 36px;
}
._1ZTp8iQx ._3HFXXekl {
  transform: translateY(3px);
  width: 24px;
}
._1RDd4lYz ._3HFXXekl {
  display: none;
}
._1RDd4lYz:hover ._3HFXXekl {
  display: inline;
}
@media (max-width: 443px) {
  ._1cwKlNuP {
    text-align: center;
  }
}
._8hq62nwZ {
  font-size: 24px;
  font-weight: 100;
  padding-bottom: 24px;
}
.zjL-4_Jq {
  -moz-columns: 190px 4;
  columns: 190px 4;
  font-size: 16px;
  font-weight: 300;
}
.rY5wqR2J {
  -moz-column-break-inside: avoid;
  break-inside: avoid;
  line-height: 24px;
  list-style: none;
  padding: 8px 0;
}
.lLehEWy0._1cwKlNuP {
  background: #0f256e;
  color: #fff;
}
.lLehEWy0 ._2cc321tl {
  color: #fff;
  font-weight: 400;
}
.lLehEWy0 ._2cc321tl:focus,
.lLehEWy0 ._2cc321tl:hover {
  color: hsla(0, 0%, 100%, 0.7);
}
._2g_ZO6j8 {
  border-bottom: 1px solid #dfe3e9;
  padding: 48px 0;
}
._2g_ZO6j8:first-child {
  padding-top: 0;
}
._1eRZ5EeE {
  font-size: 44px;
  font-weight: 300;
  margin: 36px 0 30px;
  text-align: center;
}
@media (max-width: 767px) {
  ._1eRZ5EeE {
    font-size: 28px;
  }
}
.YSQ5c5aR {
  margin: 0 auto;
}
._3BDPpGRM {
  justify-content: center;
  padding-top: 16px;
}
@media (max-width: 767px) {
  ._3_zJ8691:not(:last-child) {
    margin-bottom: 16px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  ._3_zJ8691 {
    max-width: 390px;
  }
  ._3_zJ8691:nth-child(n + 3) {
    display: none;
  }
}

/* about */

body,
html {
  font-family: Proxima Nova, Arial, sans-serif;
  font-weight: 400;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input {
  font-family: inherit;
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 100;
  src: url(https://frontier-assets.toptal.com/f8e4e5e0f88fa92b8b2b.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/0f40909c90d204c68ab5.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/b0d2279d75279ba5b3fd.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 300;
  src: url(https://frontier-assets.toptal.com/d80ad4c8e18059ddc460.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/1b578e8b5c4ac92b8395.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/367531d5c657281665cd.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 400;
  src: url(https://frontier-assets.toptal.com/291c741712fd3b53e3cd.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/4d2d8ebe56464cd7234e.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/7bc9ce404c297c24f210.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600 700;
  src: url(https://frontier-assets.toptal.com/7e622b82efdc7e3662c0.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/2df1420bba54cdc8bee3.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/227817852e96b494055e.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  src: url(https://frontier-assets.toptal.com/5692a0fd0fec2c692caf.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/ae93bdb515c61f6307ab.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/d020fef2646f9f861c69.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Merriweather;
  font-style: normal;
  font-weight: 700;
  src: url(https://frontier-assets.toptal.com/9f66e37ff984bf3f54bb.woff2)
      format("woff2"),
    url(https://frontier-assets.toptal.com/968299b4b4ed52de98a9.woff)
      format("woff"),
    url(https://frontier-assets.toptal.com/6ede7d35b91bce6e353e.otf)
      format("opentype");
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova Multilingual;
  font-style: normal;
  font-weight: 100;
  src: url(https://frontier-assets.toptal.com/171d924e0fa001dee770.woff2),
    url(https://frontier-assets.toptal.com/1eb6f8cf27c0406ffed1.woff),
    url(https://frontier-assets.toptal.com/ddec4af517d3d5821549.otf);
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova Multilingual;
  font-style: normal;
  font-weight: 300;
  src: url(https://frontier-assets.toptal.com/e0dcbac603887e4774c3.woff2),
    url(https://frontier-assets.toptal.com/3833e876643e8ec7dcd0.woff),
    url(https://frontier-assets.toptal.com/ee6686278a43c4f15b72.otf);
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova Multilingual;
  font-style: normal;
  font-weight: 400;
  src: url(https://frontier-assets.toptal.com/6e4e8cc969c769c98818.woff2),
    url(https://frontier-assets.toptal.com/772b9057a3374df8ff95.woff),
    url(https://frontier-assets.toptal.com/7bc9ce404c297c24f210.otf);
}

@font-face {
  font-display: swap;
  font-family: Proxima Nova Multilingual;
  font-style: normal;
  font-weight: 600 700;
  src: url(https://frontier-assets.toptal.com/9458fc65c752c7f20436.woff2),
    url(https://frontier-assets.toptal.com/1a242e600e80bc63039f.woff),
    url(https://frontier-assets.toptal.com/f7fd1364e8975154466c.otf);
}

body,
html {
  height: 100%;
  scroll-behavior: smooth;
}

#page-root {
  min-height: 100%;
}

._1bcYCljm {
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}

._1bcYCljm + ._1bcYCljm {
  margin-left: 8px;
}

._3qSF9CYT {
  font-size: 12px;
  line-height: 16px;
  padding: 3px 16px;
}

._3McSaz1R {
  font-size: 14px;
  line-height: 20px;
  padding: 7px 24px;
}

._3n8NuEgU {
  font-size: 16px;
  line-height: 24px;
  padding: 13px 48px;
}

@media (max-width: 767px) {
  ._3n8NuEgU {
    padding-left: 32px;
    padding-right: 32px;
  }
}

._344Tj4__ {
  font-size: 20px;
  line-height: 28px;
  padding: 11px 64px;
}

@media (max-width: 767px) {
  ._344Tj4__ {
    padding-left: 32px;
    padding-right: 32px;
  }
}

._2u-I7BW0 {
  /* background: #00cc83; */
  /* border-color: #00cc83; */
  border-color: #9d1e81;

  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._2u-I7BW0.mt5Y6x-K,
._2u-I7BW0:hover {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
}

._2u-I7BW0._3OgVEeN8,
._2u-I7BW0:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}

._1G_ocH1a {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._1G_ocH1a.mt5Y6x-K,
._1G_ocH1a:hover {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
}

._1G_ocH1a._3OgVEeN8,
._1G_ocH1a:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}

._3ZEWDKfF {
  background: transparent;
  border-color: #9d1e81;
  color: #9d1e81;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._3ZEWDKfF.mt5Y6x-K,
._3ZEWDKfF:hover {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
}

._3ZEWDKfF._3OgVEeN8,
._3ZEWDKfF:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._2AywhfSi {
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._2AywhfSi.mt5Y6x-K,
._2AywhfSi:hover {
  background: hsla(0, 0%, 100%, 0.05);
  border-color: #fff;
  color: #fff;
}

._2AywhfSi._3OgVEeN8,
._2AywhfSi:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._7hPQ_Wwr {
  background: #fff;
  border-color: #d8d9dc;
  color: #204ecf;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._7hPQ_Wwr.mt5Y6x-K,
._7hPQ_Wwr:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}

._7hPQ_Wwr._3OgVEeN8,
._7hPQ_Wwr:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._1Wpamv8F {
  background: #fff;
  border-color: #d8d9dc;
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._1Wpamv8F.mt5Y6x-K,
._1Wpamv8F:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}

._1Wpamv8F._3OgVEeN8,
._1Wpamv8F:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

.Mw_6M_G0 {
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

.Mw_6M_G0,
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  background: transparent;
  border-color: transparent;
}

.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  color: #183a9e;
}

.Mw_6M_G0._3OgVEeN8,
.Mw_6M_G0:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._6Zgcud2o {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
}

._1ZQ2DzIc:focus,
._3WOR0P94:focus,
._2716rq5F:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._1ZQ2DzIc:focus:not(:focus-visible),
._3WOR0P94:focus:not(:focus-visible),
._2716rq5F:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._3WOR0P94._3kMpP7da:after,
._3WOR0P94:hover:after,
._37cER8jB.w3wrzl58 ._2_UMVhrR:not(:focus):after {
  border-top: 2px solid #204ecf;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  width: 100%;
}

.CwHwCIsY {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  height: 64px;
  margin: 0 auto;
  max-width: 1272px;
  padding: 0 16px;
  position: relative;
  width: 100%;
}

@media (min-width: 1200px) {
  .CwHwCIsY:not(._2AUNzqse) {
    padding: 0 36px;
  }
}

.CwHwCIsY:focus-within {
  overflow: visible;
}

._2WQ1bk3l {
  align-items: center;
  display: flex;
  height: 64px;
  margin-right: 40px;
  min-height: 64px;
  position: relative;
}

._2hn_0aiE {
  display: none;
  list-style: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 768px) {
  ._2hn_0aiE._2j8Bi4Lq {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    width: 100%;
  }
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
  margin-bottom: 10px;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

._2V8cVnTd {
  display: none;
  height: 100%;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

._3xz6sTpw ._2V8cVnTd {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  width: 100%;
}

._3HIyy71x + ._3HIyy71x {
  margin-left: 16px;
}

._3WOR0P94 {
  align-items: center;
  color: #262d3d;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  position: relative;
  text-decoration: none;
}

._3WOR0P94:focus {
  align-self: center;
  max-height: 56px;
  outline-color: #204ecf;
  z-index: 1;
}

._3xz6sTpw ._3WOR0P94 {
  border-bottom: 1px solid #ebeced;
  font-size: 16px;
  height: 46px;
  margin-left: 0;
  width: 100%;
}

._3xz6sTpw ._3WOR0P94:after {
  display: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

._37cER8jB {
  display: flex;
}

.l_18QO0k {
  content: "";
  display: block;
  height: 10px;
  margin-left: 4px;
  margin-top: 3px;
  transform: rotate(90deg);
  transition: transform 0.2s linear;
  width: 10px;
}

._2_UMVhrR {
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
}

._2_UMVhrR:focus:after {
  margin-top: 4px;
}

._6Zgcud2o {
  background: #fff;
  border-radius: 0 0 4px 4px;
  display: none;
  max-width: 380px;
  padding: 16px;
  position: absolute;
  top: 100%;
  width: 380px;
}

._1ZQ2DzIc {
  color: #455065;
  display: block;
  padding: 8px;
}

._1ZQ2DzIc:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1ZQ2DzIc:hover {
  color: #204ecf;
}

._3JWeZNpb {
  margin-left: auto;
}

._2716rq5F {
  width: 100%;
}

._2716rq5F:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._2716rq5F.OPGINcUC {
  font-weight: 400;
  padding-left: 0;
  padding-right: 0;
}

._2zORpOH1 {
  margin: 0 0 0 auto;
  position: absolute;
  right: 16px;
  top: 15px;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2zORpOH1 {
    display: none;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2zORpOH1 {
    display: none;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2zORpOH1 {
    display: none;
  }
}

._1g37weM4 {
  display: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

.CwHwCIsY._3xz6sTpw {
  align-items: flex-start;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

.CwHwCIsY._3xz6sTpw ._2hn_0aiE {
  display: block;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

.CwHwCIsY._3xz6sTpw ._2hn_0aiE._2j8Bi4Lq {
  display: none;
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
  flex-grow: 1;
}

@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
    margin-left: 16px;
  }
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn:first-child {
  margin-left: 0;
}

@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb {
    flex-direction: row;
  }
}

.CwHwCIsY._3xz6sTpw .irsyFUit {
  overflow-y: auto;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw .irsyFUit:focus-within {
  overflow-y: visible;
}

.CwHwCIsY._3xz6sTpw ._2zORpOH1 {
  display: block;
}

.CwHwCIsY._3xz6sTpw ._3HIyy71x {
  margin-left: 0;
}

.CwHwCIsY._3xz6sTpw ._37cER8jB {
  border-bottom: 1px solid #ebeced;
  display: block;
  flex-basis: 46px;
  overflow: hidden;
  transition: flex-basis 0.3s ease-in-out;
}

.CwHwCIsY._3xz6sTpw ._37cER8jB._34JlE2Hu {
  flex-basis: auto;
  transition: none;
}

.CwHwCIsY._3xz6sTpw ._2_UMVhrR {
  border-bottom: none;
  height: 46px;
  width: 100%;
}

@media (max-width: 767px) {
  .CwHwCIsY._3xz6sTpw ._2_UMVhrR {
    justify-content: space-between;
  }
}

.CwHwCIsY._3xz6sTpw ._6Zgcud2o {
  box-shadow: none;
  display: block;
  max-width: none;
  padding: 0 0 24px;
  position: static;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw ._1ZQ2DzIc {
  padding-left: 0;
}

._37cER8jB.w3wrzl58 ._6Zgcud2o {
  display: block;
}

._37cER8jB.w3wrzl58 .l_18QO0k {
  transform: rotate(-90deg);
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse)
    ._2V8cVnTd
    ._37cER8jB.w3wrzl58
    ._2_UMVhrR {
    opacity: 1;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}

._3xz6sTpw ._37cER8jB.w3wrzl58 ._2_UMVhrR {
  font-weight: 600;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf),
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3l7e8OkS,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3wva0pDs,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) .OPGINcUC {
  color: #fff;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._1TkDKt3Q {
  background: #fff;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3WOR0P94 {
  color: #fff;
}

.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._3WOR0P94:hover:after,
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._37cER8jB.w3wrzl58
  ._2_UMVhrR:after {
  border-top-color: #fff;
}

.ap5SohHH {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  height: 64px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}

.ap5SohHH:focus-within {
  overflow: visible;
}

.ap5SohHH._2ExEwWJ- {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
}

.GSsufXWr {
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 24px;
}

.GSsufXWr > span {
  background-color: currentColor;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin: 6px 0;
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
}

.GSsufXWr._2K4zc3od > span:nth-child(2n) {
  margin-top: -9px;
  transform: rotate(-45deg);
}

.GSsufXWr._2K4zc3od > span:first-child {
  margin-top: 16px;
  transform: rotate(45deg);
}

.GSsufXWr._2K4zc3od > span:last-child {
  opacity: 0;
}

._27w5BS2q:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._27w5BS2q:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._58Zij-Oo {
  align-items: baseline;
  color: #455065;
  display: flex;
  flex-shrink: 0;
  font-size: 29px;
  line-height: 29px;
  max-width: 100%;
}

._58Zij-Oo img,
._58Zij-Oo svg {
  display: inline-block;
  vertical-align: -17.5%;
}

._58Zij-Oo svg {
  transform: translateY(0.5px);
}

._27w5BS2q {
  align-items: baseline;
  color: inherit;
  display: flex;
}

._27w5BS2q:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1YO-qTkC {
  color: #204ecf;
  line-height: 32px;
}

._1YO-qTkC,
.JZBjwybU {
  height: 32px;
}

._1SDD_TaP {
  height: 29px;
  margin: 0 9px 0 1px;
}

._1SDD_TaP:not([class*="hidden"]) + ._2yx3tQoS > span {
  color: inherit;
}

._2yx3tQoS {
  margin: 0 0 0 -6px;
}

._2yx3tQoS span {
  color: #204ecf;
  font-size: 13px;
  line-height: 13px;
  vertical-align: -26%;
}

._1KvUc_3R {
  color: #262d3d;
  font-size: 30px;
  letter-spacing: -1px;
  margin: 0 0 0 8px;
  white-space: nowrap;
}

._1lvdjAD0 {
  align-items: baseline;
  display: flex;
  margin-left: 16px;
  min-height: 32px;
}

.cpfvvVen:before {
  border-left: 1px solid #c4c6ca;
  content: "";
  display: inline-block;
  height: 32px;
  margin-right: 16px;
  vertical-align: -20%;
}

._3eQ_EZmB {
  color: #455065;
  display: inline-block;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 19px;
}

._3eQ_EZmB span {
  font-size: 13px;
  line-height: 13px;
  vertical-align: -30%;
}

._2FUhxoSV ._1KvUc_3R,
._2FUhxoSV ._1YO-qTkC,
._2FUhxoSV ._2yx3tQoS > span,
._2FUhxoSV ._3eQ_EZmB,
._2FUhxoSV._58Zij-Oo {
  color: inherit;
}

._1ZjdOUzr {
  line-height: 35px;
}

._1ZjdOUzr ._1YO-qTkC,
._1ZjdOUzr .JZBjwybU {
  height: 37px;
}

._1ZjdOUzr ._1SDD_TaP {
  height: 35px;
}

._1ZjdOUzr ._2yx3tQoS span {
  font-size: 15px;
}

._1ZjdOUzr ._1KvUc_3R {
  font-size: 36px;
  letter-spacing: -1.2px;
  margin-left: 9px;
}

._3Qr50Vve {
  line-height: 22px;
}

._3Qr50Vve ._1YO-qTkC,
._3Qr50Vve .JZBjwybU {
  height: 25px;
}

._3Qr50Vve ._1SDD_TaP {
  height: 22px;
  margin-right: 7px;
}

._3Qr50Vve ._2yx3tQoS {
  margin: 0 0 0 -5px;
}

._3Qr50Vve ._2yx3tQoS span {
  font-size: 10px;
  line-height: 11px;
}

._3Qr50Vve ._1KvUc_3R {
  font-size: 24px;
  letter-spacing: -0.8px;
  margin-left: 6px;
}

._3Qr50Vve svg {
  transform: none;
}

.A1tn-zbg {
  line-height: 17px;
}

.A1tn-zbg ._1YO-qTkC,
.A1tn-zbg .JZBjwybU {
  height: 21px;
}

.A1tn-zbg ._1SDD_TaP {
  height: 18px;
  margin-right: 4px;
}

.A1tn-zbg ._2yx3tQoS {
  margin: 0 0 0 -3px;
}

.A1tn-zbg ._2yx3tQoS span {
  font-size: 8px;
  line-height: 10px;
}

.A1tn-zbg ._1KvUc_3R {
  font-size: 18px;
  letter-spacing: -0.6px;
  margin-left: 4px;
}

._27Qp7-0j {
  display: none;
}

@media (min-width: 768px) {
  ._2bE-MpfW {
    display: none;
  }
}

@media (min-width: 1024px) {
  ._1qWPArs6 {
    display: none;
  }
}

@media (min-width: 1200px) {
  ._3gIwdeKZ {
    display: none;
  }
}

@media (min-width: 768px) {
  .aSm5Eu45 {
    display: unset;
  }

  .aSm5Eu45 + ._2yx3tQoS > span {
    color: inherit;
  }
}

@media (min-width: 1024px) {
  .sQf4YFbG {
    display: unset;
  }

  .sQf4YFbG + ._2yx3tQoS > span {
    color: inherit;
  }
}

@media (min-width: 1200px) {
  .Pr_2B7aa {
    display: unset;
  }

  .Pr_2B7aa + ._2yx3tQoS > span {
    color: inherit;
  }
}

._1gM6aSr1,
._1gM6aSr1 ._1lvdjAD0,
._1gM6aSr1 ._27w5BS2q {
  align-items: center;
}

._1gM6aSr1 ._3eQ_EZmB {
  display: block;
  padding-top: 4px;
}

._1gM6aSr1 ._2yx3tQoS span {
  vertical-align: -40%;
}

@media (min-width: 768px) {
  ._3oXj0__2,
  ._3oXj0__2 ._1lvdjAD0,
  ._3oXj0__2 ._27w5BS2q {
    align-items: center;
  }

  ._3oXj0__2 ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  ._3oXj0__2 ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 1024px) {
  .N3vjTBqY,
  .N3vjTBqY ._1lvdjAD0,
  .N3vjTBqY ._27w5BS2q {
    align-items: center;
  }

  .N3vjTBqY ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  .N3vjTBqY ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 1200px) {
  ._3a2ad5pt,
  ._3a2ad5pt ._1lvdjAD0,
  ._3a2ad5pt ._27w5BS2q {
    align-items: center;
  }

  ._3a2ad5pt ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  ._3a2ad5pt ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 768px) {
  ._1YE9rzs1,
  ._1YE9rzs1 ._1lvdjAD0,
  ._1YE9rzs1 ._27w5BS2q {
    align-items: baseline;
  }

  ._1YE9rzs1 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._1YE9rzs1 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

@media (min-width: 1024px) {
  ._3ofkGqyM,
  ._3ofkGqyM ._1lvdjAD0,
  ._3ofkGqyM ._27w5BS2q {
    align-items: baseline;
  }

  ._3ofkGqyM ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._3ofkGqyM ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

@media (min-width: 1200px) {
  ._2IToekk2,
  ._2IToekk2 ._1lvdjAD0,
  ._2IToekk2 ._27w5BS2q {
    align-items: baseline;
  }

  ._2IToekk2 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._2IToekk2 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

._2EepOHy1 img,
._2EepOHy1 svg {
  height: 100%;
  width: auto;
}

.xVo_5L7k {
  color: inherit;
}

.xVo_5L7k svg path {
  fill: currentColor;
}

._3Wv9utNN a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._3Wv9utNN a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._7QdK4zyR {
  align-items: center;
  background: rgba(38, 45, 61, 0.95);
  bottom: -1000px;
  display: flex;
  font-weight: 100;
  justify-content: space-between;
  left: 0;
  opacity: 0;
  padding: 20px 15px;
  position: fixed;
  right: 0;
  transition-delay: 0s, 0.3s;
  transition-duration: 0.3s, 0.01s;
  transition-property: opacity, bottom;
  z-index: 100;
}

@media (min-width: 1024px) {
  ._7QdK4zyR {
    padding: 20px 50px;
  }
}

@media (max-width: 767px) {
  ._2_Bs6D8F {
    flex-direction: column;
    text-align: center;
  }
}

._1X5ZYp4i {
  bottom: 0;
  opacity: 1;
  transition-delay: 0s;
}

._3jl4op_D {
  position: static;
}

._3Wv9utNN {
  font-size: 16px;
  line-height: 20px;
}

._1MIke5bW ._3Wv9utNN {
  color: #c4c6ca;
}

._2_Bs6D8F ._3Wv9utNN {
  color: #fff;
}

._3Wv9utNN a {
  text-decoration: underline;
}

._3Wv9utNN a:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1MIke5bW ._3Wv9utNN a {
  color: #c4c6ca;
}

._2_Bs6D8F ._3Wv9utNN a {
  color: #00cc83;
}

._1MIke5bW ._3Wv9utNN a:hover {
  color: #fff;
}

._2_Bs6D8F ._3Wv9utNN a:hover {
  color: #00e693;
}

._1WV0LMf5 {
  margin-left: 24px;
}

@media (max-width: 767px) {
  ._2_Bs6D8F ._1WV0LMf5 {
    margin: 20px 0 0;
  }
}

.FjKAy-Wz {
  white-space: nowrap;
}

.TMXH2M8I {
  pointer-events: none;
  position: sticky;
  z-index: 5;
}

@media (max-width: 524px) {
  .TMXH2M8I {
    display: none;
  }
}

@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .TMXH2M8I {
    position: relative;
    top: 0 !important;
  }
}

.TMXH2M8I._1maNdH9z {
  position: relative;
  top: 0 !important;
}

._1_o8QAUw {
  pointer-events: all;
  transition: height 0.3s linear;
}

._1maNdH9z ._1_o8QAUw {
  height: 100% !important;
}

._3Kihj3YY {
  margin-top: -32px !important;
}

._2vzRRnG7 {
  margin-top: -128px !important;
}

._3vbT-Z4e {
  margin-bottom: 64px !important;
}

._23doqB1h {
  height: 100%;
}

._2HC6LiUS,
._23doqB1h._2589Yfp9 {
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
}

._2HC6LiUS {
  display: flex;
  height: 100%;
  justify-content: space-around;
  margin: auto;
  max-width: 1200px;
}

._2589Yfp9 ._2HC6LiUS {
  box-shadow: none;
}

@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  ._2HC6LiUS {
    margin-top: 0;
  }
}

._1UKuglqd {
  border-bottom: 5px solid transparent;
  flex: 1;
  height: 100%;
  margin: 0 60px;
}

._1UKuglqd a {
  align-items: center;
  color: #9d1e81;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  justify-content: center;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
}

._1UKuglqd.is-current {
  border-bottom-color: #204ecf;
}

._2HC6LiUS:hover ._1UKuglqd:not(:hover) {
  opacity: 0.7;
}

@media (max-width: 1024px) {
  ._1UKuglqd {
    margin: 0;
    padding: 0 8px;
    width: 100%;
  }
}

._3LOPUP7d {
  margin-bottom: 96px;
}

._3DOEOvRI {
  margin-bottom: 64px;
}

._1YibmBYc:last-child:not(._1_bvS4sL),
._11ZqUWmz {
  margin-bottom: 0;
}

._2_32njdU {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  width: 1372px;
}

@media (min-width: 1024px) {
  ._2_32njdU {
    padding-left: 36px;
    padding-right: 36px;
  }
}

._2G2JjfI1 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

._3T2RAMQY {
  margin-right: 8px;
}

._3HFXXekl {
  width: 12px;
}

._21XVCEp9 {
  font-size: 14px;
  line-height: 20px;
}

._21XVCEp9 ._3HFXXekl {
  transform: translateY(1px);
}

._1ZTp8iQx {
  font-size: 22px;
  font-weight: 400;
  line-height: 36px;
  padding-right: 36px;
}

._1ZTp8iQx ._3HFXXekl {
  transform: translateY(3px);
  width: 24px;
}

._1RDd4lYz ._3HFXXekl {
  display: none;
}

._1RDd4lYz:hover ._3HFXXekl {
  display: inline;
}

._15t9JO1y {
  display: flex;
  min-height: 536px;
  overflow: hidden;
  position: relative;
}

.s8o5FemQ {
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

@media (max-width: 1023px) {
  .s8o5FemQ {
    background-position-x: 30%;
  }
}

._2oph4z0W {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 421px;
  padding-bottom: 80px;
  z-index: 2;
}

.yHncNZOu {
  color: #fff;
  font-size: 48px;
  font-weight: 300;
  line-height: 56px;
  max-width: 840px;
}

@media (max-width: 768px) {
  .yHncNZOu {
    max-width: 650px;
  }
}

@media (max-width: 425px) {
  .yHncNZOu {
    font-size: 28px;
    line-height: 30px;
  }
}

.PL1Qujtw {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
}

.emMXqkyy {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
}

.emMXqkyy:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.32);
}

._3pZk5qE3 {
  padding-top: 64px;
}

@media (max-width: 1023px) {
  ._3ou7piGW {
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 768px) {
  ._3ou7piGW {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 524px) {
  ._3ou7piGW {
    padding-left: 20px;
    padding-right: 20px;
  }
}

._3ehbOIRg {
  margin-bottom: 0;
}

._1SgM6gzT {
  position: relative;
}

._2X261-vr {
  color: #000;
  font-size: 60px;
  font-weight: 100;
  line-height: 72px;
  text-align: center;
}

@media (max-width: 767px) {
  ._2X261-vr {
    color: #000;
    font-size: 28px;
    font-weight: 300;
    line-height: 36px;
  }
}

.eAwV5ldO {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .eAwV5ldO {
    margin-bottom: -30px;
  }
}

._2BVLUN9m {
  display: flex;
  flex: 1 0 25%;
  justify-content: center;
  padding-bottom: 32px;
}

@media (max-width: 1271px) {
  ._2BVLUN9m {
    flex-basis: 33%;
  }
}

@media (max-width: 1023px) {
  ._2BVLUN9m {
    flex-basis: 50%;
  }
}

@media (max-width: 767px) {
  ._2BVLUN9m {
    flex-basis: 100%;
  }
}

.emMXqkyy {
  cursor: pointer;
  transition: box-shadow 0.2s;
  width: 100%;
}

@media (max-width: 767px) {
  .emMXqkyy {
    width: 100%;
  }
}

._1HqsXyxf {
  padding: 26px;
}

.XBg5oxNG {
  height: 270px;
  position: relative;
  width: 100%;
}

@supports (
  (
      -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 16px
            100%, 0 calc(100% - 16px))
    )
    or
    (
      clip-path:
        polygon(
          0 0,
          calc(100% + 1px) 0,
          calc(100% + 1px) 100%,
          16px 100%,
          0 calc(100% - 16px)
        )
    )
) {
  .XBg5oxNG {
    -webkit-clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      16px 100%,
      0 calc(100% - 16px)
    );
    clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      16px 100%,
      0 calc(100% - 16px)
    );
  }

  .XBg5oxNG:after {
    content: none !important;
  }
}

.XBg5oxNG:after {
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  border-width: 16px 0 0 16px;
  bottom: 0;
  content: "";
  display: inline-block;
  height: 0;
  left: 0;
  position: absolute;
  width: 0;
}

.XBg5oxNG:before {
  background: no-repeat
    url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
    0 100%;
  background-size: contain;
  bottom: 16px;
  content: "";
  height: 24px;
  left: 16px;
  position: absolute;
  width: 18px;
  z-index: 2;
}

.XBg5oxNG img {
  height: 270px;
  width: 100%;
}

@media (min-width: 376px) and (max-width: 767px) {
  @supports (
    (
        -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px)
              100%, 24px 100%, 0 calc(100% - 24px))
      )
      or
      (
        clip-path:
          polygon(
            0 0,
            calc(100% + 1px) 0,
            calc(100% + 1px) 100%,
            24px 100%,
            0 calc(100% - 24px)
          )
      )
  ) {
    .XBg5oxNG {
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
    }

    .XBg5oxNG:after {
      content: none !important;
    }
  }

  .XBg5oxNG:after {
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    border-width: 24px 0 0 24px;
    bottom: 0;
    content: "";
    display: inline-block;
    height: 0;
    left: 0;
    position: absolute;
    width: 0;
  }

  .XBg5oxNG:before {
    background: no-repeat
      url(https://frontier-assets.toptal.com/c9f029bcf4d7f03d94f59c8d85d49168.svg)
      0 100%;
    background-size: contain;
    bottom: 24px;
    content: "";
    height: 36px;
    left: 24px;
    position: absolute;
    width: 27px;
    z-index: 2;
  }
}

@media (max-width: 767px) {
  .XBg5oxNG {
    height: auto;
  }

  .XBg5oxNG,
  .XBg5oxNG .lazy-load-image-loaded {
    width: 100%;
  }

  .XBg5oxNG img {
    height: auto;
    width: 100%;
  }
}

._2mY2_3ij {
  color: #262d3d;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
}

._3JwBUVMW {
  color: #84888e;
  font-size: 14px;
  line-height: 14px;
  margin-top: 8px;
}

._2GOHxl4X {
  color: #9d1e81;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-top: 30px;
}

._2QHRwiP8 {
  flex: 2 0 66%;
  padding: 0 15px 30px;
}

@media (max-width: 1023px) {
  ._2QHRwiP8 {
    flex: 1 1 100%;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
}

._1gYPNgDg {
  align-items: center;
  background-color: #f5f5f6;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 50px 94px;
}

@media (max-width: 767px) {
  ._1gYPNgDg {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (max-width: 523px) {
  ._1gYPNgDg {
    padding-left: 14px;
    padding-right: 14px;
  }
}

._1g_8QX4k {
  height: 64px;
  margin-bottom: 30px;
  width: 64px;
}

._2OehLG7b {
  color: #262d3d;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
}

@media (max-width: 374px) {
  ._2OehLG7b {
    font-size: 26px;
    line-height: 26px;
  }
}

._26rFfsoO {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 100%;
  text-align: center;
}

._3C8qTDfI {
  font-size: 18px;
  margin-top: 50px;
}

@media (max-width: 374px) {
  ._3C8qTDfI {
    font-size: 16px;
  }
}

/* ._3i-L-zN- {
  padding-top: 64px;
} */

@media (max-width: 1023px) {
  .an_PHgIA {
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 768px) {
  .an_PHgIA {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 524px) {
  .an_PHgIA {
    padding-left: 20px;
    padding-right: 20px;
  }
}

._1oUqzKF- {
  margin-bottom: 0;
}

/* blog */

body,
html {
  font-family: "Montserrat", sans-serif;

  font-weight: 400;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input {
  font-family: inherit;
}

body,
html {
  height: 100%;
  scroll-behavior: smooth;
}

#page-root {
  min-height: 100%;
}

.VRzpBOaS {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

._3jgwFSUz {
  margin: 0;
}

.a5wuXPKO {
  margin: -4px;
  width: calc(100% + 8px);
}

.a5wuXPKO > ._3jgwFSUz {
  padding: 4px;
}

.xK1Y6wFp {
  margin: -8px;
  width: calc(100% + 16px);
}

.xK1Y6wFp > ._3jgwFSUz {
  padding: 8px;
}

.h7NHpGkN {
  margin: -12px;
  width: calc(100% + 24px);
}

.h7NHpGkN > ._3jgwFSUz {
  padding: 12px;
}

._2lPvBDZI {
  margin: -16px;
  width: calc(100% + 32px);
}

._2lPvBDZI > ._3jgwFSUz {
  padding: 16px;
}

._1GwNtStZ {
  flex-basis: 8.33333%;
  flex-shrink: 0;
  max-width: 8.33333%;
}

._2Mx0cghk {
  flex-basis: 16.66667%;
  flex-shrink: 0;
  max-width: 16.66667%;
}

._2NAIDFKi {
  flex-basis: 25%;
  flex-shrink: 0;
  max-width: 25%;
}

._2UDh_G12 {
  flex-basis: 33.33333%;
  flex-shrink: 0;
  max-width: 33.33333%;
}

._3v8dne6s {
  flex-basis: 41.66667%;
  flex-shrink: 0;
  max-width: 41.66667%;
}

._2N8pXk9N {
  flex-basis: 50%;
  flex-shrink: 0;
  max-width: 50%;
}

.jgRVL1If {
  flex-basis: 58.33333%;
  flex-shrink: 0;
  max-width: 58.33333%;
}

._1mhTHHWq {
  flex-basis: 66.66667%;
  flex-shrink: 0;
  max-width: 66.66667%;
}

._3KmeAScq {
  flex-basis: 75%;
  flex-shrink: 0;
  max-width: 75%;
}

._3Jnmt4_u {
  flex-basis: 83.33333%;
  flex-shrink: 0;
  max-width: 83.33333%;
}

._3EB6kCHm {
  flex-basis: 91.66667%;
  flex-shrink: 0;
  max-width: 91.66667%;
}

.RqckegCL {
  flex-basis: 100%;
  flex-shrink: 0;
  max-width: 100%;
}

@media (min-width: 768px) {
  ._1CZDjbCH {
    margin: -4px;
    width: calc(100% + 8px);
  }

  ._1CZDjbCH > ._3jgwFSUz {
    padding: 4px;
  }

  .SdDoLGVe {
    margin: -8px;
    width: calc(100% + 16px);
  }

  .SdDoLGVe > ._3jgwFSUz {
    padding: 8px;
  }

  .nSXNjloy {
    margin: -12px;
    width: calc(100% + 24px);
  }

  .nSXNjloy > ._3jgwFSUz {
    padding: 12px;
  }

  ._2d4v8X-a {
    margin: -16px;
    width: calc(100% + 32px);
  }

  ._2d4v8X-a > ._3jgwFSUz {
    padding: 16px;
  }

  ._1KQ1Gi0G {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }

  ._37O2S15T {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }

  ._1HQVvDUb {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }

  ._2lgV_Xr9 {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }

  ._1rLP5r_m {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }

  ._26ebzZtt {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }

  ._2u3R8p7l {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }

  ._25gHwGaQ {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }

  ._2iRj5_FL {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }

  ._2MdNxXb- {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }

  ._2xplsVD8 {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }

  ._1s3M2fiC {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}

@media (min-width: 1024px) {
  ._1tysoH_D {
    margin: -4px;
    width: calc(100% + 8px);
  }

  ._1tysoH_D > ._3jgwFSUz {
    padding: 4px;
  }

  ._2Gm6BBoN {
    margin: -8px;
    width: calc(100% + 16px);
  }

  ._2Gm6BBoN > ._3jgwFSUz {
    padding: 8px;
  }

  ._2hTqIJvN {
    margin: -12px;
    width: calc(100% + 24px);
  }

  ._2hTqIJvN > ._3jgwFSUz {
    padding: 12px;
  }

  ._30YsJBkA {
    margin: -16px;
    width: calc(100% + 32px);
  }

  ._30YsJBkA > ._3jgwFSUz {
    padding: 16px;
  }

  ._37ljHUaw {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }

  ._2lRwSs8g {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }

  ._1ESny7XR {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }

  ._1ArckmJZ {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }

  ._30GVQs4v {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }

  ._1mgQSQLr {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }

  ._2tDzT42o {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }

  ._9Ikuko4z {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }

  ._2fKcTUpf {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }

  .Hzu-2nHX {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }

  ._292QmiDj {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }

  ._1zJaTryD {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  ._1Dczv3HK {
    margin: -4px;
    width: calc(100% + 8px);
  }

  ._1Dczv3HK > ._3jgwFSUz {
    padding: 4px;
  }

  ._1Q_5EQUW {
    margin: -8px;
    width: calc(100% + 16px);
  }

  ._1Q_5EQUW > ._3jgwFSUz {
    padding: 8px;
  }

  ._23TbfZxP {
    margin: -12px;
    width: calc(100% + 24px);
  }

  ._23TbfZxP > ._3jgwFSUz {
    padding: 12px;
  }

  .bMWr3Lne {
    margin: -16px;
    width: calc(100% + 32px);
  }

  .bMWr3Lne > ._3jgwFSUz {
    padding: 16px;
  }

  .jds3D0B5 {
    flex-basis: 8.33333%;
    flex-shrink: 0;
    max-width: 8.33333%;
  }

  ._1e7s_IuL {
    flex-basis: 16.66667%;
    flex-shrink: 0;
    max-width: 16.66667%;
  }

  ._1q-zcMCw {
    flex-basis: 25%;
    flex-shrink: 0;
    max-width: 25%;
  }

  ._3yg5FqML {
    flex-basis: 33.33333%;
    flex-shrink: 0;
    max-width: 33.33333%;
  }

  ._1Hl0Oco6 {
    flex-basis: 41.66667%;
    flex-shrink: 0;
    max-width: 41.66667%;
  }

  .NpIB0GaX {
    flex-basis: 50%;
    flex-shrink: 0;
    max-width: 50%;
  }

  .j7_AHzPn {
    flex-basis: 58.33333%;
    flex-shrink: 0;
    max-width: 58.33333%;
  }

  ._1ZZGIcz- {
    flex-basis: 66.66667%;
    flex-shrink: 0;
    max-width: 66.66667%;
  }

  .s20_q1LG {
    flex-basis: 75%;
    flex-shrink: 0;
    max-width: 75%;
  }

  ._3uX6olga {
    flex-basis: 83.33333%;
    flex-shrink: 0;
    max-width: 83.33333%;
  }

  ._2muXPbLl {
    flex-basis: 91.66667%;
    flex-shrink: 0;
    max-width: 91.66667%;
  }

  ._3nmeTH2Y {
    flex-basis: 100%;
    flex-shrink: 0;
    max-width: 100%;
  }
}

._3LOPUP7d {
  margin-bottom: 96px;
}

._3DOEOvRI {
  margin-bottom: 64px;
}

._1YibmBYc:last-child:not(._1_bvS4sL),
._11ZqUWmz {
  margin-bottom: 0;
}

._2_32njdU {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  width: 1372px;
}

@media (min-width: 1024px) {
  ._2_32njdU {
    padding-left: 36px;
    padding-right: 36px;
  }
}

.GD313NS8:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

.GD313NS8:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

.GD313NS8 {
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  line-height: normal;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  width: auto;
}

.GD313NS8::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.GD313NS8 {
  color: #fff;
  cursor: pointer;
  font-family: Proxima Nova, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 38px;
  margin-top: auto;
  /* padding-left: 54px; */
  transition: opacity 0.2s;
}

.GD313NS8:focus {
  outline-color: #204ecf;
  z-index: 4;
}

.GD313NS8:hover {
  opacity: 0.7;
}

.GD313NS8:focus {
  transition: none;
}

._1LwwOY5T,
._2aYXDjr3 {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}

._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._2aYXDjr3 {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
}

.Qq-iPMxM {
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 38px;
  max-width: 100%;
}

._1uIAd9Ad {
  align-items: center;
  display: flex;
  flex: 0;
  margin-bottom: 40px;
  min-height: 85px;
  width: 100%;
}

.jeqnJEqF {
  height: auto;
  max-width: 200px;
  width: auto;
}

.ZxJ1uE03 {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: auto;
}

._1NqI8JmY {
  background: url(https://frontier-assets.toptal.com/0caaf40091e4785d1962709a93770a8b.svg)
    no-repeat 100%;
  margin-right: 8px;
  padding-right: 22px;
}

@media (min-width: 1024px) and (max-width: 1199px) {
  ._1NqI8JmY {
    background: none;
    padding-right: 0;
  }
}

._16aTA28q {
  color: #204ecf;
  height: 30px;
  width: 30px;
}

._1UhmiUga {
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  max-width: 500px;
  width: 100%;
}

._1liAAfjS {
  margin-bottom: 16px;
  margin-top: auto;
  padding-top: 35px;
}

._2O26Zuqj {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.ivvUQSqp {
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
}

._1LwwOY5T {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  margin-bottom: 4px;
  min-height: 520px;
}

._1LwwOY5T._1LwwOY5T {
  color: #262d3d;
}

._1LwwOY5T .ZxJ1uE03 {
  color: #262d3d;
  display: flex;
  height: 48px;
  justify-content: space-between;
  margin-top: 10px;
  transition: all 0.2s;
  width: 100%;
}

._1LwwOY5T .ZxJ1uE03:after {
  content: url(https://frontier-assets.toptal.com/b6021c31f4000214a8828c661253af51.svg);
  padding-left: 10px;
}

._1LwwOY5T .ivvUQSqp {
  color: rgba(38, 45, 61, 0.6);
}

._1LwwOY5T:hover {
  border: 1px solid rgba(32, 78, 207, 0.3);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
}

._1LwwOY5T:hover .ZxJ1uE03 {
  color: #204ecf;
}

._1LwwOY5T._1LwwOY5T:after,
._1LwwOY5T._1LwwOY5T:before {
  background: none;
}

._3p_xLXZw {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.46px;
  margin-top: auto;
  text-transform: uppercase;
}

._2aYXDjr3 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  padding: 12px;
  position: relative;
  transition: background 0.4s ease-in;
}

._2aYXDjr3 > * {
  position: relative;
  z-index: 4;
  /* top: 15%; */
}

._2aYXDjr3._1doXJJpm {
  overflow: hidden;
}

._2aYXDjr3._1doXJJpm .video-cta:after {
  bottom: 0;
  content: " ";
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

._2aYXDjr3 ._3-8TMpeS + .Qq-iPMxM:nth-last-child(2) {
  margin-top: auto;
}

._2aYXDjr3 ._3-8TMpeS + .Qq-iPMxM:nth-last-child(2) + .video-cta {
  margin-top: 0;
}

._2aYXDjr3 ._2ud0q49P,
._2aYXDjr3 ._3-8TMpeS,
._2aYXDjr3 figure,
._2aYXDjr3 video {
  bottom: 0;
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
}

._2aYXDjr3 ._2ud0q49P img,
._2aYXDjr3 ._3-8TMpeS img,
._2aYXDjr3 figure img,
._2aYXDjr3 video img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

._2aYXDjr3 ._2ud0q49P,
._2aYXDjr3 ._3-8TMpeS {
  display: block;
  transition: transform 0.2s ease-in;
  will-change: transform;
  z-index: 1;
}

._2aYXDjr3 video {
  -o-object-fit: cover;
  object-fit: cover;
}

._2aYXDjr3.k4Kjb1Dh {
  overflow: hidden;
}

._2aYXDjr3.k4Kjb1Dh:hover ._2ud0q49P {
  transform: scale(1.1);
}

._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03 {
  background: url(https://frontier-assets.toptal.com/eada713438b527e5f764bec7d96c24a4.svg)
    no-repeat 100%;
  padding-right: 40px;
  position: static;
}

._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:focus {
  outline-color: #204ecf;
  z-index: 4;
}

._2aYXDjr3.k4Kjb1Dh .ZxJ1uE03:after {
  bottom: 0;
  content: " ";
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

._2aYXDjr3._1doXJJpm:hover figure,
._2aYXDjr3._1doXJJpm:hover video {
  display: block;
  z-index: 1;
}

._2aYXDjr3._1fycIOYl:hover ._3-8TMpeS {
  transform: scale(1.1);
}

._2aYXDjr3:after,
._2aYXDjr3:before {
  bottom: 0;
  content: " ";
  left: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transition: opacity 0.2s;
  z-index: 2;
}

._2aYXDjr3:before {
  background-image: linear-gradient(
    180deg,
    #000,
    rgba(0, 0, 0, 0.25) 0,
    rgba(0, 0, 0, 0.8)
  );
}

._2aYXDjr3:after {
  background-image: linear-gradient(180deg, rgba(15, 37, 110, 0.25), #0f256e);
  opacity: 0.6;
  z-index: 3;
}

._2aYXDjr3:not(.no-hover):hover:after {
  opacity: 1;
}

._2aYXDjr3:not(.no-hover):hover:before {
  opacity: 0;
}

._3WYSOFPZ {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

._3WYSOFPZ h2 {
  color: #262d3d;
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
  margin: 0 0 32px;
}

._3WYSOFPZ h3 {
  color: #262d3d;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 32px 0 24px;
}

._3WYSOFPZ h4 {
  margin: 8px 0;
}

._3WYSOFPZ ol {
  list-style: decimal;
}

._3WYSOFPZ ul {
  list-style: disc outside;
}

._3WYSOFPZ li {
  padding-left: 8px;
}

._3WYSOFPZ ol,
._3WYSOFPZ ul {
  margin-left: 20px;
}

._3WYSOFPZ ol:not(:last-child),
._3WYSOFPZ ol li:not(:last-child),
._3WYSOFPZ p:not(:last-child),
._3WYSOFPZ ul:not(:last-child),
._3WYSOFPZ ul li:not(:last-child) {
  margin-bottom: 16px;
}

._3WYSOFPZ a {
  color: #204ecf;
}

._3WYSOFPZ a:hover {
  text-decoration: underline;
  text-underline-position: under;
}

._3WYSOFPZ hr {
  background-color: #ebeced;
  border: none;
  height: 1px;
  margin: 32px 0;
}

._3WYSOFPZ img {
  max-width: 100%;
}

._1jHz3wcf {
  color: #262d3d;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 16px;
  text-align: center;
}

@media (min-width: 768px) {
  ._1jHz3wcf {
    font-size: 44px;
    line-height: 56px;
  }
}

._1jHz3wcf sup {
  font-size: 0.6em;
  line-height: 1;
  vertical-align: super;
}

._1jHz3wcf b,
._1jHz3wcf strong {
  font-weight: 600;
}

.LnKbDImM {
  margin-bottom: 24px;
  margin-top: 16px;
}

@media (min-width: 768px) {
  .LnKbDImM {
    margin-bottom: 48px;
    margin-top: 24px;
  }
}

._3XIYnvQ8 {
  margin-top: 0;
}

@media (min-width: 768px) {
  ._3XIYnvQ8 {
    margin-top: 0;
  }
}

._1bcYCljm {
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}

._1bcYCljm + ._1bcYCljm {
  margin-left: 8px;
}

._3qSF9CYT {
  font-size: 12px;
  line-height: 16px;
  padding: 3px 16px;
}

._3McSaz1R {
  font-size: 14px;
  line-height: 20px;
  padding: 7px 24px;
}

._3n8NuEgU {
  font-size: 16px;
  line-height: 24px;
  padding: 13px 48px;
}

@media (max-width: 767px) {
  ._3n8NuEgU {
    padding-left: 32px;
    padding-right: 32px;
  }
}

._344Tj4__ {
  font-size: 20px;
  line-height: 28px;
  padding: 11px 64px;
}

@media (max-width: 767px) {
  ._344Tj4__ {
    padding-left: 32px;
    padding-right: 32px;
  }
}

._2u-I7BW0 {
  background: #00cc83;
  border-color: #00cc83;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._2u-I7BW0.mt5Y6x-K,
._2u-I7BW0:hover {
  background: #05947c;
  border-color: #05947c;
  color: #fff;
}

._2u-I7BW0._3OgVEeN8,
._2u-I7BW0:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}

._1G_ocH1a {
  background: #204ecf;
  border-color: #204ecf;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._1G_ocH1a.mt5Y6x-K,
._1G_ocH1a:hover {
  background: #183a9e;
  border-color: #183a9e;
  color: #fff;
}

._1G_ocH1a._3OgVEeN8,
._1G_ocH1a:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}

._3ZEWDKfF {
  background: transparent;
  border-color: #00cc83;
  color: #00cc83;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._3ZEWDKfF.mt5Y6x-K,
._3ZEWDKfF:hover {
  background: #00cc83;
  border-color: #00cc83;
  color: #fff;
}

._3ZEWDKfF._3OgVEeN8,
._3ZEWDKfF:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._2AywhfSi {
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._2AywhfSi.mt5Y6x-K,
._2AywhfSi:hover {
  background: hsla(0, 0%, 100%, 0.05);
  border-color: #fff;
  color: #fff;
}

._2AywhfSi._3OgVEeN8,
._2AywhfSi:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._7hPQ_Wwr {
  background: #fff;
  border-color: #d8d9dc;
  color: #204ecf;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._7hPQ_Wwr.mt5Y6x-K,
._7hPQ_Wwr:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}

._7hPQ_Wwr._3OgVEeN8,
._7hPQ_Wwr:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._1Wpamv8F {
  background: #fff;
  border-color: #d8d9dc;
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

._1Wpamv8F.mt5Y6x-K,
._1Wpamv8F:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}

._1Wpamv8F._3OgVEeN8,
._1Wpamv8F:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

.Mw_6M_G0 {
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

.Mw_6M_G0,
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  background: transparent;
  border-color: transparent;
}

.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  color: #183a9e;
}

.Mw_6M_G0._3OgVEeN8,
.Mw_6M_G0:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}

._2vQjp_O2,
._64wRZ6xh {
  height: 100%;
}

@media (min-width: 1024px) {
  ._64wRZ6xh {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 24px;
  }
}

@media (max-width: 1023px) {
  ._64wRZ6xh {
    padding-bottom: 8px;
  }

  ._vWh44cV:not(:first-child) ._64wRZ6xh {
    padding-top: 64px;
  }
}

._1r8wFQ13 {
  margin: 0;
}

@media (min-width: 1024px) {
  ._1r8wFQ13 {
    text-align: left;
  }
}

._2Fa2w4cD {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 16px;
  text-align: center;
}

@media (min-width: 1024px) {
  ._2Fa2w4cD {
    margin-top: 24px;
    text-align: left;
  }
}

._7qDyl__j {
  margin-top: 20px;
}

@media (min-width: 768px) {
  ._7qDyl__j {
    margin-top: 30px;
  }
}

@media (min-width: 1024px) {
  ._7qDyl__j {
    margin-top: 50px;
  }
}

._7qDyl__j p {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 24px;
  text-align: center;
}

._2pGhqCYE {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media (min-width: 426px) {
  ._2pGhqCYE {
    display: block;
  }
}

._6Zgcud2o {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
}

._1ZQ2DzIc:focus,
._3WOR0P94:focus,
._2716rq5F:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._1ZQ2DzIc:focus:not(:focus-visible),
._3WOR0P94:focus:not(:focus-visible),
._2716rq5F:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._3WOR0P94._3kMpP7da:after,
._3WOR0P94:hover:after,
._37cER8jB.w3wrzl58 ._2_UMVhrR:not(:focus):after {
  border-top: 2px solid #204ecf;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  width: 100%;
}

.CwHwCIsY {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  height: 64px;
  margin: 0 auto;
  max-width: 1272px;
  padding: 0 16px;
  position: relative;
  width: 100%;
}

@media (min-width: 1200px) {
  .CwHwCIsY:not(._2AUNzqse) {
    padding: 0 36px;
  }
}

.CwHwCIsY:focus-within {
  overflow: visible;
}

._2WQ1bk3l {
  align-items: center;
  display: flex;
  height: 64px;
  margin-right: 40px;
  min-height: 64px;
  position: relative;
}

._2hn_0aiE {
  display: none;
  list-style: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}

@media (min-width: 768px) {
  ._2hn_0aiE._2j8Bi4Lq {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    width: 100%;
  }
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}

._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
  margin-bottom: 10px;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}

._2V8cVnTd {
  display: none;
  height: 100%;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}

._3xz6sTpw ._2V8cVnTd {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  width: 100%;
}

._3HIyy71x + ._3HIyy71x {
  margin-left: 16px;
}

._3WOR0P94 {
  align-items: center;
  color: #262d3d;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  position: relative;
  text-decoration: none;
}

._3WOR0P94:focus {
  align-self: center;
  max-height: 56px;
  outline-color: #204ecf;
  z-index: 1;
}

._3xz6sTpw ._3WOR0P94 {
  border-bottom: 1px solid #ebeced;
  font-size: 16px;
  height: 46px;
  margin-left: 0;
  width: 100%;
}

._3xz6sTpw ._3WOR0P94:after {
  display: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}

._37cER8jB {
  display: flex;
}

.l_18QO0k {
  content: "";
  display: block;
  height: 10px;
  margin-left: 4px;
  margin-top: 3px;
  transform: rotate(90deg);
  transition: transform 0.2s linear;
  width: 10px;
}

._2_UMVhrR {
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
}

._2_UMVhrR:focus:after {
  margin-top: 4px;
}

._6Zgcud2o {
  background: #fff;
  border-radius: 0 0 4px 4px;
  display: none;
  max-width: 380px;
  padding: 16px;
  position: absolute;
  top: 100%;
  width: 380px;
}

._1ZQ2DzIc {
  color: #455065;
  display: block;
  padding: 8px;
}

._1ZQ2DzIc:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1ZQ2DzIc:hover {
  color: #204ecf;
}

._3JWeZNpb {
  margin-left: auto;
}

._2716rq5F {
  width: 100%;
}

._2716rq5F:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._2716rq5F.OPGINcUC {
  font-weight: 400;
  padding-left: 0;
  padding-right: 0;
}

._2zORpOH1 {
  margin: 0 0 0 auto;
  position: absolute;
  right: 16px;
  top: 15px;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2zORpOH1 {
    display: none;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2zORpOH1 {
    display: none;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2zORpOH1 {
    display: none;
  }
}

._1g37weM4 {
  display: none;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}

.CwHwCIsY._3xz6sTpw {
  align-items: flex-start;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}

.CwHwCIsY._3xz6sTpw ._2hn_0aiE {
  display: block;
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}

.CwHwCIsY._3xz6sTpw ._2hn_0aiE._2j8Bi4Lq {
  display: none;
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
  flex-grow: 1;
}

@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
    margin-left: 16px;
  }
}

.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn:first-child {
  margin-left: 0;
}

@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb {
    flex-direction: row;
  }
}

.CwHwCIsY._3xz6sTpw .irsyFUit {
  overflow-y: auto;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw .irsyFUit:focus-within {
  overflow-y: visible;
}

.CwHwCIsY._3xz6sTpw ._2zORpOH1 {
  display: block;
}

.CwHwCIsY._3xz6sTpw ._3HIyy71x {
  margin-left: 0;
}

.CwHwCIsY._3xz6sTpw ._37cER8jB {
  border-bottom: 1px solid #ebeced;
  display: block;
  flex-basis: 46px;
  overflow: hidden;
  transition: flex-basis 0.3s ease-in-out;
}

.CwHwCIsY._3xz6sTpw ._37cER8jB._34JlE2Hu {
  flex-basis: auto;
  transition: none;
}

.CwHwCIsY._3xz6sTpw ._2_UMVhrR {
  border-bottom: none;
  height: 46px;
  width: 100%;
}

@media (max-width: 767px) {
  .CwHwCIsY._3xz6sTpw ._2_UMVhrR {
    justify-content: space-between;
  }
}

.CwHwCIsY._3xz6sTpw ._6Zgcud2o {
  box-shadow: none;
  display: block;
  max-width: none;
  padding: 0 0 24px;
  position: static;
  width: 100%;
}

.CwHwCIsY._3xz6sTpw ._1ZQ2DzIc {
  padding-left: 0;
}

._37cER8jB.w3wrzl58 ._6Zgcud2o {
  display: block;
}

._37cER8jB.w3wrzl58 .l_18QO0k {
  transform: rotate(-90deg);
}

@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}

@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse)
    ._2V8cVnTd
    ._37cER8jB.w3wrzl58
    ._2_UMVhrR {
    opacity: 1;
  }
}

@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}

._3xz6sTpw ._37cER8jB.w3wrzl58 ._2_UMVhrR {
  font-weight: 600;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf),
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3l7e8OkS,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3wva0pDs,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) .OPGINcUC {
  color: #fff;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._1TkDKt3Q {
  background: #fff;
}

.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3WOR0P94 {
  color: #fff;
}

.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._3WOR0P94:hover:after,
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._37cER8jB.w3wrzl58
  ._2_UMVhrR:after {
  border-top-color: #fff;
}

.ap5SohHH {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  height: 64px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}

.ap5SohHH:focus-within {
  overflow: visible;
}

.ap5SohHH._2ExEwWJ- {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
}

.GSsufXWr {
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 24px;
}

.GSsufXWr > span {
  background-color: currentColor;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin: 6px 0;
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
}

.GSsufXWr._2K4zc3od > span:nth-child(2n) {
  margin-top: -9px;
  transform: rotate(-45deg);
}

.GSsufXWr._2K4zc3od > span:first-child {
  margin-top: 16px;
  transform: rotate(45deg);
}

.GSsufXWr._2K4zc3od > span:last-child {
  opacity: 0;
}

._27w5BS2q:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._27w5BS2q:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._58Zij-Oo {
  align-items: baseline;
  color: #455065;
  display: flex;
  flex-shrink: 0;
  font-size: 29px;
  line-height: 29px;
  max-width: 100%;
}

._58Zij-Oo img,
._58Zij-Oo svg {
  display: inline-block;
  vertical-align: -17.5%;
}

._58Zij-Oo svg {
  transform: translateY(0.5px);
}

._27w5BS2q {
  align-items: baseline;
  color: inherit;
  display: flex;
}

._27w5BS2q:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1YO-qTkC {
  color: #204ecf;
  line-height: 32px;
}

._1YO-qTkC,
.JZBjwybU {
  height: 32px;
}

._1SDD_TaP {
  height: 29px;
  margin: 0 9px 0 1px;
}

._1SDD_TaP:not([class*="hidden"]) + ._2yx3tQoS > span {
  color: inherit;
}

._2yx3tQoS {
  margin: 0 0 0 -6px;
}

._2yx3tQoS span {
  color: #204ecf;
  font-size: 13px;
  line-height: 13px;
  vertical-align: -26%;
}

._1KvUc_3R {
  color: #262d3d;
  font-size: 30px;
  letter-spacing: -1px;
  margin: 0 0 0 8px;
  white-space: nowrap;
}

._1lvdjAD0 {
  align-items: baseline;
  display: flex;
  margin-left: 16px;
  min-height: 32px;
}

.cpfvvVen:before {
  border-left: 1px solid #c4c6ca;
  content: "";
  display: inline-block;
  height: 32px;
  margin-right: 16px;
  vertical-align: -20%;
}

._3eQ_EZmB {
  color: #455065;
  display: inline-block;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 19px;
}

._3eQ_EZmB span {
  font-size: 13px;
  line-height: 13px;
  vertical-align: -30%;
}

._2FUhxoSV ._1KvUc_3R,
._2FUhxoSV ._1YO-qTkC,
._2FUhxoSV ._2yx3tQoS > span,
._2FUhxoSV ._3eQ_EZmB,
._2FUhxoSV._58Zij-Oo {
  color: inherit;
}

._1ZjdOUzr {
  line-height: 35px;
}

._1ZjdOUzr ._1YO-qTkC,
._1ZjdOUzr .JZBjwybU {
  height: 37px;
}

._1ZjdOUzr ._1SDD_TaP {
  height: 35px;
}

._1ZjdOUzr ._2yx3tQoS span {
  font-size: 15px;
}

._1ZjdOUzr ._1KvUc_3R {
  font-size: 36px;
  letter-spacing: -1.2px;
  margin-left: 9px;
}

._3Qr50Vve {
  line-height: 22px;
}

._3Qr50Vve ._1YO-qTkC,
._3Qr50Vve .JZBjwybU {
  height: 25px;
}

._3Qr50Vve ._1SDD_TaP {
  height: 22px;
  margin-right: 7px;
}

._3Qr50Vve ._2yx3tQoS {
  margin: 0 0 0 -5px;
}

._3Qr50Vve ._2yx3tQoS span {
  font-size: 10px;
  line-height: 11px;
}

._3Qr50Vve ._1KvUc_3R {
  font-size: 24px;
  letter-spacing: -0.8px;
  margin-left: 6px;
}

._3Qr50Vve svg {
  transform: none;
}

.A1tn-zbg {
  line-height: 17px;
}

.A1tn-zbg ._1YO-qTkC,
.A1tn-zbg .JZBjwybU {
  height: 21px;
}

.A1tn-zbg ._1SDD_TaP {
  height: 18px;
  margin-right: 4px;
}

.A1tn-zbg ._2yx3tQoS {
  margin: 0 0 0 -3px;
}

.A1tn-zbg ._2yx3tQoS span {
  font-size: 8px;
  line-height: 10px;
}

.A1tn-zbg ._1KvUc_3R {
  font-size: 18px;
  letter-spacing: -0.6px;
  margin-left: 4px;
}

._27Qp7-0j {
  display: none;
}

@media (min-width: 768px) {
  ._2bE-MpfW {
    display: none;
  }
}

@media (min-width: 1024px) {
  ._1qWPArs6 {
    display: none;
  }
}

@media (min-width: 1200px) {
  ._3gIwdeKZ {
    display: none;
  }
}

@media (min-width: 768px) {
  .aSm5Eu45 {
    display: unset;
  }

  .aSm5Eu45 + ._2yx3tQoS > span {
    color: inherit;
  }
}

@media (min-width: 1024px) {
  .sQf4YFbG {
    display: unset;
  }

  .sQf4YFbG + ._2yx3tQoS > span {
    color: inherit;
  }
}

@media (min-width: 1200px) {
  .Pr_2B7aa {
    display: unset;
  }

  .Pr_2B7aa + ._2yx3tQoS > span {
    color: inherit;
  }
}

._1gM6aSr1,
._1gM6aSr1 ._1lvdjAD0,
._1gM6aSr1 ._27w5BS2q {
  align-items: center;
}

._1gM6aSr1 ._3eQ_EZmB {
  display: block;
  padding-top: 4px;
}

._1gM6aSr1 ._2yx3tQoS span {
  vertical-align: -40%;
}

@media (min-width: 768px) {
  ._3oXj0__2,
  ._3oXj0__2 ._1lvdjAD0,
  ._3oXj0__2 ._27w5BS2q {
    align-items: center;
  }

  ._3oXj0__2 ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  ._3oXj0__2 ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 1024px) {
  .N3vjTBqY,
  .N3vjTBqY ._1lvdjAD0,
  .N3vjTBqY ._27w5BS2q {
    align-items: center;
  }

  .N3vjTBqY ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  .N3vjTBqY ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 1200px) {
  ._3a2ad5pt,
  ._3a2ad5pt ._1lvdjAD0,
  ._3a2ad5pt ._27w5BS2q {
    align-items: center;
  }

  ._3a2ad5pt ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }

  ._3a2ad5pt ._2yx3tQoS span {
    vertical-align: -40%;
  }
}

@media (min-width: 768px) {
  ._1YE9rzs1,
  ._1YE9rzs1 ._1lvdjAD0,
  ._1YE9rzs1 ._27w5BS2q {
    align-items: baseline;
  }

  ._1YE9rzs1 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._1YE9rzs1 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

@media (min-width: 1024px) {
  ._3ofkGqyM,
  ._3ofkGqyM ._1lvdjAD0,
  ._3ofkGqyM ._27w5BS2q {
    align-items: baseline;
  }

  ._3ofkGqyM ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._3ofkGqyM ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

@media (min-width: 1200px) {
  ._2IToekk2,
  ._2IToekk2 ._1lvdjAD0,
  ._2IToekk2 ._27w5BS2q {
    align-items: baseline;
  }

  ._2IToekk2 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }

  ._2IToekk2 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}

._2EepOHy1 img,
._2EepOHy1 svg {
  height: 100%;
  width: auto;
}

.xVo_5L7k {
  color: inherit;
}

.xVo_5L7k svg path {
  fill: currentColor;
}

._3Wv9utNN a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}

._3Wv9utNN a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}

._7QdK4zyR {
  align-items: center;
  background: rgba(38, 45, 61, 0.95);
  bottom: -1000px;
  display: flex;
  font-weight: 100;
  justify-content: space-between;
  left: 0;
  opacity: 0;
  padding: 20px 15px;
  position: fixed;
  right: 0;
  transition-delay: 0s, 0.3s;
  transition-duration: 0.3s, 0.01s;
  transition-property: opacity, bottom;
  z-index: 100;
}

@media (min-width: 1024px) {
  ._7QdK4zyR {
    padding: 20px 50px;
  }
}

@media (max-width: 767px) {
  ._2_Bs6D8F {
    flex-direction: column;
    text-align: center;
  }
}

._1X5ZYp4i {
  bottom: 0;
  opacity: 1;
  transition-delay: 0s;
}

._3jl4op_D {
  position: static;
}

._3Wv9utNN {
  font-size: 16px;
  line-height: 20px;
}

._1MIke5bW ._3Wv9utNN {
  color: #c4c6ca;
}

._2_Bs6D8F ._3Wv9utNN {
  color: #fff;
}

._3Wv9utNN a {
  text-decoration: underline;
}

._3Wv9utNN a:focus {
  outline-color: #204ecf;
  z-index: 1;
}

._1MIke5bW ._3Wv9utNN a {
  color: #c4c6ca;
}

._2_Bs6D8F ._3Wv9utNN a {
  color: #00cc83;
}

._1MIke5bW ._3Wv9utNN a:hover {
  color: #fff;
}

._2_Bs6D8F ._3Wv9utNN a:hover {
  color: #00e693;
}

._1WV0LMf5 {
  margin-left: 24px;
}

@media (max-width: 767px) {
  ._2_Bs6D8F ._1WV0LMf5 {
    margin: 20px 0 0;
  }
}

.FjKAy-Wz {
  white-space: nowrap;
}

._3-6TRn-e {
  display: flex;
}

._3fwLmXc4,
._34Oy4nN6 {
  /* background-color: #0f256e; */
}

._3fwLmXc4 {
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 64px;
  text-align: center;
}

@media (min-width: 768px) {
  ._3fwLmXc4 {
    padding-bottom: 48px;
  }
}

._1CgVsu-I {
  font-size: 52px;
  font-weight: 300;
  line-height: 64px;
  margin: 56px auto 48px;
}

@media (max-width: 523px) {
  ._1CgVsu-I {
    font-size: 28px;
    line-height: 36px;
    margin: 24px auto;
  }
}

.XAxRXh00 {
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  margin: 0 auto 32px;
  max-width: 776px;
}

.B2jSmrnZ .XAxRXh00 {
  max-width: 960px;
}

@media (max-width: 1024px) {
  .B2jSmrnZ .XAxRXh00 {
    max-width: 720px;
  }
}

@media (max-width: 768px) {
  .XAxRXh00 {
    max-width: 700px;
  }
}

@media (max-width: 523px) {
  .XAxRXh00 {
    font-size: 16px;
    line-height: 24px;
  }
}

._2L2hCczK .XAxRXh00 {
  margin-bottom: 64px;
}

@media (min-width: 525px) {
  ._2L2hCczK ._3fwLmXc4 {
    padding-bottom: 48px;
  }
}

.SbnErpYy {
  background: #204ecf;
  padding: 32px 24px;
  position: relative;
}

.SbnErpYy:after {
  background: url(https://frontier-assets.toptal.com/af01680228c506def570.png)
    50% 50% no-repeat;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  opacity: 0.66;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

@media (min-width: 768px) {
  .SbnErpYy {
    padding-bottom: 80px;
    padding-top: 80px;
  }
}

._1T1KHbrO {
  color: #fff;
  font-size: 28px;
  margin: auto;
  max-width: 20em;
  position: relative;
  text-align: center;
  z-index: 1;
}

@media (min-width: 768px) {
  ._1T1KHbrO {
    font-size: 40px;
  }
}

._1T1KHbrO._3xfrSHva {
  max-width: 26em;
}

@media (min-width: 768px) {
  ._1T1KHbrO._3xfrSHva {
    align-items: center;
    display: flex;
    text-align: left;
  }
}

._1YnEsgtr a {
  color: #fff;
  font-style: normal;
  position: relative;
  text-transform: capitalize;
}

._1YnEsgtr a:after {
  background: #fff;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 100%;
}

._1YnEsgtr a:hover:after {
  display: none;
}

._2vSqNf1t {
  margin: 24px auto;
}

@media (min-width: 768px) {
  ._2vSqNf1t {
    margin-left: 32px;
  }
}

._33KRrn8A {
  white-space: nowrap;
  width: 100%;
}

._33KRrn8A._33KRrn8A {
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 426px) {
  ._33KRrn8A {
    width: auto;
  }
}

._2O_uVeDU {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}

._2NETgTks {
  align-items: stretch;
  color: #455065;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 432px;
  padding: 32px 24px 24px;
}

@media (max-width: 1023px) {
  ._2NETgTks {
    min-height: 0;
  }
}

._2NETgTks:after,
._2NETgTks:before {
  display: none;
}

._1P8xNCJ7 {
  border-radius: 50%;
  height: 48px;
  width: 48px;
}

._1P8xNCJ7,
._2SuKOAXp {
  flex-shrink: 0;
  margin: 0 12px 8px 0;
}

._2SuKOAXp {
  height: 40px;
  width: 40px;
}

@supports (
  (
      -webkit-clip-path: polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 8px
            100%, 0 calc(100% - 8px))
    )
    or
    (
      clip-path:
        polygon(
          0 0,
          calc(100% + 1px) 0,
          calc(100% + 1px) 100%,
          8px 100%,
          0 calc(100% - 8px)
        )
    )
) {
  ._2SuKOAXp {
    -webkit-clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      8px 100%,
      0 calc(100% - 8px)
    );
    clip-path: polygon(
      0 0,
      calc(100% + 1px) 0,
      calc(100% + 1px) 100%,
      8px 100%,
      0 calc(100% - 8px)
    );
  }

  ._2SuKOAXp:after {
    content: none !important;
  }
}

.T7r2Eeqx {
  color: #204ecf;
  height: 24px;
  margin-bottom: 8px;
  width: 24px;
}

._3ruK4ntN {
  color: #455065;
  flex: 1;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding: 0 0 24px;
}

._29MIKyIL {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.qMnyaGE9 {
  flex: 1;
  font-size: 14px;
  line-height: 14px;
  min-width: 150px;
}

._29ia6udu,
._29Rz5mjw {
  font-weight: 400;
  margin-top: 2px;
}

.JoVWwBm5 {
  margin-top: 16px;
}

._2ydOxLGx {
  font-size: 12px;
  margin-bottom: 8px;
}

._1jR4h4Pq {
  background: #fff;
  border: 1px solid hsla(210, 5%, 93%, 0.5);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}

._3c0XmpYI {
  background-color: #ebeced;
  padding: 48px 0 64px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  ._2VcBRgX2:last-child:not(:first-child):nth-child(odd) {
    display: block;
  }
}

._1mBgddMP {
  height: 100%;
  min-height: auto;
  width: 100%;
}

._3wZgC01h {
  margin: 32px 0 72px;
}

@media (max-width: 767px) {
  ._3wZgC01h {
    margin-bottom: 48px;
  }
}

._3JslPmkL {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
}

._34J2KY2A {
  color: #84888e;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  margin-top: 16px;
  text-align: center;
}

@media (min-width: 768px) {
  ._34J2KY2A {
    margin-top: 48px;
  }
}

@media (min-width: 1024px) {
  ._34J2KY2A {
    margin-top: 64px;
  }
}

.ypwCHK1e {
  margin: 0 auto;
  max-width: 818px;
}

._3AuzTqLI {
  text-align: center;
}

.j-ojC0Mw {
  max-width: 188px;
}

@media (max-width: 767px) {
  .j-ojC0Mw {
    width: 136px;
  }
}

@media (max-width: 424px) {
  .j-ojC0Mw {
    width: 128px;
  }
}

/* industries */

body,
html {
  height: 100%;
  scroll-behavior: smooth;
}
#page-root {
  min-height: 100%;
}
._1bcYCljm {
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}
._1bcYCljm + ._1bcYCljm {
  margin-left: 8px;
}
._3qSF9CYT {
  font-size: 12px;
  line-height: 16px;
  padding: 3px 16px;
}
._3McSaz1R {
  font-size: 14px;
  line-height: 20px;
  padding: 7px 24px;
}
._3n8NuEgU {
  font-size: 16px;
  line-height: 24px;
  padding: 13px 48px;
}
@media (max-width: 767px) {
  ._3n8NuEgU {
    padding-left: 32px;
    padding-right: 32px;
  }
}
._344Tj4__ {
  font-size: 20px;
  line-height: 28px;
  padding: 11px 64px;
}
@media (max-width: 767px) {
  ._344Tj4__ {
    padding-left: 32px;
    padding-right: 32px;
  }
}
._2u-I7BW0 {
  background: #9d1e81;
  border-color: #9d1e81;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._2u-I7BW0.mt5Y6x-K,
._2u-I7BW0:hover {
  background: #05947c;
  border-color: #05947c;
  color: #fff;
}
._2u-I7BW0._3OgVEeN8,
._2u-I7BW0:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}
._1G_ocH1a {
  background: #204ecf;
  border-color: #204ecf;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._1G_ocH1a.mt5Y6x-K,
._1G_ocH1a:hover {
  background: #183a9e;
  border-color: #183a9e;
  color: #fff;
}
._1G_ocH1a._3OgVEeN8,
._1G_ocH1a:disabled {
  background: #d8d9dc;
  border-color: #d8d9dc;
  color: #fff;
  cursor: default;
}
._3ZEWDKfF {
  background: transparent;
  border-color: #00cc83;
  color: #00cc83;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._3ZEWDKfF.mt5Y6x-K,
._3ZEWDKfF:hover {
  background: #00cc83;
  border-color: #00cc83;
  color: #fff;
}
._3ZEWDKfF._3OgVEeN8,
._3ZEWDKfF:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._2AywhfSi {
  background: transparent;
  border-color: #fff;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._2AywhfSi.mt5Y6x-K,
._2AywhfSi:hover {
  background: hsla(0, 0%, 100%, 0.05);
  border-color: #fff;
  color: #fff;
}
._2AywhfSi._3OgVEeN8,
._2AywhfSi:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._7hPQ_Wwr {
  background: #fff;
  border-color: #d8d9dc;
  color: #204ecf;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._7hPQ_Wwr.mt5Y6x-K,
._7hPQ_Wwr:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}
._7hPQ_Wwr._3OgVEeN8,
._7hPQ_Wwr:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._1Wpamv8F {
  background: #fff;
  border-color: #d8d9dc;
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
._1Wpamv8F.mt5Y6x-K,
._1Wpamv8F:hover {
  background: #fff;
  border-color: #d8d9dc;
  color: #183a9e;
}
._1Wpamv8F._3OgVEeN8,
._1Wpamv8F:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
.Mw_6M_G0 {
  color: #000;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}
.Mw_6M_G0,
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  background: transparent;
  border-color: transparent;
}
.Mw_6M_G0.mt5Y6x-K,
.Mw_6M_G0:hover {
  color: #183a9e;
}
.Mw_6M_G0._3OgVEeN8,
.Mw_6M_G0:disabled {
  background: #fff;
  border-color: #d8d9dc;
  color: #c4c6ca;
  cursor: default;
}
._6Zgcud2o {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
}
._1ZQ2DzIc:focus,
._3WOR0P94:focus,
._2716rq5F:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._1ZQ2DzIc:focus:not(:focus-visible),
._3WOR0P94:focus:not(:focus-visible),
._2716rq5F:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._3WOR0P94._3kMpP7da:after,
._3WOR0P94:hover:after,
._37cER8jB.w3wrzl58 ._2_UMVhrR:not(:focus):after {
  border-top: 2px solid #204ecf;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  width: 100%;
}
.CwHwCIsY {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  height: 64px;
  margin: 0 auto;
  max-width: 1272px;
  padding: 0 16px;
  position: relative;
  width: 100%;
}
@media (min-width: 1200px) {
  .CwHwCIsY:not(._2AUNzqse) {
    padding: 0 36px;
  }
}
.CwHwCIsY:focus-within {
  overflow: visible;
}
._2WQ1bk3l {
  align-items: center;
  display: flex;
  height: 64px;
  margin-right: 40px;
  min-height: 64px;
  position: relative;
}
._2hn_0aiE {
  display: none;
  list-style: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE {
    align-items: center;
    display: flex;
  }
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2hn_0aiE._2j8Bi4Lq {
    display: none;
  }
}
@media (min-width: 768px) {
  ._2hn_0aiE._2j8Bi4Lq {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    width: 100%;
  }
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3Tzn-Ksn:not(:last-child) {
    margin-right: 16px;
  }
}
._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
  margin-bottom: 10px;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._3JWeZNpb ._3Tzn-Ksn:not(:last-child) {
    margin-bottom: 0;
  }
}
._2V8cVnTd {
  display: none;
  height: 100%;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd {
    display: flex;
    flex-wrap: nowrap;
  }
}
._3xz6sTpw ._2V8cVnTd {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  width: 100%;
}
._3HIyy71x + ._3HIyy71x {
  margin-left: 16px;
}
._3WOR0P94 {
  align-items: center;
  color: #262d3d;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  position: relative;
  text-decoration: none;
}
._3WOR0P94:focus {
  align-self: center;
  max-height: 56px;
  outline-color: #204ecf;
  z-index: 1;
}
._3xz6sTpw ._3WOR0P94 {
  border-bottom: 1px solid #ebeced;
  font-size: 16px;
  height: 46px;
  margin-left: 0;
  width: 100%;
}
._3xz6sTpw ._3WOR0P94:after {
  display: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd:hover ._3WOR0P94:not(:hover) {
    opacity: 0.7;
  }
}
._37cER8jB {
  display: flex;
}
.l_18QO0k {
  content: "";
  display: block;
  height: 10px;
  margin-left: 4px;
  margin-top: 3px;
  transform: rotate(90deg);
  transition: transform 0.2s linear;
  width: 10px;
}
._2_UMVhrR {
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
}
._2_UMVhrR:focus:after {
  margin-top: 4px;
}
._6Zgcud2o {
  background: #fff;
  border-radius: 0 0 4px 4px;
  display: none;
  max-width: 380px;
  padding: 16px;
  position: absolute;
  top: 100%;
  width: 380px;
}
._1ZQ2DzIc {
  color: #455065;
  display: block;
  padding: 8px;
}
._1ZQ2DzIc:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1ZQ2DzIc:hover {
  color: #204ecf;
}
._3JWeZNpb {
  margin-left: auto;
}
._2716rq5F {
  width: 100%;
}
._2716rq5F:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._2716rq5F.OPGINcUC {
  font-weight: 400;
  padding-left: 0;
  padding-right: 0;
}
._2zORpOH1 {
  margin: 0 0 0 auto;
  position: absolute;
  right: 16px;
  top: 15px;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2zORpOH1 {
    display: none;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._2zORpOH1 {
    display: none;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2zORpOH1 {
    display: none;
  }
}
._1g37weM4 {
  display: none;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._1g37weM4 {
    display: inline-block;
    margin-right: 16px;
    vertical-align: bottom;
  }
}
.CwHwCIsY._3xz6sTpw {
  align-items: flex-start;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw {
    height: 64px;
  }
}
.CwHwCIsY._3xz6sTpw ._2hn_0aiE {
  display: block;
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse) .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse .CwHwCIsY._3xz6sTpw ._2hn_0aiE {
    display: flex;
  }
}
.CwHwCIsY._3xz6sTpw ._2hn_0aiE._2j8Bi4Lq {
  display: none;
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
  flex-grow: 1;
}
@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn {
    margin-left: 16px;
  }
}
.CwHwCIsY._3xz6sTpw ._3JWeZNpb ._3Tzn-Ksn:first-child {
  margin-left: 0;
}
@media (min-width: 768px) {
  .CwHwCIsY._3xz6sTpw ._3JWeZNpb {
    flex-direction: row;
  }
}
.CwHwCIsY._3xz6sTpw .irsyFUit {
  overflow-y: auto;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw .irsyFUit:focus-within {
  overflow-y: visible;
}
.CwHwCIsY._3xz6sTpw ._2zORpOH1 {
  display: block;
}
.CwHwCIsY._3xz6sTpw ._3HIyy71x {
  margin-left: 0;
}
.CwHwCIsY._3xz6sTpw ._37cER8jB {
  border-bottom: 1px solid #ebeced;
  display: block;
  flex-basis: 46px;
  overflow: hidden;
  transition: flex-basis 0.3s ease-in-out;
}
.CwHwCIsY._3xz6sTpw ._37cER8jB._34JlE2Hu {
  flex-basis: auto;
  transition: none;
}
.CwHwCIsY._3xz6sTpw ._2_UMVhrR {
  border-bottom: none;
  height: 46px;
  width: 100%;
}
@media (max-width: 767px) {
  .CwHwCIsY._3xz6sTpw ._2_UMVhrR {
    justify-content: space-between;
  }
}
.CwHwCIsY._3xz6sTpw ._6Zgcud2o {
  box-shadow: none;
  display: block;
  max-width: none;
  padding: 0 0 24px;
  position: static;
  width: 100%;
}
.CwHwCIsY._3xz6sTpw ._1ZQ2DzIc {
  padding-left: 0;
}
._37cER8jB.w3wrzl58 ._6Zgcud2o {
  display: block;
}
._37cER8jB.w3wrzl58 .l_18QO0k {
  transform: rotate(-90deg);
}
@media (min-width: 1050px) {
  .CwHwCIsY:not(._1eu1-118) ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}
@media (min-width: 1200px) {
  .CwHwCIsY._1eu1-118:not(._2AUNzqse)
    ._2V8cVnTd
    ._37cER8jB.w3wrzl58
    ._2_UMVhrR {
    opacity: 1;
  }
}
@media (min-width: 1272px) {
  .CwHwCIsY._1eu1-118._2AUNzqse ._2V8cVnTd ._37cER8jB.w3wrzl58 ._2_UMVhrR {
    opacity: 1;
  }
}
._3xz6sTpw ._37cER8jB.w3wrzl58 ._2_UMVhrR {
  font-weight: 600;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf),
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3l7e8OkS,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3wva0pDs,
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) .OPGINcUC {
  color: #fff;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._1TkDKt3Q {
  background: #fff;
}
.pVDj25o4._3rx4E4Wz .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf) ._3WOR0P94 {
  color: #fff;
}
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._3WOR0P94:hover:after,
.pVDj25o4._3rx4E4Wz
  .CwHwCIsY:not(._3xz6sTpw):not(._2CLR06xf)
  ._37cER8jB.w3wrzl58
  ._2_UMVhrR:after {
  border-top-color: #fff;
}
.ap5SohHH {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  height: 64px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
.ap5SohHH:focus-within {
  overflow: visible;
}
.ap5SohHH._2ExEwWJ- {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
}
.GSsufXWr {
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 24px;
}
.GSsufXWr > span {
  background-color: currentColor;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin: 6px 0;
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
}
.GSsufXWr._2K4zc3od > span:nth-child(2n) {
  margin-top: -9px;
  transform: rotate(-45deg);
}
.GSsufXWr._2K4zc3od > span:first-child {
  margin-top: 16px;
  transform: rotate(45deg);
}
.GSsufXWr._2K4zc3od > span:last-child {
  opacity: 0;
}
._27w5BS2q:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._27w5BS2q:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._58Zij-Oo {
  align-items: baseline;
  color: #455065;
  display: flex;
  flex-shrink: 0;
  font-size: 29px;
  line-height: 29px;
  max-width: 100%;
}
._58Zij-Oo img,
._58Zij-Oo svg {
  display: inline-block;
  vertical-align: -17.5%;
}
._58Zij-Oo svg {
  transform: translateY(0.5px);
}
._27w5BS2q {
  align-items: baseline;
  color: inherit;
  display: flex;
}
._27w5BS2q:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1YO-qTkC {
  color: #204ecf;
  line-height: 32px;
}
._1YO-qTkC,
.JZBjwybU {
  height: 32px;
}
._1SDD_TaP {
  height: 29px;
  margin: 0 9px 0 1px;
}
._1SDD_TaP:not([class*="hidden"]) + ._2yx3tQoS > span {
  color: inherit;
}
._2yx3tQoS {
  margin: 0 0 0 -6px;
}
._2yx3tQoS span {
  color: #204ecf;
  font-size: 13px;
  line-height: 13px;
  vertical-align: -26%;
}
._1KvUc_3R {
  color: #262d3d;
  font-size: 30px;
  letter-spacing: -1px;
  margin: 0 0 0 8px;
  white-space: nowrap;
}
._1lvdjAD0 {
  align-items: baseline;
  display: flex;
  margin-left: 16px;
  min-height: 32px;
}
.cpfvvVen:before {
  border-left: 1px solid #c4c6ca;
  content: "";
  display: inline-block;
  height: 32px;
  margin-right: 16px;
  vertical-align: -20%;
}
._3eQ_EZmB {
  color: #455065;
  display: inline-block;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: 19px;
}
._3eQ_EZmB span {
  font-size: 13px;
  line-height: 13px;
  vertical-align: -30%;
}
._2FUhxoSV ._1KvUc_3R,
._2FUhxoSV ._1YO-qTkC,
._2FUhxoSV ._2yx3tQoS > span,
._2FUhxoSV ._3eQ_EZmB,
._2FUhxoSV._58Zij-Oo {
  color: inherit;
}
._1ZjdOUzr {
  line-height: 35px;
}
._1ZjdOUzr ._1YO-qTkC,
._1ZjdOUzr .JZBjwybU {
  height: 37px;
}
._1ZjdOUzr ._1SDD_TaP {
  height: 35px;
}
._1ZjdOUzr ._2yx3tQoS span {
  font-size: 15px;
}
._1ZjdOUzr ._1KvUc_3R {
  font-size: 36px;
  letter-spacing: -1.2px;
  margin-left: 9px;
}
._3Qr50Vve {
  line-height: 22px;
}
._3Qr50Vve ._1YO-qTkC,
._3Qr50Vve .JZBjwybU {
  height: 25px;
}
._3Qr50Vve ._1SDD_TaP {
  height: 22px;
  margin-right: 7px;
}
._3Qr50Vve ._2yx3tQoS {
  margin: 0 0 0 -5px;
}
._3Qr50Vve ._2yx3tQoS span {
  font-size: 10px;
  line-height: 11px;
}
._3Qr50Vve ._1KvUc_3R {
  font-size: 24px;
  letter-spacing: -0.8px;
  margin-left: 6px;
}
._3Qr50Vve svg {
  transform: none;
}
.A1tn-zbg {
  line-height: 17px;
}
.A1tn-zbg ._1YO-qTkC,
.A1tn-zbg .JZBjwybU {
  height: 21px;
}
.A1tn-zbg ._1SDD_TaP {
  height: 18px;
  margin-right: 4px;
}
.A1tn-zbg ._2yx3tQoS {
  margin: 0 0 0 -3px;
}
.A1tn-zbg ._2yx3tQoS span {
  font-size: 8px;
  line-height: 10px;
}
.A1tn-zbg ._1KvUc_3R {
  font-size: 18px;
  letter-spacing: -0.6px;
  margin-left: 4px;
}
._27Qp7-0j {
  display: none;
}
@media (min-width: 768px) {
  ._2bE-MpfW {
    display: none;
  }
}
@media (min-width: 1024px) {
  ._1qWPArs6 {
    display: none;
  }
}
@media (min-width: 1200px) {
  ._3gIwdeKZ {
    display: none;
  }
}
@media (min-width: 768px) {
  .aSm5Eu45 {
    display: unset;
  }
  .aSm5Eu45 + ._2yx3tQoS > span {
    color: inherit;
  }
}
@media (min-width: 1024px) {
  .sQf4YFbG {
    display: unset;
  }
  .sQf4YFbG + ._2yx3tQoS > span {
    color: inherit;
  }
}
@media (min-width: 1200px) {
  .Pr_2B7aa {
    display: unset;
  }
  .Pr_2B7aa + ._2yx3tQoS > span {
    color: inherit;
  }
}
._1gM6aSr1,
._1gM6aSr1 ._1lvdjAD0,
._1gM6aSr1 ._27w5BS2q {
  align-items: center;
}
._1gM6aSr1 ._3eQ_EZmB {
  display: block;
  padding-top: 4px;
}
._1gM6aSr1 ._2yx3tQoS span {
  vertical-align: -40%;
}
@media (min-width: 768px) {
  ._3oXj0__2,
  ._3oXj0__2 ._1lvdjAD0,
  ._3oXj0__2 ._27w5BS2q {
    align-items: center;
  }
  ._3oXj0__2 ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  ._3oXj0__2 ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 1024px) {
  .N3vjTBqY,
  .N3vjTBqY ._1lvdjAD0,
  .N3vjTBqY ._27w5BS2q {
    align-items: center;
  }
  .N3vjTBqY ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  .N3vjTBqY ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 1200px) {
  ._3a2ad5pt,
  ._3a2ad5pt ._1lvdjAD0,
  ._3a2ad5pt ._27w5BS2q {
    align-items: center;
  }
  ._3a2ad5pt ._3eQ_EZmB {
    display: block;
    padding-top: 4px;
  }
  ._3a2ad5pt ._2yx3tQoS span {
    vertical-align: -40%;
  }
}
@media (min-width: 768px) {
  ._1YE9rzs1,
  ._1YE9rzs1 ._1lvdjAD0,
  ._1YE9rzs1 ._27w5BS2q {
    align-items: baseline;
  }
  ._1YE9rzs1 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._1YE9rzs1 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
@media (min-width: 1024px) {
  ._3ofkGqyM,
  ._3ofkGqyM ._1lvdjAD0,
  ._3ofkGqyM ._27w5BS2q {
    align-items: baseline;
  }
  ._3ofkGqyM ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._3ofkGqyM ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
@media (min-width: 1200px) {
  ._2IToekk2,
  ._2IToekk2 ._1lvdjAD0,
  ._2IToekk2 ._27w5BS2q {
    align-items: baseline;
  }
  ._2IToekk2 ._3eQ_EZmB {
    display: inline-block;
    padding-top: 0;
  }
  ._2IToekk2 ._2yx3tQoS span {
    vertical-align: -26%;
  }
}
._2EepOHy1 img,
._2EepOHy1 svg {
  height: 100%;
  width: auto;
}
.xVo_5L7k {
  color: inherit;
}
.xVo_5L7k svg path {
  fill: currentColor;
}
._3Wv9utNN a:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._3Wv9utNN a:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
._7QdK4zyR {
  align-items: center;
  background: rgba(38, 45, 61, 0.95);
  bottom: -1000px;
  display: flex;
  font-weight: 100;
  justify-content: space-between;
  left: 0;
  opacity: 0;
  padding: 20px 15px;
  position: fixed;
  right: 0;
  transition-delay: 0s, 0.3s;
  transition-duration: 0.3s, 0.01s;
  transition-property: opacity, bottom;
  z-index: 100;
}
@media (min-width: 1024px) {
  ._7QdK4zyR {
    padding: 20px 50px;
  }
}
@media (max-width: 767px) {
  ._2_Bs6D8F {
    flex-direction: column;
    text-align: center;
  }
}
._1X5ZYp4i {
  bottom: 0;
  opacity: 1;
  transition-delay: 0s;
}
._3jl4op_D {
  position: static;
}
._3Wv9utNN {
  font-size: 16px;
  line-height: 20px;
}
._1MIke5bW ._3Wv9utNN {
  color: #c4c6ca;
}
._2_Bs6D8F ._3Wv9utNN {
  color: #fff;
}
._3Wv9utNN a {
  text-decoration: underline;
}
._3Wv9utNN a:focus {
  outline-color: #204ecf;
  z-index: 1;
}
._1MIke5bW ._3Wv9utNN a {
  color: #c4c6ca;
}
._2_Bs6D8F ._3Wv9utNN a {
  color: #00cc83;
}
._1MIke5bW ._3Wv9utNN a:hover {
  color: #fff;
}
._2_Bs6D8F ._3Wv9utNN a:hover {
  color: #00e693;
}
._1WV0LMf5 {
  margin-left: 24px;
}
@media (max-width: 767px) {
  ._2_Bs6D8F ._1WV0LMf5 {
    margin: 20px 0 0;
  }
}
.FjKAy-Wz {
  white-space: nowrap;
}
._3LOPUP7d {
  margin-bottom: 96px;
}
._3DOEOvRI {
  margin-bottom: 64px;
}
._1YibmBYc:last-child:not(._1_bvS4sL),
._11ZqUWmz {
  margin-bottom: 0;
}
._2_32njdU {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  width: 1302px;
}
@media (min-width: 1024px) {
  ._2_32njdU {
    padding-left: 36px;
    padding-right: 36px;
  }
}
.GD313NS8:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
.GD313NS8:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
.GD313NS8 {
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  line-height: normal;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  width: auto;
}
.GD313NS8::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.GD313NS8 {
  /* background: url(https://frontier-assets.toptal.com/8e6c14b98b2fb879debd9da11bb7ac0b.svg)
    no-repeat; */
  color: #fff;
  cursor: pointer;
  font-family: Proxima Nova, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 38px;
  margin-top: auto;
  /* padding-left: 54px; */
  transition: opacity 0.2s;
}
.GD313NS8:focus {
  outline-color: #204ecf;
  z-index: 4;
}
.GD313NS8:hover {
  opacity: 0.7;
}
.GD313NS8:focus {
  transition: none;
}
._1OOlBGn9 {
  height: inherit;
  position: relative;
}
._2TGXb7wF {
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease;
  z-index: -1;
}
._2TGXb7wF._2QdOQgFU {
  display: flex;
  opacity: 1;
  z-index: 1;
}
._2amITTdw:focus {
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
}
._2amITTdw:focus:not(:focus-visible) {
  outline: 0;
  outline-offset: 0;
}
@-webkit-keyframes _2JYQswAH {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _2JYQswAH {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
._1CPABHY2 {
  min-height: 92px;
}
._1CPABHY2._3GX3Lxnr {
  opacity: 0;
}
._1CPABHY2:focus-within {
  overflow: visible;
}
._1VyYPMhf {
  justify-content: space-evenly;
}
._1VyYPMhf,
._2amITTdw {
  align-items: center;
  display: flex;
  flex-direction: row;
}
._2amITTdw {
  flex: 1;
  height: 92px;
  justify-content: center;
  min-width: 148px;
  opacity: 0;
  padding: 0 16px;
  position: relative;
}
._2amITTdw:focus {
  outline-color: #204ecf;
  z-index: 1;
}
@media (max-width: 767px) {
  ._2amITTdw {
    height: 80px;
  }
}
._2amITTdw,
._2amITTdw * {
  transition: 0.2s;
}
._2amITTdw:focus {
  transition: none;
}
._3LF-kzsO ._2amITTdw {
  -webkit-animation: _2JYQswAH 2s forwards;
  animation: _2JYQswAH 2s forwards;
}
._29fwj9AM ._2amITTdw {
  opacity: 1;
}
.wOPq9JTO {
  display: inline-flex;
}
.wOPq9JTO path {
  fill: #84888e;
}
._3kQx5a7C .wOPq9JTO path {
  fill: #c4c6ca;
}
._3VvCA52f {
  align-items: center;
  color: #204ecf;
  display: flex;
  flex-direction: row;
  font-size: 9px;
  font-weight: 400;
  justify-content: space-around;
  line-height: 9px;
  margin-top: 22px;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  white-space: nowrap;
}
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  ._3VvCA52f {
    left: 20%;
  }
}
._3kQx5a7C ._3VvCA52f {
  color: #edf0f8;
}
._3VvCA52f:before {
  background: url(https://frontier-assets.toptal.com/0cee6865f29c3233ae5e6843cd86a25a.svg)
    no-repeat;
  content: "";
  height: 11px;
  left: -14px;
  opacity: 0;
  position: absolute;
  top: -1px;
  width: 11px;
}
@media (min-width: 768px) {
  ._1iX_1d1k:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
._1iX_1d1k:hover ._3VvCA52f {
  margin-left: 8px;
}
._1iX_1d1k:hover ._3VvCA52f:before {
  opacity: 1;
}
._1iX_1d1k:hover .wOPq9JTO path {
  fill: #000;
}
._1iX_1d1k:hover._3kQx5a7C ._3VvCA52f {
  color: #fff;
}
._1iX_1d1k:hover._3kQx5a7C .wOPq9JTO path {
  fill: #fff;
}
._3fwLmXc4,
._34Oy4nN6 {
  /* background-color: #9d1e81; */
}

._34Oy4nN6 {
  position: relative;
}
._34Oy4nN6::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* background-color: #333; */
  opacity: 0.55;
}
._3fwLmXc4 {
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 64px;
  text-align: center;
}
@media (min-width: 768px) {
  ._3fwLmXc4 {
    padding-bottom: 48px;
  }
}
._1CgVsu-I {
  font-size: 52px;
  font-weight: 300;
  line-height: 64px;
  margin: 56px auto 48px;
  z-index: 1000;
}
@media (max-width: 523px) {
  ._1CgVsu-I {
    font-size: 28px;
    line-height: 36px;
    margin: 24px auto;
  }
}
.XAxRXh00 {
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  margin: 0 auto 32px;
  max-width: 776px;
  z-index: 1000;
}
.B2jSmrnZ .XAxRXh00 {
  max-width: 960px;
}
@media (max-width: 1024px) {
  .B2jSmrnZ .XAxRXh00 {
    max-width: 720px;
  }
}
@media (max-width: 768px) {
  .XAxRXh00 {
    max-width: 700px;
  }
}
@media (max-width: 523px) {
  .XAxRXh00 {
    font-size: 16px;
    line-height: 24px;
  }
}
._2L2hCczK .XAxRXh00 {
  margin-bottom: 64px;
}
@media (min-width: 525px) {
  ._2L2hCczK ._3fwLmXc4 {
    padding-bottom: 48px;
  }
}
.U5_JdGVY {
  background-color: #f6f8fb;
  color: #455065;
  max-width: 100%;
}
._2vQhGXeI {
  background: transparent;
  color: #fff;
}
.KN3Bqp5f {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto !important;
  overflow: hidden;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
.KN3Bqp5f:focus-within {
  overflow: visible;
}
@media (max-width: 767px) {
  .KN3Bqp5f {
    align-items: center;
    flex-direction: column;
  }
}
._1eAmcXxe {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 1.57px;
  margin-bottom: 0;
  min-width: 220px;
  opacity: 0.7;
  text-align: left;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  ._1eAmcXxe {
    width: 220px;
  }
}
@media (max-width: 767px) {
  ._1eAmcXxe {
    padding: 24px 0 4px;
    text-align: center;
    width: 100%;
  }
}
._2zZGXHsn {
  flex: 1;
  min-height: 92px;
  width: 100%;
}
@media (max-height: 400px), (max-width: 768px) {
  ._10JizEvG {
    display: none;
  }
}
.YLoVmY1W {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
}
@media (min-width: 768px) {
  .YLoVmY1W {
    flex-direction: row;
    margin-bottom: 16px;
    width: auto;
  }
}
.YLoVmY1W .NmaP5Lp7 {
  margin-left: 0;
  min-width: 262px;
}
.YLoVmY1W ._3Y2JtuDg {
  margin-bottom: 16px;
  margin-right: 0;
}
@media (min-width: 768px) {
  .YLoVmY1W ._3Y2JtuDg {
    margin-bottom: 0;
    margin-right: 32px;
  }
}
._1r0H8J8l {
  margin-bottom: 64px;
}
.Ufre5Zao {
  color: #262d3d;
  font-size: 60px;
  font-weight: 300;
  line-height: 72px;
  margin-bottom: 32px;
  text-align: center;
}
._3MouK0K_ {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 auto;
  max-width: 560px;
  text-align: center;
}
._3JAGJc7G {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}
@media (min-width: 768px) {
  ._3JAGJc7G {
    margin: 0 auto;
    max-width: 100%;
    padding: 0 24px;
    width: 1272px;
  }
}
@media (min-width: 768px) and (min-width: 1024px) {
  ._3JAGJc7G {
    padding-left: 36px;
    padding-right: 36px;
  }
}
@media (min-width: 1024px) {
  ._3JAGJc7G {
    max-width: 1024px;
  }
}
._3JAGJc7G .lazyload,
._3JAGJc7G .lazyloading {
  max-width: 500px;
}
.A1onunwX {
  height: 100%;
  margin-right: 16px;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
.A1onunwX,
.A1onunwX.iBnPbASD {
  -o-object-fit: cover;
  object-fit: cover;
}
.A1onunwX.iBnPbASD {
  display: none;
  flex: 1;
}
._3cHthl3n {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 72px;
}
@media (min-width: 768px) {
  ._3cHthl3n:first-child ._3LCpUdXK {
    margin-right: 0;
  }
  ._3cHthl3n:first-child ._1fXJstuQ {
    color: #204ecf;
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
  }
  ._3cHthl3n:nth-child(2) ._3LCpUdXK {
    margin-right: 16px;
  }
  ._3cHthl3n:nth-child(2) ._1fXJstuQ {
    color: #204ecf;
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
  }
  ._3cHthl3n:nth-child(3) ._3LCpUdXK {
    margin-right: 32px;
  }
  ._3cHthl3n:nth-child(3) ._1fXJstuQ {
    color: #204ecf;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
  }
  ._3cHthl3n:nth-child(4) ._3LCpUdXK {
    margin-right: 48px;
  }
  ._3cHthl3n:nth-child(4) ._1fXJstuQ {
    color: #204ecf;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  }
  ._3cHthl3n:nth-child(5) ._3LCpUdXK {
    margin-right: 64px;
  }
  ._3cHthl3n:nth-child(5) ._1fXJstuQ {
    color: #204ecf;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
}
._2IHnA1YC {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px 36px 0 0;
}
._2IHnA1YC .KKvotxFb {
  color: #455065;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
._2IHnA1YC ._3y6ZyoCR {
  color: #262d3d;
  font-size: 44px;
  font-weight: 300;
  line-height: 56px;
}
@media (max-width: 767px) {
  ._2IHnA1YC {
    flex-direction: row;
    text-transform: capitalize;
  }
  ._2IHnA1YC ._3y6ZyoCR,
  ._2IHnA1YC .KKvotxFb {
    color: #84888e;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
  ._2IHnA1YC .KKvotxFb {
    margin-right: 4px;
  }
}
.bZOBwyMg {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
}
@media (min-width: 1024px) {
  .bZOBwyMg {
    display: none;
  }
}
@media (min-width: 768px) {
  .bZOBwyMg ._2t9a7VOu {
    color: #204ecf;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0 0 0 8px;
  }
}
@media (max-width: 767px) {
  .bZOBwyMg {
    margin-top: 12px;
  }
  .bZOBwyMg ._1fXJstuQ,
  .bZOBwyMg ._2t9a7VOu {
    color: #204ecf;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  .bZOBwyMg ._2t9a7VOu {
    margin-left: 4px;
  }
}
._2wFYdbRy {
  max-width: 500px;
}
._1Owxy_9b {
  color: #262d3d;
  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
}
._3LCpUdXK {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
@media (min-width: 1041px) {
  ._3cHthl3n {
    margin-bottom: 88px;
  }
}
@media (max-width: 1023px) {
  .Ufre5Zao {
    font-size: 52px;
  }
  ._3JAGJc7G {
    justify-content: flex-start;
    position: relative;
  }
  .A1onunwX.iBnPbASD {
    display: block;
  }
  .A1onunwX._33T6ZChd {
    display: none;
  }
}
@media (max-width: 833px) {
  ._3LCpUdXK {
    padding-right: 144px;
  }
}
@media (max-width: 767px) {
  .Ufre5Zao {
    font-size: 36px;
    line-height: 44px;
  }
  .A1onunwX.iBnPbASD {
    display: none;
  }
  ._3cHthl3n {
    flex-direction: column;
    margin: 0 auto;
    max-width: 100%;
    padding: 36px 24px;
    width: 1272px;
    width: 100%;
  }
}
@media (max-width: 767px) and (min-width: 1024px) {
  ._3cHthl3n {
    padding-left: 36px;
    padding-right: 36px;
  }
}
@media (max-width: 767px) {
  ._3cHthl3n:nth-child(2n) {
    background-color: #f6f8fb;
  }
  ._3cHthl3n:last-child:not(:nth-child(2n)) {
    padding-bottom: 0;
  }
  ._1r0H8J8l {
    margin-bottom: 0;
  }
  ._2wFYdbRy {
    max-width: none;
  }
  ._1Owxy_9b {
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 12px;
  }
  ._3LCpUdXK {
    padding-right: 0;
  }
}
</style>
