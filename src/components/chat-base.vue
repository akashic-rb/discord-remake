<template>
    <div class="chat">
        <section class="title container" aria-label="Chat Header">
            <div class="children">
                <div class="icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                    </svg>
                </div>
                <h3 class="channel-title base-title size16">welcome-wall</h3>
            </div>
            <div class="toolbar">
                <div class="icon-wrapper clickable">
                    <svg x="0" y="0" class="icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"></path>
                    </svg>
                </div>
                <div class="icon-wrapper clickable">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"></path>
                    </svg>
                </div>
                <div class="icon-wrapper clickable">
                    <svg x="0" y="0" class="icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"></path><path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"></path>
                    </svg>
                </div>
            </div>
        </section>
        <div class="content">
            <chat-section :name="name"></chat-section>
            <member-section></member-section>
        </div>
    </div>
</template>

<script>
import chat from '@/components/messages'
import member from '@/components/members'

export default {
    props: ['name'],
    components: {
        'chat-section': chat,
        'member-section': member,
    }
}
</script>

<style scoped>
.chat{
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background: #36393f;
}

.title {
    position: relative;
    flex: 0 0 auto;
    z-index: 100;
}

.container {
    box-sizing: border-box;
    background: #36393f;
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 8px;
    font-size: 16px;
    line-height: 20px;
    cursor: default;
    color: #dcddde;
}

.children {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    min-width: 0;
    overflow: hidden;
}

.icon-wrapper {
    position: relative;
    height: 24px;
    width: auto;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 0 8px;
}

.icon {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-app-region: no-drag;
    box-sizing: border-box;
    color: #72767d;
}

.toolbar {
    display: flex;
    min-width: 0;
    flex: 0 0 auto;
    align-items: center;
}

.channel-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    flex: 0 0 auto;
    min-width: auto;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 8px 0 0;
    user-select: none;
    font-weight: 600;
}

.base-title {
    color: #fff;
}

.size16 {
    font-size: 16px;
    line-height: 20px;
}

.content {
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
}

.content::before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px 0px, rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px;
    z-index: 1;
    pointer-events: none;
}
</style>