<template>
    <input type="text" :value="currentHashtag" @input="setHashtag" />
    <card v-for="post in filteredPost" :key="post.id">
        <template v-slot:title>
            {{post.title}}
        </template>

        <template v-slot:content>
            {{ post.content }}
        </template>
        
        <template v-slot:description> 
            <control :post="post" />
        </template>
    </card>
</template>

<script>
import { computed } from 'vue';
import { store } from './store'
import Control from './Control.vue'
import Card from '../pokemon/Card.vue'

export default {
    components: {
        Control,
        Card
    },
    setup() {
        const setHashtag = (event) => {
            store.setHashtag(event.target.value);
        }

        return {
            filteredPost: store.filteredPosts,
            setHashtag,
            currentHashtag: computed(() => store.state.currentHashtag) 
        }
    }
}
</script>

<style>

</style>