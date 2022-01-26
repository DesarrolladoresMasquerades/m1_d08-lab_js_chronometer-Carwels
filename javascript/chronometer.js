class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      if(callback) { return callback }
      this.currentTime++
    }, 1 * 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  let stringValue = value.toString();
  
  if (stringValue.length < 2) return ("0" + stringValue)
  else return stringValue;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minuteSplit = this.computeTwoDigitNumber(this.getMinutes());
    let secondsSplit = this.computeTwoDigitNumber(this.getSeconds());
    return `${minuteSplit}:${secondsSplit}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
