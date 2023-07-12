function DSKH() {
    this.arrKH = []
    // THêm nhân Viên
    this.themKH = function () {
        dsnv.arrKH.push(khach)
    }
    // Tìm nhân viên
    this.timKH = function (A) {
        for (var i = 0; i < this.arrNV.length; i++) {
            var kh = this.arrKH[i].account;
            if (kh === A) {
                return i
            }
        }return -1
    }
    // Xóa Nhân Viên
    this.xoaNV = function (A) {
        var index = this.timNV(A)
        if (index !== -1) {
            this.arrNV.splice(index, 1)
        }
    }
    // Cập nhật Nhân Viên
    this.UpdateNV = function (A) {
        var index = this.timNV(A.accountNV)
        console.log(A)
        if (index !== -1) {
            this.arrNV[index] = A
        }
    }

}