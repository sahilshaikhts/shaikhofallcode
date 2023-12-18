let mouse_pos = { x: 0, y: 0 };
let blob_pos = { x: 0, y: 0 };
const blob_speed = .05;

document.addEventListener('DOMContentLoaded', () => {

  //Set mouse_pos on mousemove event
  document.addEventListener('mousemove', (e) => {
    mouse_pos = { x: e.clientX, y: e.clientY }
  });


  function MoveBlob() {
    const blob = document.getElementsByClassName('mouse-blob')[0];
    blob_pos = { x: parseInt(window.getComputedStyle(blob).left), y: parseInt(window.getComputedStyle(blob).top) };
    
    const next_pos = {
      x: blob_pos.x + (mouse_pos.x - blob_pos.x) * blob_speed,
      y: blob_pos.y + (mouse_pos.y - blob_pos.y) * blob_speed,
    }
   
    blob.style.left = next_pos.x + 'px';
    blob.style.top = next_pos.y + 'px';
   
    requestAnimationFrame(()=>MoveBlob());
  }
 MoveBlob();
});



