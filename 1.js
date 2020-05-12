const solution = (record) => {
    let answer = [];

    record.map(userData => {
        /* fungsi change mengganti nama pada history */
        const change = (userDetails) => {
            answer.map((user,index) => {
                if(userDetails[1] === user.id){
                    msg = `${userDetails[2]} ${user.msg.split(' ').slice(1).join(' ')}`
                    user.msg = msg
                }
            })
        }
        
        const userDetails = userData.split(' ')
        
        switch (userDetails[0]) {

            /* 
            jika masuk kedalam chat, di lakukan pengecekan 
            apakah sudah pernah masuk atau belum sebelumnya
            */
            case 'Enter':

                /* jika sudah pernah masuk */
                if (answer.filter(data => data.id === userDetails[1]).length > 0) {
                    change(userDetails)
                    answer.push({
                        id: userDetails[1], 
                        msg:`${userDetails[2]} came in`
                    })

                /* jika belum pernah masuk */
                } else {
                    answer.push({
                        id: userDetails[1], 
                        msg:`${userDetails[2]} came in`
                    })
                }
                break;


            // jika mengganti username
            case 'Change':
                change(userDetails)
                break;

            //jika keluar
            case 'Leave':
                answer.map((user) => {
                    user.id === userDetails[1] ? 
                    answer.push({
                        id:userDetails[1], 
                        msg:`${user.msg.slice(1,2)} has left`}) 
                        : ''
                })
                break;
            default: answer
                break;
        }
    })
    return answer.map(el => el.msg);
}

const test = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan", "Enter uid1245 Kifan" ,"Change uid1245 Corona","Leave uid1245 Kevin","Enter uid1245 Pengangguran"]

console.log(solution(test))
