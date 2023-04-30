<script>
     export let color = "bg-dark-orange text-white hover:bg-light-orange";
     export let href = "/";
</script>

<a href={href} class="flex justify-center items-center font-bold text-[0.8125rem] tracking-[0.0625rem] h-12 w-40 mt-8 {color}">
     <slot></slot>
</a>