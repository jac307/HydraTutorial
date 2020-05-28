
data Source =
  -- Parameters
  Constant Double |
  [Double] |
  Fast [Double] |
  -- () => mouse.x
  -- () => mouse.y
  -- ({time}) => time%360
  -- ({time}) => Math.sin(time)

  -- Sources
  Osc Source [Double] [Double] [Double] |
  Solid Source [Double] [Double] [Double] [Double] |
  Gradient [Double] |
  Noise [Double] [Double] |
  Shape [Double] [Double] [Double] |
  Voronoi [Double] [Double] [Double] |
  Scr Source |
  -- Render Int |
  -- out Int |

  Brightness Source [Double] |
  Contrast Source [Double] |
  Color [Double] [Double] [Double] |
  Colorama [Double] |
  Invert [Double] |
  Luma [Double] [Double] |
  Posterize [Double] [Double] |
  Saturate [Double] |
  Shift [Double] [Double] [Double] [Double] |
  Thresh [Double] [Double] |
  Kaleid Double |
  Pixelate [Double] [Double] |
  Repeat [Double] [Double] [Double] [Double] |
  RepeatX [Double] [Double] |
  RepeatY [Double] [Double] |
  Rotate [Double] [Double] |
  Scale [Double] [Double] [Double] |
  Scroll [Double] [Double] [Double] [Double] |
  ScrollX [Double] [Double] |
  ScrollY [Double] [Double] |
  Scale [Double]

  Add Source Source [Double] |
  Mult Source Source [Double] |
  Blend Source Source [Double] |
  Diff Source Source |
  Layer Source Source |
  Mask Source Source [Double] [Double]
