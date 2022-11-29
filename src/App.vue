<template>
    <div id="app">
        <editor-header/>
        <drop-area/>
    </div>
</template>

<script>
import DropArea from "@/components/DropArea";
import EditorHeader from "@/components/EditorHeader";


export default {
    name: 'App',

    components: {
        DropArea,
        EditorHeader
    }
}
</script>

<style lang="less">
@import "../src/style/index";
</style>
