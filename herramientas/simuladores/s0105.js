CFG={id:"S01.05",slug:"s0105",nombre:"Preparamos el cartel",app:"📝 Writer virtual",
  aprendido:["Configurar el tamaño, la orientación y los márgenes en Format › Estil de pàgina.","Insertar una imagen con Insereix › Imatge… desde la carpeta Imagenes.","Cambiar el tamaño de una imagen desde una esquina, sin deformarla.","Arreglar una imagen deformada con Desfés.","Centrar la imagen en la página."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>03_Cartel_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo 03_Cartel_evento_Nombre.odt: A4, orientación horizontal, márgenes de 1,5 cm y una imagen centrada sin deformar.",
  errores:[["conceptos","al unir los conceptos"],["pagina","al configurar la página"],["imatge","al insertar la imagen"],["mida","al cambiar el tamaño"],["centrar","al centrar y guardar"]],
  ficha:[
   {id:"f1",t:"La página",ayuda:"Tamaño del papel y dónde se cambia.",q:[
     ["¿Cuánto mide una hoja A4?",["21 × 29,7 cm","10 × 15 cm","30 × 40 cm"],0,"Es el tamaño de papel más utilizado."],
     ["¿Dónde cambias el tamaño, la orientación y los márgenes?",["Format › Estil de pàgina…, pestaña Pàgina","Insereix › Imatge…","Fitxer › Guarda"],0,"Todo está en la pestaña Pàgina del Estil de pàgina."]]},
   {id:"f2",t:"La orientación",ayuda:"¿Vertical u horizontal?",q:[
     ["¿Qué orientación eliges para una carta o una invitación?",["Vertical","Horitzontal"],0,"Las cartas, los informes y las fichas suelen ir en vertical."],
     ["¿Y para un horario con muchas columnas?",["Vertical","Horitzontal"],1,"En horizontal caben más columnas."]]},
   {id:"f3",t:"Los márgenes",ayuda:"Los espacios en blanco alrededor.",q:[
     ["¿Qué son los márgenes?",["Los espacios en blanco entre el contenido y el borde de la página","Las líneas de una tabla","El tamaño de la letra"],0,"Hay cuatro: superior, inferior, izquierdo y derecho."],
     ["Quieres separar más el texto del borde. ¿Qué haces?",["Cambio los márgenes en Estil de pàgina","Pulso muchos espacios","Pulso Intro muchas veces"],0,"Los márgenes no se hacen con espacios ni con Intro."]]},
   {id:"f4",t:"Insertar una imagen",ayuda:"El menú y la carpeta.",q:[
     ["¿En qué menú está la opción para insertar una imagen?",["Insereix › Imatge…","Format › Estil de pàgina…","Taula › Insereix una taula…"],0,"Después buscas la carpeta, eliges la imagen y pulsas Obre."],
     ["¿Dónde guardamos las imágenes del proyecto?",["En la carpeta Imagenes del proyecto","En la Paperera","Sueltas en el Escriptori"],0,"Así siempre sabemos dónde están."]]},
   {id:"f5",t:"Tamaño y posición",ayuda:"Para que la imagen quede bien.",q:[
     ["¿Desde dónde cambias el tamaño para que no se deforme?",["Desde un cuadradito de una esquina","Desde un cuadradito de un lado","Desde el centro de la imagen"],0,"Desde la esquina, el ancho y el alto cambian a la vez."],
     ["La imagen ha quedado deformada. ¿Qué haces?",["Ctrl + Z y vuelvo a intentarlo desde una esquina","La dejo así","Borro el documento"],0,"Desfés deja la imagen como estaba."],
     ["Quieres que el texto aparezca al lado de la imagen. ¿Qué cambias?",["El ajuste: botón derecho › Ajusta","El tamaño de la letra","Los márgenes"],0,"El ajuste indica cómo se coloca el texto respecto a la imagen."]]}
  ]};

var DOCNOM="03_Cartel_evento_Lucia.odt", PROY="Proyecto_Evento_Lucia";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var FS=D("",[D("Escriptori"),D("Baixades",[F("OIP-431228604.jpg")]),D("Documents",[D(PROY,[D("Documentos_Writer",[F("01_Datos_evento_Lucia.odt"),F("02_Invitacion_evento_Lucia.odt")]),D("Imagenes",[F("logo_evento.png"),F("moto_clasica.jpg")]),D("Copia_Seguridad",[F("01_Datos_evento_Lucia.odt")])])]),D("Imatges"),D("Paperera")]);
var PAPER={A4:[21,29.7],A5:[14.8,21],A3:[29.7,42],Carta:[21.59,27.94]};
var PG={format:"Carta",orient:"v",m:{e:2,d:2,s:2,i:2}};
var S={u:nuevoUnir(),
  p:{wm:{menu:null,sub:null},dlg:null,tab:"org",msg:"",ok:false,aplicada:false},
  im:{wm:{menu:null,sub:null},fd:null,ins:false,msg:"",ok:false},
  z:{sel:false,frac:0.95,ar:4/3,hist:[],msg:"",ok:false},
  c:{wm:{menu:null,sub:null},centrada:false,guardado:false,msg:"",ok:false}};
var ARR_IMG=null;

var MOTO='<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="display:block;width:100%;height:100%"><defs><linearGradient id="cel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#ffe0a8"/></linearGradient></defs><rect width="400" height="300" fill="url(#cel)"/><circle cx="320" cy="70" r="34" fill="#fff4c2"/><rect y="215" width="400" height="85" fill="#5d4a3a"/><rect y="250" width="400" height="6" fill="#fff" opacity=".7"/><g fill="none" stroke="#222" stroke-width="12"><circle cx="110" cy="210" r="42"/><circle cx="290" cy="210" r="42"/></g><g fill="#c0392b"><path d="M140 170 L230 150 L270 175 L200 190 Z"/><rect x="175" y="138" width="60" height="22" rx="10"/></g><g stroke="#333" stroke-width="8" stroke-linecap="round" fill="none"><path d="M110 210 L160 168 L240 168 L290 210"/><path d="M250 165 L268 128 L290 126"/></g><circle cx="200" cy="200" r="18" fill="#7f8c8d"/></svg>';

/* página */
function dimPag(){var d=PAPER[PG.format]||PAPER.A4;return PG.orient==="h"?[d[1],d[0]]:[d[0],d[1]];}
function pagStyle(){var mm=PG.m,k=14;return "padding:"+(mm.s*k)+"px "+(mm.d*k)+"px "+(mm.i*k)+"px "+(mm.e*k)+"px";}
function okPagina(){return PG.format==="A4"&&PG.orient==="h"&&["e","d","s","i"].every(function(k){return Math.abs(PG.m[k]-1.5)<0.01;});}
function objPagina(){return [["Format <b>A4</b>",PG.format==="A4"],["Orientació <b>Horitzontal</b>",PG.orient==="h"],["Los cuatro márgenes a <b>1,5 cm</b>",["e","d","s","i"].every(function(k){return Math.abs(PG.m[k]-1.5)<0.01;})]];}
function cm(v){return v.toFixed(2).replace(".",",")+" cm";}
function dlgPagina(){
  var st=S.p, d=st.dlg, tabs=[["org","Organitzador"],["pag","Pàgina"],["area","Àrea"],["transp","Transparència"],["cap","Capçalera"],["peu","Peu de pàgina"],["vores","Vores"],["col","Columnes"],["nota","Nota al peu"]];
  var h='<div style="display:flex;flex-wrap:wrap;gap:2px;margin-bottom:8px">'+tabs.map(function(t){return '<button data-act="tab" data-t="'+t[0]+'" style="font:inherit;font-size:13px;padding:4px 8px;border:1px solid #aaa;border-bottom:'+(st.tab===t[0]?"2px solid #1e6fd9":"1px solid #aaa")+';background:'+(st.tab===t[0]?"#fff":"#e9e9e9")+';border-radius:4px 4px 0 0;cursor:pointer">'+t[1]+'</button>';}).join("")+'</div>';
  if(st.tab!=="pag")h+='<div style="background:#fff;border:1px solid #ccc;border-radius:4px;padding:30px 12px;text-align:center;color:#666">'+(st.tab==="org"?"Nom: Estil de pàgina per defecte":"Opciones de «"+tabs.filter(function(t){return t[0]===st.tab;})[0][1]+"»")+'<br><small>Aquí no están el tamaño, la orientación ni los márgenes.</small></div>';
  else{
    var dim=PG.orient==="h"?[(PAPER[d.format]||PAPER.A4)[1],(PAPER[d.format]||PAPER.A4)[0]]:(PAPER[d.format]||PAPER.A4);
    var pw=d.orient==="h"?70:50, ph=d.orient==="h"?50:70;
    dim=d.orient==="h"?[(PAPER[d.format])[1],(PAPER[d.format])[0]]:PAPER[d.format];
    h+='<div style="display:flex;gap:14px;flex-wrap:wrap"><div style="flex:1;min-width:220px"><b>Format del paper</b>'+
      '<label for="pgFormat" style="font-weight:400">Format:</label><select id="pgFormat">'+Object.keys(PAPER).map(function(k){return '<option'+(d.format===k?" selected":"")+'>'+k+'</option>';}).join("")+'</select>'+
      '<div style="margin:6px 0;font-size:14px">Amplada: <b>'+cm(dim[0])+'</b> · Alçada: <b>'+cm(dim[1])+'</b></div>'+
      '<div>Orientació: <label style="display:inline;font-weight:400;margin:0 8px"><input type="radio" name="pgOr" data-act="or" data-v="v"'+(d.orient==="v"?" checked":"")+'> Vertical</label><label style="display:inline;font-weight:400"><input type="radio" name="pgOr" data-act="or" data-v="h"'+(d.orient==="h"?" checked":"")+'> Horitzontal</label></div>'+
      '<b style="display:block;margin-top:8px">Marges</b>'+[["e","Esquerra"],["d","Dreta"],["s","Superior"],["i","Inferior"]].map(function(x){return '<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="width:76px">'+x[1]+':</span><span style="background:#fff;border:1px solid #999;border-radius:4px;padding:2px 8px;min-width:78px">'+cm(d.m[x[0]])+'</span><button data-act="mg" data-k="'+x[0]+'" data-d="-1" style="font:inherit;width:30px;cursor:pointer">−</button><button data-act="mg" data-k="'+x[0]+'" data-d="1" style="font:inherit;width:30px;cursor:pointer">+</button></div>';}).join("")+
      '</div><div style="width:110px;display:flex;align-items:center;justify-content:center"><div style="width:'+pw+'px;height:'+ph+'px;background:#fff;border:1px solid #333;position:relative"><div style="position:absolute;inset:'+(d.m.s*2)+'px '+(d.m.d*2)+'px '+(d.m.i*2)+'px '+(d.m.e*2)+'px;border:1px solid #888"></div></div></div></div>';
  }
  return dialeg("Estil de pàgina: Estil de pàgina per defecte",h,[["pg-cancel","Cancel·la"],["pg-ok","D'acord",1]],"pgdlg");
}
function menuFormat(){return [["text","Text",null,"sub"],["espaiat","Espaiat",null,"sub"],["alinea","Alinea el text",null,"sub"],"-",["clona","Clona la formatació"],["neteja","Neteja la formatació directa","Ctrl+M"],"-",["caracter","Caràcter…"],["paragraf","Paràgraf…"],["llistes","Llistes",null,"sub"],["pics","Pics i numeració…"],"-",["estil","Estil de pàgina…","Maj+Alt+P"]];}
function subVacio(){return [["x","(no lo necesitamos)",null,"off"]];}
function cartel(img){
  return '<p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:30px;font-weight:700;text-align:center;margin:0">KDD49 VALENCIA</p>'+
    '<p class="w-p" style="text-align:center;font-size:17px">Sábado 14 de marzo · Circuito de Cheste</p>'+(img||'<p class="w-p"><span class="w-cur"></span></p>')+
    '<p class="w-p" style="text-align:center;font-family:\'Liberation Sans\',Arial,sans-serif;font-size:20px;font-weight:700">¡Te esperamos!</p>';
}
function imgHTML(op){
  var z=S.z, h='<div class="w-p" style="text-align:'+(S.c.centrada?"center":"left")+'"><span id="imgW" data-act="img" style="display:inline-block;position:relative;vertical-align:top;width:'+(z.frac*100).toFixed(1)+'%;aspect-ratio:'+z.ar.toFixed(3)+';cursor:'+(op&&op.mover?"move":"pointer")+'">'+MOTO;
  if(op&&op.handles&&z.sel){
    [["nw",0,0],["n",50,0],["ne",100,0],["e",100,50],["se",100,100],["s",50,100],["sw",0,100],["w",0,50]].forEach(function(x){
      h+='<span data-h="'+x[0]+'" style="position:absolute;left:'+x[1]+'%;top:'+x[2]+'%;width:14px;height:14px;margin:-7px 0 0 -7px;background:#1e6fd9;border:2px solid #fff;box-shadow:0 0 0 1px #1e6fd9;cursor:'+x[0]+'-resize"></span>';
    });
  }
  return h+'</span></div>';
}

/* paso 4: tamaño */
function deforme(){return Math.abs(S.z.ar-4/3)/(4/3)>0.04;}
function okMida(){return !deforme()&&S.z.frac>=0.35&&S.z.frac<=0.62;}
function iniArr(e){
  var h=e.target.closest("[data-h]");if(!h)return;
  e.preventDefault();
  var w=document.getElementById("imgW"),pag=document.querySelector(".w-pag"),cs=getComputedStyle(pag);
  var inner=pag.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
  ARR_IMG={h:h.getAttribute("data-h"),x:e.clientX,y:e.clientY,w:w.offsetWidth,ht:w.offsetHeight,inner:inner,frac:S.z.frac,ar:S.z.ar};
}
function calcArr(e){
  var a=ARR_IMG,dx=e.clientX-a.x,dy=e.clientY-a.y,h=a.h,w=a.w,ht=a.ht;
  var sx=h.indexOf("e")>=0?1:h.indexOf("w")>=0?-1:0, sy=h.indexOf("s")>=0?1:h.indexOf("n")>=0?-1:0;
  if(sx&&sy){var nw=Math.max(40,w+sx*dx);w=nw;ht=nw/a.ar;}
  else if(sx){w=Math.max(40,w+sx*dx);}
  else if(sy){ht=Math.max(30,ht+sy*dy);}
  return {frac:Math.min(1,w/a.inner),ar:w/ht};
}
function moverArr(e){
  if(!ARR_IMG)return;
  var r=calcArr(e),el=document.getElementById("imgW");if(!el)return;
  el.style.width=(r.frac*100).toFixed(1)+"%";el.style.aspectRatio=r.ar.toFixed(3);
}
function finArr(e){
  if(!ARR_IMG)return;
  var r=calcArr(e),z=S.z,esq=ARR_IMG.h.length===2;ARR_IMG=null;
  if(Math.abs(r.frac-z.frac)<0.005&&Math.abs(r.ar-z.ar)<0.005){render();return;}
  z.hist.push([z.frac,z.ar]);z.frac=r.frac;z.ar=r.ar;
  if(deforme()){intento("mida",false);error("mida");z.msg="😬 ¡La imagen se ha <b>deformado</b>! Has arrastrado desde un <b>lado</b>. Pulsa <b>Ctrl + Z</b> (o el botón ↶) y hazlo desde una <b>esquina</b>.";z.ok=false;}
  else if(okMida()){intento("mida",true);z.msg="✔ <b>"+elogio(3)+"</b> Tamaño perfecto y sin deformar: has arrastrado desde una <b>esquina</b>.";z.ok=true;}
  else if(z.frac>0.62){z.msg="Bien, sin deformar. Pero todavía es <b>demasiado grande</b>: hazla más pequeña.";z.ok=true;}
  else{z.msg="Sin deformar, pero ahora es <b>demasiado pequeña</b>. Hazla un poco más grande.";z.ok=true;}
  render();
}
function desferMida(){
  var z=S.z;if(!z.hist.length){z.msg="No hay nada que deshacer.";z.ok=false;return;}
  var v=z.hist.pop();z.frac=v[0];z.ar=v[1];
  z.msg=deforme()?"Has deshecho un cambio, pero sigue deformada. Pulsa <b>Ctrl + Z</b> otra vez.":"✔ <b>Desfés</b> ha dejado la imagen como estaba. Ahora arrastra desde una <b>esquina</b>.";z.ok=!deforme();
}

/* paso 3: insertar */
function abrirImatge(){var im=S.im;if(im.ins){im.msg="✔ La imagen ya está insertada. Pulsa <b>Siguiente</b>.";im.ok=true;return;}
  im.fd=fdNuevo({fs:FS,path:["Baixades"],modo:"obri",titulo:"Insereix una imatge",filtro:function(n){return /\.(png|jpe?g)$/i.test(n.n);}});im.msg="";}
function imatgeOk(st){
  var im=S.im, cur=fsNodo(FS,st.path), n=st.sel?fsHijo(cur,st.sel):null;
  if(!n||n.d){st.msg="Primero pulsa sobre una imagen para seleccionarla.";return;}
  if(n.n==="OIP-431228604.jpg"){st.msg="Esa imagen está en <b>Baixades</b> y su nombre no dice nada. Busca en la carpeta <b>Imagenes</b> de tu proyecto.";intento("imatge",false);error("imatge");return;}
  if(n.n==="logo_evento.png"){st.msg="El logo lo usaremos en la UP02. Para el cartel queremos la foto <b>moto_clasica.jpg</b>.";intento("imatge",false);error("imatge");return;}
  intento("imatge",true);im.ins=true;im.fd=null;im.msg="✔ <b>"+elogio(1)+"</b> La imagen ya está en el cartel. ¡Pero es enorme! En el siguiente paso la haremos más pequeña.";im.ok=true;
}

/* paso 5: centrar y guardar */
function guardarC(){
  var c=S.c;
  if(!c.centrada){c.msg="Antes de guardar, <b>centra</b> la imagen.";c.ok=false;return;}
  if(c.guardado)return;
  c.guardado=true;intento("guardar",true);c.msg="✔ <b>"+elogio(5)+"</b> ¡Cartel terminado y guardado!";c.ok=true;
  finPractica(["Página: A4, horizontal, márgenes de 1,5 cm","Imagen insertada desde Imagenes: moto_clasica.jpg","Tamaño cambiado sin deformar: "+Math.round(S.z.frac*100)+" % del ancho","Imagen centrada y documento guardado"]);
}

PRACTICA=[
 {t:"1. Las palabras clave",ayuda:"Pulsa un <b>nombre</b> y después su <b>descripción</b>.",
  unir:{st:S.u,clave:"conceptos",items:[
    ["a4","A4","El tamaño de papel más usado: 21 × 29,7 cm."],
    ["vertical","Vertical","La página es más alta que ancha."],
    ["horitz","Horitzontal","La página es más ancha que alta. También se llama apaisada."],
    ["marges","Marges","Los espacios en blanco entre el contenido y el borde de la página."],
    ["controls","Controladores de tamaño","Los cuadraditos que salen alrededor de una imagen seleccionada."]]},
  html:function(){var u=this.unir;return unirChips(u)+unirRecs(u)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 {t:"2. La página del cartel",ayuda:"Abre <b>Format › Estil de pàgina…</b> y ve a la pestaña <b>Pàgina</b>. El cartel irá en <b>A4</b>, en orientación <b>Horitzontal</b> y con los cuatro márgenes a <b>1,5 cm</b>. Pulsa <b>D'acord</b>.",
  wm:S.p.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Format"?menuFormat():null;},
  onMenuMal:function(m){S.p.msg="En el menú <b>"+m+"</b> no está. Las opciones de la página están en <b>Format</b>.";S.p.ok=false;error("pagina");},
  onMenu:function(k){var st=S.p;if(k==="estil"){st.dlg={format:PG.format,orient:PG.orient,m:{e:PG.m.e,d:PG.m.d,s:PG.m.s,i:PG.m.i}};st.tab="org";st.msg="";}else{st.msg="Esa opción no cambia la página. Busca <b>Estil de pàgina…</b> al final del menú.";st.ok=false;error("pagina");}},
  onAct:function(a,b){
    var st=S.p,d=st.dlg;if(!d)return;
    if(a==="tab"){st.tab=b.getAttribute("data-t");}
    else if(a==="or"){d.orient=b.getAttribute("data-v");}
    else if(a==="mg"){var k=b.getAttribute("data-k");d.m[k]=Math.max(0,Math.round((d.m[k]+0.5*+b.getAttribute("data-d"))*100)/100);}
    else if(a==="pg-cancel"){st.dlg=null;st.msg="Has cancelado: la página no ha cambiado.";st.ok=false;}
    else if(a==="pg-ok"){
      PG.format=d.format;PG.orient=d.orient;PG.m=d.m;st.dlg=null;st.aplicada=true;
      if(okPagina()){intento("pagina",true);st.msg="✔ <b>"+elogio(2)+"</b> Página lista: A4, horizontal y márgenes de 1,5 cm. Fíjate en cómo ha cambiado la forma de la página.";st.ok=true;}
      else{intento("pagina",false);error("pagina");var f=objPagina().filter(function(x){return !x[1];}).map(function(x){return x[0];});st.msg="Casi. Todavía falta: "+f.join(", ")+". Vuelve a abrir <b>Format › Estil de pàgina…</b>";st.ok=false;}
    }
  },
  onInput:function(e){if(e.target.id==="pgFormat"&&S.p.dlg){S.p.dlg.format=e.target.value;return e.type==="change";}return false;},
  html:function(){
    var st=S.p;
    return writer({titulo:DOCNOM,menus:!st.dlg,horiz:PG.orient==="h",pagStyle:pagStyle(),pagina:cartel(),paraules:12,dialeg:st.dlg?dlgPagina():""})+
      '<p style="margin:8px 0 0;color:#6b6258;font-size:16px">Página actual: <b>'+PG.format+'</b> · '+(PG.orient==="h"?"Horitzontal":"Vertical")+' · márgenes '+cm(PG.m.e)+'</p>'+objetivo(objPagina())+msg(st.msg,st.ok);
  },ok:okPagina},
 {t:"3. Insertar la imagen",ayuda:"El cursor está en la línea vacía. Abre <b>Insereix › Imatge…</b> (o el botón 🖼). Busca <b>Documents › "+PROY+" › Imagenes</b>, elige <b>moto_clasica.jpg</b> y pulsa <b>Obre</b>.",
  wm:S.im.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Insereix"?[["salt","Salt de pàgina","Ctrl+Retorn"],["mes","Més salts",null,"sub"],"-",["imatge","Imatge…"],["diagrama","Diagrama…"],["multi","Multimèdia",null,"sub"],"-",["forma","Forma",null,"sub"]]:null;},
  onMenuMal:function(m){S.im.msg="En el menú <b>"+m+"</b> no está. Para añadir algo al documento, mira en <b>Insereix</b>.";S.im.ok=false;error("imatge");},
  onMenu:function(k){if(k==="imatge")abrirImatge();else{S.im.msg="Esa opción no inserta una imagen. Busca <b>Imatge…</b>";S.im.ok=false;error("imatge");}},
  onTb:function(k){if(k==="imatge")abrirImatge();},
  fd:function(){return S.im.fd;},fdOk:imatgeOk,fdCancel:function(){S.im.fd=null;S.im.msg="Has cancelado. Vuelve a abrir <b>Insereix › Imatge…</b>";S.im.ok=false;},
  html:function(){
    var im=S.im;
    var h=writer({titulo:DOCNOM,menus:!im.fd&&!im.ins,horiz:true,pagStyle:pagStyle(),pagina:cartel(im.ins?imgHTML():""),paraules:12,mod:im.ins,dialeg:im.fd?fdHTML(im.fd):""});
    return h+objetivo([["Imagen <b>moto_clasica.jpg</b> insertada",im.ins]])+msg(im.msg,im.ok);
  },ok:function(){return S.im.ins;}},
 {t:"4. El tamaño de la imagen",ayuda:"Haz <b>clic</b> en la imagen para seleccionarla. Arrastra un cuadradito de una <b>esquina</b> hacia dentro hasta que ocupe más o menos la <b>mitad</b> del ancho. Si se deforma, pulsa <b>Ctrl + Z</b>.",
  onAct:function(a){if(a==="img"&&!S.z.sel){S.z.sel=true;S.z.msg="Ahora tiene <b>controladores de tamaño</b> (los cuadraditos azules). Arrastra uno de una <b>esquina</b>.";S.z.ok=true;}else if(a==="img")return false;},
  onClic:function(e,t){if(t.closest(".w-pag")&&!t.closest("#imgW")&&S.z.sel){S.z.sel=false;return true;}return false;},
  onDown:iniArr,onMove:moverArr,onUp:finArr,
  onTb:function(k){if(k==="desfes")desferMida();},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"){e.preventDefault();desferMida();return true;}return false;},
  html:function(){
    var z=S.z;
    var h=writer({titulo:DOCNOM,horiz:true,pagStyle:pagStyle(),pagina:cartel(imgHTML({handles:true})),paraules:12,mod:true});
    return h+objetivo([["Sin deformar",!deforme()],["Más o menos la mitad del ancho ("+Math.round(z.frac*100)+" %)",z.frac>=0.35&&z.frac<=0.62]])+msg(z.msg,z.ok);
  },ok:okMida},
 {t:"5. Centrar y guardar",ultimo:true,ayuda:"Haz clic en la imagen y pulsa el botón <b>Alineació al centre</b> (☰) de la barra de herramientas. Después guarda con <b>Ctrl + S</b> o el botón 💾.",
  wm:S.c.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Fitxer"?[["obri","Obri…","Ctrl+O"],"-",["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"]]:null;},
  onMenuMal:function(m){S.c.msg="Para centrar usa el botón ☰ de la barra de herramientas. Para guardar, el menú <b>Fitxer</b>.";S.c.ok=false;},
  onMenu:function(k){if(k==="guarda")guardarC();else if(k==="anomena"){S.c.msg="El cartel ya tiene nombre: usa <b>Guarda</b> (Ctrl + S).";S.c.ok=false;}},
  onAct:function(a){if(a==="img"){S.z.sel=true;S.c.msg=S.c.centrada?"":"Imagen seleccionada. Ahora pulsa <b>Alineació al centre</b> (☰).";S.c.ok=true;}},
  onClic:function(e,t){if(t.closest(".w-pag")&&!t.closest("#imgW")&&S.z.sel){S.z.sel=false;return true;}return false;},
  onTb:function(k){
    var c=S.c;
    if(k==="centra"){if(!S.z.sel){c.msg="Primero haz <b>clic en la imagen</b> para seleccionarla.";c.ok=false;error("centrar");return;}c.centrada=true;intento("centrar",true);c.msg="✔ <b>"+elogio(2)+"</b> Imagen centrada. Ahora guarda con <b>Ctrl + S</b>.";c.ok=true;}
    else if(k==="esquerra"||k==="dreta"){if(!S.z.sel){c.msg="Primero haz clic en la imagen.";c.ok=false;return;}c.centrada=false;c.msg="Así queda a un lado. Para el cartel queremos el botón <b>Alineació al centre</b> (☰).";c.ok=false;error("centrar");}
    else if(k==="guarda")guardarC();
  },
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){e.preventDefault();guardarC();return true;}return false;},
  entrar:function(){S.z.sel=false;},
  html:function(){
    var c=S.c;
    var h=writer({titulo:DOCNOM,menus:true,horiz:true,pagStyle:pagStyle(),fmt:{al:c.centrada?"c":"e"},pagina:cartel(imgHTML({handles:true})),paraules:12,mod:!c.guardado});
    h+=objetivo([["Imagen centrada",c.centrada],["Cartel guardado",c.guardado]]);
    return h+(c.guardado?msg(c.msg,true)+bloqueFinPractica():msg(c.msg,c.ok));
  },ok:function(){return S.c.guardado;}}
];
