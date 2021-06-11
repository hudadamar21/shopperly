<template>
  <div :class="{ 'border-b' : borderBottom}">
    <header class="flex items-center justify-between p-3 cursor-pointer" @click="toggleExpand">
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <div class=" hover:opacity-70">
        <icon-arrow-down/>
      </div>
    </header>
    <main 
      class="overflow-hidden transition-all duration-500"
      :class="expand ? maxheight : 'max-h-0'"  
    >
      <slot/>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { IconArrowDown } from '@/components/icons'

export default {
  components: { IconArrowDown },
  props: {
    title: {
      type: String,
      required: true
    },
    maxheight: {
      type: String,
      default: 'max-h-48'
    },
    expand: {
      type: Boolean,
      required: true
    },
    borderBottom: {
      type: Boolean,
      
    }
  },
  setup(props){
    const expand = ref(props.expand)

    const toggleExpand = () => {
      expand.value = !expand.value
    }

    return {
      expand,
      toggleExpand
    }
  }
}
</script>

<style>

</style>