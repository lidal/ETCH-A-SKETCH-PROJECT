function createGrid(n){
	
	const body = document.querySelector('body')
	const boxSize = 1000/n;
	for(let i = 0; i<n; i++){
		const row = document.createElement('div')
		row.style.minHeight =`${boxSize}px`;
		for(let j = 0; j<n; j++){
			const element = document.createElement('div')
			element.style.width = `${boxSize}px`;
			element.style.minHeight = `${boxSize}px`
			element.style.float = "left";
			element.classList.add('element')
			//element.style.backgroundColor = "blue"
			//element.textContent = "j"
			row.appendChild(element);
		}
		body.appendChild(row)

	}
}
function listenForDraw(){
	const divs = document.querySelectorAll('div')
	divs.forEach((square)=>{
		square.addEventListener('mouseover', (e) => {
			if(e.target.className == 'element'){
				e.target.style.backgroundColor = "blue";
		}
		})
	})
}
function listenForClear(){
	const clr = document.querySelector('#clear')
	clr.addEventListener('click', (e) =>{
	const board = document.querySelectorAll('div')
	let boardSize = prompt('What resolution')
	board.forEach((square)=>{
		square.remove()
	})
	createGrid(boardSize)
	listenForDraw()
})
}

createGrid(50);
listenForDraw();
listenForClear();







