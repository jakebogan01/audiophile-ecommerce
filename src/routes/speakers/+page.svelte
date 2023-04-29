<script>
     import { preferences } from "../../stores/ecommerceStore";
</script>

<div>
     {#each $preferences as product}
          {#if product?.category === "speakers"}
               <a href="/speakers/{product?.slug}" class="block">{product?.title}</a>
          {/if}
     {/each}
</div>
