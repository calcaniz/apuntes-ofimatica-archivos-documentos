CFG={id:"S02.04",slug:"s0204",nombre:"Revisamos el texto y usamos una plantilla",app:"📝 Writer virtual",
  aprendido:["Revisar la ortografía con Eines › Ortografia… (F7) leyendo cada sugerencia.","Usar Corregeix, Ignora-ho una vegada y Afig al diccionari cuando toca.","Encontrar con las Marques de formatació los errores que el corrector no ve.","Crear un documento a partir de una plantilla .ott sin modificarla.","Guardar el documento nuevo en formato ODT."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF, tu plantilla <b>Plantilla_programa_Nombre.ott</b> y tu documento revisado.",
  entregaPdf:"Entrega en Aules la plantilla Plantilla_programa_Nombre.ott y el programa revisado Programa_evento_Nombre.odt.",
  errores:[["botons","al unir los conceptos"],["ortografia","con el corrector ortográfico"],["revisio","al buscar errores a mano"],["plantilla","al usar la plantilla"],["guardar","al guardar el documento"]],
  ficha:[
   {id:"f1",t:"El corrector",ayuda:"Writer te ayuda, pero no lo ve todo.",q:[
     ["¿Qué indica una línea roja ondulada debajo de una palabra?",["Que Writer cree que está mal escrita","Que está en negrita","Que es un enlace"],0,"Pulsa con el botón derecho para ver las sugerencias."],
     ["¿Qué tecla abre la revisión ortográfica de todo el documento?",["F7","F2","F12"],0,"También con Eines › Ortografia…"]]},
   {id:"f2",t:"Los botones del corrector",ayuda:"¿Qué botón pulsas?",q:[
     ["Writer marca el nombre de tu evento, «KDD49», que está bien escrito y sale muchas veces.",["Afig al diccionari","Corregeix","Tanca"],0,"Así no lo volverá a marcar."],
     ["Writer marca «competicion». ¿Qué haces?",["Elijo «competición» y pulso Corregeix","Afig al diccionari","Ignora-ho una vegada"],0,"Es una falta de verdad: hay que corregirla."],
     ["¿Por qué no elegimos la primera sugerencia sin leerla?",["Porque puede no ser la palabra correcta","Porque está prohibido","Porque es más lento"],0,"Lee siempre las sugerencias."]]},
   {id:"f3",t:"Lo que el corrector no ve",ayuda:"La última revisión la haces tú.",q:[
     ["¿Qué error NO suele detectar el corrector?",["Dos espacios seguidos o una palabra repetida","Una palabra mal escrita","Una palabra inventada"],0,"Por eso lees el documento al final."],
     ["¿Para qué sirven las Marques de formatació (Ctrl + F10)?",["Para ver los espacios como puntos y los finales de párrafo","Para poner negrita","Para imprimir"],0,"Así encuentras los espacios dobles y los Intro de más."]]},
   {id:"f4",t:"Las plantillas",ayuda:"Un modelo para reutilizar.",q:[
     ["¿Qué extensión tiene una plantilla de Writer?",[".ott",".odt",".pdf"],0,"Los documentos son .odt; las plantillas, .ott."],
     ["¿Qué pasa cuando abres un archivo .ott?",["Writer crea un documento nuevo sin título y la plantilla no cambia","Se abre la plantilla y la modificas","Se borra la plantilla"],0,"Por eso la plantilla siempre queda limpia."],
     ["¿Qué haces con un texto como «ESCRIBE AQUÍ EL LUGAR»?",["Lo selecciono y escribo encima el lugar","Lo dejo así","Lo borro con todo su formato"],0,"Cambias el contenido, no el formato."]]},
   {id:"f5",t:"Guardar",ayuda:"Documento o plantilla.",q:[
     ["Has rellenado la plantilla. ¿Cómo guardas el documento?",["Anomena i guarda, tipo Document de text ODF (.odt)","Anomena i guarda, tipo plantilla (.ott)","No hace falta guardarlo"],0,"Es un documento nuevo: lo guardas como ODT."],
     ["Quieres reutilizar tu propio programa como modelo. ¿Qué tipo eliges al guardarlo?",["Plantilla de document de text ODF (.ott)","Text (.txt)","PDF"],0,"Así tendrás tu propia plantilla."]]}
  ]};

var PROY="Proyecto_Evento_Lucia";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var FS=D("",[D("Escriptori"),D("Baixades"),D("Documents",[D(PROY,[D("Documentos_Writer",[F("Programa_evento_Lucia.odt"),F("Plantilla_programa.ott")]),D("Imagenes",[F("logo_evento.png")]),D("PDF"),D("Copia_Seguridad")])]),D("Imatges"),D("Paperera")]);
var S={u:nuevoUnir(),
  or:{wm:{menu:null,sub:null},dlg:false,i:0,sug:0,fet:{},msg:"",ok:false},
  rv:{wm:{menu:null,sub:null},marques:false,fix:{},msg:"",ok:false},
  pl:{wm:{menu:null,sub:null},fd:null,abierta:false,selP:null,fet:{},msg:"",ok:false},
  gd:{wm:{menu:null,sub:null},fd:null,guardado:false,archivo:"",msg:"",ok:false}};

/* paso 2: ortografía */
var PAL=[
 {w:"competicion",frase:"Habrá una competicion de motos clásicas.",sug:["competición","competiciones","competidor"],ok:"cor",corr:0,x:"Era una falta: <b>competición</b> lleva tilde."},
 {w:"KDD49",frase:"La KDD49 se celebra en Cheste.",sug:["KDD","KD"],ok:"afig",x:"<b>KDD49</b> es el nombre del evento: está bien escrito. Con <b>Afig al diccionari</b> Writer no lo volverá a marcar."},
 {w:"exibición",frase:"Después habrá una exibición de acrobacias.",sug:["exhibiciones","exhibición","eximición"],ok:"cor",corr:1,x:"Has leído las sugerencias y has elegido <b>exhibición</b>, en singular."}
];
function textoOrto(){
  var t=[["Habrá una ",0],["competicion",1],[" de motos clásicas. La ",0],["KDD49",2],[" se celebra en Cheste. Después habrá una ",0],["exibición",3],[" de acrobacias.",0]];
  return '<p class="w-p" style="font-size:16px;line-height:1.7">'+t.map(function(x){if(!x[1])return esc(x[0]);var p=PAL[x[1]-1],f=S.or.fet[x[1]-1];var v=f?(p.ok==="cor"?p.sug[p.corr]:p.w):p.w;return '<span style="'+(f?"background:#e8f5e9":"text-decoration:underline wavy #d00;text-decoration-skip-ink:none")+(S.or.dlg&&S.or.i===x[1]-1&&!f?";background:#fff3a0":"")+'">'+esc(v)+'</span>';}).join("")+'</p>';
}
function dlgOrto(){
  var st=S.or,p=PAL[st.i];
  var fr=esc(p.frase).replace(esc(p.w),'<span style="color:#d00;font-weight:700">'+esc(p.w)+'</span>');
  var h='<label>No és al diccionari:</label><div style="background:#fff;border:1px solid #999;padding:6px 8px;border-radius:4px">'+fr+'</div>'+
    '<label>Suggeriments:</label><div style="background:#fff;border:1px solid #999;border-radius:4px">'+p.sug.map(function(s,k){return '<div data-act="sug" data-k="'+k+'" style="padding:4px 8px;cursor:pointer;'+(st.sug===k?"background:#3daee9;color:#fff":"")+'">'+esc(s)+'</div>';}).join("")+'</div>'+
    '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">'+[["ign","Ignora-ho una vegada"],["igntot","Ignora-ho tot"],["afig","Afig al diccionari"]].map(function(b){return '<button data-act="'+b[0]+'" style="font:inherit;font-size:14px;padding:5px 10px;border:1px solid #888;border-radius:4px;background:#fff;cursor:pointer">'+b[1]+'</button>';}).join("")+'</div>';
  return dialeg("Ortografia: castellà (Espanya)",h,[["tanca","Tanca"],["cor","Corregeix",1]],"odlg");
}
function okOrto(){return Object.keys(S.or.fet).length===PAL.length;}
function abrirOrto(){var st=S.or;if(okOrto()){st.msg="✔ La revisión ya está completa.";st.ok=true;return;}st.dlg=true;st.sug=0;st.msg="";}
function accionOrto(a){
  var st=S.or,p=PAL[st.i];
  var bien=(a===p.ok&&(a!=="cor"||st.sug===p.corr))||(p.ok==="afig"&&(a==="ign"||a==="igntot"));
  if(!bien){
    intento("orto"+st.i,false);error("ortografia");
    if(p.ok==="cor"&&a==="cor")st.msg="Lee bien las sugerencias: <b>"+esc(p.sug[st.sug])+"</b> no es la palabra que buscamos. Pulsa la correcta y después <b>Corregeix</b>.";
    else if(p.ok==="cor"&&a==="afig")st.msg="¡No! Añadirías una <b>falta</b> al diccionario y Writer ya no la marcaría nunca.";
    else if(p.ok==="cor")st.msg="<b>"+esc(p.w)+"</b> es una falta de verdad: no la ignores. Elige la sugerencia correcta y pulsa <b>Corregeix</b>.";
    else st.msg="<b>Corregeix</b> cambiaría el nombre del evento por «"+esc(p.sug[st.sug])+"». El nombre está bien escrito.";
    st.ok=false;return;
  }
  intento("orto"+st.i,true);st.fet[st.i]=true;
  st.msg="✔ <b>"+elogio(st.i+1)+"</b> "+p.x+(p.ok==="afig"&&a!=="afig"?" (Ignorar también vale, pero como el nombre sale muchas veces, es mejor <b>Afig al diccionari</b>.)":"");st.ok=true;
  st.i++;st.sug=0;
  if(st.i>=PAL.length){st.dlg=false;st.msg+=" <br>ℹ️ <i>S'ha completat la revisió ortogràfica.</i>";}
}

/* paso 3: revisión a mano */
var TOK=[{t:"El"},{t:"evento"},{t:"evento",e:"rep",f:"",x:"Palabra <b>repetida</b>: «el evento evento». El corrector no la marca porque las dos palabras existen."},{t:"empezará"},{t:"el",e:"esp",x:"Había <b>dos espacios</b> entre «el» y «sábado». Con las marcas de formato se ven como <b>··</b>."},{t:"sábado"},{t:"con"},{t:"una"},{t:"exhibición"},{t:"de"},{t:"motos",e:"coma",x:"Había un espacio <b>antes de la coma</b>."},{t:"música"},{t:"y"},{t:"comida."},{t:"habrá",e:"may",f:"Habrá",x:"Después de un punto, <b>mayúscula</b>: «Habrá»."},{t:"premios"},{t:"para"},{t:"todos."}];
var NERR=TOK.filter(function(t){return t.e;}).length;
function nFix(){return Object.keys(S.rv.fix).length;}
function textoRev(){
  var m=S.rv.marques, sp=m?'<span class="marca">·</span>':" ", h='<p class="w-p" style="font-size:16px;line-height:1.8">';
  TOK.forEach(function(t,i){
    var f=t.e&&S.rv.fix[i];
    if(t.e==="rep"&&f)return;
    var txt=t.e==="may"&&f?t.f:t.t;
    h+='<span class="w-w" data-act="tok" data-i="'+i+'" style="cursor:pointer'+(f?";background:#e8f5e9":"")+'">'+esc(txt)+'</span>';
    if(i<TOK.length-1){
      if(t.e==="esp"&&!f)h+=m?'<span class="marca">··</span>':"&nbsp;&nbsp;";
      else if(t.e==="coma"&&!f)h+=sp+",";
      else if(t.e==="coma"&&f)h+=","+sp;
      else h+=sp;
    }
  });
  return h+(m?'<span class="marca">¶</span>':"")+'</p>';
}
function toggleMarques(){var s=S.rv;s.marques=!s.marques;s.msg=s.marques?"Ahora ves los espacios como <b>puntos</b> (·) y el final del párrafo como <b>¶</b>. Busca los errores.":"Has desactivado las marcas de formato.";s.ok=true;}

/* paso 4: plantilla */
var PH=[["nom","NOMBRE DEL EVENTO","KDD49 Valencia","font-family:'Liberation Sans',Arial,sans-serif;font-size:24px;font-weight:700;text-align:center;color:#81501c"],["lloc","ESCRIBE AQUÍ EL LUGAR","Circuito de Cheste","font-size:16px;text-align:center"],["data","FECHA Y HORA","Sábado 14 de marzo · 10:00","font-size:16px;font-weight:700;text-align:center"]];
var VALS=["Sábado 14 de marzo · 10:00","KDD49 Valencia","Circuito de Cheste"];
function okPl(){return S.pl.abierta&&PH.every(function(p){return S.pl.fet[p[0]];});}
function abrirPl(){var s=S.pl;if(s.abierta){s.msg="La plantilla ya está abierta.";s.ok=true;return;}s.fd=fdNuevo({fs:FS,path:["Documents",PROY],modo:"obri",titulo:"Obri",ftxt:"Tots els formats",filtro:function(n){return /\.(ott|odt)$/i.test(n.n);}});s.msg="";}
function plOk(st){
  var s=S.pl,cur=fsNodo(FS,st.path),n=st.sel?fsHijo(cur,st.sel):null;
  if(!n||n.d){st.msg="Primero pulsa sobre un archivo.";return;}
  if(n.n!=="Plantilla_programa.ott"){st.msg="Ese es un <b>documento</b> (.odt). Busca la <b>plantilla</b>: el archivo que termina en <b>.ott</b>.";intento("obrir",false);error("plantilla");return;}
  s.fd=null;s.abierta=true;intento("obrir",true);s.msg="✔ Fíjate en el título: <b>Sense títol 1</b>. Writer ha creado un <b>documento nuevo</b> a partir de la plantilla; la plantilla no se toca. Ahora cambia los textos de ejemplo.";s.ok=true;
}
function paginaPl(){
  var s=S.pl;
  return '<div style="border:2px solid #ff9944;border-radius:6px;padding:6px;margin-bottom:8px;text-align:center;font-family:Arial;font-size:12px;color:#81501c">PROGRAMA OFICIAL</div>'+PH.map(function(p){var f=s.fet[p[0]],sel=s.selP===p[0];return '<p class="w-p" style="'+p[3]+'"><span data-act="ph" data-k="'+p[0]+'" style="cursor:pointer;border-radius:3px;'+(sel?"background:#9ec5ff;":f?"":"background:#f1f1f1;")+'">'+esc(f?p[2]:p[1])+'</span></p>';}).join("")+
    '<p class="w-p" style="text-align:justify;font-size:14px">Bienvenidos al programa del evento. Aquí encontrarás todas las actividades, los horarios y las normas.</p><div style="border-top:2px solid #ff9944;margin-top:10px;padding-top:4px;font-size:11px;color:#81501c;text-align:center">Pie de página de la plantilla</div>';
}

/* paso 5: guardar */
function abrirGd(aviso){var s=S.gd;if(s.guardado)return;s.fd=fdNuevo({fs:FS,path:["Documents"],modo:"guarda",titulo:"Anomena i guarda",tipo:"odt",ph:"Programa_KDD49_Valencia",tipos:[["odt","Document de text ODF (.odt)"],["ott","Plantilla de document de text ODF (.ott)"],["docx","Word 2007–365 (.docx)"]]});s.msg=aviso?"ℹ️ El documento no tiene nombre: <b>Guarda</b> abre <b>Anomena i guarda</b>. ¡Fíjate en el tipo!":"";s.ok=true;}
function gdOk(st){
  var s=S.gd,n=(st.nom||"").trim().replace(/\.(odt|ott)$/i,""),m="",ruta=st.path.join("/");
  if(ruta!==["Documents",PROY,"Documentos_Writer"].join("/"))m="El documento va en <b>"+PROY+" › Documentos_Writer</b>.";
  else if(!n)m="Escribe el nombre en <b>Nom</b>.";
  else if(/\s/.test(n)||tieneTilde(n))m="Sin espacios ni tildes: <b>Programa_KDD49_Valencia</b>.";
  else if(n.toLowerCase()==="plantilla_programa")m="¡Cuidado! Así <b>sobrescribirías la plantilla</b>. Pon un nombre nuevo: <b>Programa_KDD49_Valencia</b>.";
  else if(!/^programa_/i.test(n))m="El nombre debe empezar por <b>Programa_</b>, por ejemplo <b>Programa_KDD49_Valencia</b>.";
  else if(st.tipo==="ott")m="Ese tipo es <b>Plantilla</b> (.ott). Esto es un <b>documento</b> para trabajar: elige <b>Document de text ODF (.odt)</b>.";
  else if(st.tipo==="docx")m="DOCX es el formato de Word. Para Writer usamos <b>ODT</b>.";
  if(m){st.msg=m;intento("guardar",false);error("guardar");return;}
  intento("guardar",true);s.archivo=n+".odt";fsNodo(FS,["Documents",PROY,"Documentos_Writer"]).k.push(F(s.archivo));s.guardado=true;s.fd=null;s.msg="✔ <b>"+elogio(5)+"</b> Documento guardado como <b>"+esc(s.archivo)+"</b>. La plantilla <b>Plantilla_programa.ott</b> sigue intacta para la próxima vez.";s.ok=true;
  finPractica(["Corrector (F7): competicion -> competición, KDD49 al diccionario, exibición -> exhibición","Errores encontrados con las marcas de formato: "+NERR+" de "+NERR,"Plantilla Plantilla_programa.ott abierta: documento nuevo sin título","Textos de ejemplo sustituidos","Guardado como "+s.archivo+" (ODT)"]);
}
function menuFitxer(){return [["nou","Nou",null,"sub"],["obri","Obri…","Ctrl+O"],["plant","Plantilles",null,"sub"],["tanca","Tanca"],"-",["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"]];}
function subVacio(){return [["x","(no lo necesitamos)",null,"off"]];}

PRACTICA=[
 {t:"1. Las herramientas de revisión",ayuda:"Pulsa un <b>nombre</b> y después lo que <b>hace</b>.",
  unir:{st:S.u,clave:"botons",items:[
    ["cor","Corregeix","Cambia la palabra por la sugerencia que has elegido."],
    ["ign","Ignora-ho una vegada","Deja la palabra como está y sigue revisando."],
    ["afig","Afig al diccionari","Guarda la palabra como correcta, por ejemplo el nombre del evento."],
    ["marq","Marques de formatació","Muestra los espacios como puntos y los finales de párrafo con ¶."],
    ["ott","Plantilla (.ott)","Un modelo que reutilizamos para crear documentos con el mismo formato."]]},
  html:function(){var u=this.unir;return unirChips(u)+unirRecs(u)+msg(u.st.msg,u.st.ok);},
  ok:function(){return unirOk(this.unir);}},
 {t:"2. El corrector ortográfico",ayuda:"Abre <b>Eines › Ortografia…</b> (o pulsa <b>F7</b>). Para cada palabra, <b>lee las sugerencias</b> y decide: <b>Corregeix</b>, <b>Ignora-ho una vegada</b> o <b>Afig al diccionari</b>.",
  wm:S.or.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Eines"?[["orto","Ortografia…","F7"],["auto","Correcció automàtica",null,"sub"],"-",["comptar","Recompte de paraules…"]]:null;},
  onMenuMal:function(m){S.or.msg="El corrector está en el menú <b>Eines</b>.";S.or.ok=false;error("ortografia");},
  onMenu:function(k){if(k==="orto")abrirOrto();else{S.or.msg="Busca <b>Ortografia…</b>";S.or.ok=false;}},
  onTb:function(k){if(k==="ortografia")abrirOrto();},
  onKey:function(e){if(e.key==="F7"){e.preventDefault();abrirOrto();return true;}return false;},
  onAct:function(a,b){var st=S.or;if(!st.dlg)return;if(a==="sug"){st.sug=+b.getAttribute("data-k");return;}if(a==="tanca"){st.dlg=false;st.msg="Has cerrado la revisión. Vuelve a abrirla con <b>F7</b> para terminar.";st.ok=false;return;}if(a==="cor"||a==="ign"||a==="igntot"||a==="afig")accionOrto(a);},
  html:function(){var st=S.or;return writer({titulo:"Programa_evento_Lucia.odt",menus:!st.dlg,pagina:textoOrto(),paraules:22,mod:true,dialeg:st.dlg?dlgOrto():""})+objetivo(PAL.map(function(p,k){return [p.w,!!st.fet[k]];}))+msg(st.msg,st.ok);},
  ok:okOrto},
 {t:"3. Lo que el corrector no ve",ayuda:"El corrector ya no marca nada, pero quedan <b>"+NERR+" errores</b>. Activa las <b>Marques de formatació</b> (botón <b>¶</b> o <b>Ctrl + F10</b>) y pulsa cada error: una palabra repetida, dos espacios, un espacio antes de la coma y una minúscula.",
  wm:S.rv.wm,
  menuItems:function(m){return m==="Visualitza"?[["normal","Normal"],["web","Web"],"-",["marq","Marques de formatació","Ctrl+F10"]]:null;},
  onMenuMal:function(){S.rv.msg="Las marcas de formato están en <b>Visualitza</b> o en el botón ¶.";S.rv.ok=false;},
  onMenu:function(k){if(k==="marq")toggleMarques();},
  onTb:function(k){if(k==="marques")toggleMarques();},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key==="F10"){e.preventDefault();toggleMarques();return true;}return false;},
  onAct:function(a,b){
    if(a!=="tok")return;var s=S.rv,i=+b.getAttribute("data-i"),t=TOK[i];
    if(t.e&&!s.fix[i]){s.fix[i]=true;intento("rev_"+t.e,true);s.msg="✔ <b>"+elogio(i)+"</b> "+t.x;s.ok=true;}
    else if(t.e){s.msg="✔ Ese ya está corregido.";s.ok=true;}
    else{intento("rev"+i,false);error("revisio");s.msg="«<b>"+esc(t.t)+"</b>» está bien. "+(s.marques?"":"Pista: activa las <b>Marques de formatació</b> para ver los espacios.");s.ok=false;}
  },
  html:function(){var s=S.rv;return writer({titulo:"Programa_evento_Lucia.odt",menus:true,pagina:textoRev(),paraules:18,mod:true})+objetivo([["Marques de formatació activadas",s.marques],["Errores corregidos: <b>"+nFix()+" de "+NERR+"</b>",nFix()===NERR]])+msg(s.msg,s.ok);},
  ok:function(){return nFix()===NERR;}},
 {t:"4. Un documento desde la plantilla",ayuda:"Abre la plantilla con <b>Fitxer › Obri…</b>: carpeta <b>Documentos_Writer</b>, archivo <b>Plantilla_programa.ott</b>. Después cambia cada texto de ejemplo: <b>pulsa el texto</b> para seleccionarlo y después el <b>dato correcto</b>.",
  wm:S.pl.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Fitxer"?menuFitxer():null;},
  onMenuMal:function(){S.pl.msg="Para abrir un archivo, el menú <b>Fitxer</b>.";S.pl.ok=false;},
  onMenu:function(k){if(k==="obri")abrirPl();else{S.pl.msg="Busca <b>Obri…</b>";S.pl.ok=false;}},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="o"){e.preventDefault();abrirPl();return true;}return false;},
  fd:function(){return S.pl.fd;},fdOk:plOk,fdCancel:function(){S.pl.fd=null;S.pl.msg="Has cancelado. Vuelve a <b>Fitxer › Obri…</b>";S.pl.ok=false;},
  onAct:function(a,b){
    var s=S.pl;
    if(a==="ph"){var k=b.getAttribute("data-k");if(s.fet[k]){s.msg="Ese texto ya está cambiado.";s.ok=true;return;}s.selP=k;s.msg="Texto de ejemplo seleccionado. Ahora pulsa el <b>dato</b> que va aquí.";s.ok=true;return;}
    if(a==="val"){var v=b.getAttribute("data-v");if(!s.selP){s.msg="Primero <b>selecciona</b> el texto de ejemplo que quieres cambiar.";s.ok=false;error("plantilla");return;}
      var p=PH.filter(function(x){return x[0]===s.selP;})[0];
      if(v!==p[2]){s.msg="Ese dato no va en «<b>"+esc(p[1])+"</b>». ¡Prueba otro!";s.ok=false;error("plantilla");intento("ph_"+p[0],false);return;}
      s.fet[p[0]]=true;s.selP=null;intento("ph_"+p[0],true);s.msg="✔ <b>"+elogio(semilla(p[0]))+"</b> Has cambiado el <b>contenido</b> y se mantiene el <b>formato</b> de la plantilla.";s.ok=true;}
  },
  html:function(){
    var s=S.pl,h;
    if(!s.abierta)h=writer({titulo:"Programa_evento_Lucia.odt",menus:!s.fd,pagina:'<p class="w-p">PROGRAMA DEL EVENTO</p><p class="w-p">…</p>',paraules:22,dialeg:s.fd?fdHTML(s.fd):""});
    else{h=writer({titulo:"Sense títol 1",menus:false,pagina:paginaPl(),paraules:24,mod:true});if(!okPl())h+='<div class="chips">'+VALS.map(function(v){return '<button class="chip" data-act="val" data-v="'+esc(v)+'">✍️ '+esc(v)+'</button>';}).join("")+'</div>';}
    return h+objetivo([["Plantilla abierta",s.abierta]].concat(PH.map(function(p){return [esc(p[1].toLowerCase().replace(/^./,function(c){return c.toUpperCase();})),!!s.fet[p[0]]];})))+msg(s.msg,s.ok);
  },ok:okPl},
 {t:"5. Guardar el documento nuevo",ultimo:true,ayuda:"Guarda con <b>Fitxer › Anomena i guarda…</b> en <b>Documentos_Writer</b> con el nombre <b>Programa_KDD49_Valencia</b>. ¡Revisa el <b>tipo</b>: tiene que ser un documento ODT!",
  wm:S.gd.wm,
  menuItems:function(m,sub){if(sub)return subVacio();return m==="Fitxer"?menuFitxer():null;},
  onMenuMal:function(){S.gd.msg="Para guardar, el menú <b>Fitxer</b>.";S.gd.ok=false;},
  onMenu:function(k){if(k==="anomena")abrirGd(false);else if(k==="guarda")abrirGd(true);else{S.gd.msg="Busca <b>Anomena i guarda…</b>";S.gd.ok=false;}},
  onTb:function(k){if(k==="guarda")abrirGd(true);},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"&&!S.gd.fd){e.preventDefault();abrirGd(true);return true;}return false;},
  fd:function(){return S.gd.fd;},fdOk:gdOk,fdCancel:function(){S.gd.fd=null;S.gd.msg="Has cancelado.";S.gd.ok=false;},
  html:function(){var s=S.gd;var h=writer({titulo:s.guardado?s.archivo:"Sense títol 1",menus:!s.fd&&!s.guardado,pagina:paginaPl(),paraules:24,mod:!s.guardado,dialeg:s.fd?fdHTML(s.fd):""});h+=objetivo([["Guardado como documento <b>ODT</b> en Documentos_Writer",s.guardado]]);return h+(s.guardado?msg(s.msg,true)+bloqueFinPractica():msg(s.msg,s.ok));},
  ok:function(){return S.gd.guardado;}}
];
