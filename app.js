function talk(){  
    var know = {  
     "Who are you" : "Hello, Rusty here!",  
     "How are you" : "Good :)",  
     "What can i do for you" : "Please Check out my website :https://rusty147.github.io/portfolio.github.io/.",  
     "Your github link" : " My github link is https://github.com/RUSTY147",  
     "ok" : "Thank You So Much ",  
     "Bye" : "Okay! Will meet soon.."  
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }  
