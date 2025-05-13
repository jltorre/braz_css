/* BG IMAGES SNAP-FEATURES */
// Iterar sobre los divs que tienen IDs que siguen el patrón snap-feature-
for (var i = 1; i <= 3; i++) {
    // Obtener la imagen del div actual
    var currentImg = document.querySelector('#snap-feature-' + i + ' .snap-feature-image-wrap img');
    
    // Verificar si se encontró la imagen
    if (currentImg) {
      var imgURL = currentImg.src;
      
      // Establecer la imagen de fondo para el div actual
      document.querySelector('#snap-feature-' + i + ' .snap-feature').style.backgroundImage = 'url("' + imgURL + '")';

      currentImg.remove();
    }
}
/* COLLAPSE MENU COURSE */
var colnine = document.querySelector("#snap-course-wrapper > .row > .col-lg-9");
if (colnine !== null) {
  var row = document.querySelector("#snap-course-wrapper > .row");
  row.classList.add("sidebar-wrapper");
    var newDiv = document.createElement("div");
  newDiv.id = "collapse-left-menu";
  newDiv.innerHTML = '<svg viewBox="0 0 100 80" width="30" height="40" id="yui_3_17_2_1_1640072003920_657"><rect width="100" height="10" rx="4"></rect><rect y="30" width="100" height="10" rx="4" id="yui_3_17_2_1_1640072003920_656"></rect><rect y="60" width="100" height="10" rx="4"></rect></svg>';
  colnine.insertBefore(newDiv, colnine.firstChild);

  var collapseMenu = document.getElementById("collapse-left-menu");
  collapseMenu.addEventListener("click", function(e) {
    e.preventDefault();
    row.classList.toggle("toggled");
  });
}
/* PROGRAM IMAGE */
const programImages = document.querySelectorAll('.programbox .programimage');

programImages.forEach(programImage => {
  const program = programImage.closest('.programbox');
  const programContent = program.querySelector('.content');
  programContent.classList.add('row');
  programContent.classList.add('p-2');
  const programSummary = programContent.querySelector('.summary');
  programSummary.classList.add('col-lg-8');
  const imageProgram = programImage.querySelector('img');
  const newImgBlockDiv = document.createElement('div');
  newImgBlockDiv.classList.add('col-lg-4');
  const newImgDiv = document.createElement('div');
  newImgDiv.classList.add('newprogramimage');
  newImgDiv.style.backgroundImage = `url('${imageProgram.src}')`;
  newImgBlockDiv.appendChild(newImgDiv);
  programContent.appendChild(newImgBlockDiv);
  programImage.remove();
});
