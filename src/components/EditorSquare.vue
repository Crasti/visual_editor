<template>
    <div
        :id="itemId"
        class="item-container"
        :style="{ 'top': pageY + 'px', 'left': pageX + 'px' }"
        @click.stop="onClicked($event)"
    >
        <span class="item-container--lable">{{ itemId }}</span>
        <div class="item-container--square">
            Listen
        </div>
    </div>
</template>

<script>
export default {
    name: "EditorSquare",

    props: {
        itemId: {
            type: String
        },
        pageX: {
            type: Number
        },
        pageY: {
            type: Number
        }
    },

    methods: {
        onClicked(e){
            this.$emit('clicked', e);
        }
    }
}
</script>
