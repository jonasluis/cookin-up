<script lang="ts">
import { obterCategorias } from '@/http';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';


export default{
  name: 'SelecionarIngredientes',
  components: { CardCategoria, BotaoPrincipal },
  data(){
    return{
      categorias: [] as ICategoria[]
    }
  },
  async created(){
      this.categorias = await obterCategorias();
  },
  emits: ['adicionarIngrediente', 'buscarReceitas']
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h2 class="titulo-ingredientes">Ingredientes</h2>
        <p class="paragrafo-lg instrucoes">Selecione os ingredientes que você deseja usar para fazer sua receita:</p>
        <ul class="categorias">
          <li v-for="categoria in categorias" :key="categoria.nome">
            <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"/>
     </li>
        </ul>

        <p class="paragrafo dica">
          *Atenção Consideramos que você tem em casa sal, pimenta e água.
        </p>

        <BotaoPrincipal texto="Buscar Receitas!" @click="$emit('buscarReceitas')"/>
    </section>
</template>


<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>