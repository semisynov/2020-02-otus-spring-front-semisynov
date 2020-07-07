import moment from "moment"

export default class DateTimeFormatter {
    public static filter(): Function {
        return (value: string) => {
            if (value) {
                return moment(value).format("DD.MM.YYYY HH:mm:ss")
            }
        }
    }
}