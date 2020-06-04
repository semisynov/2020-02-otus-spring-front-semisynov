import {Component, Vue} from "vue-property-decorator";
import {Author} from "@/model/Author";
import NotificationUtil from "@/utils/NotificationUtil";
import {BvEvent} from "bootstrap-vue";

@Component
export default class AuthorsEdit extends Vue {
    public author: Author = {} as Author;

    private created(): void {
        if (!this.$route.params.authorId || this.$route.path == "/author/add") {
            return;
        }
        this.author.id = parseInt(this.$route.params.authorId);
        this.getAuthorById();
    }

    private getAuthorById(): void {
        this.$http.get("/author/" + this.author.id)
            .then(response => {
                this.author = response.data;
            })
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public saveAuthor(): void {
        this.$http.post("/author", this.author)
            .then(response => {
                    this.author = response.data;
                    NotificationUtil.success(this, "Автор успешно создан");
                    this.$router.push(`/author/${this.author.id}`);
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public updateAuthor(): void {
        this.$http.put("/author/" + this.author.id, this.author)
            .then(response => {
                    this.author = response.data;
                    NotificationUtil.success(this, "Автор успешно сохранен");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public deleteAuthor(): void {
        this.$http.delete("/author/" + this.author.id)
            .then(() => {
                    this.$router.push(`/author`);
                    NotificationUtil.success(this, "Автор успешно удалён");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }
}