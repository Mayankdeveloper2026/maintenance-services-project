// DATA

const requests = [
{
id:101,
service:"Electrical Maintenance",
status:"completed",
date:"2026-06-25",
image:"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400"
},
{
id:102,
service:"Plumbing Repair",
status:"pending",
date:"2026-06-26",
image:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400"
},
{
id:103,
service:"Deep Cleaning",
status:"completed",
date:"2026-06-23",
image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"
},
{
id:104,
service:"HVAC Service",
status:"pending",
date:"2026-06-22",
image:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400"
},
{
id:105,
service:"Building Inspection",
status:"cancelled",
date:"2026-06-21",
image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
},
{
id:106,
service:"Elevator Maintenance",
status:"pending",
date:"2026-06-20",
image:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=400"
}
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const stats = document.getElementById("stats");

// STATS

function renderStats(){

const total = requests.length;
const pending = requests.filter(x=>x.status==="pending").length;
const completed = requests.filter(x=>x.status==="completed").length;
const cancelled = requests.filter(x=>x.status==="cancelled").length;

stats.innerHTML = `
<div class="col-md-3">
<div class="card stats-card shadow text-center">
<div class="card-body">
<i class="bi bi-files fs-1 text-primary"></i>
<h5>Total Requests</h5>
<h2>${total}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card stats-card shadow text-center">
<div class="card-body">
<i class="bi bi-hourglass-split fs-1 text-warning"></i>
<h5>Pending</h5>
<h2>${pending}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card stats-card shadow text-center">
<div class="card-body">
<i class="bi bi-check-circle fs-1 text-success"></i>
<h5>Completed</h5>
<h2>${completed}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card stats-card shadow text-center">
<div class="card-body">
<i class="bi bi-x-circle fs-1 text-danger"></i>
<h5>Cancelled</h5>
<h2>${cancelled}</h2>
</div>
</div>
</div>
`;
}

// TABLE

function renderTable(data){

tableBody.innerHTML = data.map(item => `
<tr>

<td>#REQ${item.id}</td>

<td>
<div class="d-flex align-items-center gap-3">
<img src="${item.image}" class="request-img">
<div>
<strong>${item.service}</strong>
<br>
<small class="text-muted">Home & Building Service</small>
</div>
</div>
</td>

<td>
<span class="badge bg-${
item.status==="pending"
?"warning"
:item.status==="completed"
?"success"
:"danger"
}">
${item.status}
</span>
</td>

<td>${item.date}</td>

<td>

<button
class="btn btn-primary btn-sm"
onclick="viewRequest(${item.id})">
<i class="bi bi-eye"></i>
</button>

<button
class="btn btn-danger btn-sm"
onclick="deleteRequest(${item.id})">
<i class="bi bi-trash"></i>
</button>

</td>

</tr>
`).join('');
}

// FILTER

function filterRequests(){

const search = searchInput.value.toLowerCase();
const status = statusFilter.value;

const filtered = requests.filter(item => {

const serviceMatch =
item.service.toLowerCase().includes(search);

const statusMatch =
status === "all" ||
item.status === status;

return serviceMatch && statusMatch;

});

renderTable(filtered);
}

// ACTIONS

function viewRequest(id){

const request =
requests.find(r => r.id === id);

alert(
`Request ID: ${request.id}
Service: ${request.service}
Status: ${request.status}
Date: ${request.date}`
);

}

function deleteRequest(id){

const index =
requests.findIndex(r => r.id === id);

if(index > -1){

if(confirm("Delete this request?")){

requests.splice(index,1);

renderStats();
filterRequests();

}

}

}

// EVENTS

searchInput.addEventListener("input", filterRequests);
statusFilter.addEventListener("change", filterRequests);

// INIT

renderStats();
renderTable(requests);

