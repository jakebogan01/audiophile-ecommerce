<script>
     let showMenu = false;
</script>

<nav class="sticky top-0 bg-[#191A1A] z-50">
     <div class="mx-auto max-w-7xl px-4 border-b border-[#2C2C2C]">
          <div class="relative flex h-[5.625rem] items-center justify-between">
               <div class="absolute inset-y-0 left-0 flex items-center">
                    <button type="button" on:click={()=>{showMenu = !showMenu}} class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                         <span class="sr-only">Open main menu</span>
                         <img src="/shared/tablet/icon-hamburger.svg" alt="menu icon" class="{showMenu ? "hidden" : "block"}">
                         <img src="/shared/tablet/close.svg" alt="menu icon" class="w-4 h-[0.9375rem] {showMenu ? "block" : "hidden"}">
                    </button>
               </div>
               <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start md:ml-14">
                    <div class="flex flex-shrink-0 items-center">
                         <img class="block h-[1.5625rem] w-auto lg:hidden" src="/shared/desktop/logo.svg" alt="Audiophile">
                         <img class="hidden h-8 w-auto lg:block" src="/shared/desktop/logo.svg" alt="Audiophile">
                    </div>
                    <div class="hidden md:ml-6 lg:block">
                         <div class="flex space-x-4">
                              <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                         </div>
                    </div>
               </div>
               <div class="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto">
                    <button type="button" class="rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                         <span class="sr-only">View cart</span>
                         <img class="block h-5 w-auto lg:hidden" src="/shared/desktop/icon-cart.svg" alt="Shopping Cart">
                    </button>
               </div>
          </div>
     </div>
     <div class="absolute bg-black w-full md:hidden {showMenu ? "block" : "hidden"}" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
               <a href="#" class="bg-[#191919] text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
     </div>
</nav>