// ====== EDITE AQUI: locais, listas e histórias ======

const LV={"fácil":0,"baixa":0,"média":1,"alta":2,"difícil":2,"muito alta":3};
const LVN=["BAIXA","MÉDIA","ALTA","EXTREMA"];
// =====================================================

const S=document.getElementById('screen');
const post=async(u,b)=>(await fetch(u,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)})).json();
const $=(h)=>{S.innerHTML=h};
const rnd=n=>Math.floor(Math.random()*n);
let timers=[];
const clr=()=>{timers.forEach(clearTimeout);timers.forEach(clearInterval);timers=[]};

function login(msg){
 clr();
 $(`<h1>NET//GHOST v2.4</h1><div class="dim">Terminal de intrusão — classe HACKER</div>
 <div class="box"><div>Digite o ID de hackeamento do alvo:</div>
 <input id="idin" placeholder="000.000.000.0" autocomplete="off" inputmode="decimal">
 <button id="go">[ INICIAR INTRUSÃO ]</button>
 <div class="bad" style="margin-top:8px">${msg||""}</div></div>`);
 const go=async()=>{const v=document.getElementById('idin').value.trim();
  try{const t=await post('/api/hack',{id:v});
   if(!t.ok){login("ERRO: ID não encontrado.");return}
   if(t.oscp){corrupt();return}
   intrusion(t,v)}catch(e){login("ERRO de conexão com o servidor.")}};
 document.getElementById('go').onclick=go;
 document.getElementById('idin').onkeydown=e=>{if(e.key==="Enter")go()};
}

function intrusion(t,id){
 const lv=LV[t.dif]??1;
 $(`<h1>ALVO: ${t.cat.toUpperCase()}</h1><div class="warn">Firewall nível ${LVN[lv]} detectado.</div>
 <div class="box" id="game"></div><button id="back">[ ABORTAR ]</button>`);
 document.getElementById('back').onclick=()=>login();
 const win=async()=>{clr();document.getElementById('game').innerHTML='<div>ACESSO CONCEDIDO...</div>';try{const d=await post('/api/access',{id});setTimeout(()=>categoria(d),600)}catch(e){login('ERRO de conexão.')}};
 const lose=m=>{clr();document.getElementById('game').innerHTML=`<div class="bad">${m}</div><button id="rt">[ TENTAR NOVAMENTE ]</button>`;document.getElementById('rt').onclick=()=>intrusion(t,id)};
 [g1,g2,g3,g4][lv](document.getElementById('game'),win,lose);
}

// BAIXA: adivinhar a senha numérica
function g1(el,win,lose){
 const n=1+rnd(50);let left=6;
 el.innerHTML=`<div>Quebre a senha (1–50). Tentativas: <b id="l">${left}</b></div><input id="gv" type="number" inputmode="numeric"><button id="gb">[ ENVIAR ]</button><div id="fb" class="dim"></div>`;
 document.getElementById('gb').onclick=()=>{const v=+document.getElementById('gv').value;if(!v)return;left--;
  document.getElementById('l').textContent=left;
  if(v===n)return win();
  if(left<=0)return lose(`Falhou. A senha era ${n}.`);
  document.getElementById('fb').textContent=v<n?"Muito baixa ▲":"Muito alta ▼"};
}
// MÉDIA: sequência de memória
function g2(el,win,lose){
 const cols=["#3dff7a","#ffcc33","#ff4b4b","#4aa8ff"];const seq=Array.from({length:5},()=>rnd(4));let step=0,busy=true;
 el.innerHTML=`<div id="st">Memorize a sequência...</div><div class="pads">${cols.map((c,i)=>`<button class="pad" data-i="${i}" style="background:${c};color:${c}"></button>`).join("")}</div>`;
 const pads=[...el.querySelectorAll('.pad')];
 const flash=(i,ms)=>{pads[i].classList.add('on');timers.push(setTimeout(()=>pads[i].classList.remove('on'),ms))};
 seq.forEach((x,k)=>timers.push(setTimeout(()=>flash(x,450),700+k*750)));
 timers.push(setTimeout(()=>{busy=false;document.getElementById('st').textContent="Repita a sequência!"},700+seq.length*750));
 pads.forEach(p=>p.onclick=()=>{if(busy)return;const i=+p.dataset.i;flash(i,200);
  if(i!==seq[step]){busy=true;return lose("Sequência incorreta. Intrusão detectada.")}
  if(++step===seq.length)win()});
}
// ALTA: Mastermind de 4 dígitos
function g3(el,win,lose){
 const code=Array.from({length:4},()=>1+rnd(6));let left=8;
 el.innerHTML=`<div>Decifre o código de 4 dígitos (cada um de 1 a 6).<br><span class="dim">● = posição certa | ○ = dígito certo, lugar errado</span></div>
 <input id="gv" maxlength="4" inputmode="numeric" placeholder="1234"><button id="gb">[ ENVIAR ]</button><div>Tentativas: <b id="l">${left}</b></div><div id="log"></div>`;
 document.getElementById('gb').onclick=()=>{const s=document.getElementById('gv').value;if(!/^[1-6]{4}$/.test(s))return;
  const g=s.split('').map(Number);let a=0,c=[...code],q=[];
  g.forEach((d,i)=>{if(d===code[i]){a++}else q.push(d)});
  const rest=code.filter((d,i)=>d!==g[i]);let b=0;q.forEach(d=>{const k=rest.indexOf(d);if(k>-1){b++;rest.splice(k,1)}});
  left--;document.getElementById('l').textContent=left;
  document.getElementById('log').insertAdjacentHTML('afterbegin',`<div>${s} → ${"●".repeat(a)}${"○".repeat(b)||""}</div>`);
  if(a===4)return win();if(left<=0)lose(`Bloqueado. O código era ${code.join('')}.`)};
}
// EXTREMA: digitar códigos contra o relógio
function g4(el,win,lose){
 const hex=()=>Array.from({length:6},()=>"0123456789ABCDEF"[rnd(16)]).join("");
 let r=0;const T=6;
 const next=()=>{clr();const c=hex();let t=T;
  el.innerHTML=`<div>Rodada ${r+1}/5 — digite o código antes que o tempo acabe:</div><div class="warn" style="font-size:26px;letter-spacing:4px;margin:10px 0">${c}</div>
  <input id="gv" maxlength="6" autocomplete="off" autocapitalize="characters"><div>Tempo: <b id="tm">${t}</b>s</div>`;
  const inp=document.getElementById('gv');inp.focus();
  timers.push(setInterval(()=>{t--;document.getElementById('tm').textContent=t;if(t<=0)lose("Tempo esgotado. Rastreamento concluído.")},1000));
  inp.oninput=()=>{const v=inp.value.toUpperCase();if(v.length===6){if(v===c){if(++r===5)win();else next()}else lose("Código incorreto. Sistema travado.")}};
 };next();
}

function stat(k,v){const c=/extrema|muito alta|alta|sem energia/i.test(v)&&k.startsWith("Ameaça")?"bad":"";return `<div class="stat"><span class="dim">${k}</span><span class="${c}">${v}</span></div>`}

function categoria(t){
 $(`<h1>[ ACESSO CONCEDIDO ] ${t.cat.toUpperCase()}</h1>
 <div class="box">${stat("ID",t.id)}${stat("Status de energia",t.en)}${stat("Suprimentos",t.sup)}${stat("Ameaça externa",t.ext)}${stat("Ameaça interna",t.int)}${stat("Dificuldade de abertura",t.dif)}</div>
 <h2>> Locais registrados:</h2>
 ${t.items.map((x,i)=>`<button class="item" data-i="${i}">▸ ${x[0]}</button>`).join("")}
 <br><button id="back">[ DESCONECTAR ]</button>`);
 S.querySelectorAll('.item').forEach(b=>b.onclick=()=>local(t,+b.dataset.i));
 document.getElementById('back').onclick=()=>login();
}
function local(t,i){
 const x=t.items[i];
 $(`<h1>${x[0].toUpperCase()}</h1><div class="dim">${t.cat}</div>
 <div class="box"><h2>História do local</h2><p>${x[1]}</p></div>
 <div class="box">${stat("Energia",t.en)}${stat("Suprimentos",t.sup)}${stat("Ameaça externa",t.ext)}${stat("Ameaça interna",t.int)}</div>
 <button id="v">[ VOLTAR À LISTA ]</button>`);
 document.getElementById('v').onclick=()=>categoria(t);
}

// ===== OSCP: corrupção =====
function corrupt(){
 clr();
 $(`<h1>ALVO: OSCP</h1><div class="box"><div>Organização Sigilosa de Cientistas e Pesquisadores</div><div class="bad">Iniciando intrusão...</div><div class="warn">Firewall nível ???</div></div>`);
 const app=document.getElementById('app'),nodes=[],w=document.createTreeWalker(app,NodeFilter.SHOW_TEXT);
 while(w.nextNode()){if(w.currentNode.nodeValue.trim())nodes.push([w.currentNode,w.currentNode.nodeValue])}
 const ch="█▓▒░#@$%&*?!<>/\\|01XZQW";let p=.05;
 const ov=document.getElementById('ov');
 timers.push(setInterval(()=>{p=Math.min(1,p+.02);
  nodes.forEach(([n,o])=>{n.nodeValue=[...o].map(c=>c===" "?c:Math.random()<p?ch[rnd(ch.length)]:c).join("")});
  document.body.style.transform=`translate(${rnd(5)-2}px,${rnd(5)-2}px)`},90));
 const showCipher=()=>{ov.style.display="flex";ov.textContent="boc sbhfs boeiszs zcqoz";
  timers.push(setTimeout(()=>{ov.style.display="none"},900+rnd(700)))};
 timers.push(setTimeout(showCipher,2500));
 timers.push(setInterval(showCipher,3800));
 timers.push(setTimeout(()=>{const b=document.createElement('button');b.textContent="[ reconectar ]";b.style="position:fixed;bottom:12px;right:12px;opacity:.4;z-index:10";b.onclick=()=>{ov.style.display="none";document.body.style.transform="";login()};document.body.appendChild(b);timers.push(setTimeout(()=>{},0))},20000));
}
login();