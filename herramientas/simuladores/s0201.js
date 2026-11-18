CFG={id:"S02.01",slug:"s0201",nombre:"Ampliamos la tabla del programa",app:"📝 Writer virtual",
  aprendido:["Añadir una columna en el lugar correcto con Taula › Insereix › Columnes abans / després.","Añadir filas encima o debajo con Files damunt / Files davall.","Eliminar una fila con Taula › Suprimeix › Files.","Fusionar celdas para hacer un título que ocupe toda la tabla.","Cambiar el ancho de las columnas arrastrando la línea que las separa."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>Programa_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo Programa_evento_Nombre.odt con la tabla del programa ampliada: columna Día, filas correctas, título fusionado y columnas con el ancho adecuado.",
  errores:[["menu","al unir las opciones"],["columna","al añadir la columna"],["files","al añadir y quitar filas"],["fusio","al fusionar el título"],["ample","al cambiar el ancho"]],
  ficha:[
   {id:"f1",t:"Pensar la tabla",ayuda:"Cuenta antes de crear.",q:[
     ["Necesitas una fila de encabezados y seis actividades con cuatro datos cada una. ¿Qué tabla insertas?",["4 columnas y 7 filas","6 columnas y 4 filas","4 columnas y 6 filas"],0,"Cuatro datos = cuatro columnas. Seis actividades + encabezados = siete filas."],
     ["¿Qué tecla usas para pasar a la celda siguiente?",["Tab","Intro","Espacio"],0,"Y con Mayús + Tab vuelves a la anterior."]]},
   {id:"f2",t:"Filas y columnas",ayuda:"El menú Taula › Insereix.",q:[
     ["El cursor está en la columna Lugar. Quieres una columna nueva a su derecha. ¿Qué eliges?",["Columnes després","Columnes abans","Files davall"],0,"Després = a la derecha de la columna donde está el cursor."],
     ["El cursor está en la fila de Comida. Quieres una fila nueva encima. ¿Qué eliges?",["Files damunt","Files davall","Columnes abans"],0,"Damunt = encima; davall = debajo."]]},
   {id:"f3",t:"Eliminar",ayuda:"Borrar el texto no es lo mismo que quitar la fila.",q:[
     ["Seleccionas una fila y pulsas Supr. ¿Qué pasa?",["Se borra el contenido, pero la fila sigue ahí","Desaparece la fila","Se borra toda la tabla"],0,"Para quitar la fila: Taula › Suprimeix › Files."],
     ["Antes de eliminar una fila, ¿qué haces?",["Compruebo que no tiene datos necesarios","Nada, la borro","Guardo una copia en PDF"],0,"Y si te equivocas, Ctrl + Z."]]},
   {id:"f4",t:"Fusionar y dividir",ayuda:"Unir y separar celdas.",q:[
     ["¿Para qué sirve fusionar celdas?",["Para convertir varias celdas en una, por ejemplo para un título","Para borrar una columna","Para cambiar el color"],0,"Así el título ocupa todo el ancho de la tabla."],
     ["¿Dónde está la opción para fusionar?",["Taula › Fusiona les cel·les","Format › Estil de pàgina…","Insereix › Imatge…"],0,"Primero seleccionas las celdas; después, Fusiona les cel·les."]]},
   {id:"f5",t:"El tamaño de las columnas",ayuda:"Cada columna, el espacio que necesita.",q:[
     ["¿Qué columna necesita más espacio?",["La de las descripciones o actividades","La de las horas","Todas igual"],0,"Una hora ocupa poco; una descripción, mucho."],
     ["¿Cómo haces más ancha una columna?",["Arrastro la línea que la separa de la siguiente","Pulso Intro muchas veces","Pongo espacios"],0,"Coloca el ratón sobre la línea, espera a que cambie el puntero y arrastra."],
     ["¿Cómo haces más espacio dentro de una fila?",["Arrastro su borde inferior","Pulso Intro muchas veces dentro de la celda","Escribo puntos"],0,"No creamos espacio con Intro."]]}
  ]};

var DOCNOM="Programa_evento_Lucia.odt";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var T=tbNueva(["Actividad","Lugar","Hora"],[["Presentación","Salón principal","10:00"],["Exhibición de motos","Pista central","11:00"],["Taller de mecánica (CANCELADO)","Carpa 2","12:00"],["Comida","Carpa","14:00"],["Entrega de premios","Escenario","18:00"]],[17,47,36]);
T.vores="tot";T.rows[0].forEach(function(c){c.b=true;c.al="c";});
var TS={sel:null,cur:{r:1,c:0},arr:null}, ARRC=null;
var S={u:nuevoUnir(),
  col:{wm:{menu:null,sub:null},hecho:false,msg:"",ok:false},
  fil:{wm:{menu:null,sub:null},borrada:false,anadida:false,msg:"",ok:false},
  fus:{wm:{menu:null,sub:null},fila:false,fusion:false,msg:"",ok:false},
  amp:{wm:{menu:null,sub:null},guardado:false,msg:"",ok:false}};

function menuTaula(sub,conFus){
  if(sub==="ins")return [["fdamunt","Files damunt"],["fdavall","Files davall"],"-",["cabans","Columnes abans"],["cdespres","Columnes després"]];
  if(sub==="sup")return [["sfiles","Files"],["scols","Columnes"],["staula","Taula"]];
  if(sub==="sel")return [["selt","Taula"],["self","Fila"],["selc","Columna"],["selcel","Cel·la"]];
  if(sub==="mida")return [["x","(no lo necesitamos)",null,"off"]];
  return [["insereix","Insereix una taula…","Ctrl+F12"],["ins","Insereix",null,"sub"],["sup","Suprimeix",null,"sub"],["sel","Selecciona",null,"sub"],["mida","Mida",null,"sub"],"-",["fus","Fusiona les cel·les",null,conFus?null:"off"],["div","Divideix les cel·les…",null,"off"],"-",["prop","Propietats…",null,"off"]];
}
function pagina(op){return '<p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:22px;font-weight:700;text-align:center">KDD49 VALENCIA</p><p class="w-p" style="text-align:center">Programa de actividades</p>'+tbHTML(T,ext2({cur:TS.cur,sel:TS.sel},op||{}))+'<p class="w-p"></p>';}
function ventana(st,op){return writer(ext2({titulo:DOCNOM,menus:true,pagina:pagina(op),paraules:40,mod:true},{}))+'';}
function colNom(c){var h=T.rows.filter(function(f){return !f[0].span||f[0].span===1;})[0];return h[c]?h[c].t:"";}
function filaCab(){for(var r=0;r<T.rows.length;r++){if(T.rows[r][0].t==="Actividad")return r;}return 0;}
function clicCur(e,t){var p=tbClic(t);if(p){TS.cur=p;TS.sel=null;return true;}return false;}
function nombreCol(c){var r=filaCab();return T.rows[r][c]?T.rows[r][c].t:"";}

/* paso 2: columna */
function opCol(k){
  var s=S.col, c=TS.cur.c, idx;
  if(s.hecho){s.msg="✔ Ya tienes la columna <b>Día</b>.";s.ok=true;return;}
  if(k==="cdespres")idx=c+1;else if(k==="cabans")idx=c;
  else if(k==="fdamunt"||k==="fdavall"){s.msg="Eso añadiría una <b>fila</b>. Necesitamos una <b>columna</b>.";s.ok=false;error("columna");intento("columna",false);return;}
  else{s.msg="Esa opción no añade columnas.";s.ok=false;error("columna");return;}
  if(idx!==2){
    var izq=nombreCol(idx-1)||"el borde", der=nombreCol(idx)||"el borde";
    s.msg="La columna nueva aparecería entre <b>"+izq+"</b> y <b>"+der+"</b>. Queremos <b>Día</b> entre <b>Lugar</b> y <b>Hora</b>: haz clic en una celda de <b>Lugar</b> y elige <b>Columnes després</b>.";s.ok=false;error("columna");intento("columna",false);return;
  }
  T.rows.forEach(function(f,r){var v=r===0?"Día":"Sábado";var c2=tbCelda(v,r===0?{b:true,al:"c"}:{});f.splice(2,0,c2);});
  T.cols=[17,33,22,28];TS.cur={r:0,c:2};s.hecho=true;intento("columna",true);
  s.msg="✔ <b>"+elogio(2)+"</b> Columna nueva entre Lugar y Hora. Hemos escrito <b>Día</b> y <b>Sábado</b> por ti.";s.ok=true;
}

/* paso 3: filas */
function idxCancel(){for(var r=0;r<T.rows.length;r++)if(/CANCELADO/.test(T.rows[r][0].t))return r;return -1;}
function idxPres(){for(var r=0;r<T.rows.length;r++)if(T.rows[r][0].t==="Presentación")return r;return -1;}
function opFila(k){
  var f=S.fil, r=TS.cur.r;
  if(k==="sfiles"){
    if(f.borrada&&idxCancel()<0){f.msg="Ya has quitado la fila cancelada.";f.ok=true;return;}
    if(r!==idxCancel()){f.msg=r===0?"¡Alto! Esa es la fila de <b>encabezados</b>.":"Antes de eliminar, comprueba la fila: <b>"+esc(T.rows[r][0].t)+"</b> es necesaria. Haz clic en la fila del <b>taller cancelado</b>.";f.ok=false;error("files");intento("borrar",false);return;}
    T.rows.splice(r,1);f.borrada=true;TS.cur={r:Math.min(r,T.rows.length-1),c:0};intento("borrar",true);
    f.msg="✔ <b>"+elogio(3)+"</b> Fila del taller cancelado eliminada."+(f.anadida?"":" Ahora añade la fila de la acreditación.");f.ok=true;return;
  }
  if(k==="fdamunt"||k==="fdavall"){
    if(f.anadida){f.msg="Ya has añadido la fila de la acreditación.";f.ok=true;return;}
    var idx=k==="fdamunt"?r:r+1, obj=idxPres();
    if(idx!==obj){f.msg="La fila nueva quedaría "+(idx<=0?"encima de los <b>encabezados</b>":"debajo de <b>"+esc(T.rows[idx-1][0].t)+"</b>")+". La acreditación es lo <b>primero</b>: tiene que ir justo encima de <b>Presentación</b>.";f.ok=false;error("files");intento("anadir",false);return;}
    T.rows.splice(idx,0,["Acreditación","Entrada","Sábado","09:30"].map(function(v){return tbCelda(v);}));TS.cur={r:idx,c:0};f.anadida=true;intento("anadir",true);
    f.msg="✔ <b>"+elogio(5)+"</b> Fila añadida encima de Presentación. Hemos escrito la <b>acreditación</b> por ti."+(f.borrada?"":" Ahora quita la fila del taller cancelado.");f.ok=true;return;
  }
  f.msg=(k==="cabans"||k==="cdespres"||k==="scols")?"Hoy en este paso solo cambiamos <b>filas</b>.":k==="staula"?"¡Cuidado! Eso borraría <b>toda la tabla</b>.":"Esa opción no nos sirve ahora.";f.ok=false;error("files");
}

/* paso 4: fusionar */
function okFus(){return S.fus.fusion;}
function opFus(k){
  var s=S.fus, r=TS.cur.r;
  if(k==="fdamunt"||k==="fdavall"){
    if(s.fila){s.msg="Ya tienes la fila del título. Ahora selecciónala y fusiona.";s.ok=true;return;}
    var idx=k==="fdamunt"?r:r+1;
    if(idx!==0){s.msg="El título tiene que ir <b>encima de todo</b>. Haz clic en la fila de <b>encabezados</b> y elige <b>Files damunt</b>.";s.ok=false;error("fusio");return;}
    T.rows.splice(0,0,T.cols.map(function(){return tbCelda("");}));s.fila=true;TS.cur={r:0,c:0};TS.sel=null;
    s.msg="✔ Fila vacía arriba. Ahora <b>selecciónala entera</b> (arrastra de la primera celda a la última o <b>Taula › Selecciona › Fila</b>) y elige <b>Taula › Fusiona les cel·les</b>.";s.ok=true;return;
  }
  if(k==="self"){TS.sel={r1:r,c1:0,r2:r,c2:T.cols.length-1};s.msg=r===0&&s.fila?"Fila seleccionada. Ahora <b>Taula › Fusiona les cel·les</b>.":"Has seleccionado otra fila.";s.ok=r===0&&s.fila;return;}
  if(k==="fus"){
    if(!s.fila){s.msg="Primero añade una fila vacía encima de los encabezados.";s.ok=false;return;}
    var sl=TS.sel;
    if(!sl){s.msg="Primero <b>selecciona</b> las celdas que quieres fusionar.";s.ok=false;error("fusio");return;}
    var r1=Math.min(sl.r1,sl.r2),r2=Math.max(sl.r1,sl.r2),c1=Math.min(sl.c1,sl.c2),c2=Math.max(sl.c1,sl.c2);
    if(r1!==0||r2!==0){s.msg="Has seleccionado celdas de otras filas. Selecciona <b>solo la fila vacía</b> de arriba.";s.ok=false;error("fusio");intento("fusio",false);return;}
    if(c1!==0||c2!==T.cols.length-1){s.msg="Has seleccionado solo una parte de la fila. El título tiene que ocupar <b>todo el ancho</b>: selecciona las <b>"+T.cols.length+"</b> celdas.";s.ok=false;error("fusio");intento("fusio",false);return;}
    T.rows[0].forEach(function(c,k2){if(k2>0)c.hid=true;});
    var t0=T.rows[0][0];t0.span=T.cols.length;t0.t="PROGRAMA DEL EVENTO";t0.b=true;t0.al="c";t0.bg="#ffe0b2";
    s.fusion=true;TS.sel=null;intento("fusio",true);s.msg="✔ <b>"+elogio(4)+"</b> Las cuatro celdas son ahora <b>una sola</b>. Hemos escrito el título por ti.";s.ok=true;return;
  }
  if(k==="selt"||k==="selc"||k==="selcel"){s.msg="Así no seleccionas la fila entera. Usa <b>Selecciona › Fila</b>.";s.ok=false;return;}
  s.msg="Esa opción no nos sirve ahora.";s.ok=false;
}

/* paso 5: ancho */
function okAmp(){return T.cols[0]>=29&&T.cols.every(function(w){return w>=11;});}
function iniCol(e){
  var h=e.target.closest("[data-cb]");if(!h)return false;e.preventDefault();
  var tb=document.querySelector(".w-pag .tbw table");
  ARRC={i:+h.getAttribute("data-cb"),x:e.clientX,w0:T.cols.slice(),tw:tb.offsetWidth};return true;
}
function calcCol(e){var a=ARRC,i=a.i,d=(e.clientX-a.x)/a.tw*100,s=a.w0[i]+a.w0[i+1],n=Math.max(8,Math.min(s-8,a.w0[i]+d));var w=a.w0.slice();w[i]=n;w[i+1]=s-n;return w;}
function movCol(e){
  if(!ARRC)return;var w=calcCol(e);
  Array.prototype.forEach.call(document.querySelectorAll(".w-pag col"),function(c,k){c.style.width=w[k]+"%";});
  var acc=0;Array.prototype.forEach.call(document.querySelectorAll(".w-pag [data-cb]"),function(h,k){acc+=w[k];h.style.left="calc("+acc+"% - 6px)";});
}
function finCol(e){
  if(!ARRC)return;var w=calcCol(e);ARRC=null;T.cols=w.map(function(x){return Math.round(x*10)/10;});
  var a=S.amp;
  if(okAmp()){intento("ample",true);a.msg="✔ <b>"+elogio(6)+"</b> Ahora <b>Actividad</b> tiene espacio y los textos se leen en menos líneas. Guarda con <b>Ctrl + S</b>.";a.ok=true;}
  else if(T.cols.some(function(x){return x<11;})){a.msg="Una columna se ha quedado <b>demasiado estrecha</b> y su texto no se lee. Devuélvele algo de espacio.";a.ok=false;error("ample");}
  else{a.msg="La columna <b>Actividad</b> todavía es estrecha ("+Math.round(T.cols[0])+" %). Arrastra la primera línea un poco más a la derecha.";a.ok=false;}
  render();
}
function guardarA(){var a=S.amp;if(!okAmp()){a.msg="Antes de guardar, haz más ancha la columna <b>Actividad</b>.";a.ok=false;return;}if(a.guardado)return;a.guardado=true;a.msg="✔ <b>"+elogio(1)+"</b> ¡Tabla ampliada y guardada!";a.ok=true;
  finPractica(["Columna Día añadida entre Lugar y Hora","Fila cancelada eliminada y fila Acreditación añadida encima de Presentación","Título PROGRAMA DEL EVENTO en una fila con las celdas fusionadas","Columna Actividad ensanchada al "+Math.round(T.cols[0])+" %","Documento guardado"]);}

function pasoTaula(st,on,extra){
  return ext2({wm:st.wm,
    menuItems:function(m,sub){if(m==="Taula")return menuTaula(sub,paso===3&&!!TS.sel);if(m==="Fitxer"&&paso===4)return [["guarda","Guarda","Ctrl+S"]];return null;},
    onMenuMal:function(m){st.msg="Todo lo de las tablas está en el menú <b>Taula</b>.";st.ok=false;error(CFG.errores[paso][0]);},
    onMenu:function(k){on(k);},
    onClic:function(e,t){return clicCur(e,t);},
    onKey:function(e){if(e.key==="Delete"&&tbClic(document.activeElement)===null){st.msg="<b>Supr</b> solo borraría el <b>contenido</b> de las celdas. Usa el menú <b>Taula</b>.";st.ok=false;return true;}return false;}},extra||{});
}

PRACTICA=[
 {t:"1. Las opciones del menú Taula",ayuda:"Pulsa una <b>opción</b> y después lo que <b>hace</b>.",
  unir:{st:S.u,clave:"menu",items:[
    ["fdamunt","Insereix › Files damunt","Añade una fila encima de la fila donde está el cursor."],
    ["cdespres","Insereix › Columnes després","Añade una columna a la derecha de la columna donde está el cursor."],
    ["sfiles","Suprimeix › Files","Elimina la fila donde está el cursor."],
    ["fus","Fusiona les cel·les","Convierte varias celdas seleccionadas en una sola."],
    ["div","Divideix les cel·les…","Separa una celda en varias partes."]]},
  html:function(){var u=this.unir;return unirChips(u)+unirRecs(u)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 pasoTaula(S.col,opCol,{t:"2. Una columna nueva",ayuda:"Queremos una columna <b>Día</b> entre <b>Lugar</b> y <b>Hora</b>. Haz clic en una celda de <b>Lugar</b> y elige <b>Taula › Insereix › Columnes després</b>.",
  html:function(){return writer({titulo:DOCNOM,menus:true,pagina:pagina(),paraules:40,mod:S.col.hecho})+objetivo([["Columna <b>Día</b> entre Lugar y Hora",S.col.hecho]])+msg(S.col.msg,S.col.ok);},
  ok:function(){return S.col.hecho;}}),
 pasoTaula(S.fil,opFila,{t:"3. Quitar y añadir filas",ayuda:"El <b>taller de mecánica</b> se ha cancelado: quita su fila con <b>Taula › Suprimeix › Files</b>. Después añade una fila para la <b>acreditación</b> justo <b>encima de Presentación</b> (<b>Taula › Insereix › Files damunt</b>).",
  html:function(){var f=S.fil;return writer({titulo:DOCNOM,menus:true,pagina:pagina(),paraules:40,mod:true})+objetivo([["Fila cancelada eliminada",f.borrada],["Fila <b>Acreditación</b> encima de Presentación",f.anadida]])+msg(f.msg,f.ok);},
  ok:function(){return S.fil.borrada&&S.fil.anadida;}}),
 pasoTaula(S.fus,opFus,{t:"4. Un título con celdas fusionadas",ayuda:"Haz clic en la fila de <b>encabezados</b> y añade una fila encima (<b>Files damunt</b>). Selecciona esa fila entera y elige <b>Taula › Fusiona les cel·les</b>.",
  entrar:function(){TS.sel=null;},
  onDown:function(e){if(tbDown(TS,e)){}},onMove:function(e){tbMove(TS,T,e);},onUp:function(){if(tbUp(TS))render();},
  onClic:function(){return false;},
  html:function(){var s=S.fus;return writer({titulo:DOCNOM,menus:true,pagina:pagina(),paraules:42,mod:true})+objetivo([["Fila vacía encima de los encabezados",s.fila],["Celdas <b>fusionadas</b> en una",s.fusion]])+msg(s.msg,s.ok);},
  ok:okFus}),
 pasoTaula(S.amp,function(k){if(k==="guarda")guardarA();},{t:"5. El ancho de las columnas",ultimo:true,ayuda:"La columna <b>Actividad</b> es tan estrecha que los textos ocupan varias líneas. Arrastra la <b>línea azul</b> que la separa de <b>Lugar</b> hacia la derecha. Después guarda con <b>Ctrl + S</b>.",
  entrar:function(){TS.sel=null;TS.cur={r:-1,c:-1};},
  onDown:iniCol,onMove:movCol,onUp:finCol,onClic:function(){return false;},
  onTb:function(k){if(k==="guarda")guardarA();},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){e.preventDefault();guardarA();return true;}return false;},
  html:function(){var a=S.amp;var h=writer({titulo:DOCNOM,menus:true,pagina:pagina({manecillas:true,cursor:false}),paraules:42,mod:!a.guardado});h+=objetivo([["Columna Actividad más ancha ("+Math.round(T.cols[0])+" %)",okAmp()],["Programa guardado",a.guardado]]);return h+(a.guardado?msg(a.msg,true)+bloqueFinPractica():msg(a.msg,a.ok));},
  ok:function(){return S.amp.guardado;}})
];
