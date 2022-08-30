//! Cria a função de autenticação:
const auth = (req, res, next) => {
    console.log(req.session.logado);
    if(req.session.logado){
        next();
    }
    else{
        return res.redirect('/login');
    }
}

//! Exporta o módulo de autenticação:
module.exports = auth;
