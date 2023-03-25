function  receivesAFunction(argue) {
argue();
}

receivesAFunction(function (){
    return 2+3
})

function returnsANamedFunction(){
    return function late(){
        return 2+3
    }
}
function returnsAnAnonymousFunction(){
    return function () {
        return 2+2;
    }
}