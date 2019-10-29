
class TimeDown {
  constructor (options) {
    // 父容器
    this.$el = document.querySelector(options.el)
    // 活动结束 / 活动未开始
    if (options.currentTime >= options.timeEnd || options.currentTime < options.timeStart) {
      this.allS = 0
      this.computedTime()
      this.render()
      return
    }
    // 活动开始中
    this.time = options.currentTime
    this.timeEnd = options.timeEnd // 1567156200000
    this.init()
  }
  init () {
    this.allS = (this.timeEnd - this.time) / 1000 // 总秒数
    this.computedTime()
    this.render()
    this.timeId = setInterval(() => {
      this.allS--
      if (this.allS < 0) {
        clearInterval(this.timeId)
        return
      }
      this.computedTime()
      this.render()
    }, 1000)
  }
  computedTime () {
    // debugger
    let allM = parseInt(this.allS / 60) // 总分钟数
    let h = parseInt(allM / 60) // 总小时
    let m = allM - h * 60
    let s = parseInt(this.allS % 60)
    h = h < 10 ? `0${h}` : h
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    this.h = h
    this.m = m
    this.s = s
  }
  render () {
    this.$el.innerHTML = '<span class="hour">' + this.h +
      '</span>:<span class="minute">' + this.m +
      '</span>:<span class="second">' + this.s + '</span>'
  }
}
