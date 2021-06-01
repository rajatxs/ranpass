const scopeId = "app";

/**
 * Generate localStorage key
 * @param {string} prop - Property
 */
function key (prop) {
   return scopeId + ':' + prop;
}

const storage = {

   get _length () {
      return key("length");
   },

   /**
    * Password length
    * @type {number}
    */
   get length () {
      return Number(localStorage.getItem(this._length)) || null;
   },

   /**
    * Set password length
    * @param {number|string} val - Value
    */
   set length (val) {
      localStorage.setItem(this._length, String(val));
   },

   get _options () {
      return key("options");
   },

   /**
    * Enabled options
    * @type {string[]}
    */
   get options () {
      const val = localStorage.getItem(this._options) || '';
      return val.split(',').filter(item => typeof item === 'string' && item.length > 0);
   },

   /**
    * Set enable options
    * @param {string[]} list - Option list
    */
   set options (list) {
      const val = list.join(',');
      localStorage.setItem(this._options, val);
   }
};

export default storage;
