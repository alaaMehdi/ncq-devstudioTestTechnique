
let A=[]
let S=[]
let N = Math.floor(Math.random() * 20000)+1;

let init = (length,max,min)=>{
    let range;
    let constractTab =[];
    for (let i=0;i<length;i++){
        do{
            range = Math.floor(Math.random() * (+max - +min)) + +min;
        }while(range==0)
        constractTab[i]=range;
    } 
    return constractTab
}

let initS = (length)=>{
    let range;
    let constractTab =[];
    for (let i=0;i<length;i++){
        range = Math.floor(Math.random() * 2);
        if (range==0)range=-1
        constractTab[i]=range;
    } 
    return constractTab
}

S=initS(N)
A=init(N,100,-100)
/* console.log(S);
console.log(A); */
var val = (A,S) => {
    let N=A.length;
    let i,R=0
    for(i=0;i<N;i++)R=R+(A[i]*S[i]);
    return Math.abs(R)
}

console.log(val(A,S));
