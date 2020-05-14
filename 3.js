function solution(relation) {
    var answer = 0;
    let unique = true
    //menghitung berapa kali dilakukan looping berdasarkan kategori/key
    for(let key1 = 0; key1< relation[0].length; key1++){
        //mencari key dengan 1 kategori
        for(let indexAwal = 0; indexAwal< relation.length-1; indexAwal++) {
            for (let indexPembanding = indexAwal+1; indexPembanding < relation.length; indexPembanding++) {
                if(relation[indexAwal][key1] === relation[indexPembanding][key1] ) {
                    unique = false
                }
            }
        }
        if(unique){
            answer++

            // jika tidak bisa menjadi key, dicoba dilakukan kombinasi dengan key lain untuk mencari data unik
        } else {
            for (let key2 = key1+1; key2 < relation[0].length; key2++) {
                unique = true
                for(let indexAwal = 0; indexAwal< relation.length-1; indexAwal++) {
                    for (let indexPembanding = indexAwal+1; indexPembanding < relation.length; indexPembanding++) {
                        if(relation[indexAwal][key1] + relation[indexAwal][key2] === relation[indexPembanding][key1] + relation[indexPembanding][key2]) {
                            unique = false
                        }
                    }
                }
                unique ? answer++ : ''
            }
        }
    }
    return answer;
}

let relation = [
    ['100','ryan','music','2'],
    ['200','apeach','math','2'],
    ['300','tube','computer','3'],
    ['400','con','computer','4'],
    ['500','muzi','music','3'],
    ['600','apeach','music','2']
]

console.log(solution(relation))
