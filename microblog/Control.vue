<template>
    <div>
        <button>
            {{ post.likes }}
        </button>
    </div>

    <hashtag 
        :key="tag" 
        v-for="tag in post.hashtags" 
        :tag="tag" 
    />
</template>

<script>
import Hashtag from "./Hashtag.vue"

export default {
    components: { Hashtag },
    props: {
        post: {
            type: Object,
        }
    }
}
</script>

<style>

</style>