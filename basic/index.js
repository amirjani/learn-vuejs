var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
        person: {
            name: 'Amir Jani',
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'TODO 1' },
            { text: 'TODO 2' },
            { text: 'TODO 3' },
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'What is success?',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'The Weeknd',
    }
})

Vue.component('todo-component', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const todoComponent = new Vue({
    el: '#component',
    data: {
        todos: [
            { id: 1, text: 'TODO 1' },
            { id: 2, text: 'TODO 2' },
            { id: 3, text: 'TODO 3' },
        ]
    }
})