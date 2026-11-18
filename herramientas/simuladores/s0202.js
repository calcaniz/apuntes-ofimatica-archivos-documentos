CFG={id:"S02.02",slug:"s0202",nombre:"Damos formato a la tabla",app:"📝 Writer virtual",
  aprendido:["Decidir qué datos se alinean a la izquierda y cuáles se centran.","Destacar los encabezados con negrita, centrado y color de fondo.","Elegir colores de fondo y de letra con buen contraste.","Poner bordes con Taula › Propietats…, pestaña Vores.","Usar filas alternas para seguir los datos con la vista."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>Programa_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo Programa_evento_Nombre.odt con la tabla formateada: encabezados destacados, datos bien alineados, bordes visibles y filas alternas.",
  errores:[["alinear","al decidir la alineación"],["encap","con los encabezados"],["dades","al alinear los datos"],["vores","con los bordes"],["alternes","con las filas alternas"]],
  ficha:[
   {id:"f1",t:"Los encabezados",ayuda:"La primera fila de la tabla.",q:[
     ["¿Qué formato suelen llevar los encabezados?",["Negrita, centrados y con color de fondo","Cursiva y muy pequeños","Sin formato"],0,"Así se distinguen enseguida de los datos."],
     ["Antes de dar formato a los encabezados…",["Los selecciono","Guardo el documento","Borro la tabla"],0,"Si no seleccionas bien, el formato se aplica solo a una celda."]]},
   {id:"f2",t:"Alinear",ayuda:"¿Izquierda o centro?",q:[
     ["¿Qué datos centramos?",["Horas, fechas y números","Nombres de actividades","Descripciones largas"],0,"Los datos cortos y numéricos quedan mejor centrados."],
     ["¿Cómo alineamos los nombres y las descripciones?",["A la izquierda","Centrados","A la derecha"],0,"El texto largo se lee mejor alineado a la izquierda."]]},
   {id:"f3",t:"Colores y contraste",ayuda:"Que se lea bien.",q:[
     ["Has puesto un fondo azul oscuro. ¿De qué color pones la letra?",["Blanca","Azul oscuro","Negra"],0,"Fondo oscuro, letra clara; fondo claro, letra oscura."],
     ["¿Para qué sirven las filas alternas (blanco, gris, blanco…)?",["Para seguir cada fila con la vista","Para gastar más tinta","Para que la tabla ocupe menos"],0,"Van muy bien en tablas largas."]]},
   {id:"f4",t:"Los bordes",ayuda:"Las líneas de la tabla.",q:[
     ["¿Dónde cambias los bordes de una tabla?",["Taula › Propietats…, pestaña Vores","Format › Estil de pàgina…","Insereix › Imatge…"],0,"También con el botón Vores de la barra Taula."],
     ["Para una tabla sencilla, ¿qué bordes ponemos?",["Exteriores e interiores, de grosor moderado","Ninguno","Solo el exterior, muy grueso"],0,"Así se distinguen bien todas las celdas."]]},
   {id:"f5",t:"La tabla en la página",ayuda:"Que no se salga.",q:[
     ["Tu tabla se sale de la página. ¿Qué puedes hacer?",["Ajustar el ancho de las columnas o poner la página en horizontal","Dejarla así","Borrar los encabezados"],0,"También puedes reducir un poco la letra o quitar información innecesaria."],
     ["Quieres dar el mismo formato a varias celdas rápidamente. ¿Qué usas?",["Clona la formatació (el pincel)","Desfés","Fitxer › Guarda"],0,"Aplicas el formato a una celda y lo pasas a las demás con el pincel."]]}
  ]};

var DOCNOM="Programa_evento_Lucia.odt";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var T=tbNueva(["Actividad","Lugar","Día","Hora"],[["Acreditación","Entrada","Sábado","09:30"],["Presentación","Salón principal","Sábado","10:00"],["Exhibición de motos","Pista central","Sábado","11:00"],["Comida","Carpa","Sábado","14:00"],["Entrega de premios","Escenario","Sábado","18:00"]],[32,28,18,22]);
T.vores="guia";
var TS={sel:null,cur:{r:0,c:0},arr:null};
var FONS=[["#ffd8a8","Taronja clar"],["#1f3a68","Blau fosc"],["#fff3a0","Groc clar"],["#e6e6e6","Gris clar"]];
var LLETRA=[["#111111","Negre"],["#ffffff","Blanc"],["#1f3a68","Blau fosc"]];
var OSCURO={"#1f3a68":1};
var S={cls:{},clsMsg:"",clsOk:false,pal:null,
  enc:{wm:{menu:null,sub:null},msg:"",ok:false},
  dad:{wm:{menu:null,sub:null},msg:"",ok:false},
  vor:{wm:{menu:null,sub:null},dlg:null,tab:"taula",msg:"",ok:false},
  alt:{wm:{menu:null,sub:null},guardado:false,msg:"",ok:false}};

var CLS=[["act","Nombres de actividades","e"],["lug","Lugares","e"],["hor","Horas","c"],["dia","Días y fechas","c"],["pun","Puntuaciones","c"],["des","Descripciones largas","e"]];
function okCls(){return CLS.every(function(x){return S.cls[x[0]]===x[2];});}

function pagina(op){return '<p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:22px;font-weight:700;text-align:center">PROGRAMA DEL EVENTO</p>'+tbHTML(T,ext2({cur:TS.cur,sel:TS.sel},op||{}))+'<p class="w-p"></p>';}
function tool2(){
  var l=tbSelCeldas(T,TS.sel), b=l.length&&l.every(function(c){return c.b;}), al=l.length&&l.every(function(c){return c.al==="c";})?"c":l.length&&l.every(function(c){return c.al==="e";})?"e":"";
  return '<div class="w-tool"><span class="w-cb" style="min-width:128px">Contingut de la taula ▾</span><span class="w-cb" style="min-width:110px">Liberation Serif ▾</span>'+
    '<button class="w-b big'+(b?" on":"")+'" data-tb="negreta" title="Negreta">N</button><span class="w-sep"></span>'+
    '<button class="w-b'+(al==="e"?" on":"")+'" data-tb="esquerra" title="Alinea a l\'esquerra">⫷</button><button class="w-b'+(al==="c"?" on":"")+'" data-tb="centra" title="Alineació al centre">☰</button><button class="w-b" data-tb="dreta" title="Alinea a la dreta">⫸</button><span class="w-sep"></span>'+
    '<button class="w-b" data-tb="lletra" title="Color de la lletra" style="padding:0 8px"><b style="border-bottom:3px solid #c00">A</b> ▾</button>'+
    '<button class="w-b" data-tb="fons" title="Color de fons de les cel·les de taula" style="padding:0 8px">🎨 ▾</button></div>';
}
function ventana(st,op,extra){return writer(ext2({titulo:DOCNOM,menus:true,tool2:tool2(),pagina:pagina(op),paraules:34,mod:true},extra||{}))+(S.pal?"":"");}
function menuTaula(sub){
  if(sub==="sel")return [["selt","Taula"],["self","Fila"],["selc","Columna"],["selcel","Cel·la"]];
  if(sub==="ins"||sub==="sup"||sub==="mida")return [["x","(no lo necesitamos)",null,"off"]];
  return [["insereix","Insereix una taula…","Ctrl+F12"],["ins","Insereix",null,"sub"],["sup","Suprimeix",null,"sub"],["sel","Selecciona",null,"sub"],["mida","Mida",null,"sub"],"-",["fus","Fusiona les cel·les",null,"off"],["div","Divideix les cel·les…",null,"off"],"-",["prop","Propietats…"]];
}
function seleccionar(k){
  var r=TS.cur.r,c=TS.cur.c,n=T.cols.length;
  if(k==="self")TS.sel={r1:r,c1:0,r2:r,c2:n-1};
  else if(k==="selc")TS.sel={r1:0,c1:c,r2:T.rows.length-1,c2:c};
  else if(k==="selt")TS.sel={r1:0,c1:0,r2:T.rows.length-1,c2:n-1};
  else if(k==="selcel")TS.sel={r1:r,c1:c,r2:r,c2:c};
}
function contrasteOk(c){var osc=!!OSCURO[c.bg];var fgClaro=c.fg==="#ffffff";return osc?fgClaro:!fgClaro;}

/* paso 2: encabezados */
function okEnc(){var h=T.rows[0];return h.every(function(c){return c.b&&c.al==="c"&&c.bg&&contrasteOk(c);});}
function objEnc(){var h=T.rows[0];return [["<b>Negreta</b>",h.every(function(c){return c.b;})],["<b>Centrados</b>",h.every(function(c){return c.al==="c";})],["<b>Color de fondo</b>",h.every(function(c){return !!c.bg;})],["Buen <b>contraste</b>",h.every(function(c){return c.bg&&contrasteOk(c);})]];}
/* paso 3: datos */
function okDad(){for(var r=1;r<T.rows.length;r++){var f=T.rows[r];if(f[0].al!=="e"||f[1].al!=="e"||f[2].al!=="c"||f[3].al!=="c")return false;}return true;}
function colAl(c,v){for(var r=1;r<T.rows.length;r++)if(T.rows[r][c].al!==v)return false;return true;}
/* paso 5: alternas */
var GRIS="#e6e6e6";
function okAlt(){for(var r=1;r<T.rows.length;r++){var bg=T.rows[r][0].bg||"";if(!T.rows[r].every(function(c){return (c.bg||"")===bg;}))return false;if(bg&&bg!==GRIS)return false;if(r>1&&bg===(T.rows[r-1][0].bg||""))return false;}return true;}

function aplicar(k,v){
  var i=paso, st=[null,S.enc,S.dad,S.vor,S.alt][i], l=tbSelCeldas(T,TS.sel);
  if(!l.length){st.msg="Primero <b>selecciona</b> las celdas: arrastra con el ratón o usa <b>Taula › Selecciona</b>.";st.ok=false;error(CFG.errores[i][0]);return;}
  var r1=Math.min(TS.sel.r1,TS.sel.r2), r2=Math.max(TS.sel.r1,TS.sel.r2);
  if(i===1&&(r1!==0||r2!==0)){st.msg="Has seleccionado también filas de datos. Selecciona <b>solo la fila de encabezados</b>.";st.ok=false;error("encap");return;}
  if(i===4&&r1===0){st.msg="Los encabezados ya tienen su color. Selecciona solo <b>filas de datos</b>.";st.ok=false;error("alternes");return;}
  if(k==="negreta"){var t=l.every(function(c){return c.b;});l.forEach(function(c){c.b=!t;});}
  else if(k==="centra")l.forEach(function(c){c.al="c";});
  else if(k==="esquerra")l.forEach(function(c){c.al="e";});
  else if(k==="dreta")l.forEach(function(c){c.al="d";});
  else if(k==="pbg")l.forEach(function(c){c.bg=v;});
  else if(k==="pfg")l.forEach(function(c){c.fg=v;});
  evaluar(k,v,l);
}
function evaluar(k,v,l){
  var i=paso,st=[null,S.enc,S.dad,S.vor,S.alt][i];
  if(i===1){
    if(okEnc()){intento("encap",true);st.msg="✔ <b>"+elogio(3)+"</b> ¡Encabezados destacados y fáciles de leer!";st.ok=true;return;}
    if(k==="pbg"&&OSCURO[v]&&!l.every(function(c){return c.fg==="#ffffff";})){st.msg="Con un fondo <b>oscuro</b>, la letra negra casi no se lee. Cambia el <b>Color de la lletra</b> a <b>Blanc</b>.";st.ok=false;intento("contraste",false);error("encap");return;}
    if(k==="pfg"&&!l.every(contrasteOk)){st.msg=v==="#ffffff"?"Letra <b>blanca</b> sobre un fondo <b>claro</b>: no se lee. Usa letra oscura.":"Letra oscura sobre un fondo <b>oscuro</b>: no se lee. Usa letra <b>blanca</b>.";st.ok=false;error("encap");return;}
    if(k==="dreta"||k==="esquerra"){st.msg="Los encabezados van <b>centrados</b>.";st.ok=false;error("encap");return;}
    st.msg="Bien. Mira el objetivo: ¿qué falta?";st.ok=true;return;
  }
  if(i===2){
    if(okDad()){intento("dades",true);st.msg="✔ <b>"+elogio(4)+"</b> Días y horas centrados; actividades y lugares a la izquierda.";st.ok=true;return;}
    if(k==="centra"&&(!colAl(0,"e")||!colAl(1,"e"))){st.msg="Las <b>actividades</b> y los <b>lugares</b> son textos: van a la <b>izquierda</b>. Selecciónalos y pulsa ⫷.";st.ok=false;error("dades");return;}
    st.msg="Bien. Mira el objetivo: ¿qué falta?";st.ok=true;return;
  }
  if(i===4){
    if(k!=="pbg"){st.msg="En este paso solo cambiamos el <b>color de fondo</b> de las filas.";st.ok=false;return;}
    if(v!==GRIS){st.msg="Para las filas alternas usamos un color muy suave: <b>Gris clar</b>.";st.ok=false;error("alternes");return;}
    if(okAlt()){intento("alternes",true);st.msg="✔ <b>"+elogio(5)+"</b> Filas alternas: blanco, gris, blanco… Ahora guarda con <b>Ctrl + S</b>.";st.ok=true;return;}
    st.msg="Bien. Recuerda: una fila blanca, una gris, una blanca… Revisa que no haya dos grises seguidas.";st.ok=true;
  }
}

/* paso 4: bordes */
var PRESETS=[["cap","Cap vora"],["ext","Vora exterior"],["hor","Vora exterior i línies horitzontals"],["tot","Vora exterior i totes les línies interiors"]];
var AMPLES=[0.05,0.5,0.75,1.5,2.25,4.5];
function iconoVora(p){var s='<svg width="34" height="34" viewBox="0 0 34 34"><rect x="3" y="3" width="28" height="28" fill="#fff" stroke="'+(p==="cap"?"#ccc":"#222")+'" stroke-width="'+(p==="cap"?1:2.5)+'" stroke-dasharray="'+(p==="cap"?"2 2":"0")+'"/>';
  s+='<line x1="3" y1="17" x2="31" y2="17" stroke="'+(p==="hor"||p==="tot"?"#222":"#ccc")+'" stroke-width="'+(p==="hor"||p==="tot"?2:1)+'" stroke-dasharray="'+(p==="hor"||p==="tot"?"0":"2 2")+'"/>';
  s+='<line x1="17" y1="3" x2="17" y2="31" stroke="'+(p==="tot"?"#222":"#ccc")+'" stroke-width="'+(p==="tot"?2:1)+'" stroke-dasharray="'+(p==="tot"?"0":"2 2")+'"/></svg>';return s;}
function cm(v){return v.toFixed(2).replace(".",",")+" pt";}
function dlgVores(){
  var st=S.vor,d=st.dlg,tabs=[["taula","Taula"],["flux","Flux del text"],["cols","Columnes"],["vores","Vores"],["fons","Fons"]];
  var h='<div style="display:flex;flex-wrap:wrap;gap:2px;margin-bottom:8px">'+tabs.map(function(t){return '<button data-act="tab" data-t="'+t[0]+'" style="font:inherit;font-size:13px;padding:4px 10px;border:1px solid #aaa;border-bottom:'+(st.tab===t[0]?"2px solid #1e6fd9":"1px solid #aaa")+';background:'+(st.tab===t[0]?"#fff":"#e9e9e9")+';border-radius:4px 4px 0 0;cursor:pointer">'+t[1]+'</button>';}).join("")+'</div>';
  if(st.tab!=="vores")h+='<div style="background:#fff;border:1px solid #ccc;border-radius:4px;padding:30px 12px;text-align:center;color:#666">'+(st.tab==="taula"?"Nom: Taula1 · Amplària: 16,00 cm":"Opciones de «"+tabs.filter(function(t){return t[0]===st.tab;})[0][1]+"»")+'<br><small>Aquí no están los bordes.</small></div>';
  else{
    h+='<b>Arranjament de línies</b><div style="margin:4px 0 2px;font-size:14px">Predefinits:</div><div style="display:flex;gap:6px;flex-wrap:wrap">'+PRESETS.map(function(p){return '<button data-act="preset" data-v="'+p[0]+'" title="'+p[1]+'" style="padding:3px;border:2px solid '+(d.vores===p[0]?"#1e6fd9":"#bbb")+';background:'+(d.vores===p[0]?"#e3eefc":"#fff")+';border-radius:4px;cursor:pointer">'+iconoVora(p[0])+'</button>';}).join("")+'</div>'+
      '<div style="font-size:14px;margin:4px 0 8px;color:#333">'+(PRESETS.filter(function(p){return p[0]===d.vores;})[0]||["","—"])[1]+'</div>'+
      '<b>Línia</b><label for="vAmp" style="font-weight:400">Amplària:</label><select id="vAmp">'+AMPLES.map(function(a){return '<option value="'+a+'"'+(d.bw===a?" selected":"")+'>'+cm(a)+'</option>';}).join("")+'</select>';
  }
  return dialeg("Propietats de la taula",h,[["v-cancel","Cancel·la"],["v-ok","D'acord",1]],"vdlg");
}
function okVor(){return T.vores==="tot"&&T.bw>=0.75&&T.bw<=1.5;}
function aplicarVores(){
  var st=S.vor,d=st.dlg;T.vores=d.vores==="cap"?"guia":d.vores;T.bw=d.bw;st.dlg=null;
  if(okVor()){intento("vores",true);st.msg="✔ <b>"+elogio(2)+"</b> Bordes exteriores e interiores, de grosor moderado: ahora se distinguen todas las celdas.";st.ok=true;return;}
  intento("vores",false);error("vores");
  if(d.vores==="cap")st.msg="Sin bordes, las celdas no se distinguen al imprimir. Elige un arreglo con líneas.";
  else if(d.vores==="ext")st.msg="Solo hay borde <b>exterior</b>: dentro no se distinguen las columnas. Elige <b>Vora exterior i totes les línies interiors</b>.";
  else if(d.vores==="hor")st.msg="Faltan las líneas <b>verticales</b> entre columnas. Elige <b>Vora exterior i totes les línies interiors</b>.";
  else if(d.bw<0.75)st.msg="Las líneas son tan finas que casi no se ven. Elige una <b>Amplària</b> de 0,75 o 1,50 pt.";
  else st.msg="Las líneas son <b>demasiado gruesas</b> y llaman más la atención que los datos. Elige 0,75 o 1,50 pt.";
  st.ok=false;
}
function guardarAlt(){var st=S.alt;if(!okAlt()){st.msg="Antes de guardar, termina las filas alternas.";st.ok=false;return;}if(st.guardado)return;st.guardado=true;st.msg="✔ <b>"+elogio(6)+"</b> ¡Tabla con formato y guardada!";st.ok=true;
  finPractica(["Encabezados: negreta, centrados, fondo "+((FONS.filter(function(f){return f[0]===T.rows[0][0].bg;})[0]||["",""])[1])+" con buen contraste","Días y horas centrados; actividades y lugares a la izquierda","Bordes: exterior y todas las líneas interiores, "+cm(T.bw),"Filas alternas en gris claro","Documento guardado"]);}

function pasoFmt(st,extra){
  return ext2({wm:st.wm,
    menuItems:function(m,sub){if(m==="Taula")return menuTaula(sub);if(m==="Fitxer"&&paso===4)return [["guarda","Guarda","Ctrl+S"]];return null;},
    onMenuMal:function(m){st.msg="Las opciones de la tabla están en el menú <b>Taula</b>.";st.ok=false;},
    onMenu:function(k){S.pal=null;if(/^sel/.test(k)){seleccionar(k);st.msg="";return;}if(k==="prop"){st.msg="Las propiedades las usaremos para los <b>bordes</b>. Ahora usa los botones de la barra.";st.ok=false;return;}if(k==="guarda"){guardarAlt();return;}st.msg="Esa opción no nos sirve ahora.";st.ok=false;},
    onTb:function(k){if(k==="fons"){S.pal=S.pal==="pbg"?null:"pbg";return;}if(k==="lletra"){S.pal=S.pal==="pfg"?null:"pfg";return;}S.pal=null;if(k==="guarda"){guardarAlt();return;}if(k==="cursiva"||k==="subratllat")return;aplicar(k);},
    onAct:function(a,b){if(a==="pbg"||a==="pfg"){S.pal=null;aplicar(a,b.getAttribute("data-v"));}},
    onDown:function(e){if(e.target.closest(".desp"))return;if(tbDown(TS,e)){S.pal=null;}},onMove:function(e){tbMove(TS,T,e);},onUp:function(){if(tbUp(TS))render();},
    entrar:function(){TS.sel=null;S.pal=null;}},extra);
}
function conPal(h){
  if(!S.pal)return h;
  var p=S.pal==="pbg"?paleta("pbg",FONS,"Color de fons"):paleta("pfg",LLETRA,"Color de la lletra");
  return h.replace('<div class="w-fons',p+'<div class="w-fons');
}

PRACTICA=[
 {t:"1. ¿Izquierda o centrado?",ayuda:"Para cada tipo de dato, elige cómo lo alinearías en una tabla.",
  html:function(){
    var h='<div class="recs">'+CLS.map(function(x){var v=S.cls[x[0]],ok=v===x[2];
      return '<div class="rec'+(ok?" vis":"")+'" style="cursor:default"><b style="color:var(--texto);font-size:17px">'+(ok?"✔ ":"")+x[1]+'</b><div class="chips" style="margin:6px 0 0"><button class="chip'+(v==="e"?(ok?" vis":" sel"):"")+'" data-act="cls" data-k="'+x[0]+'" data-v="e">⫷ Izquierda</button><button class="chip'+(v==="c"?(ok?" vis":" sel"):"")+'" data-act="cls" data-k="'+x[0]+'" data-v="c">☰ Centrado</button></div></div>';}).join("")+'</div>';
    return h+msg(S.clsMsg,S.clsOk);
  },
  onAct:function(a,b){if(a!=="cls")return;var k=b.getAttribute("data-k"),v=b.getAttribute("data-v"),x=CLS.filter(function(y){return y[0]===k;})[0];S.cls[k]=v;
    if(v===x[2]){intento("cls_"+k,true);S.clsMsg="✔ <b>"+elogio(semilla(k))+"</b> "+(v==="c"?"Los datos cortos y numéricos quedan mejor <b>centrados</b>.":"Los textos se leen mejor alineados a la <b>izquierda</b>.");S.clsOk=true;}
    else{intento("cls_"+k,false);error("alinear");S.clsMsg="¡Casi! "+(x[2]==="c"?"Son datos <b>cortos</b>: quedan mejor centrados.":"Es <b>texto</b>: se lee mejor a la izquierda.");S.clsOk=false;}},
  ok:okCls},
 pasoFmt(S.enc,{t:"2. Los encabezados",ayuda:"Selecciona la fila de encabezados (arrastra de <b>Actividad</b> a <b>Hora</b>). Ponla en <b>negreta</b>, <b>centrada</b> (☰) y con un <b>color de fondo</b> (🎨). Si el fondo es oscuro, cambia el <b>color de la letra</b> (A).",
  html:function(){return conPal(ventana(S.enc))+objetivo(objEnc())+msg(S.enc.msg,S.enc.ok);},ok:okEnc}),
 pasoFmt(S.dad,{t:"3. Alinear los datos",ayuda:"Los <b>días</b> y las <b>horas</b> son datos cortos: selecciona sus celdas (arrastrando, o clic y <b>Taula › Selecciona › Columna</b>) y céntralos. Las actividades y los lugares se quedan a la izquierda.",
  html:function(){return conPal(ventana(S.dad))+objetivo([["Días centrados",colAl(2,"c")],["Horas centradas",colAl(3,"c")],["Actividades y lugares a la izquierda",colAl(0,"e")&&colAl(1,"e")]])+msg(S.dad.msg,S.dad.ok);},ok:okDad}),
 pasoFmt(S.vor,{t:"4. Los bordes",ayuda:"La tabla no tiene bordes y al imprimir no se distinguirán las celdas. Abre <b>Taula › Propietats…</b>, ve a la pestaña <b>Vores</b>, elige <b>Vora exterior i totes les línies interiors</b> y una <b>Amplària</b> moderada. Pulsa <b>D'acord</b>.",
  onMenu:function(k){var st=S.vor;if(k==="prop"){st.dlg={vores:T.vores==="guia"?"cap":T.vores,bw:T.bw};st.tab="taula";st.msg="";return;}if(/^sel/.test(k)){seleccionar(k);return;}st.msg="Busca <b>Propietats…</b> al final del menú <b>Taula</b>.";st.ok=false;error("vores");},
  onTb:function(){S.vor.msg="Los bordes se cambian en <b>Taula › Propietats…</b>, pestaña <b>Vores</b>.";S.vor.ok=false;},
  onAct:function(a,b){var st=S.vor,d=st.dlg;if(!d)return;if(a==="tab")st.tab=b.getAttribute("data-t");else if(a==="preset")d.vores=b.getAttribute("data-v");else if(a==="v-cancel"){st.dlg=null;st.msg="Has cancelado: los bordes no han cambiado.";st.ok=false;}else if(a==="v-ok")aplicarVores();},
  onInput:function(e){if(e.target.id==="vAmp"&&S.vor.dlg){S.vor.dlg.bw=+e.target.value;return e.type==="change";}return false;},
  onDown:function(){},onMove:function(){},onUp:function(){},
  html:function(){var st=S.vor;return writer({titulo:DOCNOM,menus:!st.dlg,tool2:tool2(),pagina:pagina({cursor:false}),paraules:34,mod:true,dialeg:st.dlg?dlgVores():""})+objetivo([["Exterior y todas las líneas interiores",T.vores==="tot"],["Amplària moderada (0,75 o 1,50 pt)",T.vores!=="guia"&&T.bw>=0.75&&T.bw<=1.5]])+msg(st.msg,st.ok);},ok:okVor}),
 pasoFmt(S.alt,{t:"5. Filas alternas",ultimo:true,ayuda:"Para seguir cada fila con la vista, pon en <b>Gris clar</b> la 2.ª y la 4.ª fila de datos (Presentación y Comida): selecciona la fila y usa 🎨. Después guarda con <b>Ctrl + S</b>.",
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){e.preventDefault();guardarAlt();return true;}return false;},
  html:function(){var st=S.alt;var h=conPal(writer({titulo:DOCNOM,menus:true,tool2:tool2(),pagina:pagina(),paraules:34,mod:!st.guardado}));h+=objetivo([["Filas alternas: blanca, gris, blanca…",okAlt()],["Programa guardado",st.guardado]]);return h+(st.guardado?msg(st.msg,true)+bloqueFinPractica():msg(st.msg,st.ok));},
  ok:function(){return S.alt.guardado;}})
];
