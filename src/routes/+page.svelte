<script>
     import About from "../components/About.svelte";
     import Categories from "../components/Categories.svelte";
     import Button from "../components/shared/Button.svelte";
</script>

<div class="bg-white">
     <header class="bg-bottom bg-no-repeat bg-cover text-center desktop:text-left pt-[6.875rem] pb-[7rem] md:pb-44 px-[3.25rem]">
          <div class="flex justify-center desktop:justify-start max-w-[69.375rem] mx-auto">
               <div>
                    <h3 class="font-normal text-[#8C8C8C] text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
                    <h1 class="font-bold text-white text-4xl md:text-[3.5rem] tracking-[0.080625rem] leading-[2.5rem] md:leading-[3.625rem] mt-4">XX99 Mark II<br>HeadphoneS</h1>
                    <p class="max-w-[21.8125rem] mx-auto font-medium text-[0.9375rem] text-[#C6C6C6] leading-[1.5625rem] mt-8">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <div class="flex justify-center desktop:justify-start">
                         <Button href="/headphones/#xx99-mark-two-headphones">See Product</Button>
                    </div>
               </div>
          </div>
     </header>

     <Categories />
     
     <section class="px-6 space-y-6 desktop:space-y-12">
          <div class="relative flex items-end bg-dark-orange mx-auto max-w-[43.0625rem] desktop:max-w-[69.375rem] h-[37.5rem] md:h-[45rem] desktop:h-[35rem] px-7 pb-14 md:pb-[5.1rem] desktop:pb-32 rounded-lg text-center desktop:text-left overflow-hidden">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 desktop:left-0 desktop:-translate-x-40 -translate-y-32 md:-translate-y-72 desktop:-translate-y-20 w-[558px] h-[558px] md:w-[59rem] md:h-[59rem] z-0">
                    <img src="/home/desktop/pattern-circles.svg" alt="" role="presentation" class="absolute top-0">
               </div>
               <img src="/home/mobile/image-speaker-zx9.png" alt="" role="presentation" class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-10 md:translate-y-16 h-[12.9375rem] md:h-[14.8125rem] desktop:hidden">
               <img src="/home/desktop/image-speaker-zx9.png" alt="" role="presentation" class="absolute bottom-0 left-0 translate-x-32 translate-y-4 h-[30.8125rem] hidden desktop:block">
               <div class="relative mx-auto desktop:mr-20 z-10">
                    <h4 class="text-white font-bold text-4xl md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem] tracking-[0.080625rem] mb-6">ZX9<br>SPEAKER</h4>
                    <p class="max-w-[21.875rem] text-[#F5DED2] font-medium text-[0.9375rem] leading-[1.5625rem] mb-4">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div class="flex justify-center desktop:justify-start">
                         <Button href="/speakers/#zx9-speaker" color={"bg-black text-white"}>See Product</Button>
                    </div>
               </div>
          </div>

          <div class="addTwo bg-center bg-no-repeat bg-cover flex items-center mx-auto max-w-[43.0625rem] desktop:max-w-[69.375rem] bg-dark-gray h-[20rem] px-7 md:px-14 rounded-lg text-center overflow-hidden">
               <div>
                    <h4 class="font-bold text-[1.75rem] leading-[2.5rem] tracking-[0.080625rem] mb-6">ZX7 SPEAKER</h4>
                    <Button  href="/speakers/#zx7-speaker" color={"bg-transparent text-black border border-black"}>See Product</Button>
               </div>
          </div>

          <div class="flex items-center flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-[0.6875rem] desktop:space-x-[1.875rem] mx-auto max-w-[43.0625rem] desktop:max-w-[69.375rem]">
               <div class="addThree bg-center bg-no-repeat bg-cover bg-dark-gray h-[12.5rem] sm:h-80 w-full rounded-lg"></div>
     
               <div class="flex items-center justify-center w-full bg-dark-gray h-[12.5rem] sm:h-80 px-7 rounded-lg text-center overflow-hidden">
                    <div>
                         <h4 class="font-bold text-[1.75rem] leading-[2.5rem] tracking-[0.080625rem] mb-6">YX1 EARPHONES</h4>
                         <Button href="earphones/#yx1-wireless-earphones" color={"bg-transparent text-black border border-black"}>See Product</Button>
                    </div>
               </div>
          </div>
     </section>

     <About />
</div>