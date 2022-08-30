//! Cria a classe de Controle da Seção:
class SessionController{
    async home(req, res){
        if(req.session.logado){
            return res.redirect('home');
        }

        return res.render('pages/login');
        
    }

    //* Cria o método de logar:
    logar(req, res){
        let user = {
            email: 'ojuara@gmail.com',
            password: '123456'
        };

        const { email, password } = req.body;

        if(!(email === user.email && password === user.password)){
            return res.render('pages/login');
        }

        req.session.logado = true;
        return res.redirect('home');
    }
    //* Define o método de Logout:
    logout(req, res){
        req.session.logado = false;
        return res.redirect('/login');
    }
}

//! Exporta a classe instanciada:
module.exports = new SessionController();
