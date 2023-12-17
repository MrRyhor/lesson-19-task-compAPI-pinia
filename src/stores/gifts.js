import { ref } from 'vue'
import { defineStore } from 'pinia'
import { deleteItem, addData } from './helpers'
import { useAsignmentsStore } from './asignments'

export const useGiftsStore = defineStore('gifts', () => {
  const giftsList = ref([
            { id: 1, title: 'Cake' },
            { id: 2, title: 'Flowers' },
            { id: 3, title: 'Book' },
            { id: 4, title: 'Chocolate' },
        ])
  
  function deleteGifts(id) {
      giftsList.value = deleteItem(giftsList.value, id)
      const asignments = useAsignmentsStore()
      asignments.removeFromListByGift(id)
  }
    
  function addGift(val) {
        addData(giftsList.value, {id: Date.now(), title: val})
  }

  return { giftsList, deleteGifts, addGift }
})

