import { Component, Vue } from "vue-property-decorator";
import Grid from "@/components/Grid/Grid.vue";
import GridLoader from "@/components/Grid/GridLoader";
import { GridColumn } from "@/components/Grid/model/GridColumn";
import { Author } from "@/model/Author";

@Component({components: {grid: Grid}})
export default class Authors extends Vue {
    public gridLoader: GridLoader<Author> = new GridLoader("/author");
    public gridColumns: GridColumn[] = [
        {name: "#"},
        {name: "Имя"}
    ];

    private createAuthor(): void {
        this.$router.push(`/author/add`);
    }
}