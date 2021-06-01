
export default {

   /**
    * Available symbols
    * @type {string}
    */
   get symbols () {
      return '~!@#$%^&*()_+{}":?><;.,';
   },

   /**
    * Get secure random number
    * @returns {number}
    */
   random () {
      const uint = new Uint32Array(1);
      const rand = window.crypto.getRandomValues(uint)[0];
      return rand / (Math.pow(2, 32) - 1);
   },

   /**
    * Get random lowercase char
    * @returns {string}
    */
   randomLower () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   },

   /**
    * Get random uppercase char
    * @returns {string}
    */
   randomUpper () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   },

   /**
    * Get random numeric character
    * @returns {string}
    */
   randomNumber () {
      return String.fromCharCode(Math.floor(this.random() * 10) + 48);
   },

   /**
    * Get random symbol
    * @returns {string}
    */
   randomSymbol () {
      const sym = this.symbols;
      return sym[Math.floor(Math.random() * sym.length)];
   },

   /**
    * Generate random password
    * @property {number} [length] - Password Length
    * @param {PasswordGenerateOptions} [option] - Password generate options
    * @returns {string}
    */
   generate (length = 8, option = {}) {
      let password = '';
      let types, funcs;

      types = Object.entries(option).map(([key, value]) => {
         if (value) {
            return key;
         }
         return undefined;
      }).filter(type => typeof type === 'string');

      funcs = {
         'uppercase': this.randomUpper,
         'lowercase': this.randomLower,
         'numbers': this.randomNumber,
         'symbols': this.randomSymbol
      };

      for (let i = 0; i < length; ++i) {
         types.forEach(type => {
            const func = funcs[type];
            password = password.concat(func.call(this));
         })
      }

      password = password
         .slice(0, length)
         .split('')
         .sort(() => Math.random() - 0.5)
         .join('');

      return password;
   }
}
