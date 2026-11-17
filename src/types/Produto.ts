export type Produto = {
id: number;
nome: string;
descricaCurta: string;
descricaoLonga: string;
precoPorKg: number;
ativo: boolean;
imagem: string;
categriaIds: number[]
}