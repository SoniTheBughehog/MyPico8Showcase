<template>
  <div class="game-view">
    <div v-if="game" class="game-wrapper">
      <!-- Header avec titre et bouton retour -->
      <div class="game-header">
        <button @click="$router.back()" class="back-button">
          <span class="back-icon">←</span>
          <span>Retour</span>
        </button>
        <h1>{{ game.name }}</h1>
        <div class="spacer"></div>
      </div>

      <div class="game-display">
        <div class="game-frame">
          <iframe :src="gameUrl" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <!-- Si game est introuvable -->
    <div v-else class="error">
      <div class="error-content">
        <div class="error-icon">🤔</div>
        <h2>Jeu introuvable</h2>
        <p>Le slug <strong>{{ slug }}</strong> n'existe pas dans la collection.</p>
        <router-link to="/" class="error-button">
          <span>← Retour à la liste</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import games from "../games.js"

const route = useRoute()
const slug = route.params.slug

const game = computed(() =>
  games.find(g => g.slug.toLowerCase() === slug.toLowerCase())
)

const thumbnailUrl = computed(() =>
  game.value
    ? import.meta.env.BASE_URL + `games/${game.value.slug}/thumb.png`
    : ""
)

const gameUrl = computed(() =>
  game.value
    ? import.meta.env.BASE_URL + `games/${game.value.slug}/index.html`
    : ""
)
</script>

<style scoped>
.game-view {
  width: 100%;
  min-height: 80vh;
}

.game-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2em;
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Header avec titre et bouton */
.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  padding: 0 1em;
}

.game-header h1 {
  margin: 0;
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.spacer {
  width: 140px; /* Même largeur que le bouton pour centrer le titre */
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.75em 1.5em;
  font-size: 1em;
  white-space: nowrap;
}

.back-icon {
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.back-button:hover .back-icon {
  transform: translateX(-3px);
}

/* Conteneur principal du jeu */
.game-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
}

.game-frame {
  width: 100%;
  max-width: 1200px; /* Très large pour un grand affichage */
  aspect-ratio: 4 / 3; /* Ratio classique pour PICO-8 */
  background: rgba(31, 31, 45, 0.8);
  border-radius: 20px;
  padding: 1em;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.game-frame::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.game-frame iframe {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #000;
}

/* Thumbnail (optionnel) */
.game-thumbnail {
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.game-thumbnail img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

/* Page d'erreur stylisée */
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.error-content {
  text-align: center;
  padding: 3em;
  background: rgba(31, 31, 45, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(255, 100, 100, 0.3);
  max-width: 500px;
}

.error-icon {
  font-size: 5em;
  margin-bottom: 0.5em;
}

.error-content h2 {
  font-size: 2em;
  margin: 0 0 0.5em 0;
  color: #ff6b6b;
}

.error-content p {
  color: #aaa;
  font-size: 1.1em;
  margin-bottom: 2em;
}

.error-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75em 1.5em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.error-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .game-header {
    flex-direction: column;
    gap: 1em;
  }
  
  .spacer {
    display: none;
  }
  
  .game-header h1 {
    font-size: 1.8em;
  }
  
  .game-frame {
    max-width: 100%;
    padding: 0.5em;
  }
}
</style>