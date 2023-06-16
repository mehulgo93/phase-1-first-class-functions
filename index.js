function receivesAFunction(spy) {
      console.log(spy());
}
function spy() {
    console.log("This is a callback function");
}



function returnsANamedFunction() {
    return function flatiron() {
        console.log("This is a named function");
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        console.log("");
    }
}