<script>
     import About from "../../../components/About.svelte";
     import Categories from "../../../components/Categories.svelte";
     import Details from "../../../components/Details.svelte";
     import Similar from "../../../components/Similar.svelte";
     export let data;
</script>

<div>
     <div class="bg-white">
          <div class="px-6">
               <div class="max-w-[43.0625rem] desktop:max-w-[69.375rem] mx-auto">
                    <a href="/headphones" class="inline-block font-medium text-[0.9375rem] text-[#7D7D7D] my-[1.625rem]">Go Back</a>
               </div>
          </div>

          <Details data={data} category="headphones" />

          <Similar data={data} />

          <Categories />

          <About topMargin="mt-6" />
     </div>
</div>