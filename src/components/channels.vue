<template>
    <div class="sidebar">
        <nav class="container">
            <header class="header clickable">
                <h1 class="server-name">Weebz</h1>
                <svg width="18" height="18" class="server-button">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h18v18H0"></path>
                        <path stroke="currentColor" d="M4.5 4.5l9 9" stroke-linecap="round"></path>
                        <path stroke="currentColor" d="M13.5 4.5l-9 9" stroke-linecap="round"></path>
                    </g>
                </svg>
            </header>
            <div class="positioned-unread-messages"></div>
            <div class="scroller" aria-label="Channels">
                <div class="content" style="height: 492px">
                    <div style="height: 0px"></div>
                    <div style="height: 16px"></div>
                    <div class="container-default">
                        <div class="wrapper">
                            <div class="channel-content">
                                <a to="'/channels/dasdasds'" class="main-content">
                                    <div class="channel-name">
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="icon base-txt-color">
                                            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                                        </svg>
                                        <div class="name base-txt-color">welcome-wall</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container-default">
                        <div class="wrapper">
                            <div class="channel-content">
                                <a to="'/channels/dasdasds'" class="main-content">
                                    <div class="channel-name">
                                        <svg width="24" height="24" viewBox="0 0 24 24" class="icon base-txt-color">
                                            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                                        </svg>
                                        <div class="name base-txt-color">test</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <user></user>
    </div>
</template>

<script>
import user from '@/components/user'

export default {
    components: {
        'user': user
    }
}
</script>

<style scoped>
.sidebar {
    flex-direction: column;
    min-height: 0;
    width: 240px;
    height: 100%;
    flex: 0 0 auto;
    background: #2f3136;
}

nav {
    box-shadow: none;
    height: auto;
    padding: 0;
}

.container {
    position: relative;
    background: #2f3136;
    flex: 1 1 auto;
    min-height: 0px;    
    align-items: stretch;
    justify-content: flex-start;
}

.header-container {
    position: relative;
}

.header {
    display: flex;
    position: relative;
    font-weight: 500;
    padding: 0 16px;
    height: 48px;
    box-sizing: border-box;
    align-items: center;
    z-index: 3;
    transition: background-color .1s linear;
    color: #fff;
    box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px 0px, rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px;
    user-select: none;
}

.server-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.server-button {
    position: relative;
    top: 3px;
    opacity: .8;
    -webkit-transition: stroke-dasharray .2s ease-out,-webkit-transform .2s ease-out;
    transition: stroke-dasharray .2s ease-out,-webkit-transform .2s ease-out;
    transition: transform .2s ease-out,stroke-dasharray .2s ease-out;
    transition: transform .2s ease-out,stroke-dasharray .2s ease-out,-webkit-transform .2s ease-out;
    margin-left: 4px;
}

.scroller {
    z-index: 1;
    overflow: hidden;
    padding-right: 8px;
}

.content {
    position: relative;
}

.container-default {
    position: relative;
    transition: opacity .2s ease-in-out;
}

.wrapper {
    padding: 1px 0;
    overflow: visible;
    position: relative;
}

.channel-name {
    position: relative;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.main-content {
    flex: 1 1 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 0;
    padding: 6px 0;
    cursor: pointer;
}

.name {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    white-space: nowrap;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    user-select: none;
}

.icon {
    display: block;
    width: 20px;
    height: 20px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 6px;
}

.channel-content {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 8px;
    margin-left: 8px;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.wrapper:hover .channel-content{
    background: rgba(79, 84, 92, .16);
}

.wrapper:hover .name {
    color: #dcddde !important;
}
</style>