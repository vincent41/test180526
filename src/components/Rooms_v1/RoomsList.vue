<template>

  <v-layout row wrap>
    <v-flex xs4
            v-for="(card, i) in cards"
            :key="card.roomNr"
    >
      <v-card
        :to="'detail/'+i"
      >
        <v-card-media
          :src="'/src/assets/images/' + card.roomNr + '/'+card.src[0]"
          height="200px"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="card.title"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>

    export default {
      data: () => ({

        cards: data.rooms
      })
    }
</script>

<style scoped>

</style>
