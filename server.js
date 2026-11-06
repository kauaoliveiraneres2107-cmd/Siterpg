const express = require('express');
const path = require('path');
const DB = require('./data');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const find = id => DB.find(d => d.id === String(id || '').trim());

// Passo 1: o jogador digita o ID. O servidor só revela o nome e a dificuldade.
app.post('/api/hack', (req, res) => {
  const t = find(req.body.id);
  if (!t) return res.json({ ok: false });
  if (t.oscp) return res.json({ ok: true, oscp: true });
  res.json({ ok: true, cat: t.cat, dif: t.dif });
});

// Passo 2: após vencer o minigame, o servidor libera as informações.
app.post('/api/access', (req, res) => {
  const t = find(req.body.id);
  if (!t || t.oscp) return res.status(404).json({ ok: false });
  const { oscp, ...info } = t;
  res.json(info);
});

app.listen(process.env.PORT || 3000, () => console.log('NET//GHOST online'));
