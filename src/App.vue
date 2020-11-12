<template>
    <div id="app">
        <svg-sprite />
        <navbar />
        <sidebar />
        <greeting />
        <div class="card-collection">
            <cards heading="Shortcuts" :cards="shortcuts" />
            <cards heading="Recently played" :cards="recently" />
            <cards heading="Made for cooldaddy" :cards="madeFor" id="bottomCards" />
        </div>
        <bottombar />
        <playbar />
    </div>
</template>

<script>
export default {
    name: "App",
    computed: {
        shortcuts() {
            return this.$store.state.shortcuts
        },
        recently() {
            return this.$store.state.recently
        },
        madeFor() {
            return this.$store.state.madeFor
        },
    },
}
</script>

<style lang="scss">
#app {
    border: 1px solid transparent;
    min-height: 100vh;
    color: white;
    background-color: $sidebar;
    background-image: linear-gradient(315deg, $sidebar 20%, #2d3436 74%);
    background-repeat: no-repeat;
    background-position: center;
    #bottomCards {
        padding-bottom: 90px;
    }
    @include sm {
        margin-left: 232px;
    }
    .card-collection {
        /* visibility: hidden; */
        /* margin-top: 2rem; */
        @include sm {
            margin-top: 74px;
        }
    }
}
</style>
