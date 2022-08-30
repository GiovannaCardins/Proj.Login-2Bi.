//! Cria a classe de controller:
class HomeController{
    index(req, res) {
        res.render('index');
    }
    home(req, res){
        res.render('pages/home');
    }
}

//! Exportar o HomeController:
module.exports = new HomeController();
