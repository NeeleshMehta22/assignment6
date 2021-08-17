var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
//class users contain properties that are in json
var users = /** @class */ (function () {
    function users() {
    }
    return users;
}());
// some global letiables used in code
var row;
var initialRowCount = 0;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
var newRow = 0;
// class type decorator formatted on class Myclass which extends 
// the users class and crud interface 
var Myclass = /** @class */ (function (_super) {
    __extends(Myclass, _super);
    function Myclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create function which gonna create new row in table in ui for data entry
    Myclass.prototype.Create = function () {
        var add = document.getElementById("tble");
        var addRow = add.insertRow();
        newRow = 1;
        var addColumn;
        for (var k = 0; k < 8; k++) {
            addColumn = addRow.insertCell();
            addColumn.innerHTML = "<input id=\"inp" + k + "[" + initialRowCount + "]\">";
        }
        var btns = document.createElement('td');
        btns.innerHTML = "\n    <button id=\"Editing\" onClick=\"new Myclass().Update(this," + initialRowCount + ")\">Edit</button>\n    <button id=\"Cancel[" + initialRowCount + "]\" onClick=\"new Myclass().Cancel(" + initialRowCount + ")\" disabled>Cancel</button>\n    <button id=\"Save\" onClick=\"new Myclass().Save(" + initialRowCount + ")\">Save</button>\n    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + initialRowCount + ")\">Delete</button>";
        addRow.appendChild(btns);
        initialRowCount++;
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
        tab += "<th>address</th>";
        tab += "<th></th></tr>";
        var validation = "<tr class='myrow'>";
        fetch("/users/get")
            .then(function (response) { return response.json(); })
            .then(function (json) {
            json.forEach(function (user) {
                _this.userId = user.id;
                _this.firstName = user.firstname;
                _this.middleName = user.middlename;
                _this.lastName = user.lastname;
                _this.email = user.email;
                _this.phoneNumber = user.phonenumber;
                _this.role = user.role;
                _this.address = user.address;
                validation += "<td><input id='inp0[" + initialRowCount + "]'  value=\"" + _this.userId + "\" disabled></td>";
                validation += "<td><input id='inp1[" + initialRowCount + "]'  value=\"" + _this.firstName + "\" disabled></td>";
                validation += "<td><input id='inp2[" + initialRowCount + "]'  value=\"" + _this.middleName + "\" disabled></td>";
                validation += "<td><input id='inp3[" + initialRowCount + "]'  value=\"" + _this.lastName + "\" disabled></td>";
                validation += "<td><input id='inp4[" + initialRowCount + "]'  value=\"" + _this.email + "\" disabled></td>";
                validation += "<td><input id='inp5[" + initialRowCount + "]'  value=\"" + _this.phoneNumber + "\" disabled></td>";
                validation += "<td><input id='inp6[" + initialRowCount + "]'  value=\"" + _this.role + "\" disabled></td>";
                validation += "<td><input id='inp7[" + initialRowCount + "]'  value=\"" + _this.address + "\" disabled></td>";
                // adding buttons for crud operations
                validation += "<td id=\"btn1\"> \n                <button id=\"Editing\" onClick=\"new Myclass().Update(this," + initialRowCount + ")\">Edit</button>\n                <button id=\"Cancel[" + initialRowCount + "]\" onClick=\"new Myclass().Cancel(" + initialRowCount + ")\" disabled>Cancel</button>\n                <button id=\"Save\" onClick=\"new Myclass().Save(" + initialRowCount + ")\">Save</button>\n                <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + initialRowCount + ")\">Delete</button> </td>";
                validation += "</tr>";
                initialRowCount++;
            });
            document.getElementById("page").innerHTML = " " + tab + " " + validation + "\n                </table>    </div>";
        });
    };
    // update function for editing the data
    Myclass.prototype.Update = function (i, l) {
        if (newRow === 1) {
            alert("You are currently adding new data!");
            return;
        }
        var columnName = document.getElementById("Cancel[" + l + "]");
        var input0 = document.getElementById("inp0[" + l + "]");
        if (newRow == 1) {
            input0.disabled = false;
        }
        else {
            input0.disabled = true;
        }
        columnName.disabled = false;
        var input1 = document.getElementById("inp1[" + l + "]");
        input1.disabled = false;
        columnName.disabled = false;
        var input2 = document.getElementById("inp2[" + l + "]");
        input2.disabled = false;
        columnName.disabled = false;
        var input3 = document.getElementById("inp3[" + l + "]");
        input3.disabled = false;
        columnName.disabled = false;
        var input4 = document.getElementById("inp4[" + l + "]");
        input4.disabled = false;
        columnName.disabled = false;
        var input5 = document.getElementById("inp5[" + l + "]");
        input5.disabled = false;
        columnName.disabled = false;
        var input6 = document.getElementById("inp6[" + l + "]");
        input6.disabled = false;
        columnName.disabled = false;
        var input7 = document.getElementById("inp7[" + l + "]");
        input7.disabled = false;
        columnName.disabled = false;
        row = document.getElementById("inp0[" + l + "]");
        value1 = row.value;
        row = document.getElementById("inp1[" + l + "]");
        value1 = row.value;
        row = document.getElementById("inp2[" + l + "]");
        value2 = row.value;
        row = document.getElementById("inp3[" + l + "]");
        value3 = row.value;
        row = document.getElementById("inp4[" + l + "]");
        value4 = row.value;
        row = document.getElementById("inp5[" + l + "]");
        value5 = row.value;
        row = document.getElementById("inp6[" + l + "]");
        value6 = row.value;
        row = document.getElementById("inp7[" + l + "]");
        value7 = row.value;
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
                    "Content-type": "application/json; charset=UTF-8"
                }
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
        row = document.getElementById("inp1[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp1[" + i + "]' value=\"" + value1 + "\">";
        row = document.getElementById("inp2[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp2[" + i + "]' value=\"" + value2 + "\">";
        row = document.getElementById("inp3[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp3[" + i + "]' value=\"" + value3 + "\">";
        row = document.getElementById("inp4[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp4[" + i + "]' value=\"" + value4 + "\">";
        row = document.getElementById("inp5[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp5[" + i + "]' value=\"" + value5 + "\">";
        row = document.getElementById("inp6[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp6[" + i + "]' value=\"" + value6 + "\">";
        row = document.getElementById("inp7[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp7[" + i + "]' value=\"" + value7 + "\">";
    };
    // save function used to save the data after manipulation is done
    Myclass.prototype.Save = function (i) {
        var always = true;
        var columnName = document.getElementById("Cancel[" + i + "]");
        var input0 = document.getElementById("inp0[" + i + "]");
        columnName.disabled = true;
        var input1 = document.getElementById("inp1[" + i + "]");
        var letters1 = /^[A-Za-z]+$/;
        if (!input1.value.match(letters1)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        columnName.disabled = true;
        var input2 = document.getElementById("inp2[" + i + "]");
        var letters2 = /^[A-Za-z]+$/;
        if (!input2.value.match(letters2)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        columnName.disabled = true;
        var input3 = document.getElementById("inp3[" + i + "]");
        var letters = /^[A-Za-z]+$/;
        if (!input3.value.match(letters)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        columnName.disabled = true;
        var input4 = document.getElementById("inp4[" + i + "]");
        var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!input4.value.match(email)) {
            alert("Please Enter Valid Email");
            always = false;
        }
        columnName.disabled = true;
        var input5 = document.getElementById("inp5[" + i + "]");
        var phoneno = /^\d{10}$/;
        if (!input5.value.match(phoneno)) {
            alert("Please Enter Valid number");
            always = false;
        }
        columnName.disabled = true;
        var input6 = document.getElementById("inp6[" + i + "]");
        if (input6.value != "Superadmin" && input6.value != "Admin" && input6.value != "Subscriber") {
            alert("Please Enter Valid Role");
            always = false;
        }
        columnName.disabled = true;
        var input7 = document.getElementById("inp7[" + i + "]");
        var add = /^[a-zA-Z0-9\s,'-]*$/;
        if (!input7.value.match(add)) {
            alert("Please Enter Valid address");
            always = false;
        }
        columnName.disabled = true;
        if (always) {
            console.log("newRow", newRow);
            if (newRow === 0) {
                fetch("/users/" + input0.value, {
                    method: "PUT",
                    body: JSON.stringify({
                        firstName: input1.value,
                        middleName: input2.value,
                        lastName: input3.value,
                        email: input4.value,
                        phoneNumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
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
                fetch("/users/post", {
                    method: "POST",
                    body: JSON.stringify({
                        id: input0.value,
                        firstName: input1.value,
                        middleName: input2.value,
                        lastName: input3.value,
                        email: input4.value,
                        phoneNumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(function (res) {
                    console.log("data", res);
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
                        newRow = 0;
                    }
                    else {
                        alert("Cannot update! userId already exists");
                        input0.disabled = false;
                        input1.disabled = false;
                        input2.disabled = false;
                        input3.disabled = false;
                        input4.disabled = false;
                        input5.disabled = false;
                        input6.disabled = false;
                        input7.disabled = false;
                    }
                })["catch"](function () {
                    console.log("error");
                });
            }
        }
    };
    Myclass = __decorate([
        FormatDate(new Date())
    ], Myclass);
    return Myclass;
}(users));
// Decorator DateTime Function 
function FormatDate(dt) {
    return function (target, name, descriptor) {
        var dateTime = document.getElementById("datetime");
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
// main funcion 
function main() {
    var obj = new Myclass();
    obj.Read();
}
