<script>
     import { preferences } from "../stores/ecommerceStore";
     export let data;
     export let category;

     let numberOfProducts = 1;

     const addProductToCart = (id) => {
          preferences.update(currentData => {
               let copiedData = [...currentData];
               let updatedData = copiedData.find(product => product.id === id);

               if (numberOfProducts >= 1) {
                    updatedData.purchased = true;
                    updatedData.quantity = numberOfProducts;
               }

               return copiedData;
          });
     }

     const update = (add) => {
          if (add) {
               numberOfProducts++;
          } else {
               if (!numberOfProducts <= 1 && numberOfProducts !== 1) {
                    numberOfProducts--;
               }
          }
     }
</script>

<section class="px-6">
     {#each $preferences as product}
          {#if product?.category === category && product?.slug === data?.slug}
               <div class="space-y-10 desktop:space-y-0 desktop:space-x-[7.8125rem] max-w-[69.375rem] mx-auto">
                    <div class="flex justify-center items-center bg-dark-gray desktop:min-w-[33.75rem] rounded-lg overflow-hidden">
                         <img src={product?.image?.desktop} alt={product?.title} class="h-[22rem] desktop:h-[35rem] mx-auto">
                    </div>
                    
                    <div>
                         {#if product?.new}                                   
                              <h3 class="font-normal text-dark-orange text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
                         {/if}

                         <h1 class="max-w-[18.75rem] desktop:ml-0 font-bold text-[1.75rem] md:text-[2.5rem] tracking-[0.080625rem] leading-[2.5rem] my-6 uppercase">{product?.title}</h1>
                         <p class="max-w-[21.8125rem] mx-auto desktop:ml-0 font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{product?.description}</p>
                         <span class="block font-bold text-lg tracking-[0.080625rem] mt-8">${product?.price.toLocaleString("en-US")}</span>
                         
                         <div class="flex space-x-3 items-center">
                              <div class="flex items-center bg-dark-gray text-[#B5B5B5] h-12 w-[7.5rem] text-center mt-8">
                                   <button type="button" on:click={()=>{update(false)}} class="flex-1 flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" /></svg>                                                     
                                   </button>
                                   <span class="flex-1 text-[0.8125rem] font-bold">{numberOfProducts}</span>
                                   <button type="button" on:click={()=>{update(true)}} class="flex-1 flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>                                                     
                                   </button>
                              </div>

                              <button type="button" on:click={()=>{addProductToCart(product?.id)}} class="flex justify-center items-center font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mt-8 bg-dark-orange text-white">ADD TO CART</button>
                         </div>

                         <div class="mt-20">
                              <h2 class="font-bold text-2xl tracking-[0.05375rem] mb-6">FEATURES</h2>
                              <p class="font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{@html product?.features}</p>
                         </div>

                         <div class="mt-24">
                              <h3 class="font-bold text-2xl tracking-[0.05375rem] mb-6">IN THE BOX</h3>
                              <ul class="space-y-2">
                                   {#each product?.includes as item}   
                                        <li class="text-[0.9375rem] text-[#7D7D7D] font-medium whitespace-nowrap">
                                             <span class="text-dark-orange font-bold mr-4">{item.quantity}x</span> {item.item}
                                        </li>
                                   {/each}
                              </ul>
                         </div>

                         <div class="mt-24 space-y-5">
                              <div class="galleryOne bg-center bg-no-repeat bg-cover h-[10.875rem] rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.first?.desktop});"></div>
                              <div class="galleryOne bg-center bg-no-repeat bg-cover h-[10.875rem] rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.second?.desktop});"></div>
                              <div class="galleryOne bg-center bg-no-repeat bg-cover h-[23rem] rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.third?.desktop});"></div>
                         </div>
                    </div>
               </div>
          {/if}
     {/each}
</section>