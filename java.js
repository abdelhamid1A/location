var slider_content = document.getElementById('box');

// contain images in an array
var image = ['a','b', 'c', 'd','e', 'f'];

var i=0 ;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i+=1;
  }else{
      i = 1;
  }
  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


// function for prew slide

function prewImage(){

  if ( i>1) {
      i-= 1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}


// script for auto image slider

  // setInterval(nextImage , 3000);
  // start valide full name
  function validename(){
    var name = document.getElementById('name').value;
    var er = document.getElementById('erreur1');
    if(name.match(/^[A-Za-z ]{7,18}$/)){
      text = 'le nom est valid';
      er.innerHTML = text;
      er.style.color = "green";
      return true;
    }else{
      text = "le nom est n'est pas valid";
      er.innerHTML = text;
      er.style.color = "red";
      return false;
    }
  }
   // end valide full name

// start validation email
function validemail(){
  var email = document.getElementById('email').value;
  var er = document.getElementById('erreur2');
  if (email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "email est valide";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = "email est invalide";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
    
  }

}
// end validation email
// start valid pass
function validpass(){
  var pass = document.getElementById("pass1").value;
  var er = document.getElementById('erreur3');
  if(pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
    text = "mot de passe est valid";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = "mot de passe est INvalid";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
  }
}
// end valid pass

  // start ravalidpass
  function revalidpass(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var er = document.getElementById("erour");
    if(pass1 == pass2){
      text = "mot de passe correct";
      er.innerHTML = text;
      er.style.color = "green";
      return true;


    }else{
      text = "Vous n'avez pas saisi deux fois le même mot de passe";
      er.innerHTML = text;
      er.style.color= "red";

      return false;
    }
  }
  // end ravalidpass
  // start submit validation
  function validation(){
    // var btn = document.getElementById('sub');
    if( validename() == true && validemail() == true && validpass() == true && revalidpass() == true){
      alert('votre infor est envoye ');
    }else{
      alert("votre infor est n'est pas envoye ");
    }
  }
    // end submit validation
