$(document).ready(function(){
	// to hide and show password
	var $line2=$(".pwd2");
	var $eye=$(".eye-icon");
	$eye.click(function(){
		$line2.toggleClass("hide");
		$eye.toggleClass("hide");
	});

	// Modification of user information
	var $editInfo=$(".edit-info");
	$editInfo.click(function(){
		$(".test").toggleClass("hide");
	});
	var $editGroup=$(".edit-group");
	
	var $editContact=$(".edit-contact");


})