# set framer canvas background color
Framer.Device.background.backgroundColor = "#e1e6ed"

# require module
module = require 'maskintro'

# align artboard
Artboard.props =
	x: Align.center()
	y: Align.center()

# run module	
Utils.delay 0.40, ->
	module.maskintro(Animate)

# reload button
Reload.onTap ->
	module.maskintro(Animate)