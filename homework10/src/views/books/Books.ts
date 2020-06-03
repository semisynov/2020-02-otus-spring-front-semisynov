import { Component, Vue } from "vue-property-decorator";
import Grid from "@/components/Grid/Grid.vue";
import GridLoader from "@/components/Grid/GridLoader";
import { GridColumn } from "@/components/Grid/model/GridColumn";
import { Book } from "@/model/Book";

@Component({ components: { grid: Grid } } )
export default class Books extends Vue {
    public gridLoader: GridLoader<Book> = new GridLoader("/book");
    public gridColumns: GridColumn[] = [
        { name: "#" },
        { name: "Название" },
        { name: "Авторы" },
        { name: "Жанры" }
    ];
}