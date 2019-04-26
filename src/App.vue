<template>
    <div id="app" :class="isIndex ? null : 'is-index'">
        <main-header/>
        <router-view v-if="isIndex"/>
        <div class="main" v-if="!isIndex">
            <side-nav class="nav"/>
            <router-view class="content"/>
        </div>
        <main-footer class="footer" v-if="!isIndex"/>
    </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import sideNav from "./components/side-nav.vue";
import mainFooter from "./components/footer.vue";
export default {
    name: "App",
    components: {
        mainHeader,
        sideNav,
        mainFooter
    },
    watch: {
        $route() {
            this.isIndex = this.$route.name === "index";
        }
    },
    data() {
        return {
            isIndex: true
        };
    }
};
</script>


<style lang="scss">
@import "@/assets/style/index.scss";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    .main {
        flex: 1;
        width: 90%;
        margin: 50px auto;
        background-color: #fff;
        box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
        display: flex;
        .nav {
            flex-grow: 0;
            width: 210px;
            background-color: #fff;
        }
        .content {
            flex: 1;
            padding: 32px 48px 48px;
            box-sizing: border-box;
            overflow: hidden;
        }
    }
    .footer {
    }
}
.is-index {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
