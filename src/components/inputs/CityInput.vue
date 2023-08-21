<template>
    <div class="flex flex-col">
        <InputLabel >City</InputLabel>
        <Dropdown :modelValue="modelValue" @update:modelValue="emitUpdate($event)" @change="emit('change')" :disabled="disabled" :class="{'p-invalid': error}"  showClear :options="cities" filter optionValue="id" optionLabel="name" placeholder="Please select" />
        <InputError>{{ error }}</InputError>
    </div>
</template>

<script setup lang="ts">
import InputLabel from '@/components/inputs/extras/InputLabel.vue'
import InputError from '@/components/inputs/extras/InputError.vue'
import { onMounted, watch, onUnmounted, toRefs, ref } from "vue"
import CityService from '@/services/repositories/CitiesService' 
import { ICity } from '@/types/database';
import { ErrorMessagTxt } from '@/types/forms';

const props = withDefaults(
  defineProps<{ 
    modelValue: number | null, 
    countryId: number | null, 
    disabled: boolean,
    error: ErrorMessagTxt
  }>(), 
  {
    modelValue: null,
    countryId: null,
    disabled: false,
    error: null  
  }
)
const { modelValue, countryId, disabled, error } = toRefs(props)

//define events
const emit = defineEmits(['update:modelValue', 'update', 'change'])
const emitUpdate = ($event: any)=> { 
  emit('update:modelValue', $event)
  emit('update', $event)
}

//get cities list
let cities = ref<ICity[]>([])

const fetchCities = () => { 
  CityService.getByCountry(countryId.value)
  .then((result)=>{
    cities.value = result
  })
  .catch(()=>{
    cities.value = []
    throw Error('Cities missing in cities input')
  })
}

//clear city when country changes
watch(() => countryId.value, () => {
  emitUpdate(null)
  fetchCities()
})

onMounted(() => {
  fetchCities()
})

onUnmounted(() => {
  emitUpdate(null)
})

</script>