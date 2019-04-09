function TicTacToe(selector) {
var y = document.querySelector(selector),
	board = y.querySelector('.board'),
		reset_btn = y.querySelector('.resetB');
		
    
  
    var grid_size = 3,
        moves = 0,
        data = {};
    
  
      
    init();
    

    reset_btn.addEventListener('click', init);

    function paint() {
        var table = '<table>';
        for (var i = 0; i < grid_size; i++) {
            table += '<tr>';
            for (var j = 0; j < grid_size; j++) {
                table += '<td row="' + i + '" column="' + j + '"></td>';
            }
            table += "</tr>";
        }
        board.innerHTML = table;

      var columns =board.getElementsByTagName('td');
        for (i = 0; i < columns.length; i++) {
			
            columns[i].addEventListener('click', mark);
        }

    }
    
  
        
        

    function mark(x) {

        var td = x.target;

        if (td.innerHTML) {
            return;
        }

        var row = td.getAttribute('row'),
            column = td.getAttribute('column');

        var current_mark = moves % 2 === 0
            ? 'X'
            : 'O';

        td.innerHTML = current_mark;
        td.classList.add(current_mark);
        data[row + '' + column] = current_mark;

        moves++;

        setTimeout(function() {
            if (dub(current_mark)) {
                alert(current_mark + ' won the game!');
               
                empty();
            } else if (moves === Math.pow(grid_size, 2)) {
                alert("It's a draw !");
                empty();
            }
        }, 200);

    }

    function dub(mark) {

        var vertical_count = 0,
            horizontal_count = 0,
            right_to_left_count = 0,
            left_to_right_count = 0;

        for (var i = 0; i < grid_size; i++) {

            vertical_count = 0;
            horizontal_count = 0;

            for (var j = 0; j < grid_size; j++) {

                if (data[i + '' + j] == mark) {
                    horizontal_count++;
                }

                if (data[j + '' + i] == mark) {
                    vertical_count++;
                }

            }

            if (data[i + '' + i] == mark) {
                left_to_right_count++;
            }

            if (data[(grid_size - 1 - i) + '' + i] == mark) {
                right_to_left_count++;
            }

            if (horizontal_count == grid_size || vertical_count == grid_size) {
                return true;
            }

        }

        if (left_to_right_count == grid_size || right_to_left_count == grid_size) {
            return true;
        }

        return false;
    }

    function empty() {
        moves = 0;
        paint();
        data = {};
    }

    function init() {
        empty();
       
    }
    
    

}
