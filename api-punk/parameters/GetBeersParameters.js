import { required } from "../../libs/util.js"
import { BaseQueryParameters } from "../../libs/classes/BaseQueryParameters.js"

export class GetBeersParameters extends BaseQueryParameters {
    constructor(
        page,
        perPage,

    ) {
        super();
        this.page = page;
        this.per_page = perPage;
    }
}
