export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  // map de uma array com string de números já retorna o número
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

//MODELO COMPARAR HORÁRIO ATÉ DATA X
// const agora = new Date();
// const futuro = new Date("Dec 24 2021 23:59");

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// const faltam = Math.floor(diasFuturo - diasAgora);
