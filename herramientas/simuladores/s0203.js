CFG={id:"S02.03",slug:"s0203",nombre:"Colocamos las imágenes del programa",app:"📝 Writer virtual",
  aprendido:["Elegir JPG para las fotografías y PNG para logotipos e iconos.","Insertar el logotipo y centrarlo.","Colocar una foto al lado del texto con Ajusta › Paral·lel.","Fijar un icono dentro de la línea con Àncora › Com a caràcter.","Revisar que las imágenes no tapan el texto."],
  despues:"haz la <b>Parte 3</b> en tu Writer y sube a Aules este PDF y tu archivo <b>Programa_evento_Nombre.odt</b>.",
  entregaPdf:"Entrega en Aules el archivo Programa_evento_Nombre.odt con el logotipo centrado, una foto al lado del texto y un icono en línea junto al eslogan.",
  errores:[["format","al elegir el formato"],["logo","al insertar y centrar el logo"],["ajust","con el ajuste de la foto"],["ancora","con el ancla del icono"],["revisio","al revisar y guardar"]],
  ficha:[
   {id:"f1",t:"JPG o PNG",ayuda:"Cada imagen, su formato.",q:[
     ["¿Qué formato usas para una fotografía del evento?",["JPG","PNG","ODT"],0,"JPG es el formato habitual de las fotografías."],
     ["¿Y para el logotipo con fondo transparente?",["PNG","JPG","PDF"],0,"PNG conserva la transparencia y los bordes nítidos."]]},
   {id:"f2",t:"Guardar imágenes",ayuda:"Nombre y carpeta.",q:[
     ["¿Qué nombre es mejor para la foto del circuito?",["moto_circuito.jpg","imagen1.jpg","IMG_20250314_1023.jpg"],0,"Un nombre significativo te dice qué es sin abrirla."],
     ["¿Dónde guardas las imágenes del proyecto?",["En la carpeta Imagenes del proyecto","En Baixades, sueltas","En la Paperera"],0,"Así las encuentras al hacer Insereix › Imatge…"],
     ["¿Qué imágenes de Internet usamos en un documento que vamos a compartir?",["Las de bancos gratuitos o con licencia libre","Cualquiera","Las que tienen marca de agua"],0,"No todas las imágenes se pueden usar libremente."]]},
   {id:"f3",t:"La posición",ayuda:"¿Dónde va cada imagen?",q:[
     ["¿Qué posición eliges para el logotipo del programa?",["Centrada, separada del texto","En línea dentro de una frase","Detrás del texto"],0,"La imagen principal va centrada."],
     ["Una foto acompaña a un párrafo. ¿Cómo la colocas?",["Lateral, con el texto a un lado","Centrada y enorme","Detrás del texto"],0,"Con Ajusta › Paral·lel el texto se coloca a su lado."]]},
   {id:"f4",t:"Ajuste y ancla",ayuda:"Dos menús del botón derecho.",q:[
     ["¿Qué opción coloca el texto a un lado de la imagen?",["Ajusta › Paral·lel","Ajusta › Cap","Àncora › A la pàgina"],0,"Con Cap, el texto queda solo por encima y por debajo."],
     ["Quieres que un icono se mueva con el texto, como si fuera una letra. ¿Qué eliges?",["Àncora › Com a caràcter","Ajusta › En segon pla","Ajusta › Paral·lel"],0,"El icono queda dentro de la línea y se mueve con ella."]]},
   {id:"f5",t:"Revisar",ayuda:"Antes de dar por terminado.",q:[
     ["Una imagen es tan grande que empuja el texto a otra página. ¿Qué haces?",["La hago más pequeña desde una esquina","La dejo así","Borro el texto"],0,"Una imagen demasiado grande desordena el documento."],
     ["¿Qué orden de trabajo es correcto?",["Guardar la imagen, insertarla, cambiar el tamaño, elegir el ajuste y revisar","Revisar, guardar e insertar","Insertar sin guardar la imagen"],0,"Siguiendo un orden no se te olvida nada."]]}
  ]};

var DOCNOM="Programa_evento_Lucia.odt", PROY="Proyecto_Evento_Lucia";
function ext2(o,p){for(var k in p)o[k]=p[k];return o;}
var FS=D("",[D("Escriptori"),D("Baixades",[F("IMG_20250314_1023.jpg")]),D("Documents",[D(PROY,[D("Documentos_Writer",[F("Programa_evento_Lucia.odt")]),D("Imagenes",[F("logo_evento.png"),F("moto_circuito.jpg"),F("icono_moto.png")]),D("PDF"),D("Copia_Seguridad")])]),D("Imatges"),D("Paperera")]);
var IM={logo:false,logoSel:false,logoCentro:false,foto:"cap",icono:"para",sel:null};
var S={cls:{},clsMsg:"",clsOk:false,ctx:null,
  lg:{wm:{menu:null,sub:null},fd:null,msg:"",ok:false},
  aj:{msg:"",ok:false},an:{msg:"",ok:false},
  rv:{wm:{menu:null,sub:null},guardado:false,msg:"",ok:false}};
var CLS=[["foto","Foto del circuito","jpg"],["logo","Logotipo con fondo transparente","png"],["icono","Icono de una moto","png"],["grupo","Foto de los participantes","jpg"]];
function okCls(){return CLS.every(function(x){return S.cls[x[0]]===x[2];});}

var LOGO='<svg viewBox="0 0 120 120" style="width:100%;height:100%;display:block"><circle cx="60" cy="60" r="56" fill="#81501c"/><circle cx="60" cy="60" r="46" fill="#ff9944"/><text x="60" y="58" font-family="Arial" font-weight="700" font-size="24" text-anchor="middle" fill="#fff">KDD49</text><text x="60" y="80" font-family="Arial" font-size="12" text-anchor="middle" fill="#fff">VALENCIA</text></svg>';
var FOTO='<svg viewBox="0 0 160 120" preserveAspectRatio="none" style="width:100%;height:100%;display:block"><rect width="160" height="120" fill="#9ad0f5"/><rect y="78" width="160" height="42" fill="#555"/><rect y="96" width="160" height="4" fill="#fff"/><g fill="none" stroke="#111" stroke-width="6"><circle cx="52" cy="84" r="16"/><circle cx="110" cy="84" r="16"/></g><path d="M60 70 L95 62 L110 74 L80 80 Z" fill="#c0392b"/><path d="M52 84 L70 66 L100 66 L110 84" stroke="#333" stroke-width="4" fill="none"/></svg>';
var TXT1="Durante el sábado, el circuito de Cheste acogerá exhibiciones de motos clásicas, rutas guiadas y un concurso de restauración. Los pilotos podrán mostrar sus máquinas y el público podrá conocer de cerca la historia de cada modelo. Habrá zonas de descanso, música en directo y un espacio para las familias.";

var CORTE=TXT1.indexOf(" ",120);
function pagina(op){
  op=op||{};
  var h='<p class="w-p" style="text-align:'+(IM.logoCentro?"center":"left")+';min-height:24px">';
  if(IM.logo)h+='<span data-img="logo" style="display:inline-block;width:64px;height:64px;cursor:pointer;'+(IM.sel==="logo"?"outline:2px solid #1e6fd9;outline-offset:2px":"")+'">'+LOGO+'</span>';
  else h+='<span class="w-cur"></span>';
  h+='</p><p class="w-p" style="font-family:\'Liberation Sans\',Arial,sans-serif;font-size:22px;font-weight:700;text-align:center;margin:0">KDD49 VALENCIA</p><p class="w-p" style="text-align:center;font-style:italic">Encuentro de motos clásicas</p>';
  var par=IM.foto==="par"||IM.foto==="opt"||IM.foto==="abans";
  var fst=IM.sel==="foto"?"outline:2px solid #1e6fd9;outline-offset:2px;":"";
  if(op.foto!==false){
    if(par)h+='<div class="w-p" style="text-align:justify;font-size:14px"><span data-img="foto" style="float:right;width:42%;aspect-ratio:4/3;margin:2px 0 4px 10px;cursor:pointer;'+fst+'">'+FOTO+'</span>'+esc(TXT1)+'</div><div style="clear:both"></div>';
    else if(IM.foto==="trav"||IM.foto==="fons")h+='<div class="w-p" style="position:relative;text-align:justify;font-size:14px"><span data-img="foto" style="position:absolute;right:0;top:0;width:42%;aspect-ratio:4/3;cursor:pointer;'+(IM.foto==="fons"?"z-index:0;opacity:.9;":"z-index:2;")+fst+'">'+FOTO+'</span><span style="position:relative;z-index:1">'+esc(TXT1)+'</span></div>';
    else h+='<p class="w-p" style="text-align:justify;font-size:14px">'+esc(TXT1.slice(0,CORTE))+'</p><div class="w-p" style="text-align:right"><span data-img="foto" style="display:inline-block;width:42%;aspect-ratio:4/3;cursor:pointer;'+fst+'">'+FOTO+'</span></div><p class="w-p" style="text-align:justify;font-size:14px">'+esc(TXT1.slice(CORTE+1))+'</p>';
  }
  var ist="cursor:pointer;font-size:24px;line-height:1;"+(IM.sel==="icono"?"outline:2px solid #1e6fd9;outline-offset:1px;":"");
  if(IM.icono==="char")h+='<p class="w-p" style="text-align:center;font-weight:700;font-size:16px;margin-top:10px">¡Prepara tu moto y disfruta de la carrera! <span data-img="icono" style="display:inline-block;vertical-align:-4px;'+ist+'">🏍️</span></p>';
  else h+='<p class="w-p" style="position:relative;text-align:center;font-weight:700;font-size:16px;margin-top:10px">¡Prepara tu moto y disfruta de la carrera!<span data-img="icono" style="position:absolute;left:38%;top:-6px;'+ist+'">🏍️</span></p>';
  return h;
}
function ctxHTML(){
  if(!S.ctx)return "";
  var c=S.ctx, l=[["ajusta","Ajusta",null,"sub"],["ancora","Àncora",null,"sub"],"-",["retalla","Retalla","Ctrl+X"],["copia","Copia","Ctrl+C"],"-",["prop","Propietats…",null,"off"]];
  var h=despHTML(l,c.x,c.y,c.sub);
  if(c.sub==="ajusta")h+=despHTML([["w_cap","Cap"],["w_par","Paral·lel"],["w_opt","Òptim"],["w_abans","Abans"],["w_despres","Després"],["w_trav","A través"],["w_fons","En segon pla"]],c.x+228,c.y,null);
  if(c.sub==="ancora")h+=despHTML([["a_pag","A la pàgina"],["a_par","Al paràgraf"],["a_car","Al caràcter"],["a_com","Com a caràcter"]],c.x+228,c.y+31,null);
  return h.replace(/data-mi="/g,'data-act="cx" data-k="');
}
function ventana(extra){var h=writer(ext2({titulo:DOCNOM,menus:false,pagina:pagina(),paraules:80,mod:true},extra||{}));return S.ctx?h.replace(/<\/div>$/,ctxHTML()+"</div>"):h;}
function abrirCtx(e){
  var im=e.target.closest("[data-img]");if(!im)return false;
  var w=document.querySelector(".wr").getBoundingClientRect();
  IM.sel=im.getAttribute("data-img");
  S.ctx={img:IM.sel,x:Math.max(4,Math.min(e.clientX-w.left,w.width-470)),y:Math.max(40,Math.min(e.clientY-w.top,w.height-260)),sub:null};return true;
}
function selImg(t){var im=t.closest("[data-img]");S.ctx=null;IM.sel=im?im.getAttribute("data-img"):null;return true;}

/* paso 2: logo */
function abrirImatge(){var s=S.lg;if(IM.logo){s.msg="El logo ya está insertado. Ahora <b>céntralo</b>.";s.ok=true;return;}s.fd=fdNuevo({fs:FS,path:["Documents",PROY],modo:"obri",titulo:"Insereix una imatge",filtro:function(n){return /\.(png|jpe?g)$/i.test(n.n);}});s.msg="";}
function logoOk(st){
  var s=S.lg,cur=fsNodo(FS,st.path),n=st.sel?fsHijo(cur,st.sel):null;
  if(!n||n.d){st.msg="Primero pulsa sobre una imagen.";return;}
  if(n.n!=="logo_evento.png"){st.msg=n.n==="moto_circuito.jpg"?"Esa es la <b>foto</b> del circuito. Arriba del programa va el <b>logotipo</b>: logo_evento.png.":n.n==="icono_moto.png"?"Ese es el <b>icono</b> pequeño. Arriba va el <b>logotipo</b>: logo_evento.png.":"Esa imagen está en Baixades y su nombre no dice nada. Busca en la carpeta <b>Imagenes</b> del proyecto.";intento("logo",false);error("logo");return;}
  IM.logo=true;s.fd=null;s.msg="✔ Logo insertado. Ahora haz <b>clic</b> en él y pulsa <b>Alineació al centre</b> (☰).";s.ok=true;
}
/* paso 5 */
function guardarR(){var s=S.rv;if(s.guardado)return;s.guardado=true;s.msg="✔ <b>"+elogio(6)+"</b> ¡Programa con imágenes guardado!";s.ok=true;
  finPractica(["Formatos elegidos: fotos en JPG, logotipo e icono en PNG","Logotipo insertado desde Imagenes y centrado","Foto lateral con Ajusta > "+({par:"Paral·lel",opt:"Òptim",abans:"Abans"}[IM.foto]||IM.foto),"Icono fijado con Àncora > Com a caràcter","Documento guardado"]);}

PRACTICA=[
 {t:"1. JPG o PNG",ayuda:"Para cada imagen, elige el formato más adecuado.",
  html:function(){
    return '<div class="recs">'+CLS.map(function(x){var v=S.cls[x[0]],ok=v===x[2];
      return '<div class="rec'+(ok?" vis":"")+'" style="cursor:default"><b style="color:var(--texto);font-size:17px">'+(ok?"✔ ":"")+x[1]+'</b><div class="chips" style="margin:6px 0 0"><button class="chip'+(v==="jpg"?(ok?" vis":" sel"):"")+'" data-act="cls" data-k="'+x[0]+'" data-v="jpg">📷 JPG</button><button class="chip'+(v==="png"?(ok?" vis":" sel"):"")+'" data-act="cls" data-k="'+x[0]+'" data-v="png">🎨 PNG</button></div></div>';}).join("")+'</div>'+msg(S.clsMsg,S.clsOk);
  },
  onAct:function(a,b){if(a!=="cls")return;var k=b.getAttribute("data-k"),v=b.getAttribute("data-v"),x=CLS.filter(function(y){return y[0]===k;})[0];S.cls[k]=v;
    if(v===x[2]){intento("cls_"+k,true);S.clsMsg="✔ <b>"+elogio(semilla(k))+"</b> "+(v==="jpg"?"Las <b>fotografías</b> se guardan en JPG.":"Los <b>logotipos</b> e <b>iconos</b> van en PNG: conserva la transparencia y los bordes nítidos.");S.clsOk=true;}
    else{intento("cls_"+k,false);error("format");S.clsMsg="¡Casi! "+(x[2]==="jpg"?"Es una <b>fotografía</b>.":"Es un dibujo o logotipo, quizá con fondo transparente.");S.clsOk=false;}},
  ok:okCls},
 {t:"2. El logotipo, centrado",ayuda:"El cursor está en la primera línea. Inserta el logo con <b>Insereix › Imatge…</b> (o el botón 🖼): carpeta <b>Imagenes</b>, archivo <b>logo_evento.png</b>. Después haz clic en el logo y pulsa <b>Alineació al centre</b> (☰).",
  wm:S.lg.wm,
  menuItems:function(m,sub){if(sub)return [["x","(no lo necesitamos)",null,"off"]];return m==="Insereix"?[["salt","Salt de pàgina","Ctrl+Retorn"],["mes","Més salts",null,"sub"],"-",["imatge","Imatge…"],["diagrama","Diagrama…"]]:null;},
  onMenuMal:function(m){S.lg.msg="Para añadir una imagen, mira en el menú <b>Insereix</b>.";S.lg.ok=false;error("logo");},
  onMenu:function(k){if(k==="imatge")abrirImatge();else{S.lg.msg="Esa opción no inserta una imagen.";S.lg.ok=false;}},
  onTb:function(k){var s=S.lg;if(k==="imatge"){abrirImatge();return;}
    if(k==="centra"||k==="esquerra"||k==="dreta"){if(!IM.logo){s.msg="Primero inserta el logo.";s.ok=false;return;}if(IM.sel!=="logo"){s.msg="Primero haz <b>clic en el logo</b> para seleccionarlo.";s.ok=false;error("logo");return;}
      if(k==="centra"){IM.logoCentro=true;intento("logo",true);s.msg="✔ <b>"+elogio(2)+"</b> Logo <b>centrado</b>: la imagen principal va en el centro.";s.ok=true;}else{IM.logoCentro=false;s.msg="Así queda a un lado. El logo va <b>centrado</b>.";s.ok=false;error("logo");}}},
  onClic:function(e,t){if(t.closest(".w-pag")){selImg(t);return true;}return false;},
  fd:function(){return S.lg.fd;},fdOk:logoOk,fdCancel:function(){S.lg.fd=null;S.lg.msg="Has cancelado. Vuelve a abrir <b>Insereix › Imatge…</b>";S.lg.ok=false;},
  html:function(){var s=S.lg;return writer({titulo:DOCNOM,menus:!s.fd,fmt:{al:IM.logoCentro&&IM.sel==="logo"?"c":"e"},pagina:pagina({foto:false}),paraules:80,mod:true,dialeg:s.fd?fdHTML(s.fd):""})+objetivo([["Logo insertado",IM.logo],["Logo centrado",IM.logoCentro]])+msg(s.msg,s.ok);},
  ok:function(){return IM.logo&&IM.logoCentro;}},
 {t:"3. Una foto al lado del texto",ayuda:"La foto está a la derecha, pero el texto no la rodea y queda un hueco. Pulsa con el <b>botón derecho</b> sobre la foto y elige <b>Ajusta › Paral·lel</b>.",
  entrar:function(){IM.sel=null;S.ctx=null;},
  onCtx:abrirCtx, onClic:function(e,t){if(t.closest(".desp"))return false;if(S.ctx||t.closest(".w-pag")){selImg(t);return true;}return false;},
  onAct:function(a,b){
    if(a!=="cx")return;var k=b.getAttribute("data-k"),s=S.aj;
    if(b.getAttribute("data-sub")){S.ctx.sub=S.ctx.sub===k?null:k;return;}
    var img=S.ctx.img;S.ctx=null;
    if(img!=="foto"){s.msg="En este paso trabajamos con la <b>foto</b> del circuito.";s.ok=false;return;}
    if(k.indexOf("w_")!==0){s.msg=k.indexOf("a_")===0?"El <b>ancla</b> no cambia cómo se coloca el texto alrededor. Busca en <b>Ajusta</b>.":"Esa opción no coloca el texto alrededor de la foto.";s.ok=false;error("ajust");intento("ajust",false);return;}
    var w=k.slice(2);IM.foto=w;
    if(w==="par"){intento("ajust",true);s.msg="✔ <b>"+elogio(3)+"</b> Con <b>Paral·lel</b> el texto se coloca al lado de la foto y desaparece el hueco.";s.ok=true;}
    else if(w==="opt"||w==="abans"){intento("ajust",true);s.msg="✔ También vale: con <b>"+(w==="opt"?"Òptim":"Abans")+"</b> el texto queda a la izquierda de la foto. La opción más habitual es <b>Paral·lel</b>.";s.ok=true;}
    else if(w==="cap"){s.msg="Con <b>Cap</b> el texto queda solo por encima y por debajo: el hueco sigue ahí.";s.ok=false;error("ajust");intento("ajust",false);}
    else if(w==="despres"){IM.foto="cap";s.msg="<b>Després</b> pondría el texto a la <b>derecha</b> de la foto, pero ahí no hay sitio. Prueba otra opción.";s.ok=false;error("ajust");intento("ajust",false);}
    else{s.msg="😬 Ahora la foto y el texto se <b>superponen</b> y no se lee bien. Elige un ajuste que ponga el texto <b>al lado</b>.";s.ok=false;error("ajust");intento("ajust",false);}
  },
  html:function(){return ventana()+objetivo([["Texto al lado de la foto",IM.foto==="par"||IM.foto==="opt"||IM.foto==="abans"]])+msg(S.aj.msg,S.aj.ok);},
  ok:function(){return IM.foto==="par"||IM.foto==="opt"||IM.foto==="abans";}},
 {t:"4. Un icono dentro de la línea",ayuda:"El icono de la moto está <b>flotando</b> encima del eslogan y tapa las letras. Pulsa con el <b>botón derecho</b> sobre el icono y elige <b>Àncora › Com a caràcter</b>.",
  entrar:function(){IM.sel=null;S.ctx=null;},
  onCtx:abrirCtx, onClic:function(e,t){if(t.closest(".desp"))return false;if(S.ctx||t.closest(".w-pag")){selImg(t);return true;}return false;},
  onAct:function(a,b){
    if(a!=="cx")return;var k=b.getAttribute("data-k"),s=S.an;
    if(b.getAttribute("data-sub")){S.ctx.sub=S.ctx.sub===k?null:k;return;}
    var img=S.ctx.img;S.ctx=null;
    if(img!=="icono"){s.msg="En este paso trabajamos con el <b>icono</b> de la moto del eslogan.";s.ok=false;return;}
    if(k==="a_com"){IM.icono="char";intento("ancora",true);s.msg="✔ <b>"+elogio(4)+"</b> Ahora el icono es como una <b>letra más</b>: está dentro de la línea y ya no tapa el texto.";s.ok=true;return;}
    if(k.indexOf("w_")===0){s.msg="El <b>ajuste</b> no mete el icono dentro de la línea. Busca en <b>Àncora</b>.";s.ok=false;error("ancora");intento("ancora",false);return;}
    if(k==="a_pag"||k==="a_par"||k==="a_car"){s.msg="Con esa ancla el icono sigue <b>flotando</b> sobre el texto. Queremos que se comporte como una letra: <b>Com a caràcter</b>.";s.ok=false;error("ancora");intento("ancora",false);return;}
    s.msg="Esa opción no nos sirve ahora.";s.ok=false;
  },
  html:function(){return ventana()+objetivo([["Icono anclado <b>Com a caràcter</b>",IM.icono==="char"]])+msg(S.an.msg,S.an.ok);},
  ok:function(){return IM.icono==="char";}},
 {t:"5. Revisar y guardar",ultimo:true,ayuda:"Revisa el programa: logo centrado, foto al lado del texto e icono en la línea. Si está todo bien, guarda con <b>Ctrl + S</b> o el botón 💾.",
  wm:S.rv.wm,
  menuItems:function(m){return m==="Fitxer"?[["guarda","Guarda","Ctrl+S"],["anomena","Anomena i guarda…","Ctrl+Maj+S"]]:null;},
  onMenuMal:function(){S.rv.msg="Para guardar, el menú <b>Fitxer</b>.";S.rv.ok=false;},
  onMenu:function(k){if(k==="guarda")guardarR();else{S.rv.msg="El programa ya tiene nombre: usa <b>Guarda</b>.";S.rv.ok=false;}},
  onTb:function(k){if(k==="guarda")guardarR();},
  onKey:function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){e.preventDefault();guardarR();return true;}return false;},
  entrar:function(){IM.sel=null;S.ctx=null;},
  html:function(){var s=S.rv;var h=writer({titulo:DOCNOM,menus:true,pagina:pagina(),paraules:80,mod:!s.guardado});h+=objetivo([["Logo centrado",IM.logoCentro],["Foto al lado del texto",true],["Icono en la línea",IM.icono==="char"],["Programa guardado",s.guardado]]);return h+(s.guardado?msg(s.msg,true)+bloqueFinPractica():msg(s.msg,s.ok));},
  ok:function(){return S.rv.guardado;}}
];
