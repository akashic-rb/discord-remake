<template>
    <div class="member-wrap">
        <div class="members">
            <div class="content">
                <div class="member-group">
                    <span>Online—2</span>
                </div>
                <div class="contain">
                    <div class="member contain">
                        <div class="layout">
                            <div class="avatar">
                                <div class="avatar-content">
                                    <div class="avatar-content">
                                        <div class="avatar-wrapper">
                                            <div class="mask">
                                                <img src="https://cdn.discordapp.com/avatars/463197911094788126/507f02a09109a7a0733130ab4f937062.png?size=128" alt="" class="pfp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name-n-decorator">
                                <div class="name">
                                    <div class="role-color">Akashic</div>
                                </div>
                                <svg class="owner-icon icon" width="24" height="24" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z" fill="currentColor" aria-hidden="true"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="member contain">
                        <div class="layout">
                            <div class="avatar">
                                <div class="avatar-content">
                                    <div class="avatar-content">
                                        <div class="avatar-wrapper">
                                            <div class="mask">
                                                <img src="https://cdn.discordapp.com/avatars/463197911094788126/507f02a09109a7a0733130ab4f937062.png?size=128" alt="" class="pfp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name-n-decorator">
                                <div class="name">
                                    <div class="role-color">Loli</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member-group">
                    <span>Offline—1</span>
                </div>
                <div class="contain">
                    <div class="member contain">
                        <div class="layout">
                            <div class="avatar">
                                <div class="avatar-content">
                                    <div class="avatar-content">
                                        <div class="avatar-wrapper">
                                            <div class="mask">
                                                <img src="https://cdn.discordapp.com/avatars/463197911094788126/507f02a09109a7a0733130ab4f937062.png?size=128" alt="" class="pfp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name-n-decorator">
                                <div class="name">
                                    <div class="role-color">Guest</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.member-wrap {
    min-width: 240px;
    display: flex;
    justify-content: center;
    position: relative;
}

.members {
    width: 240px;
    padding: 0 0 20px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    height: auto;
    background: #2f3136;
}

.content {
    position: relative;
    background: inherit;   
}

.member-group {
    padding: 24px 8px 0 16px;
    height: 40px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #8e9297;
}

.member-group span {
    text-transform: uppercase;
}

.contain {
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #8e9297;
}

.member {
    position: relative;
    max-width: 224px;
    margin-left: 8px;
}

.layout {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 4px;
    height: 42px;
    padding: 0 8px;
}

.avatar {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    margin-right: 12px;
}

.avatar-wrapper {
    position: relative;
    border-radius: 50%;
}

.mask {
    pointer-events: none;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    border-radius: inherit;
}

.pfp {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    pointer-events: none;
    border-radius: inherit;
}


.avatar-content {
    min-width: 0;
    flex: 1 1 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.name-n-decorator {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
}

.name {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
}

.role-color {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.owner-icon {
    color: #faa61a;
    margin-left: 4px;
}

.icon {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    position: relative;
    top: 1px;
    width: 14px;
    height: 14px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
</style>