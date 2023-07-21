function getElement(selector) {
    return document.querySelector(selector)
}
getElement('#btn-showCart').onclick = function(){
    document.querySelector('.buying').classList.add("show-buying")
}
getElement('#btn-closeCart').onclick = function(){
    document.querySelector('.buying').classList.remove("show-buying")
}
getElement('#btn-closeCart').onclick = function(){
    document.querySelector('.buying').classList.remove("show-buying")
}
document.getElementsByClassName(".btn-minus").onclick = function (){

}