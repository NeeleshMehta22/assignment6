var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//enum for diferent users
var Role;
(function (Role) {
    Role[Role["Superadmin"] = 0] = "Superadmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Subscriber"] = 2] = "Subscriber";
})(Role || (Role = {}));
//class model contain properties that are in json
var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
// some global variables used in code
var rw;
var j = 0;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
var newrow = 0;
// class type decorator formatted on class Myclass which extends 
// the model class and crud interface 
var Myclass = /** @class */ (function (_super) {
    __extends(Myclass, _super);
    function Myclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create function which gonna create new row in table in ui for data entry
    Myclass.prototype.Create = function () {
        var add = document.getElementById("tble");
        var addr = add.insertRow();
        newrow = 1;
        var addc;
        for (var k = 0; k < 8; k++) {
            addc = addr.insertCell();
            addc.innerHTML = "<input id=\"inp" + k + "[" + j + "]\">";
        }
        var btns = document.createElement('td');
        btns.innerHTML = "\n    <button id=\"Editing\" onClick=\"new Myclass().Update(this," + j + ")\">Edit</button>\n    <button id=\"Cancel[" + j + "]\" onClick=\"new Myclass().Cancel(" + j + ")\" disabled>Cancel</button>\n    <button id=\"Save\" onClick=\"new Myclass().Save(" + j + ")\">Save</button>\n    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + j + ")\">Delete</button>";
        addr.appendChild(btns);
        j++;
    };
    // read function which gonna read the data from json file
    Myclass.prototype.Read = function () {
        var _this = this;
        document.getElementById("load").innerHTML = "RefreshData";
        var tab = "<div class=\"table\"><table align=\"center\" id=\"tble\"><tr>";
        tab += "<th>User Id</th>";
        tab += "<th>First Name</th>";
        tab += "<th>Middle Name</th>";
        tab += "<th>Last Name</th>";
        tab += "<th>Email</th>";
        tab += "<th>Phone No.</th>";
        tab += "<th>Role</th>";
        tab += "<th>Address</th>";
        tab += "<th></th></tr>";
        var vl = "<tr class='myrow'>";
        fetch("/users")
            .then(function (response) { return response.json(); })
            .then(function (json) {
            json.forEach(function (user) {
                _this.UserId = user.id;
                _this.firstname = user.firstname;
                _this.middlename = user.middlename;
                _this.lastname = user.lastname;
                _this.email = user.email;
                _this.phonenumber = user.phonenumber;
                _this.role = user.role;
                _this.address = user.address;
                vl += "<td><input id='inp0[" + j + "]'  value=\"" + _this.UserId + "\" disabled></td>";
                vl += "<td><input id='inp1[" + j + "]'  value=\"" + _this.firstname + "\" disabled></td>";
                vl += "<td><input id='inp2[" + j + "]'  value=\"" + _this.middlename + "\" disabled></td>";
                vl += "<td><input id='inp3[" + j + "]'  value=\"" + _this.lastname + "\" disabled></td>";
                vl += "<td><input id='inp4[" + j + "]'  value=\"" + _this.email + "\" disabled></td>";
                vl += "<td><input id='inp5[" + j + "]'  value=\"" + _this.phonenumber + "\" disabled></td>";
                vl += "<td><input id='inp6[" + j + "]'  value=\"" + _this.role + "\" disabled></td>";
                vl += "<td><input id='inp7[" + j + "]'  value=\"" + _this.address + "\" disabled></td>";
                // adding buttons for crud operations
                vl += "<td id=\"btn1\"> \n                <button id=\"Editing\" onClick=\"new Myclass().Update(this," + j + ")\">Edit</button>\n                <button id=\"Cancel[" + j + "]\" onClick=\"new Myclass().Cancel(" + j + ")\" disabled>Cancel</button>\n                <button id=\"Save\" onClick=\"new Myclass().Save(" + j + ")\">Save</button>\n                <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + j + ")\">Delete</button> </td>";
                vl += "</tr>";
                j++;
            });
            document.getElementById("page").innerHTML = " " + tab + " " + vl + "\n                </table>    </div>";
        });
    };
    // update function for editing the data
    Myclass.prototype.Update = function (i, l) {
        if (newrow === 1) {
            alert("You are currently adding new data!");
            return;
        }
        var cn = document.getElementById("Cancel[" + l + "]");
        var input = document.getElementById("inp0[" + l + "]");
        if (newrow == 1) {
            input.disabled = false;
        }
        else {
            input.disabled = true;
        }
        cn.disabled = false;
        var input = document.getElementById("inp1[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp2[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp3[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp4[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp5[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp6[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        var input = document.getElementById("inp7[" + l + "]");
        input.disabled = false;
        cn.disabled = false;
        rw = document.getElementById("inp0[" + l + "]");
        value1 = rw.value;
        rw = document.getElementById("inp1[" + l + "]");
        value1 = rw.value;
        rw = document.getElementById("inp2[" + l + "]");
        value2 = rw.value;
        rw = document.getElementById("inp3[" + l + "]");
        value3 = rw.value;
        rw = document.getElementById("inp4[" + l + "]");
        value4 = rw.value;
        rw = document.getElementById("inp5[" + l + "]");
        value5 = rw.value;
        rw = document.getElementById("inp6[" + l + "]");
        value6 = rw.value;
        rw = document.getElementById("inp7[" + l + "]");
        value7 = rw.value;
    };
    // delete function for deleting the row 
    Myclass.prototype.Delete = function (i, r) {
        if (confirm("Are you sure to delete this record ?")) {
            var id = document.getElementById("inp0[" + r + "]").value;
            var del = i.parentElement.parentElement;
            console.log(id);
            fetch("/users/" + id, {
                method: "DELETE",
                body: JSON.stringify({
                    UId: id
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(function (res) {
                res.json;
            });
            var tab = document.getElementById("tble");
            tab.deleteRow(del.rowIndex);
            alert("Data deleted with User Id: " + id + " !!");
        }
    };
    // cancel for reterieve the old data 
    Myclass.prototype.Cancel = function (i) {
        rw = document.getElementById("inp1[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp1[" + i + "]' value=\"" + value1 + "\">";
        rw = document.getElementById("inp2[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp2[" + i + "]' value=\"" + value2 + "\">";
        rw = document.getElementById("inp3[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp3[" + i + "]' value=\"" + value3 + "\">";
        rw = document.getElementById("inp4[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp4[" + i + "]' value=\"" + value4 + "\">";
        rw = document.getElementById("inp5[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp5[" + i + "]' value=\"" + value5 + "\">";
        rw = document.getElementById("inp6[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp6[" + i + "]' value=\"" + value6 + "\">";
        rw = document.getElementById("inp7[" + i + "]").parentElement;
        rw.innerHTML = "<input id='inp7[" + i + "]' value=\"" + value7 + "\">";
    };
    // save function used to save the data after manipulation is done
    Myclass.prototype.Save = function (i) {
        var always = true;
        var cn = document.getElementById("Cancel[" + i + "]");
        var input0 = document.getElementById("inp0[" + i + "]");
        cn.disabled = true;
        var input1 = document.getElementById("inp1[" + i + "]");
        var letters = /^[A-Za-z]+$/;
        if (!input1.value.match(letters)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input2 = document.getElementById("inp2[" + i + "]");
        var letters = /^[A-Za-z]+$/;
        if (!input2.value.match(letters)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input3 = document.getElementById("inp3[" + i + "]");
        var letters = /^[A-Za-z]+$/;
        if (!input3.value.match(letters)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input4 = document.getElementById("inp4[" + i + "]");
        var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!input4.value.match(email)) {
            alert("Please Enter Valid Email");
            always = false;
        }
        cn.disabled = true;
        var input5 = document.getElementById("inp5[" + i + "]");
        var phoneno = /^\d{10}$/;
        if (!input5.value.match(phoneno)) {
            alert("Please Enter Valid number");
            always = false;
        }
        cn.disabled = true;
        var input6 = document.getElementById("inp6[" + i + "]");
        if (input6.value != "Superadmin" && input6.value != Role[1] && input6.value != Role[2]) {
            alert("Please Enter Valid Role");
            always = false;
        }
        cn.disabled = true;
        var input7 = document.getElementById("inp7[" + i + "]");
        var add = /^[a-zA-Z0-9\s,'-]*$/;
        if (!input7.value.match(add)) {
            alert("Please Enter Valid address");
            always = false;
        }
        cn.disabled = true;
        if (always) {
            if (newrow == 0) {
                fetch("/users/" + input0.value, {
                    method: "PUT",
                    body: JSON.stringify({
                        firstname: input1.value,
                        middlename: input2.value,
                        lastname: input3.value,
                        email: input4.value,
                        phonenumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then(function (res) {
                    res.json;
                });
                input0.disabled = true;
                input1.disabled = true;
                input2.disabled = true;
                input3.disabled = true;
                input4.disabled = true;
                input5.disabled = true;
                input6.disabled = true;
                input7.disabled = true;
            }
            else {
                fetch("/users/", {
                    method: "POST",
                    body: JSON.stringify({
                        id: input0.value,
                        firstname: input1.value,
                        middlename: input2.value,
                        lastname: input3.value,
                        email: input4.value,
                        phonenumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then(function (res) {
                    if (res.status != 404) {
                        res.json;
                        input0.disabled = true;
                        input1.disabled = true;
                        input2.disabled = true;
                        input3.disabled = true;
                        input4.disabled = true;
                        input5.disabled = true;
                        input6.disabled = true;
                        input7.disabled = true;
                        alert("Data saved successfully!");
                        newrow = 0;
                    }
                    else {
                        alert("Cannot update! UserId already exists");
                        input0.disabled = false;
                        input1.disabled = false;
                        input2.disabled = false;
                        input3.disabled = false;
                        input4.disabled = false;
                        input5.disabled = false;
                        input6.disabled = false;
                        input7.disabled = false;
                    }
                });
            }
        }
    };
    Myclass = __decorate([
        FormatDate(new Date())
    ], Myclass);
    return Myclass;
}(model));
// Decorator DateTime Function 
function FormatDate(dt) {
    return function (target, name, descriptor) {
        var dtm = document.getElementById("datetime");
        setInterval(function () {
            dtm.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
// main funcion 
function main() {
    var obj = new Myclass();
    obj.Read();
}
