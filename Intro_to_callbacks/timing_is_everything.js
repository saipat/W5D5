class Clock {
  constructor() {
    const dateObj = new Date();
    this.hour = dateObj.getHours();
    this.minute = dateObj.getMinutes();
    this.second = dateObj.getSeconds();
  }
  
  displayTime() {
    let time = `${this.hour}:${this.minute}:${this.second}`;
    console.log(time);
  }
  
  _tick() {
    // debugger
    // let that = this;
    const cb = () => {
      // console.log('This is inside setInterval');
      // console.dir(this);
      this.second += 1;
      this.displayTime();
    }
    setInterval(cb, 1000);
  }
}


const clock = new Clock();