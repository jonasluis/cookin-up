<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado
            this.$emit('adicionarIngrediente', this.ingrediente);
        }
    },
    emits: ['adicionarIngrediente']
}

</script>

<template>
    <button class="ingrediente" @click="aoClicar()">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>