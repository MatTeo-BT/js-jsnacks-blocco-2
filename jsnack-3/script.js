function word (firstWord, secondWord){
    const first = prompt (`type a word`);
    const second = prompt (`type another word`);
    if (firstWord < secondWord){
        console.log(second)
    } else if (firstWord > secondWord){
        console.log(first)
    } else (firstWord == secondWord)
        console.log(first, second)
    
}