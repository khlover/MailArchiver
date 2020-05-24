var rows = document.getElementById("table").rows;
var headers = document.getElementsByTagName("th")
var cellContent = document.getElementsByTagName("td");
var arrow1 = document.createElement('img');

let emailsHeaders =  [
    {id:0,sender:"aaa@example.com", reccepient: "zzz.zzz@example.com", subject:"[HR-888] Notice of official announcemnt", attachment:false, emaildate:"2020-05-22"},
    {id:1,sender:"bbb@example.com", reccepient: "z34.sdf@example.com", subject:"[Urgent] Please read immediately", attachment:true, emaildate:"2020-03-12"},
    {id:2,sender:"aaa@example.com", reccepient: "3hn.dsf@example.com", subject:"[Notice] Revised pool policy", attachment:true, emaildate:"2020-05-02"},
    {id:3,sender:"ddd@example.com", reccepient: "snhfjkn4e.sjdfij@example.com", subject:"[Gym] You haven't visited in 2 years", attachment:true, emaildate:"2020-04-18"},
    {id:4,sender:"s@m.com", reccepient: "b@q.com", subject:"ShortExample",attachment: true, emaildate:"2010-01-01"}
] 

let emailContent = [
    {id:0,content:"This is a direct email from HR's automated auto email server, please do not reply. It looks personal Jeff because mailmerge exists."},
    {id:1,content:"You could be a proud winner of a BRAND NEW AUTOMOBILE, all you need to do is enter your social sercurity number and send the entry fee via bitcoin bnhiusdfibhudsxbfnjuibhijnufdsvkbjhdsxvbhjkdisbfkuvuhijk BEST OF LUCK IN WINNING THE CAR OF YOUR DREAMS"},
    {id:2,content:"After several complaints made by users of the pool the hotel would like to make the following change to its policy. Causal pool fridays with require the user to wear at least swim trunks, any commando opperaters will be ejected from the hotel without refund."},
    {id:3,content:"We understand you chose to terminate your membership with us two years ago and haven't enquied since however we are sure you still want to know about our great deals on overpriced protein shakes"},
    {id:4,content:"Short Example"}
]

function searchEmail(){
    let date1 = document.getElementById("searchDate1").value;
    let date2 = document.getElementById("searchDate2").value;
    let count = document.getElementById("searchResultNo");
    var bg = document.getElementById("emailTable");
    let table = document.getElementById("table");
    
   var filteredEmails = [];

  for(var i = table.rows.length - 1; i> 0; i--)
  {
      table.deleteRow(i);
  }

    emailsHeaders.forEach(x =>{
        var y = x.emaildate;
        if ( date1 <= y && y <= date2 ){
            filteredEmails.push(x);
          
        }    
    }) 

    if(filteredEmails.length > 0){
        count.innerHTML = filteredEmails.length;
        bg.style.background = "none";

        filteredEmails.forEach(x=>{
        var y = x.emaildate;
        var row = table.insertRow(1);
        
        var id = row.insertCell(0);
        var from = row.insertCell(1);
        var to = row.insertCell(2);
        var subject = row.insertCell(3);
        var att = row.insertCell(4);
        var date = row.insertCell(5);
        
        id.innerHTML = x.id;
        from.innerHTML = x.sender;
        to.innerHTML = x.reccepient;
        subject.innerHTML = x.subject;

        var img = document.createElement('img');
        img.height = "18";
        img.width = "18";
        img.src="files/icon_clip.svg";

        var mailicon = document.createElement('img');
        mailicon.height = "20";
        mailicon.width = "10";
        mailicon.src = "files/icon_mail_sp.svg";
        from.prepend(mailicon);
 
        att.innerHTML = x.attachment;
        date.innerHTML = x.emaildate;
        if(x.attachment == true){
            date.append(img);
           
        } 

        
        
        count++;
        

        })
    }
    addRowHandlers();
}

function addRowHandlers() {
    var rows = document.getElementById("table").rows;
    for (i = 0; i < rows.length; i++) {
        rows[i].onclick = function(){ return function(){
               emailContent.forEach(x =>{
                   if(x.id == this.cells[0].innerHTML){
                       if(this.cells.length < 7){
                         this.insertCell(6).innerHTML = x.content;
                         
                       } else {
                           this.deleteCell(6);
                       }
                    
                      
                   }
               })
               
        };}(rows[i]);
    }
}

function addHeaderFilter() {
    
    for (i = 0; i < headers.length; i++) {
        headers[i].onclick = function(x){
            sortTable(this.cellIndex);
    
        
        }
    }    
}

addHeaderFilter();

function sortTable(n) {
  
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        arrow1.height = "10";
        arrow1.width = "10";
        arrow1.src = "files/icon_arrow01.svg";

    table = document.getElementById("table");
    switching = true;
    
    dir = "asc";
    
    while (switching) {
      
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
       
        shouldSwitch = false;
     
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
       
        if (dir == "asc") {
            arrow1.style.transform="none";
            headers[n].appendChild(arrow1);
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
            arrow1.style.transform = "rotate(180deg)";
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {

        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  
