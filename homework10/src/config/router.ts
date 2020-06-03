import Vue from "vue"
import Router from "vue-router"
import Authors from "@/views/authors/Authors.vue";
import Genres from "@/views/genres/Genres.vue";
import Books from "@/views/books/Books.vue";
import AuthorEdit from "@/views/authors/card/AuthorEdit.vue";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/"
        },
        {
            path: "/book",
            component: Books
        },
        {
            path: "/author",
            component: Authors
        },
        {
            path: "/genre",
            component: Genres
        },
        {
            path: "/author/:authorId",
            component: AuthorEdit
        },
        {
            path: "/author/add",
            component: AuthorEdit
        }
    ]
});