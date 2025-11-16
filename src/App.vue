<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>🎮 Mes Jeux PICO-8</h1>
      </div>
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
/* ==== Global Modern Dark Theme ==== */
* {
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  color: #e0e0e0;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  color: #00d9ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #00b8d4;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.75em 1.5em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

button:active {
  transform: translateY(0);
}

header {
  background: rgba(31, 31, 45, 0.8);
  backdrop-filter: blur(10px);
  padding: 2em;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header-content h1 {
  margin: 0;
  font-size: 2.5em;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  margin: 0.5em 0 0 0;
  font-size: 1em;
  color: #888;
  font-weight: 300;
}

main {
  flex: 1;
  padding: 2em;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

footer {
  text-align: center;
  padding: 2em;
  font-size: 0.9em;
  color: #666;
  background: rgba(15, 15, 20, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>