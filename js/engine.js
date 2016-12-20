$(document).ready(function () {

var doc = new jsPDF();

// container
doc.rect(5, 2, 200, 290);
//top left rectangle
doc.rect(150, 5, 50, 20); 
// horizontal line
doc.line(10, 30, 200, 30); 
//down left rectangle
doc.rect(10, 34, 50, 50);
//right top rectangle
doc.rect(68, 34, 131, 12);
//right down rectangle
doc.rect(68, 50, 70, 11);
doc.rect(68, 64, 60, 9);
doc.rect(10, 98, 50, 10);
doc.rect(150, 98, 50, 10);
doc.line(10, 110, 200, 110);
doc.rect(10, 113, 190, 11);
doc.rect(10, 126, 100, 9);
doc.rect(10, 137, 90, 8);
doc.rect(10, 160, 60, 12);
doc.rect(150, 164, 50, 8);
doc.line(10,174,200,174);
doc.rect(10,176,190,20);
doc.rect(10,200,100,10);
doc.rect(10,212,90,10);
doc.rect(10,224,100,10);
doc.rect(10,236,90,10);
doc.line(10,270,200,270);
doc.rect(76,274,60,10);

}