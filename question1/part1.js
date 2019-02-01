function printMessage (options) {
  // Improve this code with some ES6 features. In particular:
  // - How can we avoid writing `options.` so often?
  // - Is there a better way to format strings than with concatenation?

  const severity = options.severity || 'info'

  const message = options.value >= 100
    ? options.value + ' is a big number!'
    : 'The number ' + options.value + ' is small!'

  console[severity]('[' + severity + '] ' + message)
}

printMessage({
  severity: 'warn',
  value: 200
})

printMessage({
  value: 50
})
