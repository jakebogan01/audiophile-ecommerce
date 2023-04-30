<script>
     import Button from "./shared/Button.svelte";
     import { preferences } from "../stores/ecommerceStore";

     export let category = "headphones"
     export let productOrderOne = "desktop:flex-row-reverse";
     export let productOrderTwo = "desktop:flex-row";
</script>

<section class="px-6 space-y-24 pt-14 pb-16">
     {#each $preferences as product, i}
          {#if product?.category === category}
               <div id={product?.slug} class="{(i % 2) ? productOrderOne : productOrderTwo} flex flex-col desktop:items-center space-y-10 desktop:space-y-0 desktop:space-x-[7.8125rem] max-w-[69.375rem] mx-auto">
                    <div class="flex-1 flex justify-center items-center bg-dark-gray desktop:min-w-[33.75rem] rounded-lg overflow-hidden">
                         <img src={product?.image?.desktop} alt={product?.title} class="h-[22rem] desktop:h-[35rem] mx-auto">
                    </div>
                    
                    <div class="flex-1 text-center desktop:text-left">
                         {#if product?.new}                                   
                              <h3 class="font-normal text-dark-orange text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
                         {/if}
                         <h1 class="max-w-[18.75rem] mx-auto desktop:ml-0 font-bold text-[1.75rem] md:text-[2.5rem] tracking-[0.080625rem] leading-[2.5rem] my-6 uppercase">{product?.title}</h1>
                         <p class="max-w-[21.8125rem] mx-auto desktop:ml-0 font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{product?.description}</p>
                         <div class="flex justify-center desktop:justify-start">
                              <Button href="/{product?.category}/{product?.slug}">See Product</Button>
                         </div>
                    </div>
               </div>
          {/if}
     {/each}
</section>