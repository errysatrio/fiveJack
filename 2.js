function solution(N, users) {
    var answer = [];
    for (let i = 1; i <= N; i++) {
        let userFail = users.filter(user => user === i ).length
        users = users.filter(user => user !== i )
        let stageDetails = {
            id: i,
            rate: userFail/users.length
        }
        answer.push(stageDetails)
    }
    return answer.sort((a,b)=> (b.rate-a.rate)).map(el => el.id);
}

let N = 4
let users =  [4,4,4,4,4]
console.log(solution(N, users))

N= 5
users= [2,1,2,6,2,4,3,3]
console.log(solution(N, users))
