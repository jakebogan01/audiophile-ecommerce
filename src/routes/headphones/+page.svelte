<script>
     import db from "../../stores/ecommerceStore";
</script>

<div>
     {#each $db as product}
          {#if product?.title === "headphones"}
               {#each product?.products as item (item?.id)}
                    <a href="/headphones/{item?.slug}" class="block">{item?.title}</a>
               {/each}
          {/if}
     {/each}
</div>
