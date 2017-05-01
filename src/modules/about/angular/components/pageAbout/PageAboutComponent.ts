export class PageAboutComponent implements ng.IComponentOptions {
    public template: string = `
    <div class="container-fluid">
        <h1><i class="fa fa-info-circle"></i>&nbsp;About</h1>
        This repo is a hack of the boilerplate written By <a href="http://brecht.io">Brecht Billiet</a>.
        <p>Our main purpse here is to learn how we can use angular1 and typescript together.</p>

    </div>`;
}
