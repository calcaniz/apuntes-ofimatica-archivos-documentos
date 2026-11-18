CFG={id:"S02.05",slug:"s0205",nombre:"Imprimimos y exportamos el programa",app:"📝 Writer virtual",
  aprendido:["Revisar el documento en la Previsualització d'impressió antes de imprimir.","Corregir lo que queda mal en el papel (espacios vacíos, tablas cortadas).","Elegir la impresora, las páginas y las copias en la ventana Imprimeix.","Exportar a PDF con Fitxer › Exporta com a › Exporta com a PDF… en la carpeta PDF.","Conservar el ODT y hacer una copia de seguridad."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF, tu programa en <b>PDF</b> y tu archivo <b>ODT</b>.",
  entregaPdf:"Entrega en Aules el programa en dos formatos: Programa_evento_Nombre.odt (editable) y Programa_evento_Nombre.pdf (para compartir).",
  errores:[["previ","al revisar la previsualización"],["espais","al corregir el documento"],["imprimir","en la ventana de impresión"],["pdf","al exportar a PDF"],["conservar","al conservar los archivos"]],
  ficha:[
   {id:"f1",t:"La previsualización",ayuda:"Ver el papel antes de imprimir.",q:[
     ["¿Para qué sirve la Previsualització d'impressió?",["Para ver el documento tal como saldrá en el papel","Para imprimir más rápido","Para cambiar la impresora"],0,"Así detectas errores sin gastar papel."],
     ["¿Cómo se abre?",["Fitxer › Previsualització d'impressió (Ctrl + Maj + O)","Insereix › Imatge…","Format › Estil de pàgina…"],0,"Para salir, Tanca la previsualització."]]},
   {id:"f2",t:"La ventana de impresión",ayuda:"Fitxer › Imprimeix… (Ctrl + P).",q:[
     ["¿Qué es lo primero que compruebas en la ventana de impresión?",["Qué impresora está seleccionada","El color de la letra","El nombre del archivo"],0,"Si no, el documento puede salir en otra impresora."],
     ["¿Qué escribes en «Pàgines» para imprimir solo las páginas 1 y 3?",["1,3","1-3","13"],0,"1-3 imprimiría la 1, la 2 y la 3."],
     ["Necesitas un solo ejemplar. ¿Cuántas copias pones?",["1","5","Las que salgan"],0,"Imprimir copias de más gasta papel y tinta."]]},
   {id:"f3",t:"Ahorrar papel",ayuda:"Imprimir con cabeza.",q:[
     ["¿Qué opción ayuda a ahorrar papel?",["Imprimir a doble cara","Imprimir cada página dos veces","Usar A3"],0,"Si la impresora lo permite, imprime por las dos caras."],
     ["La tabla sale cortada en el papel. ¿Qué haces?",["Corrijo el documento y vuelvo a comprobar la previsualización","La imprimo otra vez igual","Recorto el papel"],0,"Nunca vuelvas a imprimir sin revisar."]]},
   {id:"f4",t:"El PDF",ayuda:"Para compartir.",q:[
     ["¿En qué menú está la opción para exportar a PDF?",["Fitxer › Exporta com a › Exporta com a PDF…","Edita › Desfés","Taula › Propietats…"],0,"También con el botón PDF de la barra de herramientas."],
     ["¿Para qué usamos el PDF?",["Para compartir o enviar el documento terminado","Para seguir editándolo","Para hacer plantillas"],0,"El PDF se ve igual en cualquier ordenador o móvil."]]},
   {id:"f5",t:"Conservar",ayuda:"ODT y PDF.",q:[
     ["Ya tienes el PDF. ¿Borras el ODT?",["No: si hay que cambiar algo, lo cambio en el ODT y vuelvo a exportar","Sí, ya no sirve","Sí, ocupa mucho"],0,"El ODT es el archivo de trabajo; el PDF, la copia final."],
     ["Antes de compartir el PDF, ¿qué revisas?",["Que no tenga datos personales que no deban compartirse","Que tenga muchas imágenes","Que pese mucho"],0,"La confidencialidad también cuenta al compartir."]]}
  ]};

var DOCNOM="Programa_evento_Lucia.odt", PROY="Proyecto_Evento_Lucia";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var FS=D("",[D("Escriptori"),D("Baixades"),D("Documents",[D(PROY,[D("Documentos_Writer",[F("Programa_evento_Lucia.odt"),F("Plantilla_programa.ott")]),D("Imagenes",[F("logo_evento.png"),F("moto_circuito.jpg")]),D("PDF"),D("Copia_Seguridad")])]),D("Imatges"),D("Paperera")]);
var FILAS=[["Acreditación","Entrada","09:30"],["Presentación","Salón principal","10:00"],["Exhibición de motos","Pista central","11:00"],["Comida","Carpa","14:00"],["Entrega de premios","Escenario","18:00"]];
var NVACIOS=5;
var S={pv:{wm:{menu:null,sub:null},previ:false,trobat:false,tancat:false,msg:"",ok:false},
  es:{wm:{menu:null,sub:null},quit:{},previ:false,comprovat:false,msg:"",ok:false},
  im:{wm:{menu:null,sub:null},dlg:null,impres:false,msg:"",ok:false},
  pd:{wm:{menu:null,sub:null},opc:null,fd:null,fet:false,msg:"",ok:false},
  co:{fm:null}};
function vaciosRestantes(){return NVACIOS-Object.keys(S.es.quit).length;}

function tablaMini(filas,cab){
  return '<table style="border-collapse:collapse;width:100%;font-size:inherit">'+(cab?'<tr>'+["Actividad","Lugar","Hora"].map(function(h){return '<td style="border:1px solid #333;background:#ffd8a8;font-weight:700;text-align:center;padding:1px 3px">'+h+'</td>';}).join("")+'</tr>':"")+
    filas.map(function(f){return '<tr>'+f.map(function(c,k){return '<td style="border:1px solid #333;padding:1px 3px'+(k===2?";text-align:center":"")+'">'+esc(c)+'</td>';}).join("")+'</tr>';}).join("")+'</table>';
}
function normas(){return '<p style="font-weight:700;text-align:center;margin:0 0 4px">NORMAS</p><p style="margin:0">1. Es obligatorio usar casco.</p><p style="margin:0">2. Respeta las zonas señalizadas.</p><p style="margin:0">3. No dejes basura en el circuito.</p>';}
function cabecera(){return '<p style="font-family:Arial;font-weight:700;text-align:center;font-size:1.4em;margin:0">KDD49 VALENCIA</p><p style="text-align:center;margin:0 0 4px">Programa de actividades</p><p style="text-align:justify;margin:0 0 4px">Te esperamos el sábado en el circuito de Cheste para disfrutar de un día de motos clásicas.</p>';}
/* previsualización: mal = con huecos y tabla cortada */
function previHTML(mal,clic){
  var pg='background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.35);width:46%;max-width:230px;aspect-ratio:1/1.414;padding:14px 12px;font-family:\'Liberation Serif\',serif;font-size:8.5px;line-height:1.35;position:relative;overflow:hidden';
  var z=function(id,inner,st){return clic?'<div data-act="pz" data-z="'+id+'" style="cursor:pointer;border-radius:3px;'+(st||"")+'">'+inner+'</div>':inner;};
  var p1,p2;
  if(mal){
    p1=z("cab",cabecera())+z("buit",'<div style="height:96px"></div>')+z("taula",tablaMini(FILAS.slice(0,1),true),"outline:1px dashed transparent");
    p2=z("taula2",tablaMini(FILAS.slice(1),false))+z("normes",'<div style="margin-top:10px">'+normas()+'</div>');
  }else{p1=cabecera()+tablaMini(FILAS,true);p2=normas();}
  return '<div style="background:#8a8a8a;padding:14px 8px;display:flex;justify-content:center;gap:12px"><div style="'+pg+'">'+p1+'<span style="position:absolute;bottom:4px;right:8px;color:#888">1</span></div><div style="'+pg+'">'+p2+'<span style="position:absolute;bottom:4px;right:8px;color:#888">2</span></div></div>';
}
function previWin(mal,clic,extra){
  return '<div class="wr"><div class="c-tit"><span>'+DOCNOM+' — LibreOffice Writer</span><span>— ▢ ✕</span></div>'+
    '<div class="w-tool" style="background:#f3f3f3;border-bottom:1px solid #ddd"><span class="w-cb">Previsualització d\'impressió</span><span style="color:#666;font-size:13px">2 pàgines</span><button class="w-b" data-act="tancaprevi" style="margin-left:auto;padding:0 10px">✕ Tanca la previsualització</button></div>'+
    previHTML(mal,clic)+'<div class="c-estat"><span>Pàgines 1 - 2 de 2</span><span>Valencià</span></div>'+(extra||"")+'</div>';
}
function docMal(marques){
  var h='<p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:20px;font-weight:700;text-align:center">KDD49 VALENCIA'+(marques?'<span class="marca">¶</span>':"")+'</p><p class="w-p" style="text-align:justify;font-size:14px">Te esperamos el sábado en el circuito de Cheste para disfrutar de un día de motos clásicas.'+(marques?'<span class="marca">¶</span>':"")+'</p>';
  for(var i=0;i<NVACIOS;i++){if(S.es.quit[i])continue;h+='<p class="w-p">'+(marques?'<span class="marca" data-act="buit" data-i="'+i+'" style="cursor:pointer;padding:0 6px;font-size:17px">¶</span>':"&nbsp;")+'</p>';}
  return h+tbHTMLmini();
}
function tbHTMLmini(){return '<div style="font-size:13px">'+tablaMini(FILAS,true)+'</div>';}
function menuFitxer(){return [["nou","Nou",null,"sub"],["obri","Obri…","Ctrl+O"],"-",["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"],"-",["exporta","Exporta com a",null,"sub"],"-",["previ","Previsualització d'impressió","Ctrl+Maj+O"],["imprimeix","Imprimeix…","Ctrl+P"],"-",["tanca","Tanca"]];}
function itemsFitxer(m,sub){if(sub==="exporta")return [["pdf","Exporta com a PDF…"],["epub","Exporta com a EPUB…"],["direct","Exporta directament a PDF"]];if(sub)return [["x","(no lo necesitamos)",null,"off"]];return m==="Fitxer"?menuFitxer():null;}
function esCtrlMajO(e){return (e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key.toLowerCase()==="o";}

/* paso 3: impresión */
function dlgImp(){
  var d=S.im.dlg;
  var h='<label for="iImp">Impressora</label><select id="iImp">'+[["sec","Impressora_Secretaria"],["aula","Impressora_Aula_FPB"]].map(function(x){return '<option value="'+x[0]+'"'+(d.imp===x[0]?" selected":"")+'>'+x[1]+'</option>';}).join("")+'</select>'+
    '<div style="margin-top:8px;font-weight:600">Àrea d\'impressió i nombre de còpies</div>'+
    '<div style="margin:4px 0"><label style="display:inline;font-weight:400"><input type="radio" name="iRang" data-act="rang" data-v="tot"'+(d.rang==="tot"?" checked":"")+'> Totes les pàgines</label></div>'+
    '<div style="display:flex;align-items:center;gap:8px"><label style="display:inline;font-weight:400;margin:0"><input type="radio" name="iRang" data-act="rang" data-v="pag"'+(d.rang==="pag"?" checked":"")+'> Pàgines:</label><input type="text" id="iPag" value="'+esc(d.pag)+'" style="width:110px" autocomplete="off"></div>'+
    '<div style="display:flex;align-items:center;gap:8px;margin-top:8px"><span>Nombre de còpies:</span><span style="background:#fff;border:1px solid #999;border-radius:4px;padding:3px 12px;font-weight:700">'+d.cop+'</span><button data-act="cop" data-d="-1" style="font:inherit;width:30px;cursor:pointer">−</button><button data-act="cop" data-d="1" style="font:inherit;width:30px;cursor:pointer">+</button></div>'+
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"><div style="flex:1;min-width:140px"><label for="iPap">Mida del paper:</label><select id="iPap">'+["A4","A3","A5"].map(function(x){return '<option'+(d.pap===x?" selected":"")+'>'+x+'</option>';}).join("")+'</select></div><div style="flex:1;min-width:140px"><label for="iOr">Orientació:</label><select id="iOr">'+[["v","Vertical"],["h","Horitzontal"]].map(function(x){return '<option value="'+x[0]+'"'+(d.or===x[0]?" selected":"")+'>'+x[1]+'</option>';}).join("")+'</select></div></div>'+
    '<label for="iDup">Doble cara:</label><select id="iDup">'+[["no","Desactivat"],["llarg","Imprimeix les dues cares (costat llarg)"]].map(function(x){return '<option value="'+x[0]+'"'+(d.dup===x[0]?" selected":"")+'>'+x[1]+'</option>';}).join("")+'</select>'+msgDlg(d.msg);
  return dialeg("Imprimeix",h,[["i-cancel","Cancel·la"],["i-ok","Imprimeix",1]],"idlg");
}
function leerImp(){var d=S.im.dlg;if(!d)return;var g=function(id){var e=document.getElementById(id);return e?e.value:null;};var v;if((v=g("iImp"))!==null)d.imp=v;if((v=g("iPag"))!==null)d.pag=v;if((v=g("iPap"))!==null)d.pap=v;if((v=g("iOr"))!==null)d.or=v;if((v=g("iDup"))!==null)d.dup=v;}
function imprimir(){
  var s=S.im,d=s.dlg,m=[];leerImp();
  if(d.imp!=="aula")m.push("La impresora es la de <b>Secretaria</b>. Elige <b>Impressora_Aula_FPB</b>.");
  if(d.rang==="tot")m.push("Con <b>Totes les pàgines</b> imprimirías las dos. Marca <b>Pàgines:</b> y escribe <b>2</b>.");
  else if(d.pag.replace(/\s/g,"")!=="2")m.push("En <b>Pàgines:</b> escribe solo <b>2</b> (las normas)."+(d.pag.indexOf("-")>=0?" Con un guion imprimirías varias páginas seguidas.":""));
  if(d.cop!==1)m.push("Has puesto <b>"+d.cop+"</b> copias. Solo necesitamos <b>1</b>.");
  if(d.pap!=="A4")m.push("El papel tiene que ser <b>A4</b>, como el documento.");
  if(d.or!=="v")m.push("La orientación debe coincidir con la del documento: <b>Vertical</b>.");
  if(m.length){d.msg=m[0];intento("imprimir",false);error("imprimir");return;}
  s.dlg=null;s.impres=true;intento("imprimir",true);s.msg="✔ <b>"+elogio(3)+"</b> Se ha imprimido <b>una copia</b> de la <b>página 2</b> en la impresora del aula. ¡Sin gastar papel de más!";s.ok=true;
}
/* paso 4: PDF */
function dlgPdf(){
  var o=S.pd.opc;
  var tabs=["General","Vista inicial","Interfície d'usuari","Enllaços","Seguretat","Signatures digitals"];
  var h='<div style="display:flex;flex-wrap:wrap;gap:2px;margin-bottom:8px">'+tabs.map(function(t,i){return '<span style="font-size:13px;padding:4px 8px;border:1px solid #aaa;background:'+(i===0?"#fff":"#e9e9e9")+';border-radius:4px 4px 0 0">'+t+'</span>';}).join("")+'</div>'+
    '<b>Interval</b><div style="margin:4px 0"><label style="display:inline;font-weight:400"><input type="radio" name="pR" data-act="prang" data-v="tot"'+(o.rang==="tot"?" checked":"")+'> Tot</label></div><div><label style="display:inline;font-weight:400"><input type="radio" name="pR" data-act="prang" data-v="pag"'+(o.rang==="pag"?" checked":"")+'> Pàgines: 2</label></div>'+msgDlg(o.msg);
  return dialeg("Opcions del PDF",h,[["p-cancel","Cancel·la"],["p-ok","Exporta",1]],"pdlg");
}
function pdfOk(st){
  var s=S.pd,n=(st.nom||"").trim().replace(/\.pdf$/i,""),m="",ruta=st.path.join("/");
  if(ruta===["Documents",PROY,"Documentos_Writer"].join("/"))m="Esa es la carpeta de los documentos editables. Los PDF van en la carpeta <b>PDF</b> del proyecto.";
  else if(ruta!==["Documents",PROY,"PDF"].join("/"))m="Guarda el PDF en <b>"+PROY+" › PDF</b>.";
  else if(!n)m="Escribe el nombre.";
  else if(/\s/.test(n)||tieneTilde(n))m="Sin espacios ni tildes.";
  else if(n!=="Programa_evento_Lucia")m="Usa el mismo nombre que el documento: <b>Programa_evento_Lucia</b>. Así sabrás que son el mismo programa.";
  if(m){st.msg=m;intento("pdf",false);error("pdf");return;}
  fsNodo(FS,["Documents",PROY,"PDF"]).k.push(F("Programa_evento_Lucia.pdf"));
  s.fd=null;s.fet=true;intento("pdf",true);s.msg="✔ <b>"+elogio(4)+"</b> PDF creado en la carpeta <b>PDF</b>. El documento original sigue siendo <b>"+DOCNOM+"</b>.";s.ok=true;
}
/* paso 5: conservar */
var R_DOC=["Documents",PROY,"Documentos_Writer"],R_COP=["Documents",PROY,"Copia_Seguridad"];
function okCons(){return !!(fsHijo(fsNodo(FS,R_DOC),DOCNOM)&&fsHijo(fsNodo(FS,R_COP),DOCNOM)&&fsHijo(fsNodo(FS,["Documents",PROY,"PDF"]),"Programa_evento_Lucia.pdf"));}
function fmV(acc,st,inf){
  if(acc==="pap")return inf.n===DOCNOM?"¡No! El <b>ODT</b> es el archivo de trabajo: si hay que cambiar algo, lo cambiaremos ahí y volveremos a exportar el PDF.":"¡Alto! No borres nada.";
  if(acc==="x"){intento("cons",false);error("conservar");return "<b>Retalla</b> movería el archivo. Para la copia de seguridad usa <b>Copia</b>.";}
  if(acc==="c"&&inf.n!==DOCNOM)return "Haz la copia de seguridad del documento editable: <b>"+DOCNOM+"</b>.";
  if(acc==="v"&&inf.a.join("/")!==R_COP.join("/")){intento("cons",false);error("conservar");return "La copia de seguridad va en <b>Copia_Seguridad</b>.";}
  if(acc==="ren"||acc==="nova")return "No hace falta en este paso.";
  return "";
}
function fmFet(acc,st){if(acc==="v"&&okCons()){intento("cons",true);st.msg="✔ <b>"+elogio(6)+"</b> Proyecto ordenado: el ODT en Documentos_Writer, el PDF en PDF y la copia en Copia_Seguridad.";st.ok=true;
  finPractica(["Previsualización: encontrada la tabla cortada por espacios vacíos","Eliminados "+NVACIOS+" párrafos vacíos; la tabla cabe en la página 1","Impreso: página 2, 1 copia, Impressora_Aula_FPB, A4 vertical","PDF exportado: PDF > Programa_evento_Lucia.pdf","Copia de seguridad del ODT en Copia_Seguridad"]);}}

PRACTICA=[
 {t:"1. Mirar antes de imprimir",ayuda:"Abre <b>Fitxer › Previsualització d'impressió</b> (o <b>Ctrl + Maj + O</b>). Mira las dos páginas y <b>pulsa sobre lo que está mal</b>. Después pulsa <b>Tanca la previsualització</b>.",
  wm:S.pv.wm,menuItems:itemsFitxer,
  onMenuMal:function(){S.pv.msg="La previsualización está en el menú <b>Fitxer</b>.";S.pv.ok=false;error("previ");},
  onMenu:function(k){var s=S.pv;if(k==="previ"){s.previ=true;s.msg="";}else if(k==="imprimeix"){s.msg="¡Espera! Antes de imprimir, <b>mira</b> cómo saldrá: Previsualització d'impressió.";s.ok=false;error("previ");}else{s.msg="Busca <b>Previsualització d'impressió</b>.";s.ok=false;}},
  onKey:function(e){if(esCtrlMajO(e)){e.preventDefault();S.pv.previ=true;return true;}return false;},
  onAct:function(a,b){var s=S.pv;
    if(a==="pz"){var z=b.getAttribute("data-z");if(s.trobat){s.msg="✔ Ya lo has encontrado. Ahora pulsa <b>Tanca la previsualització</b>.";s.ok=true;return;}
      if(z==="taula"||z==="taula2"||z==="buit"){s.trobat=true;intento("previ",true);s.msg="✔ <b>"+elogio(2)+"</b> ¡Bien visto! La <b>tabla está cortada</b>: empieza en la página 1 y sigue en la 2, porque hay un <b>hueco vacío</b> encima. Cierra la previsualización para corregirlo.";s.ok=true;}
      else{intento("previ",false);error("previ");s.msg=z==="cab"?"El título y el texto están bien. Busca otra cosa.":"Las normas están bien en la página 2. Mira la <b>tabla</b>.";s.ok=false;}return;}
    if(a==="tancaprevi"){if(!s.trobat){s.msg="Antes de cerrar, <b>pulsa sobre lo que está mal</b> en las páginas.";s.ok=false;return;}s.previ=false;s.tancat=true;s.msg="✔ Previsualización cerrada. Pulsa <b>Siguiente</b> para corregirlo.";s.ok=true;}},
  html:function(){var s=S.pv;var h=s.previ?previWin(true,true):writer({titulo:DOCNOM,menus:true,pagina:docMal(false),paraules:60});return h+objetivo([["Abrir la previsualización",s.previ||s.tancat],["Encontrar el problema",s.trobat],["Cerrar la previsualización",s.tancat]])+msg(s.msg,s.ok);},
  ok:function(){return S.pv.tancat;}},
 {t:"2. Corregir y volver a mirar",ayuda:"Hemos activado las <b>marcas de formato</b>: cada <b class=\"marca\">¶</b> solo es un <b>Intro vacío</b>. Pulsa los <b>"+NVACIOS+"</b> que hay encima de la tabla para quitarlos. Después vuelve a abrir la <b>previsualización</b> para comprobarlo.",
  wm:S.es.wm,menuItems:itemsFitxer,
  onMenuMal:function(){S.es.msg="La previsualización está en <b>Fitxer</b>.";S.es.ok=false;},
  onMenu:function(k){var s=S.es;if(k==="previ"){if(vaciosRestantes()>0){s.msg="Todavía quedan <b>"+vaciosRestantes()+"</b> Intro vacíos. Quítalos antes de comprobar.";s.ok=false;return;}s.previ=true;s.comprovat=true;intento("comprovar",true);s.msg="✔ <b>"+elogio(5)+"</b> ¡Ahora sí! La tabla entera cabe en la <b>página 1</b> y las normas están en la <b>página 2</b>.";s.ok=true;}else{s.msg="Busca <b>Previsualització d'impressió</b>.";s.ok=false;}},
  onKey:function(e){if(esCtrlMajO(e)){e.preventDefault();this.onMenu("previ");return true;}return false;},
  onAct:function(a,b){var s=S.es;if(a==="buit"){var i=+b.getAttribute("data-i");s.quit[i]=true;s.msg=vaciosRestantes()?"✔ Intro vacío quitado. Quedan <b>"+vaciosRestantes()+"</b>.":"✔ ¡Sin huecos! Ahora vuelve a abrir la <b>previsualización</b> para comprobarlo.";s.ok=true;}else if(a==="tancaprevi"){s.previ=false;}},
  html:function(){var s=S.es;var h=s.previ?previWin(false,false):writer({titulo:DOCNOM,menus:true,pagina:docMal(true),paraules:60,mod:true});return h+objetivo([["Intro vacíos quitados ("+(NVACIOS-vaciosRestantes())+" de "+NVACIOS+")",vaciosRestantes()===0],["Comprobado en la previsualización",s.comprovat]])+msg(s.msg,s.ok);},
  ok:function(){return S.es.comprovat;}},
 {t:"3. Imprimir solo lo necesario",ayuda:"Hay que colgar las <b>normas</b> en el aula. Abre <b>Fitxer › Imprimeix…</b> (Ctrl + P) e imprime <b>solo la página 2</b>, <b>1 copia</b>, en la <b>Impressora_Aula_FPB</b>. Revisa también el papel y la orientación.",
  wm:S.im.wm,menuItems:itemsFitxer,
  onMenuMal:function(){S.im.msg="Imprimir está en el menú <b>Fitxer</b>.";S.im.ok=false;},
  onMenu:function(k){var s=S.im;if(k==="imprimeix"){if(s.impres){s.msg="✔ Ya has imprimido las normas.";s.ok=true;return;}s.dlg={imp:"sec",rang:"tot",pag:"",cop:3,pap:"A4",or:"v",dup:"no",msg:""};s.msg="";}else{s.msg="Busca <b>Imprimeix…</b>";s.ok=false;}},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="p"){e.preventDefault();this.onMenu("imprimeix");return true;}return false;},
  onAct:function(a,b){var s=S.im,d=s.dlg;if(!d)return;leerImp();
    if(a==="rang"){d.rang=b.getAttribute("data-v");d.msg="";}
    else if(a==="cop"){d.cop=Math.max(1,Math.min(20,d.cop+ +b.getAttribute("data-d")));d.msg="";}
    else if(a==="i-cancel"){s.dlg=null;s.msg="Has cancelado.";s.ok=false;}
    else if(a==="i-ok")imprimir();},
  onInput:function(e){if(S.im.dlg&&e.target.id==="iPag"&&e.type==="input"){S.im.dlg.pag=e.target.value;if(e.target.value&&S.im.dlg.rang==="tot"){S.im.dlg.rang="pag";var r=document.querySelector('input[data-v="pag"]');if(r)r.checked=true;}}return false;},
  html:function(){var s=S.im;var pap=s.impres?'<div style="display:flex;justify-content:center;margin-top:10px"><div style="background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.3);width:150px;aspect-ratio:1/1.414;padding:12px;font-size:8px;font-family:serif">'+normas()+'</div></div><p style="text-align:center;margin:4px 0 0;color:#6b6258;font-size:15px">🖨️ Lo que ha salido de la impresora (simulado)</p>':"";
    return writer({titulo:DOCNOM,menus:!s.dlg,pagina:docMal(false).replace(/<p class="w-p">&nbsp;<\/p>/g,""),paraules:60,dialeg:s.dlg?dlgImp():""})+pap+objetivo([["Página 2, 1 copia, impresora del aula",s.impres]])+msg(s.msg,s.ok);},
  ok:function(){return S.im.impres;}},
 {t:"4. Exportar a PDF",ayuda:"Para compartir el programa, expórtalo a PDF: <b>Fitxer › Exporta com a › Exporta com a PDF…</b> En <b>Opcions del PDF</b> deja el <b>Interval</b> en <b>Tot</b> y pulsa <b>Exporta</b>. Guárdalo en la carpeta <b>PDF</b> del proyecto con el nombre <b>Programa_evento_Lucia</b>.",
  wm:S.pd.wm,menuItems:itemsFitxer,
  onMenuMal:function(){S.pd.msg="La exportación está en el menú <b>Fitxer</b>.";S.pd.ok=false;error("pdf");},
  onMenu:function(k){var s=S.pd;if(k==="pdf"){if(s.fet){s.msg="✔ El PDF ya está creado.";s.ok=true;return;}s.opc={rang:"tot",msg:""};s.msg="";}
    else if(k==="direct"){s.msg="<b>Exporta directament</b> no te deja elegir opciones. Usa <b>Exporta com a PDF…</b>";s.ok=false;}
    else if(k==="anomena"){s.msg="<b>Anomena i guarda</b> guarda documentos ODT. Para el PDF: <b>Exporta com a › Exporta com a PDF…</b>";s.ok=false;error("pdf");}
    else{s.msg="Busca <b>Exporta com a</b>.";s.ok=false;}},
  onAct:function(a,b){var s=S.pd,o=s.opc;if(!o)return;
    if(a==="prang"){o.rang=b.getAttribute("data-v");o.msg="";}
    else if(a==="p-cancel"){s.opc=null;s.msg="Has cancelado.";s.ok=false;}
    else if(a==="p-ok"){if(o.rang!=="tot"){o.msg="El PDF tiene que tener el programa <b>completo</b>: elige <b>Tot</b>.";error("pdf");return;}s.opc=null;s.fd=fdNuevo({fs:FS,path:["Documents",PROY,"Documentos_Writer"],modo:"guarda",titulo:"Exporta",nom:"Programa_evento_Lucia",tipo:"pdf",tipos:[["pdf","PDF - Format de document portable (.pdf)"]]});}},
  fd:function(){return S.pd.fd;},fdOk:pdfOk,fdCancel:function(){S.pd.fd=null;S.pd.msg="Has cancelado.";S.pd.ok=false;},
  html:function(){var s=S.pd;return writer({titulo:DOCNOM,menus:!s.opc&&!s.fd,pagina:docMal(false).replace(/<p class="w-p">&nbsp;<\/p>/g,""),paraules:60,dialeg:s.opc?dlgPdf():s.fd?fdHTML(s.fd):""})+objetivo([["PDF en la carpeta <b>PDF</b>",s.fet]])+msg(s.msg,s.ok);},
  ok:function(){return S.pd.fet;}},
 {t:"5. Conservar los archivos",ultimo:true,ayuda:"Estás en <b>Documentos_Writer</b>. ¡No borres el ODT! Haz una <b>copia de seguridad</b>: botón derecho sobre <b>"+DOCNOM+"</b> › <b>Copia</b>, sube a la carpeta del proyecto (↑), entra en <b>Copia_Seguridad</b> y elige <b>Enganxa</b>.",
  fm:function(){return S.co.fm;},fmV:fmV,fmFet:fmFet,
  entrar:function(){if(!S.co.fm)S.co.fm=fmNuevo(FS,R_DOC.slice());S.co.fm.msg="";S.co.fm.ctx=null;},
  html:function(){var st=S.co.fm;var h=fmHTML(st)+objetivo([["ODT en Documentos_Writer",!!fsHijo(fsNodo(FS,R_DOC),DOCNOM)],["PDF en PDF",!!fsHijo(fsNodo(FS,["Documents",PROY,"PDF"]),"Programa_evento_Lucia.pdf")],["Copia del ODT en Copia_Seguridad",!!fsHijo(fsNodo(FS,R_COP),DOCNOM)]]);return h+(okCons()?msg(st.msg||"✔ Todo en orden.",true)+bloqueFinPractica():msg(st.msg,st.ok));},
  ok:okCons}
];
