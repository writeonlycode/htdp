**Exercise 1.** Add the following definitions for `x` and `y` to DrRacket's
definitions area:

```
(define x 3)
(define y 4)
```

Now imagine that `x` and `y` are the coordinates of a Cartesian point. Write
down an expression that computes the distance of this point to the origin, that
is, a point with the coordinates `(0,0)`.

The expected result for these values is `5`, but your expression should produce
the correct result even after you change these definitions.

Just in case you have not taken geometry courses or in case you forgot the
formula that you encountered there, the point `(x,y)` has the distance

$$\sqrt(x^2 + y^2)$$

from the origin. After all, we are teaching you how to design programs, not
how to be a geometer.
