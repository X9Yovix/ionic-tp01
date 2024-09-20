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
    item = {
      depense: depense.value,
      montant: montant.value
    }
    data.push(item)
    appendDataToTable(item)
    alert("Depense ajoutee")
  }
  
  depense.value = ""
  montant.value = ""
})

const appendDataToTable = (item) => {
  const tbody = document.getElementById("tbody")
  const row = tbody.insertRow()
  const cell1 = row.insertCell(0)
  const cell2 = row.insertCell(1)
  const cell3 = row.insertCell(2)
  cell1.textContent = item.depense
  cell2.textContent = item.montant
  cell3.innerHTML = `<button class="btn btn-danger" id=${item.depense}>Delete</button>`
}
