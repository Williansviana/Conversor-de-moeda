const button = document.querySelector(".convert-button")
const moedaselect = document.querySelector(".moeda-select")
const valorConverte = document.querySelector(".valor-moeda-converte")
const dolarConvertido = document.querySelector(".valor-moeda-convertida")

function converteValores() {
  const inputValor = Number(document.querySelector(".input-moeda").value)

  const dolarDia = 4.98
  const euroDia = 5.39
  const bitcoinDia = 126341.60
  const dirhamDia = 1.38

  if (moedaselect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui!
    dolarConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValor / dolarDia)
  }

  if (moedaselect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui!
    dolarConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValor / euroDia)
  }

  if (moedaselect.value == "bitcoin") {
    // Se o select estiver selecionado o valor de euro, entre aqui!
    dolarConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputValor / bitcoinDia)
  }

  if (moedaselect.value == "dirham") {
    // Se o select estiver selecionado o valor de euro, entre aqui!
    dolarConvertido.innerHTML = new Intl.NumberFormat("eau", {
      style: "currency",
      currency: "DEA"
    }).format(inputValor / dirhamDia)
  }

  valorConverte.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputValor)


  valorConverte.innerHTML = new Intl.NumberFormat("en-UK",{
    style:"currency",
    currency:"UK"

  }).format(inputValor)

  

  }


// Segunda Função das imagens

function trocamoeda() {

  const moedaNome = document.getElementById("moeda-nome")
  const moedaImagem = document.querySelector(".moeda-imagem")


  if (moedaselect.value == "dolar") {
    moedaNome.innerHTML = "dolar Americano"
    moedaImagem.src = "./assest/dolar.png"
  }

  if (moedaselect.value == "euro") {
    moedaNome.innerHTML = "Euro"
    moedaImagem.src = "./assest/euro.png"
  }

  if (moedaselect.value == "bitcoin") {
    moedaNome.innerHTML = "Bitcoin"
    moedaImagem.src = "./assest/novo.png"
  }


  if (moedaselect.value == "dirham") {
    moedaNome.innerHTML = "Dirham"
    moedaImagem.src = "./assest/dirahm.png"
  }

  converteValores()

}

moedaselect.addEventListener("change", trocamoeda)

button.addEventListener("click", converteValores)