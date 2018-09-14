function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer)
  var lineCount = currentLine.length
  var greeting = `Welcome, ${newCustomer}. You are number ${lineCount} in line.`
  
  return greeting
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var firstPersonInLine = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${firstPersonInLine}.`
}

