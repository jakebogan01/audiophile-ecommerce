<script>
     import Button from "../components/shared/Button.svelte";
     import { preferences } from "../stores/ecommerceStore";
     export let data;
</script>

<section class="px-6 my-24 text-center">
     <h2 class="font-bold text-2xl tracking-[0.05375rem] mb-6">YOU MAY ALSO LIKE</h2>
     <div class="space-y-16">
          {#each $preferences as product, i}
               {#if i >= 3 && product?.slug !== data}
                    <div class="max-w-[69.375rem] mx-auto">
                         <div class="flex-1 flex justify-center items-center bg-dark-gray desktop:min-w-[33.75rem] rounded-lg overflow-hidden">
                              <img src={product?.image?.desktop} alt={product?.title} class="h-[7.5rem] mx-auto">
                         </div>
                         
                         <div class="flex-1 text-center desktop:text-left">
                              <h1 class="max-w-[18.75rem] mx-auto desktop:ml-0 font-bold text-[1.75rem] md:text-[2.5rem] tracking-[0.080625rem] leading-[2.5rem] mt-8 uppercase">{product?.title}</h1>
                              <div class="flex justify-center desktop:justify-start">
                                   <Button href="/{product?.category}/{product?.slug}">See Product</Button>
                              </div>
                         </div>
                    </div>
               {/if}
          {/each}
     </div>
</section>