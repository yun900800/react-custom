// main.js
import { Animator } from '../../shared/animation/lib/animation-core.js';
import { jumpPlugin, rotatePlugin, blinkPlugin } from '../../shared/animation/lib/animation-plugins.js';

const actor = '小黄鸭 🐤';

const animator = new Animator(actor);

animator.add(jumpPlugin(150));
animator.add(rotatePlugin(720));
animator.add(blinkPlugin(5));

animator.play();
// 这个例子是为了测试动画插件的功能，
// 你可以在浏览器的控制台中查看输出结果，
