<template>
<div class="cards">
    <div class="card" v-for="starter in starters" :key="starter.id">
        <div class="title">{{ starter.name }}</div>
        <div class="content">
            <img :src="starter.sprite" alt="">
        </div>
        <div class="description" v-for="type in starter.types" :key="type.id" >{{type.name}}</div>
    </div>
</div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon';
const ids = [1, 4, 7]
export default {
    data() {
        return {
            starters: []
        }
    },
    created: function() {
       this.fetchData();
    },
    methods: {
        async fetchData() {
            const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)));
            const data = await Promise.all(responses.map(response => response.json()));
            this.starters = data.map(datum => {
                return {    
                    name: datum.name,
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => {
                        return {
                            name: type.type.name
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
.cards {
    display: flex;
}

.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

img {
    width: 100%;
}

.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>