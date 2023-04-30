<script>
     import About from "../../components/About.svelte";
     import Categories from "../../components/Categories.svelte";
     import Category from "../../components/shared/Category.svelte";
     import Products from "../../components/Products.svelte";
</script>

<div>
     <Category>
          <h1>SPEAKERS</h1>
     </Category>

     <div class="bg-white">
          <Products category="speakers" productOrderOne="desktop:flex-row" productOrderTwo="desktop:flex-row-reverse" />

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>
