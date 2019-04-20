
class dog {
  breed:String;
  color:String;
  weight: number;
  height: number;
  age: number;
  food: number;
  hair: String;

  bark(){

  }

  walk(distance: number){

   // var weight = this.weight;
    var newWeight =  this.weight  - (this.weight * distance/1000);
  //  var newWeight =  this.weight  - (this.weight * distance/1000);
    this.weight = newWeight;
  }

  eat(){

  }

  sleep(){

  }
  grow(){

  }
  weights(){

  }

  ages(){

  }


}
