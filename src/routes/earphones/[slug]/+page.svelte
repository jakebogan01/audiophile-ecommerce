<script>
     import About from "../../../components/About.svelte";
     import Categories from "../../../components/Categories.svelte";
     import Details from "../../../components/Details.svelte";
     import Similar from "../../../components/Similar.svelte";
     export let data;
</script>

<div>
     <div class="bg-white">
          <a href="/earphones" class="inline-block font-medium text-[0.9375rem] text-[#7D7D7D] ml-6 my-[1.625rem]">Go Back</a>
          
          <Details data={data} category="earphones" />

          <Similar data={data} />

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>