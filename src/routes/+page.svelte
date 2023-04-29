<script>
     import About from "../components/About.svelte";
     import Categories from "../components/Categories.svelte";
     import Button from "../components/shared/Button.svelte";
</script>

<div class="bg-white">
     <header class="bg-bottom bg-no-repeat bg-cover text-center pt-[6.875rem] pb-[7rem] md:pb-44 px-[3.25rem]">
          <h3 class="font-normal text-[#8C8C8C] text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
          <h1 class="font-bold text-white text-4xl md:text-[3.5rem] tracking-[0.080625rem] leading-[2.5rem] md:leading-[3.625rem] mt-4">XX99 Mark II<br>HeadphoneS</h1>
          <p class="max-w-[21.8125rem] mx-auto font-medium text-[0.9375rem] text-[#C6C6C6] leading-[1.5625rem] mt-8">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button>See Product</Button>
     </header>

     <Categories />
     
     <section class="px-6 space-y-6">
          <div class="relative flex items-end bg-dark-orange h-[37.5rem] px-7 pb-14 rounded-lg text-center overflow-hidden">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-32 w-[558px] h-[558px]">
                    <img src="/home/desktop/pattern-circles.svg" alt="" role="presentation" class="absolute top-0">
               </div>
               <img src="/home/mobile/image-speaker-zx9.png" alt="" role="presentation" class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-10 h-[12.9375rem]">
               <div>
                    <h4 class="text-white font-bold text-4xl leading-[2.5rem] tracking-[0.080625rem] mb-6">ZX9<br>SPEAKER</h4>
                    <p class="text-[#F5DED2] font-medium text-[0.9375rem] leading-[1.5625rem] mb-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <a href="/" class="flex justify-center items-center bg-black text-white font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mx-auto">
                         See Product
                    </a>
               </div>
          </div>

          <div class="addTwo bg-center bg-no-repeat bg-cover flex items-center bg-dark-gray h-[20rem] px-7 rounded-lg text-center overflow-hidden">
               <div>
                    <h4 class="font-bold text-[1.75rem] leading-[2.5rem] tracking-[0.080625rem] mb-6">ZX7 SPEAKER</h4>
                    <a href="/" class="flex justify-center items-center bg-transparent text-black border border-black font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mx-auto">
                         See Product
                    </a>
               </div>
          </div>

          <div class="addThree bg-center bg-no-repeat bg-cover bg-dark-gray h-[12.5rem] rounded-lg"></div>

          <div class="flex items-center justify-center bg-dark-gray h-[12.5rem] px-7 rounded-lg text-center overflow-hidden">
               <div>
                    <h4 class="font-bold text-[1.75rem] leading-[2.5rem] tracking-[0.080625rem] mb-6">ZX7 SPEAKER</h4>
                    <a href="/" class="flex justify-center items-center bg-transparent text-black border border-black font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mx-auto">
                         See Product
                    </a>
               </div>
          </div>
     </section>

     <About />
</div>

<style>
     header {
          background-image: url(/home/mobile/image-header.jpg);
     }
     .addTwo {
          background-image: url(/home/mobile/image-speaker-zx7.jpg);
     }
     .addThree {
          background-image: url(/home/mobile/image-earphones-yx1.jpg);
     }
     @media (min-width: 768px) { 
          header {
               background-image: url(/home/tablet/image-header.jpg);
          }
      }
</style>