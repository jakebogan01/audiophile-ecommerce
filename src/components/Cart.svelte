<script>
     import { preferences } from "/src/stores/ecommerceStore";
     export let show = false;

     let products = [];
     let total = [];
     let result;
     let shipping = 50;
     let tax = 100;
     $: grandTotal = result + shipping + tax;

     const updateProducts = () => {
          products = $preferences.filter((product) => {
               return product.purchased === true;
          });
     }

     $: {
          updateProducts();

          products = [...products];

          total.splice(0, 2);

          products.map((item) => {
               let numberOfProducts = item.price * item.quantity;
               total.push(numberOfProducts);
          })
          
          total = [...total];

          result = total.reduce((a, b) => {
               return a + b;
          }, 0);

          products.map((item) => {
               if (item.quantity === 0) {
                    item.purchased = false;
                    updateProducts();
               }
          });
     }

     const updateQuantity = (id, add) => {
          preferences.update(currentData => {
               let copiedData = [...currentData];
               let updatedData = copiedData.find(product => product.id === id);

               if (add) {
                    updatedData.quantity += 1;
               } else {
                    if (!updatedData.quantity <= 0) {
                         updatedData.quantity -= 1;
                    }
               }

               return copiedData;
          });

          products = [...products];
     }
</script>

<!-- <div class="text-white">
     {#each products as product}
          <p>{product?.title}, <span>quantity: {product?.quantity}</span></p>
          <p>price: ${product?.price * product?.quantity}</p>
          <button type="button" on:click={()=>{updateQuantity(product?.id, true)}}>add</button>
          <button type="button" on:click={()=>{updateQuantity(product?.id, false)}}>remove</button>
     {/each}
     <br>
     <br>
     <p>all products {result}</p>
     <p>shipping {shipping}</p>
     <p>vat {tax}</p>
     <p>total {grandTotal}</p>
</div> -->

{#if show}
     <div class="relative z-50 font-manrope" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
               <div class="flex min-h-full items-start justify-center pt-[7.125rem] px-6 text-center sm:items-center sm:p-0" on:keydown={()=>{}} on:click|self>
                    <div class="relative transform overflow-hidden rounded-lg bg-white w-full px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                         
                         <div class="mx-auto max-w-2xl">
                              <div class="flex justify-between items-center">
                                   <h1 class="text-lg font-bold tracking-[0.080625rem]">CART (3)</h1>
                                   <button type="button" class="text-[0.9375rem] font-medium text-[#808080]">
                                        <span>Remove all</span>
                                   </button>
                              </div>

                              <form class="mt-4">
                                   <section aria-labelledby="cart-heading">
                                        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

                                        <ul role="list">
                                             {#each products as product}
                                                  <li class="flex items-center py-6">
                                                       <div class="flex-shrink-0">
                                                            <img src={product?.cart} alt="Front side of mint cotton t-shirt with wavey lines pattern." class="h-16 w-16 rounded-md object-cover object-center sm:h-32 sm:w-32">
                                                       </div>

                                                       <div class="ml-4 flex justify-between flex-1">
                                                            <div>
                                                                 <h4 class="text-[0.9375rem] font-bold">{product?.title.substring(0,10)}...</h4>
                                                                 <p class="mt-1 text-sm font-bold text-[#808080]">$ {(product?.price * product?.quantity).toLocaleString("en-US")}</p>
                                                            </div>
                                                            <div class="flex items-center bg-dark-gray text-[#B5B5B5] h-8 w-24 text-center mt-2">
                                                                 <button type="button" on:click={()=>{updateQuantity(product?.id, false)}} class="flex-1 flex justify-center items-center h-full">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" /></svg>                                                     
                                                                 </button>
                                                                 <span class="flex-1 text-[0.8125rem] text-black font-bold">{product?.quantity}</span>
                                                                 <button type="button" on:click={()=>{updateQuantity(product?.id, true)}} class="flex-1 flex justify-center items-center h-full">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>                                                     
                                                                 </button>
                                                            </div>
                                                       </div>
                                                  </li>
                                             {/each}
                                        </ul>
                                   </section>

                                   <section aria-labelledby="summary-heading" class="mt-2">
                                        <h2 id="summary-heading" class="sr-only">Order summary</h2>
                                        <div>
                                             <dl class="space-y-4">
                                                  <div class="flex items-center justify-between">
                                                       <dt class="text-[0.9375rem] font-medium text-[#808080]">Total</dt>
                                                       <dd class="ml-4 text-lg font-bold">$ {grandTotal.toLocaleString("en-US")}</dd>
                                                  </div>
                                             </dl>
                                        </div>

                                        <div class="mt-6">
                                             <a href="/checkout" class="flex justify-center items-center w-full bg-dark-orange px-4 h-12 text-[0.8125rem] font-bold text-white shadow-sm focus:outline-none">Checkout</a>
                                        </div>
                                   </section>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     </div>
{/if}