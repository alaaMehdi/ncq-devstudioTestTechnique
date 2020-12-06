let M;
let N;

M = Math.floor(Math.random() * 100000)+1;

N = Math.floor(Math.random() * 100000)+1; 


let A=[]
for (let K=0;K<M;K++)A[K]=Math.floor(Math.random() * N+1)+1; 


let init = (length,val)=>{
    let constractTab =[];
    for (let i=0;i<length;i++) constractTab[i]=val;
    return constractTab
}

let increase = (X) =>{
    X++
    return X
}

let maxCounter = (arrToMax) =>{
    let max = Math.max(...arrToMax);
    arrToMax = init(N,max)
    return arrToMax
} 




//for (let K=0;K<N;K++) A[K]=Math.floor(Math.random() * N)+1;
let solution = (N, A)=>{
    let Counters = init(N,0);
    let K
    for (K=0;K<A.length;K++) {
        if(A[K] == N+1) {
            Counters=maxCounter(Counters);
        }
        if (A[K] >= 1 && A[K]<=N){
            Counters[A[K]-1]=increase(Counters[A[K]-1])
        }
        
    }

    return Counters
}

console.log(solution(N,A));