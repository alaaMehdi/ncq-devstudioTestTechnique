let A=[];  
let B=[];

/*
*** countWays() est une fonction pour calculer le nbr des:
*** different ways of climbing to the top of the ladder
*** basé sur suite fibonacci
*/
let countWays = (N) => {
    if (N <= 1) return N
    return countWays(N-1) + countWays(N-2)
}

let init = (length,N)=>{
    let range;
    let constractTab =[];
    for (let i=0;i<length;i++){
        range = Math.floor(Math.random() * N)+1;
        constractTab[i]=range;
    } 
    return constractTab
}

function solution (A,B){
    let L = 15;
    A = init(L,L);
    B = init(L,30);
    let i; 
    let Rslt=[];

    for(i=0;i<L;i++){
        if (countWays(A[i]+1) >= ( 2**countWays(B[i]+1) ) ){
            Rslt[i]=( countWays(A[i]+1) % ( 2**countWays(B[i]+1) ) );
        }
        else{
            Rslt[i]=( countWays(A[i]+1) );
        }
    }
    console.log('r');
    return Rslt
}

console.log(solution (A,B));