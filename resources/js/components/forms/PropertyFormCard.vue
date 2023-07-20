<template>
    <q-card style="max-width: 1000px;" flat bordered>
        <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-lg">Add Property</div>
            <div class="q-mt-lg" >
                <q-form class="q-mt-lg " >
                    <div class="row q-col-gutter-lg">
                        <div class="col q-gutter-md">
                            <q-input v-model="property.name" label="Name" />

                            <PropertyTypeInput />

                            <ListingTypeInput/>

                            <q-input v-model="property.description" filled type="textarea" label="Description" />

                            <q-input v-model="property.bedrooms" label="Bedrooms" />

                            <q-input v-model="property.bathrooms" label="Bathrooms" />
                        </div>
                        <div class="col q-gutter-md">
                            <div class="text-h6 q-mt-lg-xs" style="margin-bottom: -16px;">Address</div>

                            <AddressForm />
                        </div>
                    </div>
                </q-form>
            </div>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn  color="secondary"  rounded label="Save"></q-btn>
        </q-card-actions>
    </q-card>
</template>

<script setup>
import {reactive, watch } from "vue";
import AddressForm from '@/components/forms/AddressForm.vue';
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';


const property = reactive({
    name: null,
    description: null,
    bedrooms: null,
    bathrooms: null,
})
</script>
