<script>
     import Button from "../components/shared/Button.svelte";
     import { preferences } from "../stores/ecommerceStore";
     export let data;
</script>

<section class="flex flex-col items-center px-6 my-24 text-center">
     <h2 class="font-bold text-2xl md:text-[2rem] tracking-[0.05375rem] mb-12">YOU MAY ALSO LIKE</h2>
     <div class="md:flex space-y-16 md:space-y-0 md:space-x-[0.6875rem] desktop:space-x-[1.875rem] max-w-[21.875rem] md:max-w-none w-full md:w-auto">
          {#each $preferences as product, i}
               {#if i >= 3 && product?.slug !== data}
                    <div class="md:w-[13.9375rem] desktop:w-[21.875rem] overflow-hidden">
                         <div class="flex justify-center items-center bg-dark-gray md:h-[19.875rem] rounded-lg overflow-hidden">
                              <img src={product?.image?.desktop} alt={product?.title} class="h-[7.5rem] md:h-auto desktop:h-[17rem] mx-auto">
                         </div>
                         
                         <div class="text-center">
                              <h1 class="max-w-[18.75rem] mx-auto font-bold text-[1.75rem] md:text-2xl tracking-[0.080625rem] leading-[2.5rem] mt-8 uppercase line-clamp-1">{product?.title}</h1>
                              <div class="flex justify-center">
                                   <Button href="/{product?.category}/{product?.slug}">See Product</Button>
                              </div>
                         </div>
                    </div>
               {/if}
          {/each}
     </div>
</section>