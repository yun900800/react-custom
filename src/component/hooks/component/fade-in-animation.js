export class FadeInAnimation{
    constructor(node) {
        this.node = node;
    }

    start(duration) {
        this.duration = duration;
        if (this.duration === 0) {
            this.onProgress(1);
        } else {
            this.onProgress(0);
            // 开始动画
            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }

    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1);
        this.onProgress(progress);
        if (progress < 1) {
        // 仍然有更多的帧要绘制
        this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }
    onProgress(progress) {
        this.node.style.opacity = progress;
    }
    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
    
}