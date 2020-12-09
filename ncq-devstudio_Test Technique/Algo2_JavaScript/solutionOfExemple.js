let A=[4,4,5,5,1];  
let B=[3,2,4,3,1];

/*
*** countWays() est une fonction pour calculer le nbr des:
*** different ways of climbing to the top of the ladder
*** basé sur suite fibonacci
*/
let countWays = (N) => {
    if (N <= 1) return N
    return countWays(N-1) + countWays(N-2)
}

function solution (A,B){
    let L = 5;
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
    return Rslt
}

console.log(solution (A,B));