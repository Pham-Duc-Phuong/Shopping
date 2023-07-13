function getElement(selector) {
    return document.querySelector(selector)
}
var dskh = new DSKH()
function getinfoKH() {
    var account = getElement('#account').value;
    var email = getElement('#email').value;
    var phone = getElement('#phone').value;
    var pass = getElement('#pass').value;
    var khach = new Khach(account, email, phone, pass);
    return khach;
}
function getinfoKH_1 () {
    var account = getElement('#account-1').value;
    var email = getElement('#email-1').value;
    var phone = getElement('#phone-1').value;
    var pass = getElement('#pass-1').value;
    var khach = new Khach(account, email, phone, pass);
    return khach;
}
getElement('#btn-register-1').onclick = function info() {
    var khach = getinfoKH()
    dskh.arrKH.push(khach)
    console.log('khach', khach)
    renderdata()
    setLocalStorage()
}
getElement('#btn-register-2').onclick = function info() {
    var khach = getinfoKH()
    dskh.arrKH.push(khach)
    console.log('khach', khach)
    renderdata()
    setLocalStorage()
}

// render danh sách
function renderdata(arrKH = dskh.arrKH) {
    var content = ''
    for (var i = 0; i < arrKH.length; i++) {
        var kh = dskh.arrKH[i]
        content += `<tr>
                        <td>${kh.account}</td>
                        <td>${kh.email}</td>
                        <td>${kh.phone}</td>
                        <td>${kh.pass}</td>
                        <td>
                            <div class='d-flex justify-content-center align-items-center'>
                            <button class='btn button-edit' type="button" data-bs-toggle="modal"
                            data-bs-target="#myModal-add" onclick="updateData('${kh.account}')"><i class="fa-solid fa-pen"></i> Chỉnh sửa</button>
                            <button class='btn button-delete' onclick="deteleData('${kh.account}')"><i class="fa-solid fa-trash-can"></i>
                            Xóa</button>
                            </div>
                        </td>
                    </tr>`
    }
    getElement('#tableDanhSach').innerHTML = content
}
// lưu vào localStorage
function setLocalStorage() {
    var kh = JSON.stringify(dskh.arrKH)
    localStorage.setItem('dskh', kh)
}
// get data from localStorage
function getDataLocalStorage() {
    var data = localStorage.getItem('dskh');
    var parseData = JSON.parse(data);
    var arr = [];
    // b2:  duyệt mảng được lấy từ local
    for (var i = 0; i < parseData.length; i++) {
        var kh = parseData[i]
        var khach = new Khach(kh.account, kh.email, kh.phone, kh.pass)
        arr.push(khach)
    }
    dskh.arrkh = arr
    renderdata()
}
getDataLocalStorage()
// Xóa data dữ liệu
function deteleData(A) {
    dskh.xoaKH(A)
    renderdata()
    setLocalStorage()
}
// Edit data
function updateData(account) {
    var index = dskh.timKH(account)
    var kh = dskh.arrKH[index]
    var account = getElement('#account').value
    var email = getElement('#email').value
    var phone = getElement('#phone').value
    var pass = getElement('#pass').value
}
getElement('#btn-update').onclick = function(){
    var khach = getinfoKH()
    dskh.UpdateKH(khach)
    renderdata()
    setLocalStorage()
}