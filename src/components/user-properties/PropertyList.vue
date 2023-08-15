<template>
    <div class="card">
        <DataView :value="userProperties" dataKey="id">
            <template #list="slotProps">
                <div class="col-12">
                    <PropertyItem :property="slotProps.data" />
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview'
import PropertyItem from '@/components/user-properties/PropertyItem.vue';
import UserPropertyService from  "@/services/repositories/UserPropertyService";
import {IUserProperty} from '@/types/database';
import { ref, onMounted } from "vue";

//user properties
let userProperties = ref<IUserProperty[]>([])

onMounted(() => {
    UserPropertyService
    .getAll()
    .then((data) => {
        userProperties.value = data.data
    })
});

</script>