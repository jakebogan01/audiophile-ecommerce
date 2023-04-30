<script>
     import About from "../../components/About.svelte";
     import Categories from "../../components/Categories.svelte";
     import Category from "../../components/shared/Category.svelte";
     import Button from "../../components/shared/Button.svelte";
     import { preferences } from "../../stores/ecommerceStore";
</script>

<div>
     <Category>
          <h1>HEADPHONES</h1> 
     </Category>

     <div class="bg-white">
          <section class="px-6 space-y-24 pt-14 pb-16">
               {#each $preferences as product}
                    {#if product?.category === "headphones"}
                         <div class="space-y-10">
                              <div class="rounded-lg overflow-hidden">
                                   <img src={product?.image?.mobile} alt={product?.title}>
                              </div>
                              
                              <div class="text-center">
                                   {#if product?.new}                                   
                                        <h3 class="font-normal text-dark-orange text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
                                   {/if}
                                   <h1 class="font-bold text-[1.75rem] tracking-[0.080625rem] leading-[2.5rem] my-6 uppercase">{product?.title}</h1>
                                   <p class="max-w-[21.8125rem] mx-auto font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{product?.description}</p>
                                   <div class="flex justify-center desktop:justify-start">
                                        <Button href="/{product?.category}/{product?.slug}">See Product</Button>
                                   </div>
                              </div>
                         </div>
                    {/if}
               {/each}
          </section>

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>

<style>
     /* .aboutImage {
          background-image: url(/shared/mobile/image-best-gear.jpg);
     }
     @media (min-width: 768px) { 
          .aboutImage {
               background-image: url(/shared/tablet/image-best-gear.jpg);
          }
      } */
</style>