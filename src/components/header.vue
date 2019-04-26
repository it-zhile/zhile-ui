<template>
    <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
        <div class="header-container">
            <router-link class="header-left" :to="{name: 'index'}">
                <img class="logo" src="../assets/img/logo.png">
                <span class="name">ZHILE-UI</span>
            </router-link>
            <router-link class="header-right" :to="{name: 'giud'}">组件</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/index";
.page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all 0.3s;
    z-index: 100;
    .header-container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 80px;
        justify-content: space-between;
        .header-left {
            display: flex;
            align-items: center;
            .logo {
                width: 50px;
                height: 50px;
                vertical-align: middle;
            }
            .name {
                color: #3f536e;
                font-size: 46px;
                font-weight: 700;
                margin-left: 10px;
            }
        }
    }
}
</style>