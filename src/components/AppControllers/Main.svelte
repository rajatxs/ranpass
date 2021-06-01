<script>
   import { onMount } from "svelte";
   import Password from "../../utils/password";
   import storage from "../../utils/storage";
   import PasswordViewer from "./PasswordViewer.svelte";
   import CopyButton from "./CopyButton.svelte";
   import AppSlider from "../AppSlider.svelte";
   import AppCheckbox from "../AppCheckbox.svelte";

   let password = '';
   let length = storage.length || 8;

   /** @type {PasswordGenerateOptions} */
   let options = {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false
   };

   /** Regenerate password with selected parameters */
   function regenerate () {
      password = Password.generate(length, options);
   }

   /**
    * Handle input source of length slider
    * @param {CustomEvent} event
    */
   function handleLengthInput (event) {
      const { value } = event.detail;
      length = Number(value);

      regenerate();
   }

   /**
    * Handle value changes of length slider
    * @param {CustomEvent} event
    */
   function handleLengthChange (event) {
      const { value } = event.detail;

      // save length value
      storage.length = value;
   }

   /**
    * Handle changes for password options
    * @param {CustomEvent} event
    */
   function handleOptionChanges (event) {
      const { key, value } = event.detail;
      let enableOptions = [];
      
      Reflect.set(options, key, value);

      // find enable options
      enableOptions = Object
         .entries(options)
         .map(([key, value]) => {
            if (typeof value === 'boolean' && value === true) {
               return key;
            }
         })
         .filter(key => typeof key === 'string');

      storage.options = enableOptions;

      regenerate();
   }


   onMount (() => {
      // assign storage values
      const savedOptions = storage.options;

      if (savedOptions.length > 0) {
         storage.options.forEach((option) => {
            options[option] = true;
         });
      } else {

         // lowercase is enabled by default
         options.lowercase = true;
      }

      // generate initial password
      regenerate();
   });


</script>

<div id="app-controllers">
   <PasswordViewer {password} on:regenerate={regenerate} />

   <div class="password-options">
      <CopyButton value={password} />

      <div class="input-container">
         <AppSlider 
            key="length"
            min={1} 
            max={50} 
            value={length}
            tooltip={"Change Password Length"}
            on:input={handleLengthInput}
            on:change={handleLengthChange} />

         <div class="password-prop">

            <!-- Uppercase Checkbox -->
            <AppCheckbox 
               key="uppercase"
               label={"Uppercase"}
               checked={options.uppercase}
               on:change={handleOptionChanges} />

            <!-- Lowercase Checkbox -->
            <AppCheckbox 
               key="lowercase"
               label={"Lowercase"}
               checked={options.lowercase}
               on:change={handleOptionChanges} />

            <!-- Number Checkbox -->
            <AppCheckbox 
               key="numbers"
               label={"Numbers"}
               checked={options.numbers}
               on:change={handleOptionChanges} />

            <!-- Symbols Checkbox -->
            <AppCheckbox 
               key="symbols"
               label={"symbols"}
               checked={options.symbols}
               on:change={handleOptionChanges} />

         </div>
      </div>
   </div>
</div>

<style>
@media screen and (max-width: 480px) {
   #app-controllers {   
      padding-left: 12px;
      padding-right: 12px;
   }
}
</style>