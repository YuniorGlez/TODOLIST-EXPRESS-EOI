

module.exports = {
    getID :  getRandomID,
    yesNiggasSync : hasNiggaInDaTextSync,
    yesNiggasAsync : hasNiggaInDaTextAsync
}

function getRandomID() {
    return Math.random().toString(36).substring(7);
}
function hasNiggaInDaTextAsync(todo ) {
    return new Promise( ( resolve , reject ) => {
        resolve(todo.text.toLowerCase().includes('nigga'));
    });
}
function hasNiggaInDaTextSync(todo ) {
    return todo.text.toLowerCase().includes('nigga');
}