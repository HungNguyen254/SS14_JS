/* 

DOM:document object model 
AI TẠO RA DOM?
    khi trang web được tải lên thì trình duyệt sẽ tạo ra một mô hình cây dom
    GIúp:
        +thêm,sửa,xóa các phần tử HTML
        +thêm sửa xóa các thuộc tính của các phần tử HTML
        +tạo sự kiện tương tác với giao diện(click,hover,submit,....)
    Các thành phần trong DOM
        1.ELEMENT
        CÁC CÁCH LÂY ELEMENT
        +lấy theo id:document.getElementById("heading")
         ==> trả về duy nhất đối tượng  
        +lấy theo class:document.getElementsByClassName("title")
         ==> trả về HTML collection (gần giống mảng)  
        +lấy theo thẻ name:document.getElementBytagName("title")    
        ==> trả về HTML collection(gần giống mảng)
        2.ATRIBUTE:thuộc tính

        3.TEXT
        innerText
        innerHTML
        textContent
        đổi nội dung 
    Event:Sự kiện tương tác


ĐỐI TƯỢNG THỰC TẾ
    THUỘC TÍNH
    PHƯƠNG THỨC
*/
// let student={
//     name:"thu",
//     email:"thu@gmail.com",
//     say:()=>{
//         console.log(`Xin chào`);
        
//     }
// }
// student.say();
// document.write();
// Math.random();
// console.log();
// Math.floor();
// let a=8;
let getElementsByClassName = document.getElementsByClassName("title");
console.log(getElementsByClassName[1]);
let getElementBytagName = document.getElementsByTagName("p")

function login(){
    console.log("đăng nhập");
    
}
function checkInput(){
    console.log("1111");
    
}
let flag =true;
function changecolor(){
    let getElementh1 = document.getElementsByClassName("title")[0];
    // getElementh1.style.color="red"
    getElementh1.id = "title"
    if(flag){
        getElementh1.id="heading";
        flag=false;
    }else{
        getElementh1.id="heading"
        flag=true;
    }
}
let user={

}
user.name="đức"

function changetext(){
    //B1 lấy element
    let elementP = document.getElementById("content");
    elementP.innerHTML=" <button>thẻ p</button>"
    document.getElementById("list").innerHTML=`<li>C++</li>
        <li>Java</li>
        <li>C</li>`
}