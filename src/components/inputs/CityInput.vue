<template>
    <div class="flex flex-col">
        <InputLabel >City</InputLabel>
        <Dropdown v-model="cityId" :disabled="props.disabled" :class="{'p-invalid': props.error}" @blur="emit('blur')" showClear :options="cityStore.cities" filter optionValue="id" optionLabel="name" placeholder="Please select" />
        <InputError>{{ props.error }}</InputError>
    </div>
</template>

<script setup>
import City from '@/services/models/City'
import InputLabel from '@/components/inputs/extras/InputLabel.vue'
import InputError from '@/components/inputs/extras/InputError.vue'
import { onMounted, computed, watch, onUnmounted } from "vue";
import { useCityStore } from "@/store/city.store";

//set the model
const props = defineProps({
  value: {
    type: [Number],
    required: false,
    default: null,
  },
  countryId: {
    type: Number,
    required: false,
    default: null,
  },
  disabled:{
    type: Boolean,
    required: false,
    default: false,
  },
  error:{
    type: String,
    required: false,
    default: ''
  }
});

const emit = defineEmits(['input', 'blur'])

const cityId = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('input', value)
  }
})

const cityStore = useCityStore()
//get cities
const fetchCities = () => { 
  props.countryId ? cityStore.getAll(City.where({country_id: props.countryId})) : cityStore.getAll(new City())
}

//clear city when country changes
watch(() => props.countryId, () => {
  cityId.value = null
  fetchCities()
})

onMounted(() => {
  fetchCities()
})
onUnmounted(() => {
  cityId.value = null
})
</script>@/services/models/City