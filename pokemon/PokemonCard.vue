<template>
    <div class="cards">
        <card  
            v-for="pokemon in pokemons" 
            :key="pokemon.id" 
            @click="click(pokemon)"
            :class="{ opace: selectedId && pokemon.id !== selectedId }"
        >
            <template v-slot:title>{{pokemon.name}} (#{{pokemon.id}})</template>
            <template v-slot:content>
                <img :src="pokemon.sprite" :alt="pokemon.name">
            </template>
            <template v-slot:description>
                <div v-for="type in pokemon.types" :key="type.id">
                    {{type.name}}
                </div>
            </template>
        </card>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    components: {
        Card,
    },
    props: {
        pokemons: {
            type: Array
        },
        selectedId: {
            type: Number
        }
    },
    methods: {
        click(pokemon) {
            this.$emit('pokemonClicked', pokemon);
        },
    },
}
</script>

<style>
.cards {
        display: flex;
    }

    .opace {
        opacity: 0.5;
    }

    .card:hover {
        opacity: 0.8;
    }

    img {
        width: 100%;
    }
</style>