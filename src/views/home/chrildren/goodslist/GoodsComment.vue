<template>
    <div>
        <Comment :id="$route.params.id" />
    </div>
</template>

<script>
import Comment from '../../../../components/subcomponents/Comment'
export default {
    components: {
        Comment
    }
}
</script>

<style scoped>

</style>