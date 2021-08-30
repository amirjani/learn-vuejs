<template>
    <div class="like">
        <button @click="like">like</button>
        <div>
            {{ post.likes }}
        </div>
    </div>
    <hashtag 
        :key="tag" 
        v-for="tag in post.hashtags" 
        :tag="tag" 
    />
</template>

<script>
import Hashtag from "./Hashtag.vue"
import { store } from "./store"

export default {
    components: { Hashtag },
    props: {
        post: {
            type: Object,
        }
    },
    setup(props, ctx) {
        const like = () => {
            store.incrementLike(props.post)
        }

        return {
            like
        }; 
    }
}
</script>

<style scoped>
.like {
    display: flex;
    justify-content: center;
    margin: 10px;
}
</style>