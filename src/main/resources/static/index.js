 var users=[
{
    "name": "John Doe",
    "gender": "MALE",
    "img":"john.png",
},
{
    "name": "Jane Doe",
    "gender": "FEMALE",
    "img":"jane.png",

},
{
    "name":"mickey mouse",
    "gender":"male",
    "img":"mickey.png",

}
{
    "name":"SPIDER MAN",
    "gender":"male",
    "img":"spider.png",
    
}
 ]

 var id=0;
 function toggleuser(){
    id=(id+1)%users.length;
    var userimage=document.getElementById("user-image");
    userimage.src=users[id].img;
    var username=document.getElementById("user-name");
    username.innerHTML=users[id].name;
    var usergender=document.getElementById("user-gender");
    usergender.innerHTML=users[id].gender;
 }
 