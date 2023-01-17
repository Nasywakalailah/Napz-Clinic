function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");

     if (inp_nama == "admin" && inp_pass == "integrity") {
         location.replace("dashboard.html");
        alert("Login berhasil")
     }
     else{
        alert("Login gagal")
     }
}