// animation-plugins.js
export function jumpPlugin(height = 100) {
  return function(target) {
    console.log(`🦘 ${target} 跳了 ${height}px 高！`);
  };
}

export function rotatePlugin(deg = 360) {
  return function(target) {
    console.log(`🌀 ${target} 旋转了 ${deg} 度！`);
  };
}

export function blinkPlugin(times = 3) {
  return function(target) {
    console.log(`✨ ${target} 闪烁了 ${times} 次！`);
  };
}
