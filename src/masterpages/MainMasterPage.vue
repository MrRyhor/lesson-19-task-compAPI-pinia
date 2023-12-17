<template>
    <div>
        <nav>
            <RouterLink to="/">Main</RouterLink> | <RouterLink to="/friends">Friends</RouterLink> |
            <RouterLink to="/gifts">Gifts</RouterLink> |
            <RouterLink to="/asignments">Asignments</RouterLink>
        </nav>
        <slot>
            <h1>{{ listTitle }}</h1>
            <ListView :data-list="getDataList" />
        </slot>
    </div>    
</template>
<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useFriendsStore } from '../stores/friends'
import { useGiftsStore } from '../stores/gifts'
import ListView from '../components/ListView.vue'


const friends = useFriendsStore()
const gifts = useGiftsStore()
const route = useRoute()

const getFriendsPath = computed(() => {
    return route.path === '/friends'
})

const listTitle = computed(() => {
    return getFriendsPath.value ? 'Friends list' : 'Gifts list'
})

const getDataList = computed(() => {
    return getFriendsPath.value ? friends.friendsList : gifts.giftsList
})
    
</script>
<style lang="scss" scoped>

    nav {
        margin-left: 50px;
        width: 100%;
        font-size: 24px;
        margin-top: 2rem;
        margin-bottom: 30px;
    }

    nav a.router-link-exact-active {
        color: rgb(2, 180, 2);
    }

    nav a.router-link-exact-active:hover {
         color: rgb(113, 206, 113);
    }

    nav a {
        text-decoration: none;
        color: rgb(41, 41, 41);
    }
    nav a:hover{
        color: gray;
    }

    nav a:first-of-type {
        border: 0;
    }

    h1 {
        padding: 0px 50px;
    }
</style>
