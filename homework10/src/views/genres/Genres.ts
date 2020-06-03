import { Component, Vue } from "vue-property-decorator";
import Grid from "@/components/Grid/Grid.vue";
import GridLoader from "@/components/Grid/GridLoader";
import { GridColumn } from "@/components/Grid/model/GridColumn";
import { Genre } from "@/model/Genre";

@Component({components: {grid: Grid}})
export default class Genres extends Vue {
    public gridLoader: GridLoader<Genre> = new GridLoader("/genre");
    public gridColumns: GridColumn[] = [
        {name: "#"},
        {name: "Наименование"}
    ];
}