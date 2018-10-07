noughts and crosses

b1v

b2v

b3v

b1h

b2h

b3h

b1c

b2c

arr with all potential wins

blocks drop out when they include two different markings - how to evaluate this? true false ?

/*****

if 0 or 1 mark, don’t evaluate

if two set marks, drop if total == 1

//less than 3 marks will always return NaN.

*******/

if three marks, drop if total == 1 or total == 2

as soon as total == 3 or total == 0 in at least one full block, announce win. 

if all blocks go, announce tie

--------------

object input block with 9 writeable squares / vars (must be declared but not initialised so as to return undefined) || 9 objects with isset property and value property

 

counter incrementing on click: even numbered clicks result in false/nought and odd numbered clicks true/cross (clicks or keypresses?)

squares once initialised are no longer writeable

each var broadcasts change to blocks containing it? block sums itself up and when all squares set && total == 3 or total == 0 announces win for 3 or 0

make the elements buttons so they can be clicked or submitted with enter 

button submitted will then get a value of 0 or x 

and 

when win draw a line through winning row?

[http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

[http://www.dofactory.com/javascript/observer-design-pattern](http://www.dofactory.com/javascript/observer-design-pattern)

[https://carldanley.com/js-observer-pattern/](https://carldanley.com/js-observer-pattern/)

[http://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked](http://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked)