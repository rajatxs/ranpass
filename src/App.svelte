<script>
	import AppHeader from "./components/AppHeader.svelte";
	import AppFooter from "./components/AppFooter.svelte";
	import AppMain from "./components/AppMain.svelte";
</script>

<div id="app">
	<AppHeader />
	<AppMain />
	<AppFooter />
</div>

<style>
#app {
	display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: inherit;
   height: inherit;
}
</style>