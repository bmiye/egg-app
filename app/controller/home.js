module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            await this.ctx.render('index')
        }

        async new() {
            await this.ctx.render('add');
        }

    }
    return HomeController
}