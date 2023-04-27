<script>
     import { onMount } from 'svelte';
     import { preferences } from "/src/stores/ecommerceStore";

     let products = [];
     let total = [];
     let result;
     let shipping = 50;
     let tax = 100;
     let grandTotal;

     onMount(() => {
          products = $preferences.filter((product) => {
               return product.purchased === true;
          });

          products = [...products];
          // $preferences.find(data => data.title === "speakers").products.map(
          // (product) => {
          //      if (product.purchased) {
          //           products.push(product);
          //      }
          // });
          // $preferences.find(data => data.title === "earphones").products.map(
          // (product) => {
          //      if (product.purchased) {
          //           products.push(product);
          //      }
          // });

          // products = [...products];

          // products.map((item) => {
          //      let numberOfProducts = item.price * item.quantity;
          //      total.push(numberOfProducts);
          // })
          
          // total = [...total];

          // result = total.reduce((a, b) => {
          //      return a + b;
          // }, 0);

          // grandTotal = result + shipping + tax;
     })

     const updateQuantity = (id, type, add) => {
          preferences.update(currentData => {
               let copiedData = [...currentData];
               let updatedData = copiedData.find(data => data.title === type);
               let productData = updatedData.products.find(product => product.id === id);

               if (add) {
                    productData.quantity += 1;
               } else {
                    if (!productData.quantity <= 0) {
                         productData.quantity -= 1;
                    }
               }

               return copiedData;
          });

          products = [...products];
     }
</script>

<h1>Cart</h1>
<br>
<div>
     {#each products as product}
          <p>{product?.title}, <span>quantity: {product?.quantity}</span></p>
          <p>price: ${product?.price * product?.quantity}</p>
     {/each}
</div>
<div>
     <!-- {#each products as item}
          <p>{item?.title} <span>{item?.quantity}</span></p>
          <p>{item?.price * item?.quantity}</p>
          <button type="button" on:click={()=>{updateQuantity(item?.id, item?.type, true)}}>add</button>
          <button type="button" on:click={()=>{updateQuantity(item?.id, item?.type, false)}}>remove</button>
     {/each}
     <br>
     <p>all products {result}</p>
     <p>shipping {shipping}</p>
     <p>vat {tax}</p>
     <p>total {grandTotal}</p> -->
</div>
