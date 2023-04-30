<script>
     import { preferences } from '../stores/ecommerceStore';
     import { page } from '$app/stores';
     import Cart from './Cart.svelte';
     import { onMount, afterUpdate } from 'svelte';

     let showMenu = false;
     let path;
     let showCart = false;
     let cartFull = false;
     
     const checkPurchases = () => {
          let a = $preferences.filter(product => product.purchased === true)
          if (a.length > 0) {
               cartFull = true;
          } else {
               cartFull = false;
          }
     }

     onMount(() => {
          checkPurchases();
     })

     afterUpdate(() => {
          checkPurchases();
     })

     function getPath(currentPath) {
          path = currentPath;
     }

     $: getPath($page.url.pathname);
</script>

<nav class="sticky top-0 opacity-95 z-50 {(path === "/") ? "bg-[#191A1A]" : "bg-black"}">
     <div class="mx-auto max-w-[69.375rem] px-4 desktop:px-0 border-b border-[#2C2C2C]">
          <div class="relative flex h-[5.625rem] items-center justify-between">
               <div class="desktop:hidden absolute inset-y-0 left-0 flex items-center">
                    <button type="button" on:click={()=>{showMenu = !showMenu}} class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                         <span class="sr-only">Open main menu</span>
                         <img src="/shared/tablet/icon-hamburger.svg" alt="menu icon" class="w-4 h-[0.9375rem] {showMenu ? "hidden" : "block"}">
                         <img src="/shared/tablet/close.svg" alt="menu icon" class="w-4 h-[0.9375rem] {showMenu ? "block" : "hidden"}">
                    </button>
               </div>
               <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start md:ml-14 desktop:ml-0">
                    <div class="flex flex-shrink-0 items-center">
                         <img class="block h-[1.5625rem] w-auto lg:hidden" src="/shared/desktop/logo.svg" alt="Audiophile">
                         <img class="hidden h-[1.5625rem] w-auto lg:block" src="/shared/desktop/logo.svg" alt="Audiophile">
                    </div>
                    <div class="hidden md:ml-6 desktop:block desktop:ml-auto desktop:mr-[21.875rem]">
                         <div class="flex space-x-4">
                              <a href="/" class="bg-gray-900 desktop:bg-transparent hover:bg-dark-orange text-white rounded-md px-3 py-2 text-[0.8125rem] font-bold" aria-current="page">HOME</a>
                              <a href="/headphones" class="text-white hover:bg-dark-orange rounded-md px-3 py-2 text-[0.8125rem] font-bold">HEADPHONES</a>
                              <a href="/speakers" class="text-white hover:bg-dark-orange rounded-md px-3 py-2 text-[0.8125rem] font-bold">SPEAKERS</a>
                              <a href="/earphones" class="text-white hover:bg-dark-orange rounded-md px-3 py-2 text-[0.8125rem] font-bold">EARPHONES</a>
                         </div>
                    </div>
               </div>
               <div class="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto">
                    <button type="button" on:click={()=>{showCart = !showCart}} class="rounded-full p-2 {cartFull ? "text-white" : "text-transparent"} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                         <span class="sr-only">View cart</span>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="block w-[1.4375rem] h-5 stroke-white"><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" /></svg>
                    </button>
               </div>
          </div>
     </div>
     <div class="absolute bg-black w-full desktop:hidden {showMenu ? "block" : "hidden"}" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
               <a href="/" on:click={()=>{showMenu = false}} class="{(path === "/") ? "bg-[#191919]" : ""} text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">HOME</a>
               <a href="/headphones" on:click={()=>{showMenu = false}} class="{(path.includes("headphones")) ? "bg-[#191919]" : ""} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">HEADPHONES</a>
               <a href="/speakers" on:click={()=>{showMenu = false}} class="{(path.includes("speakers")) ? "bg-[#191919]" : ""} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">SPEAKERS</a>
               <a href="/earphones" on:click={()=>{showMenu = false}} class="{(path.includes("earphones")) ? "bg-[#191919]" : ""} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">EARPHONES</a>
          </div>
     </div>
</nav>
<Cart show={showCart} on:click={()=>{showCart = !showCart}} />