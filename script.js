const $=s=>document.querySelector(s),rnd=n=>Math.random()*n|0;
const LD={3:14,9:21,17:28,24:32},SN={16:5,27:11,31:19,35:22};
const Q=[
["¿Qué tres clases de acento distingue Benito (2005)?",["Prosódico, gráfico y diacrítico","Agudo, grave y circunflejo","Fuerte, débil y medio"],0,"Prosódico (pronunciación), gráfico o tilde, y diacrítico (distinguidor)."],
["La tilde es el signo que indica que una sílaba es…",["átona","tónica","un diptongo"],1,"La tilde, o acento gráfico, señala la sílaba tónica."],
["En pla.ne.TA.rio, ¿cuál es la sílaba tónica?",["pla","ne","TA","rio"],2,"La penúltima, «ta», lleva el acento léxico o primario."],
["¿Cuál es el orden para tildar una palabra (Mier y Arias, 2005)?",["Tildar, separar en sílabas y clasificar","Separar en sílabas, hallar la sílaba más acentuada, clasificar la palabra y colocar la tilde","Clasificar y después borrar la tilde"],1,"Sílabas → sílaba tónica → clase de palabra → tilde."],
["¿Cuál palabra tiene un diptongo?",["aire","país","tío"],0,"«ai»: vocal abierta + cerrada átona en una misma sílaba."],
["En un diptongo de vocal abierta y cerrada (acción, acuático), la tilde va sobre…",["la vocal cerrada","la vocal abierta","ambas vocales"],1,"La tilde se coloca siempre sobre la vocal abierta."],
["En «cuídate» hay dos vocales cerradas (u, i). ¿Dónde va la tilde?",["En la primera","En la segunda","No lleva"],1,"En diptongos de vocales cerradas va sobre la segunda: cuídate, lingüístico."],
["Un triptongo es…",["tres vocales en una misma sílaba","tres sílabas seguidas","una vocal con tres tildes"],0,"Vocal abierta entre dos cerradas átonas: estudiáis, buey."],
["¿Cuál triptongo está bien tildado?",["estudiáis","estudiaís","estúdiais"],0,"Los triptongos llevan la tilde sobre la vocal abierta."],
["Por regla general, los monosílabos (fe, pie, sol, fui, bien)…",["no se acentúan","siempre llevan tilde","llevan tilde si acaban en n"],0,"No llevan tilde, salvo la diacrítica (él, tú, mí, té, más, sí, dé, sé)."],
["Me lo dijo ___ . (pronombre personal)",["el","él"],1,"«él» pronombre lleva tilde; «el» artículo no."],
["¿Dónde has puesto ___ abrigo? (posesivo)",["tu","tú"],0,"El posesivo «tu» no lleva tilde; el pronombre «tú» sí."],
["¿Tienes algo para ___ ? (pronombre personal)",["mi","mí"],1,"«mí» pronombre; «mi casa» posesivo, sin tilde."],
["Tomé una taza de ___ . (bebida)",["te","té"],1,"«té» sustantivo lleva tilde; «te» pronombre no."],
["Habla ___ alto. (adverbio de cantidad)",["mas","más"],1,"«más» lleva tilde; «mas» equivale a «pero»."],
["Esta vez ___ la habían invitado. (adverbio de afirmación)",["si","sí"],1,"«sí» afirmación o pronombre; «si» conjunción."],
["Yo no ___ nada. (verbo saber)",["se","sé"],1,"«sé» del verbo saber o ser; «se» pronombre."],
["___ usted las gracias a su hermana. (verbo dar)",["De","Dé"],1,"«dé» del verbo dar; «de» preposición."],
["___ es joven. (equivale a «todavía»)",["Aun","Aún"],1,"Con sentido de «todavía» lleva tilde; con «hasta/incluso», no."],
["¿Lleva tilde «solo» en «Solo trabaja de lunes a viernes»?",["Sí, siempre","No, no debe llevar tilde","Solo si es adjetivo"],1,"Como adverbio o adjetivo, «solo» no debe llevar tilde."],
["«Este es tonto»: el demostrativo «este» como pronombre…",["lleva tilde","no debe llevar tilde","lleva tilde si va al inicio"],1,"Los demostrativos no llevan tilde, sean adjetivos o pronombres."],
["¿___ llega el avión? (sentido interrogativo)",["Cuando","Cuándo"],1,"Cómo, cuál, cuándo, dónde, qué, quién… llevan tilde si interrogan o exclaman."],
["En «3 o 4 días», la conjunción «o»…",["lleva tilde","no lleva tilde","lleva tilde entre cifras"],1,"La conjunción disyuntiva «o» no lleva tilde, ni entre números."],
["Las palabras agudas tienen tónica la…",["última sílaba","penúltima","antepenúltima"],0,"Ej.: reloj, balón, cantáis, catedral, París."],
["«césped» y «cabello» son palabras…",["agudas","llanas","esdrújulas"],1,"Llanas o graves: la tónica es la penúltima sílaba."],
["«sábado» y «rápido» son esdrújulas porque la tónica es la…",["antepenúltima","penúltima","última"],0,"Las esdrújulas siempre llevan tilde."],
["«dígamelo» y «cómetelo» son…",["llanas","sobresdrújulas","agudas"],1,"Su tónica es anterior a la antepenúltima; siempre llevan tilde."],
["Las agudas llevan tilde si terminan en…",["vocal, -n o -s","consonante distinta de n o s","-y"],0,"Ej.: consomé, está, alhelí, además."],
["¿Qué aguda NO lleva tilde por acabar en -s tras otra consonante?",["además","robots","cantáis"],1,"Ej.: robots, confort, tictacs, zigzags."],
["«virrey», «convoy» y «guirigay» no llevan tilde porque…",["son agudas terminadas en y","son llanas","son monosílabas"],0,"Las agudas terminadas en y no llevan tilde."],
["Las llanas llevan tilde si terminan en…",["vocal, -n o -s","consonante que no sea n ni s","cualquier letra"],1,"Ej.: ágil, árbol, álbum, Héctor."],
["¿Qué llana lleva tilde aunque termina en -s?",["cómics","cabellos","sortijas"],0,"Si la -s va precedida de consonante, sí lleva tilde: bíceps, fórceps, récord."],
["¿Cuál llana terminada en y lleva tilde?",["póney","convoy","virrey"],0,"Las llanas terminadas en y deben llevar tilde: póney, yóquey."],
["Las esdrújulas y sobresdrújulas (indígena, teléfono, gánatela)…",["siempre llevan tilde","nunca llevan tilde","solo en vocal"],0,"Siempre llevan tilde en la sílaba tónica."]
];
const R=[
"Di en voz alta 3 palabras agudas con tilde (ej.: balón, está…).",
"Escribe o di 3 palabras esdrújulas. ¡Todas llevan tilde!",
"Separa en sílabas «planetario» e indica cuál es la tónica.",
"Inventa una oración con «té» y otra con «te».",
"Da un ejemplo de diptongo y uno de triptongo.",
"Explica por qué «árbol» lleva tilde y «robots» no.",
"Haz una oración con «sí» y otra con «si».",
"Menciona 3 monosílabos que NO llevan tilde.",
"Di una palabra sobresdrújula y explica por qué lleva tilde.",
"Construye una oración con «aún» y otra con «aun».",
"Haz una oración con «más» y otra con «mas».",
"Explica la diferencia entre «él» y «el» con un ejemplo.",
"Di 3 palabras llanas que lleven tilde (ej.: ágil, álbum…)."
];
const GUIDE=`<h2>📖 Guía de reglas de acentuación</h2><p class="muted">Resumen de las págs. 12–19 de «Normas de ortografía y de estilo vigentes» (SENA, 2014).</p>
<h3>Sílaba y acento</h3><p>Sílaba tónica: la que lleva el acento; átona: la que carece de él. Hay tres acentos: <b>prosódico</b> (pronunciación), <b>gráfico</b> o tilde y <b>diacrítico</b> (distinguidor). La mayoría de las palabras no llevan tilde, pero sí tienen acento.</p>
<h3>Pasos para tildar</h3><ol><li>Separar en sílabas.</li><li>Identificar la sílaba más acentuada.</li><li>Clasificar la palabra según su acento.</li><li>Colocar la tilde.</li></ol>
<h3>Diptongos</h3><p>Dos vocales en una sílaba: abierta (a, e, o) + cerrada (i, u) átona, o dos cerradas distintas (iu, ui). Tilde sobre la abierta (acción) o, si son cerradas, sobre la segunda (cuídate). Se tildan según las reglas generales.</p>
<h3>Triptongos</h3><p>Tres vocales en una sílaba: abierta entre dos cerradas átonas. La tilde va sobre la abierta (estudiáis, apacigüéis).</p>
<h3>Monosílabos</h3><p>No se acentúan (fe, pie, sol, fui, bien, no, un), salvo la tilde diacrítica.</p>
<h3>Tilde diacrítica</h3><p><b>el/él</b> (artículo/pronombre) · <b>tu/tú</b> (posesivo/pronombre) · <b>mi/mí</b> · <b>te/té</b> (pronombre/bebida) · <b>mas/más</b> (pero/cantidad) · <b>si/sí</b> (conjunción/afirmación) · <b>de/dé</b> (preposición/verbo dar) · <b>se/sé</b> (pronombre/verbo saber o ser) · <b>aun/aún</b> (hasta/todavía).</p>
<p>Interrogativos y exclamativos (adónde, cómo, cuál, cuán, cuándo, cuánto, dónde, qué, quién) llevan tilde cuando interrogan o exclaman, también en preguntas indirectas. <b>Solo</b> y los <b>demostrativos</b> (este, ese, aquel…) no se tildan. La conjunción <b>o</b> no se tilda ni entre números.</p>
<h3>Polisílabos: 4 clases</h3><p><b>Agudas</b>: tónica la última (reloj, balón). <b>Llanas</b>: la penúltima (césped, inútil). <b>Esdrújulas</b>: la antepenúltima (sábado, rápido). <b>Sobresdrújulas</b>: anterior a la antepenúltima (dígamelo).</p>
<h3>Reglas generales</h3><ul><li>Agudas: tilde si terminan en vocal, -n o -s (está, además). Sin tilde si la -s sigue a otra consonante (robots) o terminan en y (virrey).</li><li>Llanas: tilde si terminan en consonante que no sea -n ni -s (ágil, árbol). Con tilde si terminan en -s tras consonante (bíceps, cómics) o en y (póney).</li><li>Esdrújulas y sobresdrújulas: siempre llevan tilde (teléfono, gánatela).</li></ul>
<div class="n"><button class="p" data-action="hide">Cerrar</button></div>`;
let P=[],T=0,used=[],busy=false,cq=null,ord=[];
function show(h){$('#mc').innerHTML=h;$('#m').style.display='flex'}
function hide(){$('#m').style.display='none'}
function guide(){show(GUIDE)}
function intro(){busy=true;show(`<h2>🐍 Escaleras y Serpientes de la Acentuación</h2>
<p>La <b>acentuación</b> es el conjunto de reglas que indican qué sílaba de una palabra se pronuncia con más fuerza (sílaba tónica) y cuándo esa fuerza se marca con tilde. Este juego repasa esas reglas: agudas, llanas, esdrújulas, diptongos, triptongos, monosílabos y tilde diacrítica.</p>
<h3>Cómo se juega</h3><ul>
<li>Llega primero a la casilla <b>36</b> 🏆. Tira el dado por turnos.</li>
<li><b>Casilla normal:</b> responde una pregunta. Si aciertas ganas ⭐; si fallas, retrocedes 1 casilla.</li>
<li>🪜 <b>Escalera:</b> subes sin preguntas.</li>
<li>🐍 <b>Serpiente:</b> cumples un reto en voz alta o por escrito y luego bajas.</li>
<li>Si te atascas, abre «📖 Reglas».</li></ul>
<h3>¿Cuántos jugadores?</h3><div class="n">${[1,2,3,4].map(n=>`<button class="p" data-action="start" data-value="${n}">${n}</button>`).join('')}</div>`)}
function start(n){P=Array.from({length:n},(_,i)=>({p:1,s:0,e:['🔴','🔵','🟢','🟡'][i]}));T=0;used=[];busy=false;$('#die').textContent='–';hide();draw()}
function draw(){document.querySelectorAll('.c u').forEach(u=>u.textContent='');P.forEach(p=>{$('#c'+p.p+' u').textContent+=p.e});if(!P.length)return;
$('#turn').innerHTML=`Turno de ${P[T].e} <b>Jugador ${T+1}</b> · casilla ${P[T].p}`;
$('#sc').innerHTML=P.map((p,i)=>`${p.e} J${i+1}: ⭐${p.s} · casilla ${p.p}`).join(' &nbsp; ')}
function roll(){if(busy||!P.length)return;busy=true;const r=1+rnd(6);$('#die').textContent=r;P[T].p=Math.min(36,P[T].p+r);draw();setTimeout(land,550)}
function land(){const pl=P[T],p=pl.p;
if(p==36){const w=P.map((q,i)=>`${q.e} J${i+1}: ⭐${q.s}`).join('<br>');return show(`<h2>🏆 ¡Gana el Jugador ${T+1} ${pl.e}!</h2><p>${w}</p><div class="n"><button class="p" data-action="intro">Jugar de nuevo</button></div>`)}
if(LD[p])return show(`<h2>🪜 ¡Escalera!</h2><p>Subes de la casilla ${p} a la ${LD[p]}.</p><div class="n"><button class="p" data-action="move" data-value="${LD[p]}">Subir</button></div>`);
if(SN[p])return show(`<h2>🐍 ¡Serpiente!</h2><p>Antes de bajar a la casilla ${SN[p]}, cumple este reto:</p><div class="fb">${R[rnd(R.length)]}</div><div class="n"><button class="p" data-action="move" data-value="${SN[p]}">¡Reto cumplido!</button></div>`);
if(used.length>=Q.length)used=[];let i;do{i=rnd(Q.length)}while(used.includes(i));used.push(i);cq=Q[i];
ord=cq[1].map((t,k)=>[t,k]).sort(()=>Math.random()-.5);
show(`<h2>❓ Pregunta</h2><p><b>${cq[0]}</b></p>${ord.map((o,k)=>`<button class="o" data-action="answer" data-value="${k}">${o[0]}</button>`).join('')}`)}
function ans(k){const ok=ord[k][1]==cq[2];
document.querySelectorAll('.o').forEach((b,j)=>{b.disabled=true;if(ord[j][1]==cq[2])b.classList.add('ok');else if(j==k)b.classList.add('no')});
const pl=P[T];let msg;if(ok){pl.s++;msg='¡Correcto! +1 ⭐'}else{pl.p=Math.max(1,pl.p-1);msg='Incorrecto: retrocedes 1 casilla.'}
$('#mc').insertAdjacentHTML('beforeend',`<div class="fb"><b>${msg}</b><br>${cq[3]}</div><div class="n"><button class="p" data-action="next">Continuar</button></div>`);draw()}
function mv(n){P[T].p=n;nx()}
function nx(){hide();busy=false;T=(T+1)%P.length;draw()}
document.addEventListener('click',event=>{const target=event.target;if(!(target instanceof Element))return;const button=target.closest('button[data-action]');if(!button)return;const value=button.dataset.value;switch(button.dataset.action){case'guide':guide();break;case'intro':intro();break;case'roll':roll();break;case'hide':hide();break;case'start':start(Number(value));break;case'move':mv(Number(value));break;case'answer':ans(Number(value));break;case'next':nx();break;}});
(function(){const xy=n=>{const r=(n-1)/6|0,c=r%2?5-(n-1)%6:(n-1)%6;return[c+.5,5-r+.5]};
for(let n=1;n<=36;n++){const r=(n-1)/6|0,c=r%2?5-(n-1)%6:(n-1)%6,d=document.createElement('div');d.className='c';d.id='c'+n;d.style.gridRow=6-r;d.style.gridColumn=c+1;
d.innerHTML=`<i>${n}</i><b>${n==1?'🏁':n==36?'🏆':LD[n]?'🪜':SN[n]?'🐍':''}</b><u></u>`;$('#b').append(d)}
let s='';for(const a in LD){const[x1,y1]=xy(+a),[x2,y2]=xy(LD[a]);s+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2e9d4a" stroke-width=".09" stroke-dasharray=".25 .12" stroke-linecap="round" opacity=".7"/>`}
for(const a in SN){const[x1,y1]=xy(+a),[x2,y2]=xy(SN[a]);s+=`<path d="M${x1} ${y1}Q${(x1+x2)/2+.45} ${(y1+y2)/2-.3} ${x2} ${y2}" fill="none" stroke="#d64545" stroke-width=".1" stroke-linecap="round" opacity=".7"/>`}
$('#sv').innerHTML=s})();
intro();
