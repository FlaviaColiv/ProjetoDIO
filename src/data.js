export const language = "JavaScript";

const themes = [
  {
    name: "Variável",
  },
  {
    name: "Tipos de dados",
  },
  {
    name: "Operadores",
  },
  {
    name: "Estruturas condicionais",
  },
  {
    name: "Arrays",
  },
  {
    name: "Objetos",
  },
  {
    name: "Estrutura de repetição",
  },
  {
    name: "High order functions",
  },
  {
    name: "Functions",
  },
  {
    name: "Escopo de variáveis",
  },
  {
    name: "Assincronismos",
  },
  {
    name: "Then/Try e Catch",
  },
];

themes.forEach((theme) => {
  theme.message = 'Escreva uma documentação com exeplos de comop funcionam ${theme.name} em ${language}, seja  o mais detalhado possível, separe os exemplos por tópicos e não esqueça de exemplificar o que cada linha faz. Retorne a resposta em uma estrutura HTML para ser mostrado em tela, adicione classes do tailwind css para estilizar o conteúdo. Crie um texto longo e completo.';
});

export default themes;