<!-- src/components/About.svelte -->
<script lang="ts">
  // Importamos la función para definir variables reactivas
  import { writable } from 'svelte/store';

  // Definimos una variable reactiva para el estado del botón
  const buttonText = writable('Haz clic aquí');

  // Función para cambiar el estado del botón
  const handleClick = () => {
    buttonText.update((text) => (text === 'Haz clic aquí' ? 'Gracias por hacer clic' : 'Haz clic aquí'));
  };
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl font-bold mb-4">Acerca de Nosotros</h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={handleClick}
  >
    {$buttonText}
  </button>
</div>
