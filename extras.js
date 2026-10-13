/* English Quest · extras v15
   1) Repaso espaciado de errores   2) Temas débiles   3) Cuenta atrás + plan del día
   4) Copia de seguridad            5) Escucha y escribe / Repite la frase
   6) Home más limpia               (se carga al final: envuelve las funciones existentes) */
(function(){
"use strict";
const q$=s=>document.querySelector(s);
const pad=n=>String(n).padStart(2,"0");
const ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const plus=n=>{const d=new Date();d.setDate(d.getDate()+n);return ymd(d)};
const enorm=window.EQExam?window.EQExam.enorm:s=>String(s).toLowerCase().replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
const hideFab=()=>{const f=q$(".fab");if(f)f.style.display="none"};
S.xt=S.xt&&typeof S.xt==="object"?S.xt:{};

/* ====================== 1) Errores: repaso espaciado ====================== */
const INTERVALS=[1,3,7,14];
const dueErrors=()=>(S.errorLog||[]).filter(e=>!e.reviewed&&(!e.due||e.due<=day()));
let R=null;

function reviewStart(){
  const q=dueErrors().slice(0,10).map(e=>e.id);
  R={q,i:0,shown:false,ok:0,miss:0};reviewPaint()}
function reviewPaint(){
  nav("learn");hideFab();
  if(!R||R.i>=R.q.length){
    const n=R?R.q.length:0;
    v.innerHTML=`<div class="hr"><div><div class="mini-label">Repaso de errores</div><h2>${n?"¡Sesión terminada!":"Estás al día 🎉"}</h2></div></div>
    <div class="card"><p>${n?`Recordaste <b>${R.ok}</b> de <b>${n}</b>. Los que fallaste volverán mañana; los que acertaste vuelven más espaciados.`:"No tienes errores pendientes para hoy. Practica o haz un simulacro para generar nuevos repasos."}</p>
    <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn" data-v="home">Inicio</button><button class="btn ghost" data-xt="weak">Ver temas débiles</button></div></div>`;
    if(n&&R.ok>0)gain(R.ok*2,true);R=null;return}
  const e=(S.errorLog||[]).find(x=>x.id===R.q[R.i]);
  if(!e){R.i++;return reviewPaint()}
  v.innerHTML=`<div class="hr"><button class="pill-action" data-xt="exitreview">← Salir</button><span class="pill">${R.i+1} / ${R.q.length}</span></div>
  <div class="card"><div class="hr"><span class="pill">${e.level||"Inglés"}</span><span class="m">${e.source||"Práctica"}</span></div>
  <p style="font-size:18px;font-weight:700;margin:10px 0">${e.prompt||e.question||""}</p>
  ${R.shown?`<p style="color:var(--ok);font-weight:700">Respuesta: ${e.answer||""}</p>${e.explanation?`<p class="m">${e.explanation}</p>`:""}
  <p class="m">¿Lo recordabas antes de mirar?</p>
  <div class="row" style="gap:8px"><button class="btn" data-xt="knew">✓ Lo sabía</button><button class="btn ghost" data-xt="missed">✗ Aún no</button></div>`
  :`<p class="m">Piensa la respuesta (o dila en voz alta) y luego revélala.</p><button class="btn" data-xt="reveal">Mostrar respuesta</button>`}</div>`}
function reviewGrade(ok){
  const e=(S.errorLog||[]).find(x=>x.id===R.q[R.i]);
  if(e){
    if(ok){e.box=(e.box||0)+1;R.ok++;
      if(e.box>=INTERVALS.length)e.reviewed=true;else e.due=plus(INTERVALS[e.box])}
    else{e.box=0;e.due=plus(1);R.miss++}
    save()}
  R.i++;R.shown=false;reviewPaint()}

/* ====================== 2) Temas débiles ====================== */
function unitOf(e){
  if(e.unit&&CU.some(u=>u.id===e.unit))return e.unit;
  const p=String(e.prompt||e.question||"");
  const u=CU.find(u=>(u.q||[]).some(q=>q[0]===p||esc(q[0])===p));
  return u?u.id:""}
function weakTopics(){
  const m={};
  (S.errorLog||[]).forEach(e=>{
    const id=unitOf(e);if(!id)return;
    const w=e.reviewed?0.3:1;m[id]=(m[id]||0)+w});
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([id,n])=>({u:CU.find(x=>x.id===id),n:Math.round(n*10)/10})).filter(x=>x.u)}
function weakScreen(){
  nav("learn");hideFab();
  const w=weakTopics().slice(0,8),pend=dueErrors().length;
  v.innerHTML=`<div class="hr"><div><div class="mini-label">Tu plan personal</div><h2>Temas débiles</h2></div><button class="pill-action" data-v="home">Inicio</button></div>
  <p class="m">Basado en los errores de tus lecciones, práctica adaptativa y simulacros. Mientras más veces falles un tema, más arriba aparece.</p>
  ${pend?`<div class="card"><div class="hr"><div><b>${pend} errores para repasar hoy</b><div class="m">Repaso espaciado: ~3 minutos</div></div><button class="btn" data-xt="review">Repasar</button></div></div>`:""}
  ${w.length?w.map((x,i)=>`<div class="card"><div class="hr"><div><span class="pill">${x.u.l}</span> <b>${i+1}. ${esc(x.u.t)}</b><div class="m">${Math.round(x.n)} ${Math.round(x.n)===1?"error":"errores"} relacionados</div></div><button class="btn ghost" data-u="${x.u.id}">Practicar</button></div></div>`).join(""):`<div class="card"><b>Aún no hay datos</b><p class="m">Haz el simulacro o la práctica adaptativa y aquí verás qué temas reforzar.</p><button class="btn" data-g="exam">Ir al simulacro</button></div>`}`}

/* ====================== 3) Cuenta atrás + plan de hoy ====================== */
const daysLeft=()=>{if(!S.xt.date)return null;const a=new Date(S.xt.date+"T00:00:00"),b=new Date(day()+"T00:00:00");return Math.round((a-b)/864e5)};
function nextExamSection(){
  try{const secs=window.EQExam.sets.midterm.secs,done=((S.exam||{}).midterm||{}).secs||{};
    return secs.find(s=>!done[s.id])||null}catch(_){return null}}
function planCard(){
  const dl=daysLeft(),pend=dueErrors().length,weak=weakTopics()[0],ns=nextExamSection();
  let head;
  if(dl===null)head=`<div><div class="mini-label">Tu examen</div><b style="font-size:18px">¿Cuándo es tu parcial?</b></div><span style="font-size:26px">📅</span>`;
  else if(dl<0)head=`<div><div class="mini-label">Tu examen</div><b style="font-size:18px">El examen ya pasó</b></div><span style="font-size:26px">✅</span>`;
  else head=`<div><div class="mini-label">Cuenta atrás</div><b style="font-size:22px">${dl===0?"¡Hoy es el examen!":dl===1?"Falta 1 día":"Faltan "+dl+" días"}</b></div><span style="font-size:26px">🎯</span>`;
  let body="";
  if(dl===null)body=`<div class="row" style="gap:8px;margin-top:10px"><input type="date" id="xt-date" class="exi" style="max-width:190px" min="${day()}"><button class="btn" data-xt="setdate">Guardar</button></div>`;
  else if(dl<0)body=`<button class="btn ghost" data-xt="cleardate" style="margin-top:10px">Quitar fecha</button>`;
  else{
    const items=[];
    if(pend)items.push(`<li><span>🧠 Repasa <b>${pend}</b> ${pend===1?"error":"errores"}</span><button class="btn ghost" data-xt="review">Repasar</button></li>`);
    if(weak)items.push(`<li><span>🎯 Refuerza <b>${esc(weak.u.t)}</b></span><button class="btn ghost" data-u="${weak.u.id}">Practicar</button></li>`);
    if(ns)items.push(`<li><span>🎓 ${dl<=2?"Repasa":"Haz"} la sección <b>${esc("#"+ns.id+" "+(ns.t||""))}</b></span><button class="btn ghost" data-g="exam">Abrir</button></li>`);
    else items.push(`<li><span>🎓 Repite el simulacro completo</span><button class="btn ghost" data-g="exam">Abrir</button></li>`);
    body=`<ul class="xt-plan">${items.join("")}</ul><button class="pill-action" data-xt="cleardate">Cambiar fecha (${S.xt.date})</button>`}
  return `<section class="card xt-card" id="xt-card"><div class="hr">${head}</div>${body}</section>`}

/* ====================== 4) Copia de seguridad ====================== */
function exportData(){
  try{
    const blob=new Blob([JSON.stringify({app:"english-quest",version:15,exported:new Date().toISOString(),data:S},null,1)],{type:"application/json"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`english-quest-backup-${day()}.json`;
    document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);toast("Copia guardada 💾")}
  catch(e){toast("No se pudo exportar")}}
function importData(file){
  const fr=new FileReader();
  fr.onload=()=>{
    try{
      const j=JSON.parse(fr.result),d=j&&j.app==="english-quest"?j.data:j;
      if(!d||typeof d!=="object"||typeof d.xp!=="number"||!LV.includes(d.lvl))throw new Error("bad");
      if(!confirm("Esto reemplazará tu progreso actual por el de la copia ("+d.xp+" XP). ¿Continuar?"))return;
      localStorage.setItem("eq",JSON.stringify(d));location.reload()}
    catch(_){toast("Archivo no válido")}};
  fr.readAsText(file)}
const backupCard=()=>`<div class="card"><div class="hr"><div><b>💾 Copia de seguridad</b><div class="m">Guarda tu progreso en un archivo o pásalo a otro teléfono.</div></div></div>
  <div class="row" style="gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn" data-xt="export">Exportar</button><button class="btn ghost" data-xt="import">Importar</button><input type="file" id="xt-file" accept="application/json,.json" hidden></div></div>`;

/* ====================== 5) Escucha y escribe / Repite ====================== */
let L=null;
function sentencePool(){
  const out=new Set();
  try{Object.values(SENT).flat().forEach(s=>{if(s&&s[0]&&s[1])out.add(s[0].replace("___",s[1]))})}catch(_){}
  CU.forEach(u=>(u.g||[]).forEach(g=>{if(g&&g[0]&&/^[A-Z]/.test(g[0])&&g[0].split(" ").length>=4&&g[0].split(" ").length<=12)out.add(g[0])}));
  return [...out].filter(s=>!/___|\n/.test(s))}
function pick(n){
  const lv=LV.indexOf(S.lvl);const all=sentencePool();
  const a=all.slice().sort(()=>Math.random()-.5).slice(0,n);return a}
function speak(t,slow){
  try{const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=slow?.55:.85;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function diff(target,typed){
  const a=enorm(target).split(" ").filter(Boolean),b=enorm(typed).split(" ").filter(Boolean);
  const dp=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
  for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)dp[i][j]=a[i]===b[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
  const ok=new Set();let i=0,j=0;
  while(i<a.length&&j<b.length){if(a[i]===b[j]){ok.add(i);i++;j++}else if(dp[i+1][j]>=dp[i][j+1])i++;else j++}
  const tw=String(target).replace(/[.,!?;:]/g,"").split(/\s+/).filter(Boolean);
  return {acc:a.length?ok.size/a.length:0,html:tw.map((w,k)=>`<span class="${ok.has(k)?"xt-ok":"xt-bad"}">${esc(w)}</span>`).join(" ")}}
function listenStart(mode){L={mode,q:pick(5),i:0,ok:0,done:false};listenPaint()}
function listenPaint(){
  nav("learn");hideFab();
  if(L.i>=L.q.length){
    const earned=L.ok*3;gain(earned,true);
    v.innerHTML=`<div class="hr"><div><div class="mini-label">${L.mode==="speak"?"Repite la frase":"Escucha y escribe"}</div><h2>¡Ronda terminada!</h2></div></div>
    <div class="card"><div class="assessment-score" style="font-size:44px">${L.ok}/${L.q.length}</div><p class="m">+${earned} XP</p><div class="row" style="gap:8px"><button class="btn" data-g="${L.mode==="speak"?"speak":"listen"}">Otra ronda</button><button class="btn ghost" data-v="games">Juegos</button></div></div>`;L=null;return}
  const s=L.q[L.i];
  const head=`<div class="hr"><button class="pill-action" data-xt="exitlisten">← Salir</button><span class="pill">${L.i+1} / ${L.q.length}</span></div>`;
  if(L.mode==="listen"){
    v.innerHTML=`${head}<div class="card" style="text-align:center"><div class="mini-label">ESCUCHA Y ESCRIBE</div>
    <div class="row" style="gap:8px;justify-content:center;margin:14px 0"><button class="btn" data-xt="play" style="font-size:20px">🔊 Escuchar</button><button class="btn ghost" data-xt="slow">🐢 Lento</button></div>
    <input class="exi" id="xt-in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe lo que escuchas…" ${L.done?"disabled":""}>
    <div id="xt-fb"></div>
    <div class="row" style="gap:8px;justify-content:center;margin-top:12px"><button class="btn" data-xt="lcheck">Comprobar</button></div></div>`;
    setTimeout(()=>speak(s),250)}
  else{
    const sr=window.SpeechRecognition||window.webkitSpeechRecognition;
    v.innerHTML=`${head}<div class="card" style="text-align:center"><div class="mini-label">REPITE LA FRASE</div>
    <p style="font-size:22px;font-weight:700;margin:14px 0">${esc(s)}</p>
    <div class="row" style="gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn ghost" data-xt="play">🔊 Escuchar</button>${sr?`<button class="btn" data-xt="mic">🎤 Hablar</button>`:""}</div>
    <div id="xt-fb" class="m" style="margin-top:12px">${sr?"Pulsa 🎤 y di la frase en voz alta.":"Escucha, repite en voz alta y califícate."}</div>
    <div class="row" style="gap:8px;justify-content:center;margin-top:12px"><button class="btn" data-xt="said1">✓ La dije bien</button><button class="btn ghost" data-xt="said0">Otra vez</button></div></div>`}}
function listenCheck(){
  const s=L.q[L.i],inp=q$("#xt-in");if(!inp||L.done){return}
  const d=diff(s,inp.value),good=d.acc>=.9;
  L.done=true;inp.disabled=true;if(good)L.ok++;
  q$("#xt-fb").innerHTML=`<div class="exf ${good?"okk":"bad"}" style="margin-top:12px"><b>${good?"✓ ¡Muy bien!":"✗ Casi"}</b> <span class="m">${Math.round(d.acc*100)}%</span><p style="font-size:18px;margin:8px 0">${d.html}</p></div><button class="btn" data-xt="lnext" style="margin-top:10px">Siguiente →</button>`;
  const b=q$('[data-xt="lcheck"]');if(b)b.remove()}
function micStart(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return;
  const s=L.q[L.i],fb=q$("#xt-fb");fb.textContent="🎙️ Escuchando…";
  try{const r=new SR();r.lang="en-US";r.maxAlternatives=3;
    r.onresult=ev=>{const alts=[...ev.results[0]].map(x=>x.transcript),best=alts.map(t=>({t,d:diff(s,t)})).sort((a,b)=>b.d.acc-a.d.acc)[0];
      fb.innerHTML=`<div class="exf ${best.d.acc>=.85?"okk":"bad"}"><b>${best.d.acc>=.85?"✓ ¡Se entendió!":"✗ Inténtalo otra vez"}</b> <span class="m">${Math.round(best.d.acc*100)}%</span><p style="margin:8px 0">${best.d.html}</p><p class="m">Te oí: “${esc(best.t)}”</p></div>`};
    r.onerror=()=>{fb.textContent="No pude usar el micrófono. Califícate tú mismo abajo."};
    r.start()}catch(_){fb.textContent="Micrófono no disponible. Califícate tú mismo."}}

/* ====================== Eventos ====================== */
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-xt]");if(!t)return;
  e.preventDefault();e.stopImmediatePropagation();
  const a=t.dataset.xt;
  if(a==="review")reviewStart();
  else if(a==="reveal"){R.shown=true;reviewPaint()}
  else if(a==="knew")reviewGrade(true);
  else if(a==="missed")reviewGrade(false);
  else if(a==="exitreview"){R=null;home()}
  else if(a==="weak")weakScreen();
  else if(a==="setdate"){const d=(q$("#xt-date")||{}).value;if(!d)return toast("Elige una fecha");S.xt.date=d;save();home()}
  else if(a==="cleardate"){S.xt.date="";save();home()}
  else if(a==="export")exportData();
  else if(a==="import"){const f=q$("#xt-file");if(f)f.click()}
  else if(a==="play")speak(L.q[L.i]);
  else if(a==="slow")speak(L.q[L.i],true);
  else if(a==="lcheck")listenCheck();
  else if(a==="lnext"){L.i++;listenPaint()}
  else if(a==="mic")micStart();
  else if(a==="said1"){L.ok++;L.i++;listenPaint()}
  else if(a==="said0"){speak(L.q[L.i])}
  else if(a==="exitlisten"){L=null;games()}
},true);
document.addEventListener("change",e=>{if(e.target&&e.target.id==="xt-file"&&e.target.files[0])importData(e.target.files[0])});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target&&e.target.id==="xt-in"&&L&&!L.done){e.preventDefault();listenCheck()}});

/* ====================== Integración ====================== */
const _start=start;
start=function(g){
  if(g==="listen")return listenStart("listen");
  if(g==="speak")return listenStart("speak");
  return _start(g)};
const _games=games;
games=function(){_games();const g=v.querySelector(".grid");
  if(g)g.insertAdjacentHTML("beforeend",`<button class="game" data-g="listen"><span>🎧</span><b>Escucha y escribe</b><small>Dictado de frases</small></button><button class="game" data-g="speak"><span>🎤</span><b>Repite la frase</b><small>Pronunciación</small></button><button class="game" data-xt="review"><span>🧠</span><b>Repaso de errores</b><small>${dueErrors().length} para hoy</small></button><button class="game" data-xt="weak"><span>🎯</span><b>Temas débiles</b><small>Qué reforzar</small></button>`)};
const _profile=profile;
profile=function(){_profile();const m=v;m.insertAdjacentHTML("beforeend",backupCard())};
const _home=home;
home=function(){
  _home();
  try{
    const goal=v.querySelector(".quest-goal");
    if(goal&&!q$("#xt-card"))goal.insertAdjacentHTML("afterend",planCard());
    else if(!q$("#xt-card")){const c=v.querySelector(".home-col")||v;c.insertAdjacentHTML("afterbegin",planCard())}
    /* Home más limpia: agrupa lo secundario en un desplegable */
    const col=[...v.querySelectorAll(".home-col")].pop();
    if(col&&!q$("details.more-home")){
      const moved=[...v.querySelectorAll(".adaptive-hero,#guided-coach,.card")].filter(el=>
        !el.closest("details")&&el.id!=="xt-card"&&(el.matches(".adaptive-hero,#guided-coach")||/Simulacro Basic English|Guía de estudio/.test(el.textContent)&&el.querySelector("[data-g='exam'],[data-v='guide']")));
      if(moved.length){
        const d=document.createElement("details");d.className="more-home card";d.innerHTML="<summary>Más práctica y recursos</summary>";
        const tip=[...col.querySelectorAll(".quest-note")].find(n=>n.textContent.includes("💡"));
        moved.forEach(el=>d.appendChild(el));
        if(tip)col.insertBefore(d,tip);else col.appendChild(d)}}
  }catch(err){console.warn("home extras",err)}};
})();
