<script>
  import { page } from "$app/stores";
  const links = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];
</script>

<nav class="frame flex felx-row items-center justify-between">
  <p class="font-bold text-xl">SvelteKit</p>
  <ul class="flex flex-row gap-3 text-lg">
    {#each links as link}
      <li><a href={link.href} class:active={$page.url.pathname === link.href}>{link.name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  a.active {
    @apply text-green-600;
  }
  a:hover {
    @apply text-green-600;
  }
</style>
