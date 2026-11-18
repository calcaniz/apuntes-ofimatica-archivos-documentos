CFG={id:"S01.04",slug:"s0104",nombre:"Damos formato a la invitación",app:"📝 Writer virtual",
  aprendido:["Seleccionar texto arrastrando o con doble clic.","Cambiar la fuente y el tamaño de la letra.","Aplicar negrita, cursiva y subrayado.","Quitar un formato equivocado.","Destacar solo lo importante para que el documento sea claro."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>02_Invitacion_evento_Nombre.odt</b> con formato.",
  entregaPdf:"Entrega en Aules el archivo 02_Invitacion_evento_Nombre.odt con el formato aplicado (título, datos importantes, lema y norma).",
  errores:[["botones","al reconocer los botones"],["titulo","al dar formato al título"],["datos","al destacar los datos"],["cursiva","con la cursiva y el subrayado"],["corregir","al corregir el formato"]],
  ficha:[
   {id:"f1",t:"Seleccionar",ayuda:"Sin selección no hay cambio.",q:[
     ["¿Qué haces antes de cambiar el formato de una frase?",["La selecciono","La borro","Guardo el documento"],0,"Primero seleccionas; después eliges el formato."],
     ["¿Cómo seleccionas una sola palabra rápidamente?",["Con doble clic sobre ella","Con el botón derecho","Pulsando Intro"],0,"El doble clic selecciona la palabra entera."]]},
   {id:"f2",t:"Fuente y tamaño",ayuda:"Tres preguntas sobre la letra.",q:[
     ["¿En qué se mide el tamaño de la letra?",["En puntos","En centímetros","En kilos"],0,"Por eso en la barra pone, por ejemplo, 12 pt."],
     ["¿Qué tamaño usas para el texto normal?",["11 o 12","24","36"],0,"El texto normal va en 11 o 12; los títulos, más grandes."],
     ["¿Cuántas fuentes usarías en la invitación?",["Una o dos","Cinco o seis","Una diferente en cada línea"],0,"Con una o dos fuentes el documento se ve ordenado."]]},
   {id:"f3",t:"Negrita, cursiva y subrayado",ayuda:"¿Para qué sirve cada uno?",q:[
     ["Para el título y los datos importantes usamos…",["Negreta","Cursiva","Subratllat"],0,"La negrita hace que se vean rápido."],
     ["Para el lema del evento usamos…",["Negreta en todo el texto","Cursiva","Tamaño 36"],1,"La cursiva va bien para un lema o para dar énfasis a una frase corta."],
     ["¿Cómo quitas la negrita de una palabra?",["La selecciono y vuelvo a pulsar N","Borro la palabra","Cierro Writer"],0,"Al volver a pulsar el mismo botón, el formato se quita."]]},
   {id:"f4",t:"Errores habituales",ayuda:"¿Qué ha pasado?",q:[
     ["Todo lo que escribes sale en negrita. ¿Qué ha pasado?",["Dejé activada la negrita","Writer se ha estropeado","El teclado está roto"],0,"Pulsa otra vez N para desactivarla."],
     ["Pones toda la invitación en negrita. ¿Qué pasa?",["Nada destaca","Se lee mejor","Ocupa menos"],0,"Destaca poco para que destaque."]]},
   {id:"f5",t:"Corregir y ordenar",ayuda:"Para dejar el documento claro.",q:[
     ["Te equivocas de tamaño. ¿Qué es lo más rápido para volver atrás?",["Desfés (Ctrl + Z)","Cerrar sin guardar","Borrar el texto y escribirlo otra vez"],0,"Desfés anula el último cambio."],
     ["Los elementos con la misma función, como los subtítulos…",["Llevan el mismo formato","Llevan formatos distintos","No llevan formato"],0,"Así el lector reconoce cada parte del documento."]]}
  ]};

var DOCNOM="02_Invitacion_evento_Lucia.odt";
var TXT=["INVITACIÓN ESPECIAL","KDD49 Valencia","Te invitamos a un encuentro de motos clásicas en el circuito de Cheste.","Sábado 14 de marzo · 10:00","Prepara tu moto y disfruta de la carrera","Es obligatorio usar casco."];
var FONTS=[["Liberation Serif","'Liberation Serif','Times New Roman',Georgia,serif"],["Liberation Sans","'Liberation Sans',Arial,Helvetica,sans-serif"],["DejaVu Sans","'DejaVu Sans',Verdana,sans-serif"],["Noto Serif","'Noto Serif',Cambria,Georgia,serif"]];
var SIZES=[10,11,12,14,16,18,20,24,28,36];
var PARS=TXT.map(function(t){return t.split(" ").map(function(w){return {t:w,f:"Liberation Serif",s:12,b:false,i:false,u:false};});});
var SEL=null, ARRS=null;
var S={u:nuevoUnir(),m:["","","","",""],ok:[false,false,false,false,false],c5:false,lista:null};
function famCss(n){return (FONTS.filter(function(f){return f[0]===n;})[0]||FONTS[0])[1];}
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
function cmp(a,b){return a.p!==b.p?a.p-b.p:a.w-b.w;}
function rango(){if(!SEL)return null;var a=SEL.a,b=SEL.b;return cmp(a,b)<=0?{a:a,b:b}:{a:b,b:a};}
function enSel(p,w){var r=rango();if(!r)return false;var x={p:p,w:w};return cmp(x,r.a)>=0&&cmp(x,r.b)<=0;}
function selWords(){var r=rango(),l=[];if(!r)return l;PARS.forEach(function(par,p){par.forEach(function(w,i){if(enSel(p,i))l.push(w);});});return l;}
function selPars(){var r=rango(),l=[];if(!r)return l;for(var p=r.a.p;p<=r.b.p;p++)l.push(p);return l;}
function parCompleto(p){return PARS[p].every(function(w,i){return enSel(p,i);});}
function comun(prop){var l=selWords();if(!l.length)return null;var v=l[0][prop];return l.every(function(w){return w[prop]===v;})?v:null;}
function todo(p,fn){return PARS[p].every(fn);}

function pagina(){
  return PARS.map(function(par,p){
    return '<p class="w-p">'+par.map(function(w,i){
      var st="font-family:"+famCss(w.f)+";font-size:"+Math.round(w.s*1.2)+"px"+(w.b?";font-weight:700":"")+(w.i?";font-style:italic":"")+(w.u?";text-decoration:underline":"");
      return '<span class="w-w'+(enSel(p,i)?" sel":"")+'" data-p="'+p+'" data-w="'+i+'" style="'+st+'">'+esc(w.t)+'</span>';
    }).join(" ")+'</p>';
  }).join("");
}
function tool2(zonas){
  var z=function(id){return zonas?zonaAttr({zonas:true},id):"";};
  var f=comun("f"), s=comun("s"), b=comun("b")===true, it=comun("i")===true, u=comun("u")===true;
  return '<div class="w-tool"><span class="w-cb" style="min-width:128px">Estil per defecte ▾</span>'+
    '<span class="w-cb'+z("font")+'" data-tb="lfont" title="Nom del tipus de lletra" style="min-width:150px;cursor:pointer'+(S.lista==="font"?";border-color:#1e6fd9":"")+'"><span'+(f?' style="font-family:'+famCss(f)+'"':"")+'>'+(f||"&nbsp;")+'</span> ▾</span>'+
    '<span class="w-cb'+z("mida")+'" data-tb="lsize" title="Mida de la lletra" style="min-width:70px;cursor:pointer'+(S.lista==="size"?";border-color:#1e6fd9":"")+'">'+(s?s+" pt":"&nbsp;")+' ▾</span>'+
    '<button class="w-b big'+(b?" on":"")+z("negreta")+'" data-tb="negreta" title="Negreta (Ctrl+B)">N</button>'+
    '<button class="w-b big'+(it?" on":"")+z("cursiva")+'" data-tb="cursiva" title="Cursiva (Ctrl+I)" style="font-style:italic;font-weight:400">C</button>'+
    '<button class="w-b big'+(u?" on":"")+z("subratllat")+'" data-tb="subratllat" title="Subratllat (Ctrl+U)" style="text-decoration:underline;font-weight:400">S</button></div>';
}
function nPal(){return PARS.reduce(function(a,p){return a+p.length;},0);}
function llista(){
  if(!S.lista)return "";
  var f=comun("f"),sz=comun("s");
  var items=S.lista==="font"?FONTS.map(function(x){return ["font:"+x[0],'<span style="font-family:'+famCss(x[0])+'">'+(f===x[0]?"✔ ":"")+x[0]+'</span>'];}):SIZES.map(function(x){return ["size:"+x,(sz===x?"✔ ":"")+x+" pt"];});
  return despHTML(items,S.lista==="font"?150:310,140,null).replace(/data-mi="/g,'data-act="llista" data-v="');
}
function ventana(zonas){var h=writer({titulo:DOCNOM,tool2:tool2(zonas),pagina:pagina(),paraules:nPal(),mod:!zonas});return S.lista?h.replace(/<\/div>$/,llista()+"</div>"):h;}
function hint(){return '<div id="hint" class="msg info" style="'+(S.hint?"":"display:none")+'">'+(S.hint||"")+'</div>';}

/* selección con el ratón */
function pintarSel(){Array.prototype.forEach.call(document.querySelectorAll(".w-pag .w-w"),function(x){x.classList.toggle("sel",enSel(+x.getAttribute("data-p"),+x.getAttribute("data-w")));});}
function ponerHint(t){S.hint=t;var h=document.getElementById("hint");if(h){h.style.display=t?"":"none";h.innerHTML=t||"";}}
function abajo(e){
  if(!e.target.closest(".w-pag"))return;
  var w=e.target.closest(".w-w");
  if(!w){SEL=null;ARRS=null;pintarSel();ponerHint("");return;}
  e.preventDefault();
  var pos={p:+w.getAttribute("data-p"),w:+w.getAttribute("data-w")};
  ARRS={a:pos,mov:false};SEL=null;pintarSel();
}
function mueve(e){
  if(!ARRS)return;
  var w=e.target.closest&&e.target.closest(".w-pag .w-w");if(!w)return;
  var pos={p:+w.getAttribute("data-p"),w:+w.getAttribute("data-w")};
  if(!ARRS.mov&&cmp(pos,ARRS.a)===0)return;
  ARRS.mov=true;SEL={a:ARRS.a,b:pos};pintarSel();
}
function arriba(){
  if(!ARRS)return;
  var mov=ARRS.mov;ARRS=null;
  if(mov){S.hint="";render();}
  else ponerHint("Has colocado el <b>cursor</b>. Para <b>seleccionar</b>, arrastra desde la primera palabra hasta la última o haz <b>doble clic</b> sobre una palabra.");
}
function dobleW(e){
  var w=e.target.closest(".w-pag .w-w");if(!w)return false;
  var pos={p:+w.getAttribute("data-p"),w:+w.getAttribute("data-w")};SEL={a:pos,b:pos};S.hint="";return true;
}

/* aplicar formato */
var OBJ=[null,[0],[3],[4,5],[2]];
function aplicar(prop,val){
  var i=paso, l=selWords();
  if(!l.length){S.m[i]="Sin selección no hay cambio: primero <b>selecciona</b> el texto (arrastrando o con doble clic).";S.ok[i]=false;error(CFG.errores[i][0]);return;}
  var fuera=selPars().filter(function(p){return OBJ[i].indexOf(p)<0;});
  if(fuera.length){S.m[i]="Has seleccionado otras líneas además de la que toca. Selecciona solo "+["","el <b>título</b>","la línea de la <b>fecha</b>","el <b>lema</b> o la palabra <b>obligatorio</b>","el <b>párrafo</b> que está mal"][i]+".";S.ok[i]=false;error(CFG.errores[i][0]);intento("sel"+i,false);return;}
  if(prop==="b"||prop==="i"||prop==="u"){var todos=l.every(function(w){return w[prop];});l.forEach(function(w){w[prop]=!todos;});val=!todos;}
  else l.forEach(function(w){w[prop]=val;});
  evaluar(prop,val);
}
var NOMP={f:"la fuente",s:"el tamaño",b:"la negrita",i:"la cursiva",u:"el subrayado"};
function evaluar(prop,val){
  var i=paso, okAntes=S.ok[i], g=objetivoPaso(i), m="";
  var hecho=g.every(function(x){return x[1];});
  if(hecho){if(!okAntes)intento("paso"+i,true);S.ok[i]=true;S.m[i]="✔ <b>"+elogio(i+2)+"</b> "+["","¡Título listo! Grande, claro y en negrita: se ve desde lejos.","¡Datos destacados! La fecha y la hora se ven enseguida.","El lema en cursiva y la palabra importante subrayada. ¡Muy elegante!","¡Corregido! Ahora el párrafo vuelve a ser texto normal."][i];return;}
  var l=selWords(), parcial=selPars().some(function(p){return !parCompleto(p);});
  if(i===3&&prop==="u"&&val&&l.length>1){S.m[i]="Para el subrayado basta con una palabra: <b>obligatorio</b>. Quita el subrayado del resto (selecciona y vuelve a pulsar S).";S.ok[i]=false;error("cursiva");return;}
  if(parcial&&i!==3){S.m[i]="Has aplicado "+NOMP[prop]+" a <b>una parte</b> de la línea. Selecciona la línea entera, desde la primera palabra hasta la última.";S.ok[i]=false;return;}
  if(prop==="b"&&!val&&(i===2||i===3)){S.m[i]="Has <b>quitado</b> la negrita. Si la querías, vuelve a pulsar <b>N</b>.";S.ok[i]=false;return;}
  if(prop==="f"&&val!=="Liberation Sans"&&i===2){S.m[i]="Has puesto <b>"+esc(val)+"</b>. Para el título queremos <b>Liberation Sans</b>.";S.ok[i]=false;error("titulo");return;}
  if(prop==="s"&&i===2&&val!==24){S.m[i]="Tamaño "+val+". Para el título queremos <b>24</b>.";S.ok[i]=false;error("titulo");return;}
  if(prop==="s"&&i===3&&val!==14){S.m[i]="Tamaño "+val+". Para destacar los datos queremos <b>14</b>.";S.ok[i]=false;error("datos");return;}
  if(prop==="s"&&i===4&&val!==12){S.m[i]="Tamaño "+val+". El texto normal va en <b>12</b>.";S.ok[i]=false;error("corregir");return;}
  if(prop==="i"&&i===3&&val===false){S.m[i]="Has quitado la cursiva.";S.ok[i]=false;return;}
  m="Bien: has cambiado "+NOMP[prop]+". Mira el objetivo: ¿qué falta?";
  S.m[i]=m;S.ok[i]=true;
}
function objetivoPaso(i){
  if(i===1)return [["Fuente <b>Liberation Sans</b>",todo(0,function(w){return w.f==="Liberation Sans";})],["Tamaño <b>24</b>",todo(0,function(w){return w.s===24;})],["<b>Negreta</b>",todo(0,function(w){return w.b;})]];
  if(i===2)return [["Fecha y hora en <b>negreta</b>",todo(3,function(w){return w.b;})],["Tamaño <b>14</b>",todo(3,function(w){return w.s===14;})]];
  if(i===3)return [["Lema en <i>cursiva</i>",todo(4,function(w){return w.i;})],["Solo <u>obligatorio</u> subrayado",todo(5,function(w){return w.u===(w.t==="obligatorio");})]];
  if(i===4)return [["Párrafo <b>sin negrita</b>",todo(2,function(w){return !w.b;})],["Tamaño <b>12</b>",todo(2,function(w){return w.s===12;})]];
  return [];
}
function pasoFmt(t,ayuda,extra){
  return ext2({t:t,ayuda:ayuda,
    onDown:abajo,onMove:mueve,onUp:arriba,onDbl:dobleW,
    onTb:function(k){if(k==="lfont"||k==="lsize"){var l=k==="lfont"?"font":"size";S.lista=S.lista===l?null:l;return;}S.lista=null;if(k==="negreta")aplicar("b");else if(k==="cursiva")aplicar("i");else if(k==="subratllat")aplicar("u");},
    onAct:function(a,b){if(a!=="llista")return;var v=b.getAttribute("data-v").split(":");S.lista=null;if(v[0]==="font")aplicar("f",v[1]);else aplicar("s",+v[1]);},
    onClic:function(e,t){if(S.lista&&!t.closest(".desp")){S.lista=null;return true;}return false;},
    onKey:function(e){var k=e.key.toLowerCase();if(!(e.ctrlKey||e.metaKey))return false;if(k==="b"){e.preventDefault();aplicar("b");return true;}if(k==="i"){e.preventDefault();aplicar("i");return true;}if(k==="u"){e.preventDefault();aplicar("u");return true;}return false;},
    entrar:function(){SEL=null;S.hint="";S.lista=null;},
    html:function(){var i=paso,g=objetivoPaso(i),ok=g.every(function(x){return x[1];});return ventana(false)+hint()+objetivo(g)+(ok&&this.ultimo?msg(S.m[i],true)+bloqueFinPractica():msg(S.m[i],S.ok[i]));},
    ok:function(){return objetivoPaso(paso).every(function(x){return x[1];});}},extra||{});
}

PRACTICA=[
 {t:"1. Los botones del formato",ayuda:"Pulsa un <b>nombre</b> y después el <b>botón o la lista</b> de la barra de herramientas donde está.",
  unir:{st:S.u,clave:"botones",zonas:true,items:[
    ["font","Nom del tipus de lletra","Cambia la fuente: Liberation Sans, Liberation Serif…"],
    ["mida","Mida","Cambia el tamaño de la letra, en puntos (pt)."],
    ["negreta","Negreta (N)","Letras más gruesas, para lo importante."],
    ["cursiva","Cursiva (C)","Letras inclinadas, para un lema o dar énfasis."],
    ["subratllat","Subratllat (S)","Una línea debajo, para una norma o una fecha."]]},
  html:function(){var u=this.unir;return unirChips(u)+ventana(true)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 pasoFmt("2. El título","Selecciona <b>INVITACIÓN ESPECIAL</b> arrastrando desde la primera letra hasta la última. Después ponle fuente <b>Liberation Sans</b>, tamaño <b>24</b> y <b>negreta</b>."),
 pasoFmt("3. Los datos importantes","Selecciona la línea de la <b>fecha y la hora</b> (Sábado 14 de marzo · 10:00). Ponla en <b>negreta</b> y en tamaño <b>14</b>."),
 pasoFmt("4. Cursiva y subrayado","Pon el <b>lema</b> (Prepara tu moto y disfruta de la carrera) en <b>cursiva</b>. Después haz <b>doble clic</b> en la palabra <b>obligatorio</b> y <b>subráyala</b>."),
 pasoFmt("5. Corregir un formato","¡Vaya! Alguien ha puesto el <b>párrafo central</b> en negrita y en tamaño 20: nada destaca. Selecciónalo, <b>quita la negrita</b> (vuelve a pulsar <b>N</b>) y déjalo en tamaño <b>12</b>.",{ultimo:true,
   entrar:function(){SEL=null;S.hint="";if(!S.c5){S.c5=true;PARS[2].forEach(function(w){w.b=true;w.s=20;});}},
   ok:function(){var r=objetivoPaso(4).every(function(x){return x[1];});if(r&&!cargar().practica.ok)finPractica(["Título: Liberation Sans, 24 pt, negreta","Fecha y hora: negreta, 14 pt","Lema en cursiva y la palabra «obligatorio» subrayada","Párrafo corregido: sin negrita y en 12 pt"]);return r;}})
];
