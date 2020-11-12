<template>
    <div id="sidebar">
        <logo />
        <tabs />
        <playlists />
        <list />
        <album-art />
    </div>
</template>

<script>
import Logo from "@/components/Sidebar/Logo"
import Tabs from "@/components/Sidebar/Tabs"
import Playlists from "@/components/Sidebar/Playlists"
import List from "@/components/Sidebar/List"
import AlbumArt from "@/components/Sidebar/AlbumArt"
export default {
    components: { Logo, Tabs, Playlists, List, AlbumArt },
}
</script>

<style lang="scss">
#sidebar {
    /* border: 1px solid red; */
    visibility: hidden;
    z-index: 10;
    color: $inactive;
    background: $sidebar;
    position: fixed;
    left: 0;
    top: 0;
    width: 232px;
    height: 100%;
    display: grid;
    grid-template-rows: 86px 130px 137px minmax(60px, auto) 1fr;
    @include sm {
        visibility: visible;
    }
}
</style>
