var newName = document.getElementById('sitename')
var newUrl = document.getElementById('siteurl')

var sitecontainer = []
    if(localStorage.getItem('information') !=null) { //2
        sitecontainer=JSON.parse(localStorage.getItem('information'))
    }

function addData(){
    var siteData = {
        name : newName.value,
        url  : newUrl.value, 
    }
    sitecontainer.push(siteData)
    localStorage.setItem('information',JSON.stringify(sitecontainer)) //1
    // console.log(sitecontainer)
    displaysite()
    clearData()
}


function displaysite(){
    cartona=``
    for(var i = 0; i<sitecontainer.length; i++){
    cartona+=`
    <tr>                
        <td>${[i]}</td>
        <td>${sitecontainer[i].name}</td>
        
        <td><button class="btn btn-success"><a href="${sitecontainer[i].url}" class="text-white underline-none">Visit</a></button></td>
        <td><button onclick="deleteData(${[i]})" class="btn btn-danger"><a hrf=""></a>Delete</button></td>
    </tr>
    `
    }
    document.getElementById('demo').innerHTML=cartona
}
displaysite() //3

function clearData(){
    newName.value="";
    newUrl.value="";
}

function deleteData(Index){
    sitecontainer.splice(Index,1)
    // console.log(sitecontainer);  للتاكيد انه بيحذف 
    displaysite()
    localStorage.setItem('information',JSON.stringify(sitecontainer)) //1
}


