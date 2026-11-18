CFG={id:"S01.01",slug:"s0101",nombre:"Organizamos la carpeta del proyecto",app:"🗂️ Explorador virtual",
  aprendido:["Distinguir archivo, carpeta, subcarpeta, extensión y ruta.","Crear carpetas con nombres claros.","Cambiar el nombre de un archivo sin perder su extensión.","Mover archivos con Retalla y Enganxa.","Enviar a la Paperera solo lo que no sirve."],
  despues:"haz la <b>Parte 3</b> en tu ordenador y sube a Aules este PDF y la <b>captura</b> de tu carpeta del proyecto.",
  entregaPdf:"Entrega en Aules la captura S01.01_Captura_Nombre.png con la carpeta Proyecto_Evento_Nombre y sus tres subcarpetas.",
  errores:[["conceptos","al unir los conceptos"],["proyecto","al crear la carpeta del proyecto"],["subcarpetas","al crear las subcarpetas"],["renombrar","al cambiar el nombre"],["ordenar","al ordenar los archivos"]],
  ficha:[
   {id:"f1",t:"Archivos y carpetas",ayuda:"Dos preguntas para empezar.",q:[
     ["¿Qué es una carpeta?",["Un documento de texto","Un lugar para guardar y organizar archivos","Un programa para escribir"],1,"Las carpetas son como los archivadores de una oficina: guardan y ordenan los archivos."],
     ["Dentro de Proyecto_Evento_Lucia está la carpeta Imagenes. ¿Qué es Imagenes?",["Una subcarpeta","Una extensión","Un archivo de imagen"],0,"Una carpeta que está dentro de otra se llama subcarpeta."]]},
   {id:"f2",t:"Nombres que se entienden",ayuda:"Un buen nombre dice qué hay dentro sin abrir el archivo.",q:[
     ["¿Qué nombre es mejor para la invitación de tu evento?",["documento1.odt","02_Invitacion_evento_Lucia.odt","nuevo final de verdad.odt"],1,"Dice qué contiene, lleva un número de orden y no tiene espacios."],
     ["¿Qué nombre NO se puede usar?",["Cartel_evento.odt","Cartel:evento?.odt","03_Cartel_evento.odt"],1,"Los caracteres \\ / : * ? \" < > | no se pueden usar en el nombre de un archivo."]]},
   {id:"f3",t:"La extensión",ayuda:"Las letras que van después del último punto.",q:[
     ["En el archivo Horario_evento_Lucia.odt, ¿cuál es la extensión?",["Horario","evento_Lucia",".odt"],2,"La extensión va después del último punto e indica el tipo de archivo."],
     ["Un archivo que termina en .png es…",["Una imagen","Un documento de Writer","Una hoja de cálculo"],0,"PNG y JPG son extensiones de imágenes."],
     ["Al cambiar el nombre, borras .odt sin querer. ¿Qué puede pasar?",["Nada, todo sigue igual","Que el archivo deje de abrirse con Writer","Que el archivo ocupe menos"],1,"Sin la extensión, el ordenador no sabe con qué programa abrir el archivo."]]},
   {id:"f4",t:"¿Mover o copiar?",ayuda:"Piensa cuántos archivos quedan al final.",q:[
     ["Mueves un archivo de Baixades a Documentos_Writer. ¿Cuántos archivos hay ahora?",["Uno: solo ha cambiado de sitio","Dos: el original y la copia","Ninguno"],0,"Mover cambia el archivo de lugar: sigue habiendo uno solo."],
     ["Quieres guardar otro ejemplar igual del archivo en Copia_Seguridad. ¿Qué haces?",["Retalla y Enganxa (mover)","Copia y Enganxa (copiar)","Reanomena"],1,"Copiar crea otro archivo igual y el original se queda en su sitio."]]},
   {id:"f5",t:"Eliminar y buscar",ayuda:"Tres situaciones de clase.",q:[
     ["Antes de enviar un archivo a la papelera compruebas que…",["Es el correcto, ya no sirve y es tuyo","Tiene un nombre largo","Es el más antiguo de la carpeta"],0,"Así no borras nada importante ni el trabajo de otra persona."],
     ["Has enviado un archivo a la papelera por error. ¿Se puede recuperar?",["No, nunca","Sí, mientras no se vacíe la papelera","Solo si lo pide el profesor"],1,"La papelera guarda los archivos hasta que la vaciamos."],
     ["No recuerdas dónde guardaste la invitación. ¿Qué escribes en el buscador?",["Invitacion","documento","archivo"],0,"Con nombres significativos, encontrar un archivo es muy fácil."]]}
  ]};

var FS=D("",[D("Escriptori"),D("Baixades",[F("documento1.odt"),F("logo_evento.png"),F("nuevo (2).odt")]),D("Documents",[F("Normas_aula.pdf")]),D("Imatges"),D("Paperera")]);
var SUB=["Documentos_Writer","Imagenes","Copia_Seguridad"];
var S={u:nuevoUnir(),fm:fmNuevo(FS,[]),proy:"",datos:""};
function fmS(){return S.fm;}
function rutaProy(){return ["Documents",S.proy];}
function enRuta(p){return S.fm.path.join("/")===p.join("/");}
function dirProy(){return S.proy?fsNodo(FS,rutaProy()):null;}
function subHecha(n){var d=dirProy();return !!(d&&fsHijo(d,n)&&fsHijo(d,n).d);}
function okSub(){return SUB.every(subHecha);}
function dondeEsta(n){
  var r=null;(function bus(dir,p){dir.k.forEach(function(x){if(x.n===n&&!x.d&&p[0]!=="Paperera")r=p.slice();if(x.d)bus(x,p.concat([x.n]));});})(FS,[]);
  return r;
}
function okDatos(){var p=dondeEsta(S.datos);return !!(p&&p.join("/")===rutaProy().concat(["Documentos_Writer"]).join("/"));}
function okLogo(){var p=dondeEsta("logo_evento.png");return !!(p&&p.join("/")===rutaProy().concat(["Imagenes"]).join("/"));}
function okPap(){return !fsHijo(fsNodo(FS,["Baixades"]),"nuevo (2).odt")&&!!fsHijo(fsHijo(FS,"Paperera"),"nuevo (2).odt");}
function okOrden(){return okDatos()&&okLogo()&&okPap();}
function nombreValido(v,pref,clave){
  if(/\s/.test(v))return "El nombre no puede tener <b>espacios</b>. Usa el guion bajo: <b>"+pref+"Lucia</b>.";
  if(tieneTilde(v))return "Quita las <b>tildes</b> y la <b>ñ</b> del nombre: así no dará problemas en ningún ordenador.";
  if(v.toLowerCase().indexOf(pref.toLowerCase())!==0)return "El nombre debe empezar por <b>"+pref+"</b>.";
  if(!/^[A-Za-z]+$/.test(v.slice(pref.length)))return "Detrás de <b>"+pref+"</b> escribe solo tu nombre, con letras.";
  return "";
}
function fallo(clave,m){intento(clave,false);error(clave);return m;}

function fmV(acc,st,inf){
  if(paso===1){
    if(acc==="nova"){
      if(S.proy)return "Ya tienes la carpeta <b>"+esc(S.proy)+"</b>. Pulsa <b>Siguiente</b>.";
      if(!enRuta(["Documents"]))return fallo("proyecto","Ahora estás en <b>"+rutaTxt(st.path)+"</b>. La carpeta del proyecto va dentro de <b>Documents</b>: pulsa <b>📄 Documents</b> a la izquierda.");
      var e=nombreValido(inf.nom,"Proyecto_Evento_");if(e)return fallo("proyecto",e);
      return "";
    }
    return "En este paso solo vamos a crear una carpeta.";
  }
  if(paso===2){
    if(acc==="nova"){
      if(!enRuta(rutaProy()))return fallo("subcarpetas",enRuta(["Documents"])?"Estás en <b>Documents</b>. Primero entra en <b>"+esc(S.proy)+"</b> con doble clic.":"Las subcarpetas van dentro de <b>"+esc(S.proy)+"</b>. Ve a <b>Documents</b> y entra en ella con doble clic.");
      var v=inf.nom;
      if(/\s/.test(v))return fallo("subcarpetas","Sin espacios: usa el guion bajo, por ejemplo <b>Copia_Seguridad</b>.");
      if(tieneTilde(v))return fallo("subcarpetas","Sin tildes: escribe <b>Imagenes</b>, sin acento.");
      if(SUB.indexOf(v)<0){
        var ci=SUB.filter(function(s){return s.toLowerCase()===v.toLowerCase();})[0];
        if(ci)return fallo("subcarpetas","Casi: escríbelo exactamente así, con mayúsculas: <b>"+ci+"</b>.");
        return fallo("subcarpetas","«"+esc(v)+"» no es una de las carpetas del proyecto. Necesitamos: <b>"+SUB.join("</b>, <b>")+"</b>.");
      }
      return "";
    }
    return "En este paso solo vamos a crear carpetas.";
  }
  if(paso===3){
    if(acc==="ren"){
      if(inf.viejo!=="documento1.odt")return "Hoy cambiamos el nombre de <b>documento1.odt</b>, que está en <b>Baixades</b>.";
      var nom=inf.nom;
      if(!/\./.test(nom))return fallo("renombrar","¡Cuidado! Has borrado la extensión <b>.odt</b>. Sin ella, el ordenador no sabe con qué programa abrir el archivo.");
      if(ext(nom)!=="odt")return fallo("renombrar","La extensión tiene que seguir siendo <b>.odt</b>: es un documento de Writer.");
      var e2=nombreValido(base(nom),"01_Datos_evento_");if(e2)return fallo("renombrar",e2);
      return "";
    }
    if(acc==="nova")return "En este paso no hace falta crear carpetas.";
    return "En este paso solo cambiamos el nombre de <b>documento1.odt</b>.";
  }
  if(paso===4){
    if(acc==="c")return fallo("ordenar","<b>Copia</b> dejaría dos archivos iguales y Baixades seguiría desordenada. Aquí queremos <b>moverlo</b>: usa <b>Retalla</b>.");
    if(acc==="x"){var n=fsHijo(fsNodo(FS,st.path),inf.n);if(n&&n.d)return "Hoy no movemos carpetas, solo archivos.";if(inf.n==="nuevo (2).odt")return "<b>nuevo (2).odt</b> está vacío: no hace falta moverlo, envíalo a la <b>Paperera</b>.";return "";}
    if(acc==="v"){
      var dest=inf.a.join("/");
      if(inf.n==="logo_evento.png"&&dest!==rutaProy().concat(["Imagenes"]).join("/"))return fallo("ordenar","<b>logo_evento.png</b> es una imagen: va en <b>"+esc(S.proy)+" › Imagenes</b>.");
      if(inf.n===S.datos&&dest!==rutaProy().concat(["Documentos_Writer"]).join("/"))return fallo("ordenar","<b>"+esc(S.datos)+"</b> es un documento de Writer: va en <b>"+esc(S.proy)+" › Documentos_Writer</b>.");
      return "";
    }
    if(acc==="pap"){if(inf.n!=="nuevo (2).odt")return fallo("ordenar","¡Alto! <b>"+esc(inf.n)+"</b> lo necesitamos. Solo enviamos a la papelera lo que no sirve: <b>nuevo (2).odt</b>, que está vacío.");return "";}
    if(acc==="nova")return "Ya tienes todas las carpetas. Ahora toca ordenar los archivos.";
    if(acc==="ren")return "Ya no hace falta cambiar nombres. Ahora toca ordenar los archivos.";
  }
  return "";
}
function fmFet(acc,st,inf){
  if(acc==="entra"){return;}
  if(paso===1&&acc==="nova"){S.proy=inf.nom;intento("proyecto",true);st.msg="✔ <b>"+elogio(3)+"</b> Ya tienes la carpeta <b>"+esc(inf.nom)+"</b> dentro de Documents. Su ruta es <b>Documents › "+esc(inf.nom)+"</b>.";st.ok=true;return;}
  if(paso===2&&acc==="nova"){intento("sub_"+inf.nom,true);st.msg="✔ <b>"+elogio(semilla(inf.nom))+"</b> Subcarpeta <b>"+esc(inf.nom)+"</b> creada."+(okSub()?" ¡Ya tienes las tres!":" Crea la siguiente.");st.ok=true;return;}
  if(paso===3&&acc==="ren"){S.datos=inf.nom;intento("renombrar",true);st.msg="✔ <b>"+elogio(5)+"</b> Ahora el nombre dice qué hay dentro: <b>"+esc(inf.nom)+"</b>. Y la extensión <b>.odt</b> sigue ahí.";st.ok=true;return;}
  if(paso===4){
    if(acc==="v"){intento("mover_"+inf.n,true);st.msg="✔ <b>"+elogio(semilla(inf.n))+"</b> <b>"+esc(inf.n)+"</b> ya está en <b>"+esc(inf.a[inf.a.length-1])+"</b> y ha desaparecido de Baixades: lo has <b>movido</b>.";st.ok=true;}
    if(acc==="pap"){intento("papelera",true);st.msg="✔ <b>"+elogio(2)+"</b> <b>nuevo (2).odt</b> está en la <b>Paperera</b>. Si nos equivocamos, aún se podría recuperar.";st.ok=true;}
    if(okOrden())finPractica(["Carpeta del proyecto: Documents > "+S.proy,"Subcarpetas: "+SUB.join(", "),"Archivo renombrado: documento1.odt -> "+S.datos,"Movidos: "+S.datos+" -> Documentos_Writer; logo_evento.png -> Imagenes","Enviado a la Paperera: nuevo (2).odt"]);
  }
}
function arbol(){
  var d=dirProy(); if(!d)return "";
  var l=["📁 "+S.proy];
  ordenar(d.k).forEach(function(x,i,a){var ult=i===a.length-1;l.push((ult?"└── ":"├── ")+icono(x)+" "+x.n);(x.k||[]).forEach(function(y,j,b){l.push((ult?"    ":"│   ")+(j===b.length-1?"└── ":"├── ")+icono(y)+" "+y.n);});});
  return '<pre style="background:#f4f4f4;border:2px solid #ccc;border-radius:10px;padding:10px 14px;font-size:16px;margin:12px 0 0;overflow:auto">'+esc(l.join("\n"))+'</pre>';
}
function pasoFm(){return {fm:fmS,fmV:fmV,fmFet:fmFet,entrar:function(){S.fm.msg="";S.fm.ctx=null;S.fm.dlg=null;}};}
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}

PRACTICA=[
 {t:"1. Las palabras clave",ayuda:"Pulsa un <b>nombre</b> y después su <b>descripción</b>. Las parejas correctas se marcan en verde.",
  unir:{st:S.u,clave:"conceptos",items:[
    ["archivo","Archivo","Guarda información: un texto, una imagen, una hoja de cálculo…"],
    ["carpeta","Carpeta","Sirve para guardar y organizar archivos."],
    ["subcarpeta","Subcarpeta","Es una carpeta que está dentro de otra carpeta."],
    ["extension","Extensión","Son las letras después del último punto (.odt) e indican el tipo de archivo."],
    ["ruta","Ruta","Es el camino de carpetas para llegar a un archivo: Documents › Proyecto › …"]]},
  html:function(){var u=this.unir;return unirChips(u)+unirRecs(u)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 ext2(pasoFm(),{t:"2. La carpeta del proyecto",ayuda:"Pulsa <b>📄 Documents</b> a la izquierda. Después, <b>botón derecho</b> en una zona vacía › <b>Crea nou › Carpeta…</b> Nombre: <b>Proyecto_Evento_</b> y tu nombre, sin espacios ni tildes.",
  html:function(){return fmHTML(S.fm)+objetivo([["Carpeta <b>Proyecto_Evento_…</b> dentro de Documents",!!S.proy]])+msg(S.fm.msg,S.fm.ok);},
  ok:function(){return !!S.proy;}}),
 ext2(pasoFm(),{t:"3. Las subcarpetas",ayuda:"Entra en tu carpeta del proyecto con <b>doble clic</b>. Dentro, crea estas tres carpetas con <b>botón derecho › Crea nou › Carpeta…</b>",
  html:function(){return fmHTML(S.fm)+objetivo(SUB.map(function(n){return ["<b>"+n+"</b>",subHecha(n)];}))+msg(S.fm.msg,S.fm.ok);},
  ok:okSub}),
 ext2(pasoFm(),{t:"4. Un nombre que se entiende",ayuda:"Ve a <b>⬇️ Baixades</b>. Pulsa con el <b>botón derecho</b> sobre <b>documento1.odt</b> › <b>Reanomena…</b> (o tecla <b>F2</b>). Nombre nuevo: <b>01_Datos_evento_</b> y tu nombre. ¡No borres <b>.odt</b>!",
  html:function(){return fmHTML(S.fm)+objetivo([["documento1.odt → <b>01_Datos_evento_…odt</b>",!!S.datos]])+msg(S.fm.msg,S.fm.ok);},
  ok:function(){return !!S.datos;}}),
 ext2(pasoFm(),{t:"5. Cada archivo en su sitio",ultimo:true,ayuda:"Para <b>mover</b>: botón derecho sobre el archivo › <b>Retalla</b>. Entra en la carpeta de destino › botón derecho en una zona vacía › <b>Enganxa</b>. El archivo <b>nuevo (2).odt</b> está vacío: envíalo a la <b>Paperera</b>.",
  html:function(){
    var h=fmHTML(S.fm)+objetivo([["<b>"+esc(S.datos||"01_Datos…")+"</b> → Documentos_Writer",okDatos()],["<b>logo_evento.png</b> → Imagenes",okLogo()],["<b>nuevo (2).odt</b> → Paperera",okPap()]]);
    if(okOrden())h+=arbol()+bloqueFinPractica(); else h+=msg(S.fm.msg,S.fm.ok);
    return h;
  },ok:okOrden})
];
