<template>
    <div class="flex flex-col">
        <InputLabel >City</InputLabel>
        <Dropdown :modelValue="modelValue" @update:modelValue="emit('update:modelValue', $event)" :disabled="disabled" :class="{'p-invalid': error}" @blur="emit('blur')" showClear :options="cities" filter optionValue="id" optionLabel="name" placeholder="Please select" />
        <InputError>{{ error }}</InputError>
    </div>
</template>

<script setup lang="ts">
import InputLabel from '@/components/inputs/extras/InputLabel.vue'
import InputError from '@/components/inputs/extras/InputError.vue'
import { onMounted, watch, onUnmounted, toRefs, ref } from "vue"
import CityService from '@/services/repositories/CitiesService' 
import { ICity } from '../../types/database';

const props = withDefaults(
  defineProps<{ 
    modelValue: number | null, 
    countryId: number | null, 
    disabled: boolean,
    error: string
  }>(), 
  {
    modelValue: null,
    countryId: null,
    disabled: false,
    error: ''  
  }
)
const { modelValue, countryId, disabled, error } = toRefs(props)

const emit = defineEmits(['update:modelValue', 'blur'])

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
  emit('update:modelValue', null)
  fetchCities()
})

onMounted(() => {
  fetchCities()
})

onUnmounted(() => {
  emit('update:modelValue', null)
})

</script>