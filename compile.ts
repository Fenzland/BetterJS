// const foo:string=2;
// console.log((await Deno.transpileOnly( { foo:'const foo:string=2;', }, )).foo.source);
// Deno.compile('./index.ts',{foo:'const foo:string=2;export{};'});
console.log((await Deno.bundle('./index.ts'))[1]);
