///////////////
/// SOURCES ///
///////////////

// Estos son elementos o objetos iniciales

//Cada source se ejecuta con una salida .out(), en los siguientes ejemplos se estará utilizando la salida por defecto. Para más información sobre otras salidas pueden revisar el archivo: "5_salidas.js"

//Para ejecutar una línea de código presiona shift-Enter
//Para ejecutar un bloque de código presiona ctrl+Enter


//////////
// Sólidos
//Sintaxis: solid(rojo, verde, azul, alpha)
//Cada parámetro va de 0 (sin color) a 1 (máxima capacidad de color)

solid().out()
//Sólido con parámetros por defecto: (rojo=0, verde:0, azul:0, alpha:1) = negro

//En el entorno digital, la composición de color se puede realizar a través de diferentes modelos.
//Los parámetros para crear sólidos en Hydra son a partir del modelo RGB que toma los colores primarios modificando la intensidad a través de los tres canales, añadiendo un cuarto canal: RGBA = "alpha", que modifica la opacidad o transparencia.

//Ejemplos:
solid(1).out() // Sólido rojo
solid(0,1).out() // Sólido verde
solid(0,0,1).out() // Sólido azul
solid(1,1,1).out() // Sólido blanco
solid(0.3,0,0.5).out() // Sólido morado
solid(0.5,0.5,0.9,0.5).out() // Sólido con opacidad al 50%

//Los parámetros pueden también ser listas [], esto resultará en un tipo de modulación discreta (con saltos ya que no pasa por números intermedios).

solid([0.4,0.5,0.0,1.0],0.0,0.0).out() // Sólido con modulaciones en el canal rojo
solid([0.4,0.5],[0.0, 0.5],[0.1, 0.2]).out() //Sólido con modulaciones en los canales RGB

//Se pueden hacer modulaciones continuas utilizando otras funciones y parámetros. Esto se puede ver en los archivos: "3_moduladores.js" y "4_parametros"


/////////////
// Gradientes
//Sintaxis: gradient(velocidad)

gradient().out()
//Gradiente con parámetros por defecto: (velocidad=0.0)

//La velocidad modifica la rapidez de cambio de la posición de colores dentro del círculo cromático

//Ejemplos
gradient(1).out() // Velocidad de cambio relativamente lenta
gradient(40).out() // Velocidad de cambio rápida
gradient([1,2,0.5]).out() // Modulación de la velocidad de cambio


///////////////////////
// Osciladores de color
//Sintaxis: osc(frecuencia, sincronización, impresionDeColor)

osc().out()
//Oscilador con parámetros por defecto: (frecuencia=60.0, sincronización=0.1, impresionDeColor=0.0)

//Los osciladores generan señales (en este caso de color) oscilantes y periódicas. La modulación de frecuencia produce variaciones en las oscilaciones visibles: entre más alta, más oscilaciones

osc(2).out()
osc(40).out()
osc(400).out()

//El segundo parámetro (sincronización) corresponde a la velocidad de las oscilaciones

osc(40,0).out() // Sin movimiento
osc(40,0.3).out() // Los número arriba del 0 aceleran las frecuencias visibles

//Ejemplos
osc(40,0.1,0.5).out() // Oscilador con el tercer parámetro(colorRGB)
osc(40,0.1,[2.0,0.5,1.0]).out() // Modulación del canal de color utilizando listas
osc([4,100],[0.1,0.5],[2.0,0.5,1.0]).out() // Modulación de todos los parámetros


////////
// Noise
//Sintaxis: noise(escala, velocidad)

noise().out() // Noise con parámetros por defecto (escala=10.0, impresionDeColor=0.1)
//Noise genera una textura similar al Ruido Perlin (o la estática generada en los televisores)

//El primer parámetro (escala) modifica el tamaño de los gradientes (formas) generados. En parametros chicos, la escala es mayor; parámetros grandes, la escala es menor.

noise(2).out()
noise(100).out()

//Ejemplos
noise(2,4).out() // Noise con un parámetro de velocidad mayor
noise([5.5, 10, 20.7],2).out() // Noise con modulación en la escala
noise([5.5, 10, 20.7],[2,0,4]).out() //Noise con modulación en ambos parámetros


//////////
// Voronoi
//Sintaxis: voronoi(escala, velocidad, combinación)

voronoi().out()
//Voronoi con parámetros por defecto: (escala=5.0, velocidad=0.3, combinación=0.3)
//Vornoi genera una textura a partir de contrucciones geométricas llamadas Polígonos de Thiessen (Voronoi diagram)

//El tercer parámetro corresponde a la forma en que las construcciones geométricas se combinan, parámetros grandes generan un tipo de espacios negativos (en negro) que deforma los polígonos. Número negativos crean un espacio positivo (en blanco)

voronoi(5,0.3,2).out() // Voronoi con espacios negativos entre polígonos
voronoi(5,0.3,-2).out() // Voronoi con espacios positivos entre polígonos

//Ejemplos
voronoi(3).out() // Voronoi a una escala grande
voronoi(30,40).out() // Voronoi a una escala pequeña con una velocidad rápida
voronoi(1,0.3,2).out() // Voronoi con una escala mayor entre espacios negativos
voronoi(100,5,-1).out() // Voronoi con una escala pequela entre espacios positivos a una velocidad mediana
voronoi([1,10,100],0.3).out() // Voronoi con modulación en la escala
voronoi([4,30,70,10],[0.1,3],[-1,1,-2]).out() // Voronoi con modulación en todos los parámetros


/////////
// Shapes
//Sintaxis: shape(lados, radio, difuminado)

shape().out()
//Forma con parámetros por defecto: (lados=3.0, tamaño=0.3, difuminado=0.01)
//Shape se utiliza para generar un poígono, modificando los tres parámetros para generar formas más complejas

//ejemplos
shape(5).out() // Pentagono
shape(8,0.9).out() // Octágono con un tamaño grande
shape(4,0.5,0.1).out() // Rectángulo con límites difuminados
shape(3,[0.1,0.2,0.3,0.4]).out() // Triángulo con modulación en el tamaño
shape([3,4,5],[0.1,0.5,0.2],[0.5,0.2]).out() // Diferentes formas que están siendo moduladas en los tres parámetros
