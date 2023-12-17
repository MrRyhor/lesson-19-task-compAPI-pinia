import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { addData, deleteItem, getFindById } from './helpers'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'

export const useAsignmentsStore = defineStore('asignments', () => {
    const asignmentsList = ref([{ id: 1, friend: 2, gift: 1 }])
    
    const getAsignmentsList = computed(() => {
        const friends = useFriendsStore()
        const gifts = useGiftsStore()
        
        return asignmentsList.value.map(asignment => ({
            id: asignment.id,
            friend: getFindById(friends.friendsList, asignment.friend).title,
            gift: getFindById(gifts.giftsList, asignment.gift).title,
        }))
  } )
  
    function addToAsignmentsList(obj) {
        addData(asignmentsList.value, {id: Date.now(),...obj,})
    }
    
    function removeFromAsignmentsList(id) {
        asignmentsList.value = deleteItem(asignmentsList.value, id)
    }

    function removeFromListByFriend(friendId) {
        asignmentsList.value = asignmentsList.value.filter(asignment => asignment.friend !== friendId)
    }

    function removeFromListByGift(giftId) {
        asignmentsList.value = asignmentsList.value.filter(asignment => asignment.gift !== giftId)
    }

    return {
        asignmentsList,
        getAsignmentsList,
        addToAsignmentsList,
        removeFromAsignmentsList,
        removeFromListByFriend,
        removeFromListByGift
    }
})

