
let A=[1,5,2,-2]
let S=[-1,1,-1,1]


var val = (A,S) => {
    let N=A.length;
    let i,R=0
    for(i=0;i<N;i++)R=R+(A[i]*S[i]);
    return Math.abs(R)
}

console.log(val(A,S));
