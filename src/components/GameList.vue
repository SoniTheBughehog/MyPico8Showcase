<template>
  <div class="game-list">
    <h2>Liste des jeux</h2>
    <div class="games-container">
      <div 
        v-for="game in games" 
        :key="game.slug" 
        class="game-card"
      >
        <router-link :to="`/game/${game.slug}`">
          <h3>{{ game.name }}</h3>
          <p>{{ game.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const games = [
  { name: 'Shoot Em Up', slug: 'ShootEmUp', description: 'Tirez sur les ennemis et survivez le plus longtemps possible.' },
  { name: 'Space Adventure', slug: 'SpaceAdventure', description: 'Explorez l’espace et évitez les obstacles.' },
  { name: 'Autre Jeu', slug: 'AutreJeu', description: 'Petit jeu fun à découvrir.' }
]
</script>

<style scoped>
.games-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5em;
}

.game-card {
  background-color: #1f1f1f;
  border-radius: 10px;
  padding: 1em;
  transition: background-color 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.7);
}

.game-card:hover {
  background-color: #2a2a2a;
}

.game-card h3 {
  margin: 0 0 0.5em 0;
  font-size: 1.2em;
  color: #42b883;
}

.game-card p {
  font-size: 0.9em;
  color: #ccc;
  margin: 0;
}

.game-card a {
  display: block;
  color: inherit;
  text-decoration: none;
}
</style>
