var candidatesList;
var rankedCandidates = [];

function handleSearch(e) {
    e.preventDefault();

    const jobRole = document.getElementById('jobRole').value;
    const location = document.getElementById('location').value;
   
    candidatesList = [
        { name: "Rahool", JobRole: "Developer", location: "Punjab" },
        { name: "Vimlesh", JobRole: "Docter", location: "Haryana" },
        { name: "Abhijeet", JobRole: "Coder", location: "Chandigarh" },
        { name: "Billa", JobRole: "Student", location: "Chandigarh" },
    ]

   var matchCandidates = candidatesList.filter(function(items) {
      
         return items.location.toLowerCase().includes(location.toLowerCase()) &&
                items.JobRole.toLowerCase().includes(jobRole.toLowerCase());
    })

    renderCandidates(matchCandidates);
}

function renderCandidates(candidates) {
    var candidateList = document.getElementById('result')
    candidateList.innerHTML = "";

    candidates.forEach(candidate => {
        console.log(candidate);
        var listItem = document.createElement('li');

        listItem.textContent = 'Name : ' + candidate.name + ', Location : ' + candidate.location + ', Job Role : ' + candidate.JobRole;

        const button = document.createElement('button');
        button.className = "ml";
        button.textContent = "rank";
        button.addEventListener('click',function(){
            rankCandidates(candidate);
        })

        listItem.appendChild(button);
        candidateList.appendChild(listItem);
        
    });
}

function rankCandidates(candidate){
    const rank = document.getElementById('rank');
    rank.innerHTML = "";
 
   
    rankedCandidates.push(candidate);

    rankedCandidates.forEach((candidate)=>{
      const rankList = document.createElement('li');
      rankList.textContent = 'Name : ' + candidate.name + ', Job Role : ' + candidate.JobRole + ', Location : ' + candidate.location;

      rank.appendChild(rankList);
    })


}

document.getElementById('searchOptions').addEventListener('submit', handleSearch)