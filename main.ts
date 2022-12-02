function 播动画 (动画列表: Image[], 间隔: number) {
    for (let 动画 of 动画列表) {
        动画.showImage(0)
        basic.pause(间隔)
    }
}
