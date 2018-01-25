<template>
    <div class="nice">
        <p>Here is a message from our sponsor: {{ msg }}</p>
    </div>
</template>

<script>
const component = {
    data: () => ({
        msg: 'Buy our stuff!',
    }),
};

export default component;
</script>
