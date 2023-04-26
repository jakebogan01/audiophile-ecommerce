<script>
     import Cart from "../../../components/Cart.svelte";
     import db from "../../../stores/ecommerceStore";
     export let data;

     const addProductToCart = () => {
          //add item to cart
     }
 </script>
 
 <h1>{data?.slug}</h1>
 <br>
 <div>
     {#each $db as product}
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
 <!-- <Cart /> -->