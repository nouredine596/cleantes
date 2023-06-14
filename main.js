let products = document.getElementById('products')
let namee = document.getElementById('namee')
let price = document.getElementById('price')
let count = document.getElementById('count')
let date = document.getElementById('date')
let time = document.getElementById('time')
let creer = document.getElementById('creer')
let ul = document.getElementById('ul')
let search = document.getElementById('search')
let op = document.getElementsByClassName('op')
let totale = document.getElementById('totale')
let deleteAll = document.getElementById('deleteAll')
let deleteF = document.getElementById('deleteF')
let about = document.getElementById('about')
let Tbody = document.getElementById('Tbody')
let ifcreer = document.getElementById('ifcreer')
let container1 = document.getElementById('container1')
let container2 = document.getElementById('container2')
let clients = document.getElementById('clients')
let create = document.getElementById('create')
let update = document.getElementById('update')
let mood;
let mood2 = 'show';
let moodDelete = 'show';
let vv;
let opjectUpdate;
let ii;
let mood3 = 'create'



let data = [];
if (localStorage.products != '') {
    data = JSON.parse(localStorage.products)
}else{
    data = []
}

function CreerData () {
    let object
    if (count.value >= 1){
        object = {
            namee : namee.value.toLowerCase(),
            products : products.value,
            price : price.value,
            count : count.value,
            date : date.value,
            time : time.value,
        }
    }else{
        object = {
            namee : namee.value.toLowerCase(),
            products : products.value,
            price : price.value,
            count : +count.value + 1,
            date : date.value,
            time : time.value,
        }
    }
   

  

    if (namee.value != ''& products.value != '' & price.value != "" & count.value != "") {
        if (mood3 === 'create') {
            data.push(object)
            container1.style.display = 'none'
            container2.style.display = 'block'
            clients.style.display = 'none'
            create.style.display = 'block'

        }else{
            data[opjectUpdate] = object
            creer.innerHTML = 'Create'
            mood3 = 'create'
            container1.style.display = 'none'
            container2.style.display = 'block'
            clients.style.display = 'none'
            create.style.display = 'block'
        }

    }else{
        ifcreer.style.color = 'red'
        ifcreer.innerHTML = `<p>fill in the fields</p>`
        setInterval(function(){ifcreer.innerHTML = ''},5000)
    }
    localStorage.setItem('products',JSON.stringify(data))
   console
    Cleardata ()
    Showdata()
}

function Cleardata () {
    namee.value = '';
    price.value = '';
    count.value = '';
    products.value = '';
    date.value = '';
    time.value = '';
}


function Showdata() {
    let x = 0;
    let table = "";
    let ii;
    
    for (let i = 0; i <data.length; i++){
        if (data[i].count > 1) {
            table += `
            <tr>
            <td>${i+1}</td>
            <td>${data[i].namee}</td>
            <td>${data[i].products}</td>
            <td>${data[i].price}</td>
            <td>${data[i].count}</td>
            <td>${data[i].count * data[i].price}</td>
            <td>${data[i].date}</td>
            <td>${data[i].time}</td>
            <td><button id = 'update' onclick = 'Update (${i})'>update</button></td>
            <td><button id = 'deleteOn' onclick = 'ConfirmDelete (this.id,${i})'>delete</button></td>
        </tr>
            `

        }else{
            table += `
            <tr>
            <td>${i+1}</td>
            <td>${data[i].namee}</td>
            <td>${data[i].products}</td>
            <td>${data[i].price}</td>
            <td>${data[i].count}</td>
            <td>${data[i].price}</td>
            <td>${data[i].date}</td>
            <td>${data[i].time}</td>
            <td><button id = 'update' onclick = 'Update (${i})'>update</button></td>
            <td><button id = 'deleteOn' onclick = 'ConfirmDelete (this.id,${i})'>delete</button></td>
        </tr>
            `
        }

       x += +data[i].count * +data[i].price
       ii = i
    } 

    if (data.length != "") {
        Tbody.innerHTML = table
        deleteAll.style.display = 'block'
        deleteAll.innerHTML = `Delete All (${data.length})`
  
    }else{
        Tbody.innerHTML = table
        deleteAll.style.display = 'none'
    }
    

           
            totale.innerHTML = `Totale : ${x} euro`
            clients.innerHTML = `Cleants (${data.length})`
  
}Showdata() 


function SearchData (value) {
    let table = "";
    let x = 0;
    let xx;
    let v = 0;
    moodDelete = 'search'

    for(let i = 0; i<data.length; i++) {

        if (data[i].namee.includes(value.toLowerCase())) {
            v++
            if (data[i].count > 1) {
                table += `
                <tr>
                <td>${i}</td>
                <td>${data[i].namee}</td>
                <td>${data[i].products}</td>
                <td>${data[i].price}</td>
                <td>${data[i].count}</td>
                <td>${data[i].count * data[i].price}</td>
                <td>${data[i].date}</td>
                <td>${data[i].time}</td>
                <td><button id = 'update' onclick = 'Update (${i})'>update</button></td>
                <td><button id = 'deleteOn' onclick = 'ConfirmDelete (this.id,${i})'>delete</button></td>
            </tr>
                `
            }else{
                table += `
                <tr>
                <td>${i}</td>
                <td>${data[i].namee}</td>
                <td>${data[i].products}</td>
                <td>${data[i].price}</td>
                <td>${data[i].count}</td>
                <td>${data[i].price}</td>
                <td>${data[i].date}</td>
                <td>${data[i].time}</td>
                <td><button id = 'update' onclick = 'Update (${i})'>update</button></td>
                <td><button id = 'deleteOn' onclick = 'ConfirmDelete (this.id,${i})'>delete</button></td>
            </tr>
                `
            }
         

            x += +data[i].count * +data[i].price
            xx = data[i].namee
            
        }else{
            totale.innerHTML = `Totale : ${x * count.value} euro`
        }
       mood2 = 'search'
     
    }

    Tbody.innerHTML = table 

   
        if (search.value != ''){
            totale.innerHTML = `${xx} :  ${x * count.value}euro`
        }
    
        if (search.value != ''){
            totale.innerHTML = `${xx} :  ${x} euro`
        }else{
            totale.innerHTML = `Totale :  ${x} euro`
          
        }
  

    deleteAll.innerHTML = `Delete All (${v})`
    vv = v
}

function Update (i) {
    opjectUpdate = i
    container1.style.display = 'block'
    container2.style.display = 'none'
    
        namee.value = data[i].namee;
        products.value = data[i].products;
        price.value = data[i].price;
        count.value = data[i].count;
        date.value = data[i].date;
        time.value = data[i].time;
    
    creer.innerHTML = 'Update'
    mood3 = 'update'
    search.value = ''
}



function ConfirmDelete (id,i) {
    deleteAll.style.display = 'none'
    deleteF.style.display = 'block'
    mood = id
    ii = i
}


function Delete (id) {
    
        if (id === 'yes' & mood ==='deleteAll' & mood2 === 'search'){
            data.splice(ii,vv)
            localStorage.products = JSON.stringify(data)
            Showdata()
            deleteF.style.display = 'none'
            search.value = ''
        }
    
        else if (id === 'yes' & mood ==='deleteOn' & mood2 === 'search'){
            data.splice(ii,1)
            localStorage.products = JSON.stringify(data)
            deleteF.style.display = 'none'
            Showdata()
            search.value = ''
    
        }

        else if (id === 'yes' & mood ==='deleteAll'){
            localStorage.clear()
            data.splice(0)
            Showdata()
            deleteF.style.display = 'none'
    
        }
    
        else if (id === 'yes' & mood ==='deleteOn'){
            data.splice(ii,1)
            localStorage.products = JSON.stringify(data)
            deleteF.style.display = 'none'
            Showdata()
            
        }
        else if (id === 'yes' & mood ==='deleteAll'){
            localStorage.clear()
            data.splice(0)
            Showdata()
            deleteF.style.display = 'none'
           
        }

        else{
            Showdata()
            deleteF.style.display = 'none'
            search.value = ''
        }
        
}


function Clients () {
    container1.style.display = 'none'
    container2.style.display = 'block'
    clients.style.display = 'none'
    create.style.display = 'block'
    
}

function Create () {
    container2.style.display = 'none'
    container1.style.display = 'block'
    clients.style.display = 'block'
    create.style.display = 'none'
    
} 








