<template>
    <div class="selection-container">
        <h2>Selection panel:</h2>
        <div class="friends-selection">
            Friends list:
            <v-select
                v-model="selObj.friend"
                :items="friendsList"
                item-title="title"
                item-value="id"
                label="Friend"
            />
        </div>
        <div class="gifts-selection">
            Gifts list:
            <v-select v-model="selObj.gift" :items="giftsList" item-title="title" item-value="id" label="Gift" />
        </div>
        <v-btn density="default" variant="outlined" @click="onAddClick">Add to asignments</v-btn>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useFriendsStore } from '../../stores/friends'
import { useGiftsStore } from '../../stores/gifts'
import { useAsignmentsStore } from '../../stores/asignments'

const {friendsList} = useFriendsStore()
const {giftsList} = useGiftsStore()
const {addToAsignmentsList} = useAsignmentsStore()

let selObj = reactive({})

function onAddClick() {
    addToAsignmentsList({...selObj})
    selObj.friend = null
    selObj.gift = null
}
</script>

<style lang="scss" scoped>
    .selection-container{
        margin-top: 20px;
    }
</style>
