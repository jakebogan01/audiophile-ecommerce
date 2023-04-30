<script>
     import About from "../../components/About.svelte";
     import Categories from "../../components/Categories.svelte";
     import Category from "../../components/shared/Category.svelte";
     import Products from "../../components/Products.svelte";
</script>

<div>
     <Category>
          <h1>HEADPHONES</h1> 
     </Category>

     <div class="bg-white">
          <Products category="headphones" />

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>