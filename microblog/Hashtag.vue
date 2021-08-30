<template>
    <div class="tag" @click="setHashtag(tag)">
        #{{ tag }}
    </div>
</template>

<script>
import { store } from './store';

export default {
    props: {
        tag: {
            type: String,
        }
    },
    setup(props, ctx) {
        const setHashtag = (tag) => {
            console.log(tag)
            store.setHashtag(tag)
        }

        return {
            setHashtag
        }
    }
}
</script>

<style scoped>
    .tag {
        text-decoration: underline;

    }

    .tag:hover {
        color: cornflowerblue;
        cursor: pointer;
    }
</style>