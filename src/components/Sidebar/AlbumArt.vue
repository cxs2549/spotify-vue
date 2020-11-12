<template>
    <div class="album-art">
        <div class="install">
            <div><i class="fa fa-arrow-down" aria-hidden="true"></i></div>
            <span>Install App</span>
        </div>
        <img
            src="https://www.residentadvisor.net/images/reviews/2020/sglewis-chemicals-review.jpg"
            alt=""
        />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.album-art {
    align-self: end;
    margin-bottom: 90px;
    img {
        width: 232px;
        cursor: pointer;
    }
    .install {
        height: 40px;
        display: flex;
        font-size: 14px;
        align-items: center;
        padding-left: $padding;
        color: $inactive;
        background: $sidebar;
        div {
            width: 24px;
            height: 24px;
            display: flex;
            margin-right: 0.5rem;
            align-items: center;
            justify-content: center;
            border: 1px solid $inactive;
            padding: 2px;
            border-radius: 50%;
            svg {
                cursor: pointer;
                font-size: 0.9rem;
            }
        }
        span {
            cursor: pointer;
        }
    }
}
</style>
