<script>
     import { preferences } from "../../../stores/ecommerceStore";
     export let data;

     const addProductToCart = () => {
          preferences.update(currentData => {
               let copiedData = [...currentData];
               let updatedData = copiedData.find(data => data.title === "cart");
               updatedData.products = [...updatedData.products, {title: "hanging"}];
               
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

                         <button type="button" class="bg-blue-300" on:click={()=>{addProductToCart()}}>purchase</button>
                    {/if}
               {/each}
          {/if}
     {/each}
 </div>