<template>
  <nav
      class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
  >
    <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link :to="{name: 'HeroPage'}">
          <div
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          ><img class="h-8 w-auto" src="../assets/quizhut_logotype.svg"/></div>
        </router-link>
        <button
            class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button" v-on:click="toggleNavbar()">
          <img class="h-8 w-auto" src="../assets/menu.svg" />
        </button>
      </div>
      <div
          class="lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none"
          v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li>
            <div
                class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded hover:text-indigo-200 transition duration-200">
              <router-link :to="{name: 'all_quizzes'}">
                <span class="text-white px-1" @click="getQuizzes">Quizzes</span>
              </router-link>
            </div>
          </li>
          <li>
            <div
                class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded hover:text-indigo-200 transition duration-200">
              <router-link :to="{name: 'Register'}">
                <span class="text-white px-1">Register</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    async getQuizzes() {
    }
  }
}
</script>
