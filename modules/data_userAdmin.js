export default class User {



    constructor(id, first_name, last_name, email, gender, password, role) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.role = role;
    }
    
    afficherUserAdmin() {
        const tableUser = document.querySelector('#tableUser');
        const ligneUser = document.createElement('tr');
        tableUser.appendChild(ligneUser);


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