<template>
    <div class="item-container">
        <div>{{ data.title }}</div>
        <div class="icon-container">
            <font-awesome-icon :icon="['far', 'trash-can']" @click="onTrashIconClick(data.id)" />
        </div>
        
    </div>
</template>
<script setup>
    defineProps({
        data: {
            type: Object,
            required: true,
        }
    })

    const emit = defineEmits(['delete'])
    
    function  onTrashIconClick(id) {
            emit('delete', id)
    }


</script>
<style lang="scss" scoped>
    .item-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;

        & .icon-container{
            cursor: pointer;
        }
    }
</style>
