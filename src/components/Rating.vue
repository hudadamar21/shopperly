<template>
  <span class="flex iteme-center">
    <icon-star 
      v-for="i of maxScore" 
      :class="i > score ? 'text-gray-300' : 'text-yellow-300'"
      :key="i"
    />
  </span>
</template>

<script>
import { IconStar } from "@/components/icons";
export default {
  components: { IconStar },
  props: {
    score: {
      type: Number,
      requried: true,
      default: 0
    },
    maxScore: {
      type: Number,
      required: true,
      default: 5
    }
  },
  
}
</script>