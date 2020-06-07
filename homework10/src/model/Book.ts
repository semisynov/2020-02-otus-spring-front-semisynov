import {Author} from "@/model/Author";
import {Genre} from "@/model/Genre";
import {BookComment} from "@/model/Comment";

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    genres: Genre[];
    comments: BookComment[];
}