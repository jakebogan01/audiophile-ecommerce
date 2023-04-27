<script>
     import { preferences } from "../../stores/ecommerceStore";
</script>

<div>
     {#each $preferences as product}
          {#if product?.type === "headphones"}
               <a href="/headphones/{product?.slug}" class="block">{product?.title}</a>
          {/if}
     {/each}
</div>
