import http from "axios";

export default class GridLoader<T> {
    private readonly apiUrl: string;

    public gridData: T[] | null = null;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    public loadData(): Promise<any> {
        const url = this.apiUrl;
        return http.get<T[]>(url)
            .then(response => {
                this.gridData = response.data;
            });
    }
}