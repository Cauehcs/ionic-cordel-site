export class MailChimp {
    constructor() {
        this.mailchimp = require("@mailchimp/mailchimp_marketing");
        this.mailchimp.setConfig({
            apiKey: "cdd615cddcbfa18637c3d4a25f33f183-us6",
            server: "us6",
        });
    }
    async run() {
        console.log(this.mailchimp);
        const response = await this.mailchimp.ping.getWithHttpInfo().catch((err) => {
            console.log(err);
        });
        console.log(response);
    }
}