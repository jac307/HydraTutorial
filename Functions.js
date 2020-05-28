
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

// Check more about this section:
scr(input)
.out(buffer) // osc: o0, o1, o2, o3 // src: s0, s1, s2, s3
render(buffer) // default: o0

// Check more about this section:
// initiate other sources and render these
// You can use cameras and screens as inputs, images and videos also?
s0.initScreen(0)
s0.initCam(0)
src(s0).out()
//You can also add another window with running hydra as a source, I think this won't be possible in Estuary.

//Changelog between v0 and v1:
// Syntax change from 'o0.osc()' to 'osc().out(o0)'. Note: old syntax still works
// multiple generator functions can be composited into each other: osc(10) .rotate(0.5) .diff(osc(200).rotate(0.2)) .out()
// Buffer can be an input to itself: osc(40, 0.1, 1) .modulate(src(o0), 0.1) .scale(1.1) .rotate(0.04) .out(o0)
// Multiple cameras can be specified using s0.initCam(1)
// synth logic exists as a separate module, hydra-synth
// added preliminary fft capability
// fixed some bugs in editor and camera


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
	.scale(amount) // default: 1.5

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
.hide()
.setBins(bins) // bins :: integer (default x)
.setCutoff(frequency) // frequency :: float (default x)
.setScale(amount) // amount :: float (default x)
.setSmooth(amount) //amount :: float (default x)
.show()
//It works with bands, you use them as parameters
	()=>a.fft[0 1 2 3]
