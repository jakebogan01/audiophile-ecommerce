<script>
     import { preferences } from "../../../stores/ecommerceStore";
     export let data;

     const addProductToCart = (id) => {
          preferences.update(currentData => {
               let copiedData = [...currentData];
               let updatedData = copiedData.find(data => data.title === "headphones");
               let productData = updatedData.products.find(product => product.id === id);
               
               productData.purchased = true;
               productData.quantity = 1;

               return copiedData;
          });
     }
 </script>
 
 <h1>{data?.slug}</h1>
 <br>
 <div>
     {#each $preferences as product}
          {#if product?.title === "headphones"}
               {#each product?.products as item (item?.id)}
                    {#if item?.slug === data?.slug}
                         <p>{item?.title}</p>

                         <button type="button" class="bg-blue-300" on:click={()=>{addProductToCart(item?.id)}}>purchase</button>
                    {/if}
               {/each}
          {/if}
     {/each}
 </div>