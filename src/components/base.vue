<template>
    <div class="base">
        <div class="content">
            <channel-side></channel-side>
            <chat-side :name="name"></chat-side>
        </div>
    </div>
</template>

<script>
import channels from '@/components/channels'
import chat from '@/components/chat-base'

export default {
    props: ['name'],
    components: {
        'channel-side': channels,
        'chat-side': chat
    }
}
</script>

<style scoped>
.base {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 72px;
}

.content {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    flex: 1 1 auto;
}
</style>