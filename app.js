let Personne = function (sonNom, sonPrenom, sonAge, sonSexe, sonJob) {
    this.nom = sonNom;
    this.surname = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
    this.job = sonJob;

    this.getAll = function () {
        return "Ma personne s'appelle " + this.nom + " " + this.surname + ", elle a " + this.age + " ans et est de sexe "
            + this.sexe + ", elle est " + this.job;
    }

    this.setName = function (newName, newJob) {
        this.nom = newName;
        this.job = newJob;
    }
}

let mikasa = new Personne("Ackerman", "Mikasa", 20, "féminin", "Soldat");
let eren = new Personne("Jaeger", "Eren", 20, "masculin", "Soldat");

let momDiv = document.getElementById('perso1');
let eachDiv = momDiv.getElementsByTagName('div');
eachDiv[0].innerHTML = mikasa.nom;
eachDiv[1].innerHTML = mikasa.surname;
eachDiv[2].innerHTML = mikasa.age;
eachDiv[3].innerHTML = mikasa.sexe;
eachDiv[4].innerHTML = mikasa.job;
eachDiv[5].innerHTML = mikasa.getAll();
mikasa.setName("Jaeger", "caporal");
eachDiv[6].innerHTML = "nom : " + mikasa.nom + ", travail : " + mikasa.job;

let herDiv = document.getElementById('perso2');
let eachHerDiv = herDiv.getElementsByTagName('div');
eachHerDiv[0].innerHTML = eren.nom
eachHerDiv[1].innerHTML = eren.surname;
eachHerDiv[2].innerHTML = eren.age;
eachHerDiv[3].innerHTML = eren.sexe;
eachHerDiv[4].innerHTML = eren.job;
eachHerDiv[5].innerHTML = eren.getAll();
eren.setName("Ackerman", "major");
eachHerDiv[6].innerHTML = "nom : " + eren.nom + ", travail : " + eren.job;