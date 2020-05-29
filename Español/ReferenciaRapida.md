# Referencia Rápida

## 0_Sources

solid(rojo, verde, azul, alpha) -- parámetros por defecto = (0,0,0,1) <br/>
gradient(velocidad) -- parámetros por defecto = (0) <br/>
osc(frecuencia, sincronización, impresionDeColor) -- parámetros por defecto = (60,0.1,0) <br/>
noise(escala, velocidad) -- parámetros por defecto = (10,0.1) <br/>
voronoi(escala, velocidad, combinación) -- parámetros por defecto = (5,0.3,0.3) <br/>
shape(lados, tamaño, difuminado) -- parámetros por defecto = (3,0.3,0.01) <br/>

## 1_Transformators

.brightness(cantidad) -- parámetro por defecto = (0.4) <br/>
.contrast(cantidad) -- parámetro por defecto = (1.6) <br/>
.color(rojo, verde, azul) -- parámetros por defecto = (0,0,0) <br/>
.colorama(cantidad) -- parámetro por defecto = (0.005) <br/>
.invert(cantidad) -- parámetro por defecto = (1) <br/>
.luma(threshold, tolerance) -- parámetros por defecto = (0.5,0.1) <br/>
.posterize(bins, gama) -- parámetros por defecto = (3.0,0.6) <br/>
.saturate(cantidad) -- parámetro por defecto = (2) <br/>
.shift(rojo, verde, azul, alpha) -- parámetros por defecto = (0.5,0.5,0.5,0.5) <br/>
.thresh(límite, tolerancia) -- parámetros por defecto = (0.5,0.04) <br/>
.kaleid(lados) -- parámetro por defecto = (4) <br/>
.pixelate(x, y) -- parámetros por defecto = (20,20) <br/>
.repeat(repeticionesEnX, repeticionesEnY, impresionDeColorEnX, impresionDeColorEnY) -- parámetros por defecto = (3,3,0,0) <br/>
.repeatX(repeticiones, impresionDeColor) -- parámetros por defecto = (3,0) <br/>
.repeatY(repeticiones, impresionDeColor) -- parámetros por defecto = (3,0) <br/>
.rotate(ángulo, velocidad) -- parámetros por defecto = (10,0) <br/>
.scale(tamaño, xMult, yMult) -- parámetros por defecto = (1.5,1,1) <br/>
.scrollX(desplazoEnX, velocidad) -- parámetros por defecto = (0.5,0) <br/>
.scrollX(desplazoEnY, velocidad) -- parámetros por defecto = (0.5,0) <br/>
.scale(cantidad) -- parámetro por defecto = (1.5) <br/>

## 2_Operators

-- t = textur => source, transformador... <br/>

.add(t, cantidad) -- parámetro por defecto = (0.5) <br/>
.mult(t, cantidad) -- parámetro por defecto = (0.5) <br/>
.blend(t, cantidad) -- parámetro por defecto = (0.5) <br/>
.diff(t) <br/>
.layer(t) <br/>
.mask(t, repeticiones, impresionDeColor) -- parámetros por defecto = (3.0,0.5) <br/>

## 3_Modulators

.modulate(t, cantidad) -- parámetro por defecto = (0.1) <br/>
.modulateHue(t, cantidad) -- parámetro por defecto = (0.4) <br/>
.modulateKaleid(t, lados) -- parámetro por defecto = (4) <br/>
.modulatePixelate(t, múltiplo, impresionDeColor) -- parámetros por defecto = (10,3) <br/>
.modulateRepeat (t, repeatX, repeatY, impresionDeColorX, impresionDeColorY) -- parámetros por defecto = (3,3,0.5,0.5) <br/>
.modulateRepeatX (t, repeticionesEnX, impresionDeColorX) -- parámetros por defecto = (3,0.5) <br/>
.modulateRepeatY (t, repeticionesEnY, impresionDeColorY) -- parámetros por defecto = (3,0.5) <br/>
.modulateRotate(t, múltiplo, impresionDeColor) -- parámetros por defecto = (1,0) <br/>
.modulateScale(t, múltiplo, impresionDeColor) -- parámetros por defecto = (1,1) <br/>
.modulateScrollX(t, repeticionesEnX, impresionDeColor) -- parámetros por defecto = (0.5,0) <br/>
.modulateScrollY(t, repeticionesEnY, impresionDeColor) -- parámetros por defecto = (0.5,0) <br/>

## 7_Audio Reactivity

.hide() <br/>
.setBins(bins) -- bins :: integro (por defecto x) <br/>
.setCutoff(frecuencia) -- frecuencia sonora :: float (por defecto x) <br/>
.setScale(cantidad) -- cantidad :: float (por defecto x) <br/>
.setSmooth(cantidad) -- cantidad :: float (por defecto x) <br/>
.show() <br/>
--Funciona con bandas sonoras (4), las usas como parámetros <br/>
()=>a.fft[0 1 2 3] <br/>

--
