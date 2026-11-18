CFG={id:"S01.06",slug:"s0106",nombre:"Creamos el horario",app:"📝 Writer virtual",
  aprendido:["Reconocer las filas, las columnas, las celdas y los encabezados.","Contar las filas y columnas e insertar una tabla con Taula › Insereix una taula….","Escribir en la tabla y pasar de celda con Tab.","Añadir y eliminar filas desde el menú Taula.","Dar formato a la fila de encabezados."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>04_Horario_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo 04_Horario_evento_Nombre.odt con el horario de tu evento en una tabla y los encabezados con formato.",
  errores:[["partes","al reconocer las partes"],["insertar","al insertar la tabla"],["escribir","al escribir en la tabla"],["files","al añadir y quitar filas"],["format","al dar formato"]],
  ficha:[
   {id:"f1",t:"Las partes de una tabla",ayuda:"Fila, columna, celda y encabezados.",q:[
     ["Un conjunto de celdas colocadas en horizontal es…",["Una fila","Una columna","Un encabezado"],0,"Las filas van de izquierda a derecha."],
     ["Cada uno de los espacios donde escribimos un dato es…",["Una celda","Una página","Un margen"],0,"La celda es donde se cruzan una fila y una columna."],
     ["La primera fila, que explica qué hay en cada columna, es…",["La fila de encabezados","La fila vacía","El título del documento"],0,"Los encabezados ayudan a entender los datos."]]},
   {id:"f2",t:"Contar antes de crear",ayuda:"Piensa cuántas filas y columnas necesitas.",q:[
     ["Tu horario tiene 4 actividades y 3 datos de cada una (actividad, lugar y hora). ¿Qué tabla insertas?",["3 columnas y 5 filas","4 columnas y 3 filas","3 columnas y 4 filas"],0,"Tres datos = tres columnas. Cuatro actividades + la fila de encabezados = cinco filas."],
     ["¿Dónde está la opción para insertar una tabla?",["Taula › Insereix una taula… (Ctrl + F12)","Insereix › Imatge…","Format › Estil de pàgina…"],0,"También tienes el botón ▦ en la barra de herramientas."]]},
   {id:"f3",t:"Escribir en la tabla",ayuda:"Cómo moverse por las celdas.",q:[
     ["¿Qué tecla usas para pasar a la celda siguiente?",["Tab","Espacio","Intro"],0,"Con Mayús + Tab vuelves a la celda anterior."],
     ["Pulsas Tab en la última celda de la tabla. ¿Qué pasa?",["Writer añade una fila nueva","Se borra la tabla","No pasa nada"],0,"Es la forma más rápida de añadir una fila al final."],
     ["¿Por qué no usamos espacios para colocar los datos?",["Porque la información se descoloca","Porque está prohibido","Porque gasta más tinta"],0,"Cada dato va en su celda: así todo queda alineado."]]},
   {id:"f4",t:"Añadir y quitar filas",ayuda:"Desde el menú Taula.",q:[
     ["¿Cómo eliminas una fila de la tabla?",["Taula › Suprimeix › Files","Selecciono la fila y pulso Supr","Pulso Retroceso"],0,"Supr solo borra el contenido: la fila sigue ahí."],
     ["¿Cómo añades una fila debajo de la fila donde está el cursor?",["Taula › Insereix › Files davall","Taula › Suprimeix › Files","Fitxer › Nou"],0,"Files damunt la pondría encima."]]},
   {id:"f5",t:"Formato de la tabla",ayuda:"Para que se lea bien.",q:[
     ["¿Qué formato suele llevar la fila de encabezados?",["Negrita, centrada y con un color de fondo","Cursiva y muy pequeña","Ninguno"],0,"Así se distingue de los datos."],
     ["Una columna es tan estrecha que el texto no se lee. ¿Qué haces?",["Arrastro la línea que separa las columnas","Pongo la letra muy pequeña","Borro la columna"],0,"Cada columna necesita el espacio de su contenido."]]}
  ]};

var DOCNOM="04_Horario_evento_Lucia.odt";
var HEAD=["Actividad","Lugar","Hora"];
var DATOS=[["Presentación","Salón principal","10:00"],["Exhibición de motos","Pista central","11:00"],["Exhibición de motos","Pista central","11:00"],["Comida","Carpa","14:00"]];
var NUEVA=["Entrega de premios","Escenario","18:00"];
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
function celda(t){return {t:t||"",b:false,al:"e",bg:""};}
var T=null, CUR={r:0,c:0}, SELT=null, ARRT=null;
var S={u:nuevoUnir(),
  ins:{wm:{menu:null,sub:null},dlg:null,cols:2,files:2,msg:"",ok:false},
  esc:{msg:"",ok:false},
  fil:{wm:{menu:null,sub:null},borrada:false,anadida:false,msg:"",ok:false},
  fmt:{wm:{menu:null,sub:null},guardado:false,msg:"",ok:false}};

/* tabla */
function tablaHTML(op){
  op=op||{};
  if(!T)return '<p class="w-p"><span class="w-cur"></span></p>';
  return '<table style="border-collapse:collapse;width:100%;font-size:15px;table-layout:fixed">'+T.map(function(fila,r){
    return '<tr>'+fila.map(function(c,k){
      var act=CUR.r===r&&CUR.c===k, sel=enSelT(r,k);
      var st="border:1px solid #333;padding:4px 6px;height:30px;cursor:text;text-align:"+(c.al==="c"?"center":c.al==="d"?"right":"left")+(c.b?";font-weight:700":"")+";background:"+(sel?"#9ec5ff":(c.bg||"#fff"))+(act&&op.cursor!==false?";outline:2px solid #1e6fd9;outline-offset:-3px":"");
      return '<td data-r="'+r+'" data-c="'+k+'" style="'+st+'">'+esc(c.t)+(act&&op.cursor!==false&&!SELT?'<span class="w-cur"></span>':"")+'</td>';
    }).join("")+'</tr>';
  }).join("")+'</table>';
}
function pagina(op){return '<p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:24px;font-weight:700;text-align:center">HORARIO DEL EVENTO</p>'+tablaHTML(op)+'<p class="w-p"></p>';}
function enSelT(r,c){if(!SELT)return false;var r1=Math.min(SELT.r1,SELT.r2),r2=Math.max(SELT.r1,SELT.r2),c1=Math.min(SELT.c1,SELT.c2),c2=Math.max(SELT.c1,SELT.c2);return r>=r1&&r<=r2&&c>=c1&&c<=c2;}
function menuTaula(sub){
  if(sub==="ins")return [["fsobre","Files damunt"],["fsota","Files davall"],"-",["cabans","Columnes abans"],["cdespres","Columnes després"]];
  if(sub==="sup")return [["sfiles","Files"],["scols","Columnes"],["staula","Taula"]];
  if(sub==="sel")return [["selt","Taula"],["self","Fila"],["selc","Columna"],["selcel","Cel·la"]];
  if(sub==="mida")return [["x","(no lo necesitamos)",null,"off"]];
  return [["insereix","Insereix una taula…","Ctrl+F12"],["ins","Insereix",null,"sub"],["sup","Suprimeix",null,"sub"],["sel","Selecciona",null,"sub"],["mida","Mida",null,"sub"],"-",["fus","Fusiona les cel·les",null,"off"],["div","Divideix les cel·les…",null,"off"],"-",["prop","Propietats…",null,"off"]];
}
function clicCelda(t){var td=t.closest("td[data-r]");if(!td||!td.closest(".w-pag"))return null;return {r:+td.getAttribute("data-r"),c:+td.getAttribute("data-c")};}

/* paso 1 */
function tablaPartes(){
  var d=[["Actividad","Lugar","Hora"],["Presentación","Salón principal","10:00"],["Exhibición","Pista central","11:00"],["Comida","Carpa","14:00"]];
  return '<table style="border-collapse:separate;border-spacing:0;width:100%;font-size:16px;table-layout:fixed;margin:6px 0">'+d.map(function(f,r){
    return '<tr>'+f.map(function(c,k){
      var st="border:1px solid #555;padding:6px 8px";
      if(r===0)st+=";background:#ffe082;font-weight:700";
      if(k===2&&r>0)st+=";background:#cfe3ff";
      if(r===2)st+=";box-shadow:inset 0 3px 0 #e53935,inset 0 -3px 0 #e53935"+(k===0?",inset 3px 0 0 #e53935":"")+(k===2?",inset -3px 0 0 #e53935":"");
      if(r===3&&k===1)st+=";outline:4px solid #43a047;outline-offset:-4px";
      return '<td style="'+st+'">'+c+'</td>';
    }).join("")+'</tr>';
  }).join("")+'</table>';
}

/* paso 2: insertar */
function abrirIns(){var s=S.ins;if(T){s.msg="✔ La tabla ya está insertada. Pulsa <b>Siguiente</b>.";s.ok=true;return;}s.dlg=true;s.dmsg="";s.msg="";}
function dlgIns(){
  var s=S.ins, sp=function(id,v){return '<span style="display:inline-flex;align-items:center;gap:4px"><span style="background:#fff;border:1px solid #999;border-radius:4px;padding:3px 10px;min-width:44px;text-align:center;font-weight:700">'+v+'</span><button data-act="sp" data-k="'+id+'" data-d="-1" style="font:inherit;width:30px;cursor:pointer">−</button><button data-act="sp" data-k="'+id+'" data-d="1" style="font:inherit;width:30px;cursor:pointer">+</button></span>';};
  var h='<b>General</b><div style="display:flex;gap:8px;align-items:center;margin:6px 0"><span style="width:84px">Nom:</span><span style="background:#fff;border:1px solid #999;border-radius:4px;padding:3px 10px;flex:1">Taula1</span></div>'+
    '<div style="display:flex;gap:18px;flex-wrap:wrap;margin:8px 0"><div>Columnes: '+sp("cols",s.cols)+'</div><div>Files: '+sp("files",s.files)+'</div></div>'+
    '<b>Estils</b><div style="background:#fff;border:1px solid #ccc;padding:4px 8px;margin-top:4px">Estil de taula per defecte</div>'+msgDlg(s.dmsg);
  return dialeg("Insereix una taula",h,[["ins-cancel","Cancel·la"],["ins-ok","Insereix",1]]);
}
function insertar(){
  var s=S.ins;
  if(s.cols===3&&s.files===5){
    T=[];for(var r=0;r<5;r++){T.push([celda(),celda(),celda()]);}
    CUR={r:0,c:0};s.dlg=null;intento("insertar",true);s.msg="✔ <b>"+elogio(1)+"</b> Tabla de <b>3 columnas</b> y <b>5 filas</b>: una fila para los encabezados y cuatro para las actividades.";s.ok=true;return;
  }
  intento("insertar",false);error("insertar");
  if(s.cols!==3)s.dmsg="Has puesto <b>"+s.cols+" columnas</b>. ¿Cuántos datos hay de cada actividad? (Actividad, Lugar, Hora…)";
  else s.dmsg="Has puesto <b>"+s.files+" filas</b>. Hay 4 actividades… ¿has contado la <b>fila de encabezados</b>?";
}

/* paso 3: escribir */
function okEsc(){return T&&HEAD.every(function(h,k){return T[0][k].t===h;});}
function escribir(v){
  var e=S.esc, c=T[CUR.r][CUR.c];
  if(CUR.r!==0){e.msg="Ya has escrito los encabezados.";e.ok=true;return;}
  if(c.t){e.msg="Esta celda ya tiene texto. Pulsa <b>Tab</b> para pasar a la siguiente.";e.ok=false;error("escribir");intento("escr"+CUR.c,false);return;}
  if(v!==HEAD[CUR.c]){e.msg="En esta columna va <b>"+HEAD[CUR.c]+"</b>. El orden es: Actividad, Lugar, Hora.";e.ok=false;error("escribir");intento("escr"+CUR.c,false);return;}
  c.t=v;intento("escr"+CUR.c,true);
  e.msg=CUR.c<2?"✔ Escrito. Ahora pulsa <b>Tab</b> para pasar a la celda siguiente.":"✔ <b>"+elogio(3)+"</b> ¡Encabezados escritos!";e.ok=true;
}
function tab(atras){
  var e=S.esc;
  if(atras){if(CUR.c>0||CUR.r>0){if(CUR.c>0)CUR.c--;else{CUR.r--;CUR.c=2;}}e.msg="<b>Mayús + Tab</b> vuelve a la celda anterior.";e.ok=true;return;}
  if(CUR.r===0&&!T[0][CUR.c].t){e.msg="Antes de pasar, escribe el encabezado de esta celda: pulsa la palabra correcta.";e.ok=false;return;}
  if(CUR.c<2)CUR.c++;else if(CUR.r<T.length-1){CUR.r++;CUR.c=0;}
  e.msg=okEsc()?"✔ ¡Encabezados escritos!":"Bien: ya estás en la celda siguiente.";e.ok=true;
}

/* paso 4: filas */
function entrarFilas(){if(T&&T.length===5&&!T[1][0].t){DATOS.forEach(function(d,i){d.forEach(function(v,k){T[i+1][k].t=v;});});}CUR={r:1,c:0};SELT=null;}
function esDuplicada(r){return r===3&&!S.fil.borrada;}
function filaUltima(){return T.length-1;}
function anadirFinal(){
  var f=S.fil;
  if(f.anadida){f.msg="Ya has añadido la fila. ¡No hace falta otra!";f.ok=false;return;}
  T.push(NUEVA.map(function(v){return celda(v);}));CUR={r:T.length-1,c:0};f.anadida=true;intento("anadir",true);
  f.msg="✔ <b>"+elogio(5)+"</b> Fila añadida al final. Hemos escrito <b>"+NUEVA[0]+"</b> por ti.";f.ok=true;
}
function opFila(k){
  var f=S.fil, r=CUR.r;
  if(k==="sfiles"){
    if(r===0){f.msg="¡Alto! Esa es la fila de <b>encabezados</b>: la necesitamos.";f.ok=false;error("files");intento("borrar",false);return;}
    if(!esDuplicada(r)){f.msg="Antes de eliminar, comprueba la fila. <b>"+esc(T[r][0].t)+"</b> es necesaria. Busca la fila que está <b>repetida</b> y haz clic en una de sus celdas.";f.ok=false;error("files");intento("borrar",false);return;}
    T.splice(r,1);f.borrada=true;CUR={r:Math.min(r,T.length-1),c:0};intento("borrar",true);
    f.msg="✔ <b>"+elogio(2)+"</b> Fila repetida eliminada con <b>Taula › Suprimeix › Files</b>.";f.ok=true;return;
  }
  if(k==="fsota"){if(r!==filaUltima()){f.msg="La fila nueva aparecería debajo de <b>"+esc(T[r][0].t||"esta fila")+"</b>. Para añadirla al final, haz clic primero en una celda de la <b>última fila</b>.";f.ok=false;error("files");return;}anadirFinal();return;}
  if(k==="fsobre"){f.msg="<b>Files damunt</b> pondría la fila nueva <b>encima</b>. Queremos añadirla al final: usa <b>Files davall</b> desde la última fila.";f.ok=false;error("files");return;}
  if(k==="scols"||k==="cabans"||k==="cdespres"){f.msg="Hoy no cambiamos las columnas: solo las filas.";f.ok=false;error("files");return;}
  if(k==="staula"){f.msg="¡Cuidado! Eso eliminaría <b>toda la tabla</b>.";f.ok=false;error("files");return;}
  f.msg="Esa opción no nos sirve ahora.";f.ok=false;
}
function okFilas(){return S.fil.borrada&&S.fil.anadida;}

/* paso 5: formato */
function selCeldas(){var l=[];if(!SELT)return l;T.forEach(function(f,r){f.forEach(function(c,k){if(enSelT(r,k))l.push(c);});});return l;}
function selSoloCab(){if(!SELT)return false;return Math.min(SELT.r1,SELT.r2)===0&&Math.max(SELT.r1,SELT.r2)===0;}
function cabCompleta(){return selSoloCab()&&Math.min(SELT.c1,SELT.c2)===0&&Math.max(SELT.c1,SELT.c2)===2;}
function objFmt(){var h=T?T[0]:[];return [["Encabezados en <b>negreta</b>",h.every(function(c){return c.b;})],["<b>Centrados</b>",h.every(function(c){return c.al==="c";})],["Con <b>color de fondo</b>",h.every(function(c){return !!c.bg;})],["Horario <b>guardado</b>",S.fmt.guardado]];}
function okFmt(){return objFmt().every(function(x){return x[1];});}
function aplicarFmt(k){
  var f=S.fmt, l=selCeldas();
  if(!l.length){f.msg="Primero <b>selecciona</b> la fila de encabezados: arrastra desde <b>Actividad</b> hasta <b>Hora</b>, o usa <b>Taula › Selecciona › Fila</b>.";f.ok=false;error("format");return;}
  if(!selSoloCab()){f.msg="Has seleccionado también filas de datos. Selecciona <b>solo la fila de encabezados</b>.";f.ok=false;error("format");return;}
  if(!cabCompleta()){f.msg="Has seleccionado solo una parte de la fila. Selecciona las <b>tres</b> celdas de encabezado.";f.ok=false;return;}
  if(k==="negreta"){var t=l.every(function(c){return c.b;});l.forEach(function(c){c.b=!t;});f.msg=t?"Has quitado la negrita. Vuelve a pulsar <b>N</b>.":"✔ Encabezados en <b>negreta</b>.";f.ok=!t;}
  else if(k==="centra"){l.forEach(function(c){c.al="c";});f.msg="✔ Encabezados <b>centrados</b>.";f.ok=true;}
  else if(k==="esquerra"||k==="dreta"){l.forEach(function(c){c.al=k==="dreta"?"d":"e";});f.msg="Así no quedan centrados. Usa <b>Alineació al centre</b> (☰).";f.ok=false;}
  else if(k==="fons"){l.forEach(function(c){c.bg="#ffd8a8";});f.msg="✔ Encabezados con <b>color de fondo</b>.";f.ok=true;}
  else return;
  var hecho=objFmt().slice(0,3).every(function(x){return x[1];});
  if(hecho)f.msg="✔ <b>"+elogio(4)+"</b> ¡Encabezados listos! Ahora guarda con <b>Ctrl + S</b>.";
}
function guardarF(){
  var f=S.fmt;
  if(!objFmt().slice(0,3).every(function(x){return x[1];})){f.msg="Antes de guardar, termina el formato de los encabezados.";f.ok=false;return;}
  if(f.guardado)return;
  f.guardado=true;intento("guardar",true);f.msg="✔ <b>"+elogio(6)+"</b> ¡Horario terminado y guardado!";f.ok=true;
  finPractica(["Tabla insertada: 3 columnas y 5 filas","Encabezados escritos con Tab: "+HEAD.join(", "),"Fila repetida eliminada y fila «"+NUEVA[0]+"» añadida al final","Encabezados en negreta, centrados y con color de fondo","Documento guardado"]);
}
function tool2Fmt(){
  var l=selCeldas(), b=l.length&&l.every(function(c){return c.b;}), al=l.length&&l.every(function(c){return c.al==="c";});
  return '<div class="w-tool"><span class="w-cb" style="min-width:128px">Contingut de la taula ▾</span><span class="w-cb" style="min-width:120px">Liberation Serif ▾</span><span class="w-cb">12 pt ▾</span>'+
    '<button class="w-b big'+(b?" on":"")+'" data-tb="negreta" title="Negreta">N</button><button class="w-b big" data-tb="cursiva" title="Cursiva" style="font-style:italic;font-weight:400">C</button><span class="w-sep"></span>'+
    '<button class="w-b" data-tb="esquerra" title="Alinea a l\'esquerra">⫷</button><button class="w-b'+(al?" on":"")+'" data-tb="centra" title="Alineació al centre">☰</button><button class="w-b" data-tb="dreta" title="Alinea a la dreta">⫸</button><span class="w-sep"></span>'+
    '<button class="w-b" data-tb="fons" title="Color de fons de la cel·la" style="padding:0 8px">🎨 <span style="display:inline-block;width:14px;height:10px;background:#ffd8a8;border:1px solid #999"></span></button></div>';
}

PRACTICA=[
 {t:"1. Las partes de una tabla",ayuda:"Pulsa un <b>nombre</b> y después el <b>color</b> que lo marca en la tabla.",
  unir:{st:S.u,clave:"partes",items:[
    ["encab","Encabezados","La primera fila: explica qué datos hay en cada columna. (Amarillo)"],
    ["fila","Fila","Celdas colocadas en horizontal. (Rojo)"],
    ["columna","Columna","Celdas colocadas en vertical. (Azul)"],
    ["celda","Celda","Cada espacio de la tabla donde escribimos un dato. (Verde)"]]},
  html:function(){
    var u=this.unir, st=u.st;
    var tg=[["encab","🟨 Lo amarillo"],["fila","🟥 Lo rojo"],["columna","🟦 Lo azul"],["celda","🟩 Lo verde"]];
    return unirChips(u)+tablaPartes()+'<div class="recs">'+tg.map(function(x){var it=unirItem(u,x[0]);return '<button class="rec'+(st.done[x[0]]?" vis":"")+(st.tgt===x[0]?" sel":"")+'" data-u-t="'+x[0]+'">'+(st.done[x[0]]?'<b>✔ '+it[1]+'</b>':"")+x[1]+'</button>';}).join("")+'</div>'+msg(st.msg,st.ok);
  },ok:function(){return unirOk(this.unir);}},
 {t:"2. Insertar la tabla",ayuda:"El horario tendrá <b>4 actividades</b> y de cada una pondremos <b>Actividad, Lugar y Hora</b>. Abre <b>Taula › Insereix una taula…</b> (o Ctrl + F12), pon las columnas y filas que necesitas y pulsa <b>Insereix</b>.",
  wm:S.ins.wm,
  menuItems:function(m,sub){return m==="Taula"?menuTaula(sub):null;},
  onMenuMal:function(m){S.ins.msg="En el menú <b>"+m+"</b> no está. Todo lo de las tablas está en el menú <b>Taula</b>.";S.ins.ok=false;error("insertar");},
  onMenu:function(k){if(k==="insereix")abrirIns();else{S.ins.msg="Primero hay que <b>crear</b> la tabla: <b>Insereix una taula…</b>";S.ins.ok=false;}},
  onTb:function(k){if(k==="taula")abrirIns();},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key==="F12"){e.preventDefault();abrirIns();return true;}return false;},
  onAct:function(a,b){
    var s=S.ins;
    if(a==="sp"){var k=b.getAttribute("data-k");s[k]=Math.max(1,Math.min(10,s[k]+ +b.getAttribute("data-d")));s.dmsg="";}
    else if(a==="ins-cancel"){s.dlg=null;s.msg="Has cancelado. Vuelve a abrir <b>Taula › Insereix una taula…</b>";s.ok=false;}
    else if(a==="ins-ok")insertar();
  },
  html:function(){var s=S.ins;return writer({titulo:DOCNOM,menus:!s.dlg&&!T,horiz:true,pagina:pagina({cursor:false}),paraules:3,dialeg:s.dlg?dlgIns():""})+objetivo([["Tabla de <b>3 columnas</b> y <b>5 filas</b>",!!T]])+msg(s.msg,s.ok);},
  ok:function(){return !!T;}},
 {t:"3. Escribir con Tab",ayuda:"Escribe los encabezados en la primera fila: <b>Actividad, Lugar y Hora</b>. Pulsa la palabra para escribirla en la celda marcada y después pulsa <b>Tab</b> para pasar a la siguiente.",
  entrar:function(){if(T&&!okEsc()){CUR={r:0,c:0};}},
  onAct:function(a,b){if(a==="pal")escribir(b.getAttribute("data-v"));else if(a==="tab")tab(false);else if(a==="stab")tab(true);else if(a==="esp"){S.esc.msg="Con la <b>barra espaciadora</b> no se cambia de celda: solo se añaden espacios. Usa <b>Tab</b>.";S.esc.ok=false;error("escribir");}},
  onKey:function(e){if(e.key==="Tab"){e.preventDefault();tab(e.shiftKey);return true;}if(e.key===" "&&e.target===document.body){e.preventDefault();S.esc.msg="Con la <b>barra espaciadora</b> no se cambia de celda. Usa <b>Tab</b>.";S.esc.ok=false;return true;}return false;},
  onClic:function(e,t){var p=clicCelda(t);if(p&&p.r===0){CUR=p;return true;}return false;},
  html:function(){
    var h=writer({titulo:DOCNOM,horiz:true,pagina:pagina(),paraules:3,mod:true});
    if(!okEsc())h+='<div class="chips">'+["Hora","Actividad","Lugar"].map(function(v){return '<button class="chip" data-act="pal" data-v="'+v+'">✍️ '+v+'</button>';}).join("")+'</div><div class="chips"><button class="btn" data-act="tab">⇥ Tab</button><button class="btn" data-act="stab">Mayús + Tab</button><button class="btn" data-act="esp">␣ Espacio</button></div>';
    return h+objetivo(HEAD.map(function(x,k){return [x,T&&T[0][k].t===x];}))+msg(S.esc.msg,S.esc.ok);
  },ok:okEsc},
 {t:"4. Añadir y quitar filas",ayuda:"Hemos escrito las actividades, pero hay una fila <b>repetida</b>. Haz clic en una de sus celdas y elige <b>Taula › Suprimeix › Files</b>. Después añade una fila al <b>final</b>: clic en la última fila y <b>Taula › Insereix › Files davall</b> (o <b>Tab</b> en la última celda).",
  wm:S.fil.wm, entrar:entrarFilas,
  menuItems:function(m,sub){return m==="Taula"?menuTaula(sub):null;},
  onMenuMal:function(m){S.fil.msg="Las opciones de las filas están en el menú <b>Taula</b>.";S.fil.ok=false;error("files");},
  onMenu:function(k){if(k==="insereix"){S.fil.msg="Ya tenemos la tabla: no hace falta otra.";S.fil.ok=false;}else opFila(k);},
  onClic:function(e,t){var p=clicCelda(t);if(p){CUR=p;return true;}return false;},
  onKey:function(e){
    var f=S.fil;
    if(e.key==="Tab"){e.preventDefault();if(CUR.r===T.length-1&&CUR.c===2)anadirFinal();else{if(CUR.c<2)CUR.c++;else if(CUR.r<T.length-1){CUR.r++;CUR.c=0;}}return true;}
    if(e.key==="Delete"){e.preventDefault();f.msg="<b>Supr</b> solo borraría el <b>contenido</b>: la fila seguiría ahí. Para quitarla usa <b>Taula › Suprimeix › Files</b>.";f.ok=false;error("files");return true;}
    return false;
  },
  html:function(){
    var f=S.fil;
    var h=writer({titulo:DOCNOM,menus:true,horiz:true,pagina:pagina(),paraules:30,mod:true});
    h+='<div class="chips"><button class="btn" data-act="tab4">⇥ Tab</button></div>';
    return h+objetivo([["Fila repetida eliminada",f.borrada],["Fila «"+NUEVA[0]+"» al final",f.anadida]])+msg(f.msg,f.ok);
  },
  onAct:function(a){if(a==="tab4"){if(CUR.r===T.length-1&&CUR.c===2)anadirFinal();else{if(CUR.c<2)CUR.c++;else if(CUR.r<T.length-1){CUR.r++;CUR.c=0;}S.fil.msg="Tab pasa a la celda siguiente. En la <b>última celda</b> de la tabla, añade una fila nueva.";S.fil.ok=true;}}},
  ok:okFilas},
 {t:"5. Encabezados con formato",ultimo:true,ayuda:"Selecciona la fila de encabezados <b>arrastrando</b> desde <b>Actividad</b> hasta <b>Hora</b> (o clic en ella y <b>Taula › Selecciona › Fila</b>). Ponla en <b>negreta</b>, <b>centrada</b> (☰) y con <b>color de fondo</b> (🎨). Después guarda con <b>Ctrl + S</b>.",
  wm:S.fmt.wm, entrar:function(){SELT=null;CUR={r:0,c:0};},
  menuItems:function(m,sub){if(m==="Taula")return menuTaula(sub);if(m==="Fitxer")return [["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"]];return null;},
  onMenuMal:function(m){S.fmt.msg="Para seleccionar la fila usa <b>Taula › Selecciona › Fila</b>. Para guardar, <b>Fitxer</b>.";S.fmt.ok=false;},
  onMenu:function(k){
    var f=S.fmt;
    if(k==="self"){SELT={r1:CUR.r,c1:0,r2:CUR.r,c2:2};f.msg=CUR.r===0?"Fila de encabezados seleccionada. Ahora aplica el formato.":"Has seleccionado una fila de datos. Haz clic primero en una celda de la <b>fila de encabezados</b>.";f.ok=CUR.r===0;}
    else if(k==="selt"||k==="selc"||k==="selcel"){f.msg="Así no seleccionas la fila de encabezados. Usa <b>Selecciona › Fila</b>.";f.ok=false;}
    else if(k==="guarda")guardarF();
    else if(k==="anomena"){f.msg="El horario ya tiene nombre: usa <b>Guarda</b>.";f.ok=false;}
    else{f.msg="Esa opción no nos sirve ahora.";f.ok=false;}
  },
  onTb:function(k){if(k==="guarda")guardarF();else aplicarFmt(k);},
  onKey:function(e){var k=e.key.toLowerCase();if(!(e.ctrlKey||e.metaKey))return false;if(k==="s"){e.preventDefault();guardarF();return true;}if(k==="b"){e.preventDefault();aplicarFmt("negreta");return true;}return false;},
  onDown:function(e){var p=clicCelda(e.target);if(!p)return;e.preventDefault();ARRT={r:p.r,c:p.c,mov:false};CUR=p;SELT=null;},
  onMove:function(e){if(!ARRT)return;var p=e.target.closest&&clicCelda(e.target);if(!p)return;if(p.r===ARRT.r&&p.c===ARRT.c&&!ARRT.mov)return;ARRT.mov=true;SELT={r1:ARRT.r,c1:ARRT.c,r2:p.r,c2:p.c};Array.prototype.forEach.call(document.querySelectorAll(".w-pag td[data-r]"),function(td){var r=+td.getAttribute("data-r"),c=+td.getAttribute("data-c");td.style.background=enSelT(r,c)?"#9ec5ff":(T[r][c].bg||"#fff");});},
  onUp:function(){if(!ARRT)return;ARRT=null;render();},
  html:function(){
    var f=S.fmt;
    var h=writer({titulo:DOCNOM,menus:true,horiz:true,tool2:tool2Fmt(),pagina:pagina(),paraules:30,mod:!f.guardado});
    h+=objetivo(objFmt());
    return h+(f.guardado?msg(f.msg,true)+bloqueFinPractica():msg(f.msg,f.ok));
  },ok:okFmt}
];
