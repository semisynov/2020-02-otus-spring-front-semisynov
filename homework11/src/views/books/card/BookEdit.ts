import {Component, Vue} from "vue-property-decorator";
import NotificationUtil from "@/utils/NotificationUtil";
import {Book} from "@/model/Book";
import {Author} from "@/model/Author";
import {Genre} from "@/model/Genre";
import GridLoader from "@/components/Grid/GridLoader";
import {GridColumn} from "@/components/Grid/model/GridColumn";
import Grid from "@/components/Grid/Grid.vue";

@Component({components: {grid: Grid}})
export default class BookEdit extends Vue {
    public book: Book = {} as Book;
    private allAuthors: Author[] | null = null;
    private allGenres: Genre[] | null = null;

    private selectedAuthor: Author[] = [];
    private selectedGenre: Genre[] = [];

    private textComment: string | null = null;

    public gridCommentLoader: GridLoader<Comment> | null = null;
    public gridCommentColumns: GridColumn[] = [
        {name: "Дата"},
        {name: "Текст"}
    ];

    private created(): void {
        this.fillForm();
        if (!this.$route.params.bookId || this.$route.path == "/book/add") {
            return;
        }
        this.book.id = this.$route.params.bookId;
        this.gridCommentLoader = new GridLoader<Comment>(`/comment/${this.book.id}`);
        this.getBookById();
    }

    private fillForm(): void {
        this.getAuthorList();
        this.getGenreList();
    }

    private getBookById(): void {
        this.$http.get("/book/" + this.book.id)
            .then(response => {
                this.book = response.data;
                this.selectedAuthor = this.book.authors;
                this.selectedGenre = this.book.genres;
            })
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public saveBook(): void {
        this.fillBookInfo();
        this.$http.post("/book", this.book)
            .then(response => {
                    this.book = response.data;
                    NotificationUtil.success(this, "Книга успешно создана");
                    this.$router.push(`/book/${this.book.id}`);
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public updateBook(): void {
        this.fillBookInfo();
        this.$http.put("/book/" + this.book.id, this.book)
            .then(response => {
                    this.book = response.data;
                    NotificationUtil.success(this, "Книга успешно сохранена");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    public deleteBook(): void {
        this.$http.delete("/book/" + this.book.id)
            .then(() => {
                    this.$router.push(`/book`);
                    NotificationUtil.success(this, "Книга успешно удалёна");
                }
            )
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    private getAuthorList(): void {
        this.$http.get("/author")
            .then(response => {
                this.allAuthors = response.data;
            })
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    private getGenreList(): void {
        this.$http.get("/genre")
            .then(response => {
                this.allGenres = response.data;
            })
            .catch(error => NotificationUtil.error(this, error.response.data.message));
    }

    private fillBookInfo(): void {
        this.book.authors = this.selectedAuthor;
        this.book.genres = this.selectedGenre;
    }

    public handleOk(): void {
        if (this.textComment) {
            const formData = new FormData();
            formData.append("text", this.textComment);
            this.$http.post(`/comment/${this.book.id}`, formData)
                .then(_ => {
                        NotificationUtil.success(this, "Комментарий успешно сохранён");
                        this.$router.push(`/book/${this.book.id}`);
                    }
                )
                .catch(error => NotificationUtil.error(this, error.response.data.message));
        }
    }
}