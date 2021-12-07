class TeamMember {
    name;
    address = 'bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    supportMember;
    designation = 'support web dev';
    constructor (name, address, support) {
        super(name, address)
        this.supportMember = support;
    }
    supportSession(support){
        console.log(this.name, 'start your session', support);
    }
}
class studentCare {
    careBuild;
    designation = 'support web dev student care';
    constructor (name, address, care) {
        super( name, address );
        this.careBuild = care;
    }
    buildStudent(student) {
        console.log(this.name, 'Build our student', student);
    }
}

class NeptuneApp extends TeamMember {
    createApp;
    designation = 'support web dev app neptune';
    constructor (name, address, create) {
        super(name, address, create)
        this.createApp = create;
    }
    releaseApp(version) {
        console.log(this.name, 'release naptune app version', version);
    }
}
const jhankar = new NeptuneApp('Jhankar Mahbub', 'USA')
// const alia = new StudentCare('Alia Bhatt', 'Mmubai')
const safhik = new Support('shafik', 'Dubai');
jhankar.releaseApp(0.2);
safhik.studentCare('')
console.log(safhik);