<script>
     import { onMount, afterUpdate } from 'svelte';
     import { preferences } from "/src/stores/ecommerceStore";

     let products = [];
     let total = [];
     let result;
     let shipping = 50;
     let tax = 100;
     let grandTotal;

     const updateProducts = () => {
          products = $preferences.filter((product) => {
               return product.purchased === true;
          });
     }

     onMount(() => {
          updateProducts();

          products = [...products];

          products.map((item) => {
               let numberOfProducts = item.price * item.quantity;
               total.push(numberOfProducts);
          })
          
          total = [...total];

          result = total.reduce((a, b) => {
               return a + b;
          }, 0);

          grandTotal = result + shipping + tax;
     })

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

	afterUpdate(() => {
		products.map((test) => {
               if (test.quantity === 0) {
                    test.purchased = false;
                    updateProducts();
               }
          });
	});
</script>

<h1>Cart</h1>
<br>
<div>
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
     <br>
     <br>
     <a href="/">home</a>
</div>