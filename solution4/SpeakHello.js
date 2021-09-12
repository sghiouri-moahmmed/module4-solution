var list = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var list1 = [];
for ( var i in list ) {
    list1[i] = list[i].toLowerCase()
    if (list1[i].startsWith("j") == true ){
      console.log("GoodBye " + list1[i]);
    };
      
  };