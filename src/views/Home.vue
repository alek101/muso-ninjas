<template>
  <div class="home">
    <div class="error" v-if="error">Couldn't fetch the data!</div>
    <list-view v-if="documents" :playlists="documents"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import getCollection from '../composables/getCollection'
import ListView from '../components/ListView.vue'

export default {
  components: { ListView },
  name: 'Home',
  setup(){
    const {error, documents} = getCollection('playlists')
   
    return {error, documents}
  }
}
</script>
