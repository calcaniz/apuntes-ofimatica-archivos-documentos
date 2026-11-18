CFG={id:"S01.02",slug:"s0102",nombre:"Guardamos y protegemos los datos del evento",app:"📝 Writer virtual",
  aprendido:["Distinguir seguridad, integridad y confidencialidad.","Reconocer los datos personales que no deben aparecer en un documento.","Guardar por primera vez con Fitxer › Anomena i guarda, en la carpeta correcta y en formato ODT.","Guardar los cambios con Fitxer › Guarda (Ctrl + S).","Hacer una copia de seguridad con Copia y Enganxa."],
  despues:"haz la <b>Parte 3</b> en tu ordenador y sube a Aules este PDF y tu archivo <b>01_Datos_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo 01_Datos_evento_Nombre.odt (guardado en Documentos_Writer y con su copia en Copia_Seguridad).",
  errores:[["conceptos","al unir los conceptos"],["datos","al revisar los datos personales"],["guardar","al guardar por primera vez"],["cambios","al guardar los cambios"],["copia","al hacer la copia de seguridad"]],
  ficha:[
   {id:"f1",t:"Guarda o Anomena i guarda",ayuda:"¿Qué opción del menú <b>Fitxer</b> eliges?",q:[
     ["Es la primera vez que guardas un documento nuevo. ¿Qué eliges?",["Fitxer › Anomena i guarda…","Fitxer › Tanca","Fitxer › Obri…"],0,"La primera vez eliges la carpeta, el nombre y el tipo con Anomena i guarda."],
     ["Ya guardaste el documento y has añadido una frase. ¿Qué haces?",["Fitxer › Guarda (Ctrl + S)","Cierro Writer sin guardar","Fitxer › Nou"],0,"Guarda actualiza el mismo archivo con los últimos cambios."],
     ["Quieres una segunda versión de la invitación sin perder la primera. ¿Qué haces?",["Ctrl + S","Anomena i guarda con el nombre terminado en _v2","Borro la primera"],1,"Anomena i guarda crea otro archivo: la primera versión se conserva."]]},
   {id:"f2",t:"Guardar por primera vez",ayuda:"Tres cosas que hay que elegir.",q:[
     ["Al guardar por primera vez elegimos…",["La carpeta, el nombre y el tipo de archivo","Solo el color de la letra","La impresora"],0,"Carpeta, nombre y tipo: así sabremos dónde está y con qué se abre."],
     ["¿Qué tipo de archivo eliges para trabajar en Writer?",["Document de text ODF (.odt)","Text (.txt)","Word (.docx)"],0,"ODT es el formato propio de Writer: lo conserva todo."]]},
   {id:"f3",t:"Abrir un documento",ayuda:"Para volver a trabajar con un documento.",q:[
     ["Desde Writer, ¿cómo abres un documento guardado?",["Fitxer › Obri… (Ctrl + O)","Edita › Desfés","Fitxer › Tanca"],0,"Con Obri… buscas la carpeta y eliges el archivo."],
     ["¿Qué necesitas recordar para encontrar un documento?",["En qué carpeta está y qué nombre tiene","La hora a la que lo hiciste","El color de la letra"],0,"Por eso es tan importante guardar con orden y con nombres claros."]]},
   {id:"f4",t:"Seguridad y confidencialidad",ayuda:"Tres situaciones de clase.",q:[
     ["Un compañero te pide tu contraseña de Aules.",["Se la digo, es mi amigo","No se la digo: las contraseñas son secretas","Se la escribo en un papel"],1,"Las contraseñas no se comunican a nadie."],
     ["La integridad de un documento significa que…",["Está completo y no se ha cambiado ni borrado por error","Es muy bonito","Tiene muchas páginas"],0,"Por eso guardamos los cambios y revisamos antes de entregar."],
     ["¿Qué dato NO pondrías en la invitación de tu evento?",["La fecha del evento","El número de tu DNI","El lugar del evento"],1,"El DNI es un dato personal: no se comparte en los documentos del evento."]]},
   {id:"f5",t:"Copias de seguridad",ayuda:"Para no perder nunca el trabajo.",q:[
     ["¿Dónde es mejor guardar una copia de seguridad de verdad?",["En la misma carpeta que el original","En otro sitio: un USB, la red del centro o la nube","En la papelera"],1,"Si el original y la copia están en el mismo sitio, se pueden perder los dos a la vez."],
     ["Para hacer una copia de seguridad usas…",["Copia y Enganxa","Retalla y Enganxa","Mou a la paperera"],0,"Copiar deja el original en su sitio y crea otro archivo igual."],
     ["¿Qué es una versión nueva de un documento?",["Un archivo con cambios para seguir trabajando","Una copia igual para recuperar el archivo","Un archivo borrado"],0,"La copia de seguridad es igual al original; la versión tiene cambios."]]}
  ]};

var PROY="Proyecto_Evento_Lucia";
var FS=D("",[D("Escriptori"),D("Baixades"),D("Documents",[D(PROY,[D("Documentos_Writer"),D("Imagenes"),D("Copia_Seguridad")])]),D("Imatges"),D("Paperera")]);
var R_DOC=["Documents",PROY,"Documentos_Writer"], R_COPIA=["Documents",PROY,"Copia_Seguridad"];
var LINEAS=[
  ["t","DATOS DEL EVENTO"],["ok","Nombre: KDD49 Valencia"],["ok","Tipo: concentración de motos"],["ok","Lugar: Circuito de Cheste"],["ok","Fecha: sábado 14 de marzo"],
  ["dni","DNI de la organizadora: 12345678Z"],["ok","Organiza: Lucía Martí"],["pass","Contraseña de Aules: moto2025"],["dir","Dirección de su casa: C/ Mayor 5, 3.º B"],
  ["ok","Contacto: info@kdd49.es"],["banc","Cuenta bancaria: ES12 3456 7890 1234"]];
var EXPL={dni:"El DNI es un dato personal: no lo compartimos.",pass:"Las contraseñas son secretas: nunca se escriben en un documento.",dir:"La dirección particular es privada.",banc:"Los datos bancarios son confidenciales."};
var MALOS=LINEAS.filter(function(l){return EXPL[l[0]];}).length;
var S={u:nuevoUnir(),
  d:{quitadas:{},msg:"",ok:false},
  g:{wm:{menu:null,sub:null},fd:null,guardado:false,archivo:"",msg:"",ok:false},
  c:{wm:{menu:null,sub:null},escrito:false,guardado:false,msg:"",ok:false},
  fm:null};

function menuFitxer(){return [["nou","Nou",null,"sub"],["obri","Obri…","Ctrl+O"],["tanca","Tanca"],"-",["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"],["copia","Guarda una còpia…"],"-",["exporta","Exporta com a",null,"sub"],"-",["previ","Previsualització d'impressió","Ctrl+Maj+O"],["imprimeix","Imprimeix…","Ctrl+P"]];}
function menuItemsFitxer(m,sub){
  if(sub==="nou")return [["n_text","Document de text"],["n_calc","Full de càlcul"],["n_pres","Presentació"]];
  if(sub==="exporta")return [["pdf","Exporta com a PDF…"],["epub","Exporta com a EPUB…"]];
  return m==="Fitxer"?menuFitxer():null;
}
function menuMal(st,clave){return function(m){st.msg="En el menú <b>"+m+"</b> no está lo que buscamos. Las opciones para guardar están en <b>Fitxer</b>.";st.ok=false;error(clave);};}
function paginaDatos(extra){
  return LINEAS.filter(function(l){return !EXPL[l[0]];}).map(function(l){return '<p class="w-p"'+(l[0]==="t"?' style="font-weight:700;font-size:18px"':"")+'>'+esc(l[1])+'</p>';}).join("")+(extra||"")+'<p class="w-p"><span class="w-cur"></span></p>';
}
function nPal(){return LINEAS.filter(function(l){return !EXPL[l[0]];}).map(function(l){return l[1];}).join(" ").split(/\s+/).length;}

/* paso 3: guardar por primera vez */
function abrirGuardar(aviso){
  var g=S.g;
  g.fd=fdNuevo({fs:FS,path:["Documents"],modo:"guarda",titulo:"Anomena i guarda",tipo:"odt",ph:"01_Datos_evento_Lucia",
    tipos:[["odt","Document de text ODF (.odt)"],["ott","Plantilla de document de text ODF (.ott)"],["docx","Word 2007–365 (.docx)"],["txt","Text (.txt)"]]});
  g.msg=aviso?"ℹ️ Como el documento es nuevo, <b>Guarda</b> también abre la ventana <b>Anomena i guarda</b>.":"";g.ok=true;
}
function guardarOk(st){
  var g=S.g, n=(st.nom||"").trim().replace(/\.odt$/i,""), m="", ruta=st.path.join("/");
  if(ruta!==R_DOC.join("/")){
    if(ruta===["Documents",PROY].join("/"))m="Estás en la carpeta del proyecto. Entra en <b>Documentos_Writer</b> con doble clic.";
    else if(ruta==="Documents")m="Entra en <b>"+PROY+"</b> y después en <b>Documentos_Writer</b> (doble clic).";
    else m="Estás en <b>"+rutaTxt(st.path)+"</b>. El documento va en <b>Documents › "+PROY+" › Documentos_Writer</b>.";
  }
  else if(!n)m="Escribe el nombre del archivo en <b>Nom</b>.";
  else if(/\s/.test(n))m="El nombre no puede tener <b>espacios</b>. Usa el guion bajo: <b>01_Datos_evento_Lucia</b>.";
  else if(tieneTilde(n))m="Quita las <b>tildes</b> y la <b>ñ</b> del nombre.";
  else if(!/^01_datos_evento_/i.test(n))m="El nombre debe empezar por <b>01_Datos_evento_</b>.";
  else if(!/^01_datos_evento_[A-Za-z]+$/i.test(n))m="Detrás de <b>01_Datos_evento_</b> escribe solo tu nombre, con letras.";
  else if(st.tipo==="docx")m="DOCX es el formato de <b>Word</b>. Para trabajar en Writer usamos <b>ODT</b>.";
  else if(st.tipo==="txt")m="TXT guarda solo el texto, <b>sin formato</b>. Elige <b>Document de text ODF (.odt)</b>.";
  else if(st.tipo==="ott")m="OTT es una <b>plantilla</b>: la veremos en la UP02. Elige <b>Document de text ODF (.odt)</b>.";
  if(m){st.msg=m;intento("guardar",false);error("guardar");return;}
  intento("guardar",true);
  g.archivo="01_Datos_evento_"+n.replace(/^01_datos_evento_/i,"")+".odt";
  fsNodo(FS,R_DOC).k.push(F(g.archivo));
  g.guardado=true;g.fd=null;g.msg="";g.ok=true;
}

/* paso 4: guardar los cambios */
function guardarCambios(como){
  var c=S.c;
  if(!c.escrito){c.msg="Primero añade la hora con el botón <b>✍️ Escribir</b>.";c.ok=false;return;}
  if(c.guardado){c.msg="✔ Ya está guardado. Pulsa <b>Siguiente</b>.";c.ok=true;return;}
  if(como==="anomena"){c.msg="<b>Anomena i guarda</b> crearía <b>otro archivo</b>. Para actualizar el mismo archivo usa <b>Fitxer › Guarda</b> o <b>Ctrl + S</b>.";c.ok=false;error("cambios");intento("cambios",false);return;}
  c.guardado=true;intento("cambios",true);
  c.msg="✔ <b>"+elogio(4)+"</b> Cambios guardados en <b>"+esc(S.g.archivo)+"</b>. El aviso 💾✱ de la barra de estado ha desaparecido: ya no hay cambios sin guardar.";c.ok=true;
}

/* paso 5: copia de seguridad */
function okCopia(){var a=fsNodo(FS,R_DOC),b=fsNodo(FS,R_COPIA);return !!(S.g.archivo&&fsHijo(a,S.g.archivo)&&fsHijo(b,S.g.archivo));}
function fmV(acc,st,inf){
  if(acc==="x"){intento("copia",false);error("copia");return "<b>Retalla</b> movería el original y <b>Documentos_Writer</b> se quedaría vacía. Para una copia de seguridad usa <b>Copia</b>.";}
  if(acc==="v"&&inf.a.join("/")!==R_COPIA.join("/")){intento("copia",false);error("copia");return "La copia de seguridad va en la carpeta <b>Copia_Seguridad</b>.";}
  if(acc==="pap")return "¡Alto! No borres nada: lo necesitamos todo.";
  if(acc==="ren")return "No hace falta cambiar el nombre: la copia lleva el mismo nombre que el original.";
  if(acc==="nova")return "No hace falta crear carpetas: ya tienes <b>Copia_Seguridad</b>.";
  return "";
}
function fmFet(acc,st,inf){
  if(acc==="v"&&okCopia()){
    intento("copia",true);st.msg="✔ <b>"+elogio(6)+"</b> Ahora tienes <b>dos archivos iguales</b>: el original en Documentos_Writer y la copia en Copia_Seguridad.";st.ok=true;
    finPractica(["Datos personales retirados del documento: "+MALOS,"Guardado como: Documents > "+PROY+" > Documentos_Writer > "+S.g.archivo,"Cambios guardados con Guarda (Ctrl + S)","Copia de seguridad en: Copia_Seguridad > "+S.g.archivo]);
  }
}
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}

PRACTICA=[
 {t:"1. Proteger la información",ayuda:"Pulsa un <b>nombre</b> y después su <b>descripción</b>.",
  unir:{st:S.u,clave:"conceptos",items:[
    ["seguridad","Seguridad","Evitar que la información se pierda, se dañe o llegue a quien no debe."],
    ["integridad","Integridad","El documento está completo y no se ha cambiado ni borrado por error."],
    ["confidencialidad","Confidencialidad","Cierta información solo la puede ver quien está autorizado."],
    ["copia","Copia de seguridad","Un archivo igual al original, guardado en otro sitio para recuperarlo si se pierde."],
    ["version","Versión","Una nueva etapa del documento, con cambios, que conserva la anterior."]]},
  html:function(){var u=this.unir;return unirChips(u)+unirRecs(u)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 {t:"2. Datos que no se comparten",ayuda:"Lucía ha escrito los datos de su evento, pero ha puesto información que <b>no debe aparecer</b>. Pulsa sobre las <b>líneas con datos personales o secretos</b> para quitarlas.",
  html:function(){
    var d=S.d, pag=LINEAS.map(function(l,i){
      if(d.quitadas[i])return "";
      return '<p class="w-p" data-act="linea" data-i="'+i+'" style="cursor:pointer;border-radius:4px;padding:1px 4px'+(l[0]==="t"?";font-weight:700;font-size:18px":"")+'">'+esc(l[1])+'</p>';
    }).join("");
    var n=Object.keys(d.quitadas).length;
    return writer({titulo:"Sense títol 1",pagina:pag,paraules:nPal()})+objetivo([["Datos privados quitados: <b>"+n+" de "+MALOS+"</b>",n===MALOS]])+(n===MALOS?msg("✔ <b>¡Documento seguro!</b> Ahora solo tiene datos del evento que se pueden compartir.",true):msg(d.msg,d.ok));
  },
  onAct:function(a,b){
    if(a!=="linea")return;
    var d=S.d,i=+b.getAttribute("data-i"),l=LINEAS[i];
    if(EXPL[l[0]]){d.quitadas[i]=true;intento("dato"+i,true);d.msg="✔ <b>"+elogio(i)+"</b> "+EXPL[l[0]];d.ok=true;}
    else{intento("dato"+i,false);error("datos");d.msg="Este dato <b>sí</b> puede aparecer: es información del evento, no de una persona. ¡Busca otra línea!";d.ok=false;}
  },
  ok:function(){return Object.keys(S.d.quitadas).length===MALOS;}},
 {t:"3. Guardar por primera vez",ayuda:"Abre <b>Fitxer › Anomena i guarda…</b> Carpeta: <b>Documents › "+PROY+" › Documentos_Writer</b>. Nombre: <b>01_Datos_evento_</b> y tu nombre. Tipo: <b>ODT</b>.",
  wm:S.g.wm, menuItems:menuItemsFitxer, onMenuMal:menuMal(S.g,"guardar"),
  onMenu:function(k){
    var g=S.g;
    if(g.guardado){g.msg="✔ Ya está guardado. Pulsa <b>Siguiente</b>.";g.ok=true;return;}
    if(k==="anomena")abrirGuardar(false);
    else if(k==="guarda")abrirGuardar(true);
    else if(k==="copia"){g.msg="<b>Guarda una còpia</b> hace una copia, pero tu documento seguiría <b>sin título</b>. Usa <b>Anomena i guarda</b>.";g.ok=false;error("guardar");intento("guardar",false);}
    else{g.msg="Esa opción no guarda el documento. Busca <b>Anomena i guarda…</b>";g.ok=false;error("guardar");intento("guardar",false);}
  },
  onTb:function(k){if(k==="guarda"&&!S.g.guardado)abrirGuardar(true);},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"&&!S.g.guardado&&!S.g.fd){e.preventDefault();abrirGuardar(true);return true;}return false;},
  fd:function(){return S.g.fd;}, fdOk:guardarOk, fdCancel:function(){S.g.fd=null;S.g.msg="Has cancelado. Vuelve a abrir <b>Fitxer › Anomena i guarda…</b>";S.g.ok=false;},
  html:function(){
    var g=S.g;
    var h=writer({titulo:g.guardado?g.archivo:"Sense títol 1",menus:!g.fd&&!g.guardado,pagina:paginaDatos(),paraules:nPal(),mod:!g.guardado,dialeg:g.fd?fdHTML(g.fd):""});
    if(g.guardado)h+=msg("✔ <b>¡Perfecto!</b> El título de la ventana ya muestra <b>"+esc(g.archivo)+"</b>: está guardado en <b>Documentos_Writer</b> en formato ODT.",true);
    else h+=msg(g.msg,g.ok);
    return h;
  },ok:function(){return S.g.guardado;}},
 {t:"4. Guardar los cambios",ayuda:"Pulsa <b>✍️ Escribir</b> para añadir la hora de inicio. Después guarda los cambios con <b>Fitxer › Guarda</b>, el botón 💾 o <b>Ctrl + S</b>.",
  wm:S.c.wm, menuItems:menuItemsFitxer, onMenuMal:menuMal(S.c,"cambios"),
  onMenu:function(k){
    if(k==="guarda"||k==="anomena")guardarCambios(k);
    else{S.c.msg="Esa opción no guarda los cambios. Busca <b>Guarda</b>.";S.c.ok=false;error("cambios");}
  },
  onTb:function(k){if(k==="guarda")guardarCambios("guarda");},
  onKey:function(e){var k=e.key.toLowerCase();if((e.ctrlKey||e.metaKey)&&k==="s"){e.preventDefault();guardarCambios(e.shiftKey?"anomena":"guarda");return true;}return false;},
  onAct:function(a){if(a==="escriu"){S.c.escrito=true;S.c.msg="Has añadido una línea. Fíjate en la barra de estado: el aviso <b>💾✱</b> indica que hay <b>cambios sin guardar</b>.";S.c.ok=true;}},
  html:function(){
    var c=S.c;
    var extra=c.escrito?'<p class="w-p">Hora de inicio: 10:00</p>':"";
    var h=writer({titulo:S.g.archivo||"01_Datos_evento.odt",menus:true,pagina:paginaDatos(extra),paraules:nPal()+(c.escrito?4:0),mod:c.escrito&&!c.guardado});
    if(!c.escrito)h+='<p style="margin:10px 0 0"><button class="btn" data-act="escriu">✍️ Escribir «Hora de inicio: 10:00»</button></p>';
    return h+objetivo([["Añadir la hora",c.escrito],["Guardar los cambios",c.guardado]])+msg(c.msg,c.ok);
  },ok:function(){return S.c.guardado;}},
 {t:"5. La copia de seguridad",ultimo:true,ayuda:"Estás en <b>Documentos_Writer</b>. Botón derecho sobre tu documento › <b>Copia</b>. Sube a la carpeta del proyecto (↑), entra en <b>Copia_Seguridad</b> y, con el botón derecho en una zona vacía, elige <b>Enganxa</b>.",
  fm:function(){return S.fm;},fmV:fmV,fmFet:fmFet,
  entrar:function(){if(!S.fm)S.fm=fmNuevo(FS,R_DOC.slice());S.fm.msg="";S.fm.ctx=null;},
  html:function(){
    var h=fmHTML(S.fm)+objetivo([["Original en <b>Documentos_Writer</b>",!!(S.g.archivo&&fsHijo(fsNodo(FS,R_DOC),S.g.archivo))],["Copia en <b>Copia_Seguridad</b>",okCopia()]]);
    if(okCopia())h+=msg(S.fm.msg||"✔ Copia hecha.",true)+bloqueFinPractica(); else h+=msg(S.fm.msg,S.fm.ok);
    return h;
  },ok:okCopia}
];
