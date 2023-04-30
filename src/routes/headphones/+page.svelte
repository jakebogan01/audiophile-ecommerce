<script>
     import About from "../../components/About.svelte";
     import Categories from "../../components/Categories.svelte";
     import Category from "../../components/shared/Category.svelte";
     import Headphones from "../../components/Headphones.svelte";
</script>

<div>
     <Category>
          <h1>HEADPHONES</h1> 
     </Category>

     <div class="bg-white">
          <Headphones category="headphones" />

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>