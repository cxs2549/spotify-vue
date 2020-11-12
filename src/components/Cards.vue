<template>
    <section>
        <div class="flex items-center justify-between mx">
            <span class="heading">
                {{ heading }}
            </span>
            <span class="mx-4 text-xs font-semibold uppercase cursor-pointer text--inactive"
                >see all</span
            >
        </div>
        <div class="mt-5 overflow-x-scroll group">
            <div v-for="card in cards" :key="card" class="mx-3">
                <div class="card">
                    <img :src="card.image" alt="" />
                    <div class="flex flex-col info">
                        <span class="font-bold title growText">{{ card.heading }}</span>
                        <span class=" caption">{{ card.caption }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ["heading", "cards"],
}
</script>

<style lang="scss" scoped>
section {
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    margin-bottom: 1.65rem;
    .heading {
        font-size: 1.2rem;
        @include sm {
            font-size: 1.4rem;
        }
        font-weight: bold;
        color: white;
        margin-left: 0.75rem;
    }
    img {
        min-width: 120px;
        max-width: 200px;
        cursor: pointer;
        &:last-child {
            padding-right: 0.75rem;
        }
    }
    .title {
        font-size: 12px;
        margin-top: 1.15rem;
        @include xs {
            font-size: 0.8rem;
        }
        @include sm {
            font-size: 14px;
        }
    }
    .group {
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
    .card {
        /* border: 1px solid red; */
        background: #171717;
        padding: 0.75rem 0.5rem;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        img {
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
            overflow: hidden;
        }
        .caption {
            font-size: 14px;
            height: 2.1rem;
            color: $inactive;
            margin-top: 0.15rem;
            margin-bottom: 0.5rem;
        }
    }
}
</style>
