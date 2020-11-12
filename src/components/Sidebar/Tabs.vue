<template>
    <div class="tabs">
        <div class="active">
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
</template>

<script>
export default {}
</script>

<style lang="scss">
.tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
    color: $inactive;
    text-transform: capitalize;
    font-size: 14px;
    .active {
        background: $playbar;
        font-weight: 600;
        color: white;
    }
    div {
        height: 40px;
        width: 100%;
        margin-bottom: 2px;
        padding-left: 1rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        svg {
            margin-right: 1rem;
            cursor: pointer;
        }
        span {
            cursor: pointer;
        }
    }
}
</style>
