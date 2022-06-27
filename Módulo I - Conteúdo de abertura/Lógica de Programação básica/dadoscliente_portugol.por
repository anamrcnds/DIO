programa
{
	funcao inicio()
	{
		cadeia cliente [3][3] = {{"João", "São Paulo", "(11) 999 5241"}, 
						   {"Maria", "Ribeirão Preto", "(16) 999 8596"},
						   {"Ana", "Manaus", "(92) 999 8574"}}

		inteiro contador = 0

		faca{
			escreva("Nome: " + cliente[contador][0] + " - Cidade: " + cliente[contador][1] + " - Tel.: " + cliente[contador][2] + "\n")
			contador++
		}enquanto(contador <= 2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 12; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */