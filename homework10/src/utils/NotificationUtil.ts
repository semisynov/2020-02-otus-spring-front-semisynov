import {Vue} from "vue/types/vue";

export default class NotificationUtil {

    public static error(vue: Vue, text: string) {
        vue.$notify({
            group: "library",
            type: "error",
            title: "Ошибка",
            duration: 4000,
            text: text
        });
    }

    public static success(vue: Vue, text: string) {
        vue.$notify({
            group: "library",
            type: "success",
            duration: 4000,
            text: text
        });
    }
}