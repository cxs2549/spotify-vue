<template>
    <div class="list">
        <ul>
            <li>Sleep</li>
            <li>Top Songs of 2020</li>
            <li>Release Radar</li>
            <li>Discover Weekly</li>
            <li>Racing</li>
            <li>Walking</li>
            <li>Running</li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.list {
    height: 100%;
    background: transparent;
    font-size: 14px;
    color: $inactive;
    ul {
        height: 100%;
        padding-top: 1rem;
        padding-left: $padding;
        list-style-type: none;
        overflow-y: scroll;
        li {
            margin-bottom: 1rem;
            cursor: pointer;
        }
    }
}
</style>
