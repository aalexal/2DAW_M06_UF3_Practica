//inicialització d'elements
var btnCrearNouForm = document.getElementById("btnIniciCrearNouForm");
var btnFinalitzaCreacio = document.getElementById("btnFinalitzaCreacio");
var form1 = document.getElementById("creaCamp");
var form2 = document.getElementById("creaCamp2");

//Formulari afegir nom al form
var formCrearNomForm = document.getElementById("formCrearNomForm");
var inputTxtNomNouForm = document.getElementById("inputTxtNomNouForm");
var btnMostraCreaCamp = document.getElementById("btnMostraCreaCamp");

//inputs amb els diferents tipus d'inputs        
var inputNouCampTypeText = document.getElementById("inputNouCampTypeText");
var inputNouCampTypeRadio = document.getElementById("inputNouCampTypeRadio");
var inputNouCampTypeCheckbox = document.getElementById("inputNouCampTypeCheckbox");
var inputNouCampTypeSelect = document.getElementById("inputNouCampTypeSelect");
var submitNouCampType = document.getElementById("submitNouCampType");


var divSelectTypeCamp = document.getElementById("divSelectTypeCamp");
var divTypeText = document.getElementById("divTypeText");
var divTypeRadio = document.getElementById("divTypeRadio");
var divTypeCheckbox = document.getElementById("divTypeCheckbox");
var divTypeSelect = document.getElementById("divTypeSelect");
var divCreaInput = document.getElementById("divCreaInput");

//radioButton tipus de text
var typeTxt = document.getElementById("typeTxt");
var typeDigit = document.getElementById("typeDigit");
var typeEmail = document.getElementById("typeEmail");
var typeData = document.getElementById("typeData");
var typeFile = document.getElementById("typeFile");
var submitTypeText = document.getElementById("submitTypeText");

//inputs de x tipus
var inputText = document.getElementById("inputText");
var inputDigit = document.getElementById("inputDigit");
var inputEmail = document.getElementById("inputEmail");
var inputData = document.getElementById("inputData");
var inputFile = document.getElementById("inputFile");
var btnAcceptaTipusText = document.getElementById("acceptaValorText");

//inputs de tipus radio button
var btnQuantitatRadio = document.getElementById("btnQuantitatRadio");
var quantitatRadioButtons = document.getElementById("quantitatRadioButtons");

//inputs de tipus checkbox
var btnQuantitatCheckbox = document.getElementById("btnQuantitatCheckbox");
var txtQuantitatCheckbox = document.getElementById("txtQuantitatCheckbox");

//inputs de tipus select
var txtQuantitatSelect = document.getElementById("txtQuantitatSelect");
var btnQuantitatSelect = document.getElementById("btnQuantitatSelect");

//nou camp a crear      
var nouCampSelect = document.createElement("select");


var formNouForm;
var nouForm;

var cont = 0;
var setted = false;

//esdeveniments
btnIniciCrearNouForm.addEventListener("click", crearFormulari);
btnFinalitzaCreacio.addEventListener("click", amagaElements);
btnMostraCreaCamp.addEventListener("click", nouFormulari);
submitNouCampType.addEventListener("click", getOption);
submitTypeText.addEventListener("click", getTextOption);
btnAcceptaTipusText.addEventListener("click", crearCamp);
btnQuantitatRadio.addEventListener("click", creaRadioButton);
btnQuantitatCheckbox.addEventListener("click", creaCheckbox);
btnQuantitatSelect.addEventListener("click", creaSelect);


function crearFormulari() {
    btnFinalitzaCreacio.removeAttribute("hidden");
    formCrearNomForm.style.display = "block";
    formNouForm = document.createElement("form");
    if (btnFinalitzaCreacio.style.display === "none") {
            btnFinalitzaCreacio.style.display = "block";
        } else {
            btnFinalitzaCreacio.style.display = "none";
        }
}

function nouFormulari() {
    //TODO     falta hacer control sobre id
    //formNouForm = document.createElement("form");
    formNouForm.setAttribute("id", inputTxtNomNouForm.value);
    formNouForm.setAttribute("border", "2px solid #f44336");
    

    if (inputTxtNomNouForm.value != "") {
        if (divSelectTypeCamp.style.display === "none") {
            divSelectTypeCamp.style.display = "block";
            //document.body.appendChild(nouForm);
        }
    } else {
        divSelectTypeCamp.style.display = "none";
        alert("Introdueix un nom per al formulari!")
    }
    
}

function getOption() {
    //mostrem formulari de selecció de tipus de text
    if (inputNouCampTypeText.checked) {
        if (divTypeText.style.display === "none") {
            divTypeText.style.display = "block";
        }
    } else if (inputNouCampTypeRadio.checked) {
        if (divTypeRadio.style.display === "none") {
            divTypeRadio.style.display = "block";
        }
    } else if (inputNouCampTypeCheckbox.checked) {
        if (divTypeCheckbox.style.display === "none") {
            divTypeCheckbox.style.display = "block";
        }
    } else if (inputNouCampTypeSelect.checked) {
        if (divTypeSelect.style.display === "none") {
            divTypeSelect.style.display = "block";
        }
    }
}
function getTextOption() {
    acceptaValorText.removeAttribute("hidden");
    inputText.removeAttribute("hidden");

}

function crearCamp() {
    var nouCampForm = document.createElement("input");
    if (inputNouCampTypeText.checked && typeTxt.checked) {
        nouCampForm.setAttribute("type", "text");
    } else if (inputNouCampTypeText.checked && typeDigit.checked) {
        nouCampForm.setAttribute("type", "number");
    } else if (inputNouCampTypeText.checked && typeEmail.checked) {
        nouCampForm.setAttribute("type", "email");
    } else if (inputNouCampTypeText.checked && typeData.checked) {
        nouCampForm.setAttribute("type", "date");
    } else if (inputNouCampTypeText.checked && typeFile.checked) {
        nouCampForm.setAttribute("type", "file");
    }
    //nouForm.appendChild(nouCampForm);

    var lblNouInput = document.createElement("label");

    lblNouInput.textContent = inputText.value + ": ";

    formNouForm.appendChild(lblNouInput);
    formNouForm.appendChild(nouCampForm);
    formNouForm.setAttribute("style", "position:relative");
    //setFormName();
    document.body.appendChild(formNouForm);

    limpiaPantalla();
}

function limpiaPantalla() {
    divSelectTypeCamp.style.display = "none";
    divTypeText.style.display = "none";
    divCreaInput.style.display = "none";
    divTypeRadio.style.display = "none";
    divTypeCheckbox.style.display = "none";
    inputText.style.display = "none";
    form2.style.display = "none";
    if (typeCh) {
        
    }
}

function creaRadioButton() {
    var quantitat = quantitatRadioButtons.value;
    //inputNouForm.value;

    var div = document.createElement("div");
    div.setAttribute("id", "divRadio");
    

    for (var i = 0; i < quantitat; i++) {
        var espai = document.createElement("br");
        var opRadi = document.createElement("input");
        var txtOpRadi = document.createTextNode(prompt("Introdueix valor del Radio Button " + (i + 1)));
        var lblTxtRadi = document.createElement("label");

        lblTxtRadi.appendChild(txtOpRadi);
        div.appendChild(lblTxtRadi);
        div.insertBefore(opRadi, lblTxtRadi);
        if (i !== 0) {
            div.insertBefore(espai, opRadi);
        }

        formNouForm.appendChild(div);
        formNouForm.setAttribute("style", "position:relative");
        //setFormName();
        opRadi.setAttribute("type", "radio");
        opRadi.setAttribute("id", "op" + cont + "-" + i);
        opRadi.setAttribute("name", "campRadi");
        opRadi.setAttribute("value", txtOpRadi);

        document.body.appendChild(formNouForm);
    }
    
    cont++;
    limpiaPantalla();
}

function creaCheckbox() {
    var quantitat = txtQuantitatCheckbox.value;

    var div = document.createElement("div");
    div.setAttribute("id", "divCheckbox");

    for (var i = 0; i < quantitat; i++) {
        var espai = document.createElement("br");
        var inputCheckbox = document.createElement("input");
        var txtInputCheckbox = document.createTextNode(prompt("Introdueix valor del Checkbox " + (i + 1)));
        var lblTxtCheckbox = document.createElement("label");

        lblTxtCheckbox.appendChild(txtInputCheckbox);
        div.appendChild(lblTxtCheckbox);
        div.insertBefore(inputCheckbox, lblTxtCheckbox);
        if (i !== 0) {
            div.insertBefore(espai, inputCheckbox);
        }

        formNouForm.appendChild(div);
        formNouForm.setAttribute("style", "position:relative");
        //setFormName();
        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.setAttribute("id", "checkbox" + cont + "-" + i);
        inputCheckbox.setAttribute("name", "campRadi");
        inputCheckbox.setAttribute("value", txtInputCheckbox);

        document.body.appendChild(formNouForm);
    }
    cont++;
    limpiaPantalla();
}

function creaSelect() {
    var quantitat = txtQuantitatSelect.value;
    var div = document.createElement("div");
    div.setAttribute("id", "divSelect" + cont);

    var inputSelect = document.createElement("select");
    for (var i = 0; i < quantitat; i++) {
        var optionSelect = document.createElement("option");
        var txtInputSelect = prompt("Introdueix valor del Select " + (i + 1));
        optionSelect.setAttribute("value", txtInputSelect);
        optionSelect.text = txtInputSelect;
        inputSelect.appendChild(optionSelect);
    }
    div.appendChild(inputSelect);
    formNouForm.appendChild(div);
    formNouForm.setAttribute("style", "position:relative");
    //setFormName();
    document.body.appendChild(formNouForm);
    
    cont++;
    limpiaPantalla();
}

function amagaElements(){
    if (btnFinalitzaCreacio.style.display === "none") {
            btnFinalitzaCreacio.style.display = "block";
    } else {
        btnFinalitzaCreacio.style.display = "none";
    }
    
    if (formCrearNomForm.style.display === "block") {
        formCrearNomForm.style.display = "none";
    }
    if (divTypeSelect.style.display == "block") {
        divTypeSelect.style.display = "none";
    }
    if (divTypeText.style.display === "block") {
        divTypeText.style.display = "none";
    }
    if (divTypeRadio.style.display === "block") {
        divTypeRadio.style.display = "none";
    }
    if (divTypeCheckbox.style.display === "block") {
        divTypeCheckbox.style.display = "none";
    }
    if(divSelectTypeCamp.style.display == "block"){
        divSelectTypeCamp.style.display = "none";
    }
    
}
function setFormName (){
    if (!setted) {
        var lblName = createTextNode(inputTxtNomNouForm.value);
        formNouForm.appendChild(lblName);
    }
    setted = true;
}