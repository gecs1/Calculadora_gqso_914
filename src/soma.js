function Soma (a, b){
    if(isNaN(a)){
        return res.status(400).send('Número inválido')
    }else if(isNaN(b)){
        return res.status(400).send('Número inválido')
    }

    let result = Number(a) + Number(b);
    return result;
}
module.exports=Soma;