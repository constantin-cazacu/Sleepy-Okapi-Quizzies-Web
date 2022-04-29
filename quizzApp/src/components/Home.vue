<template>
  <div class="bg-purple-900">
    <Navbar></Navbar>
  </div>
<!--  Content-->
  <router-view />
</template>

<!--TODO style Home page, register, navbar
    TODO Add quiz and complete quiz
    -->

<script>
import Navbar from "./Navbar.vue"
import QuizWindow from "./QuizWindow.vue";
import Register from "./Register.vue";

export default {
  name: "Home",
  // components: {
  //   Navbar
  // },
  components: {QuizWindow, Navbar}
}
</script>

<style scoped>

</style>
