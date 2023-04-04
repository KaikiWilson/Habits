const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("kaikiwilson@firstsite", JSON.stringify(nlwSetup.data))
}

/*
const data = {
  run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  takePills: ["01-03"],
  journal: ["01-02"],
}*/

const data = JSON.parse(localStorage.getItem("kaikiwilson@firstsite")) || {}
nlwSetup.setData(data)
nlwSetup.load()
