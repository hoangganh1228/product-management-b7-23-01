// [GET] /a
module.exports.index = (req, res) => {
    res.render("client/pages/homes/index", {
        pageTitle: "Trang chu"
    }) 
}