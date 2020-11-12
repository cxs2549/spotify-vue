<template>
    <div class="wrap bg-gray-base">
        <div class="playing">
            <img
                src="https://www.residentadvisor.net/images/reviews/2020/sglewis-chemicals-review-cover.jpg"
                class="cursor-pointer"
                alt=""
            />
            <div class="flex flex-col justify-center pl-2 text-sm leading-4 ">
                <span class="cursor-pointer">Chemicals</span>
                <span class="text-xs cursor-pointer text-gray-inactive">SG Lewis</span>
            </div>
            <div class="flex items-center ml-auto icons">
                <div>
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <i class=" fa fa-pause" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="nav ">
            <div>
                <svg-icon icon="home" />
                <span>home</span>
            </div>
            <div>
                <svg-icon icon="search" />
                <span>search</span>
            </div>
            <div>
                <svg-icon icon="library" />
                <span>your library</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.wrap {
    z-index: 12;
    position: fixed;
    display: grid;
    grid-template-rows: auto 90px;
    width: 100%;
    bottom: 0;
    right: 0;
    .playing {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        @include sm {
            display: none;
            grid-template-rows: 90px;
        }
        .icons {
            margin-right: 0.75rem;
            svg:first-child {
                margin-right: 2rem;
            }
        }
    }
    .nav {
        display: grid;
        padding-top: 8px;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid #000;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        span {
            font-size: 12px;
            text-transform: capitalize;
        }
    }
    @include sm {
        display: none;
    }
}
</style>
