const data = []

const depense = document.getElementById("depense")
const montant = document.getElementById("montant")
const f1 = document.getElementById("f1")

f1.addEventListener("submit", (e) => {
  e.preventDefault()
  const existingItem = data.find((item) => item.depense === depense.value)
  if (existingItem) {
    existingItem.montant = montant.value
    alert("Depense mise a jour")
  } else {
    data.push({
      depense: depense.value,
      montant: montant.value
    })
    alert("Depense ajoutee")
  }
  console.log(data)
  depense.value = ""
  montant.value = ""
})
