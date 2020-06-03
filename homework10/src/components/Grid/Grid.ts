import { Component, Prop, Vue } from "vue-property-decorator";
import GridLoader from "@/components/Grid/GridLoader";
import { GridColumn } from "@/components/Grid/model/GridColumn";
import NotificationUtil from "@/utils/NotificationUtil";

@Component
export default class Grid extends Vue {

    @Prop({type: Object as () => GridLoader<any>})
    private gridLoader!: GridLoader<any>;

    @Prop()
    private columns!: GridColumn[];

    private mounted(): void {
        this.gridLoader.loadData()
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }
}