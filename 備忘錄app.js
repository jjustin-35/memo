let content = document.getElementById('content')
let date = document.getElementById('date')
let time = document.getElementById('time')
let addBtn = document.getElementById('addBtn')
let deleteBtn = document.getElementById('deleteBtn')
let notebook = document.getElementById('ntbook')
let nowBtn = document.getElementById('timeNow')



function reNew() {
    let data = [content, date, time]
    for(let i = 0; i < data.length; i++){
        data[i].value = ""
    }
}
function newRecord(list){
    let htmlstr = ''
    list.forEach(function(item){
        htmlstr = htmlstr + `
        <div class="record">
            <div class="item">內容：${item.content}</div>
            <div class="item">時間：${item.date}, ${item.time}</div>
        </div>
        `
    })
    
    notebook.innerHTML = htmlstr
    
    return htmlstr
}
//資料儲存在瀏覽器
function save(){
    //轉換資料為字串
    let listStr = JSON.stringify(list)
    //儲存資料
    localStorage.setItem('list', listStr)

    console.log('save完了')
}

//取出瀏覽器資料
let list_past = localStorage.getItem('list')
//轉換資料為陣列
let list = JSON.parse(list_past)
//渲染
newRecord(list)

addBtn.addEventListener('click', function(){
    list.unshift({
        content: content.value,
        date: date.value,
        time: time.value,
    })
    newRecord(list)
    reNew()
    save()
})

deleteBtn.addEventListener('click', function(){
    list.shift()
    newRecord(list)
    reNew()
    save()
})


nowBtn.addEventListener('click', function () {
    let now = new Date()
    let month = now.getMonth() + 1
    let timeList = [month, now.getDate(), now.getHours(), now.getMinutes()]
    for (let i = 0; i < timeList.length; i++){
        if (timeList[i] < 10) { timeList[i] = `0${timeList[i]}` }
    }
    date.value = `${now.getFullYear()}-${timeList[0]}-${timeList[1]}`
    time.value = `${timeList[2]}:${timeList[3]}`
})