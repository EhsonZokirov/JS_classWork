function foiz(num) {
  let obj = {
    needs: num / 2,
    wants: (num * 30) / 100,
    saving: (num * 20) / 100,
  };
  return obj;
}
console.log(foiz(10000)); // { needs: 5000, wants: 3000, saving: 2000 }
console.log(foiz(13450)); // { needs: 6725, wants: 4035, saving: 2690 }
