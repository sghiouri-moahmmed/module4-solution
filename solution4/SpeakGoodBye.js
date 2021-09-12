var list = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var list1 = [];
for ( var i in list ) {
    list1[i] = list[i].toLowerCase()
    if (list1[i].startsWith("j") == false ){
      console.log("Hello " + list1[i]);
    };
      
  };
