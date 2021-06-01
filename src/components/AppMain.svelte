<script>
	import AppElevation from "./AppElevation.svelte";
	import AppControllers from "./AppControllers/Main.svelte";
</script>

<main id="app-main" role="main">
   <AppElevation />
	<AppControllers />
</main>

<style>
#app-main {
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   height: inherit;
   width: 100%;
}
</style>