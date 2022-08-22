<template>
  <section>
    <div class="sec1">
      <div class="bg-image">
      <div class="text">
        <h2>Contact Us for help</h2>
        <p>
          Feel free to contact us at anytime. We will get back to you as soon as
          we can <i class="fas fa-phone"></i>
        </p>
      </div>
      <div class="opacity"></div>
      </div>
    </div>
  </section>
  <contact-form/>
</template>

<script>
import contactForm from '../components/contactForm.vue';
export default {
  components:{
    contactForm,
  }
};
</script>

<style lang="scss" scoped>
.sec1 {
  position: relative;
  width: 100%;
  height: 100vh;
  .bg-image {
    position: relative;
    width: 100%;
    height: 100%;

    background: url(../assets/contact.jpg) no-repeat center center ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

      .opacity {
        position: absolute;
        background: rgba(6, 13, 24, 0.8);
        top: 0;
        left: 0;
       height: 100%;
        width: 100%;
      }
        .text {
        display: flex;
        padding: 4rem 5%;

        position: relative;
        flex-direction: column;
        top: 30%;
        h2,
        p {
          z-index: 29;
          color: #fff;

          i{
            color:var(--primary);
            cursor: pointer;
            transition: ease .2s;

            &:hover{
              transform: translateY(-2px);
            }
          }
        }
        h2 {
          display: block;
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p{
          max-width: 50%;
          font-size: 1.6rem;
        }
        @media (max-width: 500px) {
          p {
            max-width: 90%;
            font-size: 1.1rem;
          }
          h2{
            font-size: 2rem;
          }
        }
      }
  }
}
</style>