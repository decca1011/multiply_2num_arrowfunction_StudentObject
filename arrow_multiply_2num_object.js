const multiply = (a,b) => a*b ;
 console.log(multiply(3,6))

 const Student = {
    name: 'surender',
    class: 'fourth',
    age: 10,
     
    introduction () {
        console.log(" Hello im  "+ this.name + ", im in class " + this.class + " and im  " + this.age +" year old")
    }


 }

 Student.introduction();
 