<template>
    <div class="bottombar">
        <song-info />
        <player-controls />
        <right-section />
    </div>
</template>

<script>
import SongInfo from "./songInfo"
import PlayerControls from "./playerControls"
import RightSection from "./rightSection"
export default {
    components: { SongInfo, PlayerControls, RightSection },
}
</script>

<style lang="scss">
.bottombar {
    z-index: 11;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: rgb(207, 207, 207);
    position: fixed;
    height: 90px;
    bottom: 0;
    padding: 0 .75rem;
    left: 0;
    background: $gradient;
    font-size: 14px;
    width: 100%;
    @include md {
        grid-template-columns: auto 1fr auto;
    }
}
</style>
