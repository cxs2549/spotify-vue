<template>
    <div class="playlists">
        <div class="playlist-title">playlists</div>
        <div class="row">
            <div class="box">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            <span>create playlist</span>
        </div>
        <div class="row2">
            <div class="box box2">
                <i class="fa fa-heart heart-icon" aria-hidden="true"></i>
            </div>
            <span>liked songs</span>
        </div>
        <hr />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.playlists {
    width: 100%;
    height: 100%;
    padding-left: $padding;
    padding-top: 0.85rem;
    font-size: 14px;
    color: $inactive;
    text-transform: capitalize;
    .playlist-title {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.09em;
        margin-bottom: 1rem;
    }

    .row,
    .row2 {
        margin-bottom: 0.75rem;
        height: 32px;
        display: flex;
        align-items: center;
    }

    .box {
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $inactive;
        margin-right: 1rem;
        svg {
            color: $sidebar;
            cursor: pointer;
        }
    }
    .box2 {
        background: $gradient;
        svg {
            color: coral;
        }
    }
    hr {
        background-color: $playbar;
        height: 1px;
        border: none;
        margin-right: 1.5rem;
        opacity: 0.6;
    }
    span {
        cursor: pointer;
    }
}
</style>
