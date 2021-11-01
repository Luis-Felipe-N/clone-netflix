a) 
leia(n1, n2, n3);

soma <- n1 + n2 + n3

escreva(soma)


b) 
leia(n1, n2);

media <- (n1 + n2) / 2

escreva(media)


c) 
leia(n1, n2, n3);

media <- (n1 + n2 + n3) / 3;

se ( media > 5 )
    escreva('Sua média é maior que 5 >' + media);
senao ( media <= 5 )
    escreva('Sua média não é maior que 5 <' + media);
fimse;


d) 
leia(n1);

escreva('O sucessor de ' + n1 + 'é' + (n1 + 1))
escreva('O antecessor de ' + n1 + 'é' + (n1 - 1))


e)
leia(n1)
escreva('A tercça parte de' + n1 + 'é' + (n1 / 3) )


f)
leia(n1, n2)

se (n1 < 0 ou n2 < 0)
    escreva('ERRO, não é possivel fazer divisão por zero!')
senao 
    escreva('A divisão é ' + (n1 / n2))