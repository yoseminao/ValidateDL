var a = document.getElementById('DL'), b = function(){ return a.value.replace(/\W/g,''); }, c = function() {d = b(); if(d.length > 6) { swal({text: 'Enter your birthdate MM/DD/YYYY',content: "input",button: {text: "Validate",closeModal: false,},}).then(e => {if (!e) throw null;return fetch(`https://ltoapi.pinoydev.org/license.php?a=${d}&b=${e}`);}).then(res => { return res.json(); }).then(f => { if(f.Status=="Valid") {swal(`${f.First} ${f.Last} Driver's License is valid until ${f.Expire}`);} else {swal("Driver's License is not valid.");} }).catch(g => { if(!g) swal("Please enter your birthdate in MM/DD/YYYY format");}); } else {swal("Please enter a valid Driver's License Number.");}};a.addEventListener('keyup', function(h){if(h.keyCode==13){c();}});
