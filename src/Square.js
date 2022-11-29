import Vue from "vue";

export default Vue.extend({
    name: "EditorSquare",
    props: ["itemId", "pageX", "pageY"],
    template: `
        <div
            :id="itemId"
            class="item-container"
            :style="{ 'top': pageY + 'px', 'left': pageX + 'px' }"
            @onmousemove="onMouseMove($event)"
        >
        <span class="item-container--lable">{{ itemId }}</span>
        <div class="item-container--square">
            Listen
        </div>
        </div>`
    // methods: {
    //     onMouseMove(e) {
    //         moveAt(e, e.pageX, e.pageY);
    //     },
    //
    //     moveAt(target, pageX, pageY) {
    //         target.style.left = pageX - ball.offsetWidth / 2 + 'px';
    //         target.style.top = pageY - ball.offsetHeight / 2 + 'px';
    //     }

        // (3) перемещать по экрану
        // document.addEventListener('mousemove', onMouseMove);

// (4) положить мяч, удалить более ненужные обработчики событий
//         ball.onmouseup = function() {
//             document.removeEventListener('mousemove', onMouseMove);
//             ball.onmouseup = null;
//         };
//     }
});