<script>
     import { preferences } from "../../../stores/ecommerceStore";
     export let data;

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
 
<h1>{data?.slug}</h1>
<br>
<div>
     {#each $preferences as product}
          {#if product?.category === "headphones" && product?.slug === data?.slug}
               <p>{product?.title}</p>
               <p>{product?.price}</p>

               <button type="button" class="bg-blue-300" on:click={()=>{addProductToCart(product?.id)}}>purchase</button>

               <br>

               <span>{numberOfProducts}</span>
               <button type="button" class="bg-blue-300" on:click={()=>{update(true)}}>add</button>
               <button type="button" class="bg-blue-300" on:click={()=>{update(false)}}>remove</button>
          {/if}
     {/each}
</div>
<a href="/checkout">checkout</a>