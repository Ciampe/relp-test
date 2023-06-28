export const pluralize = (word, count) => {
    if(count !== 1){
        return word + 's';
    }

    return word;
}