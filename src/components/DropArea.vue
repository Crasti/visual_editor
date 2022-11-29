<template>
    <div
        class="droppable"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
        @click="resetLineConstruct()"
        @mousedown="mousedown = true"
        @mouseup="mousedown = false"
        @mousemove="moved($event)"
    >
        <drop-item/>
        <template v-for="item in items">
            <editor-square
                :key="item.id"
                :item-id="prepareItemId(item.id)"
                :page-x="item.pageX"
                :page-y="item.pageY"
                @clicked="leaderLine($event)"
            />
        </template>

    </div>
</template>

<script>
import DropItem from "@/components/DropItem";
import EditorSquare from "@/components/EditorSquare"
import LeaderLine from 'leader-line-vue';
// import Square from "../Square"


export default {
    name: "DropArea",

    components: {DropItem, EditorSquare},

    data() {
        return {
            itemId: null,
            items: [],
            startLine: null,
            stopLine: null,
            mousedown: false
        }
    },

    beforeMount() {
        this.itemId = parseInt(window.localStorage.getItem('newItemId'))  || 1;
        this.items = JSON.parse(window.localStorage.getItem('items')) || [];
    },


    methods: {
        onDrop(e) {

            if (e.composedPath()[0].className === 'droppable') {
                const pageX = e.pageX - 102;
                const pageY = e.pageY - 110;

                // const instance = new Square({
                //     propsData: {
                //         itemId: this.prepareItemId(),
                //         pageX: pageX,
                //         pageY: pageY
                //     }
                // }).$mount();
                //
                // document.getElementsByClassName('droppable')[0].appendChild(instance.$el);

                this.items.push({id: this.itemId, pageX: pageX, pageY: pageY});
                window.localStorage.setItem('items', JSON.stringify(this.items));

                this.itemId += 1;
                window.localStorage.setItem('newItemId', this.itemId.toString());
            }
        },

        prepareItemId(id) {
            let itemId = id.toString();

            while (itemId.length < 4) {
                itemId = '0' + itemId;
            }

            return itemId;
        },

        leaderLine(e) {
            if (this.startLine === e.target) {
                return;
            }

            this.startLine ? this.stopLine = e.target : this.startLine = e.target;

            if (this.startLine && this.stopLine) {
                LeaderLine.setLine(
                    this.startLine,
                    this.stopLine
                );
                this.startLine = null;
                this.stopLine = null;
            }
        },

        resetLineConstruct() {
            this.startLine = null;
            this.stopLine = null;
        },

        moved(e) {
            if (!this.mousedown) {
                return
            }
            console.log(e)
            console.log('e.pageX', e.pageX)
            console.log('e.pageY', e.pageY)
            console.log(window)
            // window.pageXOffset = window.pageXOffset + 100;
            // window.pageYOffset = window.pageYOffset + 100;
            window.scrollX += 100;
            window.scrollY += 100;
        }
    }
}
</script>
