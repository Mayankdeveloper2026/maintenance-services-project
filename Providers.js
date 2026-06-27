const providers = [

{
    name:"John Smith",
    profession:"Electrician",
    location:"New York",
    phone:"+1 555-1234",
    image:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
    name:"Sarah Johnson",
    profession:"Plumber",
    location:"California",
    phone:"+1 555-5678",
    image:"https://randomuser.me/api/portraits/women/44.jpg"
},

{
    name:"Michael Brown",
    profession:"Painter",
    location:"Texas",
    phone:"+1 555-1122",
    image:"https://randomuser.me/api/portraits/men/75.jpg"
},

{
    name:"Emma Davis",
    profession:"Kitchen Designer",
    location:"Florida",
    phone:"+1 555-8899",
    image:"https://randomuser.me/api/portraits/women/68.jpg"
},

{
    name:"Robert Wilson",
    profession:"Carpenter",
    location:"Chicago",
    phone:"+1 555-9988",
    image:"https://randomuser.me/api/portraits/men/45.jpg"
},

{
    name:"Sophia Taylor",
    profession:"Interior Designer",
    location:"Boston",
    phone:"+1 555-7766",
    image:"https://randomuser.me/api/portraits/women/20.jpg"
}

];

const providerList = document.getElementById("providers-list");
const providerCount = document.getElementById("providerCount");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

function renderProviders(data){

    providerList.innerHTML = "";

    providerCount.textContent = data.length;

    if(data.length === 0){
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    data.forEach(provider=>{

        providerList.innerHTML += `
        <div class="col-md-6 col-lg-4">

            <div class="card provider-card h-100">

                <div class="provider-cover"></div>

                <div class="card-body text-center">

                    <img src="${provider.image}"
                         class="provider-avatar shadow">

                    <h5 class="provider-name mt-3">
                        ${provider.name}
                    </h5>

                    <p class="provider-role">
                        ${provider.profession}
                    </p>

                    <span class="badge bg-success mb-3">
                        <i class="bi bi-patch-check-fill"></i>
                        Verified
                    </span>

                    <div class="text-start">

                        <p>
                            <i class="bi bi-geo-alt-fill text-primary"></i>
                            ${provider.location}
                        </p>

                        <p>
                            <i class="bi bi-telephone-fill text-primary"></i>
                            ${provider.phone}
                        </p>

                    </div>

                    <button class="btn btn-primary btn-connect w-100">
                        <i class="bi bi-chat-dots-fill me-2"></i>
                        Connect Now
                    </button>

                </div>

            </div>

        </div>
        `;
    });
}

searchInput.addEventListener("keyup",()=>{

    const keyword = searchInput.value.toLowerCase();

    const filtered = providers.filter(provider =>

        provider.name.toLowerCase().includes(keyword) ||
        provider.profession.toLowerCase().includes(keyword) ||
        provider.location.toLowerCase().includes(keyword)

    );

    renderProviders(filtered);

});

renderProviders(providers);

