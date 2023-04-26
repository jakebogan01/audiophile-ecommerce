<script>
     import { preferences } from "../../stores/ecommerceStore";
</script>

<div>
     {#each $preferences as product}
          {#if product?.title === "headphones"}
               {#each product?.products as item (item?.id)}
                    <a href="/headphones/{item?.slug}" class="block">{item?.title}</a>
               {/each}
          {/if}
     {/each}
</div>
