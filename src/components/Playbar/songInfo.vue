<template>
    <div class="song-info">
        <div class="info-wrap">
            <div class="title-artist">
                <span>Chemicals</span>
                <span>SG Lewis</span>
            </div>
            <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.song-info {
    display: flex;
    width: 100%;
    padding-left: 1rem;
    padding-top: 1.5rem;
    .info-wrap {
        display: flex;
        height: 40px;
        align-items: center;
        svg {
            margin-left: 2rem;
            color: rgb(13, 179, 13);
            cursor: pointer;
        }
    }
    .title-artist {
        display: flex;
        flex-direction: column;
        line-height: 18px;
        cursor: pointer;
        color: whitesmoke;

        span:nth-child(2) {
            font-size: 12px;
            cursor: pointer;
            color: $inactive;
        }
    }
}
</style>
