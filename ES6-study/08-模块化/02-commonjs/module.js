function Modoule(id='',parent){
    this.id = id;
    this.parent=parent;

}

//script是我们写的代码，因此在script中可以直接访问到export require _filename _dirname 等
Modoule.wrap = function (script){
    return (
        '(function (exports, require, module, __filename, __dirname) {' +
        script +
        '\n})'
    );
}