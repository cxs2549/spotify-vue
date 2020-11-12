<template>
    <div class="right-section">
        <i class="fas fa-list"></i>
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <div>
            <i class="fa fa-volume-up" aria-hidden="true"></i>
            <div class="volume-bar"></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.right-section {
    display: none;
    @include md {
        display: flex;
    }
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.75rem;
    svg {
        margin: 0.5rem;
        cursor: pointer;
    }
    div {
        display: flex;
        align-items: center;
    }
    .volume-bar {
        width: 93px;
        height: 4px;
        border-radius: 4px;
        background: #b6b6b6;
        cursor: pointer;
    }
}
</style>
