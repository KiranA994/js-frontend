class Landing {
    dataBase = {
        "Milan": {
            username: 'Milan',
            password: 'Milan123'
        },
        "Manu":{
            username:'Manu',
            password:'Manu123'
        },
        "Anu":{
            username:'Anu',
            password:'Anu123'
        },
        "Manuel":{
            username:'Manuel',
            password:'Manuel123'
        }
    }

    save(){
        if(this.dataBase){
            localStorage.setItem('dataBase',JSON.stringify(this.dataBase));
        }

    }

    getData(){
        this.dataBase =  JSON.parse(localStorage.getItem('dataBase'));
    }

    register(){
        this.getData();
        let user = regUser.value;
        let pass = regPswd.value;
        if(user == '' || pass == ''){
            alert('Please fill the credentials');
        }
        else{
            if(user in this.dataBase){
                alert('username already exists');
            }
            else{
                this.dataBase[user] = {username:user,password:pass};
                this.save();
                alert('User added successfully');
                // for navigation
                window.location = 'index.html'
            }
        }
    }

    login(){
        
        let luser = loginUser.value;
        let lpass = loginPswd.value;
        this.getData();
        if(luser == '' || lpass == ''){
            alert('Please fill the form Credentials');
        }
        else{
            if(luser in this.dataBase){
                if(this.dataBase[luser].password == lpass){
                    alert('Login Successfull');
                    localStorage.setItem('user', luser);
                    window.location = 'home.html';
                }
                else{
                    alert('Invalid Username or Password');
                }
            }
            else{
                alert('Invalid Username or Password');
            }
        }

    }


}


const obj = new Landing()
obj.getData();