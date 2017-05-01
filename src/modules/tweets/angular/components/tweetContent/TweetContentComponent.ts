import {ContentModel} from "../../../core/models/impl/ContentModel";
export class TweetContentComponent implements ng.IComponentOptions {
    public controller: any = TweetContentController;
    public template: string = `
        <div>
            <h2>Welcome to Javascript Dojo!</h2>
            <p>This is a boilerplate...</p>

        </div>
    `;
}
export class TweetContentController {
    public static $inject: Array<string> = ["ContentModel"];
    constructor(public model: ContentModel) {
    }
}
