	
		var validateForm;
		function validateForm()
		{
		  var x=document.getElementById('username1').value;
		  var y=document.getElementById('password1').value;
			
		
		if(x.length < 4 || x.length > 24){
		 alert("用户名长度是4---24位哦");
		 // document.getElementById('err1').innerHTML=
			return false;
					                     }
							
		else if (y==null || y=="")
		{
					alert("密码必须填写");
					return false;
		}
		
		
						
		}	
var navs = document.querySelectorAll('.navs');
        var blocks = document.querySelectorAll('.blocks');
        for (i = 0; i < navs.length; i++) {
            // 为5个li设置自定义属性，用于当索引号
			
            navs[i].setAttribute('index', i);
            navs[i].onclick = function() {
                // 1.排他思想
                for (i = 0; i < navs.length; i++) {
                   navs[i].className = '';
                }
                this.className = 'blacksolid navs1';
                var index = this.getAttribute('index');
                // 这里只能用this，选中触发的事件，lis[i]则是循环最后的事件
                for (var i = 0; i < blocks.length; i++) {
                    blocks[i].style.display = "none";
                }
                blocks[index].style.display = "block";
            }
        }
const form = getElementById('form');
const username = getElementById('username');
const email = getElementById('email');
const password = getElementById('password');
const confirmPassword = getElementById('confirm-password')

form.addEventListener('submit', e => {
    e.preventDefault();

    const usernameValue = username.value.trim();
		
    if (usernameValue === '') {
        setErrorFor(username, '用户名不能为空')
    } else {
        setSuccessFor(username);
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getElementById(id) {
    return document.getElementById(id)
}
// ...
form.addEventListener('submit', e => {
    e.preventDefault();

    // ...
		const emailValue = email.value
    
    if (emailValue === '') {
        setErrorFor(email, '邮箱地址不能为空');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, '不正确的邮箱地址');
    } else {
        setSuccessFor(email)
    }
    //...
});

function isEmail(email) {
  return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
}
form.addEventListener('submit', e => {
    e.preventDefault();

    //...
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (passwordValue === '') {
        setErrorFor(password, '密码不能为空');
    } else {
        setSuccessFor(password)
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, '确认密码不能为空')
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, '两次密码不匹配')
    } else {
        setSuccessFor(confirmPassword)
    }
  	//...
});