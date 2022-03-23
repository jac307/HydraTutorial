///////////////
/// SOURCES ///
///////////////

// Hydra is a set of modules that can be concatenated with each other

// These are the initial elements or object that you can generate in Hydra.

// Each source-syntax is executed adding an output .out(), the following examples are using the default output. More información about other outputs can be checked in file: "5_outputs.js".

//A basic general case for Hydra is: source(parameters).out()

// Sources: solid() gradient() osc() noise() voronoi() shape() y src() 

//To run a line of code press shift-Enter
//To run a block of code press ctrl+Enter


/////////
// Solids
//Syxtax: solid(red, green, blue, alpha)
//Each parameter goes from 0 (no color) to 1 (full color)

solid().out()
//Solid with default parameters (0,0,0,1) = black

//In the digital environment, colour composition can be made through different colour models.
//Parameters for solids in Hydra are produced using the RGB model, using/mixing the primary colour and modifying their intensity through three channels, adding a fourth one: RGBA = "alpha", that modifies the opacity or transparency.

//Examples:
solid(1).out() // Red solid
solid(0,1).out() // Green solid
solid(0,0,1).out() // Blue solid
solid(1,1,1).out() // White solid
solid(0.3,0,0.5).out() // Purple solid
solid(0.5,0.5,0.9,0.5).out() // Solid with a 50% opacity

//These parameters can be integers (int), decimals (doubles), and lists []. This last produces a kind of discrete modulation (with jumps between numbers).

solid([0.4,0.5,0.0,1.0],0.0,0.0).out() // Solid with modulation in R channel
solid([0.4,0.5],[0.0, 0.5],[0.1, 0.2]).out() // Solid with modulations in RGB channels

//More information about other parameters that can be used are on files: "3_moduladores.js" & "4_parametros".


/////////////
// Gradients
//Syntax: gradient(speed)

gradient().out()
//Gradient with default parameters (0)

//Speed modifies the amount of velocity to change the position within the colour wheel = it varies the colours of the gradient.

//Examples
gradient(1).out() // With a relatively slow speed of change
gradient(40).out() // With a fast speed of change
gradient([1,2,0.5]).out() // With a modulation in the speed


///////////////////////
// Colour oscillators
//Syntax: osc(fequency, sync, offsetColor)

osc().out()
//Oscillator with default parameters: (60,0.1,0)

//Oscillators generate periodic (in this case: colour) signals. Changing the frecuency produces variations en the visible oscillations (a kind of gradient-line effect): higher values produce more oscillators.

osc(2).out()
osc(40).out()
osc(400).out()

// The second parameter (sync) correspond to the speed in which the oscillators run.

osc(40,0).out() // No movement
osc(40,0.3).out() // Higher number speed the visible oscillations

//Example
osc(40,0.1,0.5).out() // Oscillator changing the colour
osc(40,0.1,[2.0,0.5,1.0]).out() // Modulating the offsetColor with lists
osc([4,100],[0.1,0.5],[2.0,0.5,1.0]).out() // Modulating all paratemeters


////////
// Noise
//Syntax: noise(scale, speed)

noise().out() // Noise con parámetros por defecto (10,0.1)
// Noise generates a similar texture to Perlin noise (pseudo-random values, a visible gradient noise)

// The first parameter (scale), modifies the size of the gradient (shapes) generated. Using lower parameters will produce bigger scales; higher parameters will produce smaller scales.

noise(2).out()
noise(100).out()

//Examples
noise(2,4).out() // Noise with a higher speed
noise([5.5, 10, 20.7],2).out() // Noise with a modulation in scale
noise([5.5, 10, 20.7],[2,0,4]).out() //Noie modulating all parameters


//////////
// Voronoi
//Syntax: voronoi(scale, speed, blending)

voronoi().out()
//Voronoi with default parameters: (5,0.3,0.3)
//Vornoi generates a texture that partition the space using geometric constructions, this method is called Voroni diagram.

//The third parameter (blending) corresponds to the way the geometric constructions combine to each other. Higher values generate a kind of negative spaces (in black) that deform the poligons. Negative values generate positive spaces (in white) between them.

voronoi(5,0.3,2).out() // Voronoi with negative spaces
voronoi(5,0.3,-2).out() // Voronoi with positive spaces

//Examples
voronoi(3).out() // Voronoi with a higher scale
voronoi(30,40).out() // Voronoi with a smaller scale moving fast
voronoi(1,0.3,2).out() // Voronoi with a higher scale and negative space between poligons
voronoi(100,5,-1).out() // Voronoi with a smaller scale, negative space between poligons, moving in a medium speed
voronoi([1,10,100],0.3).out() // Voronoi with a modulation in the scale
voronoi([4,30,70,10],[0.1,3],[-1,1,-2]).out() // Voronoi with modulations in all parameters


/////////
// Shapes
//Syntax: shape(sides, radius, smoothing)

shape().out()
// //Shape with default parameters: (3,0.3,0.01)
 
//Shape is used to generate a poligon, it can create more complex shapes by modifying the three available parameters.

//Examples
shape(5).out() // Pentagon
shape(8,0.9).out() // Octagon with a higher size
shape(4,0.5,0.1).out() // Rectangle with difuminated limits
shape(3,[0.1,0.2,0.3,0.4]).out() // Triangle with a modulation in its size
shape([3,4,5],[0.1,0.5,0.2],[0.5,0.2]).out() // Different forms appear because there is modulation in all parameters

/////////
// Src
//Sintaxis: src( textura )

/////////////////
