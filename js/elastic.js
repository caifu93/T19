function Eject() {
    var confirmBtnText = "Confirm";
    var confirmcancelText = "Cancel";

    if (localStorage.getItem("lang")) {
        switch (localStorage.getItem("lang")) {
            case "fan":
                confirmBtnText = "確定";
                confirmcancelText = "取消";
                break;
            case "en":
                confirmBtnText = "Confirm";
                confirmcancelText = "Cancel";
                break;
            case "kor":
                confirmBtnText = "확정";
                confirmcancelText = "취소";
                break;
            case "jp":
                confirmBtnText = "を選択します";
                confirmcancelText = "キャンセル";
                break;
        }
    }

    var _this = this;
    var qback = $('<div class="qback"></div>')
    _this.Ealert = function(obj) {
        var alertBox = $('<div class="alertBox"></div>')
        var alertHead = $('<div class="alertHead">' + obj.title + '</div>')
        var alertMes = $('<div class="alertMes">' + obj.message + '</div>')
        var alertBtn = $('<span class="alertBtn">'+ confirmBtnText + '</span>').on('click', function() {
            qback.remove();
            alertBox.remove();
        })
        alertBox.append(alertHead);
        alertBox.append(alertMes);
        alertBox.append(alertBtn);
        qback.append(alertBox);
        $('body').append(qback);
        alertBox.css({
            'marginTop': -alertBox.outerHeight() / 2 + 'px'
        });
    }
    _this.Econfirm = function(obj) {
        var confirmBox = $('<div class="alertBox"></div>')
        var confirmHead = $('<div class="alertHead">' + obj.title + '</div>')
        var confirmMes = $('<div class="alertMes">' + obj.message + '</div>')
        var confirmBtn = $('<span class="ConBtn">' + confirmBtnText + '</span>').on('click', function() {
            qback.remove()
            confirmBox.remove()
            setTimeout(function() {
                obj.define()
            }, 100)
        })
        var confirmcancel = $('<span class="cancel">' + confirmcancelText + '</span>').on('click', function() {
            qback.remove()
            confirmBox.remove()
            setTimeout(function() {
                obj.cancel()
            }, 100)
        })
        confirmBox.append(confirmHead);
        confirmBox.append(confirmMes);
        confirmBox.append(confirmBtn);
        confirmBox.append(confirmcancel);
        qback.append(confirmBox);
        $('body').append(qback);
        confirmBox.css({
            'marginTop': -confirmBox.outerHeight() / 2 + 'px'
        });
    }
    ,
    _this.Etoast = function(mes, time) {
        var timer = null;
        var ToastBox = $('<div class="ToastBox">' + mes + '</div>')
        qback.append(ToastBox);
        $('body').append(qback);
        ToastBox.css({
            'marginTop': -ToastBox.outerHeight() / 2 + 'px'
        });
        clearInterval(timer)
        timer = setInterval(function() {
            time--
            if (time <= 0) {
                clearInterval(timer)
                qback.remove()
                ToastBox.remove()
            }
        }, 1000)
    }
}


var Ealt = new Eject()