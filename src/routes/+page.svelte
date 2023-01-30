<script>
  import logo from "$data/images/logo.png";
  import share from "$data/images/share.svg";
  import welcome from "$data/images/welcome.png";
</script>

<svelte:head>
  <title>Home - Svelte</title>
</svelte:head>

<main class="frame flex-1 flex flex-row items-center justify-around">
  <section
    class="flex flex-col items-center gap-7 px-10 py-20 rounded-md shadow-md shadow-gray-500 background outline outline-1 outline-gray-500"
  >
    <img src={logo} alt="svelte logo" class="w-16 mx-auto" />
    <div class="w-full text-center">
      <h1 class="text-3xl font-bold">SVELTEKIT IS AWESOME</h1>
      <p>I Love to use sveltekit.</p>
    </div>
    <a
      href="https://kit.svelte.dev/"
      class="flex flex-row gap-2 items-center background duration-300 outline outline-1 outline-gray-500 hover:shadow-[0_0_20px_rgba(88,28,135)] text-white text-lg py-3 px-5 rounded-3xl"
    >
      <p>Get Started</p>
      <img src={share} alt="share icon" />
    </a>
  </section>
  <section class="hidden md:block">
    <img src={welcome} alt="sveltekit machine" class="w-full max-w-lg" />
  </section>
</main>
