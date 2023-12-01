const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let map = Array.from(Array(19), () => Array(19).fill(0));

map[1][1] = 1;
map[1][2] = 2;
map[2][1] = 3;



function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.font = '20px sans-serif';



    requestAnimationFrame(Update);
}

function Update() {
    requestAnimationFrame(Update);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    let bg = new Image();
    bg.src = "background.png";
    ctx.drawImage(bg, (canvas.width-760)/2, (canvas.height-760)/2, 760, 760);
    mapDraw();
}

function mapDraw() {
    for(let x = 0; x < 19; x++) {
        for(let y = 0; y < 19; y++) {
            if(map[x][y] == 1) {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.arc(x*40 + 20 + (canvas.width-760)/2, y*40 + 20 + (canvas.height-760)/2, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
            if(map[x][y] == 2) {
                ctx.beginPath();
                ctx.fillStyle = "blue";
                ctx.arc(x*40 + 20 + (canvas.width-760)/2, y*40 + 20 + (canvas.height-760)/2, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
            if(map[x][y] == 3) {
                ctx.beginPath();
                ctx.fillStyle = "yellow";
                ctx.arc(x*40 + 20 + (canvas.width-760)/2, y*40 + 20 + (canvas.height-760)/2, 18, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

Start();