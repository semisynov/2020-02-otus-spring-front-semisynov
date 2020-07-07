import {Author} from "@/model/Author";
import {Genre} from "@/model/Genre";

export interface Book {
    id: string;
    title: string;
    authors: Author[];
    genres: Genre[];
}