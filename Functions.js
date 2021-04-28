
// HYDRA //
// structure
// source().transformations().out()
// -- note: transformations can also be from sources

///////////////
// _sources //

osc(fequency, sync, rgb-offset) // defaults: 60.0, 0.1, 0.0
solid(r, g, b, a) // defaults: 0.0, 0.0, 0.0, 1.0
gradient(speed) // default: 0.0
noise(scale, offset) // defaults: 10.0, 0.1
shape(sides, radius, smoothing) // defaults: 3.0, 0.3, 0.01
voronoi(scale, speed, blending) // defaults: 5.0, 0.3, 0.3

// imported sources
scr(input)  // o0, o1, o2, o3
            // s0, s1, s2, s3 // Video, Images, Screen, Camera

s0.initScreen() // (0) ... (1) -> id
s0.initCam()
s0.initVideo(url)
s0.initImage(url)

//Examples
s0.initVideo("https://upload.wikimedia.org/wikipedia/commons/d/da/Green_fantazy.webm");
src(s0).out()

s0.initImage("v/artwall.jpg");
src(s0).out()

// outs
.out(buffer) // osc: o0, o1, o2, o3
render(buffer) // default: o0
speed = amount // default: 1
setResolution()

// initiate other sources and render these
// You can use cameras and screens as inputs, images and videos also?
s0.initScreen(0)
s0.initCam(0)
s0.initVideo()
s0.initImage()
src(s0).out()


	////////////////////
	// _transformations
	.brightness(amount) // default: 0.4
	.contrast(amount) // default: 1.6
	.color(r, g, b) // vec4
	.colorama(amount) // default: 0.005 -- shifts HSV values
	.invert(amount) // default:1.0
	.luma(threshold, tolerance) // defaults: 0.5, 0.1
	.posterize(bins, gamma) // defaults: 3.0, 0.6
	.saturate(amount) // default: 2.0
	.shift(r, g, b, a) // defaults: 0.5 for all
	.thresh(threshold, tolerance) // defaults: 0.5, 0.04
	.kaleid(#sides) // default: 4.0
	.pixelate(x, y) // defaults: 20.0, 20.0
	.repeat(repeatX, repeatY, offsetX, offsetY )
		// defaults: 3.0, 3.0, 0.0, 0.0
		.repeatX(reps, offset)
		.repeatY(reps, offset)
	.rotate(angle, speed) // defaults: 10.0, 0.0
	.scale(size, xMult, yMult) // defaults: 1.5, 1.0, 1.0
	.scrollX(scrollX, speed) // defaults: 0.5, 0.0
	.scrollX(scrollY, speed) // defaults: 0.5, 0.0

	//Parameters can be:
		floats
		lists ([])
		.fast(amount)
		() => mouse.x
		() => mouse.y
		({time}) => time%360
		({time}) => Math.sin(time)
			{time})=>Math.sin(time/5)
			{time})=>Math.sin(time/5)*0.5
		sources

	///////////////
	// _modulations
	.modulate(t, amount) // amount’s default: 0.1
		// t = texture = source => color, osc, src, noise, shape…
		// you can add transformations too
	.modulateHue(t, amount) // default: 0.4
	.modulateKaleid(t, #Sides) // default: 4.0
	.modulatePixelate(t, multiple, offset) // defaults: 10.0, 3.0
	.modulateRepeat (t, repeatX, repeatY, offsetX, offsetY) //defaults: 3.0, 3.0, 0.5, 0.5
		.modulateRepeatX (t, repeatX, offsetX)
		.modulateRepeatY (t, repeatY, offsetY)
	.modulateRotate(t, multiple, offset) // defaults: 1.0, 0.0
	.modulateScale(t, multiple, offset) // defaults: 1.0, 1.0
	.modulateScrollX(t, scrollX, speed) // defaults: 0.5, 0.0
	.modulateScrollY(t, scrollY, speed) // defaults: 0.5, 0.0

	//////////////
	// _operators
	.add(t, amount) // default: 0.5
	.mult(t, amount) // default: 0.5
	.blend(t, amount) // default: 0.5
	.diff(t)
	.layer(t)
	.mask(t, reps, offset) // defaults: 3.0, 0.5


/////////////
// _audio //

// Check more about this:
a.show()
a.hide()
a.setBins(3) // bins :: integer (default x)
a.setCutoff(frequency) // frequency :: float (default x)
a.setScale(amount) // amount :: float (default x)
a.setSmooth(amount) //amount :: float (default x)
//It works with bands, you use them as parameters
	()=>a.fft[0 1 2 3]






osc(Math.sin(100),0.01,Math.sin(1.5))
  .rotate(0,({time})=>(time%10)/10)
	.mult(osc(),Math.sin(2))
	.modulate(osc(10).rotate(0,-0.1,1))
	.color(({time})=>(time%10)/5,Math.sin(0.90), Math.cos(0.39))
	.brightness(osc())
  .out()


	speed = 1.3


	osc(Math.sin(100), 0.01, Math.sin(1.4))
	.rotate(0, ({time}) => (time % 10) / 10)
	.mult(osc(10, Math.sin(0.1),Math.sin(2)).modulate(osc(10).rotate(0, -0.1), 1))
	.color(({time}) => (time % 10) / 5,Math.sin(0.91),Math.cos(0.39))
.brightness(({time}) => time /100)
  .out()

speed = -0.3

// making variables:

sides = () => Math.floor(10 * Math.sin(time * 0.6))

shape(sides)
  .diff(shape(sides, 0.1))
  .out()




solid().out()

s0.initScreen(0)

src(s0).scrollX ([osc(), 0.001]).out()


osc(20, 0.1, 0.6).out(o0)
osc(40, 0.1, 0.0).out(o1)
src(o0).mult(o1).out(o3)
render(o3)




osc().out()

//////

-- ({time}) => time%360
-- ({time}) => Math.sin(time)

-- Math.cos(0.39)
-- Math.sin(0.39)
-- 0.1+Math.cos(10)

() => mouse.x
// MouseX |
() => mouse.y
// MouseY |

-- function(t){return 100*Math.sin(t*0.1)}   ==   (t) => (100*Math.sin(t*0.1))


--osc??
--osc+_audio




osc(0.11,0.1,2)
.diff(shape(2).rotate(0,11).modulate(noise(2,2,2)).repeat(16,1).scrollY(0.1,0.1))
.diff(noise(0.1,0.1,2).colorama(0.2).repeat(16,16).scrollY(-0.1,-0.1).diff(shape(3).modulateRotate(noise(2,2,2))).kaleid(3,3))
.diff(o1).diff(o2).out(o0);
shape(2).diff(shape(3).modulate(o0).rotate(0.1,0.1).modulateRotate(o1,-1,-1).diff(osc(0.1,0.1))).out(o1);
noise(0.2,0.2,2).repeat(2,2).modulate(o0).modulatePixelate(o1,1080,1920).diff(shape(2).colorama(0.2).diff(o1).scale(0.9,0.9).kaleid(3,8)).out(o2);
render(o0)



s0.initVideo("videos/hogweed.mov");
src(s0)
.modulate(o0,0.2).mult(o0,0.5).rotate([0,0.5,1].smooth().fast(0.002)).modulateRotate(voronoi(2)).brightness(0.1).scale([0.5,1,5].smooth()).modulateScale(o0)
.out(o0)

uno_ ajenos aman (1.5) oir no ven que escribo presurosas (30) ideas (0.5) sonidos (0 -0.5 -1)
