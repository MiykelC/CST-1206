function calc(operation) {

  first_op = jQuery('#op_1').val();
  second_op = jQuery('#op_2').val()
  first_op_int = parseInt(first_op);
  second_op_int = parseInt(second_op);
  hide_button = "<button class='hide'>Hide Result</button>"
  switch (operation) {
    case "plus_":
      result = first_op_int + second_op_int;
      text = first_op + " +  " + second_op + " = ";
      styled_result = "<div id='addition'>" + text + result + hide_button + "</div>";
      break;
    case "minus_":
      result = first_op_int - second_op_int;
      text = first_op + " - " + second_op + " = ";
      styled_result = "<div id='subtraction'>" + text + result + hide_button + "</div>";
      break;
    case "multi_":
      result = first_op_int * second_op_int;
      text = first_op + " * " + second_op + " = ";
      styled_result = "<div id='multiplication'>" + text + result + hide_button + "</div>";
      break;
    case "divide_":
      result = first_op_int / second_op_int;
      text = first_op + " / " + second_op + " = ";
      styled_result = "<div id='division'>" + text + result + hide_button + "</div>";
      break;
    default:
      console.log("Something bad happened!");

  }
  result = text + result;
  jQuery('#result').html(result);

  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result;
  jQuery('#history').html(new_div_content);

}
function hide_(){
  $(this).parent().remove();
}
setup = function() {
  
  jQuery('.button_').click(function (){
    calc(this.id);
  });

  jQuery('body').on("click", ".hide", hide_);

}

jQuery(document).ready(setup);
