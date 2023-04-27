<script>
     import { onMount } from 'svelte';
     import { preferences } from "/src/stores/ecommerceStore";

     let products = [];

     onMount(() => {
          $preferences.find(data => data.title === "headphones").products.map(
          (product) => {
               if (product.purchased) {
                    products.push(product);
               }
          });
          $preferences.find(data => data.title === "speakers").products.map(
          (product) => {
               if (product.purchased) {
                    products.push(product);
               }
          });
          $preferences.find(data => data.title === "earphones").products.map(
          (product) => {
               if (product.purchased) {
                    products.push(product);
               }
          });

          products = [...products];
     })

</script>

<h1>Cart</h1>
<br>
<div>
     {#each products as item}
          <p>{item?.title}</p>
          <p>{item?.price}</p>
     {/each}
</div>
