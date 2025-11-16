<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <h1>🎮 Mes Jeux PICO-8</h1>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>© 2025 SoniTheBughehog</p>
    </footer>
  </div>
</template>

<style>
/* ==== Global Dark Theme ==== */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #121212; /* fond sombre partout */
  color: #eee;               /* texte clair */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a {
  color: #42b883;           /* accent vert */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: #42b883;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #36926e;
}

header {
  background-color: #1f1f1f;
  padding: 1em 2em;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #42b883;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
}

main {
  flex: 1;
  padding: 2em;
}

footer {
  text-align: center;
  padding: 1em;
  font-size: 0.9em;
  color: #888;
}
</style>
