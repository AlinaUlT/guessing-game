class GuessingGame {
  constructor() { }

  setRange(min, max) {
    this.max = max;
    this.min = min;
    this.value = 0;
  }

  guess() {
    this.value = Math.ceil((this.max + this.min) / 2);
    return this.value;
  }

  lower() {
    this.max = this.value;
  }

  greater() {
    this.min = this.value;
  }
}

module.exports = GuessingGame;
