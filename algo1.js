const tri_a_bulle = (a) => {
    let tour = true;
    let count = 0;
    while (tour) {
        tour = false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] > a[i + 1]) {
                nb = a[i]
                a[i] = a[i + 1]
                a[i + 1] = nb
                tour = true;
            }
            count++
        }
    }
    console.log(`Tri à bulle: ${count} comparaisons, tableau de sortie: ${a}`)

}

// tri par insertion 

const tri_par_insertion = (tab) => {

    //nombre des éléments dans le tableau
    let count = 0;

    for (i = 1; i < tab.length; i++) {
        //stocker la valeur actuelle 
        tmp = tab[i]
        j = i - 1
        while (j >= 0 && tab[j] > tmp) {
            // déplacer le nombre
            tab[j + 1] = tab[j]
            j--
            count += 1

        }
        //Insère la valeur temporaire à la position 
        //correcte dans la partie triée.
        tab[j + 1] = tmp
    }
    console.log(`Tri par insertion: ${count} comparaisons, tableau de sortie: ${tab}`)

}

const tri_rapide = (tab) => {
    var count = 0
    for (i = 0; i < tab.length; i++) {
        j = i + 1
        while (j < tab.length) {
            if (tab[i] > tab[j]) {
                astr = tab[j]
                tab[j] = tab[i]
                tab[i] = astr
            }
            j += 1
            count++
        }
    }
    console.log(`Tri rapide: ${count} comparaisons, tableau de sortie: ${tab}`)

}




const fs = require('fs');

const file = fs.readFileSync("data.txt", 'utf8');


const a = file.split(" ").map(x => parseFloat(x))


console.log(tri_a_bulle(a))
console.log(tri_rapide(a))
console.log(tri_par_insertion(a))


//tri_a_bulle([-4, -2, 0, 6, 12, 48])