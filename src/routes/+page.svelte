<script>
     import Categories from "../components/Categories.svelte";
</script>

<div class="bg-white">
     <header class="bg-bottom bg-no-repeat bg-cover text-center pt-[6.875rem] pb-[7rem] px-[3.25rem]">
          <h3 class="font-normal text-[#8C8C8C] text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
          <h1 class="font-bold text-white text-4xl tracking-[0.080625rem] leading-[2.5rem] mt-4">XX99 Mark II<br>HeadphoneS</h1>
          <p class="font-medium text-[0.9375rem] text-[#C6C6C6] leading-[1.5625rem] mt-8">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <a href="/" class="flex justify-center items-center bg-dark-orange text-white font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mx-auto mt-8">
               See Product
          </a>
     </header>

     <Categories />
     
     <section class="px-6">
          <div class="relative flex items-end bg-dark-orange h-[37.5rem] rounded-lg text-center overflow-hidden">
               <!-- <img src="/home/desktop/pattern-circles.svg" alt="" role="presentation" class="absolute top-0"> -->
               <svg class="absolute top-0" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
               <img src="/home/mobile/image-speaker-zx9.png" alt="" role="presentation" class="absolute top-0 left-1/2 -translate-x-1/2 h-[12.9375rem]">
               <div>
                    <h4 class="text-white font-bold text-4xl leading-[2.5rem] tracking-[0.080625rem]">ZX9<br>SPEAKER</h4>
                    <p class="text-[#F5DED2] font-medium text-[0.9375rem] leading-[1.5625rem]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <a href="/" class="flex justify-center items-center bg-black text-white font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mx-auto">
                         See Product
                    </a>
               </div>
          </div>
     </section>
</div>

<style>
     header {
          background-image: url(/home/mobile/image-header.jpg);
     }
</style>