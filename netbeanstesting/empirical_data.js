/**
 *	Created with MAX's HTML Beauty++ 2004
 *	empirical_data.js
 *	@author Jordi Cuadros
 *	@date August 24 2004
*/

function newCompound() {
	var Cmd=new Array()
	var selectedCompound=intRandom(0,13);
	
	if(arguments.length>0 && isFinite(arguments[0])){
		selectedCompound=parseInt(arguments[0]);
	}
	
	switch (selectedCompound) {
	case 0:
		Cmd[0]= new NodeElement("Cu", 3);
		Cmd[1]= new NodeElement("As", 1);
		Cmd[2]= new NodeElement("S", 4);
		break;
	case 1:
		Cmd[0]= new NodeElement("Co", 3);
		Cmd[1]= new NodeElement("Ni", 1);
		Cmd[2]= new NodeElement("As", 10);
		break;
	case 2:
		Cmd[0]= new NodeElement("Ni", 3);
		Cmd[1]= new NodeElement("Co", 1);
		Cmd[2]= new NodeElement("As", 11);
		break;
	case 3:
		Cmd[0]= new NodeElement("Co", 3);
		Cmd[1]= new NodeElement("Fe", 1);
		Cmd[2]= new NodeElement("As", 8);
		break;
	case 4:
		Cmd[0]= new NodeElement("Co", 3);
		Cmd[1]= new NodeElement("Fe", 1);
		Cmd[2]= new NodeElement("As", 4);
		break;
	case 5:
		Cmd[0]= new NodeElement("Cu", 1);
		Cmd[1]= new NodeElement("As", 2);
		Cmd[2]= new NodeElement("O", 4);
		break;
	case 6:
		Cmd[0]= new NodeElement("Fe", 2);
		Cmd[1]= new NodeElement("As", 4);
		Cmd[2]= new NodeElement("O", 9);
		Cmd[3]= new NodeElement("H", 1);
		break;
	case 7:
		Cmd[0]= new NodeElement("Ca", 5);
		Cmd[1]= new NodeElement("As", 3);
		Cmd[2]= new NodeElement("O", 13);
		Cmd[3]= new NodeElement("H", 1);
		break;
	case 8:
		Cmd[0]= new NodeElement("Zn", 1);
		Cmd[1]= new NodeElement("As", 2);
		Cmd[2]= new NodeElement("O", 4);
		break;
	case 9:
		Cmd[0]= new NodeElement("Ni", 2);
		Cmd[1]= new NodeElement("Fe", 1);
		Cmd[2]= new NodeElement("As", 2);
		break;
	case 10:
		Cmd[0]= new NodeElement("Cu", 6);
		Cmd[1]= new NodeElement("As", 4);
		Cmd[2]= new NodeElement("S", 9);
		break;
	case 11:
		Cmd[0]= new NodeElement("Cu", 6);
		Cmd[1]= new NodeElement("Zn", 3);
		Cmd[2]= new NodeElement("As", 4);
		Cmd[3]= new NodeElement("S", 12);
		break;
	case 12:
		Cmd[0]= new NodeElement("Ca", 1);
		Cmd[1]= new NodeElement("As", 1);
		Cmd[2]= new NodeElement("O", 4);
		Cmd[3]= new NodeElement("H", 1);
		break;
	case 13:
		Cmd[0]= new NodeElement("Fe", 1);
		Cmd[1]= new NodeElement("As", 1);
		Cmd[2]= new NodeElement("S", 1);
		break;
	}
	return Cmd;
}

function NodeElement(symbol, moles) {
	var thiselement=new Element(symbol);
	this.specie=thiselement.specie;
	this.weight=thiselement.weight;
	this.moles=moles;
}

/*
* Empty constructor of the element object
*/
function Element() {
 	this.specie="";
 	this.weight=0;
}


function Element(symbol) {
	this.specie=symbol;
	switch (symbol) {
	case "Cu":
		this.weight=63.546;
		break;
	case "S":
		this.weight=32.065;
		break;
	case "As":
		this.weight=74.92160;
		break;
	case "Fe":
		this.weight=55.845;
		break;
	case "O":
		this.weight=15.9994;
		break;
	case "H":
		this.weight=1.00794;
		break;
	case "Ca":
		this.weight=40.078;
		break;
	case "Ni":
		this.weight=58.6934;
		break;
	case "Co":
		this.weight=58.933200;
		break;
	case "Zn":
		this.weight=65.409;
		break;

	}	
}


