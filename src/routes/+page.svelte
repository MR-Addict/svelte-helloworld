<script>
  import logo from "$data/images/logo.png";
  import share from "$data/images/share.svg";
</script>

<svelte:head>
  <title>Home • Svelte</title>
</svelte:head>

<main class="frame flex-1 flex items-center justify-center">
  <section class="rounded-md h-fit p-1">
    <div class="background rounded-md flex flex-col items-center gap-7 px-10 py-20">
      <img src={logo} alt="svelte logo" class="w-16 mx-auto" />
      <div class="text-center flex flex-col gap-2">
        <h1 class="text-3xl font-bold">SVELTE IS AWESOME</h1>
        <p>Everyone should learn svelte.</p>
      </div>
      <a
        href="https://kit.svelte.dev/"
        class="flex flex-row gap-2 items-center background duration-300 outline outline-1 outline-cyan-600 hover:shadow-[0_0_20px_#0891b2] text-white text-lg py-3 px-5 rounded-3xl"
      >
        <p>Get Started</p>
        <img src={share} alt="share icon" />
      </a>
    </div>
  </section>
</main>

<style>
  @property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }
  section {
    background: linear-gradient(var(--angle), #ff0033, #027494);
    animation: flow 10s linear infinite;
  }
  @keyframes flow {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }
</style>
