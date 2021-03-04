<template>
    <div class="app-mount">
        <div class="layer">
            <div class="container">
                <server-side></server-side>
                <base-side :name="name"></base-side>
            </div>
        </div>
    </div>
</template>

<script>
import servers from '@/components/servers'
import base from '@/components/base'

export default {
    name: 'channels',
    props: ['name'],
    components: {
        'server-side': servers,
        'base-side': base,
    },
    data() {
        return {

        }
    },
    methods: {
        
    },
    computed: {

    }
}
</script>

<style scoped>
.app-mount, html, body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
}

.layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
}

.container {
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: unset;
}
</style>