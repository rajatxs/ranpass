<script>
   import { createEventDispatcher }  from "svelte";
   import { elementId } from "../utils";

   const sliderId = elementId("app-slider");
   const dispatch = createEventDispatcher();

   export let key = null;
   export let min = 1;
   export let max = 100;
   export let value = 1;
   export let tooltip = null;

   /** Handle slider input */
   function handleInputChange () {
      dispatch("input", {
         key, 
         value
      });
   }

   /** Handle slider value change */
   function handleValueChange () {
      dispatch("change", {
         key, 
         value
      });
   }
</script>

<div class="app-slider" data-slider-key={key}>
   <label aria-label="Slider Label" for={sliderId} class="app-slider-label">
      <small>{value}</small>
   </label>

   <input 
      type="range" 
      title={tooltip}
      id={sliderId} 
      class="app-slider-input"
      {min}
      {max} 
      bind:value={value}
      on:input={handleInputChange}
      on:change={handleValueChange}
      aria-label="Slider Input" />
</div>

<style>
.app-slider {
   width: 100%;
   display: flex;
   align-items: center;
   margin-top: 32px;
   margin-bottom: 32px;
}
.app-slider .app-slider-input {
   margin-left: 12px;
   -webkit-appearance: none;
   width: 100%;
   height: 10px;
   background-color: var(--fr-5);
   outline: none;
   border-radius: 1em;
   -webkit-transition: .2s;
   transition: opacity .2s;
}
.app-slider .app-slider-input::-webkit-slider-thumb {
   -webkit-appearance: none;
   appearance: none;
   width: 25px;
   height: 25px;
   border-radius: 25px;
   background-color: var(--primary);
   cursor: pointer;
   transition: width 80ms ease, height 80ms ease;
}
.app-slider .app-slider-input:active::-webkit-slider-thumb {
   width: 28px;
   height: 28px;
}
.app-slider .app-slider-input::-moz-range-thumb {
   width: 25px;
   height: 25px;
   background-color: var(--primary);
   cursor: pointer;
}
</style>