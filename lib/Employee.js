// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name,id,email,role){
    this.name=name;
    this.id=id;
    this.email=email;
    this.role= role || 'Employee'
  }
  getName(){
    return this.name;
  }
  getId(){
    return this.id
  }
  getEmail(){
    return this.email
  }
   getRole(){
    //  returns an employee
    return this.role
   }


}


module.exports=Employee;

