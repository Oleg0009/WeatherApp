<template>
     <div class="buttons">
            <LikeBtn 
                @change-like="$emit('change-like');"
                 :liked="liked">
            </LikeBtn>
            <button>More Details</button>
     </div>
</template>

<script>
import LikeBtn from './LikeBtn'
export default {
  props: {
    liked:Boolean
  },
  components:{
    LikeBtn
  },
  methods: {
  }
}
</script>