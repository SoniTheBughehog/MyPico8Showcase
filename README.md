# 🎮 SoniTheBughehog — Game Showcase

👉 **Check out my games here:**  
[MyPico8Showcase](https://sonithebughehog.github.io/MyPico8Showcase/)

Welcome to my personal game showcase!  
This website is a simple, lightweight hub where I publish the games I create — from small prototypes to finished projects.

Most of my games are built with **Pico-8** here.
If you’re curious, feel free to explore, play, and break things. 🙂

---

## 🌐 About the Website

This site is designed to be:

- **Simple** — pure static pages, no backend.  
- **Fast** — games load instantly thanks to a minimal structure.  
- **Clean** — each game sits in its own folder inside `/games/`.  
- **Flexible** — others can reuse this structure if they want.

The website automatically lists all available games by scanning the `games/` directory at build time.

---

## 📁 Project Structure

```
.
├─ games/
│  ├─ shootemup/
│  │  ├─ index.html
│  │  ├─ assets/
│  ├─ my-next-game/
│     ├─ index.html
│     ├─ assets/
│
├─ public/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ utils/
│
└─ README.md
```

To add a new game:

1. Create a new folder inside `games/`
2. Add an `index.html` file (your game entry point)
3. Add any assets your game needs
4. Build again — it’s automatically detected

---

## 🚀 Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
---

## 📦 Deploy

This site is fully static, so deployment works on:

- GitHub Pages  
- Netlify  
- Vercel  
- Cloudflare Pages  
- Any static host

Just deploy the `dist/` folder.

---

## 🧩 Reuse the Project (Optional)

If you want to reuse the structure to showcase your own games, go ahead.

This project is intentionally simple — clone it, drop your games into `/games/`, and you’re good to go.

---

## 🐛 About Me

I’m **SoniTheBughehog**, a developer who loves making small games, prototypes and weird experiments.  
This site is just a fun space to share what I create.

If you enjoy any of the games — awesome!  
If you don’t — even better, it means I can improve. 😄
