let foto = [];
let pantalla = 0;
let numeroactual;
let botonderecho;
let botonizquierdo;
function setup() {
  createCanvas(600, 600);
}
function preload() {
  for ( let i = 0; i < 16; i++ ) {
    foto[i] = loadImage( "assets/escena" + i + ".png" );
  }
}
function draw() {
  if (pantalla==0) {
    botonderecho=coordenadasderecho(550, 600, 550, 600);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
    labase("", foto[1]);
  } else if (pantalla==1) {
    labase("HABIA UNA VEZ, TRES CERDITOS QUE PLANEABAN VIVIR EN EL BOSQUE..", foto[2]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==2) {
    labase("LOS HERMANOS EMPRENDIERON CAMINO. EL MAYOR LES ADVIERTE A LOS OTROS QUE CONSTRUYAN CASAS FUERTES PARA EVITAR FUTUROS PROBLEMAS..", foto[3]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==3) {
    labase("PERO EL MAS CHICO, COMO ERA UN HOLGAZÁN, SE CONSTRUYO UNA CASA RÁPIDO, HECHA DE PAJA..", foto[4]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==4) {
    labase("DE NOCHE, SE DESPERTÓ CON LA CASA VOLANDOSE, ERA EL LOBO INTENTANDO COMÉRSELO, HABIA TIRADO LA CASA DE UN SOPLIDO!", foto[5]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==5) {
    labase("CORRIENDO, FUE A REFUGIARSE A LA CASA DEL HERMANO DEL MEDIO, QUE CON UN POCO MÁS DE ESFUERZO SE CONSTRUYO UNA CASA DE MADERA ¿ESTARÁN A SALVO ALLI?", foto[6]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==6) {
    labase("EL LOBO HABRÍA CONSEGUIDO DESARMAR LA CASA ENTERA APENAS CON UN POCO MAS DE ESFUERZO EN SU SOPLIDO", foto[7]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==7) {
    labase("LOS DOS HERMANOS CORRIERON A REFUGIARSE A LA CASA DEL CHANCHITO MAYOR, QUE ERA MUY SABIO, Y CON MUCHO ESFUERZO SE CONSTRUYÓ UNA CASA DE LADRILLOS, A PRUEBA DE SOPLIDOS ¿HABRÍAN CONSEGUIDO ALLI ESTAR A SALVO?", foto[8]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==8) {
    labase("EL LOBO, ASTUTO, DESPUES DE ANALIZAR LA CASA DE LADRILLOS Y DE DARSE CUENTA QUE NO PODRÍA DERRIBARLA DE UN SOPLIDO, TUVO LA GRANDIOSA IDEA DE ENTRAR POR LA CHIMENEA. LOS TRES CHANCHITOS DEBEN ACTUAR RÁPIDO SI QUIEREN SALVARSE", foto[9]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==9) {
    labase("LOS TRES HERMANOS ACTUARON RAPIDAMENTE Y SE LES OCURRIÓ TENDERLE UNA TRAMPA AL LOBO..", foto[10]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==10) {
    labase("CON LA HOYA DEBAJO DE LA CHIMENEA LOGRAN QUE EL LOBO CAIGA DENTRO", foto[11]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==11) {
    labase("LOS CHANCHITOS SE VENGARON, EL LOBO SE QUEMÓ TANTO QUE NUNCA MÁS VOLVIÓ A MOLESTAR ", foto[12]);
    botonderecho=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==12) {
    labase("LOS 3 CERDITOS DECIDIERON VIVIR JUNTOS, Y VIVIERON FELICES PARA SIEMPRE", foto[13]);
    botonizquierdo=coordenadasderecho(550, 600, 550, 600);
  } else if (pantalla==13) {
    labase("LOS HERMANOS ASUSTADOS DECIDIERON ABANDONAR EL PLAN DE VIVIR EN EL BOSQUE Y VUELVEN CON SU MAMÁ", foto[14]);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==14) {
    labase("", foto[15]);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  } else if (pantalla==15) {
    labase("EL LOBO VENCIÓ Y AHORA SE PREPARARÁ UNA RICA CENA CON SU PRESA", foto[16]);
    botonizquierdo=coordenadasizquierdo(0, 50, 0, 50);
  }
}
function mousePressed() {
  if (pantalla==0&& botonderecho ) {
pantalla = pantalla+1;
  } else if (pantalla==0 && botonizquierdo) {
pantalla = pantalla+1;
  } else if (pantalla==1 && botonderecho) {

pantalla = pantalla+1;
    
  } else if (pantalla==2 && botonderecho) {
pantalla = pantalla+1;
    
  } else if (pantalla==3 && botonizquierdo) {
pantalla = pantalla+1;
    
  } else if (pantalla==3 && botonderecho) {

  pantalla = pantalla+1;
    
  } else if (pantalla==4 && botonderecho ) {
pantalla = pantalla+1;
    
  } else if (pantalla==6 && botonizquierdo) {

    pantalla = pantalla+1;

  } else if (pantalla==5 && botonderecho) {
pantalla = pantalla+1;
    
  } else if (pantalla==6 && botonderecho) {
pantalla = pantalla+1;

  } else if (pantalla==9 && botonizquierdo) {
pantalla = pantalla+1;

  } else if (pantalla==7 && botonderecho) {
 pantalla = pantalla+1;
  } else if (pantalla==8 && botonderecho) {

      pantalla = pantalla+1;
    
  } else if (pantalla==11 && botonizquierdo) {

 pantalla = pantalla+1;
  } else if (pantalla==9 && botonderecho) {

pantalla = pantalla+1;
    
  } else if (pantalla==10 && botonderecho) {
pantalla = pantalla+1;
    
  } else if (pantalla==11 && botonderecho) {
pantalla = pantalla+1;
  } else if (pantalla==15 && botonizquierdo) {
  
    pantalla = pantalla+1;
  } else if (pantalla==16 && botonizquierdo) {
  pantalla = pantalla+1;
    
  } else if (pantalla==0 && botonizquierdo) {
   
   pantalla = pantalla+1;
  } else if (pantalla==0 && botonizquierdo) {

    pantalla = pantalla+1;
  }
}
function labase(mitexto, lafoto) {
  let eltexto=mitexto;
  let mifoto = lafoto;
  image(mifoto, 0, 0, 600, 600);
  textSize(20);
  fill(0);
  text(eltexto, 150, 50, 300, 300);
}
function coordenadasderecho( posicionx1, posicionx2, posiciony1, posiciony2) {
  let miposicionx1= posicionx1;
  let miposicionx2= posicionx2;
  let  miposiciony1= posiciony1;
  let miposiciony2= posiciony2;
  return (mouseX>miposicionx1 && mouseX<miposicionx2 && mouseY >miposiciony1 && mouseY<miposiciony2);
}
function coordenadasizquierdo( posicionx1, posicionx2, posiciony1, posiciony2) {
  let miposicionx1= posicionx1;
  let miposicionx2= posicionx2;
  let  miposiciony1= posiciony1;
  let miposiciony2= posiciony2;
  return (mouseX>miposicionx1 && mouseX<miposicionx2 && mouseY >miposiciony1 && mouseY<miposiciony2);
}
