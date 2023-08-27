let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
         //1
          let ans=[]
          ans=studentRecords.map((e)=>e.name.toUpperCase())
          console.log(ans)

       //2
           ans=studentRecords.filter(e=>e.marks>50)
          console.log(ans)

        //3
        ans = studentRecords.filter(stu => stu.id > 120 && stu.marks>50)
        console.log(ans)

        //4
       ans = studentRecords.filter(stu => stu.id > 120 && stu.marks>50).reduce((sum,curr) => sum + curr.marks ,0)
          console.log(ans)


        //5
        ans=studentRecords.filter(e=>e.marks>50).map(e=>e.name)
          console.log(ans)
        

          //6
          ans = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
          console.log(ans)

          //7
          ans=studentRecords.map(function(stu){
            if(stu.marks < 50){
                stu.marks += 15;}
            return stu;
          }).filter(stu => stu.marks > 50).reduce((sum,curr) => sum+curr.marks, 0);
          console.log(ans)

          //8
          let student=[ {name: 'John', sclass: "VI", rollno : 1234 },
          {name: 'Baba', sclass:  "VI", rollno : 2213 },
          {name: 'yogesh', sclass: "VI", rollno : 4115 },
          {name: 'Chandhru', sclass:  "VI", rollno : 1175 } ,
          {name: 'Vicky', sclass:  "VI", rollno : 4546 },
          {name: 'Ram', sclass:  "VI", rollno : 1122 }] 
          console.log(student)
