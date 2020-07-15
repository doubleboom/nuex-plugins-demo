<template>
  <div class="container">
    <div>
      <Logo @click.native="sweetalert" />
      <h1 class="title">
        ssr-demo
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <template>
        <client-only>
          <swiper ref="mySwiper" class="swiper1" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </client-only>
      </template>
      <img
        preview="1"
        preview-text="观点英语课程进阶体系"
        src="@/static/001助手.jpg"
        alt="观点英语课程进阶体系"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  methods: {
    sweetalert() {
      this.$submitPhone()
    },
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper
  //   },
  // },
  // mounted() {
  //   this.swiper.slideTo(3, 1000, false)
  // },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.swiper1 {
  background: salmon;
  height: 200px;
  width: 100%;
}
</style>
