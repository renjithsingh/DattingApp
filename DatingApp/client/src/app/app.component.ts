import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  employee!:{id:number,userName:string,salary:number}[]

  newemployee!:{id:number,userName:string,salary:number}[]
  constructor( private httpclient:HttpClient){

  }
  ngOnInit(): void {





    // this.httpclient.get(`https://localhost:7012/api/Users`).subscribe(
    // {
    //   next:data=>this.users = data as any,
    //   error:error=>console.log(error),
    //   complete:()=>console.log('completed')
    // }

    this.employee=[{id:1,userName:"dev", salary:10000},{id:3,userName:"dev1", salary:20000}, {id:3,userName:"dev1", salary:20000}]

    this.employee.forEach(element => {
      element.userName
    })





  }
  title = 'client';

  users!:{id:number,userName:string}



  getData(){
    this.httpclient.get(`https://localhost:7012/api/Users`)
  }

  removeduplicate(data:{id:number,userName:string,salary:number}[],){


data.forEach(element1 => {

  data.forEach(element => {

    if (element.id!=element1.id && element.userName!=element1.userName && element.salary!=element1.salary) {
      this.newemployee.push(element)

      console.log(this.newemployee)
    }

  })
})
  }




}
