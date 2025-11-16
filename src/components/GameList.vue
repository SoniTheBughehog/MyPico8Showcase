<template>
  <div class="game-list">
    <div class="header-section">
      <h2>Découvrez mes jeux</h2>
      <p class="games-count">{{ games.length }} jeux disponibles</p>
    </div>

    <div class="games-container">
      <router-link 
        v-for="game in games" 
        :key="game.slug" 
        :to="`/game/${game.slug}`"
        class="game-card"
      >
        <div class="card-glow"></div>
        <div class="card-content">
          <div class="game-icon">🎮</div>
          <h3>{{ game.name }}</h3>
          <p>{{ game.description }}</p>
          <div class="play-button">
            <span>Jouer</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import games from '../games.js'
</script>

<style scoped>
.game-list {
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.header-section {
  text-align: center;
  margin-bottom: 3em;
}

.header-section h2 {
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 0.5em 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.games-count {
  color: #888;
  font-size: 1.1em;
  margin: 0;
}

.games-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2em;
}

.game-card {
  position: relative;
  background: rgba(31, 31, 45, 0.6);
  border-radius: 20px;
  padding: 2em;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.game-card:hover .card-glow {
  opacity: 1;
}

.game-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.3);
}

.card-content {
  position: relative;
  z-index: 1;
}

.game-icon {
  font-size: 3em;
  margin-bottom: 0.5em;
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
}

.game-card h3 {
  margin: 0 0 0.5em 0;
  font-size: 1.5em;
  font-weight: 700;
  color: #fff;
}

.game-card p {
  font-size: 1em;
  color: #aaa;
  margin: 0 0 1.5em 0;
  line-height: 1.6;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0.75em 1.25em;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #fff;
}

.game-card:hover .play-button {
  transform: translateX(5px);
}

.arrow {
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.game-card:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .games-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5em;
  }
  
  .header-section h2 {
    font-size: 2em;
  }
}
</style>