function getElement(selector) {
    return document.querySelector(selector)
}
var dskh = new DSKH()
function getinfoKHadd() {
    var account = getElement('#account-add').value;
    var email = getElement('#email_add').value;
    var phone = getElement('#phone_add').value;
    var pass = getElement('#pass_add').value;
    var khach = new Khach(account, email, phone, pass);
    return khach;
}

getElement('#btn-register-1').onclick = function info() {
    var khach = getinfoKHadd()
    dskh.arrKH.push(khach)
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
    var account = getElement('#account-add').value
    var email = getElement('#email-add').value
    var phone = getElement('#phone-add').value
    var pass = getElement('#pass-add').value
}
getElement('#btn-update').onclick = function(){
    var khach = getinfoKHadd()
    dskh.UpdateKH(khach)
    renderdata()
    setLocalStorage()
}