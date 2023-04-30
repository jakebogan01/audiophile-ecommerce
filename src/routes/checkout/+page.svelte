<script>
     import { onMount, afterUpdate } from 'svelte';
     import { preferences } from "/src/stores/ecommerceStore";

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

     onMount(() => {
          updateProducts();
     })

     afterUpdate(() => {
          updateProducts();
     })

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
</script>

<div>
     <div class="bg-white font-manrope">
          <div class="px-6">
               <div class="max-w-[43.0625rem] desktop:max-w-[69.375rem] mx-auto">
                    <a href="/" class="inline-block font-medium text-[0.9375rem] text-[#7D7D7D] hover:text-dark-orange my-[1.625rem]">Go Home</a>
               </div>
          </div>

          <section>
               <div class="bg-gray-50">
                    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-[69.375rem] lg:px-0">
                         <h1 class="font-bold text-[2rem] tracking-[0.07125rem] mb-16">CHECKOUT</h1>
                         <h2 class="sr-only">Checkout</h2>

                         <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                              <div>
                                   <div>
                                        <h2 class="text-lg font-medium text-dark-orange">Contact information</h2>

                                        <div class="mt-4">
                                             <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                             <div class="mt-1">
                                                  <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                             </div>
                                        </div>
                                   </div>

                                   <div class="mt-10 border-t border-gray-200 pt-10">
                                        <h2 class="text-lg font-medium text-dark-orange">Shipping information</h2>

                                        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                             <div>
                                                  <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                                  <div class="mt-1">
                                                       <input type="text" id="first-name" name="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div>
                                                  <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                                  <div class="mt-1">
                                                       <input type="text" id="last-name" name="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div class="sm:col-span-2">
                                                  <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                                                  <div class="mt-1">
                                                       <input type="text" name="company" id="company" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div class="sm:col-span-2">
                                                  <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                                                  <div class="mt-1">
                                                       <input type="text" name="address" id="address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div class="sm:col-span-2">
                                                  <label for="apartment" class="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
                                                  <div class="mt-1">
                                                       <input type="text" name="apartment" id="apartment" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div>
                                                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                                  <div class="mt-1">
                                                       <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                  </div>
                                             </div>

                                             <div>
                                                  <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                                                  <div class="mt-1">
                                                       <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                       </select>
                                                  </div>
                                             </div>

                                             <div>
                                                  <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                              <div class="mt-1">
                              <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>

                              <div>
                              <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
                              <div class="mt-1">
                              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>

                              <div class="sm:col-span-2">
                              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                              <div class="mt-1">
                              <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>
                              </div>
                              </div>

                              <div class="mt-10 border-t border-gray-200 pt-10">
                              <fieldset>
                              <legend class="text-lg font-medium text-dark-orange">Delivery method</legend>

                              <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                              <!--
                              Checked: "border-transparent", Not Checked: "border-gray-300"
                              Active: "ring-2 ring-indigo-500"
                              -->
                              <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                              <input type="radio" name="delivery-method" value="Standard" class="sr-only" aria-labelledby="delivery-method-0-label" aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1">
                              <span class="flex flex-1">
                              <span class="flex flex-col">
                              <span id="delivery-method-0-label" class="block text-sm font-medium text-gray-900">Standard</span>
                              <span id="delivery-method-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">4–10 business days</span>
                              <span id="delivery-method-0-description-1" class="mt-6 text-sm font-medium text-gray-900">$5.00</span>
                              </span>
                              </span>
                              <!-- Not Checked: "hidden" -->
                              <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                              </svg>
                              <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                              -->
                              <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
                              </label>
                              <!--
                              Checked: "border-transparent", Not Checked: "border-gray-300"
                              Active: "ring-2 ring-indigo-500"
                              -->
                              <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                              <input type="radio" name="delivery-method" value="Express" class="sr-only" aria-labelledby="delivery-method-1-label" aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1">
                              <span class="flex flex-1">
                              <span class="flex flex-col">
                              <span id="delivery-method-1-label" class="block text-sm font-medium text-gray-900">Express</span>
                              <span id="delivery-method-1-description-0" class="mt-1 flex items-center text-sm text-gray-500">2–5 business days</span>
                              <span id="delivery-method-1-description-1" class="mt-6 text-sm font-medium text-gray-900">$16.00</span>
                              </span>
                              </span>
                              <!-- Not Checked: "hidden" -->
                              <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                              </svg>
                              <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                              -->
                              <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
                              </label>
                              </div>
                              </fieldset>
                              </div>

                              <!-- Payment -->
                              <div class="mt-10 border-t border-gray-200 pt-10">
                              <h2 class="text-lg font-medium text-dark-orange">Payment</h2>

                              <fieldset class="mt-4">
                              <legend class="sr-only">Payment type</legend>
                              <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div class="flex items-center">
                              <input id="credit-card" name="payment-type" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                              <label for="credit-card" class="ml-3 block text-sm font-medium text-gray-700">Credit card</label>
                              </div>
                              <div class="flex items-center">
                              <input id="paypal" name="payment-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                              <label for="paypal" class="ml-3 block text-sm font-medium text-gray-700">PayPal</label>
                              </div>
                              <div class="flex items-center">
                              <input id="etransfer" name="payment-type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                              <label for="etransfer" class="ml-3 block text-sm font-medium text-gray-700">eTransfer</label>
                              </div>
                              </div>
                              </fieldset>

                              <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                              <div class="col-span-4">
                              <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                              <div class="mt-1">
                              <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>

                              <div class="col-span-4">
                              <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on card</label>
                              <div class="mt-1">
                              <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>

                              <div class="col-span-3">
                              <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                              <div class="mt-1">
                              <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>

                              <div>
                              <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                              <div class="mt-1">
                              <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>

                              <!-- Order summary -->
                              <div class="mt-10 lg:mt-0">
                                   <h2 class="text-lg font-medium text-dark-orange">Order summary</h2>

                                   <div class="mx-auto max-w-2xl mt-4">
                                        <div class="mt-4">
                                             <section aria-labelledby="cart-heading">
                                                  <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
          
                                                  <ul role="list">
                                                       {#each products as product}
                                                            <li class="flex items-center py-6">
                                                                 <div class="flex-shrink-0">
                                                                      <img src={product?.cart} alt="Front side of mint cotton t-shirt with wavey lines pattern." class="h-16 w-16 rounded-md object-cover object-center">
                                                                 </div>
          
                                                                 <div class="ml-4 flex justify-between flex-1">
                                                                      <div>
                                                                           <h4 class="text-[0.9375rem] font-bold md:hidden">{product?.title.substring(0,10)}...</h4>
                                                                           <h4 class="text-[0.9375rem] font-bold hidden md:inline">{product?.title}</h4>
                                                                           <p class="mt-1 text-sm font-bold text-[#808080]">$ {(product?.price * product?.quantity).toLocaleString("en-US")}</p>
                                                                      </div>
                                                                      <div class="text-[#808080] text-center mt-2">
                                                                           <span class="text-[0.9375rem] font-bold">x{product?.quantity}</span>
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
                                                                 <dt class="text-[0.9375rem] font-medium text-[#808080]">TOTAL</dt>
                                                                 <dd class="ml-4 text-lg font-bold">$ {result.toLocaleString("en-US")}</dd>
                                                            </div>
                                                            <div class="flex items-center justify-between">
                                                                 <dt class="text-[0.9375rem] font-medium text-[#808080]">SHIPPING</dt>
                                                                 <dd class="ml-4 text-lg font-bold">$ {(result == 0) ? 0 : shipping.toLocaleString("en-US")}</dd>
                                                            </div>
                                                            <div class="flex items-center justify-between">
                                                                 <dt class="text-[0.9375rem] font-medium text-[#808080]">VAT (INCLUDED)</dt>
                                                                 <dd class="ml-4 text-lg font-bold">$ {(result == 0) ? 0 : tax.toLocaleString("en-US")}</dd>
                                                            </div>
                                                            <div class="flex items-center justify-between pt-4">
                                                                 <dt class="text-[0.9375rem] font-medium text-[#808080]">GRAND TOTAL</dt>
                                                                 <dd class="ml-4 text-lg font-bold text-dark-orange">$ {(result == 0) ? 0 : grandTotal.toLocaleString("en-US")}</dd>
                                                            </div>
                                                       </dl>
                                                  </div>
          
                                                  <div class="mt-6">
                                                       <a href="/checkout" on:click|self class="flex justify-center items-center w-full bg-dark-orange hover:bg-light-orange px-4 h-12 text-[0.8125rem] font-bold text-white shadow-sm focus:outline-none">CONTINUE & PAY</a>
                                                  </div>
                                             </section>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     </div>
</div>