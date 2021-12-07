const People = {
    id: 101,
    name: 'sheikh',
    amount: 5000,
    isRich: false,
    major: 'Math',
    subject: ['english', 'social-science', 'calculas'],
    bestFriends: {
        id: 102,
        name: 'kuddus',
        major: 'Math',
        subject: ['english', 'social-science', 'calculas'],
    },
    testExam: function() {
        console.log(this.name, 'your exam coming soon');
    },
    passedExam: function (expense, tips) {
        this.amount = this.amount - expense - tips;
        return this.amount; 
    },
}
People.testExam()
const remaining1 = People.passedExam(900, 100)
const remaining2 = People.passedExam(900, 50)
console.log(remaining1, remaining2);