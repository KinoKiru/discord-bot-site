const socket = io("http://143.178.215.190:3000");
let table = document.getElementById("commandsTable");
let text = document.getElementById("bottext");

socket.on("initStartup" , (rows)=>{
 fillTable(rows, text)
})

socket.on("connection", ()=>{
   console.log("neuksesk");
})

socket.on("update", (rows)=>{
     table.innerHTML = "";
     fillTable(rows, text)
})

function fillTable(rows){
   text.classList.add("d-none");
   for (const row of rows) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td.innerText = row.command;
      td1.innerText = row.description;
      td2.innerText = row.use;

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);

      table.appendChild(tr);
   }
}
