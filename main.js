import User from "/modules/data_userAccueil.js";

// const response = await fetch("/datas/MOCK_DATA.json");
// const users = await response.json();
// console.log(users);



document.querySelector('#button-accueil').addEventListener('click', async function() {
    // const containerData = document.querySelector('#container-data');
    const dataTable = document.querySelector('#tableUser');
    
    const response = await fetch("/datas/MOCK_DATA.json");
    const users = await response.json();
    dataTable.innerHTML = '';

    const Pagination = document.querySelector('#pagination');
    Pagination.style.display = 'flex';

    localStorage.setItem('USERS', JSON.stringify(users));
    const StoredDatas = localStorage.getItem('USERS');
    
    if (StoredDatas) {
        const USERdata = JSON.parse(StoredDatas);

        const thead = document.createElement('thead');
        dataTable.appendChild(thead);
        const trHead = document.createElement('tr');
        thead.appendChild(trHead);
        const headers = ['ID', 'Prénom', 'Nom', 'Email', 'Genre', 'Rôle'];
        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            trHead.appendChild(th);
        }

        for (const user of USERdata) {
        
        const tr = document.createElement('tr');
        dataTable.appendChild(tr);

        const userData = new User(user.id, user.first_name, user.last_name, user.email, user.gender, user.role);

        const idCell = document.createElement('td');
        idCell.textContent = userData.id;
        tr.appendChild(idCell);

        const first_nameCell = document.createElement('td');
        first_nameCell.textContent = userData.first_name;
        tr.appendChild(first_nameCell);

        const last_nameCell = document.createElement('td');
        last_nameCell.textContent = userData.last_name;
        tr.appendChild(last_nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = userData.email;
        tr.appendChild(emailCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = userData.gender;
        tr.appendChild(genderCell);

        const roleCell = document.createElement('td');
        roleCell.textContent = userData.role;
        tr.appendChild(roleCell);
    }
} else{
    console.log("No stored data in localstorage");
}
});

document.querySelector('#button-accueil').addEventListener('click', async function() {
    // const containerData = document.querySelector('#container-data');
    const dataTable = document.querySelector('#tableUser');

    
    const response = await fetch("/datas/MOCK_DATA.json");
    const users = await response.json();
    dataTable.innerHTML = '';

    const Pagination = document.querySelector('#pagination');
    Pagination.style.display = 'flex';

    localStorage.setItem('USERS', JSON.stringify(users));
    const StoredDatas = localStorage.getItem('USERS');

    if (StoredDatas) {
        const USERdata = JSON.parse(StoredDatas);
        const thead = document.createElement('thead');
        dataTable.appendChild(thead);
        const trHead = document.createElement('tr');
        thead.appendChild(trHead);
        const headers = ['ID', 'Prénom', 'Nom', 'Email', 'Genre', 'Rôle'];
        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            trHead.appendChild(th);
        }
        let itemsPerPage = 10;
        let currentPage = 0;
        function createPaginationButtons(totalItems) {
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination');
            while (Pagination.firstChild) {
                Pagination.firstChild.remove();
            }
            Pagination.appendChild(paginationContainer);
            for (let i = 0; i < totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i + 1;
                paginationContainer.appendChild(pageButton);
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    showPage(currentPage);
                    updateActiveButtons(totalItems);
                });
            }
        }
        function showPage(page) {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const items = Array.from(dataTable.getElementsByTagName('tr')).slice(1);
            items.forEach((item, index) => {
                item.classList.toggle('hidden', index < startIndex || index >= endIndex);
            });
        }
        function updateActiveButtons(totalItems) {
            const pageButtons = document.querySelectorAll('.pagination button');
            pageButtons.forEach((button, index) => {
                if (index == currentPage) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
        function displayUsers(USERdata) {
            for (const user of USERdata) {
                const tr = document.createElement('tr');
                dataTable.appendChild(tr);

                const userData = new User(user.id, user.first_name, user.last_name, user.email, user.gender, user.role);

                const idCell = document.createElement('td');
                idCell.textContent = userData.id;
                tr.appendChild(idCell);

                const first_nameCell = document.createElement('td');
                first_nameCell.textContent = userData.first_name;
                tr.appendChild(first_nameCell);

                const last_nameCell = document.createElement('td');
                last_nameCell.textContent = userData.last_name;
                tr.appendChild(last_nameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = userData.email;
                tr.appendChild(emailCell);

                const genderCell = document.createElement('td');
                genderCell.textContent = userData.gender;
                tr.appendChild(genderCell);

                const roleCell = document.createElement('td');
                roleCell.textContent = userData.role;
                tr.appendChild(roleCell);
            }
            createPaginationButtons(USERdata.length);
            showPage(currentPage);
            updateActiveButtons(USERdata.length);
        }
        displayUsers(USERdata);
    } else {
        console.log("Ther is no use data in localstorage");
    }});

document.querySelector('#button-admin').addEventListener('click', async function() {
    // const containerData = document.querySelector('#container-data');
    const dataTable = document.querySelector('#tableUser');

    
    const response = await fetch("/datas/MOCK_DATA.json");
    const users = await response.json();
    dataTable.innerHTML = '';

    const Pagination = document.querySelector('#pagination');
    Pagination.style.display = 'flex';

    localStorage.setItem('USERS', JSON.stringify(users));
    const StoredDatas = localStorage.getItem('USERS');

    if (StoredDatas) {
        const USERdata = JSON.parse(StoredDatas);
        const thead = document.createElement('thead');
        dataTable.appendChild(thead);
        const trHead = document.createElement('tr');
        thead.appendChild(trHead);
        const headers = ['ID', 'Prénom', 'Nom', 'Email', 'Genre', 'Rôle', 'Modifier', 'Supprimer'];
        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            trHead.appendChild(th);
        }
        let itemsPerPage = 10;
        let currentPage = 0;
        function createPaginationButtons(totalItems) {
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const paginationContainer = document.createElement('div');
            paginationContainer.classList.add('pagination');
            while (Pagination.firstChild) {
                Pagination.firstChild.remove();
            }
            Pagination.appendChild(paginationContainer);
            for (let i = 0; i < totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i + 1;
                paginationContainer.appendChild(pageButton);
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    showPage(currentPage);
                    updateActiveButtons(totalItems);
                });
            }
        }
        function showPage(page) {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const items = Array.from(dataTable.getElementsByTagName('tr')).slice(1);
            items.forEach((item, index) => {
                item.classList.toggle('hidden', index < startIndex || index >= endIndex);
            });
        }
        function updateActiveButtons(totalItems) {
            const pageButtons = document.querySelectorAll('.pagination button');
            pageButtons.forEach((button, index) => {
                if (index == currentPage) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
        function displayUsers(USERdata) {
            for (const user of USERdata) {
                const tr = document.createElement('tr');
                dataTable.appendChild(tr);

                const userData = new User(user.id, user.first_name, user.last_name, user.email, user.gender, user.role);

                const idCell = document.createElement('td');
                idCell.textContent = userData.id;
                tr.appendChild(idCell);

                const first_nameCell = document.createElement('td');
                first_nameCell.textContent = userData.first_name;
                tr.appendChild(first_nameCell);

                const last_nameCell = document.createElement('td');
                last_nameCell.textContent = userData.last_name;
                tr.appendChild(last_nameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = userData.email;
                tr.appendChild(emailCell);

                const genderCell = document.createElement('td');
                genderCell.textContent = userData.gender;
                tr.appendChild(genderCell);

                const roleCell = document.createElement('td');
                roleCell.textContent = userData.role;
                tr.appendChild(roleCell);

                const modifierCell = document.createElement('td');
                const modifierButton = document.createElement('button');
                modifierButton.classList.add('buttonModifier')
                modifierButton.textContent = 'Modifier';
                modifierCell.appendChild(modifierButton);
                tr.appendChild(modifierCell);

                const supprimerCell = document.createElement('td');
                const supprimerButton = document.createElement('button');
                supprimerButton.classList.add('buttonSupprimer')

                supprimerButton.textContent = 'Supprimer'
                supprimerCell.appendChild(supprimerButton);
                tr.appendChild(supprimerCell);
            }
            createPaginationButtons(USERdata.length);
            showPage(currentPage);
            updateActiveButtons(USERdata.length);
        }
        displayUsers(USERdata);
    } else {
        console.log("Ther is no use data in localstorage");
    }});



