<template>
    <main class="chat-content">
        <div class="messages-wrapper">
            <div class="scroller disable-flow-anchor" id="chat" style="overflow: hidden scroll">
                <div class="scroller-content">
                    <div class="scroller-inner">
                        <div v-for="(message, index) in messages" :key="index" class="message cozy cozy-message group-start">
                            <div class="contents">
                                <img src="https://cdn.discordapp.com/avatars/463197911094788126/507f02a09109a7a0733130ab4f937062.png?size=128" alt="" class="avatar clickable">
                                <div class="header">
                                    <div class="header-text">
                                        <div class="username">{{ message.username }}</div>
                                        <div class="timestamp">{{ message.timestamp }}</div>
                                    </div>
                                </div>
                                <div class="markup message-content">{{ message.content }}</div>
                            </div>
                        </div>
                        <div class="scroller-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
        <chat-input :name="name" :messages="messages"></chat-input>
    </main>
</template>

<script>
import chat from '@/components/message'

export default {
    props: { 
        name: String
    },
    components: {
        'chat-input': chat
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        
    },
    created() {
        db.collection('messages').orderBy('timestamp').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                let message = doc.data()
                message['id'] = doc.id
                // convert miliseconds to date
                message['timestamp'] = new Date(message['timestamp']).toLocaleString()
                this.messages.push(message)
                this.$nextTick(() => {
                    let chat = document.getElementById('chat')
                    chat.scrollTop = chat.scrollHeight - chat.clientHeight
                })
            });
        }).catch((error) => {
            console.log(error)
        })
    },
    updated() {
        
    }
}
</script>

<style scoped>
.chat-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.messages-wrapper {
    display: flex;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    z-index: 0;
}

.scroller {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.disable-flow-anchor {
    overflow-anchor: none;
}

.scroller-content {
    overflow-anchor: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    min-height: 100%;
}

.scroller-inner {
    min-height: 0;
    position: relative;
    width: 100%;
    bottom: 0;
}

.group-start {
    margin-top: 1.0625rem;
}

.message {
    padding-right: 48px!important;
}

.cozy-message {
    min-height: 2.75rem;
}

.cozy {
    padding-left: 72px;
}

.contents {
    position: static;
    margin-left: 0;
    padding-left: 0;
    text-indent: 0;
}

.avatar {
    position: absolute;
    left: 16px;
    margin-top: calc(4px - .125rem);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    pointer-events: none;
    z-index: 1;
}

.header {
    display: block;
    position: relative;
    line-height: 1.375rem;
    min-height: 1.375rem;
    color: #72767d;
    white-space: break-spaces;
}

.header-text {
    margin-right: .25rem;
}

.username {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    color: #fff;
    display: inline;
    vertical-align: baseline;
    position: relative;
}

.timestamp {
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: #72767d;
    vertical-align: baseline;
    margin-left: .25rem;
    display: inline-block;
    height: 1.25rem;
    cursor: default;
    pointer-events: none;
    font-weight: 500;
}

.markup {
    font-size: 1rem;
    line-height: 1.375rem;
    white-space: pre-wrap;
    white-space: break-spaces;
    word-wrap: break-word;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    color: #dcddde;
    font-weight: 400;
}

.message-content {
    user-select: text;
    margin-left: -72px;
    padding-left: 72px;
    text-indent: 0;
    overflow: hidden;
}

.scroller-spacer {
    display: block;
    height: 30px;
    width: 1px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    pointer-events: none;
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 15px;
}

::-webkit-scrollbar-track {
    background-color: #2e3338;
    border-radius: 15px;
}

::-webkit-scrollbar-thumb {
    background-color: #202225
}
</style>