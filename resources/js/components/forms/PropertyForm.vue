<template>
    <Card >
        <template #title> 
            Details
        </template>
        <template #content>
            <div class="flex flex-col gap-3 ">
                <InputText placeholder="Name" id="name" v-model="property.name" type="text" />

                <PropertyTypeInput v-model="property.propertyType"/>

                <ListingTypeInput v-model="property.listingType"/>

                <Textarea placeholder="Description" v-model="property.description" rows="5" cols="30" />
                
                <InputText placeholder="Bedrooms"  id="bedrooms" v-model="property.bedrooms" type="text"  />
                
                <InputText placeholder="Bathrooms" id="name" v-model="property.bathrooms" type="text"/>
            </div>
        </template>
        <!-- <template #footer>
            <q-btn  color="secondary"  rounded label="Save"></q-btn>
        </template> -->
    </Card>
</template>

<script setup>
import {reactive, watch } from "vue";
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';


const property = reactive({
    name: null,
    description: null,
    bedrooms: null,
    bathrooms: null,
    listingType: null,
    propertyType: null
})
</script>
