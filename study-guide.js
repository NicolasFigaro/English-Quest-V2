/* English Quest · Guía de estudio (Word) como pantalla de consulta dentro de Gramática. Se carga después de app.js. */
(()=>{
"use strict";
if(typeof v==="undefined"||typeof S==="undefined"||typeof go==="undefined")return;
const T=(h,rows)=>`<div class="gtw"><table class="gt"><thead><tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const P=s=>`<p>${fmt(s)}</p>`;
const UL=a=>`<ul>${a.map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`;
const SEC=[
["1. Present Simple","🗓️",
 P("**Cuándo:** hábitos, rutinas, hechos permanentes y verdades generales. *I work in a bank. She starts work at 8:00. The sun rises in the east.*")+
 P("**La -s:** con I / you / we / they el verbo queda en base; solo **he / she / it** (y sujetos singulares como Sarah o the company) añaden -s / -es. Es un resto histórico del inglés antiguo: se memoriza como regla fija.")+
 T(["Termina en…","Se añade","Ejemplo"],[["la mayoría","-s","work → works, like → likes"],["-ch, -sh, -ss, -x, -o","-es","watch → watches, fix → fixes, go → goes, do → does"],["consonante + y","-ies","study → studies, try → tries"],["vocal + y","-s","play → plays, buy → buys"],["have","has","She has a meeting."]])+
 P("**do / does:** son auxiliares que solo aparecen en negativas y preguntas. El auxiliar carga la -s, por eso el verbo principal vuelve a base.")+
 T(["Tipo","Estructura","Ejemplo"],[["Afirmativa","S + verbo (s/es en he/she/it)","She works here."],["Negativa","S + do/does + not + base","She doesn't work here."],["Pregunta","Do/Does + S + base?","Does she work here?"],["Wh-","Wh- + do/does + S + base?","Where does she work?"]])+
 P("Respuestas cortas: *Yes, she does. / No, she doesn't.* Excepción: **to be** no usa do/does (*She is not late. / Is she late?*).")],
["2. Past Simple","⏪",
 P("**Cuándo:** acciones terminadas en un momento definido: *yesterday, last year, in 2018, two years ago.*")+
 T(["Termina en…","Regla","Ejemplo"],[["la mayoría","+ ed","work → worked"],["e","+ d","like → liked"],["consonante + y","y → ied","study → studied"],["vocal + y","+ ed","play → played"],["consonante-vocal-consonante (tónica)","duplica + ed","stop → stopped, plan → planned"]])+
 P("**Pronunciación de -ed:** /t/ tras sonido sordo (worked), /d/ tras sonoro (played) y /ɪd/ tras t o d (wanted).")+
 T(["Base","Pasado","Base","Pasado"],[["be","was / were","have","had"],["buy","bought","pay","paid"],["write","wrote","send","sent"],["speak","spoke","make","made"],["go","went","do","did"],["get","got","give","gave"],["take","took","see","saw"],["sell","sold","think","thought"],["put","put","read","read (se dice «red»)"],["begin","began","leave","left"],["meet","met","tell","told"],["know","knew","say","said"]])+
 P("**Was / were:** I, he, she, it → was · you, we, they → were. *There was* (singular) / *there were* (plural).")+
 T(["Tipo","Estructura","Ejemplo"],[["Afirmativa","S + verbo en pasado","They launched the store."],["Negativa","S + didn't + base","They didn't launch the store."],["Pregunta","Did + S + base?","Did they launch the store?"],["Wh-","Wh- + did + S + base?","When did they launch it?"]])+
 T(["","Presente","Pasado"],[["Auxiliar","do (I/you/we/they), does (he/she/it)","did (todos)"],["Negativa","don't / doesn't + base","didn't + base"],["Pregunta","Do / Does + S + base","Did + S + base"],["Verbo principal","siempre base","siempre base"]])+
 P("**Regla de oro:** en afirmativa el pasado se marca en el verbo; en negativa y pregunta lo marca *did* y el verbo vuelve a base. «Did you went?» ✗ → «Did you go?» ✓.")],
["3. Used to","⏳",
 P("**used to + verbo base** = hábito o situación del pasado que ya no ocurre. *Managers used to send physical letters.*")+
 T(["Tipo","Estructura","Ejemplo"],[["Afirmativa","S + used to + base","Staff used to count inventory manually."],["Negativa","S + didn't use to + base","Employees didn't use to have laptops."],["Pregunta","Did + S + use to + base?","Did managers use to work on paper?"]])+
 T(["Expresión","Significado","Ejemplo"],[["used to + base","hábito del pasado","I used to live in Bogotá."],["be used to + -ing","estar acostumbrado (ahora)","I am used to working early."],["get used to + -ing","acostumbrarse","I'm getting used to using the new system."]])+
 P("**No uses used to** para hechos puntuales (*Last year, they launched a website*) ni para decir cuántas veces (*I went there twice last week*).")],
["4. El -ing","🔠",
 T(["Termina en…","Regla","Ejemplo"],[["la mayoría","+ ing","work → working"],["e muda","quita la e","make → making, write → writing"],["ie","ie → ying","lie → lying"],["consonante-vocal-consonante (tónica)","duplica","run → running, get → getting"],["w, x, y","no duplica","fix → fixing, play → playing"]])+
 P("**Present Continuous:** am / is / are + verbo-ing (*EcoMart is launching a digital campaign*).")+
 P("**Preferencia + -ing:** like, love, enjoy, hate, dislike, prefer, don't mind, can't stand. Con enjoy y dislike solo -ing; con like, love, hate, prefer también vale *to + verbo*.")+
 P("**Tras preposición:** siempre -ing (*good at managing teams, interested in learning, thank you for coming*).")+
 T(["Después de…","Forma","Ejemplo"],[["do / does / did","base","Did she launch…?"],["used to","base","They used to send…"],["will / can / must / should","base","We will start…"],["like / enjoy / hate / prefer","-ing","I enjoy working."],["preposición","-ing","good at writing"],["am / is / are","-ing","She is working."]])],
["5. Frequency adverbs","📊",
 T(["Adverbio","Aprox.","Ejemplo"],[["always","100 %","Managers always conduct coaching meetings on Mondays."],["usually / normally","80-90 %","Employees usually attend weekly training."],["often / frequently","60-70 %","We often work in teams."],["sometimes","40-50 %","She sometimes works late."],["occasionally","20-30 %","He occasionally travels."],["rarely / seldom","10 %","They rarely use paper."],["hardly ever","5 %","I hardly ever miss a meeting."],["never","0 %","Staff never used to have laptops."]])+
 UL(["Antes del verbo principal: *She usually starts at 8:00.*","Después de to be: *Sarah is usually late* (no «Sarah usually is late»).","Después del primer auxiliar: *I can always call you. She doesn't often work late.*","Sometimes, usually, often y occasionally pueden ir al inicio o al final; **always y never no van al final**."])+
 P("Preguntar: **How often do you check your email?** → Every day / Twice a week / Once a month.")],
["6. Phrasal verbs con GET","🤝",
 P("Un phrasal verb es verbo + partícula con significado nuevo. Pasado de get: **got**.")+
 T(["Phrasal verb","Significado","Ejemplo"],[["get along (with)","llevarse bien","The team members get along very well."],["get started (on / with)","empezar","The board decided to get started with the project."],["get ahead (of)","avanzar, adelantarse","To get ahead of our competitors, we must launch modern advertising."],["get through","terminar algo difícil","We finally got through it."],["get over","recuperarse","It took her a long time to get over the flu."],["get together","reunirse","We should get together for coffee."],["get by","arreglárselas con poco","They managed to get by with very little money."]])+
 T(["Otros útiles","Significado","Ejemplo"],[["get up","levantarse","I get up at 6:00 every day."],["get on / get off","subir / bajar (bus, tren)","She got off the bus at the bank."],["get in / get out (of)","entrar / salir (carro, taxi)","Get in the car, please."],["get back (to)","regresar / responder","I'll get back to you tomorrow."],["get away","escapar / irse lejos","We need to get away this weekend."],["get around","moverse por un lugar","It's easy to get around Cali by bus."],["get into","entrar / ser aceptado","She got into a good university."],["get on with","seguir con algo","Let's get on with the meeting."],["get rid of","deshacerse de","We need to get rid of old paper files."],["get away with","salirse con la suya","He got away with being late."],["get out of","evitar hacer algo","She tried to get out of the meeting."],["get across","hacer entender una idea","It's hard to get the message across."],["get used to + -ing","acostumbrarse","I'm getting used to working online."]])+
 P("**Otros significados:** obtener / recibir (*I got a new laptop*), llegar (*What time do you get to work?*), volverse + adjetivo (*It's getting late*), entender (*I don't get it*).")+
 P("**Truco:** agrúpalos por tema: personas (along, together) · progreso (ahead, started, through) · problemas (over, by, rid of) · movimiento (up, on/off, in/out, back, around).")],
["7. Chuleta de errores comunes","⚠️",
 T(["❌ Error","✅ Correcto","Regla"],[["She don't like it","She doesn't like it","he/she/it → doesn't"],["He doesn't likes it","He doesn't like it","tras doesn't, base"],["Does she works?","Does she work?","tras does, base"],["Did you went?","Did you go?","tras did, base"],["They didn't used it","They didn't use it","tras didn't, base"],["I used to working there","I used to work there","used to + base"],["He enjoy to read","He enjoys reading","enjoy + -ing"],["She usually is late","She is usually late","adverbio después de to be"],["There is many files","There are many files","plural → are / were"],["I get up at the 7","I get up at 7","sin the con horas"]])]
];
const LINKS=[
["Perfect English Grammar","https://www.perfect-english-grammar.com","Explicaciones claras con ejercicios y respuestas."],
["British Council – LearnEnglish","https://learnenglish.britishcouncil.org","Gramática por niveles, juegos, vídeos y lectura."],
["EnglishClub","https://www.englishclub.com","Lecciones, listas de phrasal verbs y quizzes."],
["Agenda Web","https://agendaweb.org","Ejercicios interactivos, ideal para hispanohablantes."],
["Cambridge Grammar","https://dictionary.cambridge.org/grammar","Explicaciones con ejemplos y verbos irregulares."],
["BBC Learning English","https://www.bbc.co.uk/learningenglish","Vídeos y audios cortos; «The English We Speak»."],
["ESL Lab","https://www.esl-lab.com","Audios con preguntas de comprensión por nivel."]];
const PLAN=["Día 1: Presente simple (s/es, do/does) + adverbios de frecuencia.","Día 2: Pasado simple (regulares, irregulares, did).","Día 3: Used to + verbos + -ing.","Día 4: Phrasal verbs con get + flashcards.","Día 5: Repaso general: repite las prácticas sin mirar las respuestas y revisa la chuleta de errores."];

function guide(){
  nav("gram");const f=document.querySelector(".fab");if(f)f.style.display="none";
  S.plan=S.plan||{};
  v.innerHTML=`<div class="hr"><button class="pill-action" data-v="gram">← Gramática</button><span class="pill">Word</span></div>
  <h2>📘 Guía de estudio</h2><p class="m">Basic English · Present Simple, Past Simple, Used to, verbos + -ing, Frequency Adverbs y Phrasal verbs con GET. Basada en las prácticas de clase.</p>
  <div class="card"><b>Practica lo que estudias</b><div class="row" style="gap:8px;margin-top:10px"><button class="btn" data-g="gpractice">Mini-práctica</button><button class="btn ghost" data-g="exam">Simulacro</button></div></div>
  ${SEC.map(([t,e,html])=>`<details class="gd"><summary>${e} ${t}</summary><div class="gdb">${html}</div></details>`).join("")}
  <details class="gd" open><summary>🗓️ Plan de estudio de 5 días</summary><div class="gdb">${PLAN.map((p,i)=>`<label class="exchk"><input type="checkbox" data-plan="${i}"${S.plan[i]?" checked":""}> ${esc(p)}</label>`).join("")}<p class="m">¡Mucho éxito en tu examen! 🍀</p></div></details>
  <details class="gd"><summary>🌐 Páginas web para practicar</summary><div class="gdb"><ul>${LINKS.map(([n,u,d])=>`<li><a href="${u}" target="_blank" rel="noopener noreferrer">${esc(n)}</a> — ${esc(d)}</li>`).join("")}</ul></div></details>`;
  window.scrollTo(0,0)}
document.addEventListener("change",e=>{const c=e.target;if(c&&c.dataset&&c.dataset.plan!==undefined){S.plan=S.plan||{};S.plan[c.dataset.plan]=c.checked;save()}});

const _go=go;go=function(x){if(x==="guide"){guide();return}_go(x)};
const _gram=gram;gram=function(){_gram();const p=v.querySelector("p.m");
  if(p)p.insertAdjacentHTML("afterend",`<div class="card"><div class="hr"><div><b>📘 Guía de estudio · Basic English</b><div class="m">Tablas, reglas, chuleta de errores y plan de 5 días.</div></div></div><div class="row" style="gap:8px;margin-top:10px"><button class="btn" data-v="guide">Abrir guía</button><button class="btn ghost" data-g="gpractice">Mini-práctica</button></div></div>`)};
})();
