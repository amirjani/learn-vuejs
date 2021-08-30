import { reactive } from 'vue'

export class Store {
    constructor() {
        this.state = reactive({
            posts: [
                {
                    id: 1,
                    title: 'Learning VueJs',
                    content: "Using Vue Js Composition",
                    likes: 10,
                    hashtags: ['vue', 'javascript', 'composition api']
                }
            ]
        })
    }
}

export const store = new Store()