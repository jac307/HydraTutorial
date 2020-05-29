# Fast Reference

## 0_Sources

solid(red, green, blue, alpha) -- default parameters = (0,0,0,1) <br/>
gradient(speed) -- default parameters = (0) <br/>
osc(fequency, sync, offsetColor) -- default parameters = (60,0.1,0) <br/>
noise(scale, speed) -- default parameters = (10,0.1) <br/>
voronoi(scale, speed, blending) -- default parameters = (5,0.3,0.3) <br/>
shape(sides, radius, smoothing) -- default parameters = (3,0.3,0.01) <br/>

## 1_Transformers

.brightness(amount) -- default parameter = (0.4) <br/>
.contrast(amount) -- default parameter = (1.6) <br/>
.color(r, g, b) -- default parameter = (0,0,0) <br/>
.colorama(amount) -- default parameter = (0.005) <br/>
.invert(amount) -- default parameter = (1) <br/>
.luma(threshold, tolerance) -- default parameters = (0.5,0.1) <br/>
.posterize(bins, gamma) -- default parameters = (3.0,0.6) <br/>
.saturate(amount) -- default parameter = (2) <br/>
.shift(r, g, b, a) -- default parameters = (0.5,0.5,0.5,0.5) <br/>
.thresh(threshold, tolerance) -- default parameters = (0.5,0.04) <br/>
.kaleid(#sides) -- default parameter = (4) <br/>
.pixelate(x, y) -- default parameters = (20,20) <br/>
.repeat(repeatX, repeatY, offsetX, offsetY) -- default parameters = (3,3,0,0) <br/>
.repeatX(reps, offset) -- default parameter = (3,0) <br/>
.repeatY(reps, offset) -- default parameter = (3,0) <br/>
.rotate(angle, speed) -- default parameters = (10,0) <br/>
.scale(size, xMult, yMult) -- default parameters = (1.5,1,1) <br/>
.scrollX(scrollX, speed) -- default parameters = (0.5,0) <br/>
.scrollX(scrollY, speed) -- default parameters = (0.5,0) <br/>
.scale(amount) -- default parameter = (1.5) <br/>

## 2_Operators

-- t = texture => source, transformer... <br/>

.add(t, amount) -- default parameter = (0.5) <br/>
.mult(t, amount) -- default parameter = (0.5) <br/>
.blend(t, amount) -- default parameter = (0.5) <br/>
.diff(t) <br/>
.layer(t) <br/>
.mask(t, reps, offset) -- default parameters = (3.0,0.5) <br/>

## 3_Modulators

.modulate(t, amount) -- default parameter = (0.1) <br/>
.modulateHue(t, amount) -- default parameter = (0.4) <br/>
.modulateKaleid(t, #Sides) -- default parameter = (4) <br/>
.modulatePixelate(t, multiple, offset) -- default parameters = (10,3) <br/>
.modulateRepeat (t, repeatX, repeatY, offsetX, offsetY) -- default parameters = (3,3,0.5,0.5) <br/>
.modulateRepeatX (t, repeatX, offsetX) -- default parameters = (3,0.5) <br/>
.modulateRepeatY (t, repeatY, offsetY) -- default parameters = (3,0.5) <br/>
.modulateRotate(t, multiple, offset) -- default parameters = (1,0) <br/>
.modulateScale(t, multiple, offset) -- default parameters = (1,1) <br/>
.modulateScrollX(t, scrollX, speed) -- default parameters = (0.5,0) <br/>
.modulateScrollY(t, scrollY, speed) -- default parameters = (0.5,0) <br/>

## 7_Audio Reactivity

.hide() <br/>
.setBins(bins) -- bins :: integer (default x) <br/>
.setCutoff(frequency) -- frequency :: float (default x) <br/>
.setScale(amount) -- amount :: float (default x) <br/>
.setSmooth(amount) -- amount :: float (default x) <br/>
.show() <br/>
--It works with bands (4), you use them as parameters <br/>
()=>a.fft[0 1 2 3] <br/>

--
