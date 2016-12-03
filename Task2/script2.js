
let objStudent = {
  name: 'Sasha',
  surname: 'Ivanov',
  age: 25,
  courses: [{descrCourse: 'JS', nameProf: 'Slesarev', duration: 6, status:0.2,marks: [5,4,5]},
            {descrCourse: 'Java', nameProf: 'Alekseev', duration: 12, status:0.4,marks: [5,4,5,5]}],
getFullName(){
  return `${this.name} ${this.surname}`;
  },
 getAge() {
   return `${this.age} years old!` ;
 },  
 getCourses() {
  return this.courses.map(function(item){return item.descrCourse}).toString();
}, 
 addNewCourse(course, prof, duration) {
   this.courses.push({descrCourse: course, nameProf: prof, duration: duration});
   return this.courses;
 }, 
getAvarageMarkByCourse() {
  let avarage = 0;
  for (let i = 0; i < this.courses.length; i++){
  console.log(this.courses[i].descrCourse);
    if (this.courses[i].descrCourse === 'JS'){
      if ('marks' in this.courses[i]){
      let num = 0;
      this.courses[i].marks.forEach(item => num += item);
      avarage = num/this.courses[i].marks.length;
    } else return null;
    }
}
return avarage;
},

getAvarageMark(){
  
  let arrOfMarks = [];
  let num = 0;
  for (let i = 0; i < this.courses.length; i++){
  console.log(this.courses[i].descrCourse);
      if ('marks' in this.courses[i]){
      arrOfMarks = arrOfMarks.concat(this.courses[i].marks); 
        console.log(arrOfMarks);
      }
  }
   arrOfMarks.forEach(item => num += item);
  return num/arrOfMarks.length;            
},
  addMark(course, mark){
     for (let i = 0; i < this.courses.length; i++){
    
    if (this.courses[i].descrCourse === course){
      console.log(this.courses[i].descrCourse);
      if ('marks' in this.courses[i]){
    this.courses[i].marks.push(mark);
        return arr =  this.courses[i].marks;    
      } 
      }
    }
return 'This course did not find!';
  }, 
  
 addProgress(course,hours){
   
   for (let i = 0; i < this.courses.length; i++){
    
    if (this.courses[i].descrCourse === course){
      if (this.courses[i].duration <= 0){
          return 'Wrong information!!!!';
      }
        let progress = (10/this.courses[i].duration*hours)/10;
        let sumStatus = this.courses[i].status + progress;
        if (sumStatus > 1) {return 'Incorrect hours';}
        this.courses[i].status = sumStatus;
        return  this.courses[i].status; 
         } 
       }
   return 'Wrong information!!!!';
 },
  
 getProgress(course){

 for (let i = 0; i < this.courses.length; i++){
    
    if (this.courses[i].descrCourse === course){
      console.log(this.courses[i].descrCourse);
      if (this.courses[i].duration <= 0 || this.courses[i].status <= 0){
         return 'Progress is not defined';
         }
     let progress = this.courses[i].status * 100;
        return `${progress.toFixed()}%`;
      } 
    }
  return 'Course not found!'
 }, 
  
};

console.log(objStudent);
console.log(objStudent.getFullName());
console.log(objStudent.getAge());
console.log(objStudent.getCourses());
console.log(objStudent.addNewCourse('PHP', 'Shmakov', 6));
console.log(objStudent.getAvarageMarkByCourse());
console.log(objStudent.getAvarageMark());
console.log(objStudent.addMark('Java', 5));
console.log(objStudent.addProgress('JS', 3));
console.log(objStudent.getProgress('JS'));