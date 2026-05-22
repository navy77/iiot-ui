<script lang="ts">
  import LoginForm from "$lib/components/login-form.svelte";


  let { form } = $props(); // รับค่าจาก action
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
  <!-- {#if form?.error}
    
    {/if} -->
  <LoginForm />

</div>


