/* English Quest · contenido de la «Guía de estudio – Basic English» (Word).
   Se carga ANTES de app.js, que lo integra en: lecciones (CU), gramática (GR), errores (ERR),
   vocabulario (D) e historias (ST).  Formato de cada unidad igual que CU en app.js:
   {l:nivel,id,e:emoji,t:título,x:[explicación],g:[[inglés,español]],k:truco,q:[[pregunta,correcta,d1,d2,d3,explicación]]}
   `after` = id de la unidad tras la que se inserta (para mantener un orden lógico). */
const GUIDE={
units:[
{l:"A1",id:"a1-14",after:"a1-4",e:"🔤",t:"Presente simple: la -s / -es y su ortografía",
 x:["En el presente simple el verbo queda en **forma base** con **I, you, we, they**. Solo cambia con **he, she, it** (y cualquier sujeto singular: Sarah, the company, my brother): lleva **-s / -es**. Es un resto histórico del inglés antiguo; no hay una razón lógica más profunda, se memoriza como regla fija.",
    "Ortografía: casi todos **+s** (work → works, like → likes). Si termina en **-ch, -sh, -ss, -x, -o** → **+es** (watch → watches, finish → finishes, fix → fixes, go → goes, do → does). **Consonante + y** → quita la y y pon **-ies** (study → studies). **Vocal + y** → solo **+s** (play → plays, buy → buys). Irregular: **have → has**."],
 g:[["She watches the reports every morning.","Ella revisa los informes cada mañana."],["The company studies the market.","La empresa estudia el mercado."],["He goes to the office by bus.","Él va a la oficina en bus."]],
 k:"3.ª persona singular = verbo con -s / -es. Consonante + y → -ies; vocal + y → solo -s.",
 q:[["Sarah ___ her emails at 8:00. (check)","checks","check","checkes","checking","Sarah es 3.ª persona singular → check + **s**."],
    ["The manager ___ the report. (finish)","finishes","finishs","finish","finishies","Termina en **-sh** → se añade **-es**."],
    ["She ___ English every night. (study)","studies","studys","studyes","study","Consonante + y → **-ies**."]]},

{l:"A2",id:"a2-15",after:"a2-1",e:"🧲",t:"do / does / did: el verbo vuelve a base",
 x:["**Do, does, did** son verbos auxiliares: solo aparecen en **negativas y preguntas**, nunca en afirmativas normales. **do** → I, you, we, they · **does** → he, she, it · **did** → todas las personas (pasado).",
    "El auxiliar «carga» el tiempo y la persona (la -s o el pasado), así que el verbo principal vuelve a **forma base**. Negativa: **don't / doesn't / didn't + base**. Pregunta: **Do / Does / Did + sujeto + base?** Respuesta corta: *Yes, she does.* Excepción: **to be** no usa auxiliar (She isn't late. / Was he late?)."],
 g:[["She doesn't work here.","Ella no trabaja aquí."],["Did they launch the store?","¿Lanzaron la tienda?"],["Where does she work?","¿Dónde trabaja ella?"]],
 k:"Con does / did la -s o el pasado ya están en el auxiliar: el verbo va en base. «Does she works?» ✗.",
 q:[["The sales team doesn't ___ long meetings.","like","likes","liked","liking","Tras **doesn't**, el verbo va en **base**."],
    ["___ the company launch its website last year?","Did","Does","Do","Was","**Last year** es pasado → **Did** + base."],
    ["Did she ___ to the office yesterday?","go","went","goes","gone","Tras **did**, verbo base: **go**."]]},

{l:"A2",id:"a2-16",after:"a2-15",e:"✅",t:"Pasado simple: verbos regulares (-ed)",
 x:["El pasado simple habla de acciones **terminadas** en un momento definido: *yesterday, last year, in 2018, two years ago, ten years ago*. Los regulares añaden **-ed**: work → worked. Si terminan en **e** solo **+d** (like → liked). **Consonante + y** → **-ied** (study → studied). **Vocal + y** → **+ed** (play → played). **Consonante-vocal-consonante** con sílaba tónica → duplica la consonante (stop → stopped, plan → planned).",
    "Pronunciación de **-ed**: suena **/t/** tras sonidos sordos (worked, helped), **/d/** tras sonoros (played, called) y **/ɪd/** tras **t** o **d** (wanted, needed)."],
 g:[["EcoMart launched a website last year.","EcoMart lanzó un sitio web el año pasado."],["I studied business from 2018 to 2021.","Estudié negocios de 2018 a 2021."],["They planned the campaign carefully.","Planearon la campaña con cuidado."]],
 k:"stop → stopped · study → studied · like → liked · play → played.",
 q:[["The company ___ a new website last month. (launch)","launched","launch","launchd","launching","Regular: **+ed**."],
    ["She ___ for her exam. (study)","studied","studyed","studid","studys","Consonante + y → **-ied**."],
    ["They ___ the car at the door. (stop)","stopped","stoped","stoping","stopd","Consonante-vocal-consonante → duplica: **stopped**."]]},

{l:"A2",id:"a2-17",after:"a2-16",e:"📜",t:"Pasado: verbos irregulares, was / were y there was / were",
 x:["Los irregulares **se memorizan**: buy → **bought**, pay → **paid**, write → **wrote**, send → **sent**, speak → **spoke**, make → **made**, begin → **began**, leave → **left**, meet → **met**, tell → **told**, think → **thought**, sell → **sold**, put → **put**, read → **read** (se pronuncia «red»), go → **went**, do → **did**, get → **got**, give → **gave**, take → **took**, see → **saw**, know → **knew**, say → **said**, have → **had**.",
    "**To be** en pasado: **I / he / she / it → was**; **you / we / they → were**. Negativa: **wasn't / weren't**. Pregunta: **Was he…? / Were they…?** Para decir qué *había*: **there was** (singular) / **there were** (plural): *Ten years ago, there was one store and there were five employees.*"],
 g:[["The manager sent the letter yesterday.","El gerente envió la carta ayer."],["Ten years ago, there was one store.","Hace diez años había una tienda."],["There were five employees in 2018.","En 2018 había cinco empleados."]],
 k:"Afirmativa: el pasado va en el verbo (bought). Negativa y pregunta: lo marca did y el verbo vuelve a base.",
 q:[["Last year we ___ a new laptop. (buy)","bought","buyed","buy","boughted","**buy** es irregular: **bought**."],
    ["In 2018, there ___ five employees.","were","was","are","is","Cinco empleados es plural y pasado → **there were**."],
    ["She didn't ___ the email. (send)","send","sent","sended","sends","Tras **didn't**, verbo en **base**."]]},

{l:"A2",id:"a2-18",after:"a2-17",e:"⏳",t:"Used to: antes sí, ahora no",
 x:["**Used to + verbo base** describe hábitos o situaciones del pasado que **ya no ocurren**. Sirve para comparar pasado y presente: *Managers used to send physical letters* (ahora ya no). Negativa: **didn't use to**. Pregunta: **Did + sujeto + use to…?** Con *did* se escribe **use** (sin d), porque *did* ya carga el pasado.",
    "**No** uses *used to* para hechos puntuales ni para decir cuántas veces o cuándo exactamente: *Last year, they launched a website.* ✓ · «I used to go there twice last week» ✗ → *I went there twice last week.* ✓. Y después de *used to* va verbo base, **nunca -ing**."],
 g:[["Staff used to count inventory manually.","El personal solía contar el inventario a mano."],["Employees didn't use to have laptops.","Los empleados antes no tenían laptops."],["Did managers use to work on paper?","¿Los gerentes solían trabajar en papel?"]],
 k:"used to + base · didn't use to + base · Did … use to …? (la d desaparece tras did).",
 q:[["Staff used to ___ without internet.","work","working","worked","works","Tras **used to**, verbo base (nunca -ing)."],
    ["They didn't ___ to use email.","use","used","using","uses","Con **didn't** la d desaparece: **didn't use to**."],
    ["Last week we ___ to the bank twice. (hecho puntual)","went","used to go","use to go","used to went","Hecho puntual con *last week* → **pasado simple**."]]},

{l:"A2",id:"a2-19",after:"a2-10",e:"💬",t:"like, enjoy, hate, prefer + -ing",
 x:["Después de **like, love, enjoy, hate, dislike, prefer, don't mind, can't stand** se usa el verbo en **-ing**: *Staff members enjoy playing soccer.* Con **like, love, hate, prefer** también puedes usar **to + verbo** sin gran cambio de significado. Con **enjoy** y **dislike** va **solo -ing**.",
    "Después de una **preposición** el verbo siempre va en **-ing**: *good at managing teams*, *interested in learning English*, *Thank you for coming*."],
 g:[["Employees prefer starting the week with clear goals.","Los empleados prefieren empezar la semana con metas claras."],["CFO Sarah hates taking financial risks.","A la directora financiera Sarah le disgusta tomar riesgos."],["She is good at managing teams.","Ella es buena dirigiendo equipos."]],
 k:"enjoy / dislike → solo -ing · like / love / hate / prefer → -ing o to + verbo · preposición → -ing.",
 q:[["They enjoy ___ in training. (participate)","participating","participate","to participate","participated","**enjoy** va solo con **-ing**."],
    ["She hates ___ long forms. (complete)","completing","complete","completes","completed","**hate** + **-ing** (también valdría *to complete*)."],
    ["I'm interested ___ English.","in learning","in learn","to learning","at learn","Preposición **in** + verbo en **-ing**."]]},

{l:"A2",id:"a2-20",after:"a1-11",e:"📊",t:"Adverbios de frecuencia: dónde se colocan",
 x:["Dicen con qué frecuencia ocurre algo: **always** (100 %) · **usually / normally** (~80-90 %) · **often / frequently** (~60-70 %) · **sometimes** (~40-50 %) · **occasionally** (~20-30 %) · **rarely / seldom** (~10 %) · **hardly ever** (~5 %) · **never** (0 %).",
    "Posición: **antes del verbo principal** (She usually starts at 8:00) · **después de to be** (Sarah is usually late, no «Sarah usually is late») · **después del primer auxiliar** (I can always call you; She doesn't often work late). *Sometimes, usually, often, occasionally* también pueden ir al inicio o al final; **always y never no van al final**. Expresiones como *every day, twice a week, once a month* van al final. Para preguntar: **How often…?**"],
 g:[["Managers always conduct coaching meetings on Mondays.","Los gerentes siempre dirigen reuniones de coaching los lunes."],["Sarah is usually late for coaching sessions.","Sarah suele llegar tarde a las sesiones de coaching."],["I hardly ever miss a meeting.","Casi nunca me pierdo una reunión."]],
 k:"Antes del verbo… pero después de to be: She is usually late.",
 q:[["Sarah ___ late for meetings.","is usually","usually is","does usually","usually be","Después de **to be**: *is usually*."],
    ["The CEO ___ checks the reports.","usually","is usually","does usually","usual","Con un verbo principal el adverbio va **antes**: *usually checks*."],
    ["___ do you check your email? — Twice a day.","How often","How long","How much","How many","Para preguntar la frecuencia: **How often**."]]},

{l:"A2",id:"a2-21",after:"a2-20",e:"🐢",t:"Adverbios de modo: -ly",
 x:["Los **adverbios de modo** dicen *cómo* se hace algo y modifican al verbo. Se forman con **adjetivo + -ly**: clear → **clearly**, efficient → **efficiently**, careful → **carefully**. Consonante + y → **-ily** (happy → happily). Irregulares: good → **well**; fast y hard no cambian.",
    "Posición: después del verbo o del complemento (The team completed the project **efficiently**) o antes del verbo (The manager **clearly** explained the procedure). Cuidado: *efficient* es adjetivo (an efficient team); *efficiently* es adverbio (works efficiently)."],
 g:[["The team completed the project efficiently.","El equipo completó el proyecto con eficiencia."],["The manager explained the procedure clearly.","El gerente explicó el procedimiento con claridad."],["She speaks English well.","Ella habla bien inglés."]],
 k:"El adjetivo describe un sustantivo (a clear plan); el adverbio describe un verbo (explained clearly). good → well.",
 q:[["The team works ___. (efficient)","efficiently","efficient","efficience","efficienty","Modifica al verbo → adverbio **efficiently**."],
    ["The manager explained the procedure ___. (clear)","clearly","clear","clearity","clearful","clear → **clearly**."],
    ["She speaks English ___. (good)","well","good","goodly","gooder","Irregular: good → **well**."]]},

{l:"A2",id:"a2-27",after:"a2-12",e:"🕵️",t:"Elige el tiempo verbal con la expresión de tiempo",
 x:["Las expresiones de tiempo te dicen qué tiempo usar. **Hábitos**: every Monday, usually, twice a month → **presente simple**. **Ahora**: right now, at the moment, Look!, this week → **presente continuo**. **Pasado terminado**: yesterday, last month, five years ago, in 2018 → **pasado simple**. **Momento exacto del pasado** (yesterday at 6 p.m.) o acción interrumpida (while / when) → **pasado continuo**. **Futuro**: next month, next year → **be going to**.",
    "Combinación típica: *While the developers **were testing** the platform, the system **stopped*** (acción larga en continuo + acción corta en pasado simple). Antes de contestar, subraya la expresión de tiempo."],
 g:[["Every Monday, the CEO meets the department leaders.","Cada lunes, el CEO se reúne con los líderes de área."],["Look! The team is preparing a presentation right now.","¡Mira! El equipo está preparando una presentación ahora mismo."],["Yesterday at 6 p.m., we were having a meeting.","Ayer a las 6 p.m., estábamos en una reunión."],["Next month, the company is going to open a new branch.","El próximo mes, la empresa va a abrir una sucursal."]],
 k:"every… → presente simple · right now → continuo · yesterday at 6 p.m. → pasado continuo · next… → going to.",
 q:[["Every Monday, the CEO ___ the leaders. (meet)","meets","is meeting","met","was meeting","*Every Monday* = hábito → **presente simple**."],
    ["Yesterday at 6 p.m., we ___ a meeting. (have)","were having","had","are having","have","Momento exacto del pasado → **pasado continuo**."],
    ["Next month, the company ___ a new branch. (open)","is going to open","opens","opened","was opening","*Next month* = plan futuro → **is going to open**."]]},

{l:"A2",id:"a2-22",after:"a2-27",e:"🤝",t:"Phrasal verbs con GET (1): get along, get started, get ahead",
 x:["Un **phrasal verb** es un verbo + una partícula (preposición o adverbio) que juntos forman un significado nuevo. **Get** es uno de los verbos más versátiles del inglés; su pasado es **got**.",
    "**get along (with)** = llevarse bien con alguien. **get started (on / with)** = empezar, comenzar. **get ahead (of)** = avanzar, tener éxito, adelantarse a otros."],
 g:[["The team members get along very well.","Los miembros del equipo se llevan muy bien."],["After several delays, the board decided to get started with the project.","Tras varios retrasos, la junta decidió empezar el proyecto."],["To get ahead of our competitors, we must launch modern advertising.","Para adelantarnos a la competencia, debemos lanzar publicidad moderna."]],
 k:"Personas: get along. Progreso: get started, get ahead.",
 q:[["Maria and her new coworkers ___ very well.","get along","get over","get by","get through","*Llevarse bien* → **get along**."],
    ["It's time to ___! We are late.","get started","get along","get over","get by","*Empezar* → **get started**."],
    ["If you want to ___ in your career, learn new skills.","get ahead","get by","get over","get together","*Avanzar, tener éxito* → **get ahead**."]]},

{l:"A2",id:"a2-23",after:"a2-22",e:"💪",t:"Phrasal verbs con GET (2): get through, get over, get together, get by",
 x:["**get through** = terminar algo difícil / superarlo. **get over** = recuperarse de una enfermedad, decepción o problema. **get together** = reunirse, juntarse. **get by** = arreglárselas con pocos recursos.",
    "Truco para estudiarlos por tema: *personas* (get along, get together) · *progreso* (get ahead, get started, get through) · *problemas* (get over, get by, get rid of)."],
 g:[["It was a difficult project, but we finally got through it.","Fue un proyecto difícil, pero por fin lo superamos."],["It took her a long time to get over the flu.","Le tomó mucho tiempo recuperarse de la gripe."],["They managed to get by with very little money.","Se las arreglaron con muy poco dinero."],["We should get together for coffee sometime.","Deberíamos reunirnos a tomar un café alguna vez."]],
 k:"get over = recuperarte · get through = superar una etapa difícil · get by = sobrevivir con poco.",
 q:[["After the flu, Daniel needed days to ___ it.","get over","get by","get together","get ahead","*Recuperarse* → **get over**."],
    ["We don't have much money, but we can ___ until payday.","get by","get over","get started","get along","*Arreglárselas con poco* → **get by**."],
    ["Let's ___ after class and discuss the presentation.","get together","get through","get by","get ahead","*Reunirse* → **get together**."]]},

{l:"A2",id:"a2-24",after:"a1-6",e:"🔑",t:"Pronombres posesivos: mine, yours, his, ours",
 x:["Hay dos familias. **Adjetivos posesivos** (van antes del sustantivo): my, your, his, her, our, their → *It's **his** laptop.* **Pronombres posesivos** (reemplazan al sustantivo y van solos): mine, yours, his, hers, ours, theirs → *The laptop is **his**.* *The office is **ours**.*",
    "No uses los pronombres objeto como posesivo: «him laptop» ✗ → *his laptop* ✓. Para preguntar sin repetir el sustantivo: *Is this notebook **yours**?*"],
 g:[["That laptop belongs to Carlos. It is his laptop.","Esa laptop es de Carlos. Es su laptop."],["This is our office. The office is ours.","Esta es nuestra oficina. La oficina es nuestra."],["Is this notebook yours?","¿Este cuaderno es tuyo?"]],
 k:"Antes del sustantivo: my / your / his / our. Solo (sin sustantivo): mine / yours / his / ours.",
 q:[["That is Carlos's laptop. It is ___ laptop.","his","him","he","hers","Antes del sustantivo → adjetivo posesivo **his**."],
    ["This is our office. The office is ___.","ours","our","us","we","Sin sustantivo → pronombre **ours**."],
    ["Is this notebook ___?","yours","your","you","yourself","Sin sustantivo → **yours**."]]},

{l:"A2",id:"a2-25",after:"a1-10",e:"🧳",t:"Contable o incontable: advice, information, luggage",
 x:["**Incontables** (sin plural y sin a / an): **advice, information, luggage, water, money, furniture, equipment, news, traffic, homework**. **Contables**: **chair, laptop, employee, ingredient, meeting**.",
    "Cuantificadores: **a / an** + contable singular (a laptop, an email). **some** en afirmativas (We need some equipment) · **any** en preguntas y negativas (Is there any coffee?). **many** + contable plural · **much** + incontable (sobre todo en negativas y preguntas)."],
 g:[["We need some new equipment for the office.","Necesitamos algo de equipo nuevo para la oficina."],["Did you receive an email from the manager?","¿Recibiste un correo del gerente?"],["How many employees work in this department?","¿Cuántos empleados trabajan en este departamento?"],["We don't have much time before the meeting.","No tenemos mucho tiempo antes de la reunión."]],
 k:"Information, advice, luggage, equipment → incontables: nunca «informations» ni «an advice».",
 q:[["We need ___ new equipment.","some","a","an","many","*Equipment* es incontable → **some**."],
    ["How ___ employees work here?","many","much","a","some","*Employees* es contable plural → **many**."],
    ["We don't have ___ time before the meeting.","much","many","a","few","*Time* es incontable → **much**."]]},

{l:"A2",id:"a2-26",after:"a2-14",e:"🪜",t:"Conectores de secuencia: First, Then, Next, After that, Finally",
 x:["Para explicar un procedimiento paso a paso: **First** (primero), **Then** (luego), **Next** (a continuación), **After that** (después de eso), **Finally** (por último). Van al inicio de la oración y se separan con **coma**; úsalos una sola vez cada uno.",
    "Cada paso es una oración completa: *First, train the employees. Then, test the website. Next, launch the advertisements. After that, present the product. Finally, evaluate the customer feedback.*"],
 g:[["First, train the employees.","Primero, capacita a los empleados."],["After that, present the product.","Después de eso, presenta el producto."],["Finally, evaluate customer feedback.","Por último, evalúa la opinión de los clientes."]],
 k:"Orden: First → Then → Next → After that → Finally.",
 q:[["___, train the employees. (primer paso)","First","Finally","After that","Next","El **primer** paso empieza con **First**."],
    ["___, evaluate customer feedback. (último paso)","Finally","First","Then","Next","El **último** paso se introduce con **Finally**."],
    ["First, test the website. ___, launch the advertisements.","Next","Finally","First","Last","Tras el primer paso sigue **Then / Next**; *Finally* es para el último."]]},

{l:"B1",id:"b1-10",after:"b1-5",e:"🧠",t:"used to, be used to y get used to",
 x:["No son lo mismo: **used to + base** = hábito del pasado que ya no ocurre (*I used to live in Bogotá*). **be used to + -ing** = estar acostumbrado ahora (*I am used to working early*). **get used to + -ing** = acostumbrarse poco a poco (*I'm getting used to using the new system*).",
    "Truco: si después hay un verbo en **base**, es hábito del pasado; si hay **-ing** (o un sustantivo), hablamos de costumbre o adaptación."],
 g:[["I used to live in Bogotá.","Antes vivía en Bogotá."],["I am used to working early.","Estoy acostumbrado a trabajar temprano."],["I'm getting used to using the new system.","Me estoy acostumbrando al nuevo sistema."]],
 k:"used to + base (pasado) · be / get used to + -ing (acostumbrarse).",
 q:[["I am used to ___ early.","working","work","worked","works","**be used to** + **-ing**."],
    ["She ___ live in Cali, but now she lives in Bogotá.","used to","is used to","gets used to","use to","Hábito del pasado → **used to** + base."],
    ["It takes time to get used to ___ the new system.","using","use","used","to use","**get used to** + **-ing**."]]},

{l:"B1",id:"b1-11",after:"b1-7",e:"🧭",t:"Phrasal verbs con GET (3): up, off, back, rid of…",
 x:["**Movimiento**: **get up** (levantarse), **get on / get off** (subir / bajar de bus, tren, avión), **get in / get out (of)** (entrar / salir de carro o taxi), **get back** (regresar), **get around** (moverse por un lugar), **get away** (escapar / irse de vacaciones).",
    "**Otros muy útiles**: **get back to** (responder o contactar de nuevo), **get into** (entrar a / ser aceptado), **get on with** (seguir con algo), **get rid of** (deshacerse de), **get away with** (salirse con la suya), **get out of** (evitar hacer algo), **get across** (lograr que se entienda una idea)."],
 g:[["I get up at 6:00 every day.","Me levanto a las 6:00 todos los días."],["We need to get rid of old paper files.","Necesitamos deshacernos de los archivos de papel viejos."],["I'll get back to you tomorrow.","Te respondo mañana."],["It's easy to get around Cali by bus.","Es fácil moverse por Cali en bus."]],
 k:"Agrúpalos: movimiento (up, on / off, in / out, back, around) · problemas (rid of, away with, out of).",
 q:[["She ___ the bus at the bank. (bajó)","got off","got on","got up","got over","*Bajar* de un bus → **get off**."],
    ["We need to ___ old paper files.","get rid of","get along","get across","get by","*Deshacerse de* → **get rid of**."],
    ["I'll ___ you tomorrow with the answer.","get back to","get on","get away","get around","*Responder más tarde* → **get back to**."]]},

{l:"B1",id:"b1-12",after:"b1-11",e:"🎲",t:"Otros significados de get (sin partícula)",
 x:["**Get** también es muy común solo: **obtener / recibir** (*I got a new laptop*), **llegar** (*What time do you get to work?*), **volverse + adjetivo** (*She got stressed before the audit; It's getting late*) y **entender** (*I don't get it*).",
    "Recuerda: su pasado es **got**, y con did / didn't vuelve a base: *Did you get my email?*"],
 g:[["I got a new laptop.","Recibí una laptop nueva."],["What time do you get to work?","¿A qué hora llegas al trabajo?"],["She got stressed before the audit.","Ella se estresó antes de la auditoría."],["I don't get it.","No lo entiendo."]],
 k:"get = obtener · llegar · volverse + adjetivo · entender.",
 q:[["I ___ a new laptop last week. (recibí)","got","get","gets","getting","Pasado de get: **got**."],
    ["What time do you ___ to work?","get","got","getting","gets","Tras **do you**, verbo base: **get** (= llegar)."],
    ["Sorry, I don't ___ it. Can you repeat?","get","got","gets","getting","**I don't get it** = no lo entiendo."]]}
],

/* Entradas para «Encuentra el error» (mala, correcta, regla) */
err:[
["She don't like it.","She doesn't like it.","He / she / it → doesn't."],
["Does she works here?","Does she work here?","Tras does, verbo en base."],
["Did you went to the meeting?","Did you go to the meeting?","Tras did, verbo en base."],
["They didn't used social media.","They didn't use social media.","Tras didn't, verbo en base."],
["I used to working there.","I used to work there.","used to + verbo base (nunca -ing)."],
["He enjoy to read.","He enjoys reading.","enjoy + -ing (y la -s con he)."],
["She usually is late.","She is usually late.","El adverbio va después de to be."],
["There is many files.","There are many files.","Plural → there are / there were."],
["I get up at the 7.","I get up at 7.","Con las horas no se usa the."],
["They didn't used to use email.","They didn't use to use email.","Tras didn't la d desaparece: use to."],
["In 2018, there is only one office.","In 2018, there was only one office.","Pasado (2018) → there was / there were."],
["The company used to working with paper.","The company used to work with paper.","used to + base."],
["Did the company launched its website?","Did the company launch its website?","Did + sujeto + verbo base."],
["The sales team doesn't likes long meetings.","The sales team doesn't like long meetings.","Tras doesn't, verbo en base."],
["Yesterday at noon, the employees are having lunch.","Yesterday at noon, the employees were having lunch.","Momento del pasado → pasado continuo."]
],

/* Tarjetas de referencia (Gramática) */
gr:[
["Presente simple: -s / -es","S + base (he / she / it + s / es)","She watches the reports.","watch → watches · study → studies · play → plays · have → has. Negar y preguntar: do / does + base."],
["do / does / did","Do / Does / Did + S + base ? · S + don't / doesn't / didn't + base","Did they launch the store?","El auxiliar carga el tiempo y la persona; el verbo va en base. To be no usa auxiliar."],
["Pasado: regulares","verbo + ed (study → studied, stop → stopped)","They launched a website.","Pronunciación: /t/ worked · /d/ played · /ɪd/ wanted."],
["Pasado: irregulares","buy → bought · write → wrote · send → sent · …","I wrote three emails.","Se memorizan. En negativa y pregunta vuelven a base (didn't write)."],
["Was / were · there was / were","I / he / she / it + was · you / we / they + were","There were five employees.","there was + singular · there were + plural."],
["Used to","S + used to + base · didn't use to + base","Managers used to send letters.","Hábito pasado que ya no ocurre. Nunca used to + -ing. ≠ be used to + -ing."],
["Verbos de preferencia + -ing","enjoy / dislike + -ing · like / love / hate / prefer + -ing o to","Employees prefer starting early.","Tras una preposición el verbo siempre va en -ing."],
["Frecuencia: posición","antes del verbo · después de to be · después del 1.er auxiliar","Sarah is usually late.","always y never no van al final de la oración."],
["Adverbios de modo","adjetivo + -ly","The team works efficiently.","good → well. Describen al verbo, no al sustantivo."],
["Phrasal verbs con GET","get along (with) · get started · get ahead · get through · get over · get together · get by","We got through the project.","Pasado: got. Agrúpalos por tema: personas, progreso, problemas, movimiento."],
["Posesivos: mine, yours, ours","my / your / his / our + sustantivo · mine / yours / his / ours (solos)","The office is ours.","No uses him / us / them como posesivo."],
["Conectores de secuencia","First, Then, Next, After that, Finally","First, train the employees.","Van al inicio con coma; cada uno una sola vez."]
],

/* Vocabulario: se añade a los grupos existentes (los duplicados se eliminan en app.js) */
vocab:{
Phrasal:[["get started","empezar"],["get ahead","avanzar / adelantarse"],["get through","superar / terminar algo difícil"],["get together","reunirse"],["get by","arreglárselas"],["get on / get off","subir / bajar (transporte)"],["get in / get out of","entrar / salir de (carro, taxi)"],["get back","regresar"],["get back to","responder de nuevo a"],["get away","escapar / irse lejos"],["get around","moverse por un lugar"],["get into","entrar a / ser aceptado"],["get on with","seguir con algo"],["get rid of","deshacerse de"],["get away with","salirse con la suya"],["get out of","evitar hacer algo"],["get across","lograr que se entienda"],["get used to","acostumbrarse a"]],
Verbos:[["be – was / were – been","ser / estar"],["have – had – had","tener"],["do – did – done","hacer"],["put – put – put","poner"],["read – read – read","leer"],["begin – began – begun","empezar"]],
Trabajo:[["office","oficina"],["staff","personal"],["manager","gerente"],["department","departamento"],["branch","sucursal"],["company","empresa"],["training session","sesión de capacitación"],["customer service","servicio al cliente"],["platform","plataforma"],["mobile application","aplicación móvil"],["launch","lanzar"],["developer","desarrollador"],["client","cliente"],["smartphone","teléfono inteligente"],["paper files","archivos en papel"],["printed letter","carta impresa"],["online store","tienda en línea"],["competitor","competidor"],["supervisor","supervisor"],["coworker","compañero de trabajo"],["presentation","presentación"],["feedback","retroalimentación"],["advertisement","anuncio"],["product","producto"],["procedure","procedimiento"],["policy","política"],["equipment","equipo"],["report","informe"],["payday","día de pago"],["remotely","a distancia"],["attend","asistir"],["hold a meeting","celebrar una reunión"],["evaluate","evaluar"],["inventory","inventario"],["strategy","estrategia"]]
},

/* Historias para el juego «Historia» */
stories:{
Trabajo:"Ten years ago, the company had one office and six employees. Staff used to work with paper files and managers used to send printed letters. Today the company has three offices. Employees usually attend training twice a month, and the IT department is developing a new platform. Next year, the company is going to open another office.",
Phrasal:"Maria and her new coworkers get along very well. The project was difficult, but the team got through it. After the flu, Daniel needed days to get over it. Now they want to get ahead of their competitors, so it is time to get started."
}
};
