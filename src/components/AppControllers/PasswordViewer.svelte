<script>
   import { createEventDispatcher } from "svelte";
   
   export let password;
   
   const dispatch = createEventDispatcher();

   /**
    * Handle output element click
    * @param {MouseEvent} event
    */
   function handleOutputClick (event) {
      const { target } = event;

      if (target instanceof HTMLInputElement && target.id === "password-output") {
         target.select();
      }
   }

   function handleRegeneration () {
      dispatch("regenerate");
   }
</script>

<div id="password-viewer">
   <label for="password-output">
      <input 
         value={password}
         type="text" 
         id="password-output" 
         readonly
         on:click={handleOutputClick} />
   </label>
   <span on:click={handleRegeneration} id="password-regenerate-control">
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         fill="currentColor" 
         class="icon"
         viewBox="0 0 16 16">
         <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
         <path 
            fill-rule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
      </svg>
   </span>
</div>

<style>
#password-viewer {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 40px;
   padding: 4px;
   width: 360px;
   border: 1px solid var(--fr-5);
   border-radius: 25px;
}
#password-viewer:hover #password-regenerate-control {
   background-color: var(--primary);
}
#password-viewer:hover #password-regenerate-control svg.icon {
   fill: var(--primary-fr);
}
#password-output {
   border: none;
   outline: none;
   font-size: 1.5em;
   padding-left: 12px;
   letter-spacing: 2px;
   -webkit-user-select: text;
   -ms-user-select: text;
   -moz-user-select: text;
   user-select: text;
}
#password-regenerate-control {
   display: inline-flex;
   height: inherit;
   justify-content: center;
   align-items: center;
   width: 48px;
   border-radius: inherit;
   background-color: transparent;
   cursor: pointer;
   transition: background-color 60ms linear;
}
#password-regenerate-control svg.icon {
   width: 24px;
   height: 24px;
   fill: var(--fr-3);
}

@media screen and (max-width: 380px) {
   #password-viewer {
      width: inherit;
      padding: 1px;
   }
   #password-output {
      width: auto;
      font-size: 1.1rem;
      letter-spacing: 1.3px;
   }
   #password-regenerate-control {
      width: 40px;
   }
}

@media screen and (max-width: 290px) {
   #password-viewer {
      width: 250px;
   }
   #password-output {
      width: 190px;
   }
}
</style>