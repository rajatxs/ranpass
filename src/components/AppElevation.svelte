<div id="app-elevation">               
   <h2 class="tagline">Generate secure passwords</h2>
   <p class="desc">Use online password generator to create more secure<br />random password.</p>
   
   <!-- svelte-ignore a11y-img-redundant-alt -->
   <img 
      type="image/svg+xml"
      class="image" 
      src="/images/auth.svg" 
      alt="Authentication Image" 
      aria-label="Authentication Image" />
</div>

<style>
#app-elevation .image {
   width: 340px;
   height: auto;
   margin-top: 45px;
   -webkit-user-select: none;
   -webkit-user-drag: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
#app-elevation .tagline {
   line-height: 2.4rem;
   font-size: 2rem;
   padding: 0;
}
#app-elevation .desc {
   color: var(--fr-2);
}

@media screen and (max-width: 1024px) {
   #app-elevation {
      display: none;
   }
}
</style>