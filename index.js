brd = document.getElementById('brd')
resetButton = document.getElementById('reset')

function main() {
    let size = prompt("Default size is 16x16\nChoose the grid size: ")
    if (size) {
        initBoard(size)
    }
    else {
        initBoard()
    }
    resetButton.addEventListener('click', reset)
}

function initBoard(size = 16) {
    let tileNum = 1
    for (let i = 0; i < size**2; i++) {
        tile = document.createElement("div")
        tile.setAttribute("id", "tile" + tileNum++)
        tile.style.width = "" + (100 * (1/size)) + '%'
        tile.addEventListener('mouseover', draw)
        
        brd.appendChild(tile)
    }
}

function draw(e) {
    e.target.style.backgroundColor = "black"
}

function reset()
{
    location.reload()
}

main()