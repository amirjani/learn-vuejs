<template>
    <pokemon-card 
        :pokemons="starters" 
        :selectedId="selectedId"
        @pokemonClicked="fetchEvolutions"
    />

    <pokemon-card 
        :pokemons="evolutions" 
    />
</template>

<script>
import Card from './Card.vue'
import PokemonCard from './PokemonCard.vue'

const api = 'https://pokeapi.co/api/v2/pokemon';
const starterIds = [1, 4, 7]
export default {
    components: {
        Card,
        PokemonCard
    },
    data() {
        return {
            starters: [],
            evolutions: [],
            selectedId: null
        }
    },
    created: async function() {
        const starters = await this.fetchData(starterIds);
        this.starters = starters; 
    },
    methods: {
        async fetchData(ids) {
            const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)));
            const data = await Promise.all(responses.map(response => response.json()));
            return data.map(datum => {
                return {    
                    id: datum.id,
                    name: datum.name,
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => {
                        return {
                            name: type.type.name
                        }
                    })
                }
            })
        },
        async fetchEvolutions(pokemon) {
            this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
            this.selectedId = pokemon.id;
        }
    }
}
</script>

<style scoped>
</style>