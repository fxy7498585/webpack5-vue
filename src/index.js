async function aa () {
    console.log('aaa')
}
async function aa2 () {
    await aa()
    setTimeout(() => {
        console.log('2222222')
    }, 1000)
}

aa2()
