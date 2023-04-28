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
</div>

<style>
     header {
          background-image: url(/home/mobile/image-header.jpg);
     }
</style>