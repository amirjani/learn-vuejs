<template>
    <button @click="increment">{{ count }}</button>
    <button @click="increase('a')">{{ numbers.a }}</button>
    <button @click="increase('b')">{{ numbers.b }}</button>
    {{ total }}
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
    setup() {
        // single values
        const count = ref(0)

        // multiple values
        const numbers = reactive({
            a: 0,
            b: 0
        })

        const increment = () => {
            count.value++;
        }

        const increase = (number) => {
            numbers[number]++;
        }

        const total = computed(() => {
            return count.value + numbers.a + numbers.b
        });

        return {
            total,
            increment,
            count,
            numbers,
            increase
        }
    },
    created() {},
    mounted() {},
    
}
</script>

<style scoped>
</style>