let n=parseInt(prompt("Enter the number"));

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        if(j==1 || j==i){
            document.write("* ");
        }
       else{
            document.write("&nbsp&nbsp&nbsp");
       }
    }
    for(let k=(n-1);k>=i;k--){
        document.write("&nbsp&nbsp&nbsp");
    }
    for(let m=(n-1);m>=i;m--){
       
        document.write("&nbsp&nbsp&nbsp");
    }
    for(let p=1;p<=i;p++){
        if(p==1 || p==i){
            document.write("* ");
        }
       else{
            document.write("&nbsp&nbsp&nbsp");
       }
    }
    document.write("<br>");
}


for(let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        if(j==n || j==i){
            document.write("* ");
        }
       else{
            document.write("&nbsp&nbsp&nbsp");
       }
    }
    for(let k=2;k<=i;k++){
        document.write("&nbsp&nbsp&nbsp")
    }
    for(let m=2;m<=i;m++){
        document.write("&nbsp&nbsp&nbsp")
    }
    for(let p=n;p>=i;p--){
        if(p==n || p==i){
            document.write("* ");
        }
       else{
            document.write("&nbsp&nbsp&nbsp");
       }
    }
    document.write("<br>");
}