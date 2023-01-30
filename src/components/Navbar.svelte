<script lang="ts">
  import { links } from "./config";
  import { page } from "$app/stores";

  import github from "$data/images/github.svg";
</script>

<nav class="frame flex felx-row items-center justify-between">
  <header class="font-bold text-xl">SvelteKit</header>
  <section aria-label="navbar links" class="flex flex-row items-center gap-3">
    <ul class="flex flex-row gap-3 text-lg">
      {#each links as link}
        <li><a href={link.href} class:active={$page.url.pathname === link.href}>{link.name}</a></li>
      {/each}
    </ul>
    <a aria-label="github link" href="https://github.com"><img src={github} alt="github logo" /></a>
  </section>
</nav>

<style lang="css">
  a.active {
    @apply text-purple-600;
  }
  a:hover {
    @apply text-purple-600;
  }
</style>
