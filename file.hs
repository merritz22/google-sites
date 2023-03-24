carre [] = []
carre (x:xs) = if (x*x) `mod` 2 == 0 then [x*x] ++ carre xs else carre xs

carrepaire n = sum (carre (take n [1..]))