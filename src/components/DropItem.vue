<template>
    <div
        :class="['draggable', 'drop-item', isRotated ? 'hidden' : '']"
         @dragstart="onDragStart($event)"
         @mousedown="isRotated = true"
         @mouseup="isRotated = false"
         draggable="true"
    >
        <div :class="['drop-item--body', isRotated ? 'rotated' : '']">

            <div class="drop-item--body-icon">
                <img src="../assets/icons/24/Listen.svg" alt="Listen">
            </div>
            <div class="drop-item--body-content">
                <div class="title">Listen</div>
                <div class="rectangle"></div>
                <div class="rectangle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropItem",

    // props: {
    //     itemId: {
    //         type: String
    //     }
    // },

    data() {
        return {
            isRotated: false
        }
    },

    methods: {
        onDragStart(e) {
            e.dataTransfer.dropEffect = 'move';
            e.dataTransfer.effectAllowed = 'move';
            // e.dataTransfer.setData('itemId', this.itemId);

            // setTimeout(() => {
            //     e.target.style.display = "none";
            // }, 0);
        }
    }
}
</script>
