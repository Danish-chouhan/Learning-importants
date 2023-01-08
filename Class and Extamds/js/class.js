class names{
    constructor(son,father){
        this.parameter1 = son
        this.parameter2 = father
        document.write(`Hlw my name is ${this.parameter1}.and my Father name is ${this.parameter2}`)
    }
ageAndClass(age,clas){
    this.parameter3 = age
    this.parameter4 = clas
    document.write(`and my age is ${this.parameter3}.And I Am Studing in class ${this.parameter4}`)
}
}
const calling = new names("Danish-chouhan","Imran-chouhan" + "<br>")
calling.ageAndClass(17,"11th" + "<br>")

class inher extends names{
}
const calling1 = new inher("Hamza-chouhan","Imran-chouhan")
calling.ageAndClass(11,"2nd")