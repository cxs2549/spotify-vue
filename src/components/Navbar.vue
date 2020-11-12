<template>
    <div>
        <nav class="nav1">
            <img class="w-12" src="../assets/images/logo_icon.png" alt="" />
            <div class="cursor-pointer">
                <i class="text-2xl fa fa-cog" aria-hidden="true"></i>
            </div>
        </nav>
        <nav class="navLg" :class="scrolled && 'bg-black'">
            <div class="left">
                <div class="back"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
                <div class="forward"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
            </div>
            <div class="flex items-center w-8 h-8 p-1 mr-2 rounded-full pod">
                <div
                    class="flex items-center justify-center w-6 h-6 p-2 bg-gray-900 rounded-full cursor-pointer"
                >
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <span class="ml-2">cooldaddy</span>
                <div class="flex items-center justify-center w-6 h-6 rounded-full caret">
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
        }
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
    },
}
</script>

<style lang="scss">
.nav1 {
    /* border: 1px solid red; */
    color: white;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    img {
        /* border: 1px solid red; */
        cursor: pointer;
        border-radius: 50%;
    }
    @include sm {
        display: none;
    }
}
.navLg {
    transition: all ease-in-out 250ms;
    /* border: 1px solid red; */
    display: none;
    width: 100%;
    height: 60px;
    @include sm {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pod {
        background: black;
        @include md {
            width: auto;
            /* margin-right: 2rem; */
        }
        span {
            display: none;
            @include md {
                display: inline;
                cursor: pointer;
                font-size: 14px;
                margin-right: 4px;
            }
        }
        .caret {
            display: none;
            cursor: pointer;
            @include md {
                display: inline;
                margin-left: 0.5rem;
            }
        }
    }
    .left {
        /* border: 1px solid red; */
        visibility: visible;
        display: flex;
        margin-left: 200px;
        padding-left: 48px;
        div {
            margin-right: 1rem;
            svg {
                cursor: pointer;
                font-size: 1.5rem;
            }
        }
        .back,
        .forward {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            background: black;
            align-items: center;
            justify-content: center;
            &:hover {
                background: $inactive;
                color: $sidebar;
                transition: all 250ms ease-in;
            }
        }
    }
}
</style>
