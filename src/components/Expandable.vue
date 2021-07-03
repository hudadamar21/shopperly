<template>
  <div :class="{ 'border-b' : borderBottom}">
    <header :class="headerClass" class="flex items-center justify-between p-3 cursor-pointer" @click="toggleExpand">
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <div class="hover:opacity-70 transform transition-transform duration-300" :class="expand ? 'rotate-180' : 'rotate-0'">
        <icon-arrow-down/>
      </div>
    </header>
    <main
      :class="[
        mainClass,
        expand ? `${maxheight} mb-4` : 'max-h-0',
        'overflow-hidden transition-all duration-500 px-3'
      ]"  
    >
      <slot :expand="expand"/>
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
      default: true
    },
    borderBottom: { type: Boolean },
    headerClass: { type: String },
    mainClass: { type: String }
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