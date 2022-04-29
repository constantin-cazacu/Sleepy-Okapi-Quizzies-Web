<template>

  <div class="bg-cover bg-center ... min-h-screen" style="background-image: url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1005300/66cdbdfdd198c9d931868f5c456b6750e9e3f0c1.jpg')">
    <div class="pt-10">
      <div v-if="quizzes.length">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="mt-6 grid grid-cols-1 gap-y-20 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="quiz in quizzes" :key="quiz.id" class="group relative">
              <router-link :to="{name: 'quiz', params: {id: quiz.id}}">
                <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img src="https://jackboxgames.b-cdn.net/wp-content/uploads/2019/06/Green0000.png" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-white font-bold">
                      <a href="#">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ quiz.title }}
                      </a>
                    </h3>
                  </div>
                  <p class="text-sm font-medium text-white">{{ quiz.questions_count }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
      <div v-else>
        <p>Loading quizzes...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizzes:[]
    }
  },
  mounted() {
    fetch('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes', {
      headers: {'X-Access-Token': 'ddd3284b8cc65992112c976be5af1126ef7e8f9cc4223df096ab164ee9df76d5'}
    })
        .then(response => response.json())
        .then(data => this.quizzes = data)
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
  },
}
</script>

<style scoped>

</style>
