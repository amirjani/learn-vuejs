import { reactive, computed } from 'vue'
import { testPosts } from './testPosts'

export class Store {
    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentHashtag: null
        })
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag
    }

    incrementLike(post) {
        post.likes++
    }

    get filteredPosts() {
        return computed(() => {
            if (this.state.currentHashtag) {
                return this.state.posts.filter(post => post.hashtags.includes(this.state.currentHashtag));
            }
            return this.state.posts
        });
    }
}

export const store = new Store()