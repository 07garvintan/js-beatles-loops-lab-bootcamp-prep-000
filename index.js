// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
    for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
}

function johnLennonFacts(facts){
   var i = 0
   while (i < facts.length) {
     facts[i] = facts[i] + "!!!"
     i +=1
   }
   return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n
  } while (n < 15)
    
}