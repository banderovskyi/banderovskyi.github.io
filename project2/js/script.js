window.onload = function() {
	var step = document.querySelectorAll('.step');
	var step_simple = document.querySelector ('.step__stmple__content');
 	var step_trans = document.querySelector ('.step__trans__content');
 	var step_coll = document.querySelector ('.step__coll__content');
 	var step_content = document.querySelectorAll('.step__content');
 	var step_one = document.querySelector('.step__one');
	var step_two = document.querySelector ('.step__two');
	var step_three = document.querySelector ('.step__three');
	var steps_line = document.querySelector ('.steps__line__color');
	var width = document.querySelector('#project__procent');

	for(var i = 0; i < step.length; i++){
		step[i].onmouseover = function(){
			switch (this) {
				case step_one:
					step_simple.id = 'step__show';
					step_trans.id = 'step__disable';
					step_coll.id = 'step__disable';
			 		steps_line.style.left = '0';
					break;
				case step_two:
					step_simple.id = '#step__disable';
					step_trans.id = 'step__show';
					step_coll.id = 'step__disable';
					steps_line.style.left = '30%'
					break;
				case step_three:
					step_simple.id = 'step__disable';
					step_trans.id = 'step__disable';
					step_coll.id = 'step__show';
			 		steps_line.style.left = '68%';
					break;	
				default:
					// statements_def
					break;
			}
		}
	}
}
