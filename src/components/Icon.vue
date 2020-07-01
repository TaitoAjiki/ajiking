<template>
  <v-icon large>{{ name }}</v-icon>
</template>
<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Icon extends Vue {
  @Prop({ default: null })
  name;

  @Prop({ default: false })
  large;
}
</script>