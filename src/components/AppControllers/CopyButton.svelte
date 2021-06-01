<script>
   import { createEventDispatcher } from "svelte";
   import ClipboardIcon from "../icons/clipboard.svelte";
   import CheckCircleIcon from "../icons/CheckCircle.svelte";
   import WarningCircle from "../icons/WarningCircle.svelte";
   
   export let disabled = false;
   export let value = null;

   const dispatch = createEventDispatcher();
   let buttonType = "success";
   let status = 'pending';

   $: {
      let type;

      switch (status) {
         default:
         case 'pending':
            type = 'primary';
            break;

         case 'resolve':
            type = 'success';
            break;

         case 'reject':
            type = 'error';
            break;
      }

      buttonType = type;
   }

   /**
    * Handle copy button action
    * @param {MouseEvent} event
    */
   function handleClick (event) {
      if (event.isTrusted) {
         if (status === 'pending' && 'clipboard' in window.navigator) {
            window
               .navigator
               .clipboard
               .writeText(String(value))
               .then(() => status = 'resolve')
               .catch (() => status = 'reject')
               .finally (() => {
                  dispatch("copy");
                  setTimeout(() => {
                     status = 'pending';
                  }, 3000);
               });        
         }
      }
   }
</script>

<div aria-label="Copy Control" class="input-container copy-button-container">
   <button
      {disabled} 
      id="password-copy-control" 
      class={buttonType}
      on:click={handleClick}>

      {#if status === 'pending'} 
      <!-- Default button -->
         <ClipboardIcon />
         <span class="label">Copy to Clipboard</span>
      {:else if status === 'resolve'}
      <!-- Success button -->
         <CheckCircleIcon />
         <span class="label">Copied</span>
      {:else if status === 'reject'}
      <!-- Error button -->
         <WarningCircle />
         <span class="label">Can't Copy</span>
      {/if}
   
   </button>
</div>

<style>
.input-container.copy-button-container {
   display: flex;
   justify-content: center;
   padding-top: 1rem;
   padding-bottom: 1rem;
}

</style>