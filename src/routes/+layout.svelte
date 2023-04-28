<script>
     import "../app.css";
     import Footer from "../components/Footer.svelte";
     import Nav from "../components/Nav.svelte";
</script>

<Nav />
<main class="font-manrope font-medium leading-[1.5625rem] text-[0.9375rem] text-black">
     <slot />
</main>
<Footer />