<template>
  <div class="flex flex-col xl:flex-row  px-12 py-6 gap-4">
      <img class="w-36 rounded-md drop-shadow-md sm:w-16rem xl:w-10rem block xl:block mx-auto" :src="`https://loremflickr.com/500/300/property,style,modern?v=${Math.random()}`" :alt="props.property.data.name" />
      <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
          <div class="flex flex-col items-center sm:items-start gap-3">
              <div class="text-2xl font-bold text-slate-950	">{{ props.property.data.name }}</div>
              <Rating :modelValue="props.property.data.rating" readonly :cancel="false"></Rating>
              <div class="flex items-center gap-3">
                  <span class="flex items-center gap-2">
                      <i class="pi pi-tag"></i>
                      <span class="font-semibold capitalize">{{ props.property.data.property_type.name }}</span>
                  </span>
                  <Tag :value="props.property.data.is_public ? 'PUBLIC' : 'NOT PUBLIC'" :severity="props.property.data.is_public ? 'success' : 'warning'"></Tag>
              </div>
          </div>
          <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
              <span class="text-2xl font-semibold">
                <template v-if="props.property.listing_type.name === 'rent'">
                  <div v-if="props.property.rent_listing.price_weekly ">
                    ${{props.property.rent_listing.price_weekly}}<span class="font-light	">/week</span>
                  </div>
                  <div v-if="props.property.rent_listing.price_monthly ">
                    ${{props.property.rent_listing.price_monthly}}<span class="font-light	">/month</span>
                  </div>
                </template>
                <template v-else-if="props.property.listing_type.name === 'sell'">
                  ${{ props.property.sell_listing.price }}
                </template>
              </span>
              <Button icon="pi pi-shopping-cart" rounded :disabled="props.property.inventoryStatus === 'OUTOFSTOCK'"></Button>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentObjectPropsOptions } from "vue";
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import UserProperty from '@/api/models/UserProperty';

//set model props
export interface Props {
  property: UserProperty
}
const props = defineProps<ComponentObjectPropsOptions<Props>>({
  property:{
    type: Object,
    required: true,
    default: {}
  }
})
</script>