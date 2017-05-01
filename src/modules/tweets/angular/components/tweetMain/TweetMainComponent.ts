import {SharedModel} from "../../../core/models/impl/SharedModel";
export class TweetMainComponent implements ng.IComponentOptions {
    public controller: any = TweetMainController;
    public template: string = `
      <tweet-content></tweet-content>
    `;
}
export class TweetMainController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
