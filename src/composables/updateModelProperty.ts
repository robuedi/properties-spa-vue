
import {  GeneralInputType } from '@/types/forms'
import {Ref} from 'vue'

export default function useUpdateModelProperty<T>(modelValue: Ref<T>, emit: (event: "update:modelValue", ...args: any[]) => void) {
  //make the function that fires the event with the updated model
  const updateInput = (property: keyof T, value: GeneralInputType) => {
    emit('update:modelValue', { ...modelValue.value, [property]: value });
  }
    
  return { updateInput }
}