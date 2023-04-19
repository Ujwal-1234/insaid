document.getElementById('close').style.display='none'
document.getElementById('auth_form').style.display='none'
function _auth(){
    document.getElementById('close').style.display='inline'
    document.getElementById('auth').style.display='none'
    document.getElementById('auth_form').style.display='block'
}
function _close(){
    document.getElementById('auth_form').style.display='none'
    document.getElementById('close').style.display='none'
    document.getElementById('auth').style.display='inline'
}