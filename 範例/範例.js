//抓ID
const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deleteBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

console.log(list)

let allContent = []
//裝監聽器
addedBtn.addEventListener('click', function(){
    
    allContent.push({
        content: content.value,
        date: date.value,
        time: time.value
    })
    let htmlstr = addContent(allContent)
    
    list.innerHTML = htmlstr
})

deleteBtn.addEventListener('click', function(){
    allContent.pop()

    let htmlstr = addContent(allContent)

    list.innerHTML = htmlstr
})

// 函式
function addContent(arr) {
    let htmlstr = ''
    /*
    forEach(): 相當於for迴圈，遍歷整個array，
    函式會執行array長度的次數，每一次依次取array項目 
    item: array每一個項目
    index: 第幾項(i)
    arr: array
    */
    arr.forEach(function(item){
        // 透過遍歷讓內容疊加
        htmlstr = htmlstr + `
    <div class="item">
        <div>
            <p>內容：${item.content}</p>
            <p>時間：${item.date}, ${item.time}</p>
        </div>
    </div>
        `
    })

    return htmlstr
}


