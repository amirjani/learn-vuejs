<template>
    
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
    {{ currentHashtag }}
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
        const filteredPost = computed(() => {
            console.log('store', store);
            if (store.state.currentHashtag) {
                return store.state.posts.filter(post => post.hashtags.includes(store.state.currentHashtag));
            }
            return store.state.posts
        });

        return {
            filteredPost,
        }
    }
}
</script>

<style>

</style>