export const required = name => {
    throw new Error(`Parameter ${name} is required`);
};

export function buildQuery(data) {
    const result = [];

    Object.keys(data)
        .forEach((key) => {
            const encode = encodeURIComponent;
            result.push(encode(key) + "=" + encode(data[key]));
        });

    return result.join("&");
}