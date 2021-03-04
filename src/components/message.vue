<template>
    <form class="form">
        <div>
            <div class="channel-text-area">
                <div class="scrollable-container">
                    <div class="inner">
                        <div class="textarea">
                            <div v-if="!isTyping" class="placeholder">Message #welcome-wall</div>
                            <div @keydown="preventEnter" @keyup="typing" class="input" autocorrect="off" contenteditable="true" style="overflow-wrap: break-word; -webkit-user-modify: read-write-plaintext-only;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'message',
    props: { 
        name: String, 
        messages: Array
    },
    data() {
        return {
            isTyping: false
        }
    },
    methods: {
        preventEnter: async function (event) {
            if(event.which === 13) {
                event.preventDefault();
                let target = event.target;
                if(target.innerText !== '') {
                    await db.collection('messages').add({
                        username: this.name,
                        content: target.innerText,
                        timestamp: Date.now(),
                    }).then(function(docRef) {
                        // db.collection('messages').orderBy('timestamp').get().then((querySnapshot) => {
                        //     let update = [];
                        //     querySnapshot.forEach(doc => {
                        //         let message = doc.data()
                        //         message['id'] = doc.id
                        //         // convert miliseconds to date
                        //         message['timestamp'] = new Date(message['timestamp']).toLocaleString()
                        //         update.push(message);
                        //     });
                        //     this.messages = update
                        //     this.$nextTick(() => {
                        //         let chat = document.getElementById('chat')
                        //         chat.scrollTop = chat.scrollHeight - chat.clientHeight
                        //     })
                        // }).catch((error) => {
                        //     console.log(error)
                        // })
                        let message
                        db.collection('messages').doc(docRef.id).get().then((doc) => {
                            message = doc.data()
                            message['id'] = doc.id
                            // convert miliseconds to date
                            message['timestamp'] = new Date(message['timestamp']).toLocaleString()
                        })
                        console.log(this)
                    }).catch(function(error) {
                        console.log(error)
                    });
                    target.innerText = '';
                }
            }
        },
        typing(event) {
            //disable place holder if user is typing and the content is not blank
            if(event.target.innerText !== '') {
                this.isTyping = true;
                return;
            }
            this.isTyping = false
        }
    }
}
</script>


<style scoped>
.form {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: -8px;
}

.form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: .5rem;
    width: 1.25rem;
}

.channel-text-area {
    margin-bottom: 24px;
    background-color: #36393f;
    position: relative;
    width: 100%;
    text-indent: 0;
    border-radius: 8px;
}

.scrollable-container {
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #40444b;
    max-height: 50vh;
    border-radius: 8px;
}

.inner {
    display: flex;
    position: relative;
    padding-left: 16px;
}

.textarea {
    background-color: transparent;
    resize: none;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;
    width: 100%;
    height: 44px;
    min-height: 44px;
    color: #dcddde;
    position: relative;
}

.placeholder {
    padding-bottom: 11px;
    padding-top: 11px;
    padding-right: 10px;
    left: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: absolute;
    right: 0;
    user-select: none;
    color: #72767d;
}

.input {
    outline: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    padding-bottom: 11px;
    padding-top: 11px;
    caret-color: #dcddde;
    position: absolute;
    left: 0;
    right: 10px;
    text-align: left;
    word-break: break-word;
    white-space: break-spaces!important;
}
</style>