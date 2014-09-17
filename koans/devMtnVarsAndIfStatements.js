describe("About variables and If Statments", function() {
  it("should create a variable called myFirstVariable and set it equal to 1", function() {
    var myFirstVariable = 1;
    expect(myFirstVariable).toBe(1);
  });

  it("should understand if statements", function () {
    var message = 'my first if statement';
    var answer;

    if(message === 'my frist if statement'){
      answer = 'A';
    } else if (message === 'my first if statment'){
      answer = 'B';
    } else if(message === 'my first if statement'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');
  });

  it("should understand equality operators", function () {
    var answer;
    var favoriteNumber = '33';
    
    if(favoriteNumber === 33){
      answer = 'A';
    } else if(favoriteNumber == 33){
      answer = 'B';
    } else if(favoriteNumber === '33'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('B');

    // 1x '=' sets it to 33, but 2x '==' doesn't differentiate between a string or a set value.
  });

  it("should understand equality operators, again", function () {
    var answer;
    var favoriteNumber = 50;
    
    if(favoriteNumber === '50'){
      answer = 'A';
    } else if(favoriteNumber === 40){
      answer = 'B';
    } else if(favoriteNumber = 12){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');

    // because it reset the favoriteNumber to 12.
  });

  it('should understand adding strings', function(){
    var num = '3';
    expect(num + 8).toBe('38');

    // the number '3' + 8, is stimply putting the numbers next to each other instead of actually addin them.
  });

  it('should understand adding strings, again', function(){
    var num = '1';
    expect(num + 8).toBe('18');

    // again '1' + 8, is putting the numbers next to each other instead of adding them.
  });
});



