<template>
    <card v-for="post in store.state.posts" :key="post.id">
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
import { store } from './store'
import Control from './Control.vue'
import Card from '../pokemon/Card.vue'

export default {
    components: {
        Control,
        Card
    },
    setup() {
        return {
            store
        }
    }
}
</script>

<style>

</style>