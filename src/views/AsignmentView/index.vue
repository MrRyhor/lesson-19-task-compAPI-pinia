<template>
    <MainMasterPage>
        <div class="asignments-container">
            <h1>Asignments list:</h1>
            <AsignmentsList />
            <AsignmentsSelect />
        </div>        
    </MainMasterPage>
</template>
<script setup>
import MainMasterPage from '../../masterpages/MainMasterPage.vue'
import AsignmentsList from './AsignmentsList.vue'
import AsignmentsSelect from './AsignmentsSelect.vue'

</script>
<style lang="scss" scoped>
    .asignments-container{
        max-width: 1000px;
        padding: 0px 50px;
    }
</style>
