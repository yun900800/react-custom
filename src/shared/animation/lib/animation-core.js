// animation-core.js
export class Animator {
  constructor(target) {
    this.target = target;
    this.animations = [];
  }

  add(animation) {
    this.animations.push(animation);
  }

  play() {
    console.log(`🎞️ 播放 ${this.animations.length} 个动画...`);
    this.animations.forEach((anim, i) => {
      console.log(`  ➤ 动画${i + 1}:`);
      anim(this.target);
    });
  }
}
