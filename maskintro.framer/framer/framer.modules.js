require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"maskintro":[function(require,module,exports){
var maskanimation, maskintro;

maskanimation = function(layer, delay, color) {
  var maskColor, tempLayer, tempLayerMask;
  layer.visible = false;
  if (color !== void 0) {
    maskColor = color;
  } else if (layer.props.backgroundColor) {
    maskColor = layer.backgroundColor.color;
  } else {
    maskColor = layer.color.color;
  }
  tempLayerMask = new Layer({
    clip: true,
    y: layer.y,
    x: layer.x,
    width: layer.width,
    height: layer.height,
    backgroundColor: null,
    parent: layer.parent
  });
  tempLayer = new Layer({
    y: 0,
    x: 0,
    width: 0,
    height: layer.height,
    backgroundColor: maskColor,
    parent: tempLayerMask
  });
  tempLayer.onAnimationEnd(function() {
    tempLayer.onAnimationEnd(function() {
      tempLayer.destroy();
      return tempLayerMask.destroy();
    });
    layer.visible = true;
    layer.clip = true;
    return tempLayer.animate({
      x: layer.width,
      options: {
        curve: 'ease-in-out',
        time: 0.55
      }
    });
  });
  return tempLayer.animate({
    width: layer.width,
    options: {
      curve: 'ease-in-out',
      time: 0.89,
      delay: delay
    }
  });
};

maskintro = function(layer, delay, color) {
  var delayIncrement, i, j, len, ref, results;
  delay = delay || 0;
  if (layer.children.length) {
    delayIncrement = 0;
    ref = layer.children;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      delayIncrement += 0.13;
      results.push(maskanimation(i, delayIncrement + delay, color));
    }
    return results;
  } else {
    return maskanimation(layer, delay, color);
  }
};

exports.maskintro = maskintro;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3Jhc2VyYS9EZXNrdG9wL2ZyYW1lci1tYXNraW50cm8vbWFza2ludHJvLmZyYW1lci9tb2R1bGVzL21hc2tpbnRyby5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1hc2thbmltYXRpb24gPSAobGF5ZXIsIGRlbGF5LCBjb2xvcikgLT5cblx0XG5cdGxheWVyLnZpc2libGUgPSBmYWxzZVxuXG5cdCMgY2hlY2sgaWYgYSBjb2xvciB2YXJpYWJsZSBleGlzdHNcblx0IyBkZWZhdWx0IG1hc2tpbnRybyB3aWxsIHVzZSBhIGJhY2tncm91bmQgY29sb3Igb3IgYSB0ZXh0IGNvbG9yIGZyb20gdGhlIG9yaWdpbiBsYXllclxuXG5cdGlmIGNvbG9yICE9IHVuZGVmaW5lZFxuXHRcdG1hc2tDb2xvciA9IGNvbG9yXG5cdGVsc2UgaWYgbGF5ZXIucHJvcHMuYmFja2dyb3VuZENvbG9yXG5cdFx0bWFza0NvbG9yID0gbGF5ZXIuYmFja2dyb3VuZENvbG9yLmNvbG9yXG5cdGVsc2Vcblx0XHRtYXNrQ29sb3IgPSBsYXllci5jb2xvci5jb2xvclxuXG5cdHRlbXBMYXllck1hc2sgPSBuZXcgTGF5ZXJcblx0XHRjbGlwOiB0cnVlXG5cdFx0eTogbGF5ZXIueVxuXHRcdHg6IGxheWVyLnhcblx0XHR3aWR0aDogbGF5ZXIud2lkdGhcblx0XHRoZWlnaHQ6IGxheWVyLmhlaWdodFxuXHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdHBhcmVudDogbGF5ZXIucGFyZW50XG5cblx0dGVtcExheWVyID0gbmV3IExheWVyXG5cdFx0eTogMFxuXHRcdHg6IDBcblx0XHR3aWR0aDogMFxuXHRcdGhlaWdodDogbGF5ZXIuaGVpZ2h0XG5cdFx0YmFja2dyb3VuZENvbG9yOiBtYXNrQ29sb3Jcblx0XHRwYXJlbnQ6IHRlbXBMYXllck1hc2tcblxuXHR0ZW1wTGF5ZXIub25BbmltYXRpb25FbmQgLT5cblx0XHR0ZW1wTGF5ZXIub25BbmltYXRpb25FbmQgLT5cblx0XHRcdHRlbXBMYXllci5kZXN0cm95KClcblx0XHRcdHRlbXBMYXllck1hc2suZGVzdHJveSgpXG5cblx0XHRsYXllci52aXNpYmxlID0gdHJ1ZVxuXHRcdGxheWVyLmNsaXAgPSB0cnVlXG5cblx0XHR0ZW1wTGF5ZXIuYW5pbWF0ZVxuXHRcdFx0eDogbGF5ZXIud2lkdGhcblx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdGN1cnZlOiAnZWFzZS1pbi1vdXQnXG5cdFx0XHRcdHRpbWU6IDAuNTVcblxuXHR0ZW1wTGF5ZXIuYW5pbWF0ZVxuXHRcdHdpZHRoOiBsYXllci53aWR0aFxuXHRcdG9wdGlvbnM6XG5cdFx0XHRjdXJ2ZTogJ2Vhc2UtaW4tb3V0J1xuXHRcdFx0dGltZTogMC44OVxuXHRcdFx0ZGVsYXk6IGRlbGF5XG5cblxubWFza2ludHJvID0gKGxheWVyLCBkZWxheSwgY29sb3IpIC0+XG5cblx0IyBjaGVjayBpZiBsYXllciBoYXMgY2hpbGRyZW5cblx0ZGVsYXkgPSBkZWxheSB8fCAwXG5cblx0aWYgbGF5ZXIuY2hpbGRyZW4ubGVuZ3RoXG5cdFx0ZGVsYXlJbmNyZW1lbnQgPSAwXG5cdFx0Zm9yIGkgaW4gbGF5ZXIuY2hpbGRyZW5cblx0XHRcdGRlbGF5SW5jcmVtZW50ICs9IDAuMTNcblx0XHRcdG1hc2thbmltYXRpb24oaSxkZWxheUluY3JlbWVudCtkZWxheSxjb2xvcilcblx0ZWxzZVxuXHRcdG1hc2thbmltYXRpb24obGF5ZXIsZGVsYXksY29sb3IpXG5cbiMgcnVuIG1hc2tpbnRyb1xuZXhwb3J0cy5tYXNraW50cm8gPSBtYXNraW50cm8iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBREFBLElBQUE7O0FBQUEsYUFBQSxHQUFnQixTQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZjtBQUVmLE1BQUE7RUFBQSxLQUFLLENBQUMsT0FBTixHQUFnQjtFQUtoQixJQUFHLEtBQUEsS0FBUyxNQUFaO0lBQ0MsU0FBQSxHQUFZLE1BRGI7R0FBQSxNQUVLLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFmO0lBQ0osU0FBQSxHQUFZLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFEOUI7R0FBQSxNQUFBO0lBR0osU0FBQSxHQUFZLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFIcEI7O0VBS0wsYUFBQSxHQUFvQixJQUFBLEtBQUEsQ0FDbkI7SUFBQSxJQUFBLEVBQU0sSUFBTjtJQUNBLENBQUEsRUFBRyxLQUFLLENBQUMsQ0FEVDtJQUVBLENBQUEsRUFBRyxLQUFLLENBQUMsQ0FGVDtJQUdBLEtBQUEsRUFBTyxLQUFLLENBQUMsS0FIYjtJQUlBLE1BQUEsRUFBUSxLQUFLLENBQUMsTUFKZDtJQUtBLGVBQUEsRUFBaUIsSUFMakI7SUFNQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BTmQ7R0FEbUI7RUFTcEIsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FDZjtJQUFBLENBQUEsRUFBRyxDQUFIO0lBQ0EsQ0FBQSxFQUFHLENBREg7SUFFQSxLQUFBLEVBQU8sQ0FGUDtJQUdBLE1BQUEsRUFBUSxLQUFLLENBQUMsTUFIZDtJQUlBLGVBQUEsRUFBaUIsU0FKakI7SUFLQSxNQUFBLEVBQVEsYUFMUjtHQURlO0VBUWhCLFNBQVMsQ0FBQyxjQUFWLENBQXlCLFNBQUE7SUFDeEIsU0FBUyxDQUFDLGNBQVYsQ0FBeUIsU0FBQTtNQUN4QixTQUFTLENBQUMsT0FBVixDQUFBO2FBQ0EsYUFBYSxDQUFDLE9BQWQsQ0FBQTtJQUZ3QixDQUF6QjtJQUlBLEtBQUssQ0FBQyxPQUFOLEdBQWdCO0lBQ2hCLEtBQUssQ0FBQyxJQUFOLEdBQWE7V0FFYixTQUFTLENBQUMsT0FBVixDQUNDO01BQUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxLQUFUO01BQ0EsT0FBQSxFQUNDO1FBQUEsS0FBQSxFQUFPLGFBQVA7UUFDQSxJQUFBLEVBQU0sSUFETjtPQUZEO0tBREQ7RUFSd0IsQ0FBekI7U0FjQSxTQUFTLENBQUMsT0FBVixDQUNDO0lBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFiO0lBQ0EsT0FBQSxFQUNDO01BQUEsS0FBQSxFQUFPLGFBQVA7TUFDQSxJQUFBLEVBQU0sSUFETjtNQUVBLEtBQUEsRUFBTyxLQUZQO0tBRkQ7R0FERDtBQTdDZTs7QUFxRGhCLFNBQUEsR0FBWSxTQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZjtBQUdYLE1BQUE7RUFBQSxLQUFBLEdBQVEsS0FBQSxJQUFTO0VBRWpCLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFsQjtJQUNDLGNBQUEsR0FBaUI7QUFDakI7QUFBQTtTQUFBLHFDQUFBOztNQUNDLGNBQUEsSUFBa0I7bUJBQ2xCLGFBQUEsQ0FBYyxDQUFkLEVBQWdCLGNBQUEsR0FBZSxLQUEvQixFQUFxQyxLQUFyQztBQUZEO21CQUZEO0dBQUEsTUFBQTtXQU1DLGFBQUEsQ0FBYyxLQUFkLEVBQW9CLEtBQXBCLEVBQTBCLEtBQTFCLEVBTkQ7O0FBTFc7O0FBY1osT0FBTyxDQUFDLFNBQVIsR0FBb0IifQ==
