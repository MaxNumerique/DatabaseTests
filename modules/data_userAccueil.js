export default class User {


    constructor(id, first_name, last_name, email, gender, role) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.role = role;
    }
    
    afficherUser() {
        const tableUser = document.querySelector('#tableUser');

        const tableHead = document.createElement('thead');
        tableUser.appendChild(tableHead);

        const ligneHead = document.createElement('tr');
        tableHead.appendChild(ligneHead);

        const heads = ['id', 'first name', 'last name', 'email', 'gender', 'role'];
        heads.forEach(head => {
            const headElement = document.createElement('th');
            headElement.textContent = head;
            ligneHead.appendChild(headElement);
        });
        const ligneValeur = document.createElement('tr');
        tableUser.appendChild(ligneValeur);

        const colonneIdUser = document.createElement('td');
        colonneIdUser.textContent = this.id;
        ligneValeur.appendChild(colonneIdUser);

        const colonneFirstNameUser = document.createElement('td');
        colonneFirstNameUser.textContent = this.first_name;
        ligneValeur.appendChild(colonneFirstNameUser);

        const colonneLastNameUser = document.createElement('td');
        colonneLastNameUser.textContent = this.last_name;
        ligneValeur.appendChild(colonneLastNameUser);

        const colonneEmailUser = document.createElement('td');
        colonneEmailUser.textContent = this.email;
        ligneValeur.appendChild(colonneEmailUser);

        const colonneGenderUser = document.createElement('td');
        colonneGenderUser.textContent = this.gender;
        ligneValeur.appendChild(colonneGenderUser);

        const colonneRoleUser = document.createElement('td');
        colonneRoleUser.textContent = this.role;
        ligneValeur.appendChild(colonneRoleUser);
    }
}