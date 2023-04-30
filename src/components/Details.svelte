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

          numberOfProducts = 1;
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
     <div class="max-w-[43.0625rem] desktop:max-w-[69.375rem] mx-auto">
          {#each $preferences as product}
               {#if product?.category === category && product?.slug === data?.slug}
                    <div class="flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0 md:space-x-[3.6rem] desktop:space-x-[7.8125rem] max-w-[69.375rem] mx-auto">
                         <div class="desktop:flex-1 flex justify-center items-center bg-dark-gray md:max-w-[17.5625rem] md:h-[30rem] desktop:h-[35rem] desktop:min-w-[33.75rem] rounded-lg overflow-hidden">
                              <img src={product?.image?.desktop} alt={product?.title} class="h-[20.4375rem] md:h-auto mx-auto">
                         </div>
     
                         <div>
                              {#if product?.new}                                   
                                   <h3 class="font-normal text-dark-orange text-sm md:text-xs desktop:text-sm tracking-[0.625rem]">NEW PRODUCT</h3>
                              {/if}
     
                              <h1 class="max-w-[18.75rem] md:max-w-[27.8125rem] desktop:ml-0 font-bold text-[1.75rem] desktop:text-[2.5rem] tracking-[0.080625rem] leading-[2.5rem] md:leading-[2rem] desktop:leading-[2.75rem] my-6 uppercase">{product?.title}</h1>
                              <p class="max-w-[21.8125rem] md:max-w-[27.8125rem] desktop:ml-0 font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{product?.description}</p>
                              <span class="block font-bold text-lg tracking-[0.080625rem] mt-8">$ {product?.price.toLocaleString("en-US")}</span>
                              
                              <div class="flex space-x-3 items-center">
                                   <div class="flex items-center bg-dark-gray text-[#B5B5B5] h-12 w-[7.5rem] text-center mt-8">
                                        <button type="button" on:click={()=>{update(false)}} class="flex-1 flex justify-center hover:text-dark-orange items-center h-full">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" /></svg>                                                     
                                        </button>
                                        <span class="flex-1 text-[0.8125rem] font-bold">{numberOfProducts}</span>
                                        <button type="button" on:click={()=>{update(true)}} class="flex-1 flex justify-center hover:text-dark-orange items-center h-full">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>                                                     
                                        </button>
                                   </div>
     
                                   <button type="button" on:click={()=>{addProductToCart(product?.id)}} class="flex justify-center items-center font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mt-8 bg-dark-orange hover:bg-light-orange text-white">ADD TO CART</button>
                              </div>
                         </div>
                    </div>
     
                    <div class="desktop:flex desktop:items-center">
                         <div class="mt-20 desktop:max-w-[39.6875rem]">
                              <h2 class="font-bold text-2xl md:text-[2rem] tracking-[0.05375rem] mb-6">FEATURES</h2>
                              <p class="font-medium text-[0.9375rem] text-[#7D7D7D] leading-[1.5625rem]">{@html product?.features}</p>
                         </div>
          
                         <div class="flex flex-col md:flex-row desktop:flex-col mt-24 desktop:mt-0 desktop:mx-auto">
                              <h3 class="font-bold text-2xl md:text-[2rem] tracking-[0.05375rem] mb-6">IN THE BOX</h3>
                              <ul class="space-y-2 md:ml-48 desktop:ml-0">
                                   {#each product?.includes as item}   
                                        <li class="text-[0.9375rem] text-[#7D7D7D] font-medium whitespace-nowrap">
                                             <span class="text-dark-orange font-bold mr-4">{item.quantity}x</span> {item.item}
                                        </li>
                                   {/each}
                              </ul>
                         </div>
                    </div>
     
                    <div class="flex flex-col md:flex-row mt-24 space-y-5 md:space-y-0 md:space-x-[1.125rem] desktop:space-x-[1.875rem] max-w-[43.0625rem] desktop:max-w-[69.375rem] mx-auto">
                         <div class="flex-1 flex flex-col justify-between space-y-5 md:space-y-0">
                              <div class="galleryOne bg-center bg-no-repeat bg-cover h-[10.875rem] md:h-[10.875rem] desktop:h-[17.5rem] w-full rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.first?.desktop});"></div>
                              <div class="galleryOne bg-center bg-no-repeat bg-cover h-[10.875rem] md:h-[10.875rem] desktop:h-[17.5rem] w-full rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.second?.desktop});"></div>
                         </div>
                         <div class="galleryOne flex-1 bg-center bg-no-repeat bg-cover min-h-[23rem] desktop:h-[37rem] rounded-lg overflow-hidden" style="background-image: url({product?.gallery?.third?.desktop});"></div>
                    </div>
               {/if}
          {/each}
     </div>
</section>