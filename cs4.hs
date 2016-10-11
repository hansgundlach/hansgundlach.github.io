




--Square a number so that it is equal to itself

writeDig  = [x | x <- [10..100],(x^2) `mod` 100 == x,x^2 < 1000]
writeSquare = [x^2| x <- [10..100],(x^2) `mod` 100 == x,x^2 < 1000]
