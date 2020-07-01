import { Component, Vue } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
import Contents from "@/components/Contents.vue";

@Component({
  components: {
    Icon,
    Contents
  }
})
export default class Home extends Vue {
  private drawer: any = null;
}
