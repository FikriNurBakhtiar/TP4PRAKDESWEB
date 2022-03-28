function getBiodata()
{
    document.getElementById('table-output').style.display = "block";
    nama = document.querySelector('#name').value;
    birthday = document.querySelector('#birthday').value;
    gender = document.querySelector('.form-gender input:checked').value;
    hobby = document.querySelectorAll('.form-hobby input:checked');
    religion = document.querySelector('#religion').value;
    message = document.querySelector('#message').value;
    const output = document.querySelectorAll('.table-value');
    
    output[0].innerHTML = nama;
    output[1].innerHTML = birthday;
    output[2].innerHTML = gender;
    for (let i = 0; i < hobby.length; i++) {
        if(i > 0) {
            output[3].innerHTML += ", ";
        }
        output[3].innerHTML += hobby[i].value;
    }
    output[4].innerHTML = religion;
    output[5].innerHTML = message;
}