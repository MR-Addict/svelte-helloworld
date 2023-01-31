<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<svelte:head>
  <title>Contact • Svelte</title>
</svelte:head>

<main class="frame flex-1 flex justify-center relative">
  {#if form && form.message}
    <p class="absolute top-5 text-cyan-600">{form.message}</p>
  {/if}
  <section
    aria-label="contact form"
    class="w-full background shadow-md shadow-cyan-500 max-w-md flex flex-col gap-3 outline outline-1 outline-cyan-500 p-5 rounded-md h-fit md:mt-10"
  >
    <h1 class="text-xl text-center text-gray-300 font-bold">Contact Me</h1>
    <form class="flex flex-col gap-2 md:gap-3" method="POST">
      <section>
        <label for="firstname">First Name:</label>
        <input required type="text" id="firstname" name="firstname" placeholder="Fist name" />
      </section>
      <section>
        <label for="lastname">Last Name:</label>
        <input required type="text" id="lastname" name="lastname" placeholder="Last name" />
      </section>
      <section>
        <label for="email">Email:</label>
        <input required type="email" id="email" name="email" placeholder="Email" />
      </section>
      <section>
        <label for="message">Message:</label>
        <textarea required id="message" name="message" placeholder="Message" />
      </section>
      <button type="submit" class="background duration-300 outline outline-1 outline-cyan-500 mt-3 py-3 px-5 rounded-md"
        >Submit</button
      >
    </form>
  </section>
</main>

<style lang="css">
  /* for inputs */
  form section {
    @apply flex flex-col gap-1;
  }
  :is(input, textarea) {
    @apply p-2 bg-white rounded-sm text-black outline outline-1;
  }
  :is(input, textarea):valid {
    @apply outline-green-600;
  }
  :is(input, textarea):focus {
    @apply outline-blue-600;
  }
  /* for submit button */
  form:invalid button[type="submit"] {
    cursor: not-allowed;
  }
  form:valid button[type="submit"]:hover {
    box-shadow: 0 0 20px #0891b2;
  }
</style>
