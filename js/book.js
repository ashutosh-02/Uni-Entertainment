const row = document.querySelector(".row");
const bookArray = allRomance;

function loadBook(indexNumb){
    musicName.innerText = allRomance[indexNumb - 1].name;
    musicArtist.innerText = allRomance[indexNumb - 1].artist;
    musicImg.src = `asstes/images/product/${allRomance[indexNumb - 1].src}.jpg`;
    mainAudio.src = `assets/pdf/${allRomance[indexNumb - 1].src}.pdf`;
  }
const divTag = row.querySelector(".book");

for (let i = 0; i < bookArray.length; i++) {

    let image = `assets/data/books/images/${bookArray[i].img}.jpg`;
    let bookPDF =  `assets/data/books/pdf/${bookArray[i].src}.pdf`;

    let book = `<div class="col-md-12">
                    <div class="featured-item book" id="${i + 1}"> 
                         <a href="${bookPDF}"><img src="${image}"></a>
                        <div class="down-content">
                            <h4>${bookArray[i].name}"</h4>
                            <h6>"${bookArray[i].category}"</h6>
                        </div>
                    </div>
                </div>`;
  divTag.insertAdjacentHTML("beforeend", book );
}