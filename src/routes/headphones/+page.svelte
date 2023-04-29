<script>
     import About from "../../components/About.svelte";
     import Categories from "../../components/Categories.svelte";
     import Category from "../../components/shared/Category.svelte";
     import { preferences } from "../../stores/ecommerceStore";
</script>

<div>
     <Category>
          <h1>HEADPHONES</h1> 
     </Category>

     <div class="bg-white">
          {#each $preferences as product}
               {#if product?.category === "headphones"}
                    <a href="/headphones/{product?.slug}" class="block">{product?.title}</a>
               {/if}
          {/each}

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>
