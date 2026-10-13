/* English Quest · Simulacro de examen
   - «Simulacro Basic English»: las 80 preguntas del PDF «Basic English — Hard Midterm Simulation» (10 secciones).
   - «Mini-práctica»: los 16 ejercicios con respuestas de la Guía de estudio (Word).
   Se carga DESPUÉS de app.js (usa v, S, esc, fmt, nav, gain, save, day, start, games, home, learn, gram). */
(()=>{
"use strict";
if(typeof v==="undefined"||typeof S==="undefined"||typeof start==="undefined")return;
const q$=s=>document.querySelector(s);

/* ---------- Normalización y corrección ---------- */
const NEG={do:"don't",does:"doesn't",did:"didn't",is:"isn't",are:"aren't",was:"wasn't",were:"weren't",have:"haven't",has:"hasn't",had:"hadn't",would:"wouldn't",could:"couldn't",should:"shouldn't",will:"won't",can:"can't"};
/* minúsculas, sin puntuación, «did not» = «didn't», comillas curvas = rectas */
const enorm=s=>String(s==null?"":s).toLowerCase().replace(/[’‘`´]/g,"'").replace(/\bcannot\b/g,"can't")
  .replace(/\b(do|does|did|is|are|was|were|have|has|had|would|could|should|will|can)\s+not\b/g,(m,a)=>NEG[a])
  .replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
const okOf=b=>Array.isArray(b)?b:b.ok;
const sents=s=>(String(s).match(/[^.!?]+[.!?]*/g)||[]).filter(x=>/[a-z]/i.test(x)).length;

/* ---------- Constructores de preguntas ---------- */
const M=(n,p,b,why,u)=>({n,t:"m",p,b,why,u});                 // huecos (___) dentro del enunciado
const T=(n,p,spec,model,why,u)=>({n,t:"t",p,model,why,u,...spec}); // respuesta escrita: ok:[frases exactas] y/o all:[regex]
const OPT_T=["Present Simple","Past Simple","Present Continuous","Past Continuous","Future (going to)"];

/* Listas de comprobación para producción libre (se detectan automáticamente y puedes corregirlas a mano) */
const PAST=/\b(was|were|had|did|didn't|went|began|grew|bought|sold|made|got|took|wrote|[a-z]{3,}ed)\b/;
const PRES_WORDS=/\b(today|now|nowadays|currently)\b/;
const PRES_VERB=/\b(has|have|uses?|works?|sells?|offers?|employs?|is|are|does|do)\b/;
const GETPV=/\b(get|gets|getting|got)\s+(along|over|together|through|ahead|by|started)\b/;
const FREQ=/\b(always|usually|normally|often|frequently|sometimes|occasionally|rarely|seldom|hardly ever|never|generally)\b/;
const SEQ=/\b(first|then|next|after that|finally)\b/g;
const CHK71=[
 {l:"4–5 oraciones completas",f:x=>{const n=sents(x);return n>=4&&n<=6}},
 {l:"Usa used to",f:x=>/\b(used to|didn't use to)\b/.test(enorm(x))},
 {l:"Usa there was / there were",f:x=>/\bthere (was|were)\b/.test(enorm(x))},
 {l:"Usa presente simple (hoy)",f:x=>PRES_WORDS.test(enorm(x))&&PRES_VERB.test(enorm(x))},
 {l:"Usa un conector (First, Then, Also, However…)",f:x=>/\b(first|then|next|after that|finally|however|also|but|because|so|while|although)\b/.test(enorm(x))},
 {l:"Explica dos diferencias entre el pasado y hoy",f:x=>{const e=enorm(x);return /\b(used to|there (was|were)|didn't)\b/.test(e)&&PRES_WORDS.test(e)&&sents(x)>=4}}
];
const CHK80=[
 {l:"8–10 oraciones",f:x=>{const n=sents(x);return n>=8&&n<=11}},
 {l:"Usa used to",f:x=>/\b(used to|didn't use to)\b/.test(enorm(x))},
 {l:"Usa there was / there were",f:x=>/\bthere (was|were)\b/.test(enorm(x))},
 {l:"Usa pasado simple",f:x=>PAST.test(enorm(x).replace(/\bused to\b/g,""))},
 {l:"Usa presente simple",f:x=>PRES_WORDS.test(enorm(x))&&PRES_VERB.test(enorm(x))},
 {l:"Usa presente continuo (is / are + -ing)",f:x=>/\b(am|is|are)\s+[a-z]+ing\b/.test(enorm(x))},
 {l:"Usa be going to",f:x=>/\b(am|is|are)\s+going to\b/.test(enorm(x))},
 {l:"Usa un phrasal verb con GET",f:x=>GETPV.test(enorm(x))},
 {l:"Usa un adverbio de frecuencia",f:x=>FREQ.test(enorm(x))},
 {l:"Usa dos conectores de secuencia (First, Then, Next…)",f:x=>(enorm(x).match(SEQ)||[]).length>=2}
];

/* ---------- Contenido: simulacro del PDF ---------- */
const MID=[
{id:1,t:"Company case: past, present & future",
 read:"NovaLink Solutions is a growing technology company. Ten years ago, there was only one office and there were six employees. Staff used to work with paper files and managers used to send printed letters. Employees did not have smartphones, and there wasn't an online customer-service system. Today, the company has three offices. Employees usually attend training sessions twice a month, and managers always hold a meeting on Monday mornings. At the moment, the IT department is developing a new customer platform. Several employees are working from home this week. Next year, the company is going to open another office and launch a mobile application. Last Friday, while the developers were testing the platform, the manager was talking to an important client when the system stopped working.",
 items:[
 T(1,"How many offices and employees were there ten years ago?",{all:[/\b(one|1) office/,/\b(six|6)\b/]},"There was one office and there were six employees.","*Ten years ago* → pasado: **there was** (singular) y **there were** (plural).","a2-17"),
 T(2,"Write TWO things the company used to do in the past.",{all:[/(paper|files|documents)/,/(letter|print)/]},"Staff used to work with paper files, and managers used to send printed letters.","**used to + base** habla de hábitos del pasado que ya no existen.","a2-18"),
 T(3,"What is the IT department doing at the moment?",{all:[/developing/,/platform/]},"It is developing a new customer platform.","*At the moment* → **presente continuo** (is developing).","a2-2"),
 T(4,"What are several employees doing this week?",{all:[/working (from|at) home/]},"They are working from home.","*This week* → **presente continuo** (are working).","a2-2"),
 T(5,"What is the company going to do next year? Write TWO actions.",{all:[/open/,/(office|branch)/,/launch/,/(app|application)/]},"It is going to open another office and launch a mobile application.","*Next year* → plan futuro: **be going to + verbo base**.","a2-9"),
 M(6,"Complete: While the developers ___ (test) the platform, the manager ___ (talk) to a client.",[["were testing"],["was talking"]],"Dos acciones en progreso a la vez en el pasado → **pasado continuo** (were testing / was talking).","a2-12"),
 M(7,"Complete: The system ___ (stop) working while the manager was talking to the client.",[["stopped"]],"La acción corta que interrumpe va en **pasado simple**: stopped.","a2-12")
 ]},
{id:2,t:"Verb form audit (no options)",
 ins:"Escribe el verbo entre paréntesis en la forma correcta: presente simple, pasado simple, presente continuo, pasado continuo, futuro con going to o used to.",
 items:[
 M(8,"Every Monday, the CEO ___ (meet) the department leaders.",[["meets"]],"*Every Monday* = hábito → **presente simple**; the CEO es 3.ª persona → **meets**.","a1-14"),
 M(9,"Look! The marketing team ___ (prepare) a presentation right now.",[["is preparing","'s preparing"]],"*Look!* y *right now* → **presente continuo**: is preparing.","a2-2"),
 M(10,"Yesterday at 6 p.m., we ___ (have) a meeting.",[["were having"]],"*Yesterday at 6 p.m.* es un momento exacto del pasado → **pasado continuo**: were having.","a2-12"),
 M(11,"While I ___ (drive) to the office yesterday, I saw an accident.",[["was driving"]],"*While* + acción en progreso en el pasado → **was driving**.","a2-12"),
 M(12,"The company ___ (launch) a new website last month.",[["launched"]],"*Last month* → **pasado simple**: launched.","a2-16"),
 M(13,"They ___ (not / use) social media five years ago.",[["didn't use"]],"*Five years ago* → pasado; negativa = **didn't + base** (didn't use).","a2-15"),
 M(14,"She ___ (work) from home every Friday.",[["works"]],"*Every Friday* → presente simple; she → **works**.","a1-14"),
 M(15,"This week, the employees ___ (receive) extra training.",[["are receiving"]],"*This week* → acción temporal → **presente continuo**: are receiving.","a2-2"),
 M(16,"Next month, the company ___ (open) a new branch.",[["is going to open"]],"*Next month* → plan futuro: **is going to open**.","a2-9"),
 M(17,"When the director called, we ___ (discuss) the problem.",[["were discussing"]],"Acción en progreso interrumpida (*when the director called*) → **were discussing**.","a2-12"),
 M(18,"He ___ (not / like) working late, but now he accepts it when necessary.",[["doesn't like"]],"He → presente simple negativo: **doesn't like**.","a2-15"),
 M(19,"___ your manager usually ___ (check) the reports?",[["does"],["check"]],"Pregunta en presente con *usually*: **Does** + sujeto + verbo base (check).","a2-15"),
 M(20,"___ they ___ (use) to have a smaller office?",[["did"],["use"]],"Pregunta con *used to*: **Did** + sujeto + **use to** (sin d).","a2-18"),
 M(21,"What ___ you ___ (do) right now?",[["are"],["doing"]],"*Right now* → presente continuo: What **are** you **doing**?","a2-2"),
 M(22,"What ___ you ___ (do) yesterday at 8 p.m.?",[["were"],["doing"]],"*Yesterday at 8 p.m.* → pasado continuo: What **were** you **doing**?","a2-12")
 ]},
{id:3,t:"Error correction: corporate report",
 ins:"Cada oración tiene un error principal de gramática. Reescribe la oración COMPLETA.",
 items:[
 T(23,"In 2018, there is only one office and five employees.",{ok:["In 2018, there was only one office and there were five employees.","In 2018, there was only one office and five employees."]},"In 2018, there was only one office and there were five employees.","Pasado (*In 2018*) → there **was** (singular) / there **were** (plural).","a2-17"),
 T(24,"The company used to working with paper documents.",{ok:["The company used to work with paper documents."]},"The company used to work with paper documents.","**used to + verbo base**, nunca -ing.","a2-18"),
 T(25,"The sales team doesn't likes attending long meetings.",{ok:["The sales team doesn't like attending long meetings."]},"The sales team doesn't like attending long meetings.","Tras **doesn't**, el verbo va en base (like).","a2-15"),
 T(26,"Did the company launched its website last year?",{ok:["Did the company launch its website last year?"]},"Did the company launch its website last year?","Tras **did**, el verbo va en base (launch).","a2-15"),
 T(27,"Sarah usually is arriving at the office at 8:00.",{ok:["Sarah usually arrives at the office at 8:00.","Sarah usually arrives at the office at 8."]},"Sarah usually arrives at the office at 8:00.","Rutina (*usually*) → presente simple: arrives. El adverbio va antes del verbo principal.","a2-20"),
 T(28,"Look! The manager talk to a customer right now.",{ok:["Look! The manager is talking to a customer right now.","The manager is talking to a customer right now."]},"Look! The manager is talking to a customer right now.","*Look!* y *right now* → presente continuo: **is talking**.","a2-2"),
 T(29,"Yesterday at noon, the employees are having lunch.",{ok:["Yesterday at noon, the employees were having lunch."]},"Yesterday at noon, the employees were having lunch.","*Yesterday at noon* → pasado continuo: **were having**.","a2-12"),
 T(30,"There were a new computer system in the office.",{ok:["There was a new computer system in the office."]},"There was a new computer system in the office.","*A new computer system* es singular → **There was**.","a2-17"),
 T(31,"The employees don't have any information about the project yesterday.",{ok:["The employees didn't have any information about the project yesterday."]},"The employees didn't have any information about the project yesterday.","*Yesterday* → pasado: **didn't have**.","a2-15"),
 T(32,"She didn't used to work remotely.",{ok:["She didn't use to work remotely."]},"She didn't use to work remotely.","Tras **didn't** la d desaparece: **didn't use to**.","a2-18")
 ]},
{id:4,t:"GET phrasal verbs in context",
 ins:"Usa y conjuga según haga falta: get along (with), get over, get together, get through, get ahead, get by, get started.",
 items:[
 T(33,"Maria and her new coworkers ______ very well.",{ok:["get along","got along"]},"get along (with)","*Llevarse bien* → **get along**.","a2-22"),
 T(34,"After the flu, Daniel needed several days to ______ it.",{ok:["get over"]},"get over","*Recuperarse de una enfermedad* → **get over**.","a2-23"),
 T(35,"We don't have much money this month, but we can ______ until payday.",{ok:["get by"]},"get by","*Arreglárselas con poco* → **get by**.","a2-23"),
 T(36,"The project was extremely difficult, but the team finally ______ it.",{ok:["got through"]},"got through","*Superar algo difícil* (pasado) → **got through**.","a2-23"),
 T(37,"If you want to ______ in your career, develop new skills.",{ok:["get ahead"]},"get ahead","*Avanzar, tener éxito* → **get ahead**.","a2-22"),
 T(38,"Let's ______ after class and discuss the presentation.",{ok:["get together"]},"get together","*Reunirse* → **get together**.","a2-23"),
 T(39,"We have been waiting for twenty minutes. It's time to ______!",{ok:["get started"]},"get started","*Empezar* → **get started**.","a2-22"),
 T(40,"I don't ______ my new supervisor.",{ok:["get along with"]},"get along with","*Llevarse bien con alguien* → **get along with**.","a2-22"),
 T(41,"The company had several serious problems, but it ______ them and continued operating.",{ok:["got through"]},"got through","*Superar* problemas serios (pasado) → **got through**.","a2-23"),
 T(42,"She was disappointed after the interview, but she eventually ______ it.",{ok:["got over"]},"got over","*Recuperarse de una decepción* (pasado) → **got over**.","a2-23")
 ]},
{id:5,t:"To be, possessives, there is/are & quantifiers",
 items:[
 M(43,"That laptop belongs to Carlos. It is ___ laptop. (his / him)",[{ok:["his"],o:["his","him"]}],"Antes del sustantivo → adjetivo posesivo **his**.","a2-24"),
 M(44,"This is our office. The office is ___. (our / ours)",[{ok:["ours"],o:["our","ours"]}],"Sin sustantivo → pronombre posesivo **ours**.","a2-24"),
 M(45,"Is this notebook ___? (your / yours)",[{ok:["yours"],o:["your","yours"]}],"Sin sustantivo → **yours**.","a2-24"),
 M(46,"Last year the employees ___ very stressed, but today they ___ more confident. (was / were / is / are)",[{ok:["were"],o:["was","were","is","are"]},{ok:["are"],o:["was","were","is","are"]}],"*Last year* → were; *today* → are (plural).","a2-17"),
 M(47,"___ three new computers in the meeting room.",[["there are"]],"*Three new computers* es plural → **There are**.","a2-6"),
 M(48,"___ any coffee left in the kitchen? (question)",[["is there"]],"Pregunta con *coffee* (incontable): **Is there** any coffee…?","a2-6"),
 M(49,"There ___ not enough information about the new policy yesterday.",[["was"]],"*Yesterday* → pasado; *information* es incontable (singular) → **was**.","a2-17"),
 M(50,"We need ___ new equipment for the office. (a / an / some / any)",[{ok:["some"],o:["a","an","some","any"]}],"*Equipment* es incontable → **some**.","a2-25"),
 M(51,"Did you receive ___ email from the manager? (a / an / some / any)",[{ok:["an"],o:["a","an","some","any"]}],"*Email* empieza con sonido de vocal → **an**.","a2-25"),
 M(52,"How ___ employees work in this department? (much / many)",[{ok:["many"],o:["much","many"]}],"*Employees* es contable plural → **many**.","a2-25"),
 M(53,"We don't have ___ time before the meeting. (much / many)",[{ok:["much"],o:["much","many"]}],"*Time* es incontable → **much**.","a2-25"),
 {n:54,t:"c",p:"Classify C (countable) or U (uncountable).",w:[["advice","U"],["chair","C"],["information","U"],["ingredient","C"],["luggage","U"],["laptop","C"],["water","U"],["employee","C"]],
  why:"Incontables: **advice, information, luggage, water**. Contables: **chair, ingredient, laptop, employee**.",u:"a2-25"}
 ]},
{id:6,t:"-ing, adverbs of manner, frequency & prepositions",
 items:[
 M(55,"The employees enjoy ___ (work) together on Fridays.",[["working"]],"**enjoy** + verbo en **-ing**: working.","a2-19"),
 M(56,"She hates ___ (arrive) late to meetings.",[["arriving","to arrive"]],"**hate** + **-ing** (también vale *to arrive*).","a2-19"),
 T(57,"Rewrite using the adverb in parentheses: The team completed the project. (efficient)",{ok:["The team completed the project efficiently.","The team efficiently completed the project."]},"The team completed the project efficiently.","adjetivo + -ly → **efficiently** (modifica al verbo).","a2-21"),
 T(58,"Rewrite using the adverb in parentheses: The manager explained the procedure. (clear)",{ok:["The manager explained the procedure clearly.","The manager clearly explained the procedure."]},"The manager explained the procedure clearly.","clear → **clearly**.","a2-21"),
 T(59,"Put the frequency adverb naturally: The CEO checks the reports. (usually)",{ok:["The CEO usually checks the reports.","Usually the CEO checks the reports.","Usually, the CEO checks the reports.","The CEO checks the reports usually."]},"The CEO usually checks the reports.","Con un verbo principal, el adverbio va **antes**: *usually checks*.","a2-20"),
 T(60,"Put the frequency adverb naturally: They are late for meetings. (never)",{ok:["They are never late for meetings."]},"They are never late for meetings.","Con **to be**, el adverbio va **después**: *are never late*.","a2-20"),
 M(61,"The bank is ___ the supermarket. (next to)",[["next to"]],"*Next to* = al lado de.","a2-4"),
 M(62,"The café is ___ the bank and the pharmacy. (between)",[["between"]],"*Between* = entre (dos lugares).","a2-4"),
 T(63,"Correct: She always is working from home on Fridays.",{ok:["She is always working from home on Fridays.","She always works from home on Fridays."]},"She is always working from home on Fridays. (o, si es rutina: She always works from home on Fridays.)","Con **to be** el adverbio va después (*is always working*); para una rutina, presente simple (*always works*).","a2-20"),
 M(64,"They prefer ___ (start) the week with clear goals.",[["starting","to start"]],"**prefer** + **-ing** o **to + verbo**.","a2-19")
 ]},
{id:7,t:"Sequence connectors & procedure",
 ins:"Escribe un plan de lanzamiento lógico de cinco pasos usando TODOS los conectores exactamente una vez: First, Then, Next, After that, Finally. Usa oraciones completas. Acciones: train employees • launch advertisements • test the website • present the product • evaluate customer feedback.",
 items:[
 {n:"65–69",t:"w",p:"Escribe una oración por línea.",
  model:"First, train employees. Then, test the website. Next, launch advertisements. After that, present the product. Finally, evaluate customer feedback.",
  why:"Cada línea debe empezar con un conector distinto (**First, Then, Next, After that, Finally**) y cubrir una acción distinta. Otros órdenes lógicos también valen.",u:"a2-26"}
 ]},
{id:8,t:"Integrated timeline",
 ins:"Completa el párrafo con las formas correctas. Se mezclan varios temas de gramática.",
 items:[
 M(70,"Five years ago, BrightMarket ___ (be) a small company. There ___ (be) only one store, and the employees ___ (use) paper forms. They ___ (not / have) an online store. Today, the company ___ (have) four stores and employees usually ___ (use) digital tools. At the moment, the marketing department ___ (work) on a new campaign, while the IT team ___ (develop) an app. Last Tuesday, while the developers ___ (test) the app, the internet connection ___ (stop) working. Next year, BrightMarket ___ (be going to / open) another store. The managers want to ___ (get ahead) of their competitors, so they are planning to ___ (get started) with the campaign soon.",
  [["was"],["was"],["used to use","used"],["didn't have"],["has"],["use"],["is working"],["is developing"],["were testing"],["stopped"],["is going to open"],["get ahead"],["get started"]],
  "Cada hueco depende de la expresión de tiempo: *Five years ago* → was / was / used to use / didn't have · *Today* → has / use · *At the moment* → is working / is developing · *Last Tuesday, while…* → were testing / stopped · *Next year* → is going to open · get ahead / get started.","a2-27"),
 {n:71,t:"p",p:"In 4–5 complete sentences, explain TWO differences between BrightMarket in the past and today. Use at least one used to, one there was/were, one Simple Present, and one connector.",
  checks:CHK71,rows:7,
  model:"Five years ago, BrightMarket was a small company and there was only one store. The employees used to use paper forms. Today, the company has four stores and the employees usually use digital tools. However, BrightMarket didn't have an online store in the past. Now it is developing an app.",
  why:"Usa estructuras distintas para cada diferencia: **there was / used to** para el pasado y **presente simple** para hoy, unidas con un conector.",u:"a2-18"}
 ]},
{id:9,t:"Reading comprehension",
 read:"GreenCore started as a small family business. In 2016, there were only four employees and there was no website. The employees used to record sales in notebooks and usually met in the same small office. They didn't use social media because they didn't think it was necessary. Today, GreenCore has two branches and more than thirty employees. The company usually posts updates online, and its marketing team is currently creating a new campaign. Yesterday at 4 p.m., the team was discussing the campaign when the director arrived. Next year, GreenCore is going to launch an online store. The director believes the company can get ahead of its competitors if the team works efficiently. The employees generally get along with one another, although they sometimes disagree about advertising strategies.",
 items:[
 T(72,"How many employees were there in 2016?",{all:[/\b(four|4)\b/]},"Four (there were four employees).","Está en el texto: *In 2016, there were only four employees*.","a2-17"),
 T(73,"Write one thing the employees used to do.",{any:[/notebooks/,/record(ed)? sales/,/(meet|met|meeting).*office/,/same (small )?office/]},"They used to record sales in notebooks (o: meet in the same small office).","*The employees used to record sales in notebooks and usually met in the same small office.*","a2-18"),
 T(74,"What is the marketing team doing currently?",{all:[/creating/,/campaign/]},"It is creating a new campaign.","*Currently* → presente continuo: is creating.","a2-2"),
 T(75,"What was happening at 4 p.m. yesterday?",{all:[/discuss/,/campaign/]},"The team was discussing the campaign.","*Yesterday at 4 p.m.* → pasado continuo: was discussing.","a2-12"),
 T(76,"What is GreenCore going to launch next year?",{all:[/online store/]},"An online store.","*Next year* → going to: is going to launch an online store.","a2-9"),
 T(77,"Why can the company get ahead?",{all:[/efficient/]},"Because the team works efficiently.","*…if the team works efficiently*.","a2-22"),
 T(78,"Copy one sentence from the text showing a good relationship between employees.",{all:[/generally get along with one another/]},"The employees generally get along with one another, although they sometimes disagree about advertising strategies.","**get along with** = llevarse bien con alguien.","a2-22"),
 M(79,"Identify the tense: a) has two branches ___  b) was discussing ___  c) is currently creating ___  d) is going to launch ___",
  [{ok:["Present Simple"],o:OPT_T},{ok:["Past Continuous"],o:OPT_T},{ok:["Present Continuous"],o:OPT_T},{ok:["Future (going to)"],o:OPT_T}],
  "has → presente simple · was discussing → pasado continuo · is creating → presente continuo · is going to launch → futuro con going to.","a2-27")
 ]},
{id:10,t:"Final production task",
 items:[
 {n:80,t:"p",p:"Write 8–10 sentences about a company that changed from the past to the present. You MUST include: used to; there was/were; Simple Past; Simple Present; Present Continuous; future with going to; one GET phrasal verb; one frequency adverb; and two sequence connectors.",
  checks:CHK80,rows:12,
  model:"Ten years ago, Delta Foods was a small family company. There were only three employees, and they used to keep all the orders in paper notebooks. First, the owner took the orders by phone. Then, she wrote them by hand. Today, the company has two factories and more than fifty employees. The staff usually uses a mobile app to record every order. At the moment, the IT team is building a new online store. Next year, the company is going to open a third factory. The managers always get along with the workers, so everybody is excited about the future.",
  why:"Revisa que cada estructura pedida aparezca al menos una vez; no importa el tema de la empresa.",u:"a2-27"}
 ]}
];

/* ---------- Contenido: mini-práctica de la guía (Word, sección 7) ---------- */
const GP=[{id:"g",t:"Mini-práctica con respuestas",
 ins:"Intenta resolver cada ejercicio antes de corregir. Escribe solo lo que falta.",
 items:[
 {...M(1,"My sister ___ (work) in a hospital.",[["works"]],"3.ª persona singular → **works**.","a1-14"),h:"A. Present Simple"},
 M(2,"They ___ (not / like) long meetings.",[["don't like"]],"They → **don't + base**.","a2-15"),
 M(3,"___ he ___ (live) near here?",[["does"],["live"]],"Pregunta: **Does** + sujeto + base.","a2-15"),
 M(4,"She ___ (study) every night.",[["studies"]],"Consonante + y → **-ies**.","a1-14"),
 {...M(5,"We ___ (not / buy) a new computer last year.",[["didn't buy"]],"*Last year* → **didn't + base**.","a2-15"),h:"B. Past Simple y did"},
 M(6,"___ you ___ (send) the report yesterday?",[["did"],["send"]],"**Did** + sujeto + base.","a2-15"),
 M(7,"He ___ (write) three emails this morning.",[["wrote"]],"write → **wrote** (irregular).","a2-17"),
 M(8,"When ___ the company ___ (launch) its website?",[["did"],["launch"]],"Wh- + **did** + sujeto + base.","a2-15"),
 {...M(9,"People ___ (use to / send) letters in the past. (ahora ya no lo hacen)",[["used to send"]],"Hábito que ya no existe → **used to send**.","a2-18"),h:"C. Used to"},
 M(10,"___ you ___ (use to) work on paper?",[["did"],["use to"]],"**Did** + sujeto + **use to** (sin d).","a2-18"),
 {...M(11,"Managers enjoy ___ (give) feedback.",[["giving"]],"**enjoy** + **-ing**.","a2-19"),h:"D. Verbos + -ing"},
 M(12,"She is good at ___ (plan) projects.",[["planning"]],"Preposición + **-ing** (duplica la n).","a2-19"),
 {...T(13,"Ordena: is / always / late / he.",{ok:["He is always late."]},"He is always late.","Después de **to be**: is always late.","a2-20"),h:"E. Frequency adverbs"},
 T(14,"Ordena: works / she / on weekends / sometimes.",{ok:["She sometimes works on weekends.","Sometimes she works on weekends.","She works on weekends sometimes."]},"She sometimes works on weekends. / Sometimes she works on weekends.","*Sometimes* puede ir antes del verbo, al inicio o al final.","a2-20"),
 {...M(15,"We need to ___ (empezar) the project today.",[["get started on","get started with","get started"]],"**get started (on)** = empezar.","a2-22"),h:"F. Get"},
 M(16,"I ___ (llevarse bien) my coworkers.",[["get along with"]],"**get along with** = llevarse bien con.","a2-22")
 ]}];

const SETS={
 midterm:{title:"Simulacro Basic English",short:"Basic English",secs:MID,
  desc:"Basado en el «Hard Midterm Simulation»: 80 preguntas en 10 secciones sobre pasado, presente y futuro, used to, GET phrasal verbs, posesivos, cuantificadores, -ing, adverbios y conectores, con contextos de empresa. Tiempo sugerido: 75–90 minutos."},
 guide:{title:"Mini-práctica de la guía",short:"Mini-práctica",secs:GP,
  desc:"Los 16 ejercicios de la Guía de estudio: presente simple, pasado y did, used to, verbos + -ing, adverbios de frecuencia y phrasal verbs con GET."}
};
/* Asigna claves únicas a cada pregunta y calcula los puntos totales */
let CNT=0;
Object.entries(SETS).forEach(([id,s])=>{s.id=id;s.secs.forEach(sec=>sec.items.forEach(it=>{it.k=id+"-"+(CNT++)}))});

/* ---------- Estado ---------- */
let X=null;
const ex=()=>{S.exam=S.exam||{};S.exam.draft=S.exam.draft||{};S.exam.xp=S.exam.xp||{};return S.exam};
const setSt=id=>{const e=ex();e[id]=e[id]||{best:0,last:null,secs:{}};e[id].secs=e[id].secs||{};return e[id]};
const pts=it=>it.t==="m"?it.b.length:it.t==="c"?it.w.length:it.t==="w"?5:it.t==="p"?it.checks.length:1;
const eff=r=>r.kind==="p"?r.man.filter(Boolean).length:(r.ovr?r.t:r.e);
const modelText=it=>{
  if(it.model)return it.model;
  if(it.t==="m"){const a=it.b.map(b=>okOf(b)[0]);return a.length>2?a.map((x,i)=>(i+1)+") "+x).join(" · "):a.join(" · ")}
  if(it.t==="c")return it.w.map(([w,c])=>w+" "+c).join(" · ");
  return ""};
const pct=(e,t)=>t?Math.round(e/t*100):0;
const label=p=>p>=80?"🏆 Excelente":p>=60?"👏 Aprobado":"💪 A reforzar";

/* ---------- Dibujo de preguntas ---------- */
const draftOf=(k,i)=>String((ex().draft||{})[k+":"+i]||"");
function blankHTML(it,b,i){
  const k=it.k,val=draftOf(k,i),lab=`aria-label="Respuesta ${i+1} de la pregunta ${it.n}"`;
  if(!Array.isArray(b)&&b.o)return `<select class="exi" data-exk="${k}" data-exi="${i}" ${lab}><option value="">—</option>${b.o.map(o=>`<option value="${esc(o)}"${o===val?" selected":""}>${esc(o)}</option>`).join("")}</select>`;
  const len=Math.max(6,...okOf(b).map(x=>x.length))+2;
  return `<input class="exi" data-exk="${k}" data-exi="${i}" size="${Math.min(len,26)}" value="${esc(val)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ${lab}>`}
function itemHTML(it){
  const k=it.k;let body="";
  if(it.t==="m"){let i=0;body=`<p class="exp">${esc(it.p).replace(/_{3,}/g,()=>{const b=it.b[i],h=blankHTML(it,b,i);i++;return h})}</p>`}
  else if(it.t==="t"){body=`<p class="exp">${esc(it.p)}</p><input class="exi wide" data-exk="${k}" data-exi="0" value="${esc(draftOf(k,0))}" autocomplete="off" autocapitalize="sentences" spellcheck="false" aria-label="Respuesta a la pregunta ${it.n}">`}
  else if(it.t==="c"){body=`<p class="exp">${esc(it.p)}</p><div class="excl">${it.w.map(([w],i)=>`<label>${esc(w)} <select class="exi" data-exk="${k}" data-exi="${i}" aria-label="${esc(w)}"><option value="">—</option><option value="C"${draftOf(k,i)==="C"?" selected":""}>C</option><option value="U"${draftOf(k,i)==="U"?" selected":""}>U</option></select></label>`).join("")}</div>`}
  else if(it.t==="w"){body=`<p class="exp">${esc(it.p)}</p>`+[0,1,2,3,4].map(i=>`<input class="exi wide" data-exk="${k}" data-exi="${i}" value="${esc(draftOf(k,i))}" placeholder="${65+i}." autocomplete="off" spellcheck="false" aria-label="Oración ${i+1}">`).join("")}
  else if(it.t==="p"){body=`<p class="exp">${esc(it.p)}</p><textarea class="exi wide" rows="${it.rows||6}" data-exk="${k}" data-exi="0" autocomplete="off" spellcheck="false" aria-label="Tu texto">${esc(draftOf(k,0))}</textarea>`}
  return `${it.h?`<h3 class="exh">${esc(it.h)}</h3>`:""}<div class="card exitem" data-it="${k}"><div class="exn">${esc(String(it.n))}</div><div class="exb">${body}<div class="exfb" id="fb-${k}"></div></div></div>`}

function secHTML(){
  const S0=SETS[X.set],sec=S0.secs[X.i],n=S0.secs.length;
  return `<div class="hr"><button class="pill-action" data-ex="exit">← Salir</button><span class="pill">${X.full&&n>1?`Sección ${X.i+1}/${n}`:"Práctica"}</span>${X.full&&X.t0?`<span class="pill" id="ex-timer">⏱ 00:00</span>`:""}</div>
  <div class="mini-label" style="margin-top:14px">${esc(S0.title)}</div><h2 style="font-size:26px;margin-top:4px">${n>1?`${sec.id}. `:""}${esc(sec.t)}</h2>
  ${sec.ins?`<p class="m">${esc(sec.ins)}</p>`:""}${sec.read?`<div class="card exread"><div class="mini-label">Read</div><p>${esc(sec.read)}</p></div>`:""}
  <div id="ex-score"></div>${sec.items.map(itemHTML).join("")}
  <button class="btn" id="ex-check" data-ex="check">Corregir sección</button>
  <p class="m" style="text-align:center;margin-top:10px">Se aceptan contracciones (didn't = did not) y no importan las mayúsculas ni la puntuación.</p>`}

function renderSection(){
  clearInterval(X&&X.iv);
  v.innerHTML=secHTML();window.scrollTo(0,0);
  if(X.full&&X.t0){X.iv=setInterval(tick,1000);tick()}}
function tick(){const el=q$("#ex-timer");if(!el||!X||!X.t0){clearInterval(X&&X.iv);return}
  const s=Math.floor((Date.now()-X.t0)/1000);el.textContent="⏱ "+String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}

/* ---------- Corrección ---------- */
const readAns=it=>[...document.querySelectorAll(`[data-exk="${it.k}"]`)].sort((a,b)=>a.dataset.exi-b.dataset.exi).map(e=>e.value);
function gradeItem(it,ans){
  if(it.t==="m"){const parts=it.b.map((b,i)=>okOf(b).map(enorm).includes(enorm(ans[i])));return {kind:"m",e:parts.filter(Boolean).length,t:parts.length,parts}}
  if(it.t==="t"){const a=enorm(ans[0]);let ok=false;
    if(it.ok)ok=it.ok.map(enorm).includes(a);
    if(!ok&&(it.all||it.any))ok=!!a&&(!it.all||it.all.every(r=>r.test(a)))&&(!it.any||it.any.some(r=>r.test(a)));
    return {kind:"t",e:ok?1:0,t:1,parts:[ok]}}
  if(it.t==="c"){const parts=it.w.map(([,c],i)=>ans[i]===c);return {kind:"c",e:parts.filter(Boolean).length,t:parts.length,parts}}
  if(it.t==="w"){
    const CON=["first","then","next","after that","finally"],ACT=[/\btrain/,/advertis|\bads?\b/,/\btest/,/\bpresent/,/evaluat|feedback/],uc=new Set(),ua=new Set();
    const parts=ans.map(line=>{const s=enorm(line),c=CON.find(c=>s===c||s.startsWith(c+" ")),acts=ACT.map((r,i)=>r.test(s)?i:-1).filter(i=>i>=0);
      const ok=!!c&&!uc.has(c)&&acts.some(i=>!ua.has(i))&&s.split(" ").length>=3;
      if(c)uc.add(c);acts.forEach(i=>ua.add(i));return ok});
    return {kind:"w",e:parts.filter(Boolean).length,t:5,parts}}
  /* producción libre */
  const txt=ans[0]||"",auto=it.checks.map(c=>{try{return !!c.f(txt)}catch(_){return false}});
  return {kind:"p",e:auto.filter(Boolean).length,t:auto.length,parts:auto,man:auto.slice()}}

function fbHTML(it,r){
  if(r.kind==="p"){
    return `<div class="exf"><b>Lista de comprobación</b><p class="m">La app detecta lo que puede; marca o desmarca según tu texto.</p>${it.checks.map((c,i)=>`<label class="exchk"><input type="checkbox" data-ex="tog" data-k="${it.k}" data-i="${i}"${r.man[i]?" checked":""}> ${esc(c.l)}</label>`).join("")}<p class="fx-ans" style="margin-top:10px">Ejemplo de respuesta:</p><p class="m">${esc(it.model)}</p><p class="m">${fmt(esc(it.why))}</p></div>`}
  const good=eff(r)===r.t;
  let extra="";
  if(r.kind==="w")extra=`<ul class="exl">${r.parts.map((ok,i)=>`<li>${ok?"✓":"✗"} Línea ${i+1}</li>`).join("")}</ul>`;
  if(r.kind==="m"&&r.t>1&&!good)extra=`<p class="m">${r.parts.map((ok,i)=>`${ok?"✓":"✗"} ${i+1}`).join("  ·  ")}</p>`;
  return `<div class="exf ${good?"okk":"bad"}"><b>${good?"✓ Correcto":"✗ Revisa"}</b>${r.ovr&&r.e<r.t?" <span class='m'>(marcada como correcta por ti)</span>":""}${extra}${good&&!r.ovr?"":`<p class="fx-ans">${esc(modelText(it))}</p>`}<p class="m">${fmt(esc(it.why||""))}</p>${r.e<r.t?`<button class="pill-action" data-ex="ovr" data-k="${it.k}">${r.ovr?"↩ Quitar: mi respuesta no era correcta":"✓ Mi respuesta también es correcta"}</button>`:""}</div>`}

function paint(it,r){
  const fb=q$("#fb-"+it.k);if(fb)fb.innerHTML=fbHTML(it,r);
  const els=[...document.querySelectorAll(`[data-exk="${it.k}"]`)].sort((a,b)=>a.dataset.exi-b.dataset.exi);
  els.forEach((el,i)=>{el.disabled=true;if(r.kind!=="p"){el.classList.toggle("ok",!!r.parts[i]||(r.ovr&&r.kind!=="w"));el.classList.toggle("bad",!r.parts[i]&&!r.ovr)}})}
function secTotals(){const sec=SETS[X.set].secs[X.i];let e=0,t=0;sec.items.forEach(it=>{const r=X.res[it.k];if(r){e+=eff(r);t+=r.t}});return {e,t}}
function paintScore(){
  const {e,t}=secTotals(),p=pct(e,t);
  const el=q$("#ex-score");if(!el)return;
  el.innerHTML=`<div class="glass exscore"><span class="pill">RESULTADO DE LA SECCIÓN</span><div class="assessment-score">${p}%</div><p>${e} de ${t} puntos · ${label(p)}</p></div>`;
  X.secs[X.i]={e,t}}

function persistSec(){
  const sec=SETS[X.set].secs[X.i],{e,t}=secTotals(),st=setSt(X.set);
  st.secs[sec.id]={pct:pct(e,t),e,t,date:day()};save()}
function logErrors(sec){
  S.errorLog=S.errorLog||[];
  sec.items.forEach(it=>{const r=X.res[it.k];if(!r||eff(r)===r.t)return;
    const ep=esc((it.n+". "+it.p).replace(/\s+/g," ").slice(0,220));
    if(S.errorLog.some(e=>!e.reviewed&&e.prompt===ep))return;
    S.errorLog.unshift({id:Date.now()+"-"+Math.random().toString(36).slice(2,7),date:day(),reviewed:false,kind:"exam",level:"A2",source:"Simulacro: "+SETS[X.set].short,unit:it.u||"",prompt:ep,answer:esc(modelText(it)),chosen:esc(r.ans.filter(Boolean).join(" / ")||"(vacío)"),explanation:fmt(esc(it.why||""))})});
  S.errorLog=S.errorLog.slice(0,200)}

function checkSection(){
  const S0=SETS[X.set],sec=S0.secs[X.i];
  X.res={...X.res};
  sec.items.forEach(it=>{
    const ans=readAns(it),r=gradeItem(it,ans);r.ans=ans;r.ovr=false;X.res[it.k]=r;
    if(eff(r)<r.t&&it.u)X.miss.add(it.u);
    paint(it,r);
    for(let i=0;i<ans.length;i++)delete ex().draft[it.k+":"+i]});
  paintScore();logErrors(sec);
  const {e,t}=secTotals(),p=pct(e,t);
  persistSec();
  const xk=X.set+":"+sec.id;
  if(ex().xp[xk]!==day()){ex().xp[xk]=day();save();gain(Math.max(5,Math.round(p/4)),true)}else save();
  const last=X.i>=S0.secs.length-1;
  const nav_=X.full?`<button class="btn" data-ex="${last?"final":"next"}">${last?"Ver resultado final":"Siguiente sección →"}</button>`:`<button class="btn" data-ex="again">Repetir sección</button><button class="btn ghost" style="margin-top:8px" data-ex="home">Volver al simulacro</button>`;
  const old=q$("#ex-check");if(old)old.outerHTML=`<div id="ex-nav" style="margin-top:14px">${nav_}</div>`;
  window.scrollTo({top:0,behavior:"smooth"})}

/* ---------- Pantallas ---------- */
function homeHTML(id){
  const s=SETS[id],st=setSt(id),secs=s.secs;
  const rows=secs.length>1?secs.map((sec,i)=>{const r=st.secs[sec.id];return `<div class="quest-step-content" style="padding:10px 0;border-top:1px solid var(--line)"><div class="quest-step-copy"><b>${sec.id}. ${esc(sec.t)}</b><small>${sec.items.length} ${sec.items.length===1?"pregunta":"preguntas"}${r?` · último ${r.pct}%`:""}</small></div><button class="btn ghost" data-ex="sec" data-i="${i}" style="width:auto;min-width:96px">Practicar</button></div>`}).join(""):"";
  return `<div class="hr"><button class="pill-action" data-v="games">← Juegos</button><span class="pill">${secs.length>1?"10 secciones":"16 ejercicios"}</span></div>
  <h2>${id==="midterm"?"🎓":"📝"} ${esc(s.title)}</h2><p class="m">${esc(s.desc)}</p>
  ${st.last?`<div class="adaptive-hero"><div class="mini-label">Tu último intento · ${esc(st.last.date)}</div><div class="assessment-score" style="margin:6px 0">${st.last.pct}%</div><p class="m">Mejor resultado: ${st.best}% · ${label(st.last.pct)}${st.last.time?` · ${esc(st.last.time)}`:""}</p></div>`:""}
  <div class="card"><b>Cómo funciona</b><p class="m">Escribes tus respuestas sin opciones, como en el examen. Al corregir, ves la respuesta modelo y la regla. Si tu respuesta es correcta pero distinta, pulsa «Mi respuesta también es correcta». Las respuestas largas se evalúan con una lista de comprobación. Tus fallos pasan al Cuaderno de errores.</p></div>
  <button class="btn" data-ex="full">${secs.length>1?"Empezar examen completo":"Empezar mini-práctica"}</button>
  ${rows?`<div class="card" style="margin-top:14px"><b>Practicar una sección</b><div style="margin-top:6px">${rows}</div></div>`:""}`}

function finalHTML(){
  const s=SETS[X.set],tot=Object.values(X.secs).reduce((a,x)=>({e:a.e+x.e,t:a.t+x.t}),{e:0,t:0}),p=pct(tot.e,tot.t);
  const secs=s.secs;
  const secs_=secs.length>1?secs.map((sec,i)=>{const r=X.secs[i]||{e:0,t:0};return `<div class="hr" style="margin:8px 0"><span>${sec.id}. ${esc(sec.t)}</span><b>${pct(r.e,r.t)}%</b></div>`}).join(""):"";
  const topics=[...X.miss].map(id=>CU.find(u=>u.id===id)).filter(Boolean);
  const time=X.t0?Math.round((Date.now()-X.t0)/60000):0;
  return `<div class="card" style="text-align:center"><div class="big pop">${p>=80?"🏆":p>=60?"👏":"💪"}</div><div class="mini-label">${esc(s.title)}</div><h2>${label(p)}</h2><div class="assessment-score">${p}%</div><p>${tot.e} de ${tot.t} puntos${time?` · ${time} min`:""}</p><p class="m">Referencia de práctica; no es una nota oficial.</p></div>
  ${secs_?`<div class="card"><b>Por sección</b>${secs_}</div>`:""}
  ${topics.length?`<div class="glass" style="text-align:left"><span class="pill">📘 REPASA ESTOS TEMAS</span><div style="margin-top:12px">${topics.map(u=>`<button class="btn ghost" style="margin-bottom:8px" data-u="${u.id}">${u.e} ${esc(u.t)}</button>`).join("")}</div></div>`:`<div class="card"><b>🎉 ¡Sin temas pendientes!</b><p class="m">No fallaste ninguna pregunta.</p></div>`}
  <button class="btn" data-ex="full">Repetir</button><button class="btn ghost" style="margin-top:8px" data-errors="1">Ver cuaderno de errores</button><button class="btn ghost" style="margin-top:8px" data-ex="home">Volver al simulacro</button>`}

function openSet(id){
  clearInterval(X&&X.iv);
  X={set:id,full:false,i:0,res:{},secs:{},miss:new Set(),t0:0,iv:0};
  nav("games");const f=q$(".fab");if(f)f.style.display="none";
  v.innerHTML=homeHTML(id);window.scrollTo(0,0)}
function begin(full,i){
  const id=X.set;clearInterval(X.iv);
  X={set:id,full,i:i||0,res:{},secs:{},miss:new Set(),t0:full?Date.now():0,iv:0};
  if(full)Object.keys(ex().draft).forEach(k=>{if(k.startsWith(id+"-"))delete ex().draft[k]});
  renderSection()}
function finish(){
  clearInterval(X.iv);
  const tot=Object.values(X.secs).reduce((a,x)=>({e:a.e+x.e,t:a.t+x.t}),{e:0,t:0}),p=pct(tot.e,tot.t),st=setSt(X.set);
  const mins=X.t0?Math.round((Date.now()-X.t0)/60000):0;
  st.best=Math.max(st.best||0,p);st.last={pct:p,date:day(),time:mins?mins+" min":""};
  const xk=X.set+":final";if(ex().xp[xk]!==day()){ex().xp[xk]=day();save();gain(Math.round(p/2),true)}else save();
  v.innerHTML=finalHTML();window.scrollTo(0,0)}

/* ---------- Eventos ---------- */
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-ex]");if(!t)return;
  const a=t.dataset.ex;
  if(a==="tog"){const it=findItem(t.dataset.k),r=X&&X.res[t.dataset.k];if(!it||!r)return;r.man[+t.dataset.i]=t.checked;paintScore();persistSec();return}
  e.preventDefault();e.stopImmediatePropagation();
  if(!X)return;
  if(a==="full")begin(true,0);
  else if(a==="sec")begin(false,+t.dataset.i);
  else if(a==="check")checkSection();
  else if(a==="again")begin(false,X.i);
  else if(a==="next"){X.i++;renderSection()}
  else if(a==="final")finish();
  else if(a==="home")openSet(X.set);
  else if(a==="exit"){clearInterval(X.iv);openSet(X.set)}
  else if(a==="ovr"){const it=findItem(t.dataset.k),r=X.res[t.dataset.k];if(!it||!r)return;r.ovr=!r.ovr;
    const fb=q$("#fb-"+it.k);if(fb)fb.innerHTML=fbHTML(it,r);paint(it,r);paintScore();persistSec()}
},true);
function findItem(k){for(const sec of SETS[(X&&X.set)||"midterm"].secs)for(const it of sec.items)if(it.k===k)return it;return null}

/* Borradores: lo que escribes se conserva si recargas la página a mitad de una sección */
let dt=0;
const saveDraft=e=>{const el=e.target;if(!el.dataset||el.dataset.exk===undefined||el.disabled)return;
  ex().draft[el.dataset.exk+":"+el.dataset.exi]=el.value;clearTimeout(dt);dt=setTimeout(save,400)};
v.addEventListener("input",saveDraft);v.addEventListener("change",saveDraft);
v.addEventListener("keydown",e=>{if(e.key!=="Enter"||!e.target.classList||!e.target.classList.contains("exi")||e.target.tagName==="TEXTAREA")return;
  e.preventDefault();const all=[...v.querySelectorAll(".exi:not(:disabled)")],k=all.indexOf(e.target);if(k>=0&&all[k+1])all[k+1].focus()});

/* ---------- Integración con el resto de la app ---------- */
const _start=start;start=function(g){if(g==="exam")return openSet("midterm");if(g==="gpractice")return openSet("guide");return _start(g)};
const _games=games;games=function(){_games();const g=v.querySelector(".grid");
  if(g)g.insertAdjacentHTML("beforeend",`<button class="game" data-g="exam"><span>🎓</span><b>Simulacro de examen</b><small>Basic English · 80 preguntas</small></button><button class="game" data-g="gpractice"><span>📝</span><b>Mini-práctica</b><small>Ejercicios de la guía</small></button>`)};
const _home=home;home=function(){_home();const a=v.querySelector(".adaptive-hero");
  if(a)a.insertAdjacentHTML("afterend",`<section class="card"><div class="hr"><div><div class="mini-label">Preparación de examen</div><b style="font-size:18px">Simulacro Basic English</b></div><span style="font-size:26px">🎓</span></div><p class="m">80 preguntas sin opciones, con corrección y reglas. Incluye la guía de estudio.</p><div class="row" style="gap:8px"><button class="btn" data-g="exam">Empezar simulacro</button><button class="btn ghost" data-v="guide">Guía de estudio</button></div></section>`)};
const _learn=learn;learn=function(){_learn();const f=v.querySelector(".course-level");
  if(f)f.insertAdjacentHTML("beforebegin",`<div class="card"><div class="hr"><div><b>🎓 Preparación de examen</b><div class="m">Simulacro Basic English y mini-práctica.</div></div></div><div class="row" style="gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn" data-g="exam">Simulacro</button><button class="btn ghost" data-g="gpractice">Mini-práctica</button><button class="btn ghost" data-v="guide">Guía de estudio</button></div></div>`)};

/* Para pruebas automáticas y depuración */
window.EQExam={sets:SETS,enorm,gradeItem,eff};
})();
