function alphanumeric(string){
    let regex = /^[a-zA-Z0-9]+$/;
    return regex.test(string);
}