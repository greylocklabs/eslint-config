<template key="oops">
    <div class="nice" v-if="showItems" v-for="item in items">
        <p>Here is a message from our sponsor: {{ item.msg }}</p>
    </div>
</template>

<script>
const component = {
    data: () => ({
        items: [
            { msg: 'Haha' },
            { msg: 'Hahaha' },
        ]
    }),
};

export default component;
</script>
