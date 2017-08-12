maskanimation = (layer, delay, color) ->
	
	layer.visible = false

	# check if a color variable exists
	# default maskintro will use a background color or a text color from the origin layer

	if color != undefined
		maskColor = color
	else if layer.props.backgroundColor
		maskColor = layer.backgroundColor.color
	else
		maskColor = layer.color.color

	tempLayerMask = new Layer
		clip: true
		y: layer.y
		x: layer.x
		width: layer.width
		height: layer.height
		backgroundColor: null
		parent: layer.parent

	tempLayer = new Layer
		y: 0
		x: 0
		width: 0
		height: layer.height
		backgroundColor: maskColor
		parent: tempLayerMask

	tempLayer.onAnimationEnd ->
		tempLayer.onAnimationEnd ->
			tempLayer.destroy()
			tempLayerMask.destroy()

		layer.visible = true
		layer.clip = true

		tempLayer.animate
			x: layer.width
			options:
				curve: 'ease-in-out'
				time: 0.55

	tempLayer.animate
		width: layer.width
		options:
			curve: 'ease-in-out'
			time: 0.89
			delay: delay


maskintro = (layer, delay, color) ->

	# check if layer has children
	delay = delay || 0

	if layer.children.length
		delayIncrement = 0
		for i in layer.children
			delayIncrement += 0.13
			maskanimation(i,delayIncrement+delay,color)
	else
		maskanimation(layer,delay,color)

# run maskintro
exports.maskintro = maskintro