<template>
  <v-container>
<v-layout row>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in room.src" :src="'/src/assets/images/' + room.roomNr + '/' + item" :key="i"></v-carousel-item>
    </v-carousel>
</v-layout>
    <v-layout row wrap>
      <v-flex class="xs12 mt-3">

        <img class="thumb" v-for="(image, i) in room.src" :src="'/src/assets/images/' + room.roomNr + '/' +image" @click="onClick(i)">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        <v-card flat>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{room.title}}</h3>
              <div>{{room.description}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import VueGallerySlideshow from 'vue-gallery-slideshow'
    export default {
      data() {
        return {
          // cards: data.rooms,
          room: '',
          index: null,
          images: ''

        }
      },
      methods: {
        onClick(i) {
          this.index = i;
        },
      },
      created () {
        this.room = data.rooms[this.$route.params.id]
        this.images = this.room.src.map((v) => {
          return '/src/assets/images/' + this.room.roomNr + '/' + v
        })
        console.log(this.images)
      },
      components: {
        VueGallerySlideshow
      }
    }
</script>

<style scoped>
 .thumb {
    width: 100px;
    height: 100px;
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }
</style>
