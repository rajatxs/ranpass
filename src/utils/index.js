
/**
 * Generate element id
 * @param {string} [prefix] - Id Prefix
 * @returns {string}
 */
export function elementId (prefix = null) {
   const rand = String(Math.floor(Math.random() * 10e6));
   let id;

   if (typeof prefix === 'string') {
      id = prefix + '-' + rand;
   }
   else {
      id = rand;
   }

   return id;
}

