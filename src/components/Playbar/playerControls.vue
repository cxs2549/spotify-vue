<template>
    <div class="player-controls">
        <div class="controls">
            <i class="fa fa-random" aria-hidden="true"></i>
            <i class="fa fa-fast-backward" aria-hidden="true"></i>
            <div class="pause-circle">
                <i class="fa fa-pause" aria-hidden="true"></i>
            </div>
            <i class="fa fa-fast-forward" aria-hidden="true"></i>
            <i class="fa fa-repeat" aria-hidden="true"></i>
        </div>
        <div class="playbar">
            <div class="elapsed">0:00</div>
            <div class="progress-bar"></div>
            <div class="remaining">4:20</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.player-controls {
    display: flex;
    color: $inactive;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .controls {
        display: flex;
        align-items: center;
        width: 224px;
        height: 32px;
        justify-content: space-between;
        svg {
            font-size: 1rem;
            cursor: pointer;
        }
        .pause-circle {
            border-radius: 50%;
            border: 1px solid $inactive;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .playbar {
        display: flex;
        align-items: center;
        margin-top: 0.75rem;
        .elapsed,
        .remaining {
            font-size: 11px;
        }
        .progress-bar {
            width: 232px;
            margin: 0 0.75rem;
            height: 4px;
            border-radius: 4px;
            background: #535353;
            cursor: pointer;
            @media screen and (min-width: 1000px) {
                width: 438px;
            }
        }
    }
}
</style>
