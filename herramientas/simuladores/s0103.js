CFG={id:"S01.03",slug:"s0103",nombre:"Escribimos la invitación",app:"📝 Writer virtual",
  aprendido:["Reconocer las partes de la ventana de Writer.","Encontrar errores de espacios, puntos y mayúsculas.","Pulsar Intro solo al terminar un párrafo.","Corregir con Retroceso y Supr.","Recuperar lo borrado con Edita › Desfés (Ctrl + Z)."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>02_Invitacion_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo 02_Invitacion_evento_Nombre.odt con el texto de la invitación de tu evento, sin errores.",
  errores:[["ventana","al reconocer la ventana"],["errores","al buscar los errores"],["intro","con la tecla Intro"],["borrar","al usar Retroceso y Supr"],["desfes","al usar Desfés y guardar"]],
  ficha:[
   {id:"f1",t:"Writer y sus partes",ayuda:"Tres preguntas para empezar.",q:[
     ["¿Para qué sirve un procesador de textos como Writer?",["Para crear, escribir y corregir documentos","Para hacer cálculos con números","Para editar vídeos"],0,"Con Writer preparamos cartas, invitaciones, carteles, horarios…"],
     ["¿Qué indica el cursor?",["Dónde aparecerá la siguiente letra","Cuántas páginas tiene el documento","El tamaño de la letra"],0,"Antes de escribir o borrar, mira dónde está el cursor."],
     ["¿Dónde ves cuántas palabras tiene el documento?",["En la barra de estado","En la barra de menús","En el título de la ventana"],0,"La barra de estado está abajo: página, palabras, idioma y zoom."]]},
   {id:"f2",t:"Escribir bien",ayuda:"Fíjate en los espacios, los puntos y las mayúsculas.",q:[
     ["¿Qué frase está bien escrita?",["Ven al evento , te esperamos .","Ven al evento, te esperamos.","ven al evento,te esperamos"],1,"Sin espacio antes de la coma o el punto, con espacio después y con mayúscula al empezar."],
     ["¿Cuántos espacios dejamos entre dos palabras?",["Uno","Dos","Los que quieras"],0,"Un solo espacio. Los espacios de más se notan al leer."]]},
   {id:"f3",t:"La tecla Intro",ayuda:"¿Cuándo empieza un párrafo nuevo?",q:[
     ["¿Cuándo pulsamos Intro?",["Al final de cada línea","Solo para empezar un párrafo nuevo","Después de cada palabra"],1,"Writer cambia de línea solo. Intro es para empezar otro párrafo."],
     ["Mientras escribes, llegas al final de la línea. ¿Qué haces?",["Sigo escribiendo: Writer cambia de línea solo","Pulso Intro","Pulso la barra espaciadora muchas veces"],0,"El texto pasa solo a la línea siguiente."]]},
   {id:"f4",t:"Retroceso y Supr",ayuda:"¿Qué borra cada tecla?",q:[
     ["La tecla Retroceso borra…",["El carácter que está a la izquierda del cursor","El carácter que está a la derecha del cursor","Todo el documento"],0,"Retroceso borra hacia atrás, hacia la izquierda."],
     ["La tecla Supr borra…",["El carácter que está a la izquierda del cursor","El carácter que está a la derecha del cursor","La línea entera"],1,"Supr borra hacia delante, hacia la derecha."],
     ["Para escribir una sola letra mayúscula…",["Mantengo pulsada Mayús y pulso la letra","Activo Bloq Mayús y lo dejo así","Pulso Intro"],0,"Bloq Mayús escribe todo en mayúsculas hasta que lo desactivas."]]},
   {id:"f5",t:"Desfés y Refés",ayuda:"Para arreglar los despistes.",q:[
     ["Has borrado una frase sin querer. ¿Qué haces?",["Edita › Desfés (Ctrl + Z)","Fitxer › Tanca","Vuelvo a escribirlo todo"],0,"Desfés anula la última acción."],
     ["¿Desfés guarda el documento?",["Sí, también guarda","No: para guardar hay que usar Ctrl + S"],1,"Desfés solo anula acciones. Para conservar el trabajo, guarda."],
     ["Has deshecho algo por error. ¿Cómo lo vuelves a aplicar?",["Edita › Refés (Ctrl + Y)","Pulso Ctrl + Z otra vez","No se puede"],0,"Refés vuelve a aplicar lo que habías deshecho."]]}
  ]};

var DOCNOM="02_Invitacion_evento_Lucia.odt";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}

/* paso 2: errores */
var TOK=[
 {t:"kdd49",e:"may",f:"KDD49",x:"Las frases y los nombres propios empiezan con <b>mayúscula</b>: <b>KDD49</b>."},
 {t:"Valencia"},{t:"será"},{t:"un"},{t:"encuentro"},{t:"de"},{t:"motos",sp:false},
 {t:"   ",e:"esp",f:"",x:"Había <b>dos espacios</b> seguidos. Entre dos palabras dejamos <b>uno solo</b>.",sp:false},
 {t:"clásicas",sp:false},
 {t:" .Vendrán",e:"punt",f:". Vendrán",x:"No ponemos espacio <b>antes</b> del punto, pero sí <b>después</b>."},
 {t:"pilotos"},{t:"de"},{t:"toda"},{t:"la"},{t:"Comunitat"},{t:"Valenciana.",br:true},
 {t:"Habrá"},{t:"comida,"},{t:"exposición"},{t:"de"},{t:"motos"},{t:"y"},{t:"un"},
 {t:"festibal",e:"orto",f:"festival",x:"Se escribe <b>festival</b>, con <b>v</b>."},
 {t:"de"},{t:"música",e:"fin",f:"música.",x:"Al terminar una frase escribimos un <b>punto</b>."}
];
var NERR=TOK.filter(function(t){return t.e;}).length;
var S={u:nuevoUnir(),e:{fix:{},msg:"",ok:false},i:{quit:{},msg:"",ok:false},b:{r:0,fase:"tecla",msg:"",ok:false,word:null,pos:0},d:{wm:{menu:null,sub:null},borrada:false,recuperada:false,guardado:false,msg:"",ok:false}};
function nErr(){return Object.keys(S.e.fix).length;}

/* paso 3: Intro */
var SEG=[["Te invitamos a la KDD49 Valencia, un encuentro",1],["de motos clásicas que se celebrará en el",1],["circuito de Cheste.",0],["Habrá exposición de motos, música en directo y",1],["comida para todos.",0]];
var NMAL=SEG.filter(function(s){return s[1];}).length;
function nQuit(){return Object.keys(S.i.quit).length;}

/* paso 4: Retroceso y Supr */
var RONDAS=[
 {antes:"El ",w:"festibal",despues:" empezará a las diez.",pos:6,tecla:"back",letra:"v",ops:["b","v","w"],fin:"festival",x:"La <b>b</b> estaba a la <b>izquierda</b> del cursor: por eso usamos <b>Retroceso</b>."},
 {antes:"Habrá ",w:"comidda",despues:" para todos.",pos:4,tecla:"supr",letra:"",fin:"comida",x:"La <b>d</b> que sobraba estaba a la <b>derecha</b> del cursor: por eso usamos <b>Supr</b>."},
 {antes:"Y mucha ",w:"musica",despues:" en directo.",pos:2,tecla:"back",letra:"ú",ops:["u","ú","ü"],fin:"música",x:"Hemos borrado la <b>u</b> con <b>Retroceso</b> y escrito <b>ú</b> con tilde."}
];
function ronda(){return RONDAS[S.b.r];}
function okBorrar(){return S.b.r>=RONDAS.length;}
function pulsarTecla(k){
  var b=S.b, r=ronda(); if(!r||b.fase!=="tecla")return;
  if(k===r.tecla){
    if(k==="back"){b.word=b.word.slice(0,b.pos-1)+b.word.slice(b.pos);b.pos--;}else{b.word=b.word.slice(0,b.pos)+b.word.slice(b.pos+1);}
    if(r.letra){b.fase="letra";b.msg="✔ Bien borrado. Ahora escribe la letra correcta.";b.ok=true;}
    else terminaRonda();
  }else{
    intento("ronda"+b.r,false);error("borrar");
    b.msg=k==="back"?"<b>Retroceso</b> borraría la letra de la <b>izquierda</b> del cursor, que está bien. ¿Dónde está la letra que sobra?":"<b>Supr</b> borraría la letra de la <b>derecha</b> del cursor, que está bien. ¿Dónde está la letra que sobra?";b.ok=false;
  }
}
function elegirLetra(l){
  var b=S.b, r=ronda(); if(!r||b.fase!=="letra")return;
  if(l===r.letra){b.word=b.word.slice(0,b.pos)+l+b.word.slice(b.pos);b.pos++;terminaRonda();}
  else{intento("ronda"+b.r,false);error("borrar");b.msg="Con «"+esc(l)+"» quedaría <b>"+esc(b.word.slice(0,b.pos)+l+b.word.slice(b.pos))+"</b>. ¡Prueba otra letra!";b.ok=false;}
}
function terminaRonda(){
  var b=S.b, r=ronda(); intento("ronda"+b.r,true);
  b.msg="✔ <b>"+elogio(b.r+2)+"</b> Ahora pone <b>"+esc(r.fin)+"</b>. "+r.x;b.ok=true;
  b.r++;b.fase="tecla";if(ronda()){b.word=ronda().w;b.pos=ronda().pos;}
}

/* paso 5: Desfés */
var P1="Te invitamos a la KDD49 Valencia, un encuentro de motos clásicas que se celebrará en el circuito de Cheste.";
var P2="Habrá exposición de motos, música en directo y comida para todos.";
var P3="¡Te esperamos!";
function desfer(){
  var d=S.d;
  if(!d.borrada){d.msg="Todavía no ha pasado nada que deshacer. Pulsa primero el botón <b>Supr</b> de abajo.";d.ok=false;return;}
  if(d.recuperada){d.msg="La frase ya está recuperada. Ahora <b>guarda</b> el documento.";d.ok=true;return;}
  d.recuperada=true;intento("desfes",true);d.msg="✔ <b>"+elogio(1)+"</b> ¡La frase ha vuelto! <b>Desfés</b> anula la última acción. Ahora guarda los cambios con <b>Ctrl + S</b>: Desfés no guarda.";d.ok=true;
}
function refer(){
  var d=S.d;
  if(d.recuperada&&!d.guardado){d.recuperada=false;error("desfes");d.msg="¡Uy! <b>Refés</b> ha vuelto a aplicar lo que habías deshecho: la frase se ha borrado otra vez. Usa <b>Desfés</b> de nuevo.";d.ok=false;return;}
  d.msg="No hay nada que rehacer.";d.ok=false;
}
function guardarD(){
  var d=S.d;
  if(!d.borrada){d.msg="Primero pulsa el botón <b>Supr</b> de abajo para ver qué pasa.";d.ok=false;return;}
  if(!d.recuperada){d.msg="¡Espera! Si guardas ahora, guardarás el documento <b>sin la frase</b>. Primero recupérala con <b>Desfés</b>.";d.ok=false;error("desfes");intento("desfes",false);return;}
  if(d.guardado)return;
  d.guardado=true;d.msg="✔ <b>"+elogio(4)+"</b> Frase recuperada y documento guardado.";d.ok=true;
  finPractica(["Partes de Writer reconocidas: 5 de 5","Errores corregidos en la invitación: "+NERR+" de "+NERR,"Intro de más eliminados: "+NMAL+" de "+NMAL,"Palabras corregidas con Retroceso y Supr: festival, comida, música","Frase recuperada con Desfés y documento guardado"]);
}
function menuEdita(){return [["desfes","Desfés","Ctrl+Z"],["refes","Refés","Ctrl+Y"],"-",["retalla","Retalla","Ctrl+X"],["copia","Copia","Ctrl+C"],["enganxa","Apega","Ctrl+V"],"-",["tot","Selecciona-ho tot","Ctrl+A"],"-",["cerca","Cerca i reemplaça…","Ctrl+H"]];}
function menuFitxer(){return [["nou","Nou",null,"sub"],["obri","Obri…","Ctrl+O"],["tanca","Tanca"],"-",["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"],"-",["previ","Previsualització d'impressió","Ctrl+Maj+O"],["imprimeix","Imprimeix…","Ctrl+P"]];}

PRACTICA=[
 {t:"1. Conocer la ventana de Writer",ayuda:"Pulsa un <b>nombre</b> y después la <b>parte de la ventana</b> donde está. Las partes unidas se marcan en verde.",
  unir:{st:S.u,clave:"ventana",zonas:true,items:[
    ["menu","Barra de menús","Contiene todas las opciones: Fitxer, Edita, Insereix, Format…"],
    ["eines","Barra de herramientas","Tiene botones para lo más habitual: guardar, tipo de letra, negrita…"],
    ["pagina","Página","Es la zona blanca donde escribimos."],
    ["cursor","Cursor","Es la línea que parpadea: indica dónde aparecerá la siguiente letra."],
    ["estat","Barra de estado","Muestra la página, el número de palabras, el idioma y el zoom."]]},
  html:function(){
    var u=this.unir;
    var pag='<p class="w-p">Te invitamos a la KDD49 Valencia.</p><p class="w-p">Habrá motos, música y comida<span class="'+zonaAttr({zonas:true},"cursor").slice(1)+'" style="display:inline-block;padding:0 8px;border-radius:4px"><span class="w-cur"></span></span></p>';
    return unirChips(u)+writer({zonas:true,titulo:DOCNOM,pagina:pag,paraules:11})+msg(u.st.msg,u.st.ok);
  },ok:function(){return unirOk(this.unir);}},
 {t:"2. Encuentra los errores",ayuda:"La invitación tiene <b>"+NERR+" errores</b>: espacios de más, un punto mal puesto, una mayúscula, una falta y un punto que falta. Pulsa sobre cada error para corregirlo.",
  html:function(){
    var e=S.e, h='<p class="w-p">';
    TOK.forEach(function(t,i){
      var txt=t.e&&e.fix[i]?t.f:t.t;
      h+='<span class="w-w" data-act="tok" data-i="'+i+'" style="cursor:pointer'+(t.e&&e.fix[i]?";background:#e8f5e9":"")+'">'+esc(txt)+'</span>'+(t.br?'</p><p class="w-p">':(t.sp===false&&!(t.e&&e.fix[i]&&t.e==="esp")?"":" "));
    });
    h+='</p>';
    return writer({titulo:DOCNOM,pagina:h,paraules:30})+objetivo([["Errores corregidos: <b>"+nErr()+" de "+NERR+"</b>",nErr()===NERR]])+(nErr()===NERR?msg("✔ <b>¡Texto perfecto!</b> Ahora la invitación se lee bien.",true):msg(e.msg,e.ok));
  },
  onAct:function(a,b){
    if(a!=="tok")return;
    var e=S.e,i=+b.getAttribute("data-i"),t=TOK[i];
    if(t.e&&!e.fix[i]){e.fix[i]=true;intento("err_"+t.e,true);e.msg="✔ <b>"+elogio(i)+"</b> "+t.x;e.ok=true;}
    else if(t.e){e.msg="✔ Ese ya está corregido.";e.ok=true;}
    else{intento("errores_"+i,false);error("errores");e.msg="«<b>"+esc(t.t)+"</b>» está bien escrito. ¡Sigue buscando!";e.ok=false;}
  },ok:function(){return nErr()===NERR;}},
 {t:"3. Intro solo al final del párrafo",ayuda:"Hemos activado las <b>marcas de formato</b>: cada <b class=\"marca\">¶</b> es un <b>Intro</b>. Alguien ha pulsado Intro al final de cada línea. Pulsa los <b class=\"marca\">¶</b> que <b>sobran</b> para quitarlos. Deja solo los del final de cada párrafo.",
  html:function(){
    var i=S.i, h='<p class="w-p">';
    SEG.forEach(function(s,k){
      h+=esc(s[0]);
      if(s[1]&&i.quit[k])h+=" ";
      else h+='<span class="marca" data-act="pil" data-k="'+k+'" style="cursor:pointer;padding:0 4px;font-size:17px">¶</span></p>'+(k<SEG.length-1?'<p class="w-p">':"");
    });
    return writer({titulo:DOCNOM,pagina:h,paraules:32})+objetivo([["Intro que sobran quitados: <b>"+nQuit()+" de "+NMAL+"</b>",nQuit()===NMAL]])+(nQuit()===NMAL?msg("✔ <b>¡Muy bien!</b> Ahora hay <b>dos párrafos</b> y Writer cambia de línea solo cuando llega al final.",true):msg(i.msg,i.ok));
  },
  onAct:function(a,b){
    if(a!=="pil")return;
    var i=S.i,k=+b.getAttribute("data-k");
    if(SEG[k][1]){i.quit[k]=true;intento("pil"+k,true);i.msg="✔ <b>"+elogio(k)+"</b> Ese Intro sobraba: la frase continuaba en la línea siguiente.";i.ok=true;}
    else{intento("pil"+k,false);error("intro");i.msg="Este <b class=\"marca\">¶</b> está bien: aquí <b>termina un párrafo</b>, así que sí hay que pulsar Intro.";i.ok=false;}
  },ok:function(){return nQuit()===NMAL;}},
 {t:"4. Retroceso o Supr",ayuda:"Mira dónde está el <b>cursor</b>. Si la letra que sobra está a la <b>izquierda</b>, usa <b>Retroceso</b>. Si está a la <b>derecha</b>, usa <b>Supr</b>. También puedes usar las teclas de tu teclado.",
  entrar:function(){var b=S.b;if(!b.word&&ronda()){b.word=ronda().w;b.pos=ronda().pos;}},
  html:function(){
    var b=S.b, r=ronda(), h;
    if(r){
      var pag='<p class="w-p" style="font-size:24px;line-height:1.6">'+esc(r.antes)+'<span style="background:#fff3e0;border-radius:4px;padding:0 2px">'+esc(b.word.slice(0,b.pos))+'<span class="w-cur"></span>'+esc(b.word.slice(b.pos))+'</span>'+esc(r.despues)+'</p>';
      h=writer({titulo:DOCNOM,pagina:pag,paraules:6});
      h+='<p style="margin:10px 0 4px"><b>Palabra '+(b.r+1)+' de '+RONDAS.length+'.</b> '+(b.fase==="tecla"?"¿Qué tecla pulsas?":"¿Qué letra escribes?")+'</p>';
      if(b.fase==="tecla")h+='<div class="chips"><button class="btn" data-act="k-back">⌫ Retroceso</button><button class="btn" data-act="k-supr">Supr ⌦</button></div>';
      else h+='<div class="chips">'+r.ops.map(function(l){return '<button class="btn" data-act="letra" data-l="'+l+'" style="min-width:70px;font-size:24px">'+l+'</button>';}).join("")+'</div>';
    }else h=writer({titulo:DOCNOM,pagina:'<p class="w-p">El festival empezará a las diez.</p><p class="w-p">Habrá comida para todos.</p><p class="w-p">Y mucha música en directo.<span class="w-cur"></span></p>',paraules:16});
    h+=objetivo(RONDAS.map(function(x,k){return [x.fin,k<b.r];}));
    if(okBorrar())h+=msg("✔ <b>¡Las tres palabras corregidas!</b> Sin borrar todo el texto, solo la letra equivocada.",true); else h+=msg(b.msg,b.ok);
    return h;
  },
  onAct:function(a,el){if(a==="k-back")pulsarTecla("back");else if(a==="k-supr")pulsarTecla("supr");else if(a==="letra")elegirLetra(el.getAttribute("data-l"));},
  onKey:function(e){
    if(okBorrar())return false;
    if(e.key==="Backspace"){e.preventDefault();pulsarTecla("back");return true;}
    if(e.key==="Delete"){e.preventDefault();pulsarTecla("supr");return true;}
    if(S.b.fase==="letra"&&e.key.length===1){e.preventDefault();elegirLetra(e.key.toLowerCase());return true;}
    return false;
  },ok:okBorrar},
 {t:"5. ¡Desfés al rescate!",ultimo:true,ayuda:"Pulsa el botón <b>Supr</b> de abajo para ver qué pasa. Después recupera la frase con <b>Edita › Desfés</b>, el botón <b>↶</b> o <b>Ctrl + Z</b>, y guarda con <b>Ctrl + S</b>.",
  wm:S.d.wm,
  menuItems:function(m){return m==="Edita"?menuEdita():m==="Fitxer"?menuFitxer():null;},
  onMenuMal:function(m){S.d.msg="En el menú <b>"+m+"</b> no está lo que buscamos. Desfés está en <b>Edita</b> y Guarda, en <b>Fitxer</b>.";S.d.ok=false;error("desfes");},
  onMenu:function(k){
    if(k==="desfes")desfer();else if(k==="refes")refer();else if(k==="guarda")guardarD();
    else if(k==="anomena"){S.d.msg="Este documento ya tiene nombre: para guardar los cambios usa <b>Guarda</b> (Ctrl + S).";S.d.ok=false;}
    else{S.d.msg="Esa opción no nos sirve ahora.";S.d.ok=false;}
  },
  onTb:function(k){if(k==="desfes")desfer();else if(k==="refes")refer();else if(k==="guarda")guardarD();},
  onKey:function(e){var k=e.key.toLowerCase(),c=e.ctrlKey||e.metaKey;if(!c)return false;if(k==="z"){e.preventDefault();desfer();return true;}if(k==="y"){e.preventDefault();refer();return true;}if(k==="s"){e.preventDefault();guardarD();return true;}return false;},
  onAct:function(a){if(a==="ups"){S.d.borrada=true;S.d.msg="😱 ¡Oh, no! Al pulsar <b>Supr</b> con la frase seleccionada, ha desaparecido. ¿Cómo la recuperas?";S.d.ok=false;}},
  html:function(){
    var d=S.d, vis=!d.borrada||d.recuperada;
    var pag='<p class="w-p">'+esc(P1)+'</p><p class="w-p">'+(vis?'<span'+(!d.borrada?' style="background:#9ec5ff"':"")+'>'+esc(P2)+'</span>':"")+'<span class="w-cur"></span></p><p class="w-p">'+esc(P3)+'</p>';
    var h=writer({titulo:DOCNOM,menus:true,pagina:pag,paraules:vis?33:21,mod:d.borrada&&!d.guardado});
    if(!d.borrada)h+='<p style="margin:10px 0 0"><button class="btn" data-act="ups">Supr ⌦ (con la frase seleccionada)</button></p>';
    h+=objetivo([["Recuperar la frase con Desfés",d.recuperada],["Guardar el documento",d.guardado]]);
    if(d.guardado)h+=msg(d.msg,true)+bloqueFinPractica(); else h+=msg(d.msg,d.ok);
    return h;
  },ok:function(){return S.d.guardado;}}
];
