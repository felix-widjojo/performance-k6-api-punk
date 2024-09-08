export class BaseQueryParameters {
    static create() {
        return Object.create(this.prototype);
    }

    _build() {
        return JSON.parse(JSON.stringify(this));
    }

    buildQuery() {
        const result = [];
        const data = this._build();
        Object.keys(data)
            .forEach((key) => {
                const encode = encodeURIComponent;
                result.push(encode(key) + "=" + encode(data[key]));
            });

        return result.join("&");
    }
}
