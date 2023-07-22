<template>
    <Card style="width: 50em">
        <template #title> 
            Add Property
        </template>
        <template #content>
            <div class="flex flex-column md:flex-row">
                <div class="flex flex-column gap-3 w-full md:w-5 py-6">
                    <InputText placeholder="Name" id="name" v-model="property.name" type="text" />

                    <!-- <PropertyTypeInput v-model="property.propertyType"/>

                    <ListingTypeInput v-model="property.listingType"/> -->

                    <Textarea placeholder="Description" v-model="property.description" rows="5" cols="30" />
                    
                    <InputText placeholder="Bedrooms"  id="bedrooms" v-model="property.bedrooms" type="text"  />
                    
                    <InputText placeholder="Bathrooms" id="name" v-model="property.bathrooms" type="text"/>
                </div>
                <div class="w-full md:w-1">
                    <Divider layout="vertical" class="hidden md:flex" />
                    <Divider layout="horizontal" class="flex md:hidden" align="center" />
                </div>
                <div class="flex flex-column gap-3 w-full md:w-5 py-1">
                    <p class="mt-0 mb-0 font-bold text-xl">Address</p>
                    <AddressForm />
                </div>
            </div>

        </template>
        <!-- <template #footer>
            <q-btn  color="secondary"  rounded label="Save"></q-btn>
        </template> -->
    </Card>
</template>

<script setup>
import {reactive, watch } from "vue";
import AddressForm from '@/components/forms/AddressForm.vue';
// import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
// import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';


const property = reactive({
    name: null,
    description: null,
    bedrooms: null,
    bathrooms: null,
    listingType: null,
    propertyType: null
})
</script>
