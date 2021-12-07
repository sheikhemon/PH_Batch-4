class Support {
    name;
    role = 'support web dev';
    designation = 'bd';
    constructor(name, designation) {
        this.name = name;
        this.designation = designation;
    }
    supportSession(){
        console.log('start your session');
    }
}
const safhik = new Support('shafik', 'Dubai');
safhik.supportSession();
console.log(safhik);