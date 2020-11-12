<template>
    <section class="greeting-section">
        <div class="greeting">Good morning</div>
        <div class="cell-wrap">
            <div class="cell bg-gray-card">
                <div class="block"><i class="fa fa-heart" aria-hidden="true"></i></div>
                <span class="growText">Liked Songs</span>
            </div>
            <div v-for="pic in shortcuts" :key="pic" class="cell bg-gray-card">
                <img :src="pic.image" alt="" />
                <span class="growText">{{ pic.heading }}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        shortcuts() {
            return this.$store.state.shortcuts
        },
    },
}
</script>

<style lang="scss">
.greeting-section {
    /* border: 1px solid red; */
    height: auto;
    width: 100%;
    margin-top: 0.75rem;
    padding: 0 0.75rem;
    @include sm {
        display: none;
    }
    .greeting {
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
    }
    .cell-wrap {
        /* border: 1px solid red; */
        margin-top: 0.75rem;
        display: grid;
        grid-template-columns: auto auto;
        max-width: auto;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .cell {
        display: grid;
        grid-template-columns: 0.85fr 2fr;
        width: auto;
        height: 60px;
        flex-grow: 1;
        border-radius: 4px;
        margin-bottom: 0.5rem;
        &:nth-child(odd) {
            margin-right: 0.5rem;
        }
        .growText {
            @include xs {
                font-size: 0.75rem;
            }
        }
        .block {
            /* border: 1px solid red; */
            display: flex;
            align-items: center;
            justify-content: center;
            background: $gradient;
            height: 100%;
            width: 100%;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            cursor: pointer;
            svg {
                color: coral;
            }
        }
        span {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 0.5rem;
            font-size: 11px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-right: 2px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
    }
}
</style>
