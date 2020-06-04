import {Component, Vue} from "vue-property-decorator";
import NotificationUtil from "@/utils/NotificationUtil";
import {Genre} from "@/model/Genre";

@Component
export default class GenreEdit extends Vue {
    public genre: Genre = {} as Genre;

    private created(): void {
        if (!this.$route.params.genreId || this.$route.path == "/genre/add") {
            return;
        }
        this.genre.id = parseInt(this.$route.params.genreId);
        this.getGenreById();
    }

    private getGenreById(): void {
        this.$http.get("/genre/" + this.genre.id)
            .then(response => {
                this.genre = response.data;
            })
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public saveGenre(): void {
        this.$http.post("/genre", this.genre)
            .then(response => {
                    this.genre = response.data;
                    NotificationUtil.success(this, "Жанр успешно создан");
                    this.$router.push(`/genre/${this.genre.id}`);
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public updateGenre(): void {
        this.$http.put("/genre/" + this.genre.id, this.genre)
            .then(response => {
                    this.genre = response.data;
                    NotificationUtil.success(this, "Жанр успешно сохранен");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public deleteGenre(): void {
        this.$http.delete("/genre/" + this.genre.id)
            .then(() => {
                    this.$router.push(`/genre`);
                    NotificationUtil.success(this, "Жанр успешно удалён");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }
}