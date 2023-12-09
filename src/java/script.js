const teamMembers = [
    {
        src: 'src/imagens/piero.jpg',
        name: 'Piero Caira',
        alias: '@piero',
        email: 'piero@example.com',
         status: 'active',
         tags: ['dev']
    },

{
    src: 'src/imagens/amy.jpg',
    name: 'Amy peterson',
    alias: '@amy',
    email: 'amy@example.com',
     status: 'inactive',
     tags: ['design', 'marketing']
},
{
    src: 'src/imagens/drew.jpg',
    name: 'Drew OAK',
    alias: '@drew',
    email: 'drew@example.com',
     status: 'offline',
     tags: ['design', 'marketing']
},
{
    src: 'src/imagens/fabiano.jpg',
    name: 'Fabiano Marquez ',
    alias: '@fabiano',
    email: 'fabiano@example.com',
     status: 'active',
     tags: ['dev']
},


{
    src: 'src/imagens/Georgina.jpg',
    name: 'Georgina Pieruchi',
    alias: '@georgina',
    email: 'georgina@example.com',
     status: 'inactive',
     tags: ['marketing']
},
{
    src: 'src/imagens/liliya.jpg',
    name: 'Liliya Vegas ',
    alias: '@liliya',
    email: 'liliya@example.com',
     status: 'offline',
     tags: ['design']
},
{
    src: 'src/imagens/melissa.jpg',
    name: 'Melissa Orson',
    alias: '@melissa',
    email: 'melissa@example.com',
     status: 'active',
     tags: ['dev', 'QA']
},
{
    src: 'src/imagens/natalia.jpg',
    name: 'Natalia Cruz',
    alias: '@natalia',
    email: 'natalia@example.com',
     status: 'inactive',
     tags: ['marketing']
},
{
    src: 'src/imagens/nathan.jpg',
    name: 'Nathan constantine',
    alias: '@nathan',
    email: 'nathan@example.com',
     status: 'active',
     tags: ['dev', 'QA']
},
{
    src: 'src/imagens/petter.jpg',
    name: 'Petter Pan',
    alias: '@petter',
    email: 'petter@example.com',
     status: 'inactive',
     tags: ['design']
},

{
    src: 'src/imagens/alex.jpg',
    name: 'Alex Ritter',
    alias: '@alex',
    email: 'alex@example.com',
     status: 'active',
     tags: ['dev', 'QA']
},

];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
console.log(tableRowCount)

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 4;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    console.log(pageNumber, start)

    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');

