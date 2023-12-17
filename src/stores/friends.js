import { ref } from 'vue'
import { defineStore } from 'pinia'
import { deleteItem, addData } from './helpers'
import { useAsignmentsStore } from './asignments'

export const useFriendsStore = defineStore('friends', () => {
  const friendsList = ref([
            { id: 1, title: 'John' },
            { id: 2, title: 'Jenny' },
            { id: 3, title: 'Den' },
            { id: 4, title: 'Betty' },
  ],)
    
  
  function deleteFriend(id) {
      friendsList.value = deleteItem(friendsList.value, id)
      const asignments = useAsignmentsStore()
      asignments.removeFromListByFriend(id)
  }
    
  function addFriend(val) {
    addData(friendsList.value, { id: Date.now(), title: val })
  }

  return { friendsList, deleteFriend, addFriend  }
})

