<template>
    <div class="list-container">
        <ItemData v-for="item in dataList" :key="item.id" :data="item" @delete="onDelete" />
        <div class="editor-container">
            <v-text-field v-model="inputValue" :label="inputLabelTitle" variant="outlined" />
            <v-btn @click="onAddClick(item)">Add</v-btn>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ItemData from './ItemData.vue'
import { useFriendsStore } from '../stores/friends'
import { useGiftsStore } from '../stores/gifts'

    const useFriends = useFriendsStore()
    const useGifts = useGiftsStore()
    const route = useRoute()

    const inputValue = ref(null)
  
    defineProps({
        dataList: {
            type: Array,
            required: true,
        },
    })
   
    const getFriendsPath = computed(() => {
        return route.path === '/friends'
    })
    const inputLabelTitle = computed(() => {
        return getFriendsPath.value ? 'Friends' : 'Gifts'
    })
    
    function onDelete(dataId) {
        getFriendsPath.value ? useFriends.deleteFriend(dataId) : useGifts.deleteGifts(dataId)
    }

    function onAddClick() {
        getFriendsPath.value ? useFriends.addFriend(inputValue.value) : useGifts.addGift(inputValue.value)
            inputValue.value = null
    }    
   

</script>
<style lang="scss" scoped>
.list-container {
    max-width: 1000px;
    padding: 0px 50px;

    & .editor-container {
        margin-top: 20px;
    }
}
</style>
