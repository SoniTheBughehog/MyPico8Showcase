<template>
  <div class="game-view">
    <button @click="$router.back()" class="back-button">← Retour</button>
    <div class="game-container">
      <iframe :src="`/games/${slug}/index.html`" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = ref('')

onMounted(() => {
  slug.value = route.params.slug
})
</script>

<style scoped>
.game-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.back-button {
  align-self: flex-start;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  font-size: 1em;
}

.game-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container iframe {
  width: 95%;
  max-width: 1000px;
  height: 85vh;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.8);
}
</style>
