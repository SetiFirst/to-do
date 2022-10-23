var numberTask = 0;
var numberTaskZ = numberTask;
const arrayTags = []; 
let tagsContent;
let tagName;
let cookieArray = [];
let string = '';
let cookies;
let a; 
var HTMLelem;

searchTrueCookie(); 

// if(document.cookie == false){}

// const removeEl = (newElem) =>{if(numberTask > 0){
// 	document.getElementById('close').addEventListener('click', () => {
// 		numberTask = document.getElementsByClassName('list').length - 1;
// 		newElem.remove();
// 	});
// }};

document.getElementById('button').addEventListener('click', () =>{
	numberTask = document.getElementsByClassName('list').length;
	numberTaskZ = numberTask;

	const inputValueZ = document.getElementById('input').value;
	const newElem = document.createElement('div');
	const inputValue = `${document.getElementById('input').value}<input type='checkbox'><button id='close' onclick='this.parentNode.remove()')>X</button>`;
	newElem.innerHTML = inputValue;

	if(inputValueZ !== ''){
		document.getElementsByClassName('list')[0].append(newElem);	
	};

	const allElem = document.getElementsByClassName('list');

	// document.cookie = `elem=${allElem[0].children[numberTask]}`;
	console.log(allElem[0].children[numberTaskZ-1].nodeName, allElem[0].children[numberTaskZ-1].innerHTML);


	synthesisCookie();
});

// Synthesis new cookie

function synthesisCookie() {
	const quanityTags = document.getElementsByClassName('list').length;

	
	for(let i = 0; i<document.getElementsByClassName('list')[0].children.length; i++){
		tagName = document.getElementsByClassName('list')[0].children[i].nodeName;
		tagsContent = document.getElementsByClassName('list')[0].children[i].innerHTML;
		arrayTags[i] = `<${tagName}>${tagsContent}</${tagName}>`;
		console.log(arrayTags[i]);
	};

	document.cookie = `saveItem=${arrayTags}`;
};




// Search true cookie

function searchTrueCookie(cookieArray,string,number,a){
	cookieArray = document.cookie.split('; ');
	number = 0;
	string = '';
	for(let i =0; i < cookieArray.length; i++){
		for(let index = 0;index <= 8;index++){
			string += cookieArray[i][index];
		};
		
		if(string == 'saveItem='){
			a = [number, cookieArray]; 
			cookies = recoverHTML(a,cookies);
			returnHtml(cookies);
		} else{
			console.log('Куки отстуствуют');
			
		};
		string = '';
		number++;
	};

	
};



function recoverHTML(a,cookies){
	cookies = a[1][a[0]].substr(9).split(',');
	return cookies;
	
}

function returnHtml(cookies){

	for (elem in cookies){
		HTMLelem = new DOMParser().parseFromString(cookies[elem], "text/html").getElementsByTagName("div")[0];
		document.getElementsByClassName('list')[0].append(HTMLelem);
	}

}