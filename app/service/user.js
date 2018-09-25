module.exports = app => {
    class UserService extends app.Service {
        async index(params) {
            const {
                url,
            } = this.config.user;
            const result = await this.ctx.curl(`http://127.0.0.1:7001/users`, {
                dataType: 'json',
                data: params
            });

            return result;
        }

        async update(params) {
            const {
                url,
            } = this.config.user;
            const result = await this.ctx.curl(`http://127.0.0.1:7001/users/:id`, {
                method: 'PUT',
                contentType: 'json',
                data: params,
                dataType: 'json',
            });

            return result;
        }

        async destroy(id) {
            const data = {
                'id': id
            }
            console.log(id);
            const result = await this.ctx.curl('http://127.0.0.1:7001/users/:id', {
                method: 'DELETE',
                contentType: 'json',
                data: data,
                dataType: 'json',
            });

            return result;
        }
    }
    return UserService
}