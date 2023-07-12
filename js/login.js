function getElement (selector) {
    return document.querySelector(selector)
}
var dskh = new DSKH()
function getinfoKH(){
    var account = getElement('#account')
    var email = getElement('#email')
    var phone = getElement('#phone')
    var pass = getElement('#pass')
    var khach = new Khach (account,email,phone,pass)
    return khach
}
getElement('#btn-register').onclick = function () {
    var nhanvien = getinfoKH()
    dsnv.arrNV.push(khach)
    console.log('khach', khach)
    renderdata()
    setLocalStorage()
}
// render danh sách
function renderdata(arrNV = dsnv.arrNV) {
    var content = ''
    for (var i = 0; i < arrNV.length; i++) {
        var kh = dsnv.arrNV[i]
        content += `$<tr>
                        <td>${kh.accountNV}</td>
                        <td>${kh.tenNV}</td>
                        <td>${kh.email}</td>
                        <td>${kh.date}</td>
                        <td>${kh.posi}</td>
                        <td>${kh.calWage()}</td>
                        <td>${kh.rank()}</td>
                        <td>
                            <button class='btn btn-success mb-3' onclick="updateData('${nv.accountNV}')">Edit</button>
                            <button class='btn btn-danger' onclick="deteleData('${nv.accountNV}')">Delete</button>
                        </td>
                    $</tr>`
    }
    getElement('#tableDanhSach').innerHTML = content
}