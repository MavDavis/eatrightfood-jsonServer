<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    Navbar, Footer
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary: #f6df19;
  --dark: #060d18;
  --light: #f1f5f9;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
}
body {
  background: var(--light);
  height: fit-content;
}
</style>
