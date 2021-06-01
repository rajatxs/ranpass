<script>
   import { createEventDispatcher } from "svelte";
   import { elementId } from "../utils";

   const checkboxId = elementId("app-checkbox");
   const dispatch = createEventDispatcher();

   export let label = null;
   export let checked = false;
   export let disabled = false;
   export let key = null;

   /**
    * Handle checkbox value change
    * @param {MouseEvent} event
    */
   function handleChange (event) {
      const value = event.target.checked;

      dispatch("change", { key, value });
   }
</script>

<label 
   for={checkboxId} 
   class="app-checkbox"
   data-checkbox-key={key}>

   <!-- Optional label -->
   {#if label} 
      <span class="label">{label}</span>
   {/if}

   <input 
      type="checkbox" 
      id={checkboxId}
      class="controller"
      {checked}
      {disabled}
      on:change={handleChange} />
   <span class="checkmark"></span>
</label>

<style>
.app-checkbox {
   display: flex;
   position: relative;
   padding-left: 35px;
   height: 25px;
   width: min-content;
   align-items: center;
   margin-top: 16px;
   margin-bottom: 16px;
   cursor: pointer;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
.app-checkbox .controller {
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
}
.app-checkbox > .checkmark {
   border-radius: 25px;
   position: absolute;
   top: 0;
   left: 0;
   height: 25px;
   width: 25px;
   background-color: var(--fr-5);
   transition: background-color 80ms linear;
}
.app-checkbox:active .controller ~ .checkmark {
   background-color: var(--fr-4);
}
.app-checkbox .controller:checked ~ .checkmark {
   background-color: var(--primary);
}
.app-checkbox:active .controller:checked ~ .checkmark {
   background-color: var(--primary-dark);
}
.app-checkbox .checkmark:after {
   content: "";
   position: absolute;
   display: none;
}
.app-checkbox .controller:checked ~ .checkmark:after {
   display: block;
}
.app-checkbox .checkmark:after {
   left: 8px;
   top: 4px;
   width: 6px;
   height: 10px;
   border-width: 0 3px 3px 0;
   border-style: solid;
   border-color: var(--primary-fr);
   -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   transform: rotate(45deg);
}
</style>