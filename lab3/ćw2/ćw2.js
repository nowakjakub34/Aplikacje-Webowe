const generate = document.getElementById("generate");
generate.addEventListener("click",function(){
    const min = Number(document.getElementById("minLength").value);
    const max = Number(document.getElementById("maxLength").value);
    const upperCase = document.getElementById("upperCase").checked;
    const specialChar = document.getElementById("specialCharacters").checked;

    if (min>max){
        alert("Error:  min_length is bigger then max_length");
        return;
    }
    let chars ="qwertyuiopasdfghjklzxcvbnm";
    if (upperCase){
        chars +="QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (specialChar){
        chars+="!@#$%^&*()_-+={[]}:;'<,>.?/";
    }
    const length = Math.floor(Math.random()*(max-min+1))+min;
    let res = "";
    for (let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*chars.length);
        res+=chars[randomIndex];
    }
    alert("Generated password: "+res)
})