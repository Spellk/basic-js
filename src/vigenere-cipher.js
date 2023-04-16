const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.map = new Map();
    for (let i = 0; i < this.alphabet.length; i++) {
      this.map.set(this.alphabet[i], i);
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const messageUp = message.toUpperCase();
    const keyUp = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < messageUp.length; i++) {
      let char = messageUp[i];
      if (!this.map.has(char)) {
        result += char;
        continue;
      }
      const keyChar = keyUp[j % keyUp.length];
      const keyIndex = this.map.get(keyChar);
      const charIndex = this.map.get(char);
      const newIndex = (charIndex + keyIndex) % this.alphabet.length;
      const newChar = this.alphabet[newIndex];
      result += newChar;
      j++;
    }
    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const messageUp = message.toUpperCase();
    const keyUp = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < messageUp.length; i++) {
      let char = messageUp[i];
      if (!this.map.has(char)) {
        result += char;
        continue;
      }
      const keyChar = keyUp[j % keyUp.length];
      const keyIndex = this.map.get(keyChar);
      const charIndex = this.map.get(char);
      const newIndex =
        (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
      const newChar = this.alphabet[newIndex];
      result += newChar;
      j++;
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
