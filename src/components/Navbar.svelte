<script lang="ts">
  import { links } from "./config";
  import { page } from "$app/stores";

  import github from "$data/images/github.svg";
</script>

<nav class="frame flex felx-row items-center justify-between">
  <a href="/" class="font-bold text-xl">SvelteKit</a>
  <section aria-label="navbar links" class="flex flex-row items-center gap-3 md:gap-5">
    <ul class="flex flex-row gap-3 text-lg">
      {#each links as link}
        <li><a href={link.href} class:active={$page.url.pathname === link.href}>{link.name}</a></li>
      {/each}
    </ul>
    <a aria-label="github link" href="https://github.com/MR-Addict/svelte-helloworld"
      ><img src={github} alt="github logo" /></a
    >
  </section>
</nav>

<style lang="css">
  li a.active {
    @apply text-cyan-600;
  }
  li a:hover {
    @apply text-cyan-600;
  }
</style>
