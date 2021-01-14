a = [10, 15, 3, 7]


// Arr(array) tableau à permuter
// first(int) premier index à prendre en compte
// (string) affiche dans les logs le tableau permuté

//////////////////////////
// sujet 1
const sujet1 = (Arr, first, arg) => {
    var reponse = false
    anagramma(Arr, first)

    function anagramma(Arr, first) {
        if ((Arr.length - first) <= 1) {
            for (let i = 0; i < Arr.length; i++) {
                if (Arr[i] + Arr[i + 1] == arg) {
                    reponse = true
                    break;
                }
            }
        } else {
            for (var i = 0; i < Arr.length - first; i++) {
                anagramma(anagramma_round(Arr, first), first + 1);
            }
        }
        return reponse
    }

    function anagramma_round(Arr, i) {
        var temp = Arr[i];
        for (var j = i; j < Arr.length - 1; j++) {
            Arr[j] = Arr[j + 1];
        }
        Arr[Arr.length - 1] = temp;
        return Arr;
    }
    return `addition equal to ${arg} ${reponse} for ${Arr} `
}
console.log(sujet1([10, 15, 3, 7], 0, 17))
console.log(sujet1([1, 8, 10, 21], 0, 19))


// @var Arr(array) tableau à permuter
// @var i(int) premier index à prendre en compte
// @return (array) retourne le tableau après avoir permuté tous les élément de un niveau vers la gauche



//////////////////:

// sujet 2
const sujet2 = (tbl) => {
    let count = 0
    res = []
    res_f = []
    for (let i = 0; i < tbl.length; i++) {
        j = 0
        while (j < tbl.length - 1) {
            if (i == tbl.length - 1) { // si c'est la derniere valeur renvoi true
                res.push(true)
                break;
            }
            if (tbl[i] > tbl[i + 1]) {
                res.push(true)
            } else {
                res.push(false)
            }
            j++
        }
        res_f.push(res)
        res = []
    }
    res_f.map(x => (x.includes(false) ? "" : count += 1))
    return count
}
sujet2([3, 7, 8, 3, 6, 1])


// if i > i+1 faire i+2 jq length-1 si oui ajouter count += 1
// faire avec i+1 
// tbl




//https://michel.dumont.io/fr/news/permutations-tableau-javascript-19.html